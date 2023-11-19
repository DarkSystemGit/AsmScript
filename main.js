import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import * as util from "./functions.js"
import { handlers } from "./compiler.js";
import { readFileSync, writeFileSync } from 'fs'

function handler(token, ctx, context) {


	if (!token) {
		return handlers
	}
	var children = context.visitChildren(ctx)
	

	if (handlers.hasOwnProperty(token)) {
		
		if (typeof handlers[token] == "function") {
			
			handlers.const(...arguments)
			console.log(token+':',ctx.getText(),handlers[token]().bind(context.data,arguments)())
			return handlers[token]().bind(context.data,arguments)()
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
	var pos = util.strIndexOf(out, elm)

	for (var c = 0; c < pos.length; c++) {
		//pos.push(0)
		var index = pos[c]
		if (typeof handler()[Object.keys(handler())[i]] == "function") { return }
		//console.log('Pos Length:', pos.length, '\nPos:', pos, '\nToken String: ' + elm, '\n	Beggining:', out.substring(0, index), '\n	Replacement:', handler()[Object.keys(handler())[i]], '\n	End:', out.substring(index + Object.keys(handler())[i].length), '\n	Src (Est):', out.substring(index - 3, index + 3), '\n	Length:', Object.keys(handler())[i].length, '\n	Index:', index, '\n	Index Char:', out[index])
		out = util.replaceAt(out, index, handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
		//console.log(out,index,elm,handler()[Object.keys(handler())[i]],Object.keys(handler())[i].length,index + Object.keys(handler())[i].length,out.substring(index + Object.keys(handler())[i].length))

		pos = util.strIndexOf(out, elm)
	}
	if (pos.length == 1) {
		out = util.replaceAt(out, pos[0], handler()[Object.keys(handler())[i]], Object.keys(handler())[i].length)
	}
})
console.log('\nResults:', '\n	Tree:\n		', tree.toStringTree(parser.ruleNames), '\n	TI-Basic:\n		', out.replaceAll(':','\n:'),'\n Data:',/*handler()*/)
