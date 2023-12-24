import * as util from "./util.js"
import * as tree from "./tree.js"
import { buildAst } from './antlr.js'
import { readFileSync, readdirSync } from 'fs'
export function handler(token, ctx, context) {
    var handlers = {
        data: {},
        "const": (ctx, context) => {
            var headers = context.headers = context.headers || {}




            context.data = context.data || {}
            context.data.var = context.data.var || {}
            context.data.classes = context.data.classes || {}
            context.data.functions = context.data.functions || {}
            context.data.functionCall = context.data.functionCall || {}
            context.data.types = context.data.types || ['number', 'string', 'list', 'boolexpr', 'methodCall', 'value']
           // context.data.var.strLists = context.data.var.strLists || ["Str0", "Str1", "Str2", "Str3", "Str4", "Str5", "Str6", "Str7", "Str8", "Str9"]
            context.data.scope = context.data.scope || "function:global"
        },
        "var": function (ctx, context) {
            //util.log(context)
            var scope = context.data.scope
            //util.termLog('SCOPE: ',scope)
            //scope=JSON.stringify(scope) 

            var children = []
            if (!context.data.var.hasOwnProperty(ctx.identifier().getText() + '|' + scope)) {
                var type = context.visit(ctx.expression())
                //util.termLog(type)

                if (!type.node) {
                    type = type[0]
                    if (!(type == undefined)) {
                        type = type.node
                    }
                } else if (typeof type.node == "string") {
                    type = type.node
                }
                //util.termLog(type)
                if (type == "funcCall") {
                    var type = context.visit(ctx.expression())[0].type
                }
                if (type == "array") {
                  var type = context.visit(ctx.expression())[0].type
                }
                if (type == "var") {
                    var type = context.visit(ctx.expression())[0].type
                }
                if(type=="classInit"){
                    var type = 'class:'+context.visit(ctx.expression())[0].name
                }
                if (ctx.hasOwnProperty('type') && (typeof ctx.type == "function") && (!(ctx.type() == null))) type = ctx.type().getText()
            } else {
                var type = context.data.var[ctx.identifier().getText() + '|' + scope].type
            }

            if (type == undefined) { type = "undef"; util.warn(`${ctx.identifier().getText()} is undefined! A type could not be infered! This may be bad!`, ctx) }
            context.data.var[ctx.identifier().getText() + '|' + scope] = { type, scope }
            return { name: ctx.identifier().getText(), type, children: [context.visit(ctx.expression())], node: "varDec", scope: scope }
        },
        "while": function (ctx, context) {
            var body = context.visit(ctx.statement())
            return { node: "while", condition: context.visit(ctx.boolexpr()), children: body }
        },
        "if": (ctx, context) => {
            var body = context.visit(ctx.statement())
            return { node: "if", condition: context.visit(ctx.boolexpr()), children: body }
            //return `If ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End:`
        },
        "ifElse": (ctx, context) => {
            var ifBody = context.visit(ctx.statement()[0])
            var elseBody = context.visit(ctx.statement()[1])
            return { node: "if", condition: context.visit(ctx.boolexpr()), children: [ifBody, elseBody] }
            //return `If ${ctx.boolexpr().getText()}:${ifBody.substring(1, ifBody.length - 1)}:Else:${elseBody.substring(1, elseBody.length - 1)}:End:`
        },
        "asm": (ctx, context) => {
            return { node: "asm", children: [], contents: ctx.any().getText() }
        },
        "funcParams": (ctx, context) => {

            let code = [];

            for (let i = 0; i < ctx.getChildCount(); i++) {

                if (!(context.visit(ctx.getChild(i)) == "")) code.push(context.visit(ctx.getChild(i)));
            }

            return code;
        },
        "function": (ctx, context) => {

            //util.log('ctx:', ctx)
            //console.dir(context.visit(ctx.statement()),{depth:null})
            var paramsList = ctx.func_params().getText().split(')')[0].split(',')
            var params = []
            paramsList.forEach((elm) => { params.push({ name: elm.split(':')[0], type: elm.split(':')[1] }) })
            var oldScope = util.copy(context.data.scope)
            context.data.scope = `${oldScope}.function:${ctx.identifier().getText()}`
            context.data.functions[ctx.identifier().getText() + `|${oldScope}`] = { node: "function", scope: oldScope, name: ctx.identifier().getText(), params, type: ctx.type().getText(), children:context.visitChildren(ctx)[5] }
            context.data.scope = oldScope
            //console.dir( context.data.functions[ctx.identifier().getText()+`|${oldScope}`],{depth:null})
            return context.data.functions[ctx.identifier().getText() + `|${oldScope}`]

            //util.log(ctx.number())
            //return `:Label ${context.data.functions[name].label}:${context.visit(ctx.statement())}:______:`
        },
        "varAcess": (ctx, context) => {
            if (context.visitChildren(ctx)[0].node == "number") {
                return { node: "number", value: ctx.getText(), children: [] }
            } else {
                try {
                    return { node: "var", children: [], name: ctx.identifier().getText(), type: tree.getVar(ctx.identifier().getText(), context.data.scope, context.data.var).type }
                } catch {
                    //if(Object.keys(context.data.functions).includes(ctx.identifier().getText()))return handler("funcCall",ctx,context)
                    //util.termLog(context)
                    util.error(`${ctx.identifier().getText()} is undefined`, 'Alloc', ctx)
                }

            }
        },
        "funcCall": (ctx, context) => {

            var method = []
            //util.log(ctx.identifier().getText())
            ctx.identifier().getText().split('.').forEach((elm) => {
                method.push(elm)
            })
            var baseClass = []
            if (method.length > 1) {
                baseClass = method.slice(0, -1)
            }
            util.log("method:", ctx.identifier().getText())

            try {
                var type = tree.getFunction(method.join('.'), context.data.scope, context.data.functions).type
                return { node: "funcCall", children: [], class: baseClass, name: method[method.length - 1], params: context.visit(ctx.methodparams()).filter(i => i !== ","), type }
            } catch (err) {
                //util.termLog(ctx.getText())
                util.error('No such function: ' + method.join('.'), 'TypeError', ctx)
                //abort()
            }
        },
        'string': (ctx) => {
            return { node: "string", value: ctx.getText(), children: [] }
        },
        'number': (ctx) => {
            return { node: "number", value: ctx.getText(), children: [] }
        },
        'bool': (ctx, context) => {
            var src = ctx.getText()
            var comparisons = []
            var types = ["||", "<", ">", "==", "!=", "<=", ">=", "&&", "!", "true", "false"]
            types.forEach((elm) => {
                if ((src.split(elm).length) > 1) {
                    comparisons.push(elm)
                }
            })
            //util.termLog({node:"bool",condition:ctx.getText(),children:[],comparisons})
            return { node: "bool", condition: ctx.getText(), children: [], comparisons }
        },
        'math': (ctx, context) => {
            var ops = ["+", "/", "-", "*"]
            var src = ctx.getText()
            var operations = []
            var children = context.visitChildren(ctx)
            ops.forEach((elm) => {
                if (src.split(elm).length > 1) {
                    operations.push(elm)
                }
                children.filter(i => i !== elm)
            })
            return { node: "math", children, operations }
        },
        "expr": (ctx, context) => {
            var res = context.visitChildren(ctx)
            if ((res == [undefined]) || (res == []) || (res == [[]])) {
                res = [{ children: [] }]
            }
            //antlr hacks
            res.forEach((elm, i) => {
                if(!elm==undefined){
                if (typeof elm == "string") {
                    if (elm.startsWith('"')) {
                        res[i] = handler('string', ctx, context)

                    }
                    //strConcat fixes
                    if ((res[i + 1] == '+') && ((!(res[i + 2].type == undefined)) && (res[i + 2].type == "string"))) { res[i] = handler('strConcat', ctx, context) }
                }
                if((elm.type&&res[i+2].type)&&([res[i+2].type,elm.type].includes("number"))){
                    res[i] = handler('math', ctx, context)
                }
                }
            })

            return res
        },
        "return": (ctx, context) => {
            return { node: "return", value: context.visit(ctx.expression()) }
        },
        "import": (ctx, context) => {
            var name = ctx.identifier().getText()
            //util.termLog(name)
            if (!readdirSync('./src/headers').includes(name + '.json')) {
                var file = JSON.parse(readFileSync(path.join(util.data.file, name)))
                file[path.basename(util.data.file).split('.')[0]].headers.forEach(elm => {
                    if (elm.node == "function") {
                        context.data.functions[elm.name] = elm
                    } else if (elm.node == "varDec") {
                        elm.name = elm.name + `|function:global`
                        context.data.var[elm.name] = { type: elm.type }
                        context.data.var[elm.name].scope = `function:global`
                    }else if (elm.node == "class") {
                        context.data.classes[elm.name] = elm
                        context.data.classes[elm.name].scope='function:global' 
                    }
                })
            } else {
                JSON.parse(readFileSync(`./src/headers/${name}.json`)).forEach(elm => {
                    if (elm.node == "function") {
                        elm.name = elm.name + `|function:global`
                        context.data.functions[elm.name] = elm
                        context.data.functions[elm.name].scope = `function:global`
                    } else if (elm.node == "varDec") {
                        elm.name = elm.name + `|function:global`
                        context.data.var[elm.name] = { type: elm.type }
                        context.data.var[elm.name].scope = `function:global`
                    }
                })
            }
            //util.termLog(context.data)
            return { node: "import", name }
        },
        "for": (ctx, context) => {
            if (util.childExists(ctx, 'boolexpr')) {
                var condition = context.visit(ctx.boolexpr())
                if (util.childExists(ctx, 'inc_stmt')) {
                    var afterCond = context.visit(ctx.inc_stmt())
                } else {
                    var afterCond = context.visit(ctx.dec_stmt())
                }
                return { node: "for", condition, counter: context.visit(ctx.var_stmt()), afterCond, children: [context.visit(ctx.statement())] }
            } else {
                return { node: "foreach", iterator: context.visit(ctx.var_stmt()), iterated: context.visit(ctx.value()), children: [context.visit(ctx.statement())] }
            }


        },
        "object": (ctx, context) => {
            var children = []
            var obj = context.visitChildren(ctx)
            obj.forEach((elm, i) => { if (elm == ":") { children.push({ node: "classInit", name: "Array", params: [obj[i - 1], obj[i + 1]], children: [] }) } })
            return { node: "classInit", name: "Object", params: children, children: [] }
        },
        "list": (ctx, context) => {
            return { node: "classInit", name: "Array", params: context.visitChildren(ctx).filter(i => i !== ','), children: [] }
        },
        "strConcat": (ctx, context) => {
            return { node: "concat", children: context.visitChildren(ctx).filter(i => i !== '+') }
        },
        "class": (ctx, context) => {
            var oldScope = util.copy(context.data.scope)
            var extension = ["base"]
            if (util.childExists(ctx, 'identifier', 1)) {
                context.data.scope = context.data.scope + '.' + ctx.identifier()[1].getText()
                ctx.identifier()[1].getText().split('.').forEach(elm => extension.push(elm))
            }
            context.data.scope = `${oldScope}.class.${ctx.identifier()[0].getText()}`

            var children = context.visit(ctx.classBody())
            children.forEach(elm => {
                context.data.functions[elm.name] = elm
                elm.scope = context.data.scope
            })
            context.data.scope = oldScope
            return { node: "class", name: ctx.identifier().getText(), children, extends: extension }
        },
        "classInit": (ctx, context) => {
            return { node: "classInit", name: ctx.identifier().getText(), children: [], params: context.visit(ctx.methodparams()).filter(i => i !== ",") }
        }
    }

    //util.log(context)
    if (!token) {
        return handlers
    }
    //var children = context.visitChildren(ctx)


    if (handlers.hasOwnProperty(token)) {

        if (typeof handlers[token] == "function") {
            //util.log(Object.keys(ctx),":ctx")
            handlers.const(ctx, context)
            var ret = handlers[token](ctx, context, ...Array.from(arguments).slice(2))
            util.log(true, token + ':', ctx.getText(), ret)
            return ret
        } else {
            return handlers[token]
        }
    }
    return { children: context.visitChildren(ctx) }
}
