import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import { readFileSync, writeFileSync } from 'fs'
//console.log(readFileSync(process.argv[2]))
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
		"&&": "and",
		"||": "or",
		"!": "not",
		";": ":",
		"==": "=",
		"true": "1",
		"false": "0",
		"var": function (ctx, children) {
			//console.log(this)
			this.data = this.data || {}
			this.data.var = this.data.var || {}
			this.data.var.num = this.data.var.num || { "": "", "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "", "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": "" }
			this.data.var.list = this.data.var.list || { "": "", "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "", "K": "", "L": "", "M": "", "N": "", "O": "", "P": "", "Q": "", "R": "", "S": "", "T": "", "U": "", "V": "", "W": "", "X": "", "Y": "", "Z": "", "Str0": "", "Str1": "", "Str2": "", "Str3": "", "Str4": "", "Str5": "", "Str6": "", "Str7": "", "Str8": "", "Str9": "" }
			this.data.var.matrix = this.data.var.matrix || { "": "", "A": "", "B": "", "C": "", "D": "", "E": "", "F": "", "G": "", "H": "", "I": "", "J": "" }
			const val = ctx.expression()

			if ((val.getText()[0] == '"') || (
				!isNaN(val.getText()))) {
				var index = 0
				Object.values(this.data.var.num).forEach((elm, i) => { if (((elm == "") && (index == 0)) || (elm == ctx.identifier().getText())) { index = i } })

				this.data.var.num[Object.keys(this.data.var.num)[index]] = ctx.identifier().getText()

				return `:{${val.getText()}}=>${Object.keys(this.data.var.num)[index]}`
			} else if ((val.getText()[0] == '[') && (!(val.getText()[1] == '['))) {
				console.log("list")
				var index = 0
				var strIndex = 0
				var res;
				Object.values(this.data.var.list).forEach((elm, i) => { if (((elm == "") && (index == 0) && (i <= 26)) || (elm == ctx.identifier().getText())) { index = i } })
				Object.values(this.data.var.list).forEach((elm, i) => { if (((elm == "") && (strIndex == 0) && (i > 26)) || (elm == ctx.identifier().getText())) { strIndex = i } })
				var list = val.getText().replace('[', '')
				list = list.split('')
				list.splice(list.length - 1, 1)
				list = list.join('')
				var strMap = genStrMap(list)
				list = split(list, ',', strMap)

				if (isNaN(list.join(''))) {
					this.data.var.list[Object.keys(this.data.var.list)[index]] = { name: ctx.identifier().getText(), type: "str", strMap: Object.keys(this.data.var.list)[strIndex], val: val.getText(), list: Object.keys(this.data.var.list)[index] }
					var listData = this.data.var.list[Object.keys(this.data.var.list)[index]]
					var len = []
					var listStr = ""
					list.forEach((elm) => {
						len.push(elm.length)
						listStr = listStr + elm.replace('"', '').substring(0, elm.length - 1)
					})
					return `:"${listStr}"=>${listData.strMap}:{${len.join(',')}}=>|L${listData.list}`
				} else {
					this.data.var.list[Object.keys(this.data.var.list)[index]] = { name: ctx.identifier().getText(), type: "num", val: val.getText(), list: Object.keys(this.data.var.list)[index] }
					res = val.getText().replace('[', '{')
					//console.log(res)
					res[res.length - 1] = "}"
					return `:${res}=>|L${Object.keys(this.data.var.list)[index]}`
				}

			} else if ((val.getText()[0] == '[') && (val.getText()[1] == '[')) {
				var index = 0
				Object.values(this.data.var.matrix).forEach((elm, i) => { if ((elm == "") && (index == 0)) { index = i } })
				//console.log('matrix',`${val.getText().replaceAll('[','{').replaceAll(']','}')}=>[${Object.keys(this.data.var.matrix)[index]}]`)
				return `:${val.getText()}=>[${Object.keys(this.data.var.matrix)[index]}]`
			} else {
				var index = 0
				Object.values(this.data.var.num).forEach((elm, i) => { if ((elm == "") && (index == 0)) { index = i } })
				return `:${children}=>${Object.keys(this.data.var.num)[index]}`
			}
			return ""
		},
		"while": function (ctx, children, context) {
			var body = context.visit(ctx.statement())
			return `:While ${ctx.boolexpr().getText()}:${body.substring(1, body.length - 1)}:End`
		},
		"if": (ctx, children, context) => {
			var body = context.visit(ctx.statement())
			return `If ${ctx.boolexpr().getText()}:Then:${body.substring(1, body.length - 1)}:End`
		},
		"ifElse": (ctx, children, context) => {
			var ifBody = context.visit(ctx.statement()[0])
			var elseBody = context.visit(ctx.statement()[1])
			return `If ${ctx.boolexpr().getText()}:Then:${ifBody.substring(1, ifBody.length - 1)}:Else:${elseBody.substring(1, elseBody.length - 1)}:End`
		},
		"tib": (ctx, children, context) => {
			return context.visit(ctx.any())
		}
	}
	if (!token) {
		return handlers
	}
	var children = context.visitChildren(ctx)
	console.log(token, ctx.getText(), children)

	if (handlers.hasOwnProperty(token)) {
		console.log(typeof handlers[token])
		if (typeof handlers[token] == "function") {
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
		return handler("funcPrams", ctx, this);
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

		return handler("methodCall", ctx, this);
	}


	// Visit a parse tree produced by ICEScriptParser#methodparams.
	visitMethodparams(ctx) {
		return handler("funcParams", ctx, this);
	}
}
//console.log(tree.toStringTree(parser.ruleNames))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
var out = new Visitor().start(tree)

Object.keys(handler()).forEach((elm, i) => {
	var pos = strIndexOf(out, elm)
	
	for(var c=0;c<pos.length;c++){
		//pos.push(0)
		var index =pos[c]
		if (typeof handler()[Object.keys(handler())[i]] == "function") { return }
		console.log('Pos Length:',pos.length,'\nPos:',pos,'\nToken String: ' + elm, '\n	Beggining:', out.substring(0, index), '\n	Replacement:', handler()[Object.keys(handler())[i]], '\n	End:', out.substring(index + Object.keys(handler())[i].length),'\n	Src (Est):',out.substring(index-3,index+3), '\n	Length:', Object.keys(handler())[i].length, '\n	Index:',index,'\n	Index Char:',out[index])
		out = replaceAt(out, index, handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
		//console.log(out,index,elm,handler()[Object.keys(handler())[i]],Object.keys(handler())[i].length,index + Object.keys(handler())[i].length,out.substring(index + Object.keys(handler())[i].length))
		
		pos = strIndexOf(out, elm)
	}
	if(pos.length==1){
		out = replaceAt(out, pos[0], handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
	}
})
console.log(out)
