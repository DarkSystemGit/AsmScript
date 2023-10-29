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
    if(handlers.hasOwnProperty(token)){
        if(typeof handlers[token]=="Function"){
            return handlers[token](ctx)
        }else{
            return handlers[token]
        }
    }
}
class Visitor extends ICEScriptVisitor{

    visitChildren(ctx) {
        console.log(ctx.getText())
        let code = '';

        for (let i = 0; i < ctx.getChildCount(); i++) {
            code += this.visit(ctx.getChild(i));
        }

        return code.trim();
    }
    start(ctx) {
        return this.visitExpressionSequence(ctx);
    }
    visitTerminal(ctx) {
        return ctx.getText();
    }
}
//console.log(tree.toStringTree(parser.ruleNames))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
