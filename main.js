import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import {readFileSync,writeFileSync} from 'fs'
//console.log(readFileSync(process.argv[2]))

function handler(token,ctx,context){
    var children = context.visitChildren(ctx)
    var handlers={
        "&":"and",
        "||":"or",
        "!!":"not",
        "=":"=>",
        "var":function(ctx){
            //console.log(this)
            this.data=this.data||{}
            this.data.var=this.data.var||{}
            this.data.var.num=this.data.var.num||{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":"","U":"","V":"","W":"","X":"","Y":"","Z":""}
			this.data.var.list = this.data.var.list||{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":"","U":"","V":"","W":"","X":"","Y":"","Z":""}
			this.data.var.matrix=this.data.var.matrix||{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":""}
            const val =ctx.expression()
            if(val.getText()[0]=='"'){

            }
            return ""
        }
    }
    console.log(token,ctx.getText(), children)

    if(handlers.hasOwnProperty(token)){
        console.log(typeof handlers[token])
        if(typeof handlers[token]=="function"){
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

	  return handler("head",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#meta.
	visitMeta(ctx) {
	  return handler("meta",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#scriptName.
	visitScriptName(ctx) {
	  return handler("scriptName",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#include.
	visitInclude(ctx) {
	  return handler("import",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#function.
	visitFunction(ctx) {
	  return handler("function",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#func_params.
	visitFunc_params(ctx) {
	  return handler("funcPrams",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#assign_stmt.
	visitAssign_stmt(ctx) {
	  return handler("assign",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#ti_basic_stmt.
	visitTi_basic_stmt(ctx) {
	  return handler("tibStmt",ctx,this);
	}





	// Visit a parse tree produced by ICEScriptParser#add_assign_stmt.
	visitAdd_assign_stmt(ctx) {
	  return handler("addAssign",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#sub_assign_stmt.
	visitSub_assign_stmt(ctx) {
	  return handler("subAssign",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#mul_assign_stmt.
	visitMul_assign_stmt(ctx) {
	  return handler("mulAssign",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#div_assign_stmt.
	visitDiv_assign_stmt(ctx) {
	  return handler("divAssign",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#inc_stmt.
	visitInc_stmt(ctx) {
	  return handler("inc",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#dec_stmt.
	visitDec_stmt(ctx) {
	  return handler("dec",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#if_stmt.
	visitIf_stmt(ctx) {
	  return handler("if",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#while_stmt.
	visitWhile_stmt(ctx) {
	  return handler("while",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#var_stmt.
	visitVar_stmt(ctx) {

	  return handler("var",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#return_stmt.
	visitReturn_stmt(ctx) {
	  return handler("return",ctx,this);
	}





	// Visit a parse tree produced by ICEScriptParser#boolexpr.
	visitBoolexpr(ctx) {
	  return handler("bool",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#methodcall.
	visitMethodcall(ctx) {

	  return handler("methodCall",ctx,this);
	}


	// Visit a parse tree produced by ICEScriptParser#methodparams.
	visitMethodparams(ctx) {
	  return handler("funcParams",ctx,this);
	}
}
//console.log(tree.toStringTree(parser.ruleNames))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
var out =new Visitor().start(tree)
console.log(out)
