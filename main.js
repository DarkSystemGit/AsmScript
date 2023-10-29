import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor.js";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser.js";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer.js";
import tokens from "./tokens.js";
import {readFileSync,writeFileSync} from 'fs'
//console.log(readFileSync(process.argv[2]))
const chars = new antlr4.InputStream(readFileSync(process.argv[2]).toString());
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.script();
function handler(token,ctx){
    var handlers={
        "&":"and"
    }
    if(handlers.hasOwnProperty(token)){
        if(typeof handlers[token]=="Function"){
            return handlers[token](ctx)
        }else{
            return handlers[token]
        }
    }
}
console.log(tree.toStringTree(parser.ruleNames))
