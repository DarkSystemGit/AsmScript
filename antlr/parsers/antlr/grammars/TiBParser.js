// Generated from ./antlr/grammars/TiB by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TiBListener = require('./TiBListener').TiBListener;
var TiBVisitor = require('./TiBVisitor').TiBVisitor;

var grammarFileName = "TiB";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b\u0081\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0007\u00024\n",
    "\u0002\f\u0002\u000e\u00027\u000b\u0002\u0003\u0002\u0005\u0002:\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003R\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0002\u0002\u007f\u0002",
    "9\u0003\u0002\u0002\u0002\u0004Q\u0003\u0002\u0002\u0002\u0006S\u0003",
    "\u0002\u0002\u0002\bU\u0003\u0002\u0002\u0002\nW\u0003\u0002\u0002\u0002",
    "\fY\u0003\u0002\u0002\u0002\u000e[\u0003\u0002\u0002\u0002\u0010]\u0003",
    "\u0002\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014b\u0003\u0002",
    "\u0002\u0002\u0016d\u0003\u0002\u0002\u0002\u0018f\u0003\u0002\u0002",
    "\u0002\u001ah\u0003\u0002\u0002\u0002\u001cj\u0003\u0002\u0002\u0002",
    "\u001el\u0003\u0002\u0002\u0002 n\u0003\u0002\u0002\u0002\"p\u0003\u0002",
    "\u0002\u0002$r\u0003\u0002\u0002\u0002&t\u0003\u0002\u0002\u0002(v\u0003",
    "\u0002\u0002\u0002*x\u0003\u0002\u0002\u0002,z\u0003\u0002\u0002\u0002",
    ".|\u0003\u0002\u0002\u00020~\u0003\u0002\u0002\u000224\u0005\u0004\u0003",
    "\u000232\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u00026:\u0003\u0002\u0002\u000275\u0003",
    "\u0002\u0002\u00028:\u0007\u0002\u0002\u000395\u0003\u0002\u0002\u0002",
    "98\u0003\u0002\u0002\u0002:\u0003\u0003\u0002\u0002\u0002;R\u0005(\u0015",
    "\u0002<R\u0005\u001a\u000e\u0002=R\u0005\f\u0007\u0002>R\u0005\u000e",
    "\b\u0002?R\u0005\u0010\t\u0002@R\u0005*\u0016\u0002AR\u0005,\u0017\u0002",
    "BR\u0005.\u0018\u0002CR\u0005\u0018\r\u0002DR\u0005\u0016\f\u0002ER",
    "\u0005\u0006\u0004\u0002FR\u0005\b\u0005\u0002GR\u00050\u0019\u0002",
    "HR\u0005\u001e\u0010\u0002IR\u0005\n\u0006\u0002JR\u0005 \u0011\u0002",
    "KR\u0005&\u0014\u0002LR\u0005\u0014\u000b\u0002MR\u0005\u0012\n\u0002",
    "NR\u0005\"\u0012\u0002OR\u0005$\u0013\u0002PR\u0005\u001c\u000f\u0002",
    "Q;\u0003\u0002\u0002\u0002Q<\u0003\u0002\u0002\u0002Q=\u0003\u0002\u0002",
    "\u0002Q>\u0003\u0002\u0002\u0002Q?\u0003\u0002\u0002\u0002Q@\u0003\u0002",
    "\u0002\u0002QA\u0003\u0002\u0002\u0002QB\u0003\u0002\u0002\u0002QC\u0003",
    "\u0002\u0002\u0002QD\u0003\u0002\u0002\u0002QE\u0003\u0002\u0002\u0002",
    "QF\u0003\u0002\u0002\u0002QG\u0003\u0002\u0002\u0002QH\u0003\u0002\u0002",
    "\u0002QI\u0003\u0002\u0002\u0002QJ\u0003\u0002\u0002\u0002QK\u0003\u0002",
    "\u0002\u0002QL\u0003\u0002\u0002\u0002QM\u0003\u0002\u0002\u0002QN\u0003",
    "\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QP\u0003\u0002\u0002\u0002",
    "R\u0005\u0003\u0002\u0002\u0002ST\u0007\u0003\u0002\u0002T\u0007\u0003",
    "\u0002\u0002\u0002UV\u0007\u0004\u0002\u0002V\t\u0003\u0002\u0002\u0002",
    "WX\u0007\u0005\u0002\u0002X\u000b\u0003\u0002\u0002\u0002YZ\u0007\u0006",
    "\u0002\u0002Z\r\u0003\u0002\u0002\u0002[\\\u0007\u0007\u0002\u0002\\",
    "\u000f\u0003\u0002\u0002\u0002]^\u0007\b\u0002\u0002^\u0011\u0003\u0002",
    "\u0002\u0002_`\u0007\t\u0002\u0002`a\u0005(\u0015\u0002a\u0013\u0003",
    "\u0002\u0002\u0002bc\u0007\n\u0002\u0002c\u0015\u0003\u0002\u0002\u0002",
    "de\u0007\u000b\u0002\u0002e\u0017\u0003\u0002\u0002\u0002fg\u0007\u0017",
    "\u0002\u0002g\u0019\u0003\u0002\u0002\u0002hi\u0007\f\u0002\u0002i\u001b",
    "\u0003\u0002\u0002\u0002jk\u0007\r\u0002\u0002k\u001d\u0003\u0002\u0002",
    "\u0002lm\u0007\u000e\u0002\u0002m\u001f\u0003\u0002\u0002\u0002no\u0007",
    "\u000f\u0002\u0002o!\u0003\u0002\u0002\u0002pq\u0007\u0010\u0002\u0002",
    "q#\u0003\u0002\u0002\u0002rs\u0007\u0011\u0002\u0002s%\u0003\u0002\u0002",
    "\u0002tu\u0007\u0012\u0002\u0002u\'\u0003\u0002\u0002\u0002vw\u0007",
    "\u0018\u0002\u0002w)\u0003\u0002\u0002\u0002xy\u0007\u0013\u0002\u0002",
    "y+\u0003\u0002\u0002\u0002z{\u0007\u0014\u0002\u0002{-\u0003\u0002\u0002",
    "\u0002|}\u0007\u0015\u0002\u0002}/\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u0016\u0002\u0002\u007f1\u0003\u0002\u0002\u0002\u000559Q"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'DISP'", "'INPUT'", "'->'", "'IF'", "'THEN'", 
                     "'END'", "'LIST'", "' '", "'\"'", "':'", "';'", "','", 
                     "'.'", "'('", "')'", "'='", "'pi'", "'e'", "'i'", "'\n'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "LETTER", "NUMBER", "LINECOMMENT", 
                      "BLOCKCOMMENT", "WHITESPACE" ];

