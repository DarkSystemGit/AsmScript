import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import {readFileSync,writeFileSync} from 'fs'
//console.log(readFileSync(process.argv[2]))

function handler(token,ctx){
    var handlers={
        "&":"and",
        "||":"or",
        "!!":"not"
    }
    console.log(token,ctx.getText())
    if(handlers.hasOwnProperty(token)){
        if(typeof handlers[token]=="Function"){
            return handlers[token](ctx)
        }else{
            return handlers[token]
        }
    }
    return ""
}
class Visitor extends ICEScriptVisitor{

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

	  this.visitChildren(ctx);return handler("head",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#meta.
	visitMeta(ctx) {
	  this.visitChildren(ctx);return handler("meta",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#scriptName.
	visitScriptName(ctx) {
	  this.visitChildren(ctx);return handler("scriptName",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#include.
	visitInclude(ctx) {
	  this.visitChildren(ctx);return handler("import",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#function.
	visitFunction(ctx) {
	  this.visitChildren(ctx);return handler("function",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#func_params.
	visitFunc_params(ctx) {
	  this.visitChildren(ctx);return handler("funcPrams",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#assign_stmt.
	visitAssign_stmt(ctx) {
	  this.visitChildren(ctx);return handler("assign",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#ti_basic_stmt.
	visitTi_basic_stmt(ctx) {
	  this.visitChildren(ctx);return handler("tibStmt",ctx);
	}





	// Visit a parse tree produced by ICEScriptParser#add_assign_stmt.
	visitAdd_assign_stmt(ctx) {
	  this.visitChildren(ctx);return handler("addAssign",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#sub_assign_stmt.
	visitSub_assign_stmt(ctx) {
	  this.visitChildren(ctx);return handler("subAssign",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#mul_assign_stmt.
	visitMul_assign_stmt(ctx) {
	  this.visitChildren(ctx);return handler("mulAssign",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#div_assign_stmt.
	visitDiv_assign_stmt(ctx) {
	  this.visitChildren(ctx);return handler("divAssign",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#inc_stmt.
	visitInc_stmt(ctx) {
	  this.visitChildren(ctx);return handler("inc",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#dec_stmt.
	visitDec_stmt(ctx) {
	  this.visitChildren(ctx);return handler("dec",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#if_stmt.
	visitIf_stmt(ctx) {
	  this.visitChildren(ctx);return handler("if",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#while_stmt.
	visitWhile_stmt(ctx) {
	  this.visitChildren(ctx);return handler("while",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#var_stmt.
	visitVar_stmt(ctx) {
	  this.visitChildren(ctx);return handler("var",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#return_stmt.
	visitReturn_stmt(ctx) {
	  this.visitChildren(ctx);return handler("return",ctx);
	}





	// Visit a parse tree produced by ICEScriptParser#boolexpr.
	visitBoolexpr(ctx) {
	  this.visitChildren(ctx);return handler("bool",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#methodcall.
	visitMethodcall(ctx) {
	  this.visitChildren(ctx);return handler("methodCall",ctx);
	}


	// Visit a parse tree produced by ICEScriptParser#methodparams.
	visitMethodparams(ctx) {
	  this.visitChildren(ctx);return handler("funcParams",ctx);
	}
}
//console.log(tree.toStringTree(parser.ruleNames))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
var out =new Visitor().start(tree)
//console.log(tree.toStringTree(parser.ruleNames))
