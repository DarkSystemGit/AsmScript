// Generated from ./antlr/grammars/ICEScript by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ICEScriptListener from './ICEScriptListener.js';
import ICEScriptVisitor from './ICEScriptVisitor.js';

const serializedATN = [4,1,54,363,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
5,0,71,8,0,10,0,12,0,74,9,0,1,0,5,0,77,8,0,10,0,12,0,80,9,0,1,0,3,0,83,8,
0,1,1,5,1,86,8,1,10,1,12,1,89,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,5,6,115,8,6,10,
6,12,6,118,9,6,3,6,120,8,6,1,7,1,7,1,7,1,7,1,7,3,7,127,8,7,1,7,1,7,1,7,1,
8,1,8,5,8,134,8,8,10,8,12,8,137,9,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,157,8,8,1,9,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,10,1,11,4,11,170,8,11,11,11,12,11,171,1,12,1,12,1,12,1,
12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,
18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
21,3,21,236,8,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,1,23,3,23,252,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,270,8,24,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,3,25,309,8,25,1,26,1,26,1,26,1,26,1,26,1,27,5,27,317,8,27,
10,27,12,27,320,9,27,1,27,1,27,5,27,324,8,27,10,27,12,27,327,9,27,1,28,1,
28,3,28,331,8,28,1,29,1,29,1,30,1,30,1,31,1,31,5,31,339,8,31,10,31,12,31,
342,9,31,1,31,1,31,5,31,346,8,31,10,31,12,31,349,9,31,1,31,1,31,1,32,1,32,
1,33,1,33,1,33,1,33,1,33,1,33,3,33,361,8,33,1,33,1,171,0,34,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
60,62,64,66,0,1,2,0,48,48,51,51,387,0,82,1,0,0,0,2,87,1,0,0,0,4,90,1,0,0,
0,6,92,1,0,0,0,8,96,1,0,0,0,10,100,1,0,0,0,12,119,1,0,0,0,14,126,1,0,0,0,
16,156,1,0,0,0,18,158,1,0,0,0,20,163,1,0,0,0,22,169,1,0,0,0,24,173,1,0,0,
0,26,178,1,0,0,0,28,183,1,0,0,0,30,188,1,0,0,0,32,193,1,0,0,0,34,197,1,0,
0,0,36,201,1,0,0,0,38,207,1,0,0,0,40,215,1,0,0,0,42,235,1,0,0,0,44,237,1,
0,0,0,46,251,1,0,0,0,48,269,1,0,0,0,50,308,1,0,0,0,52,310,1,0,0,0,54,318,
1,0,0,0,56,330,1,0,0,0,58,332,1,0,0,0,60,334,1,0,0,0,62,336,1,0,0,0,64,352,
1,0,0,0,66,360,1,0,0,0,68,72,3,2,1,0,69,71,3,10,5,0,70,69,1,0,0,0,71,74,
1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,78,1,0,0,0,74,72,1,0,0,0,75,77,3,
16,8,0,76,75,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,83,1,0,
0,0,80,78,1,0,0,0,81,83,5,0,0,1,82,68,1,0,0,0,82,81,1,0,0,0,83,1,1,0,0,0,
84,86,3,8,4,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,
3,1,0,0,0,89,87,1,0,0,0,90,91,3,6,3,0,91,5,1,0,0,0,92,93,5,1,0,0,93,94,3,
58,29,0,94,95,5,18,0,0,95,7,1,0,0,0,96,97,5,2,0,0,97,98,3,58,29,0,98,99,
5,18,0,0,99,9,1,0,0,0,100,101,5,3,0,0,101,102,3,58,29,0,102,103,5,14,0,0,
103,104,3,12,6,0,104,105,5,15,0,0,105,106,5,4,0,0,106,107,3,66,33,0,107,
108,3,16,8,0,108,11,1,0,0,0,109,120,3,14,7,0,110,120,1,0,0,0,111,116,3,14,
7,0,112,113,5,5,0,0,113,115,3,14,7,0,114,112,1,0,0,0,115,118,1,0,0,0,116,
114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,119,109,1,0,
0,0,119,110,1,0,0,0,119,111,1,0,0,0,120,13,1,0,0,0,121,127,3,58,29,0,122,
127,1,0,0,0,123,127,3,46,23,0,124,127,1,0,0,0,125,127,3,22,11,0,126,121,
1,0,0,0,126,122,1,0,0,0,126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,
127,128,1,0,0,0,128,129,5,4,0,0,129,130,3,66,33,0,130,15,1,0,0,0,131,135,
5,16,0,0,132,134,3,16,8,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,
0,135,136,1,0,0,0,136,138,1,0,0,0,137,135,1,0,0,0,138,157,5,17,0,0,139,157,
3,18,9,0,140,157,3,20,10,0,141,157,3,24,12,0,142,157,3,26,13,0,143,157,3,
28,14,0,144,157,3,30,15,0,145,157,3,32,16,0,146,157,3,34,17,0,147,157,3,
36,18,0,148,157,3,38,19,0,149,157,3,40,20,0,150,157,3,42,21,0,151,157,3,
44,22,0,152,153,3,46,23,0,153,154,5,18,0,0,154,157,1,0,0,0,155,157,5,18,
0,0,156,131,1,0,0,0,156,139,1,0,0,0,156,140,1,0,0,0,156,141,1,0,0,0,156,
142,1,0,0,0,156,143,1,0,0,0,156,144,1,0,0,0,156,145,1,0,0,0,156,146,1,0,
0,0,156,147,1,0,0,0,156,148,1,0,0,0,156,149,1,0,0,0,156,150,1,0,0,0,156,
151,1,0,0,0,156,152,1,0,0,0,156,155,1,0,0,0,157,17,1,0,0,0,158,159,3,58,
29,0,159,160,5,32,0,0,160,161,3,46,23,0,161,162,5,18,0,0,162,19,1,0,0,0,
163,164,5,6,0,0,164,165,5,16,0,0,165,166,3,22,11,0,166,167,5,17,0,0,167,
21,1,0,0,0,168,170,9,0,0,0,169,168,1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,
0,171,169,1,0,0,0,172,23,1,0,0,0,173,174,3,58,29,0,174,175,5,33,0,0,175,
176,3,56,28,0,176,177,5,18,0,0,177,25,1,0,0,0,178,179,3,58,29,0,179,180,
5,34,0,0,180,181,3,56,28,0,181,182,5,18,0,0,182,27,1,0,0,0,183,184,3,58,
29,0,184,185,5,35,0,0,185,186,3,56,28,0,186,187,5,18,0,0,187,29,1,0,0,0,
188,189,3,58,29,0,189,190,5,36,0,0,190,191,3,56,28,0,191,192,5,18,0,0,192,
31,1,0,0,0,193,194,3,58,29,0,194,195,5,39,0,0,195,196,5,18,0,0,196,33,1,
0,0,0,197,198,3,58,29,0,198,199,5,40,0,0,199,200,5,18,0,0,200,35,1,0,0,0,
201,202,5,37,0,0,202,203,5,14,0,0,203,204,3,50,25,0,204,205,5,15,0,0,205,
206,3,16,8,0,206,37,1,0,0,0,207,208,5,37,0,0,208,209,5,14,0,0,209,210,3,
50,25,0,210,211,5,15,0,0,211,212,3,16,8,0,212,213,5,38,0,0,213,214,3,16,
8,0,214,39,1,0,0,0,215,216,5,43,0,0,216,217,5,14,0,0,217,218,3,50,25,0,218,
219,5,15,0,0,219,220,3,16,8,0,220,41,1,0,0,0,221,222,5,42,0,0,222,223,3,
58,29,0,223,224,5,32,0,0,224,225,3,46,23,0,225,226,5,18,0,0,226,236,1,0,
0,0,227,228,5,42,0,0,228,229,3,58,29,0,229,230,5,4,0,0,230,231,3,66,33,0,
231,232,5,32,0,0,232,233,3,46,23,0,233,234,5,18,0,0,234,236,1,0,0,0,235,
221,1,0,0,0,235,227,1,0,0,0,236,43,1,0,0,0,237,238,5,44,0,0,238,239,3,46,
23,0,239,240,5,18,0,0,240,45,1,0,0,0,241,242,5,14,0,0,242,243,3,46,23,0,
243,244,5,15,0,0,244,252,1,0,0,0,245,252,3,56,28,0,246,252,3,58,29,0,247,
252,3,50,25,0,248,252,5,49,0,0,249,252,3,52,26,0,250,252,5,50,0,0,251,241,
1,0,0,0,251,245,1,0,0,0,251,246,1,0,0,0,251,247,1,0,0,0,251,248,1,0,0,0,
251,249,1,0,0,0,251,250,1,0,0,0,252,47,1,0,0,0,253,254,3,46,23,0,254,255,
5,19,0,0,255,256,3,46,23,0,256,270,1,0,0,0,257,258,3,46,23,0,258,259,5,20,
0,0,259,260,3,46,23,0,260,270,1,0,0,0,261,262,3,46,23,0,262,263,5,21,0,0,
263,264,3,46,23,0,264,270,1,0,0,0,265,266,3,46,23,0,266,267,5,22,0,0,267,
268,3,46,23,0,268,270,1,0,0,0,269,253,1,0,0,0,269,257,1,0,0,0,269,261,1,
0,0,0,269,265,1,0,0,0,270,49,1,0,0,0,271,309,3,56,28,0,272,309,5,45,0,0,
273,309,5,46,0,0,274,275,3,56,28,0,275,276,5,23,0,0,276,277,3,50,25,0,277,
309,1,0,0,0,278,279,3,56,28,0,279,280,5,24,0,0,280,281,3,50,25,0,281,309,
1,0,0,0,282,283,3,56,28,0,283,284,5,25,0,0,284,285,3,50,25,0,285,309,1,0,
0,0,286,287,3,56,28,0,287,288,5,26,0,0,288,289,3,50,25,0,289,309,1,0,0,0,
290,291,3,56,28,0,291,292,5,27,0,0,292,293,3,50,25,0,293,309,1,0,0,0,294,
295,3,56,28,0,295,296,5,28,0,0,296,297,3,50,25,0,297,309,1,0,0,0,298,299,
3,56,28,0,299,300,5,29,0,0,300,301,3,50,25,0,301,309,1,0,0,0,302,303,3,56,
28,0,303,304,5,30,0,0,304,305,3,50,25,0,305,309,1,0,0,0,306,307,5,31,0,0,
307,309,3,50,25,0,308,271,1,0,0,0,308,272,1,0,0,0,308,273,1,0,0,0,308,274,
1,0,0,0,308,278,1,0,0,0,308,282,1,0,0,0,308,286,1,0,0,0,308,290,1,0,0,0,
308,294,1,0,0,0,308,298,1,0,0,0,308,302,1,0,0,0,308,306,1,0,0,0,309,51,1,
0,0,0,310,311,3,58,29,0,311,312,5,14,0,0,312,313,3,54,27,0,313,314,5,15,
0,0,314,53,1,0,0,0,315,317,3,46,23,0,316,315,1,0,0,0,317,320,1,0,0,0,318,
316,1,0,0,0,318,319,1,0,0,0,319,325,1,0,0,0,320,318,1,0,0,0,321,322,5,5,
0,0,322,324,3,46,23,0,323,321,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,
326,1,0,0,0,326,55,1,0,0,0,327,325,1,0,0,0,328,331,3,58,29,0,329,331,3,60,
30,0,330,328,1,0,0,0,330,329,1,0,0,0,331,57,1,0,0,0,332,333,5,47,0,0,333,
59,1,0,0,0,334,335,7,0,0,0,335,61,1,0,0,0,336,340,5,7,0,0,337,339,3,46,23,
0,338,337,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,347,
1,0,0,0,342,340,1,0,0,0,343,344,5,5,0,0,344,346,3,46,23,0,345,343,1,0,0,
0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,350,1,0,0,0,349,347,
1,0,0,0,350,351,5,8,0,0,351,63,1,0,0,0,352,353,5,49,0,0,353,65,1,0,0,0,354,
361,1,0,0,0,355,361,5,9,0,0,356,361,5,10,0,0,357,361,5,11,0,0,358,361,5,
12,0,0,359,361,5,13,0,0,360,354,1,0,0,0,360,355,1,0,0,0,360,356,1,0,0,0,
360,357,1,0,0,0,360,358,1,0,0,0,360,359,1,0,0,0,361,67,1,0,0,0,20,72,78,
82,87,116,119,126,135,156,171,235,251,269,308,318,325,330,340,347,360];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ICEScriptParser extends antlr4.Parser {

    static grammarFileName = "ICEScript";
    static literalNames = [ null, "'name:'", "'import'", "'function '", 
                            "':'", "','", "'__ASM'", "'['", "']'", "'void'", 
                            "'list'", "'str'", "'number'", "'bool'", "'('", 
                            "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", 
                            "'/'", "'>'", "'<'", "'=='", "'!='", "'>='", 
                            "'<='", "'||'", "'&&'", "'!'", "'='", "'+='", 
                            "'-='", "'*='", "'/='", "'if'", "'else'", "'++'", 
                            "'--'", "'function'", "'var'", "'while'", "'return'", 
                            "'true'", "'false'", null, "'$pi'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "OPEN_BRACKET", 
                             "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", 
                             "END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
                             "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
                             "LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", 
                             "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
                             "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", 
                             "VAR", "WHILE", "RETURN", "TRUE", "FALSE", 
                             "IDENTIFIER", "PI", "STRING", "LIST", "NUMBER", 
                             "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE" ];
    static ruleNames = [ "script", "header", "meta", "scriptName", "include", 
                         "function", "func_params", "func_identifier", "statement", 
                         "assign_stmt", "ti_basic_stmt", "any", "add_assign_stmt", 
                         "sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", 
                         "inc_stmt", "dec_stmt", "if_stmt", "if_else_stmt", 
                         "while_stmt", "var_stmt", "return_stmt", "expression", 
                         "math", "boolexpr", "methodcall", "methodparams", 
                         "value", "identifier", "number", "list", "string", 
                         "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ICEScriptParser.ruleNames;
        this.literalNames = ICEScriptParser.literalNames;
        this.symbolicNames = ICEScriptParser.symbolicNames;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ICEScriptParser.RULE_script);
	    var _la = 0;
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.header();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 69;
	                this.function_();
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147827776) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 32737) !== 0)) {
	                this.state = 75;
	                this.statement();
	                this.state = 80;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.match(ICEScriptParser.EOF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ICEScriptParser.RULE_header);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 84;
	            this.include();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meta() {
	    let localctx = new MetaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ICEScriptParser.RULE_meta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.scriptName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scriptName() {
	    let localctx = new ScriptNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ICEScriptParser.RULE_scriptName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(ICEScriptParser.T__0);
	        this.state = 93;
	        this.identifier();
	        this.state = 94;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	include() {
	    let localctx = new IncludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ICEScriptParser.RULE_include);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(ICEScriptParser.T__1);
	        this.state = 97;
	        this.identifier();
	        this.state = 98;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ICEScriptParser.RULE_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(ICEScriptParser.T__2);
	        this.state = 101;
	        this.identifier();
	        this.state = 102;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 103;
	        this.func_params();
	        this.state = 104;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 105;
	        this.match(ICEScriptParser.T__3);
	        this.state = 106;
	        this.type();
	        this.state = 107;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_params() {
	    let localctx = new Func_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ICEScriptParser.RULE_func_params);
	    var _la = 0;
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.func_identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.func_identifier();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 112;
	                this.match(ICEScriptParser.T__4);
	                this.state = 113;
	                this.func_identifier();
	                this.state = 118;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_identifier() {
	    let localctx = new Func_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ICEScriptParser.RULE_func_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 121;
	            this.identifier();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 123;
	            this.expression();
	            break;

	        case 4:
	            break;

	        case 5:
	            this.state = 125;
	            this.any();
	            break;

	        }
	        this.state = 128;
	        this.match(ICEScriptParser.T__3);
	        this.state = 129;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ICEScriptParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.match(ICEScriptParser.OPEN_CURLEY);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147827776) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 32737) !== 0)) {
	                this.state = 132;
	                this.statement();
	                this.state = 137;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 138;
	            this.match(ICEScriptParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.ti_basic_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 142;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 143;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 144;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 145;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 146;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 147;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 148;
	            this.if_else_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 149;
	            this.while_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 150;
	            this.var_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 151;
	            this.return_stmt();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 152;
	            this.expression();
	            this.state = 153;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 155;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign_stmt() {
	    let localctx = new Assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ICEScriptParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.identifier();
	        this.state = 159;
	        this.match(ICEScriptParser.ASSIGN);
	        this.state = 160;
	        this.expression();
	        this.state = 161;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ti_basic_stmt() {
	    let localctx = new Ti_basic_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ICEScriptParser.RULE_ti_basic_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(ICEScriptParser.T__5);
	        this.state = 164;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 165;
	        this.any();
	        this.state = 166;
	        this.match(ICEScriptParser.CLOSE_CURLEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	any() {
	    let localctx = new AnyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ICEScriptParser.RULE_any);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 168;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 171; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
	        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	add_assign_stmt() {
	    let localctx = new Add_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ICEScriptParser.RULE_add_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.identifier();
	        this.state = 174;
	        this.match(ICEScriptParser.ADDASSIGN);
	        this.state = 175;
	        this.value();
	        this.state = 176;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sub_assign_stmt() {
	    let localctx = new Sub_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ICEScriptParser.RULE_sub_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.identifier();
	        this.state = 179;
	        this.match(ICEScriptParser.SUBASSIGN);
	        this.state = 180;
	        this.value();
	        this.state = 181;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mul_assign_stmt() {
	    let localctx = new Mul_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ICEScriptParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.identifier();
	        this.state = 184;
	        this.match(ICEScriptParser.MULASSIGN);
	        this.state = 185;
	        this.value();
	        this.state = 186;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	div_assign_stmt() {
	    let localctx = new Div_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ICEScriptParser.RULE_div_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.identifier();
	        this.state = 189;
	        this.match(ICEScriptParser.DIVASSIGN);
	        this.state = 190;
	        this.value();
	        this.state = 191;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inc_stmt() {
	    let localctx = new Inc_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ICEScriptParser.RULE_inc_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.identifier();
	        this.state = 194;
	        this.match(ICEScriptParser.INCREMENT);
	        this.state = 195;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dec_stmt() {
	    let localctx = new Dec_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ICEScriptParser.RULE_dec_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.identifier();
	        this.state = 198;
	        this.match(ICEScriptParser.DECREMENT);
	        this.state = 199;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ICEScriptParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(ICEScriptParser.IF);
	        this.state = 202;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 203;
	        this.boolexpr();
	        this.state = 204;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 205;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_else_stmt() {
	    let localctx = new If_else_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ICEScriptParser.RULE_if_else_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(ICEScriptParser.IF);
	        this.state = 208;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 209;
	        this.boolexpr();
	        this.state = 210;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 211;
	        this.statement();
	        this.state = 212;
	        this.match(ICEScriptParser.ELSE);
	        this.state = 213;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ICEScriptParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(ICEScriptParser.WHILE);
	        this.state = 216;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 217;
	        this.boolexpr();
	        this.state = 218;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 219;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	var_stmt() {
	    let localctx = new Var_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ICEScriptParser.RULE_var_stmt);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(ICEScriptParser.VAR);
	            this.state = 222;
	            this.identifier();
	            this.state = 223;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 224;
	            this.expression();
	            this.state = 225;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.match(ICEScriptParser.VAR);
	            this.state = 228;
	            this.identifier();
	            this.state = 229;
	            this.match(ICEScriptParser.T__3);
	            this.state = 230;
	            this.type();
	            this.state = 231;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 232;
	            this.expression();
	            this.state = 233;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_stmt() {
	    let localctx = new Return_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ICEScriptParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(ICEScriptParser.RETURN);
	        this.state = 238;
	        this.expression();
	        this.state = 239;
	        this.match(ICEScriptParser.END_STMT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ICEScriptParser.RULE_expression);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 242;
	            this.expression();
	            this.state = 243;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.value();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 246;
	            this.identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 247;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 248;
	            this.match(ICEScriptParser.STRING);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 249;
	            this.methodcall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 250;
	            this.match(ICEScriptParser.LIST);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	math() {
	    let localctx = new MathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ICEScriptParser.RULE_math);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            this.expression();
	            this.state = 254;
	            this.match(ICEScriptParser.ADD);
	            this.state = 255;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.expression();
	            this.state = 258;
	            this.match(ICEScriptParser.SUB);
	            this.state = 259;
	            this.expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 261;
	            this.expression();
	            this.state = 262;
	            this.match(ICEScriptParser.MUL);
	            this.state = 263;
	            this.expression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 265;
	            this.expression();
	            this.state = 266;
	            this.match(ICEScriptParser.DIV);
	            this.state = 267;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolexpr() {
	    let localctx = new BoolexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ICEScriptParser.RULE_boolexpr);
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 271;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.match(ICEScriptParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 273;
	            this.match(ICEScriptParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 274;
	            this.value();
	            this.state = 275;
	            this.match(ICEScriptParser.GREATER_THAN);
	            this.state = 276;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 278;
	            this.value();
	            this.state = 279;
	            this.match(ICEScriptParser.LESS_THAN);
	            this.state = 280;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 282;
	            this.value();
	            this.state = 283;
	            this.match(ICEScriptParser.EQUAL_TO);
	            this.state = 284;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 286;
	            this.value();
	            this.state = 287;
	            this.match(ICEScriptParser.NOT_EQUAL_TO);
	            this.state = 288;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 290;
	            this.value();
	            this.state = 291;
	            this.match(ICEScriptParser.GREATER_THAN_OR_EQUAL);
	            this.state = 292;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 294;
	            this.value();
	            this.state = 295;
	            this.match(ICEScriptParser.LESS_THAN_OR_EQUAL);
	            this.state = 296;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 298;
	            this.value();
	            this.state = 299;
	            this.match(ICEScriptParser.OR);
	            this.state = 300;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 302;
	            this.value();
	            this.state = 303;
	            this.match(ICEScriptParser.AND);
	            this.state = 304;
	            this.boolexpr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 306;
	            this.match(ICEScriptParser.NOT);
	            this.state = 307;
	            this.boolexpr();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodcall() {
	    let localctx = new MethodcallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ICEScriptParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.identifier();
	        this.state = 311;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 312;
	        this.methodparams();
	        this.state = 313;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodparams() {
	    let localctx = new MethodparamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ICEScriptParser.RULE_methodparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===31 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 127) !== 0)) {
	            this.state = 315;
	            this.expression();
	            this.state = 320;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 321;
	            this.match(ICEScriptParser.T__4);
	            this.state = 322;
	            this.expression();
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ICEScriptParser.RULE_value);
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            this.identifier();
	            break;
	        case 48:
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.number();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ICEScriptParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(ICEScriptParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ICEScriptParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===51)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ICEScriptParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(ICEScriptParser.T__6);
	        this.state = 340;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===31 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 127) !== 0)) {
	            this.state = 337;
	            this.expression();
	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 347;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 343;
	            this.match(ICEScriptParser.T__4);
	            this.state = 344;
	            this.expression();
	            this.state = 349;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 350;
	        this.match(ICEScriptParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ICEScriptParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(ICEScriptParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ICEScriptParser.RULE_type);
	    try {
	        this.state = 360;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	        case 14:
	        case 15:
	        case 16:
	        case 18:
	        case 31:
	        case 32:
	        case 37:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.match(ICEScriptParser.T__8);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 356;
	            this.match(ICEScriptParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 357;
	            this.match(ICEScriptParser.T__10);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 358;
	            this.match(ICEScriptParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 359;
	            this.match(ICEScriptParser.T__12);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ICEScriptParser.EOF = antlr4.Token.EOF;
ICEScriptParser.T__0 = 1;
ICEScriptParser.T__1 = 2;
ICEScriptParser.T__2 = 3;
ICEScriptParser.T__3 = 4;
ICEScriptParser.T__4 = 5;
ICEScriptParser.T__5 = 6;
ICEScriptParser.T__6 = 7;
ICEScriptParser.T__7 = 8;
ICEScriptParser.T__8 = 9;
ICEScriptParser.T__9 = 10;
ICEScriptParser.T__10 = 11;
ICEScriptParser.T__11 = 12;
ICEScriptParser.T__12 = 13;
ICEScriptParser.OPEN_BRACKET = 14;
ICEScriptParser.CLOSE_BRACKET = 15;
ICEScriptParser.OPEN_CURLEY = 16;
ICEScriptParser.CLOSE_CURLEY = 17;
ICEScriptParser.END_STMT = 18;
ICEScriptParser.ADD = 19;
ICEScriptParser.SUB = 20;
ICEScriptParser.MUL = 21;
ICEScriptParser.DIV = 22;
ICEScriptParser.GREATER_THAN = 23;
ICEScriptParser.LESS_THAN = 24;
ICEScriptParser.EQUAL_TO = 25;
ICEScriptParser.NOT_EQUAL_TO = 26;
ICEScriptParser.GREATER_THAN_OR_EQUAL = 27;
ICEScriptParser.LESS_THAN_OR_EQUAL = 28;
ICEScriptParser.OR = 29;
ICEScriptParser.AND = 30;
ICEScriptParser.NOT = 31;
ICEScriptParser.ASSIGN = 32;
ICEScriptParser.ADDASSIGN = 33;
ICEScriptParser.SUBASSIGN = 34;
ICEScriptParser.MULASSIGN = 35;
ICEScriptParser.DIVASSIGN = 36;
ICEScriptParser.IF = 37;
ICEScriptParser.ELSE = 38;
ICEScriptParser.INCREMENT = 39;
ICEScriptParser.DECREMENT = 40;
ICEScriptParser.DEF = 41;
ICEScriptParser.VAR = 42;
ICEScriptParser.WHILE = 43;
ICEScriptParser.RETURN = 44;
ICEScriptParser.TRUE = 45;
ICEScriptParser.FALSE = 46;
ICEScriptParser.IDENTIFIER = 47;
ICEScriptParser.PI = 48;
ICEScriptParser.STRING = 49;
ICEScriptParser.LIST = 50;
ICEScriptParser.NUMBER = 51;
ICEScriptParser.LINECOMMENT = 52;
ICEScriptParser.BLOCKCOMMENT = 53;
ICEScriptParser.WHITESPACE = 54;

ICEScriptParser.RULE_script = 0;
ICEScriptParser.RULE_header = 1;
ICEScriptParser.RULE_meta = 2;
ICEScriptParser.RULE_scriptName = 3;
ICEScriptParser.RULE_include = 4;
ICEScriptParser.RULE_function = 5;
ICEScriptParser.RULE_func_params = 6;
ICEScriptParser.RULE_func_identifier = 7;
ICEScriptParser.RULE_statement = 8;
ICEScriptParser.RULE_assign_stmt = 9;
ICEScriptParser.RULE_ti_basic_stmt = 10;
ICEScriptParser.RULE_any = 11;
ICEScriptParser.RULE_add_assign_stmt = 12;
ICEScriptParser.RULE_sub_assign_stmt = 13;
ICEScriptParser.RULE_mul_assign_stmt = 14;
ICEScriptParser.RULE_div_assign_stmt = 15;
ICEScriptParser.RULE_inc_stmt = 16;
ICEScriptParser.RULE_dec_stmt = 17;
ICEScriptParser.RULE_if_stmt = 18;
ICEScriptParser.RULE_if_else_stmt = 19;
ICEScriptParser.RULE_while_stmt = 20;
ICEScriptParser.RULE_var_stmt = 21;
ICEScriptParser.RULE_return_stmt = 22;
ICEScriptParser.RULE_expression = 23;
ICEScriptParser.RULE_math = 24;
ICEScriptParser.RULE_boolexpr = 25;
ICEScriptParser.RULE_methodcall = 26;
ICEScriptParser.RULE_methodparams = 27;
ICEScriptParser.RULE_value = 28;
ICEScriptParser.RULE_identifier = 29;
ICEScriptParser.RULE_number = 30;
ICEScriptParser.RULE_list = 31;
ICEScriptParser.RULE_string = 32;
ICEScriptParser.RULE_type = 33;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_script;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	EOF() {
	    return this.getToken(ICEScriptParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_header;
    }

	include = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncludeContext);
	    } else {
	        return this.getTypedRuleContext(IncludeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitHeader(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitHeader(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_meta;
    }

	scriptName() {
	    return this.getTypedRuleContext(ScriptNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMeta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMeta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMeta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScriptNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_scriptName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterScriptName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitScriptName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitScriptName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_include;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterInclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitInclude(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitInclude(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_function;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	func_params() {
	    return this.getTypedRuleContext(Func_paramsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_func_params;
    }

	func_identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_identifierContext);
	    } else {
	        return this.getTypedRuleContext(Func_identifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunc_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunc_params(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunc_params(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_func_identifier;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	any() {
	    return this.getTypedRuleContext(AnyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunc_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunc_identifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunc_identifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_statement;
    }

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	assign_stmt() {
	    return this.getTypedRuleContext(Assign_stmtContext,0);
	};

	ti_basic_stmt() {
	    return this.getTypedRuleContext(Ti_basic_stmtContext,0);
	};

	add_assign_stmt() {
	    return this.getTypedRuleContext(Add_assign_stmtContext,0);
	};

	sub_assign_stmt() {
	    return this.getTypedRuleContext(Sub_assign_stmtContext,0);
	};

	mul_assign_stmt() {
	    return this.getTypedRuleContext(Mul_assign_stmtContext,0);
	};

	div_assign_stmt() {
	    return this.getTypedRuleContext(Div_assign_stmtContext,0);
	};

	inc_stmt() {
	    return this.getTypedRuleContext(Inc_stmtContext,0);
	};

	dec_stmt() {
	    return this.getTypedRuleContext(Dec_stmtContext,0);
	};

	if_stmt() {
	    return this.getTypedRuleContext(If_stmtContext,0);
	};

	if_else_stmt() {
	    return this.getTypedRuleContext(If_else_stmtContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	var_stmt() {
	    return this.getTypedRuleContext(Var_stmtContext,0);
	};

	return_stmt() {
	    return this.getTypedRuleContext(Return_stmtContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(ICEScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAssign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAssign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAssign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Ti_basic_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_ti_basic_stmt;
    }

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	any() {
	    return this.getTypedRuleContext(AnyContext,0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterTi_basic_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitTi_basic_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitTi_basic_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_any;
    }


	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAny(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAny(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAny(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Add_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_add_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ADDASSIGN() {
	    return this.getToken(ICEScriptParser.ADDASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAdd_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAdd_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAdd_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sub_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_sub_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SUBASSIGN() {
	    return this.getToken(ICEScriptParser.SUBASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterSub_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitSub_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitSub_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Mul_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_mul_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	MULASSIGN() {
	    return this.getToken(ICEScriptParser.MULASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMul_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMul_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMul_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Div_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_div_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DIVASSIGN() {
	    return this.getToken(ICEScriptParser.DIVASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterDiv_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitDiv_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitDiv_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Inc_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_inc_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	INCREMENT() {
	    return this.getToken(ICEScriptParser.INCREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterInc_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitInc_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitInc_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Dec_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_dec_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DECREMENT() {
	    return this.getToken(ICEScriptParser.DECREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterDec_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitDec_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitDec_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_if_stmt;
    }

	IF() {
	    return this.getToken(ICEScriptParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIf_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIf_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIf_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_else_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_if_else_stmt;
    }

	IF() {
	    return this.getToken(ICEScriptParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(ICEScriptParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIf_else_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIf_else_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIf_else_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class While_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_while_stmt;
    }

	WHILE() {
	    return this.getToken(ICEScriptParser.WHILE, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitWhile_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitWhile_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Var_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_var_stmt;
    }

	VAR() {
	    return this.getToken(ICEScriptParser.VAR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(ICEScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterVar_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitVar_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitVar_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Return_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_return_stmt;
    }

	RETURN() {
	    return this.getToken(ICEScriptParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterReturn_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitReturn_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitReturn_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_expression;
    }

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	STRING() {
	    return this.getToken(ICEScriptParser.STRING, 0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	LIST() {
	    return this.getToken(ICEScriptParser.LIST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_math;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(ICEScriptParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ICEScriptParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(ICEScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ICEScriptParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_boolexpr;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TRUE() {
	    return this.getToken(ICEScriptParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ICEScriptParser.FALSE, 0);
	};

	GREATER_THAN() {
	    return this.getToken(ICEScriptParser.GREATER_THAN, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	LESS_THAN() {
	    return this.getToken(ICEScriptParser.LESS_THAN, 0);
	};

	EQUAL_TO() {
	    return this.getToken(ICEScriptParser.EQUAL_TO, 0);
	};

	NOT_EQUAL_TO() {
	    return this.getToken(ICEScriptParser.NOT_EQUAL_TO, 0);
	};

	GREATER_THAN_OR_EQUAL() {
	    return this.getToken(ICEScriptParser.GREATER_THAN_OR_EQUAL, 0);
	};

	LESS_THAN_OR_EQUAL() {
	    return this.getToken(ICEScriptParser.LESS_THAN_OR_EQUAL, 0);
	};

	OR() {
	    return this.getToken(ICEScriptParser.OR, 0);
	};

	AND() {
	    return this.getToken(ICEScriptParser.AND, 0);
	};

	NOT() {
	    return this.getToken(ICEScriptParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterBoolexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitBoolexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitBoolexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodcallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_methodcall;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	methodparams() {
	    return this.getTypedRuleContext(MethodparamsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMethodcall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMethodcall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMethodcall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodparamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_methodparams;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMethodparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMethodparams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMethodparams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_value;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(ICEScriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(ICEScriptParser.NUMBER, 0);
	};

	PI() {
	    return this.getToken(ICEScriptParser.PI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_list;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_string;
    }

	STRING() {
	    return this.getToken(ICEScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_type;
    }


	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ICEScriptParser.ScriptContext = ScriptContext; 
ICEScriptParser.HeaderContext = HeaderContext; 
ICEScriptParser.MetaContext = MetaContext; 
ICEScriptParser.ScriptNameContext = ScriptNameContext; 
ICEScriptParser.IncludeContext = IncludeContext; 
ICEScriptParser.FunctionContext = FunctionContext; 
ICEScriptParser.Func_paramsContext = Func_paramsContext; 
ICEScriptParser.Func_identifierContext = Func_identifierContext; 
ICEScriptParser.StatementContext = StatementContext; 
ICEScriptParser.Assign_stmtContext = Assign_stmtContext; 
ICEScriptParser.Ti_basic_stmtContext = Ti_basic_stmtContext; 
ICEScriptParser.AnyContext = AnyContext; 
ICEScriptParser.Add_assign_stmtContext = Add_assign_stmtContext; 
ICEScriptParser.Sub_assign_stmtContext = Sub_assign_stmtContext; 
ICEScriptParser.Mul_assign_stmtContext = Mul_assign_stmtContext; 
ICEScriptParser.Div_assign_stmtContext = Div_assign_stmtContext; 
ICEScriptParser.Inc_stmtContext = Inc_stmtContext; 
ICEScriptParser.Dec_stmtContext = Dec_stmtContext; 
ICEScriptParser.If_stmtContext = If_stmtContext; 
ICEScriptParser.If_else_stmtContext = If_else_stmtContext; 
ICEScriptParser.While_stmtContext = While_stmtContext; 
ICEScriptParser.Var_stmtContext = Var_stmtContext; 
ICEScriptParser.Return_stmtContext = Return_stmtContext; 
ICEScriptParser.ExpressionContext = ExpressionContext; 
ICEScriptParser.MathContext = MathContext; 
ICEScriptParser.BoolexprContext = BoolexprContext; 
ICEScriptParser.MethodcallContext = MethodcallContext; 
ICEScriptParser.MethodparamsContext = MethodparamsContext; 
ICEScriptParser.ValueContext = ValueContext; 
ICEScriptParser.IdentifierContext = IdentifierContext; 
ICEScriptParser.NumberContext = NumberContext; 
ICEScriptParser.ListContext = ListContext; 
ICEScriptParser.StringContext = StringContext; 
ICEScriptParser.TypeContext = TypeContext; 
