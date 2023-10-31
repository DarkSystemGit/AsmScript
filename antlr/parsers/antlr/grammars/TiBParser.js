// Generated from ./antlr/grammars/TiB by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TiBListener from './TiBListener.js';
const serializedATN = [4,1,25,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,5,0,50,8,0,10,0,12,0,53,9,0,1,
0,3,0,56,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,80,8,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,
1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,
21,1,21,1,22,1,22,1,23,1,23,1,23,0,0,24,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,0,0,125,0,55,1,0,0,0,2,79,1,0,0,0,4,81,
1,0,0,0,6,83,1,0,0,0,8,85,1,0,0,0,10,87,1,0,0,0,12,89,1,0,0,0,14,91,1,0,
0,0,16,93,1,0,0,0,18,96,1,0,0,0,20,98,1,0,0,0,22,100,1,0,0,0,24,102,1,0,
0,0,26,104,1,0,0,0,28,106,1,0,0,0,30,108,1,0,0,0,32,110,1,0,0,0,34,112,1,
0,0,0,36,114,1,0,0,0,38,116,1,0,0,0,40,118,1,0,0,0,42,120,1,0,0,0,44,122,
1,0,0,0,46,124,1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,51,49,1,
0,0,0,51,52,1,0,0,0,52,56,1,0,0,0,53,51,1,0,0,0,54,56,5,0,0,1,55,51,1,0,
0,0,55,54,1,0,0,0,56,1,1,0,0,0,57,80,3,38,19,0,58,80,3,24,12,0,59,80,3,10,
5,0,60,80,3,12,6,0,61,80,3,14,7,0,62,80,3,40,20,0,63,80,3,42,21,0,64,80,
3,44,22,0,65,80,3,22,11,0,66,80,3,20,10,0,67,80,3,4,2,0,68,80,3,6,3,0,69,
80,3,46,23,0,70,80,3,28,14,0,71,80,3,8,4,0,72,80,3,30,15,0,73,80,3,36,18,
0,74,80,3,18,9,0,75,80,3,16,8,0,76,80,3,32,16,0,77,80,3,34,17,0,78,80,3,
26,13,0,79,57,1,0,0,0,79,58,1,0,0,0,79,59,1,0,0,0,79,60,1,0,0,0,79,61,1,
0,0,0,79,62,1,0,0,0,79,63,1,0,0,0,79,64,1,0,0,0,79,65,1,0,0,0,79,66,1,0,
0,0,79,67,1,0,0,0,79,68,1,0,0,0,79,69,1,0,0,0,79,70,1,0,0,0,79,71,1,0,0,
0,79,72,1,0,0,0,79,73,1,0,0,0,79,74,1,0,0,0,79,75,1,0,0,0,79,76,1,0,0,0,
79,77,1,0,0,0,79,78,1,0,0,0,80,3,1,0,0,0,81,82,5,1,0,0,82,5,1,0,0,0,83,84,
5,2,0,0,84,7,1,0,0,0,85,86,5,3,0,0,86,9,1,0,0,0,87,88,5,4,0,0,88,11,1,0,
0,0,89,90,5,5,0,0,90,13,1,0,0,0,91,92,5,6,0,0,92,15,1,0,0,0,93,94,5,7,0,
0,94,95,3,38,19,0,95,17,1,0,0,0,96,97,5,8,0,0,97,19,1,0,0,0,98,99,5,9,0,
0,99,21,1,0,0,0,100,101,5,21,0,0,101,23,1,0,0,0,102,103,5,10,0,0,103,25,
1,0,0,0,104,105,5,11,0,0,105,27,1,0,0,0,106,107,5,12,0,0,107,29,1,0,0,0,
108,109,5,13,0,0,109,31,1,0,0,0,110,111,5,14,0,0,111,33,1,0,0,0,112,113,
5,15,0,0,113,35,1,0,0,0,114,115,5,16,0,0,115,37,1,0,0,0,116,117,5,22,0,0,
117,39,1,0,0,0,118,119,5,17,0,0,119,41,1,0,0,0,120,121,5,18,0,0,121,43,1,
0,0,0,122,123,5,19,0,0,123,45,1,0,0,0,124,125,5,20,0,0,125,47,1,0,0,0,3,
51,55,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TiBParser extends antlr4.Parser {

    static grammarFileName = "TiB";
    static literalNames = [ null, "'DISP'", "'INPUT'", "'->'", "'IF'", "'THEN'", 
                            "'END'", "'LIST'", "' '", "'\"'", "':'", "';'", 
                            "','", "'.'", "'('", "')'", "'='", "'pi'", "'e'", 
                            "'i'", "'\\n'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "LETTER", "NUMBER", 
                             "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE" ];
    static ruleNames = [ "script", "token", "disp", "input", "store", "if_", 
                         "then", "end", "list", "space", "quote", "letter", 
                         "colon", "semicolon", "comma", "period", "open_bracket", 
                         "close_bracket", "equals", "number", "pi", "e", 
                         "i", "newline" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TiBParser.ruleNames;
        this.literalNames = TiBParser.literalNames;
        this.symbolicNames = TiBParser.symbolicNames;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TiBParser.RULE_script);
	    var _la = 0;
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8388606) !== 0)) {
	                this.state = 48;
	                this.token();
	                this.state = 53;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(TiBParser.EOF);
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



	token() {
	    let localctx = new TokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TiBParser.RULE_token);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.number();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.colon();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 59;
	            this.if_();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 60;
	            this.then();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.end();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 62;
	            this.pi();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 63;
	            this.e();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 64;
	            this.i();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 65;
	            this.letter();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 66;
	            this.quote();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 67;
	            this.disp();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 68;
	            this.input();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 69;
	            this.newline();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 70;
	            this.comma();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 71;
	            this.store();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 72;
	            this.period();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 73;
	            this.equals();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 74;
	            this.space();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 75;
	            this.list();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 76;
	            this.open_bracket();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 77;
	            this.close_bracket();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 78;
	            this.semicolon();
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



	disp() {
	    let localctx = new DispContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TiBParser.RULE_disp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(TiBParser.T__0);
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



	input() {
	    let localctx = new InputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TiBParser.RULE_input);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(TiBParser.T__1);
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



	store() {
	    let localctx = new StoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TiBParser.RULE_store);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(TiBParser.T__2);
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



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TiBParser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(TiBParser.T__3);
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



	then() {
	    let localctx = new ThenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TiBParser.RULE_then);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(TiBParser.T__4);
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TiBParser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(TiBParser.T__5);
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
	    this.enterRule(localctx, 16, TiBParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(TiBParser.T__6);
	        this.state = 94;
	        this.number();
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



	space() {
	    let localctx = new SpaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TiBParser.RULE_space);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(TiBParser.T__7);
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



	quote() {
	    let localctx = new QuoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TiBParser.RULE_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(TiBParser.T__8);
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



	letter() {
	    let localctx = new LetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TiBParser.RULE_letter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(TiBParser.LETTER);
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



	colon() {
	    let localctx = new ColonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TiBParser.RULE_colon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(TiBParser.T__9);
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



	semicolon() {
	    let localctx = new SemicolonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TiBParser.RULE_semicolon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(TiBParser.T__10);
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



	comma() {
	    let localctx = new CommaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TiBParser.RULE_comma);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(TiBParser.T__11);
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



	period() {
	    let localctx = new PeriodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TiBParser.RULE_period);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(TiBParser.T__12);
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



	open_bracket() {
	    let localctx = new Open_bracketContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TiBParser.RULE_open_bracket);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(TiBParser.T__13);
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



	close_bracket() {
	    let localctx = new Close_bracketContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TiBParser.RULE_close_bracket);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(TiBParser.T__14);
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



	equals() {
	    let localctx = new EqualsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TiBParser.RULE_equals);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(TiBParser.T__15);
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
	    this.enterRule(localctx, 38, TiBParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(TiBParser.NUMBER);
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



	pi() {
	    let localctx = new PiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TiBParser.RULE_pi);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(TiBParser.T__16);
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



	e() {
	    let localctx = new EContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, TiBParser.RULE_e);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(TiBParser.T__17);
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



	i() {
	    let localctx = new IContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TiBParser.RULE_i);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(TiBParser.T__18);
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



	newline() {
	    let localctx = new NewlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TiBParser.RULE_newline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(TiBParser.T__19);
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

TiBParser.EOF = antlr4.Token.EOF;
TiBParser.T__0 = 1;
TiBParser.T__1 = 2;
TiBParser.T__2 = 3;
TiBParser.T__3 = 4;
TiBParser.T__4 = 5;
TiBParser.T__5 = 6;
TiBParser.T__6 = 7;
TiBParser.T__7 = 8;
TiBParser.T__8 = 9;
TiBParser.T__9 = 10;
TiBParser.T__10 = 11;
TiBParser.T__11 = 12;
TiBParser.T__12 = 13;
TiBParser.T__13 = 14;
TiBParser.T__14 = 15;
TiBParser.T__15 = 16;
TiBParser.T__16 = 17;
TiBParser.T__17 = 18;
TiBParser.T__18 = 19;
TiBParser.T__19 = 20;
TiBParser.LETTER = 21;
TiBParser.NUMBER = 22;
TiBParser.LINECOMMENT = 23;
TiBParser.BLOCKCOMMENT = 24;
TiBParser.WHITESPACE = 25;

TiBParser.RULE_script = 0;
TiBParser.RULE_token = 1;
TiBParser.RULE_disp = 2;
TiBParser.RULE_input = 3;
TiBParser.RULE_store = 4;
TiBParser.RULE_if_ = 5;
TiBParser.RULE_then = 6;
TiBParser.RULE_end = 7;
TiBParser.RULE_list = 8;
TiBParser.RULE_space = 9;
TiBParser.RULE_quote = 10;
TiBParser.RULE_letter = 11;
TiBParser.RULE_colon = 12;
TiBParser.RULE_semicolon = 13;
TiBParser.RULE_comma = 14;
TiBParser.RULE_period = 15;
TiBParser.RULE_open_bracket = 16;
TiBParser.RULE_close_bracket = 17;
TiBParser.RULE_equals = 18;
TiBParser.RULE_number = 19;
TiBParser.RULE_pi = 20;
TiBParser.RULE_e = 21;
TiBParser.RULE_i = 22;
TiBParser.RULE_newline = 23;

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
        this.ruleIndex = TiBParser.RULE_script;
    }

	token = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TokenContext);
	    } else {
	        return this.getTypedRuleContext(TokenContext,i);
	    }
	};

	EOF() {
	    return this.getToken(TiBParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitScript(this);
		}
	}


}



class TokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_token;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	colon() {
	    return this.getTypedRuleContext(ColonContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	then() {
	    return this.getTypedRuleContext(ThenContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	pi() {
	    return this.getTypedRuleContext(PiContext,0);
	};

	e() {
	    return this.getTypedRuleContext(EContext,0);
	};

	i() {
	    return this.getTypedRuleContext(IContext,0);
	};

	letter() {
	    return this.getTypedRuleContext(LetterContext,0);
	};

	quote() {
	    return this.getTypedRuleContext(QuoteContext,0);
	};

	disp() {
	    return this.getTypedRuleContext(DispContext,0);
	};

	input() {
	    return this.getTypedRuleContext(InputContext,0);
	};

	newline() {
	    return this.getTypedRuleContext(NewlineContext,0);
	};

	comma() {
	    return this.getTypedRuleContext(CommaContext,0);
	};

	store() {
	    return this.getTypedRuleContext(StoreContext,0);
	};

	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	equals() {
	    return this.getTypedRuleContext(EqualsContext,0);
	};

	space() {
	    return this.getTypedRuleContext(SpaceContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	open_bracket() {
	    return this.getTypedRuleContext(Open_bracketContext,0);
	};

	close_bracket() {
	    return this.getTypedRuleContext(Close_bracketContext,0);
	};

	semicolon() {
	    return this.getTypedRuleContext(SemicolonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitToken(this);
		}
	}


}



class DispContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_disp;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterDisp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitDisp(this);
		}
	}


}



class InputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_input;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterInput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitInput(this);
		}
	}


}



class StoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_store;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterStore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitStore(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_if_;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitIf_(this);
		}
	}


}



class ThenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_then;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterThen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitThen(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_end;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitEnd(this);
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
        this.ruleIndex = TiBParser.RULE_list;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitList(this);
		}
	}


}



class SpaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_space;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterSpace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitSpace(this);
		}
	}


}



class QuoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_quote;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterQuote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitQuote(this);
		}
	}


}



class LetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_letter;
    }

	LETTER() {
	    return this.getToken(TiBParser.LETTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterLetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitLetter(this);
		}
	}


}



class ColonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_colon;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterColon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitColon(this);
		}
	}


}



class SemicolonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_semicolon;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterSemicolon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitSemicolon(this);
		}
	}


}



class CommaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_comma;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterComma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitComma(this);
		}
	}


}



class PeriodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_period;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterPeriod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitPeriod(this);
		}
	}


}



class Open_bracketContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_open_bracket;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterOpen_bracket(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitOpen_bracket(this);
		}
	}


}



class Close_bracketContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_close_bracket;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterClose_bracket(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitClose_bracket(this);
		}
	}


}



class EqualsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_equals;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterEquals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitEquals(this);
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
        this.ruleIndex = TiBParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(TiBParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitNumber(this);
		}
	}


}



class PiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_pi;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterPi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitPi(this);
		}
	}


}



class EContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_e;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitE(this);
		}
	}


}



class IContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_i;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterI(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitI(this);
		}
	}


}



class NewlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TiBParser.RULE_newline;
    }


	enterRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.enterNewline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TiBListener ) {
	        listener.exitNewline(this);
		}
	}


}




TiBParser.ScriptContext = ScriptContext; 
TiBParser.TokenContext = TokenContext; 
TiBParser.DispContext = DispContext; 
TiBParser.InputContext = InputContext; 
TiBParser.StoreContext = StoreContext; 
TiBParser.If_Context = If_Context; 
TiBParser.ThenContext = ThenContext; 
TiBParser.EndContext = EndContext; 
TiBParser.ListContext = ListContext; 
TiBParser.SpaceContext = SpaceContext; 
TiBParser.QuoteContext = QuoteContext; 
TiBParser.LetterContext = LetterContext; 
TiBParser.ColonContext = ColonContext; 
TiBParser.SemicolonContext = SemicolonContext; 
TiBParser.CommaContext = CommaContext; 
TiBParser.PeriodContext = PeriodContext; 
TiBParser.Open_bracketContext = Open_bracketContext; 
TiBParser.Close_bracketContext = Close_bracketContext; 
TiBParser.EqualsContext = EqualsContext; 
TiBParser.NumberContext = NumberContext; 
TiBParser.PiContext = PiContext; 
TiBParser.EContext = EContext; 
TiBParser.IContext = IContext; 
TiBParser.NewlineContext = NewlineContext; 
