import antlr4 from "antlr4"
import ICEScriptVisitor from "./antlr/parsers/antlr/grammars/ICEScriptVisitor";
import ICEScriptParser from "./antlr/parsers/antlr/grammars/ICEScriptParser";
import ICEScriptLexer from "./antlr/parsers/antlr/grammars/ICEScriptLexer";
import tokens from "./tokens";
const chars = new antlr4.InputStream(input);
const lexer = new ICEScriptLexer(chars);
const tokenstr = new antlr4.CommonTokenStream(lexer);
const parser = new ICEScriptParser(tokenstr);
const tree = parser.MyStartRule();