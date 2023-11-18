import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import { readFileSync, writeFileSync } from 'fs'
//console.log(readFileSync(process.argv[2]))
function hasKey(obj, key) {
	if (obj === null || obj === undefined) {
	  return false;
	}
	if (obj.hasOwnProperty(key)) {
	  return true;
	}
	for (const k in obj) {
	  if (hasKey(obj[k], key)) {
		return true;
	  }
	}
	return false;
  }
function indexOf(searchStr, str, caseSensitive) {
	var searchStrLen = searchStr.length;
	if (searchStrLen == 0) {
		return [];
	}
	var startIndex = 0, index, indices = [];
	if (!caseSensitive) {
		str = str.toLowerCase();
		searchStr = searchStr.toLowerCase();
	}
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
}
function replaceAt(str, index, replacement, length) {
	return str.substring(0, index) + replacement + str.substring(index + length);
}
function inString(char, stringMap) {
	var ret = false

	stringMap.forEach((item) => {
		try {
			//console.log(char >= item[0], char <= item[1])
			if ((char >= item[0]) && (char <= item[1])) {
				ret = true
			}
		} catch (error) {

			return
		}

	})

	return ret
}
function genStrMap(str) {
	var stringMap = []
	var strs = indexOf('"', str, true)
	strs.forEach((section, i) => {

		if ((i % 2 == 0)) {
			stringMap.push([strs[i], strs[i + 1]])
		}
	})
	return stringMap
}
function split(str, splitter, strMap) {
	var pos = indexOf(splitter, str)
	pos.forEach((elm, i, array) => {
		if (inString(elm, strMap)) {
			array.splice(i, 1);
		}
	})
	var res = []
	strMap.forEach((elm) => {
		res.push(str.substring(elm[0], elm[1]))
	})
	return res
}
function replace(str,substr,replacement){
	var indices=strIndexOf(str,substr)
	indices.forEach((elm)=>{
		str=replaceAt(str,elm,replacement,substr.length)
		indices=strIndexOf(str,substr)
	})
	return str
}
function strIndexOf(str, substr) {
	var strMap = genStrMap(str)
	var pos = indexOf(substr, str)
	pos.forEach((elm, i, array) => {
		if (inString(elm, strMap)) {
			array.splice(i, 1);
		}
	})
	return pos
}
function handler(token, ctx, context) {

	var handlers = {
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
		"var": function (ctx, children,context) {
			//console.log(context)
			context.data = context.data || {}
			context.data.var = context.data.var || {}
			context.data.var.num = context.data.var.num || {}
			context.data.var.list = context.data.var.list || { "": "", "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "", "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": "", "Str0": "", "Str1": "", "Str2": "", "Str3": "", "Str4": "", "Str5": "", "Str6": "", "Str7": "", "Str8": "", "Str9": "" }
			context.data.var.matrix = context.data.var.matrix || { "": "", "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "" }
			const val = ctx.expression()

			if ((val.getText()[0] == '"') || (
				!isNaN(val.getText()))) {
				var index = 0
				//Object.values(context.data.var.num).forEach((elm, i) => { if (((elm == "") && (index == 0)) || (elm == ctx.identifier().getText())) { index = i } })

				context.data.var.num[ctx.identifier().getText()] = { name: ctx.identifier().getText(), type: "reg", val: val.getText(),ref:ctx.identifier().getText().toUpperCase()}

				return `:${val.getText()}=>${ctx.identifier().getText().toUpperCase()}:`
			} else if ((val.getText()[0] == '[') && (!(val.getText()[1] == '['))) {
				console.log("list")
				var index = 0
				var strIndex = 0
				var res;
				Object.values(context.data.var.list).forEach((elm, i) => { if (((elm == "") && (index == 0) && (i <= 26)) || (elm == ctx.identifier().getText())) { index = i } })
				Object.values(context.data.var.list).forEach((elm, i) => { if (((elm == "") && (strIndex == 0) && (i > 26)) || (elm == ctx.identifier().getText())) { strIndex = i } })
				var list = val.getText().replace('[', '')
				list = list.split('')
				list.splice(list.length - 1, 1)
				list = list.join('')
				var strMap = genStrMap(list)
				list = split(list, ',', strMap)

				if (isNaN(list.join(''))) {
					context.data.var.list[Object.keys(context.data.var.list)[index]] = { name: ctx.identifier().getText(), type: "str", strMap: Object.keys(context.data.var.list)[strIndex], val: val.getText(), list: Object.keys(context.data.var.list)[index] }
					var listData = context.data.var.list[Object.keys(context.data.var.list)[index]]
					var len = []
					var listStr = ""
					list.forEach((elm) => {
						len.push(elm.length)
						listStr = listStr + elm.replace('"', '').substring(0, elm.length - 1)
					})
					return `:"${listStr}"=>${listData.strMap}:{${len.join(',')}}=>|L${listData.list}:`
				} else {
					context.data.var.list[Object.keys(context.data.var.list)[index]] = { name: ctx.identifier().getText(), type: "numList", val: val.getText(), list: Object.keys(context.data.var.list)[index] }
					res = val.getText().replace('[', '{')
					//console.log(res)
					res[res.length - 1] = "}"
					return `:${res}=>L${Object.keys(context.data.var.list)[index]}:`
				}

			} else if ((val.getText()[0] == '[') && (val.getText()[1] == '[')) {
				var index = 0
				Object.values(context.data.var.matrix).forEach((elm, i) => { if ((elm == "") && (index == 0)) { index = i } })
				//console.log('matrix',`${val.getText().replaceAll('[','{').replaceAll(']','}')}=>[${Object.keys(context.data.var.matrix)[index]}]`)
				return `:${val.getText()}=>[${Object.keys(context.data.var.matrix)[index]}]:`
			} else {
				var index = 0
				Object.values(context.data.var.num).forEach((elm, i) => { if ((elm == "") && (index == 0)) { index = i } })
				return `:${children}=>${Object.keys(context.data.var.num)[index]}:`
			}
			return ""
		},
		"while": function (ctx, children, context) {
			var body = context.visit(ctx.statement())
			return `:While ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End:`
		},
		"if": (ctx, children, context) => {
			var body = context.visit(ctx.statement())
			return `If ${ctx.boolexpr().getText()}:Then:${body.substring(1, body.length - 1)}:End:`
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
			context.data = context.data ||{}
			context.data.functions = context.data.functions ||{}
			var name = ctx.identifier().getText()
			var params=ctx.func_params().getText().split(')')[0].split(',')
			context.data.functions[name]={label:name,params,paramRefs:[]}
			if(name.length>20){
				context.data.functions[name].label=name.slice(1,20)
			}
			params.forEach((elm,i)=>{
				var pName ='_$P'+name.slice(1,1)+name.slice(name.length-1,1)+elm
				if(!(context.data.var.num.hasOwnProperty(pName))){
					context.data.var.num[pName]={ name: params[i], type: "reg", val: "",ref:pName.toUpperCase()}
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
			context.data = context.data||{}
			context.data.functions = context.data.functions || {}
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
	if (!token) {
		return handlers
	}
	var children = context.visitChildren(ctx)
	

	if (handlers.hasOwnProperty(token)) {
		
		if (typeof handlers[token] == "function") {
			console.log(token+':',ctx.getText(),handlers[token](ctx, children, context))
			return handlers[token](ctx, children, context)
		} else {
			return handlers[token]
		}
	}
	return ""
}
class Visitor extends ICEScriptVisitor {

	visitChildren(ctx) {

		let code = '';

		for (let i = 0; i < ctx.getChildCount(); i++) {
			code += this.visit(ctx.getChild(i));
		}

		return code.trim();
	}
	start(ctx) {
		return this.visitScript(ctx);
	}
	visitTerminal(ctx) {
		return ctx.getText();
	}
	/*visitNumber(ctx){
		return this.visitChildren(ctx)//this.visitTerminal(ctx)
	}*/
	// Visit a parse tree produced by ICEScriptParser#header.
	visitHeader(ctx) {

		return handler("head", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#meta.
	visitMeta(ctx) {
		return handler("meta", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#scriptName.
	visitScriptName(ctx) {
		return handler("scriptName", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#include.
	visitInclude(ctx) {
		return handler("import", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#function.
	visitFunction(ctx) {
		return handler("function", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#func_params.
	visitFunc_params(ctx) {
		return handler("funcDecPrams", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#assign_stmt.
	visitAssign_stmt(ctx) {
		return handler("var", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#ti_basic_stmt.
	visitTi_basic_stmt(ctx) {
		return handler("tib", ctx, this);
	}

	// Visit a parse tree produced by ICEScriptParser#add_assign_stmt.
	visitAdd_assign_stmt(ctx) {
		return handler("addAssign", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#sub_assign_stmt.
	visitSub_assign_stmt(ctx) {
		return handler("subAssign", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#mul_assign_stmt.
	visitMul_assign_stmt(ctx) {
		return handler("mulAssign", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#div_assign_stmt.
	visitDiv_assign_stmt(ctx) {
		return handler("divAssign", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#inc_stmt.
	visitInc_stmt(ctx) {
		return handler("inc", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#dec_stmt.
	visitDec_stmt(ctx) {
		return handler("dec", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#if_stmt.
	visitIf_stmt(ctx) {
		return handler("if", ctx, this);
	}

	// Visit a parse tree produced by ICEScriptParser#if_else_stmt.
	visitIf_else_stmt(ctx) {
		return handler("ifElse", ctx, this);
	}

	// Visit a parse tree produced by ICEScriptParser#while_stmt.
	visitWhile_stmt(ctx) {
		return handler("while", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#var_stmt.
	visitVar_stmt(ctx) {

		return handler("var", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#return_stmt.
	visitReturn_stmt(ctx) {
		return handler("return", ctx, this);
	}




	// Visit a parse tree produced by ICEScriptParser#boolexpr.
	visitBoolexpr(ctx) {
		return handler("bool", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#methodcall.
	visitMethodcall(ctx) {

		return handler("funcCall", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#methodparams.
	visitMethodparams(ctx) {
		return handler("funcParams", ctx, this);
	}

	visitValue(ctx){
		//console.log(' \x1b[33m',ctx.getText(),' \x1b[0m')
		return handler("varAcess", ctx, this);
	}
}
//console.log(tree.toStringTree(parser.ruleNames))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
var out = new Visitor().start(tree)
//Imagine using Antlr wheen you could roll your own
Object.keys(handler()).forEach((elm, i) => {
	var pos = strIndexOf(out, elm)

	for (var c = 0; c < pos.length; c++) {
		//pos.push(0)
		var index = pos[c]
		if (typeof handler()[Object.keys(handler())[i]] == "function") { return }
		//console.log('Pos Length:', pos.length, '\nPos:', pos, '\nToken String: ' + elm, '\n	Beggining:', out.substring(0, index), '\n	Replacement:', handler()[Object.keys(handler())[i]], '\n	End:', out.substring(index + Object.keys(handler())[i].length), '\n	Src (Est):', out.substring(index - 3, index + 3), '\n	Length:', Object.keys(handler())[i].length, '\n	Index:', index, '\n	Index Char:', out[index])
		out = replaceAt(out, index, handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
		//console.log(out,index,elm,handler()[Object.keys(handler())[i]],Object.keys(handler())[i].length,index + Object.keys(handler())[i].length,out.substring(index + Object.keys(handler())[i].length))

		pos = strIndexOf(out, elm)
	}
	if (pos.length == 1) {
		out = replaceAt(out, pos[0], handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
	}
})
console.log('\nResults:', '\n	Tree:\n		', tree.toStringTree(parser.ruleNames), '\n	TI-Basic:\n		', out.replaceAll(':','\n:'),'\n Data:',/*handler()*/)