var ruleNames =  [ "script", "token", "disp", "input", "store", "if_", "then", 
                   "end", "list", "space", "quote", "letter", "colon", "semicolon", 
                   "comma", "period", "open_bracket", "close_bracket", "equals", 
                   "number", "pi", "e", "i", "newline" ];

function TiBParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TiBParser.prototype = Object.create(antlr4.Parser.prototype);
TiBParser.prototype.constructor = TiBParser;

Object.defineProperty(TiBParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

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

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.token = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TokenContext);
    } else {
        return this.getTypedRuleContext(TokenContext,i);
    }
};

ScriptContext.prototype.EOF = function() {
    return this.getToken(TiBParser.EOF, 0);
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitScript(this);
	}
};

ScriptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitScript(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.ScriptContext = ScriptContext;

TiBParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TiBParser.RULE_script);
    var _la = 0; // Token type
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
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TiBParser.T__0) | (1 << TiBParser.T__1) | (1 << TiBParser.T__2) | (1 << TiBParser.T__3) | (1 << TiBParser.T__4) | (1 << TiBParser.T__5) | (1 << TiBParser.T__6) | (1 << TiBParser.T__7) | (1 << TiBParser.T__8) | (1 << TiBParser.T__9) | (1 << TiBParser.T__10) | (1 << TiBParser.T__11) | (1 << TiBParser.T__12) | (1 << TiBParser.T__13) | (1 << TiBParser.T__14) | (1 << TiBParser.T__15) | (1 << TiBParser.T__16) | (1 << TiBParser.T__17) | (1 << TiBParser.T__18) | (1 << TiBParser.T__19) | (1 << TiBParser.LETTER) | (1 << TiBParser.NUMBER))) !== 0)) {
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
};

function TokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_token;
    return this;
}

TokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TokenContext.prototype.constructor = TokenContext;

TokenContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

TokenContext.prototype.colon = function() {
    return this.getTypedRuleContext(ColonContext,0);
};

TokenContext.prototype.if_ = function() {
    return this.getTypedRuleContext(If_Context,0);
};

TokenContext.prototype.then = function() {
    return this.getTypedRuleContext(ThenContext,0);
};

TokenContext.prototype.end = function() {
    return this.getTypedRuleContext(EndContext,0);
};

TokenContext.prototype.pi = function() {
    return this.getTypedRuleContext(PiContext,0);
};

TokenContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

TokenContext.prototype.i = function() {
    return this.getTypedRuleContext(IContext,0);
};

TokenContext.prototype.letter = function() {
    return this.getTypedRuleContext(LetterContext,0);
};

TokenContext.prototype.quote = function() {
    return this.getTypedRuleContext(QuoteContext,0);
};

TokenContext.prototype.disp = function() {
    return this.getTypedRuleContext(DispContext,0);
};

TokenContext.prototype.input = function() {
    return this.getTypedRuleContext(InputContext,0);
};

TokenContext.prototype.newline = function() {
    return this.getTypedRuleContext(NewlineContext,0);
};

TokenContext.prototype.comma = function() {
    return this.getTypedRuleContext(CommaContext,0);
};

TokenContext.prototype.store = function() {
    return this.getTypedRuleContext(StoreContext,0);
};

TokenContext.prototype.period = function() {
    return this.getTypedRuleContext(PeriodContext,0);
};

TokenContext.prototype.equals = function() {
    return this.getTypedRuleContext(EqualsContext,0);
};

TokenContext.prototype.space = function() {
    return this.getTypedRuleContext(SpaceContext,0);
};

TokenContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

TokenContext.prototype.open_bracket = function() {
    return this.getTypedRuleContext(Open_bracketContext,0);
};

TokenContext.prototype.close_bracket = function() {
    return this.getTypedRuleContext(Close_bracketContext,0);
};

TokenContext.prototype.semicolon = function() {
    return this.getTypedRuleContext(SemicolonContext,0);
};

TokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterToken(this);
	}
};

TokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitToken(this);
	}
};

TokenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitToken(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.TokenContext = TokenContext;

TiBParser.prototype.token = function() {

    var localctx = new TokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TiBParser.RULE_token);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TiBParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.number();
            break;
        case TiBParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.colon();
            break;
        case TiBParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.if_();
            break;
        case TiBParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 60;
            this.then();
            break;
        case TiBParser.T__5:
            this.enterOuterAlt(localctx, 5);
            this.state = 61;
            this.end();
            break;
        case TiBParser.T__16:
            this.enterOuterAlt(localctx, 6);
            this.state = 62;
            this.pi();
            break;
        case TiBParser.T__17:
            this.enterOuterAlt(localctx, 7);
            this.state = 63;
            this.e();
            break;
        case TiBParser.T__18:
            this.enterOuterAlt(localctx, 8);
            this.state = 64;
            this.i();
            break;
        case TiBParser.LETTER:
            this.enterOuterAlt(localctx, 9);
            this.state = 65;
            this.letter();
            break;
        case TiBParser.T__8:
            this.enterOuterAlt(localctx, 10);
            this.state = 66;
            this.quote();
            break;
        case TiBParser.T__0:
            this.enterOuterAlt(localctx, 11);
            this.state = 67;
            this.disp();
            break;
        case TiBParser.T__1:
            this.enterOuterAlt(localctx, 12);
            this.state = 68;
            this.input();
            break;
        case TiBParser.T__19:
            this.enterOuterAlt(localctx, 13);
            this.state = 69;
            this.newline();
            break;
        case TiBParser.T__11:
            this.enterOuterAlt(localctx, 14);
            this.state = 70;
            this.comma();
            break;
        case TiBParser.T__2:
            this.enterOuterAlt(localctx, 15);
            this.state = 71;
            this.store();
            break;
        case TiBParser.T__12:
            this.enterOuterAlt(localctx, 16);
            this.state = 72;
            this.period();
            break;
        case TiBParser.T__15:
            this.enterOuterAlt(localctx, 17);
            this.state = 73;
            this.equals();
            break;
        case TiBParser.T__7:
            this.enterOuterAlt(localctx, 18);
            this.state = 74;
            this.space();
            break;
        case TiBParser.T__6:
            this.enterOuterAlt(localctx, 19);
            this.state = 75;
            this.list();
            break;
        case TiBParser.T__13:
            this.enterOuterAlt(localctx, 20);
            this.state = 76;
            this.open_bracket();
            break;
        case TiBParser.T__14:
            this.enterOuterAlt(localctx, 21);
            this.state = 77;
            this.close_bracket();
            break;
        case TiBParser.T__10:
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
};

function DispContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_disp;
    return this;
}

DispContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DispContext.prototype.constructor = DispContext;


DispContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterDisp(this);
	}
};

DispContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitDisp(this);
	}
};

DispContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitDisp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.DispContext = DispContext;

TiBParser.prototype.disp = function() {

    var localctx = new DispContext(this, this._ctx, this.state);
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
};

function InputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_input;
    return this;
}

InputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputContext.prototype.constructor = InputContext;


InputContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterInput(this);
	}
};

InputContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitInput(this);
	}
};

InputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitInput(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.InputContext = InputContext;

TiBParser.prototype.input = function() {

    var localctx = new InputContext(this, this._ctx, this.state);
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
};

function StoreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_store;
    return this;
}

StoreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StoreContext.prototype.constructor = StoreContext;


StoreContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterStore(this);
	}
};

StoreContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitStore(this);
	}
};

StoreContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitStore(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.StoreContext = StoreContext;

TiBParser.prototype.store = function() {

    var localctx = new StoreContext(this, this._ctx, this.state);
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
};

function If_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_if_;
    return this;
}

If_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_Context.prototype.constructor = If_Context;


If_Context.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterIf_(this);
	}
};

If_Context.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitIf_(this);
	}
};

If_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitIf_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.If_Context = If_Context;

TiBParser.prototype.if_ = function() {

    var localctx = new If_Context(this, this._ctx, this.state);
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
};

function ThenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_then;
    return this;
}

ThenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThenContext.prototype.constructor = ThenContext;


ThenContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterThen(this);
	}
};

ThenContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitThen(this);
	}
};

ThenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitThen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.ThenContext = ThenContext;

TiBParser.prototype.then = function() {

    var localctx = new ThenContext(this, this._ctx, this.state);
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
};

function EndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_end;
    return this;
}

EndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndContext.prototype.constructor = EndContext;


EndContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterEnd(this);
	}
};

EndContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitEnd(this);
	}
};

EndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitEnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.EndContext = EndContext;

TiBParser.prototype.end = function() {

    var localctx = new EndContext(this, this._ctx, this.state);
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
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.ListContext = ListContext;

TiBParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
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
};

function SpaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_space;
    return this;
}

SpaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpaceContext.prototype.constructor = SpaceContext;


SpaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterSpace(this);
	}
};

SpaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitSpace(this);
	}
};

SpaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitSpace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.SpaceContext = SpaceContext;

TiBParser.prototype.space = function() {

    var localctx = new SpaceContext(this, this._ctx, this.state);
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
};

function QuoteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_quote;
    return this;
}

QuoteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuoteContext.prototype.constructor = QuoteContext;


QuoteContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterQuote(this);
	}
};

QuoteContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitQuote(this);
	}
};

QuoteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitQuote(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.QuoteContext = QuoteContext;

TiBParser.prototype.quote = function() {

    var localctx = new QuoteContext(this, this._ctx, this.state);
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
};

function LetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_letter;
    return this;
}

LetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetterContext.prototype.constructor = LetterContext;

LetterContext.prototype.LETTER = function() {
    return this.getToken(TiBParser.LETTER, 0);
};

LetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterLetter(this);
	}
};

LetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitLetter(this);
	}
};

LetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitLetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.LetterContext = LetterContext;

TiBParser.prototype.letter = function() {

    var localctx = new LetterContext(this, this._ctx, this.state);
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
};

function ColonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_colon;
    return this;
}

ColonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColonContext.prototype.constructor = ColonContext;


ColonContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterColon(this);
	}
};

ColonContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitColon(this);
	}
};

ColonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitColon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.ColonContext = ColonContext;

TiBParser.prototype.colon = function() {

    var localctx = new ColonContext(this, this._ctx, this.state);
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
};

function SemicolonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_semicolon;
    return this;
}

SemicolonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SemicolonContext.prototype.constructor = SemicolonContext;


SemicolonContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterSemicolon(this);
	}
};

SemicolonContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitSemicolon(this);
	}
};

SemicolonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitSemicolon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.SemicolonContext = SemicolonContext;

TiBParser.prototype.semicolon = function() {

    var localctx = new SemicolonContext(this, this._ctx, this.state);
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
};

function CommaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_comma;
    return this;
}

CommaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommaContext.prototype.constructor = CommaContext;


CommaContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterComma(this);
	}
};

CommaContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitComma(this);
	}
};

CommaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitComma(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.CommaContext = CommaContext;

TiBParser.prototype.comma = function() {

    var localctx = new CommaContext(this, this._ctx, this.state);
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
};

function PeriodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_period;
    return this;
}

PeriodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PeriodContext.prototype.constructor = PeriodContext;


PeriodContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterPeriod(this);
	}
};

PeriodContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitPeriod(this);
	}
};

PeriodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitPeriod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.PeriodContext = PeriodContext;

TiBParser.prototype.period = function() {

    var localctx = new PeriodContext(this, this._ctx, this.state);
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
};

function Open_bracketContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_open_bracket;
    return this;
}

Open_bracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Open_bracketContext.prototype.constructor = Open_bracketContext;


Open_bracketContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterOpen_bracket(this);
	}
};

Open_bracketContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitOpen_bracket(this);
	}
};

Open_bracketContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitOpen_bracket(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.Open_bracketContext = Open_bracketContext;

TiBParser.prototype.open_bracket = function() {

    var localctx = new Open_bracketContext(this, this._ctx, this.state);
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
};

function Close_bracketContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_close_bracket;
    return this;
}

Close_bracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Close_bracketContext.prototype.constructor = Close_bracketContext;


Close_bracketContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterClose_bracket(this);
	}
};

Close_bracketContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitClose_bracket(this);
	}
};

Close_bracketContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitClose_bracket(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.Close_bracketContext = Close_bracketContext;

TiBParser.prototype.close_bracket = function() {

    var localctx = new Close_bracketContext(this, this._ctx, this.state);
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
};

function EqualsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_equals;
    return this;
}

EqualsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqualsContext.prototype.constructor = EqualsContext;


EqualsContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterEquals(this);
	}
};

EqualsContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitEquals(this);
	}
};

EqualsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitEquals(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.EqualsContext = EqualsContext;

TiBParser.prototype.equals = function() {

    var localctx = new EqualsContext(this, this._ctx, this.state);
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
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(TiBParser.NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.NumberContext = NumberContext;

TiBParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
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
};

function PiContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_pi;
    return this;
}

PiContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PiContext.prototype.constructor = PiContext;


PiContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterPi(this);
	}
};

PiContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitPi(this);
	}
};

PiContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitPi(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.PiContext = PiContext;

TiBParser.prototype.pi = function() {

    var localctx = new PiContext(this, this._ctx, this.state);
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
};

function EContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_e;
    return this;
}

EContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EContext.prototype.constructor = EContext;


EContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterE(this);
	}
};

EContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitE(this);
	}
};

EContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitE(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.EContext = EContext;

TiBParser.prototype.e = function() {

    var localctx = new EContext(this, this._ctx, this.state);
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
};

function IContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_i;
    return this;
}

IContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IContext.prototype.constructor = IContext;


IContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterI(this);
	}
};

IContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitI(this);
	}
};

IContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitI(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.IContext = IContext;

TiBParser.prototype.i = function() {

    var localctx = new IContext(this, this._ctx, this.state);
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
};

function NewlineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TiBParser.RULE_newline;
    return this;
}

NewlineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NewlineContext.prototype.constructor = NewlineContext;


NewlineContext.prototype.enterRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.enterNewline(this);
	}
};

NewlineContext.prototype.exitRule = function(listener) {
    if(listener instanceof TiBListener ) {
        listener.exitNewline(this);
	}
};

NewlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TiBVisitor ) {
        return visitor.visitNewline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TiBParser.NewlineContext = NewlineContext;

TiBParser.prototype.newline = function() {

    var localctx = new NewlineContext(this, this._ctx, this.state);
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
};


exports.TiBParser = TiBParser;
