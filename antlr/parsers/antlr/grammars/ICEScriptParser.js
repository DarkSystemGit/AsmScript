// Generated from ./antlr/grammars/ICEScript by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ICEScriptListener from './ICEScriptListener.js';
import ICEScriptVisitor from './ICEScriptVisitor.js';

const serializedATN = [4,1,45,291,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,1,0,5,0,59,8,0,10,0,12,0,62,9,0,1,0,5,0,65,8,0,10,0,12,0,68,9,0,
1,0,3,0,71,8,0,1,1,5,1,74,8,1,10,1,12,1,77,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,5,6,97,8,6,10,6,12,6,100,9,
6,1,6,1,6,5,6,104,8,6,10,6,12,6,107,9,6,1,7,1,7,5,7,111,8,7,10,7,12,7,114,
9,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
3,7,133,8,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,4,10,146,8,10,11,
10,12,10,147,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,
16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,
1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,
21,1,21,1,21,1,21,3,21,209,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,5,21,223,8,21,10,21,12,21,226,9,21,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,3,22,263,8,22,1,23,1,23,1,23,1,23,1,23,1,24,5,24,271,8,24,10,
24,12,24,274,9,24,1,24,1,24,5,24,278,8,24,10,24,12,24,281,9,24,1,25,1,25,
3,25,285,8,25,1,26,1,26,1,27,1,27,1,27,1,147,1,42,28,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,0,1,1,0,38,41,
305,0,70,1,0,0,0,2,75,1,0,0,0,4,78,1,0,0,0,6,80,1,0,0,0,8,84,1,0,0,0,10,
88,1,0,0,0,12,98,1,0,0,0,14,132,1,0,0,0,16,134,1,0,0,0,18,139,1,0,0,0,20,
145,1,0,0,0,22,149,1,0,0,0,24,154,1,0,0,0,26,159,1,0,0,0,28,164,1,0,0,0,
30,169,1,0,0,0,32,173,1,0,0,0,34,177,1,0,0,0,36,183,1,0,0,0,38,189,1,0,0,
0,40,195,1,0,0,0,42,208,1,0,0,0,44,262,1,0,0,0,46,264,1,0,0,0,48,272,1,0,
0,0,50,284,1,0,0,0,52,286,1,0,0,0,54,288,1,0,0,0,56,60,3,2,1,0,57,59,3,10,
5,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,66,1,0,0,
0,62,60,1,0,0,0,63,65,3,14,7,0,64,63,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,
66,67,1,0,0,0,67,71,1,0,0,0,68,66,1,0,0,0,69,71,5,0,0,1,70,56,1,0,0,0,70,
69,1,0,0,0,71,1,1,0,0,0,72,74,3,8,4,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,
1,0,0,0,75,76,1,0,0,0,76,3,1,0,0,0,77,75,1,0,0,0,78,79,3,6,3,0,79,5,1,0,
0,0,80,81,5,1,0,0,81,82,3,52,26,0,82,83,5,9,0,0,83,7,1,0,0,0,84,85,5,2,0,
0,85,86,3,52,26,0,86,87,5,9,0,0,87,9,1,0,0,0,88,89,5,29,0,0,89,90,3,52,26,
0,90,91,5,5,0,0,91,92,3,12,6,0,92,93,5,6,0,0,93,94,3,14,7,0,94,11,1,0,0,
0,95,97,3,52,26,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,
0,99,105,1,0,0,0,100,98,1,0,0,0,101,102,5,3,0,0,102,104,3,52,26,0,103,101,
1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,13,1,0,0,0,107,
105,1,0,0,0,108,112,5,7,0,0,109,111,3,14,7,0,110,109,1,0,0,0,111,114,1,0,
0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,115,1,0,0,0,114,112,1,0,0,0,115,
133,5,8,0,0,116,133,3,16,8,0,117,133,3,18,9,0,118,133,3,22,11,0,119,133,
3,24,12,0,120,133,3,26,13,0,121,133,3,28,14,0,122,133,3,30,15,0,123,133,
3,32,16,0,124,133,3,34,17,0,125,133,3,36,18,0,126,133,3,38,19,0,127,133,
3,40,20,0,128,129,3,42,21,0,129,130,5,9,0,0,130,133,1,0,0,0,131,133,5,9,
0,0,132,108,1,0,0,0,132,116,1,0,0,0,132,117,1,0,0,0,132,118,1,0,0,0,132,
119,1,0,0,0,132,120,1,0,0,0,132,121,1,0,0,0,132,122,1,0,0,0,132,123,1,0,
0,0,132,124,1,0,0,0,132,125,1,0,0,0,132,126,1,0,0,0,132,127,1,0,0,0,132,
128,1,0,0,0,132,131,1,0,0,0,133,15,1,0,0,0,134,135,3,52,26,0,135,136,5,22,
0,0,136,137,3,42,21,0,137,138,5,9,0,0,138,17,1,0,0,0,139,140,5,4,0,0,140,
141,5,7,0,0,141,142,3,20,10,0,142,143,5,8,0,0,143,19,1,0,0,0,144,146,9,0,
0,0,145,144,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,147,145,1,0,0,0,148,
21,1,0,0,0,149,150,3,52,26,0,150,151,5,23,0,0,151,152,3,50,25,0,152,153,
5,9,0,0,153,23,1,0,0,0,154,155,3,52,26,0,155,156,5,24,0,0,156,157,3,50,25,
0,157,158,5,9,0,0,158,25,1,0,0,0,159,160,3,52,26,0,160,161,5,25,0,0,161,
162,3,50,25,0,162,163,5,9,0,0,163,27,1,0,0,0,164,165,3,52,26,0,165,166,5,
26,0,0,166,167,3,50,25,0,167,168,5,9,0,0,168,29,1,0,0,0,169,170,3,52,26,
0,170,171,5,27,0,0,171,172,5,9,0,0,172,31,1,0,0,0,173,174,3,52,26,0,174,
175,5,28,0,0,175,176,5,9,0,0,176,33,1,0,0,0,177,178,5,32,0,0,178,179,5,5,
0,0,179,180,3,44,22,0,180,181,5,6,0,0,181,182,3,14,7,0,182,35,1,0,0,0,183,
184,5,33,0,0,184,185,5,5,0,0,185,186,3,44,22,0,186,187,5,6,0,0,187,188,3,
14,7,0,188,37,1,0,0,0,189,190,5,30,0,0,190,191,3,52,26,0,191,192,5,22,0,
0,192,193,3,42,21,0,193,194,5,9,0,0,194,39,1,0,0,0,195,196,5,34,0,0,196,
197,3,42,21,0,197,198,5,9,0,0,198,41,1,0,0,0,199,200,6,21,-1,0,200,201,5,
5,0,0,201,202,3,42,21,0,202,203,5,6,0,0,203,209,1,0,0,0,204,209,3,50,25,
0,205,209,3,44,22,0,206,209,5,42,0,0,207,209,3,46,23,0,208,199,1,0,0,0,208,
204,1,0,0,0,208,205,1,0,0,0,208,206,1,0,0,0,208,207,1,0,0,0,209,224,1,0,
0,0,210,211,10,8,0,0,211,212,5,10,0,0,212,223,3,42,21,9,213,214,10,7,0,0,
214,215,5,11,0,0,215,223,3,42,21,8,216,217,10,6,0,0,217,218,5,12,0,0,218,
223,3,42,21,7,219,220,10,5,0,0,220,221,5,13,0,0,221,223,3,42,21,6,222,210,
1,0,0,0,222,213,1,0,0,0,222,216,1,0,0,0,222,219,1,0,0,0,223,226,1,0,0,0,
224,222,1,0,0,0,224,225,1,0,0,0,225,43,1,0,0,0,226,224,1,0,0,0,227,263,3,
50,25,0,228,263,5,35,0,0,229,263,5,36,0,0,230,231,3,50,25,0,231,232,5,14,
0,0,232,233,3,44,22,0,233,263,1,0,0,0,234,235,3,50,25,0,235,236,5,15,0,0,
236,237,3,44,22,0,237,263,1,0,0,0,238,239,3,50,25,0,239,240,5,16,0,0,240,
241,3,44,22,0,241,263,1,0,0,0,242,243,3,50,25,0,243,244,5,17,0,0,244,245,
3,44,22,0,245,263,1,0,0,0,246,247,3,50,25,0,247,248,5,18,0,0,248,249,3,44,
22,0,249,263,1,0,0,0,250,251,3,50,25,0,251,252,5,19,0,0,252,253,3,44,22,
0,253,263,1,0,0,0,254,255,3,50,25,0,255,256,5,20,0,0,256,257,3,44,22,0,257,
263,1,0,0,0,258,259,3,50,25,0,259,260,5,21,0,0,260,261,3,44,22,0,261,263,
1,0,0,0,262,227,1,0,0,0,262,228,1,0,0,0,262,229,1,0,0,0,262,230,1,0,0,0,
262,234,1,0,0,0,262,238,1,0,0,0,262,242,1,0,0,0,262,246,1,0,0,0,262,250,
1,0,0,0,262,254,1,0,0,0,262,258,1,0,0,0,263,45,1,0,0,0,264,265,3,52,26,0,
265,266,5,5,0,0,266,267,3,48,24,0,267,268,5,6,0,0,268,47,1,0,0,0,269,271,
3,42,21,0,270,269,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,
0,273,279,1,0,0,0,274,272,1,0,0,0,275,276,5,3,0,0,276,278,3,42,21,0,277,
275,1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,49,1,0,0,
0,281,279,1,0,0,0,282,285,3,52,26,0,283,285,3,54,27,0,284,282,1,0,0,0,284,
283,1,0,0,0,285,51,1,0,0,0,286,287,5,37,0,0,287,53,1,0,0,0,288,289,7,0,0,
0,289,55,1,0,0,0,16,60,66,70,75,98,105,112,132,147,208,222,224,262,272,279,
284];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ICEScriptParser extends antlr4.Parser {

    static grammarFileName = "ICEScript";
    static literalNames = [ null, "'name:'", "'import:'", "','", "'__TiBasic'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", 
                            "'>='", "'<='", "'||'", "'&&'", "'='", "'+='", 
                            "'-='", "'*='", "'/='", "'++'", "'--'", "'function'", 
                            "'var'", "'str'", "'if'", "'while'", "'return'", 
                            "'true'", "'false'", null, null, "'pi'", "'e'", 
                            "'i'" ];
    static symbolicNames = [ null, null, null, null, null, "OPEN_BRACKET", 
                             "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", 
                             "END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
                             "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
                             "LESS_THAN_OR_EQUAL", "OR", "AND", "ASSIGN", 
                             "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
                             "INCREMENT", "DECREMENT", "DEF", "VAR", "STR", 
                             "IF", "WHILE", "RETURN", "TRUE", "FALSE", "IDENTIFIER", 
                             "NUMBER", "PI", "E", "I", "QUOTED_TEXT", "LINECOMMENT", 
                             "BLOCKCOMMENT", "WHITESPACE" ];
    static ruleNames = [ "script", "header", "meta", "scriptName", "include", 
                         "function", "func_params", "statement", "assign_stmt", 
                         "ti_basic_stmt", "any", "add_assign_stmt", "sub_assign_stmt", 
                         "mul_assign_stmt", "div_assign_stmt", "inc_stmt", 
                         "dec_stmt", "if_stmt", "while_stmt", "var_stmt", 
                         "return_stmt", "expression", "boolexpr", "methodcall", 
                         "methodparams", "value", "identifier", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ICEScriptParser.ruleNames;
        this.literalNames = ICEScriptParser.literalNames;
        this.symbolicNames = ICEScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 21:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ICEScriptParser.RULE_script);
	    var _la = 0;
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.header();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===29) {
	                this.state = 57;
	                this.function_();
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073742512) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2047) !== 0)) {
	                this.state = 63;
	                this.statement();
	                this.state = 68;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 72;
	            this.include();
	            this.state = 77;
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
	        this.state = 78;
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
	        this.state = 80;
	        this.match(ICEScriptParser.T__0);
	        this.state = 81;
	        this.identifier();
	        this.state = 82;
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
	        this.state = 84;
	        this.match(ICEScriptParser.T__1);
	        this.state = 85;
	        this.identifier();
	        this.state = 86;
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
	        this.state = 88;
	        this.match(ICEScriptParser.DEF);
	        this.state = 89;
	        this.identifier();
	        this.state = 90;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 91;
	        this.func_params();
	        this.state = 92;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 93;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 95;
	            this.identifier();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 101;
	            this.match(ICEScriptParser.T__2);
	            this.state = 102;
	            this.identifier();
	            this.state = 107;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ICEScriptParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(ICEScriptParser.OPEN_CURLEY);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073742512) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2047) !== 0)) {
	                this.state = 109;
	                this.statement();
	                this.state = 114;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 115;
	            this.match(ICEScriptParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.ti_basic_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 118;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 119;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 120;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 121;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 122;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 123;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 124;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 125;
	            this.while_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 126;
	            this.var_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 127;
	            this.return_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 128;
	            this.expression(0);
	            this.state = 129;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 131;
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
	    this.enterRule(localctx, 16, ICEScriptParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.identifier();
	        this.state = 135;
	        this.match(ICEScriptParser.ASSIGN);
	        this.state = 136;
	        this.expression(0);
	        this.state = 137;
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
	    this.enterRule(localctx, 18, ICEScriptParser.RULE_ti_basic_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(ICEScriptParser.T__3);
	        this.state = 140;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 141;
	        this.any();
	        this.state = 142;
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
	    this.enterRule(localctx, 20, ICEScriptParser.RULE_any);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 144;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 147; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
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
	    this.enterRule(localctx, 22, ICEScriptParser.RULE_add_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.identifier();
	        this.state = 150;
	        this.match(ICEScriptParser.ADDASSIGN);
	        this.state = 151;
	        this.value();
	        this.state = 152;
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
	    this.enterRule(localctx, 24, ICEScriptParser.RULE_sub_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.identifier();
	        this.state = 155;
	        this.match(ICEScriptParser.SUBASSIGN);
	        this.state = 156;
	        this.value();
	        this.state = 157;
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
	    this.enterRule(localctx, 26, ICEScriptParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.identifier();
	        this.state = 160;
	        this.match(ICEScriptParser.MULASSIGN);
	        this.state = 161;
	        this.value();
	        this.state = 162;
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
	    this.enterRule(localctx, 28, ICEScriptParser.RULE_div_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.identifier();
	        this.state = 165;
	        this.match(ICEScriptParser.DIVASSIGN);
	        this.state = 166;
	        this.value();
	        this.state = 167;
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
	    this.enterRule(localctx, 30, ICEScriptParser.RULE_inc_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.identifier();
	        this.state = 170;
	        this.match(ICEScriptParser.INCREMENT);
	        this.state = 171;
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
	    this.enterRule(localctx, 32, ICEScriptParser.RULE_dec_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.identifier();
	        this.state = 174;
	        this.match(ICEScriptParser.DECREMENT);
	        this.state = 175;
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
	    this.enterRule(localctx, 34, ICEScriptParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(ICEScriptParser.IF);
	        this.state = 178;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 179;
	        this.boolexpr();
	        this.state = 180;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 181;
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
	    this.enterRule(localctx, 36, ICEScriptParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(ICEScriptParser.WHILE);
	        this.state = 184;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 185;
	        this.boolexpr();
	        this.state = 186;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 187;
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
	    this.enterRule(localctx, 38, ICEScriptParser.RULE_var_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(ICEScriptParser.VAR);
	        this.state = 190;
	        this.identifier();
	        this.state = 191;
	        this.match(ICEScriptParser.ASSIGN);
	        this.state = 192;
	        this.expression(0);
	        this.state = 193;
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



	return_stmt() {
	    let localctx = new Return_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ICEScriptParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(ICEScriptParser.RETURN);
	        this.state = 196;
	        this.expression(0);
	        this.state = 197;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, ICEScriptParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 200;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 201;
	            this.expression(0);
	            this.state = 202;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.state = 204;
	            this.value();
	            break;

	        case 3:
	            this.state = 205;
	            this.boolexpr();
	            break;

	        case 4:
	            this.state = 206;
	            this.match(ICEScriptParser.QUOTED_TEXT);
	            break;

	        case 5:
	            this.state = 207;
	            this.methodcall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 222;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 211;
	                    this.match(ICEScriptParser.ADD);
	                    this.state = 212;
	                    this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 214;
	                    this.match(ICEScriptParser.SUB);
	                    this.state = 215;
	                    this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 217;
	                    this.match(ICEScriptParser.MUL);
	                    this.state = 218;
	                    this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 220;
	                    this.match(ICEScriptParser.DIV);
	                    this.state = 221;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 226;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	boolexpr() {
	    let localctx = new BoolexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ICEScriptParser.RULE_boolexpr);
	    try {
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this.match(ICEScriptParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 229;
	            this.match(ICEScriptParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 230;
	            this.value();
	            this.state = 231;
	            this.match(ICEScriptParser.GREATER_THAN);
	            this.state = 232;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 234;
	            this.value();
	            this.state = 235;
	            this.match(ICEScriptParser.LESS_THAN);
	            this.state = 236;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 238;
	            this.value();
	            this.state = 239;
	            this.match(ICEScriptParser.EQUAL_TO);
	            this.state = 240;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 242;
	            this.value();
	            this.state = 243;
	            this.match(ICEScriptParser.NOT_EQUAL_TO);
	            this.state = 244;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 246;
	            this.value();
	            this.state = 247;
	            this.match(ICEScriptParser.GREATER_THAN_OR_EQUAL);
	            this.state = 248;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 250;
	            this.value();
	            this.state = 251;
	            this.match(ICEScriptParser.LESS_THAN_OR_EQUAL);
	            this.state = 252;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 254;
	            this.value();
	            this.state = 255;
	            this.match(ICEScriptParser.OR);
	            this.state = 256;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 258;
	            this.value();
	            this.state = 259;
	            this.match(ICEScriptParser.AND);
	            this.state = 260;
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
	    this.enterRule(localctx, 46, ICEScriptParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.identifier();
	        this.state = 265;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 266;
	        this.methodparams();
	        this.state = 267;
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
	    this.enterRule(localctx, 48, ICEScriptParser.RULE_methodparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 255) !== 0)) {
	            this.state = 269;
	            this.expression(0);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 275;
	            this.match(ICEScriptParser.T__2);
	            this.state = 276;
	            this.expression(0);
	            this.state = 281;
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
	    this.enterRule(localctx, 50, ICEScriptParser.RULE_value);
	    try {
	        this.state = 284;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.identifier();
	            break;
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 283;
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
	    this.enterRule(localctx, 52, ICEScriptParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
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
	    this.enterRule(localctx, 54, ICEScriptParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
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


}

ICEScriptParser.EOF = antlr4.Token.EOF;
ICEScriptParser.T__0 = 1;
ICEScriptParser.T__1 = 2;
ICEScriptParser.T__2 = 3;
ICEScriptParser.T__3 = 4;
ICEScriptParser.OPEN_BRACKET = 5;
ICEScriptParser.CLOSE_BRACKET = 6;
ICEScriptParser.OPEN_CURLEY = 7;
ICEScriptParser.CLOSE_CURLEY = 8;
ICEScriptParser.END_STMT = 9;
ICEScriptParser.ADD = 10;
ICEScriptParser.SUB = 11;
ICEScriptParser.MUL = 12;
ICEScriptParser.DIV = 13;
ICEScriptParser.GREATER_THAN = 14;
ICEScriptParser.LESS_THAN = 15;
ICEScriptParser.EQUAL_TO = 16;
ICEScriptParser.NOT_EQUAL_TO = 17;
ICEScriptParser.GREATER_THAN_OR_EQUAL = 18;
ICEScriptParser.LESS_THAN_OR_EQUAL = 19;
ICEScriptParser.OR = 20;
ICEScriptParser.AND = 21;
ICEScriptParser.ASSIGN = 22;
ICEScriptParser.ADDASSIGN = 23;
ICEScriptParser.SUBASSIGN = 24;
ICEScriptParser.MULASSIGN = 25;
ICEScriptParser.DIVASSIGN = 26;
ICEScriptParser.INCREMENT = 27;
ICEScriptParser.DECREMENT = 28;
ICEScriptParser.DEF = 29;
ICEScriptParser.VAR = 30;
ICEScriptParser.STR = 31;
ICEScriptParser.IF = 32;
ICEScriptParser.WHILE = 33;
ICEScriptParser.RETURN = 34;
ICEScriptParser.TRUE = 35;
ICEScriptParser.FALSE = 36;
ICEScriptParser.IDENTIFIER = 37;
ICEScriptParser.NUMBER = 38;
ICEScriptParser.PI = 39;
ICEScriptParser.E = 40;
ICEScriptParser.I = 41;
ICEScriptParser.QUOTED_TEXT = 42;
ICEScriptParser.LINECOMMENT = 43;
ICEScriptParser.BLOCKCOMMENT = 44;
ICEScriptParser.WHITESPACE = 45;

ICEScriptParser.RULE_script = 0;
ICEScriptParser.RULE_header = 1;
ICEScriptParser.RULE_meta = 2;
ICEScriptParser.RULE_scriptName = 3;
ICEScriptParser.RULE_include = 4;
ICEScriptParser.RULE_function = 5;
ICEScriptParser.RULE_func_params = 6;
ICEScriptParser.RULE_statement = 7;
ICEScriptParser.RULE_assign_stmt = 8;
ICEScriptParser.RULE_ti_basic_stmt = 9;
ICEScriptParser.RULE_any = 10;
ICEScriptParser.RULE_add_assign_stmt = 11;
ICEScriptParser.RULE_sub_assign_stmt = 12;
ICEScriptParser.RULE_mul_assign_stmt = 13;
ICEScriptParser.RULE_div_assign_stmt = 14;
ICEScriptParser.RULE_inc_stmt = 15;
ICEScriptParser.RULE_dec_stmt = 16;
ICEScriptParser.RULE_if_stmt = 17;
ICEScriptParser.RULE_while_stmt = 18;
ICEScriptParser.RULE_var_stmt = 19;
ICEScriptParser.RULE_return_stmt = 20;
ICEScriptParser.RULE_expression = 21;
ICEScriptParser.RULE_boolexpr = 22;
ICEScriptParser.RULE_methodcall = 23;
ICEScriptParser.RULE_methodparams = 24;
ICEScriptParser.RULE_value = 25;
ICEScriptParser.RULE_identifier = 26;
ICEScriptParser.RULE_number = 27;

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

	DEF() {
	    return this.getToken(ICEScriptParser.DEF, 0);
	};

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

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
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

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	QUOTED_TEXT() {
	    return this.getToken(ICEScriptParser.QUOTED_TEXT, 0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
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

	E() {
	    return this.getToken(ICEScriptParser.E, 0);
	};

	I() {
	    return this.getToken(ICEScriptParser.I, 0);
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




ICEScriptParser.ScriptContext = ScriptContext; 
ICEScriptParser.HeaderContext = HeaderContext; 
ICEScriptParser.MetaContext = MetaContext; 
ICEScriptParser.ScriptNameContext = ScriptNameContext; 
ICEScriptParser.IncludeContext = IncludeContext; 
ICEScriptParser.FunctionContext = FunctionContext; 
ICEScriptParser.Func_paramsContext = Func_paramsContext; 
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
ICEScriptParser.While_stmtContext = While_stmtContext; 
ICEScriptParser.Var_stmtContext = Var_stmtContext; 
ICEScriptParser.Return_stmtContext = Return_stmtContext; 
ICEScriptParser.ExpressionContext = ExpressionContext; 
ICEScriptParser.BoolexprContext = BoolexprContext; 
ICEScriptParser.MethodcallContext = MethodcallContext; 
ICEScriptParser.MethodparamsContext = MethodparamsContext; 
ICEScriptParser.ValueContext = ValueContext; 
ICEScriptParser.IdentifierContext = IdentifierContext; 
ICEScriptParser.NumberContext = NumberContext; 
