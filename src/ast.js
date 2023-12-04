import * as util from "./util.js"
import { abort } from 'process'
import {buildAst} from './antlr.js'
import { readFileSync,readdirSync } from 'fs'
export function handler(token, ctx, context) {
    var handlers = {
        data: {},
        "const": (ctx,  context) => {
            var headers=context.headers=context.headers||{}
            
            
                
            readdirSync('./src/headers/').forEach((file)=>{
                //console.log(headers,JSON.parse(readFileSync('./src/headers/'+file),readdirSync('./src/headers/')))
                headers=Object.assign(headers, JSON.parse(readFileSync('./src/headers/'+file)));
            })
            
            context.data = context.data || {}
            context.data.var = context.data.var || {}
            context.data.functions = context.data.functions || headers
            context.data.functionCall = context.data.functionCall || {}
            context.data.types=context.data.types||['number','string','list','boolexpr','methodCall','value']
            context.data.var.strLists = context.data.var.strLists || ["Str0", "Str1", "Str2", "Str3", "Str4", "Str5", "Str6", "Str7", "Str8", "Str9"]
            context.data.currentScope = context.data.currentScope || "global"
        },
        "var": function (ctx,  context, scope) {
            //util.log(context)
            scope = scope || context.data.currentScope || "global"
            var children = []
            if(!context.data.var.hasOwnProperty(ctx.identifier().getText())){
            var varType =context.visit(ctx.expression())
            //console.log(varType)
            
            if(!varType.type){
                varType=varType[0]
                if(!(varType==undefined)){
                    varType = varType.type
                }
            }else if(typeof varType.type=="string"){
                varType=varType.type
            }
            //console.log(varType)
            if(varType=="funcCall"){
                var varType =context.visit(ctx.expression())[0].retType
            }
            if(varType=="array"){
                var varType =context.visit(ctx.expression())[0].listType
            }
            if(ctx.hasOwnProperty('type')&&(typeof ctx.type=="function")&&(!(ctx.type()==null)))varType=ctx.type().getText()
            }else{
                var varType=context.data.var[ctx.identifier().getText()].varType
            }
            if(varType==undefined){varType="undef";util.warn(`${ctx.identifier().getText()} is undefined! A type could not be infered! This may be bad!`,ctx)}
            context.data.var[ctx.identifier().getText()]={varType}
            return { name: ctx.identifier().getText(), varType, children:[context.visit(ctx.expression())], type: "varDec" }
        },
        "while": function (ctx,  context) {
            var body = context.visit(ctx.statement())
            return { type: "while", condition: context.visit(ctx.boolexpr()), children: body }
        },
        "if": (ctx,  context) => {
            var body = context.visit(ctx.statement())
            return { type: "if", condition: context.visit(ctx.boolexpr()), children: body }
            //return `If ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End:`
        },
        "ifElse": (ctx,  context) => {
            var ifBody = context.visit(ctx.statement()[0])
            var elseBody = context.visit(ctx.statement()[1])
            return { type: "if", condition: context.visit(ctx.boolexpr()), children: [ifBody,elseBody] }
            //return `If ${ctx.boolexpr().getText()}:${ifBody.substring(1, ifBody.length - 1)}:Else:${elseBody.substring(1, elseBody.length - 1)}:End:`
        },
        "asm": (ctx,  context) => {
            return {type:"asm",children:[],contents:ctx.any().getText()}
        },
        "funcParams": (ctx,  context) => {

            let code = [];

            for (let i = 0; i < ctx.getChildCount(); i++) {

                if (!(context.visit(ctx.getChild(i)) == "")) code.push(context.visit(ctx.getChild(i)));
            }

            return code;
        },
        "function": (ctx,  context) => {

            //util.log('ctx:', ctx)
            //console.log(ctx.type())
            
            var paramsList = ctx.func_params().getText().split(')')[0].split(',')
            var params = []
            paramsList.forEach((elm) => { params.push({ name: elm.split(':')[0], type: elm.split(':')[1] }) })
            context.data.functions[ctx.identifier().getText()] = { type: "function", name: ctx.identifier().getText(), params, retType: ctx.type().getText(), children: context.visit(ctx.statement()) }
            if(context.data.scope.split('.')[0]=="class"){
                context.data.functions[ctx.identifier().getText()].class=context.data.scope.split('.').slice(2)
            }
            return context.data.functions[ctx.identifier().getText()]

            //util.log(ctx.number())
            //return `:Label ${context.data.functions[name].label}:${context.visit(ctx.statement())}:______:`
        },
        "varAcess": (ctx,  context) => {
            if (context.visitChildren(ctx)[0].type=="number") {
                return {type:"number",value:ctx.getText(),children:[]}
            } else {
                try {
                    return { type: "var", children: [], name: ctx.identifier().getText(), varType: context.data.var[ctx.identifier().getText()].varType }
                } catch {
                    //if(Object.keys(context.data.functions).includes(ctx.identifier().getText()))return handler("funcCall",ctx,context)
                    //console.log(context)
                    util.error(`${ctx.identifier().getText()} is undefined`, 'Alloc', ctx)
                }

            }
        },
        "funcCall": (ctx,  context) => {

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
                return { type: "funcCall", children: [], class: baseClass, name: method[method.length - 1], params: context.visit(ctx.methodparams()).filter(i => i !== ","), retType: context.data.functions[method.join('.')].retType }
            } catch (err) {
                //console.log(ctx.getText())
                util.termLog(`ERROR: ${err}`, ctx.identifier().getText(), JSON.stringify(method), JSON.stringify(context.visit(ctx.methodparams())))
                //abort()
            }
        },
        'list':(ctx,context)=>{
                var list = ctx.getText().replace('[', '')
                list = util.split(list.slice(list.length - 1, 1), ',', util.genStrMap(list.slice(list.length - 1, 1)))
                return { type:"array", value: list, children:context.visitChildren(),listType:context.visitChildren()[0].type}
        },
        'string':(ctx)=>{
            return {type:"string",value:ctx.getText(),children:[]}
        },
        'number':(ctx)=>{
            return {type:"number",value:ctx.getText(),children:[]}
        },
        'bool':(ctx,context)=>{
            var src=ctx.getText()
            var comparisons=[]
            var types=["||","<",">","==","!=","<=",">=","&&","!","true","false"]
            types.forEach((elm)=>{
                if((src.split(elm).length)>1){
                    comparisons.push(elm)
                }
            })
            //console.log({type:"bool",condition:ctx.getText(),children:[],comparisons})
            return {type:"bool",condition:ctx.getText(),children:[],comparisons}
        },
        'math':(ctx,context)=>{
            var ops=["+","/","-","*"]
            var src=ctx.getText()
            var operations=[]
            var children=context.visitChildren()
            ops.forEach((elm)=>{
                if(src.split(elm).length>1){
                    operations.push(elm)
                }
                children.filter(i=>i!==elm)
            })
            return {type:"math",children,operations}
        },
        "expr":(ctx,context)=>{
            var res= context.visitChildren(ctx)
            if((res==[undefined])||(res==[])||(res==[[]])){
                res=[{children:[]}]
            }
            //antlr hacks
            res.forEach((elm,i)=>{
                if(typeof elm=="string"){
                if(elm.startsWith('"')){
                    res[i]=handler('string',ctx,context)
                }}
            })
            
            return res
        },
        "return":(ctx,context)=>{
            return {type:"return",value:context.visit(ctx.expression())}
        },
        "import":(ctx,context)=>{
            var name=ctx.identifier().getText()
            if(!readdirSync('./src/headers').includes(name+'.json')){
                var file= readFileSync(path.join(util.data.file,name))
                context.headers=Object.assign(buildAst(file).header,context.headers) 
            }
            return {type:"import",name}
        },
        "for":(ctx,context)=>{
            if(util.childExists(ctx,'boolexpr')){
                var condition = context.visit(ctx.boolexpr())
                if(util.childExists(ctx,'inc_stmt')){
                    var afterCond=context.visit(ctx.inc_stmt())
                }else{
                    var afterCond=context.visit(ctx.dec_stmt())
                }
                return {type:"for",condition,counter:context.visit(ctx.var_stmt()),afterCond,children:[context.visit(ctx.statement())]}
            }else{
                return {type:"foreach",iterator:context.visit(ctx.var_stmt()),iterated:context.visit(ctx.value()),children:[context.visit(ctx.statement())]}
            }
            
            
        },
        "object":(ctx,context)=>{
            var children=[]
            var obj =context.visitChildren()
            obj.forEach((elm,i)=>{if(elm==":"){children.push({type:"prop",key:obj[i-1],value:obj[i+1]})}})
            return {type:"object",children}
        },
        "strConcat":(ctx,context)=>{
            return {type:"concat",children:context.visitChildren().filter(i=>i!=='+')}
        },
        "class":(ctx,context)=>{
            var oldScope=JSON.parse(JSON.stringify(context.data.scope ))
            context.data.scope=`class.${ctx.identifier()[0].getText()}`
            if(util.childExists(ctx,'identifier',1)){
                context.data.scope=context.data.scope+ctx.identifier()[1].getText()
            }
            children
            
            return {type:"class",name:ctx.identifier().getText(),children}
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
            handlers.const(ctx,  context)
            var ret=handlers[token](ctx, context, ...Array.from(arguments).slice(2))
            util.log(true, token + ':', ctx.getText(), ret)
            return ret
        } else {
            return handlers[token]
        }
    }
    return {children:context.visitChildren(ctx)}
}
