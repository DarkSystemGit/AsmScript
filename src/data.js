import * as util from "./util.js"
import { abort } from 'process'
import { readFileSync } from 'fs'
export function handler(token, ctx, context) {
    var handlers = {
        data: {},
        "&&": "and",
        "||": "or",
        "!!": "not(",
        ";": ":",
        "===": "=",
        "==": "=",
        "true": "1",
        "false": "0",
        "::": ":",
        "const": (ctx, children, context) => {
            context.data = context.data || {}
            context.data.var = context.data.var || []
            context.data.functions = context.data.functions || JSON.parse(readFileSync('./src/headers/std.json'))
            context.data.functionCall = context.data.functionCall || {}
            context.data.functionCall.tokens = context.data.functionCall.tokens || {
                "menu": "Menu", "graph.graphStyle": "GraphStyle", "graph.graphColor": "GraphColor", "io.openLib": "OpenLib", "io.output": "Output", "io.getCalc": "GetCalc", "io.get": "Get", "io.send": "Send", "matrix.det": "det", "matrix.dim": "dim", "matrix.fill": "Fill",
                "matrix.identity": "identity", "matrix.randM": "randM", "matrix.augment": "augment", "matrix.toList": "Matr>List", "matrix.fromList": "List>matr", "matrix.cumSum": "cumSum", "matrix.ref": "ref", "matrix.rref": "rref", "matrix.rowSwap": "rowSwap",
                "matrix.rowAdd": "row+", "matrix.multiplyRow": "row*", "matrix.multipleRowAdd": "*row+", "gfx.line": "Line", "gfx.tangent": "Tangent", "gfx.shade": "Shade", "gfx.text": "Text", "gfx.circle": "Circle", "gfx.textColor": "TextColor",
                "gfx.pointOn": "Pt-On", "gfx.pointOff": "Pt-Off", "gfx.pointChange": "Pt-Change", "gfx.pixelOn": "Pxl-On", "gfx.pixelOff": "Pxl-Off", "gfx.pixelChange": "Pxl-Change", "gfx.pixelIsOn": "pxl-Test", "string.length": "length", "string.subStr": "sub",
                "string.toExpression": "expr", "string.indexOf": "inString", "string.fromEquVar": "String>Equ", "math.max": "max", "math.min": "min", "math.gcm": "gcm", "math.lcd": "lcd", "math.toInt": "int", "math.mod": "remainder",
                "math.intPart": "iPart", "math.floatPart": "fPart", "math.abs": "abs", "math.round": "round", "math.solve": "solve", "math.log": "log", "math.sin": "sin", "math.cos": "cos", "math.rand.dec": "rand", "math.rand": "randInt", "math.rand.norm": "randNorm",
                "math.rand.bin": "randBin", "list.sortUp": "SortA", "list.sortDown": "SortD", "list.diff": "DeltaList", "list.median": "median", "list.mean": "mean", "list.sum": "sum", "list.product": "prod",
                "list.stdDev": "stdDev", "list.variance": "variance", "list.seq": "seq", "list.fromMatrix": "Matr>List", "list.toMatrix": "List>matr"
            }
            context.data.var.strLists = context.data.var.strLists || ["Str0", "Str1", "Str2", "Str3", "Str4", "Str5", "Str6", "Str7", "Str8", "Str9"]
            context.data.currentScope = context.data.currentScope || "global"
        },
        "var": function (ctx, children, context, scope) {
            //util.log(context)
            scope = scope || context.data.currentScope || "global"
            var children = []
            var val = ctx.expression()
            if ((val.getText()[0] == '"') || (
                !isNaN(val.getText()))) {
                //String or Number
                var type = "int";
                if (!(ctx.type == null) && !(ctx.type() == null) && (ctx.type().hasOwnProperty('getText'))) {
                    //util.log(ctx.type())
                    type = ctx.type().getText()
                }
                //Object.values(context.data.var.num).forEach((elm, i) => { if (((elm == "") && (index == 0)) || (elm == ctx.identifier().getText())) { index = i } })
                if (val.getText()[0] == '"') {
                    type = "string"
                }
                if (val.getText().split('.').length > 1) {
                    type = "float"
                }
                children.push({ type, value: val.getText() })
            } else if ((val.getText()[0] == '[') && (!(val.getText()[1] == '['))) {
                //Arrays
                //context.data.var.list.forEach((elm, i) => { if (((elm == "") && (strIndex == 0) && (i > 26)) || (elm == ctx.identifier().getText())) { strIndex = i } })
                var list = val.getText().replace('[', '').slice(list.length - 1, 1)
                list = util.split(list, ',', util.genStrMap(list))
                var type = "array"
                if (!(ctx.type == null) && !(ctx.type() == null) && (ctx.type().hasOwnProperty('getText'))) {
                    type = ctx.type().getText()
                }
                children.push({ type, value: list })
            } else if (val.getText().includes('(') && val.getText().includes(')')) {
                //assume function call
                children.push(context.visit(val))
                var type = children[0].retType
                //antlr madness
                if (!(ctx.type == null) && !(ctx.type() == null) && (ctx.type().hasOwnProperty('getText'))) {
                    type = ctx.type().getText()
                }
            } else if (ctx.hasOwnProperty('boolexpr')) {
                children.push({ type: "bool", value: context.visit(ctx.boolexpr()) })
            } else {

                var type = ctx.type().getText() || "unknown"
                children.push({ type, value: context.visit(ctx.expression()) })
            }
            return { name: ctx.identifier().getText(), varType: type, children, type: "varDec" }
        },
        "while": function (ctx, children, context) {
            var body = context.visit(ctx.statement())
            return { type: "while", condition: context.visit(ctx.boolexpr()), children: [] }
        },
        "if": (ctx, children, context) => {
            var body = context.visit(ctx.statement())
            return `If ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End:`
        },
        "ifElse": (ctx, children, context) => {
            var ifBody = context.visit(ctx.statement()[0])
            var elseBody = context.visit(ctx.statement()[1])
            return `If ${ctx.boolexpr().getText()}:${ifBody.substring(1, ifBody.length - 1)}:Else:${elseBody.substring(1, elseBody.length - 1)}:End:`
        },
        "tib": (ctx, children, context) => {
            return {}
        },
        "funcParams": (ctx, children, context) => {

            let code = [];

            for (let i = 0; i < ctx.getChildCount(); i++) {

                if (!(context.visit(ctx.getChild(i)) == "")) code.push(context.visit(ctx.getChild(i)));
            }

            return code;
        },
        "function": (ctx, children, context) => {

            //util.log('ctx:', ctx)

            var paramsList = ctx.func_params().getText().split(')')[0].split(',')
            var params = []
            paramsList.forEach((elm) => { params.push({ name: elm.split(':')[0], type: elm.split(':')[1] }) })
            context.data.functions[ctx.identifier().getText()] = { type: "function", name: ctx.identifier().getText(), params, retType: ctx.type().getText(), children: context.visit(ctx.statement()) }
            return context.data.functions[ctx.identifier().getText()]

            //util.log(ctx.number())
            //return `:Label ${context.data.functions[name].label}:${context.visit(ctx.statement())}:______:`
        },
        "varAcess": (ctx, children, context) => {
            if ((typeof ctx.number == "function") && !(ctx.number() == null)) {
                util.log("var:", ctx.getText())
                var type = "number"
                if (ctx.getText().split('.').length > 1) {
                    type = "float"
                }
                return { type, val: ctx.getText() }
            } else {
                try {
                    return { type: "var", children: [], name: ctx.identifier().getText(), type: context.data.var[ctx.identifier().getText()].type }
                } catch {

                    util.error(`${ctx.identifier().getText()} is undefined`, 'Alloc', ctx)
                }

            }
        },
        "funcCall": (ctx, children, context) => {

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
                return { type: "funcCall", children: [], class: baseClass, name: method[method.length - 1], params: context.visit(ctx.methodparams()), type: context.data.functions[method.join('.')].retType }
            } catch (err) {
                util.log(`ERROR: ${err}`, ctx.identifier().getText(), JSON.stringify(method), JSON.stringify(context.visit(ctx.methodparams())))
                abort()
            }
        },
        'list':(ctx,children,context)=>{
                var list = ctx.getText().replace('[', '')
                list = util.split(list.slice(list.length - 1, 1), ',', util.genStrMap(list.slice(list.length - 1, 1)))
                return { type:"array", value: list }
        }
    }
    //util.log(context)
    if (!token) {
        return handlers
    }
    var children = context.visitChildren(ctx)


    if (handlers.hasOwnProperty(token)) {

        if (typeof handlers[token] == "function") {
            //util.log(Object.keys(ctx),":ctx")
            handlers.const(ctx, children, context)
            util.log(true, token + ':', ctx.getText(), handlers[token](ctx, children, context, ...Array.from(arguments).slice(2)))
            return handlers[token](ctx, children, context, ...Array.from(arguments).slice(2))
        } else {
            return handlers[token]
        }
    }
    return ""
}