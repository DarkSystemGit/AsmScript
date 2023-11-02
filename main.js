import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import {readFileSync,writeFileSync} from 'fs'
//console.log(readFileSync(process.argv[2]))

function handler(token,ctx,context){
    var children = context.visitChildren(ctx)
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
Util.prototype.inString = function (char,stringMap) {
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
    function genStrMap (str) {
        var stringMap = []
        var strs = indexOf('"', str, true)
        strs.forEach((section, i) => {

            if ((i % 2 == 0)) {
                stringMap.push([strs[i], strs[i + 1]])
            }
        })
        return stringMap
    }
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
			this.data.var.list = this.data.var.list||{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":"","K":"","L":"","M":"","N":"","O":"","P":"","Q":"","R":"","S":"","T":"","U":"","V":"","W":"","X":"","Y":"","Z":"","Str0":"","Str1":"","Str2":"","Str3":"","Str4":"","Str5":"","Str6":"","Str7":"","Str8":"","Str9":""}
			this.data.var.matrix=this.data.var.matrix||{"A":"","B":"","C":"","D":"","E":"","F":"","G":"","H":"","I":"","J":""}
            const val =ctx.expression()
            if((val.getText()[0]=='"')||(!!(+val.getText()==NaN))){
				var index=0
				Object.values(this.data.var.num).forEach((elm,i)=>{if((elm=="")&&(index==0)){index=i}})
				this.data.var.num[Object.keys(this.data.var.num)[index]]=ctx.identifier().getText()
				return `${val.getText()}=>${Object.keys(this.data.var.num)[index]}`
            }else if((val.getText()[0]=='[')&&(!!(val.getText()[1]=='['))){
				var index=0
				var strIndex=0
				var res;
				Object.values(this.data.var.list).forEach((elm,i)=>{if((elm=="")&&(index==0)&&(i<=26)){index=i}})
                Object.values(this.data.var.list).forEach((elm,i)=>{if((elm=="")&&(strIndex==0)&&(i>26)){strIndex=i}})
				var list=val.getText().replace('[','')
				list[list.length-1]=""
				list=list.split(',')
				if(+list.join('')==NaN){
					this.data.var.list[Object.keys(this.data.var.list)[index]]={name:ctx.identifier().getText(),type:"str",strMap:Object.keys(this.data.var.list)[strIndex],val}
					var listData=this.data.var.list[Object.keys(this.data.var.list)[index]]
					
				}else{
                    this.data.var.list[Object.keys(this.data.var.list)[index]]={name:ctx.identifier().getText(),type:"num",val}
					res=val.replace('[','{')
					res[res.length-1]="}"
					return `${res}=>${Object.keys(this.data.var.list)[index]}`
                }

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
