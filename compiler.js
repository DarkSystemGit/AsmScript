import * as util from "./functions.js" 
export var handlers = {
    data: {},
    "&&": "and",
    "||": "or",
    "!!": "not(",
    ";": ":",
    "===":"=",
    "==": "=",
    "true": "1",
    "false": "0",
    "::":":",
    "const":(ctx,children,context)=>{
        context.data = context.data || {}
        context.data.var = context.data.var || {}
        context.data.functions = context.data.functions ||{}
        context.data.functionCall=context.data.functionCall||{}
        context.data.functionCall.tokens= context.data.functionCall.tokens || {
            "menu":"Menu","graph.graphStyle":"GraphStyle","graph.graphColor":"GraphColor","io.openLib":"OpenLib","io.output":"Output","io.getCalc":"GetCalc","io.get":"Get","io.send":"Send","matrix.det":"det","matrix.dim":"dim","matrix.fill":"Fill",
            "matrix.identity":"identity","matrix.randM":"randM","matrix.augment":"augment","matrix.toList":"Matr>List","matrix.fromList":"List>matr","matrix.cumSum":"cumSum","matrix.ref":"ref","matrix.rref":"rref","matrix.rowSwap":"rowSwap",
            "matrix.rowAdd":"row+","matrix.multiplyRow":"row*","matrix.multipleRowAdd":"*row+","gfx.line":"Line","gfx.tangent":"Tangent","gfx.shade":"Shade","gfx.text":"Text","gfx.circle":"Circle","gfx.textColor":"TextColor",
            "gfx.pointOn":"Pt-On","gfx.pointOff":"Pt-Off","gfx.pointChange":"Pt-Change","gfx.pixelOn":"Pxl-On","gfx.pixelOff":"Pxl-Off","gfx.pixelChange":"Pxl-Change","gfx.pixelIsOn":"pxl-Test","string.length":"length","string.subStr":"sub",
            "string.toExpression":"expr","string.indexOf":"inString","string.fromEquVar":"String>Equ","math.max":"max","math.min":"min","math.gcm":"gcm","math.lcd":"lcd","math.toInt":"int","math.mod":"remainder",
            "math.intPart":"iPart","math.floatPart":"fPart","math.abs":"abs","math.round":"round","math.solve":"solve","math.log":"log","math.sin":"sin","math.cos":"cos","math.rand.dec":"rand","math.rand":"randInt","math.rand.norm":"randNorm",
            "math.rand.bin":"randBin","list.sortUp":"SortA","list.sortDown":"SortD","list.diff":"DeltaList","list.median":"median","list.mean":"mean","list.sum":"sum","list.product":"prod",
            "list.stdDev":"stdDev","list.variance":"variance","list.seq":"seq","list.fromMatrix":"Matr>List","list.toMatrix":"List>matr"
        }
        context.data.var.strLists = context.data.var.strLists || ["Str0","Str1","Str2","Str3","Str4","Str5","Str6","Str7","Str8","Str9"]
        context.data.currentScope=context.data.currentScope||"global"
    },
    "var": function (ctx, children,context,scope) {
        //console.log(context)
        scope =scope||context.data.currentScope||"global"
        if ((val.getText()[0] == '"') || (
            !isNaN(val.getText()))) {
            var type="num"
            //Object.values(context.data.var.num).forEach((elm, i) => { if (((elm == "") && (index == 0)) || (elm == ctx.identifier().getText())) { index = i } })
            if(val.getText()[0] == '"'){
                type="str"
            }
            context.data.var.push({ name: ctx.identifier().getText(), type, val: val.getText(),ref:ctx.identifier().getText().toUpperCase(),scope})

            return `:${val.getText()}=>${ctx.identifier().getText().toUpperCase()}:`
        } else if ((val.getText()[0] == '[') && (!(val.getText()[1] == '['))) {
            console.log("list")
            var index = 0
            var strIndex = 0
            var res;
            context.data.var.list.forEach((elm, i) => { if (((elm == "") && (index == 0) && (i <= 26)) || (elm == ctx.identifier().getText())) { index = i } })
            //context.data.var.list.forEach((elm, i) => { if (((elm == "") && (strIndex == 0) && (i > 26)) || (elm == ctx.identifier().getText())) { strIndex = i } })
            var list = val.getText().replace('[', '')
            list = list.split('')
            list.splice(list.length - 1, 1)
            list = list.join('')
            var strMap = util.genStrMap(list)
            list = util.split(list, ',', strMap)

            if (isNaN(list.join(''))) {
                var listName=ctx.identifier().getText()
                if(listName.length>5){
                    listName=listName.slice(1,5)
                }
                context.data.var.push({ name: ctx.identifier().getText(),scope, type: "strList", strRef: listName, val: val.getText(), ref: listName })
                var listData = context.data.var[context.data.var.length-1]
                var len = []
                var listStr = ""
                list.forEach((elm) => {
                    len.push(elm.length)
                    listStr = listStr + elm.replace('"', '').substring(0, elm.length - 1)
                })
                return `:"${listStr}"=>${listData.strRef}:CopyData(|L${listData.list},${len.join(',')}):`
            } else {
                var listName=ctx.identifier().getText()
                if(listName.length>5){
                    listName=listName.slice(1,5)
                }
                context.data.var.push({ name: ctx.identifier().getText(),scope, type: "numList", val: val.getText(), ref:listName })
                res = val.getText().replace('[', '{')
                //console.log(res)
                res[res.length - 1] = "}"
                return `:CopyData(|L${context.data.var[context.data.var.length-1].ref},${res}):`
            }

        }
        return ""
    },
    "while": function (ctx, children, context) {
        var body = context.visit(ctx.statement())
        return `:While ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End:`
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
        return context.visit(ctx.any())
    },
    "funcParams":(ctx,children,context)=>{

    let code = [];

    for (let i = 0; i < ctx.getChildCount(); i++) {
        
        if(!(context.visit(ctx.getChild(i))==""))code.push(context.visit(ctx.getChild(i)));
    }

    return code;
    },
    "function":(ctx,children,context)=>{
        
        console.log(context)
        var name = ctx.identifier().getText()
        var params=ctx.func_params().getText().split(')')[0].split(',')
        context.data.functions[name]={label:name,params,paramRefs:[]}
        if(name.length>20){
            context.data.functions[name].label=name.slice(1,20)
        }
        params.forEach((elm,i)=>{
            var pName ='_$P'+name.slice(1,1)+name.slice(name.length-1,1)+elm
            if(!(context.data.var.num.hasOwnProperty(pName))){
                context.data.var.num.push({ name: params[i], type: "reg", val: "",ref:pName.toUpperCase()})
                context.data.functions[name].paramRefs.push(pName.toUpperCase())
            }else{
                console.error(`Error: var ${pName} is reserved. Please change it.`)
            }
        })
        console.log(ctx.statement().getText())
        return `:Label ${context.data.functions[name].label}:${context.visit(ctx.statement())}:______:`
    },
    "varAcess":(ctx,children,context)=>{
        if(typeof ctx.number == "function"){
            return ctx.getText()
        }else{
            var ref = context.data.vars
            if(context.data.vars.num.hasOwnProperty(ctx.identifier().getText())){
                return ref.num[ctx.identifier().getText()].ref
            }else if(context.data.vars.list.hasOwnProperty(ctx.identifier().getText())){
                
            }else if(context.data.vars.matrix.hasOwnProperty(ctx.identifier().getText())){

            }else{
                return ""
            }
        }
    },
    "funcCall": (ctx, children, context) => {
        
        var identifier=[]
        console.log(ctx.identifier().getText())
        ctx.identifier().getText().split('.').forEach((elm)=>{
            identifier.push(elm)
        })
        //console.log(identifier)
        if (!(context.data.functions.hasOwnProperty(identifier.join('.')))) {
            if(!context.data.functionCall.tokens.hasOwnProperty(identifier.join('.'))){
                
                var name=identifier[identifier.length-1]
                
                //console.log(name)
                
                var prams=context.visit(ctx.methodparams())
                console.log(' \x1b[34m','params:','resulting prams:',prams,'src:',ctx.methodparams().getText(),'returned:',`${name.charAt(0).toUpperCase() +name.slice(1)} ${prams}`,"\x1b[0m")
            return `${name.charAt(0).toUpperCase() +name.slice(1)} ${prams}`
        }else{
            var name = context.data.functionCall.tokens[identifier.join('.')]
            return `${name}(${context.visit(ctx.methodparams()).join()})`
        }
        }else{
            var params=context.visit(ctx.methodparams())
            var commands=[]
            params.forEach((pram,i)=>{
                commands.push(`${pram}=>${context.data.functions[identifier.join('.')].paramRefs[i]}`)
            })
            console.log(params,commands,context.data.functions[identifier.join('.')].paramRefs)
            return `:${commands.join(':')}:Call ${context.data.functions[identifier.join('.')].label}:`
        }
    }
}