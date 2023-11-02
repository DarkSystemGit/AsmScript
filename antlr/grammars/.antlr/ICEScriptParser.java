// Generated from /home/darksystem/ICEScript/antlr/grammars/ICEScript by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ICEScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, OPEN_BRACKET=5, CLOSE_BRACKET=6, OPEN_CURLEY=7, 
		CLOSE_CURLEY=8, END_STMT=9, ADD=10, SUB=11, MUL=12, DIV=13, GREATER_THAN=14, 
		LESS_THAN=15, EQUAL_TO=16, NOT_EQUAL_TO=17, GREATER_THAN_OR_EQUAL=18, 
		LESS_THAN_OR_EQUAL=19, OR=20, AND=21, ASSIGN=22, ADDASSIGN=23, SUBASSIGN=24, 
		MULASSIGN=25, DIVASSIGN=26, INCREMENT=27, DECREMENT=28, DEF=29, VAR=30, 
		STR=31, IF=32, WHILE=33, RETURN=34, TRUE=35, FALSE=36, IDENTIFIER=37, 
		NUMBER=38, PI=39, E=40, I=41, QUOTED_TEXT=42, LIST=43, MATRIX=44, LINECOMMENT=45, 
		BLOCKCOMMENT=46, WHITESPACE=47;
	public static final int
		RULE_script = 0, RULE_header = 1, RULE_meta = 2, RULE_scriptName = 3, 
		RULE_include = 4, RULE_function = 5, RULE_func_params = 6, RULE_statement = 7, 
		RULE_assign_stmt = 8, RULE_ti_basic_stmt = 9, RULE_any = 10, RULE_add_assign_stmt = 11, 
		RULE_sub_assign_stmt = 12, RULE_mul_assign_stmt = 13, RULE_div_assign_stmt = 14, 
		RULE_inc_stmt = 15, RULE_dec_stmt = 16, RULE_if_stmt = 17, RULE_while_stmt = 18, 
		RULE_var_stmt = 19, RULE_return_stmt = 20, RULE_expression = 21, RULE_boolexpr = 22, 
		RULE_methodcall = 23, RULE_methodparams = 24, RULE_value = 25, RULE_identifier = 26, 
		RULE_number = 27;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "header", "meta", "scriptName", "include", "function", "func_params", 
			"statement", "assign_stmt", "ti_basic_stmt", "any", "add_assign_stmt", 
			"sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", "inc_stmt", 
			"dec_stmt", "if_stmt", "while_stmt", "var_stmt", "return_stmt", "expression", 
			"boolexpr", "methodcall", "methodparams", "value", "identifier", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import:'", "','", "'__TiBasic'", "'('", "')'", "'{'", 
			"'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", 
			"'>='", "'<='", "'||'", "'&&'", "'='", "'+='", "'-='", "'*='", "'/='", 
			"'++'", "'--'", "'function'", "'var'", "'str'", "'if'", "'while'", "'return'", 
			"'true'", "'false'", null, null, "'pi'", "'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", 
			"CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
			"LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", 
			"OR", "AND", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
			"INCREMENT", "DECREMENT", "DEF", "VAR", "STR", "IF", "WHILE", "RETURN", 
			"TRUE", "FALSE", "IDENTIFIER", "NUMBER", "PI", "E", "I", "QUOTED_TEXT", 
			"LIST", "MATRIX", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ICEScript"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ICEScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ScriptContext extends ParserRuleContext {
		public HeaderContext header() {
			return getRuleContext(HeaderContext.class,0);
		}
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode EOF() { return getToken(ICEScriptParser.EOF, 0); }
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
		int _la;
		try {
			setState(70);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(56);
				header();
				setState(60);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DEF) {
					{
					{
					setState(57);
					function();
					}
					}
					setState(62);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << VAR) | (1L << IF) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT) | (1L << LIST) | (1L << MATRIX))) != 0)) {
					{
					{
					setState(63);
					statement();
					}
					}
					setState(68);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				match(EOF);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HeaderContext extends ParserRuleContext {
		public List<IncludeContext> include() {
			return getRuleContexts(IncludeContext.class);
		}
		public IncludeContext include(int i) {
			return getRuleContext(IncludeContext.class,i);
		}
		public HeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_header; }
	}

	public final HeaderContext header() throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_header);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(72);
				include();
				}
				}
				setState(77);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MetaContext extends ParserRuleContext {
		public ScriptNameContext scriptName() {
			return getRuleContext(ScriptNameContext.class,0);
		}
		public MetaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_meta; }
	}

	public final MetaContext meta() throws RecognitionException {
		MetaContext _localctx = new MetaContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_meta);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			scriptName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScriptNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public ScriptNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scriptName; }
	}

	public final ScriptNameContext scriptName() throws RecognitionException {
		ScriptNameContext _localctx = new ScriptNameContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_scriptName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(T__0);
			setState(81);
			identifier();
			setState(82);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IncludeContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public IncludeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include; }
	}

	public final IncludeContext include() throws RecognitionException {
		IncludeContext _localctx = new IncludeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_include);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(T__1);
			setState(85);
			identifier();
			setState(86);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(ICEScriptParser.DEF, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public Func_paramsContext func_params() {
			return getRuleContext(Func_paramsContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_function);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(DEF);
			setState(89);
			identifier();
			setState(90);
			match(OPEN_BRACKET);
			setState(91);
			func_params();
			setState(92);
			match(CLOSE_BRACKET);
			setState(93);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_paramsContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public Func_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_params; }
	}

	public final Func_paramsContext func_params() throws RecognitionException {
		Func_paramsContext _localctx = new Func_paramsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_func_params);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(95);
				identifier();
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(101);
				match(T__2);
				setState(102);
				identifier();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLEY() { return getToken(ICEScriptParser.OPEN_CURLEY, 0); }
		public TerminalNode CLOSE_CURLEY() { return getToken(ICEScriptParser.CLOSE_CURLEY, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Assign_stmtContext assign_stmt() {
			return getRuleContext(Assign_stmtContext.class,0);
		}
		public Ti_basic_stmtContext ti_basic_stmt() {
			return getRuleContext(Ti_basic_stmtContext.class,0);
		}
		public Add_assign_stmtContext add_assign_stmt() {
			return getRuleContext(Add_assign_stmtContext.class,0);
		}
		public Sub_assign_stmtContext sub_assign_stmt() {
			return getRuleContext(Sub_assign_stmtContext.class,0);
		}
		public Mul_assign_stmtContext mul_assign_stmt() {
			return getRuleContext(Mul_assign_stmtContext.class,0);
		}
		public Div_assign_stmtContext div_assign_stmt() {
			return getRuleContext(Div_assign_stmtContext.class,0);
		}
		public Inc_stmtContext inc_stmt() {
			return getRuleContext(Inc_stmtContext.class,0);
		}
		public Dec_stmtContext dec_stmt() {
			return getRuleContext(Dec_stmtContext.class,0);
		}
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public While_stmtContext while_stmt() {
			return getRuleContext(While_stmtContext.class,0);
		}
		public Var_stmtContext var_stmt() {
			return getRuleContext(Var_stmtContext.class,0);
		}
		public Return_stmtContext return_stmt() {
			return getRuleContext(Return_stmtContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		int _la;
		try {
			setState(132);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(108);
				match(OPEN_CURLEY);
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << VAR) | (1L << IF) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT) | (1L << LIST) | (1L << MATRIX))) != 0)) {
					{
					{
					setState(109);
					statement();
					}
					}
					setState(114);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(115);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(116);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(117);
				ti_basic_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(118);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(119);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(120);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(121);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(122);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(123);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(124);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(125);
				while_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(126);
				var_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(127);
				return_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(128);
				expression(0);
				setState(129);
				match(END_STMT);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(131);
				match(END_STMT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(ICEScriptParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign_stmt; }
	}

	public final Assign_stmtContext assign_stmt() throws RecognitionException {
		Assign_stmtContext _localctx = new Assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			identifier();
			setState(135);
			match(ASSIGN);
			setState(136);
			expression(0);
			setState(137);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Ti_basic_stmtContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLEY() { return getToken(ICEScriptParser.OPEN_CURLEY, 0); }
		public AnyContext any() {
			return getRuleContext(AnyContext.class,0);
		}
		public TerminalNode CLOSE_CURLEY() { return getToken(ICEScriptParser.CLOSE_CURLEY, 0); }
		public Ti_basic_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ti_basic_stmt; }
	}

	public final Ti_basic_stmtContext ti_basic_stmt() throws RecognitionException {
		Ti_basic_stmtContext _localctx = new Ti_basic_stmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ti_basic_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(T__3);
			setState(140);
			match(OPEN_CURLEY);
			setState(141);
			any();
			setState(142);
			match(CLOSE_CURLEY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnyContext extends ParserRuleContext {
		public AnyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_any; }
	}

	public final AnyContext any() throws RecognitionException {
		AnyContext _localctx = new AnyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_any);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(145); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(144);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(147); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			} while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Add_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ADDASSIGN() { return getToken(ICEScriptParser.ADDASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Add_assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_add_assign_stmt; }
	}

	public final Add_assign_stmtContext add_assign_stmt() throws RecognitionException {
		Add_assign_stmtContext _localctx = new Add_assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_add_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			identifier();
			setState(150);
			match(ADDASSIGN);
			setState(151);
			value();
			setState(152);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sub_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SUBASSIGN() { return getToken(ICEScriptParser.SUBASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Sub_assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sub_assign_stmt; }
	}

	public final Sub_assign_stmtContext sub_assign_stmt() throws RecognitionException {
		Sub_assign_stmtContext _localctx = new Sub_assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_sub_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			identifier();
			setState(155);
			match(SUBASSIGN);
			setState(156);
			value();
			setState(157);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Mul_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode MULASSIGN() { return getToken(ICEScriptParser.MULASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Mul_assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mul_assign_stmt; }
	}

	public final Mul_assign_stmtContext mul_assign_stmt() throws RecognitionException {
		Mul_assign_stmtContext _localctx = new Mul_assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_mul_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			identifier();
			setState(160);
			match(MULASSIGN);
			setState(161);
			value();
			setState(162);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Div_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode DIVASSIGN() { return getToken(ICEScriptParser.DIVASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Div_assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_div_assign_stmt; }
	}

	public final Div_assign_stmtContext div_assign_stmt() throws RecognitionException {
		Div_assign_stmtContext _localctx = new Div_assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_div_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			identifier();
			setState(165);
			match(DIVASSIGN);
			setState(166);
			value();
			setState(167);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Inc_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode INCREMENT() { return getToken(ICEScriptParser.INCREMENT, 0); }
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Inc_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inc_stmt; }
	}

	public final Inc_stmtContext inc_stmt() throws RecognitionException {
		Inc_stmtContext _localctx = new Inc_stmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_inc_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			identifier();
			setState(170);
			match(INCREMENT);
			setState(171);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Dec_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode DECREMENT() { return getToken(ICEScriptParser.DECREMENT, 0); }
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Dec_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dec_stmt; }
	}

	public final Dec_stmtContext dec_stmt() throws RecognitionException {
		Dec_stmtContext _localctx = new Dec_stmtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_dec_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			identifier();
			setState(174);
			match(DECREMENT);
			setState(175);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_stmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(ICEScriptParser.IF, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public If_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_stmt; }
	}

	public final If_stmtContext if_stmt() throws RecognitionException {
		If_stmtContext _localctx = new If_stmtContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_if_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(IF);
			setState(178);
			match(OPEN_BRACKET);
			setState(179);
			boolexpr();
			setState(180);
			match(CLOSE_BRACKET);
			setState(181);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_stmtContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(ICEScriptParser.WHILE, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public While_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_stmt; }
	}

	public final While_stmtContext while_stmt() throws RecognitionException {
		While_stmtContext _localctx = new While_stmtContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			match(WHILE);
			setState(184);
			match(OPEN_BRACKET);
			setState(185);
			boolexpr();
			setState(186);
			match(CLOSE_BRACKET);
			setState(187);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Var_stmtContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(ICEScriptParser.VAR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(ICEScriptParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Var_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_stmt; }
	}

	public final Var_stmtContext var_stmt() throws RecognitionException {
		Var_stmtContext _localctx = new Var_stmtContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_var_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			match(VAR);
			setState(190);
			identifier();
			setState(191);
			match(ASSIGN);
			setState(192);
			expression(0);
			setState(193);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Return_stmtContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(ICEScriptParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public Return_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_stmt; }
	}

	public final Return_stmtContext return_stmt() throws RecognitionException {
		Return_stmtContext _localctx = new Return_stmtContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_return_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(RETURN);
			setState(196);
			expression(0);
			setState(197);
			match(END_STMT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode QUOTED_TEXT() { return getToken(ICEScriptParser.QUOTED_TEXT, 0); }
		public MethodcallContext methodcall() {
			return getRuleContext(MethodcallContext.class,0);
		}
		public TerminalNode LIST() { return getToken(ICEScriptParser.LIST, 0); }
		public TerminalNode MATRIX() { return getToken(ICEScriptParser.MATRIX, 0); }
		public TerminalNode ADD() { return getToken(ICEScriptParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ICEScriptParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(ICEScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ICEScriptParser.DIV, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(200);
				match(OPEN_BRACKET);
				setState(201);
				expression(0);
				setState(202);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(204);
				value();
				}
				break;
			case 3:
				{
				setState(205);
				boolexpr();
				}
				break;
			case 4:
				{
				setState(206);
				match(QUOTED_TEXT);
				}
				break;
			case 5:
				{
				setState(207);
				methodcall();
				}
				break;
			case 6:
				{
				setState(208);
				match(LIST);
				}
				break;
			case 7:
				{
				setState(209);
				match(MATRIX);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(226);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(224);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(212);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(213);
						match(ADD);
						setState(214);
						expression(11);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(215);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(216);
						match(SUB);
						setState(217);
						expression(10);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(218);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(219);
						match(MUL);
						setState(220);
						expression(9);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(221);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(222);
						match(DIV);
						setState(223);
						expression(8);
						}
						break;
					}
					} 
				}
				setState(228);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BoolexprContext extends ParserRuleContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TRUE() { return getToken(ICEScriptParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ICEScriptParser.FALSE, 0); }
		public TerminalNode GREATER_THAN() { return getToken(ICEScriptParser.GREATER_THAN, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode LESS_THAN() { return getToken(ICEScriptParser.LESS_THAN, 0); }
		public TerminalNode EQUAL_TO() { return getToken(ICEScriptParser.EQUAL_TO, 0); }
		public TerminalNode NOT_EQUAL_TO() { return getToken(ICEScriptParser.NOT_EQUAL_TO, 0); }
		public TerminalNode GREATER_THAN_OR_EQUAL() { return getToken(ICEScriptParser.GREATER_THAN_OR_EQUAL, 0); }
		public TerminalNode LESS_THAN_OR_EQUAL() { return getToken(ICEScriptParser.LESS_THAN_OR_EQUAL, 0); }
		public TerminalNode OR() { return getToken(ICEScriptParser.OR, 0); }
		public TerminalNode AND() { return getToken(ICEScriptParser.AND, 0); }
		public BoolexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolexpr; }
	}

	public final BoolexprContext boolexpr() throws RecognitionException {
		BoolexprContext _localctx = new BoolexprContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_boolexpr);
		try {
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(229);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(230);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(231);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(232);
				value();
				setState(233);
				match(GREATER_THAN);
				setState(234);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(236);
				value();
				setState(237);
				match(LESS_THAN);
				setState(238);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(240);
				value();
				setState(241);
				match(EQUAL_TO);
				setState(242);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(244);
				value();
				setState(245);
				match(NOT_EQUAL_TO);
				setState(246);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(248);
				value();
				setState(249);
				match(GREATER_THAN_OR_EQUAL);
				setState(250);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(252);
				value();
				setState(253);
				match(LESS_THAN_OR_EQUAL);
				setState(254);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(256);
				value();
				setState(257);
				match(OR);
				setState(258);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(260);
				value();
				setState(261);
				match(AND);
				setState(262);
				boolexpr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodcallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public MethodparamsContext methodparams() {
			return getRuleContext(MethodparamsContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public MethodcallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodcall; }
	}

	public final MethodcallContext methodcall() throws RecognitionException {
		MethodcallContext _localctx = new MethodcallContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_methodcall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			identifier();
			setState(267);
			match(OPEN_BRACKET);
			setState(268);
			methodparams();
			setState(269);
			match(CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodparamsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MethodparamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodparams; }
	}

	public final MethodparamsContext methodparams() throws RecognitionException {
		MethodparamsContext _localctx = new MethodparamsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_methodparams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPEN_BRACKET) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT) | (1L << LIST) | (1L << MATRIX))) != 0)) {
				{
				{
				setState(271);
				expression(0);
				}
				}
				setState(276);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(277);
				match(T__2);
				setState(278);
				expression(0);
				}
				}
				setState(283);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_value);
		try {
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(284);
				identifier();
				}
				break;
			case NUMBER:
			case PI:
			case E:
			case I:
				enterOuterAlt(_localctx, 2);
				{
				setState(285);
				number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(ICEScriptParser.IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(ICEScriptParser.NUMBER, 0); }
		public TerminalNode PI() { return getToken(ICEScriptParser.PI, 0); }
		public TerminalNode E() { return getToken(ICEScriptParser.E, 0); }
		public TerminalNode I() { return getToken(ICEScriptParser.I, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 21:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 8);
		case 3:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\61\u0127\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\3\2\3\2\7\2=\n\2\f\2\16\2@\13"+
		"\2\3\2\7\2C\n\2\f\2\16\2F\13\2\3\2\5\2I\n\2\3\3\7\3L\n\3\f\3\16\3O\13"+
		"\3\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\b\7\bc\n\b\f\b\16\bf\13\b\3\b\3\b\7\bj\n\b\f\b\16\bm\13\b\3\t\3\t\7"+
		"\tq\n\t\f\t\16\tt\13\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\5\t\u0087\n\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\13\3\f\6\f\u0094\n\f\r\f\16\f\u0095\3\r\3\r\3\r\3\r\3\r\3\16\3"+
		"\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3"+
		"\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3"+
		"\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u00d5"+
		"\n\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\7\27"+
		"\u00e3\n\27\f\27\16\27\u00e6\13\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\5\30\u010b\n\30\3\31\3\31\3\31\3\31\3\31\3\32\7\32\u0113\n\32\f\32\16"+
		"\32\u0116\13\32\3\32\3\32\7\32\u011a\n\32\f\32\16\32\u011d\13\32\3\33"+
		"\3\33\5\33\u0121\n\33\3\34\3\34\3\35\3\35\3\35\3\u0095\3,\36\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668\2\3\3\2(+\2\u0137"+
		"\2H\3\2\2\2\4M\3\2\2\2\6P\3\2\2\2\bR\3\2\2\2\nV\3\2\2\2\fZ\3\2\2\2\16"+
		"d\3\2\2\2\20\u0086\3\2\2\2\22\u0088\3\2\2\2\24\u008d\3\2\2\2\26\u0093"+
		"\3\2\2\2\30\u0097\3\2\2\2\32\u009c\3\2\2\2\34\u00a1\3\2\2\2\36\u00a6\3"+
		"\2\2\2 \u00ab\3\2\2\2\"\u00af\3\2\2\2$\u00b3\3\2\2\2&\u00b9\3\2\2\2(\u00bf"+
		"\3\2\2\2*\u00c5\3\2\2\2,\u00d4\3\2\2\2.\u010a\3\2\2\2\60\u010c\3\2\2\2"+
		"\62\u0114\3\2\2\2\64\u0120\3\2\2\2\66\u0122\3\2\2\28\u0124\3\2\2\2:>\5"+
		"\4\3\2;=\5\f\7\2<;\3\2\2\2=@\3\2\2\2><\3\2\2\2>?\3\2\2\2?D\3\2\2\2@>\3"+
		"\2\2\2AC\5\20\t\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2EI\3\2\2\2FD"+
		"\3\2\2\2GI\7\2\2\3H:\3\2\2\2HG\3\2\2\2I\3\3\2\2\2JL\5\n\6\2KJ\3\2\2\2"+
		"LO\3\2\2\2MK\3\2\2\2MN\3\2\2\2N\5\3\2\2\2OM\3\2\2\2PQ\5\b\5\2Q\7\3\2\2"+
		"\2RS\7\3\2\2ST\5\66\34\2TU\7\13\2\2U\t\3\2\2\2VW\7\4\2\2WX\5\66\34\2X"+
		"Y\7\13\2\2Y\13\3\2\2\2Z[\7\37\2\2[\\\5\66\34\2\\]\7\7\2\2]^\5\16\b\2^"+
		"_\7\b\2\2_`\5\20\t\2`\r\3\2\2\2ac\5\66\34\2ba\3\2\2\2cf\3\2\2\2db\3\2"+
		"\2\2de\3\2\2\2ek\3\2\2\2fd\3\2\2\2gh\7\5\2\2hj\5\66\34\2ig\3\2\2\2jm\3"+
		"\2\2\2ki\3\2\2\2kl\3\2\2\2l\17\3\2\2\2mk\3\2\2\2nr\7\t\2\2oq\5\20\t\2"+
		"po\3\2\2\2qt\3\2\2\2rp\3\2\2\2rs\3\2\2\2su\3\2\2\2tr\3\2\2\2u\u0087\7"+
		"\n\2\2v\u0087\5\22\n\2w\u0087\5\24\13\2x\u0087\5\30\r\2y\u0087\5\32\16"+
		"\2z\u0087\5\34\17\2{\u0087\5\36\20\2|\u0087\5 \21\2}\u0087\5\"\22\2~\u0087"+
		"\5$\23\2\177\u0087\5&\24\2\u0080\u0087\5(\25\2\u0081\u0087\5*\26\2\u0082"+
		"\u0083\5,\27\2\u0083\u0084\7\13\2\2\u0084\u0087\3\2\2\2\u0085\u0087\7"+
		"\13\2\2\u0086n\3\2\2\2\u0086v\3\2\2\2\u0086w\3\2\2\2\u0086x\3\2\2\2\u0086"+
		"y\3\2\2\2\u0086z\3\2\2\2\u0086{\3\2\2\2\u0086|\3\2\2\2\u0086}\3\2\2\2"+
		"\u0086~\3\2\2\2\u0086\177\3\2\2\2\u0086\u0080\3\2\2\2\u0086\u0081\3\2"+
		"\2\2\u0086\u0082\3\2\2\2\u0086\u0085\3\2\2\2\u0087\21\3\2\2\2\u0088\u0089"+
		"\5\66\34\2\u0089\u008a\7\30\2\2\u008a\u008b\5,\27\2\u008b\u008c\7\13\2"+
		"\2\u008c\23\3\2\2\2\u008d\u008e\7\6\2\2\u008e\u008f\7\t\2\2\u008f\u0090"+
		"\5\26\f\2\u0090\u0091\7\n\2\2\u0091\25\3\2\2\2\u0092\u0094\13\2\2\2\u0093"+
		"\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\3\2\2\2\u0095\u0093\3\2"+
		"\2\2\u0096\27\3\2\2\2\u0097\u0098\5\66\34\2\u0098\u0099\7\31\2\2\u0099"+
		"\u009a\5\64\33\2\u009a\u009b\7\13\2\2\u009b\31\3\2\2\2\u009c\u009d\5\66"+
		"\34\2\u009d\u009e\7\32\2\2\u009e\u009f\5\64\33\2\u009f\u00a0\7\13\2\2"+
		"\u00a0\33\3\2\2\2\u00a1\u00a2\5\66\34\2\u00a2\u00a3\7\33\2\2\u00a3\u00a4"+
		"\5\64\33\2\u00a4\u00a5\7\13\2\2\u00a5\35\3\2\2\2\u00a6\u00a7\5\66\34\2"+
		"\u00a7\u00a8\7\34\2\2\u00a8\u00a9\5\64\33\2\u00a9\u00aa\7\13\2\2\u00aa"+
		"\37\3\2\2\2\u00ab\u00ac\5\66\34\2\u00ac\u00ad\7\35\2\2\u00ad\u00ae\7\13"+
		"\2\2\u00ae!\3\2\2\2\u00af\u00b0\5\66\34\2\u00b0\u00b1\7\36\2\2\u00b1\u00b2"+
		"\7\13\2\2\u00b2#\3\2\2\2\u00b3\u00b4\7\"\2\2\u00b4\u00b5\7\7\2\2\u00b5"+
		"\u00b6\5.\30\2\u00b6\u00b7\7\b\2\2\u00b7\u00b8\5\20\t\2\u00b8%\3\2\2\2"+
		"\u00b9\u00ba\7#\2\2\u00ba\u00bb\7\7\2\2\u00bb\u00bc\5.\30\2\u00bc\u00bd"+
		"\7\b\2\2\u00bd\u00be\5\20\t\2\u00be\'\3\2\2\2\u00bf\u00c0\7 \2\2\u00c0"+
		"\u00c1\5\66\34\2\u00c1\u00c2\7\30\2\2\u00c2\u00c3\5,\27\2\u00c3\u00c4"+
		"\7\13\2\2\u00c4)\3\2\2\2\u00c5\u00c6\7$\2\2\u00c6\u00c7\5,\27\2\u00c7"+
		"\u00c8\7\13\2\2\u00c8+\3\2\2\2\u00c9\u00ca\b\27\1\2\u00ca\u00cb\7\7\2"+
		"\2\u00cb\u00cc\5,\27\2\u00cc\u00cd\7\b\2\2\u00cd\u00d5\3\2\2\2\u00ce\u00d5"+
		"\5\64\33\2\u00cf\u00d5\5.\30\2\u00d0\u00d5\7,\2\2\u00d1\u00d5\5\60\31"+
		"\2\u00d2\u00d5\7-\2\2\u00d3\u00d5\7.\2\2\u00d4\u00c9\3\2\2\2\u00d4\u00ce"+
		"\3\2\2\2\u00d4\u00cf\3\2\2\2\u00d4\u00d0\3\2\2\2\u00d4\u00d1\3\2\2\2\u00d4"+
		"\u00d2\3\2\2\2\u00d4\u00d3\3\2\2\2\u00d5\u00e4\3\2\2\2\u00d6\u00d7\f\f"+
		"\2\2\u00d7\u00d8\7\f\2\2\u00d8\u00e3\5,\27\r\u00d9\u00da\f\13\2\2\u00da"+
		"\u00db\7\r\2\2\u00db\u00e3\5,\27\f\u00dc\u00dd\f\n\2\2\u00dd\u00de\7\16"+
		"\2\2\u00de\u00e3\5,\27\13\u00df\u00e0\f\t\2\2\u00e0\u00e1\7\17\2\2\u00e1"+
		"\u00e3\5,\27\n\u00e2\u00d6\3\2\2\2\u00e2\u00d9\3\2\2\2\u00e2\u00dc\3\2"+
		"\2\2\u00e2\u00df\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4"+
		"\u00e5\3\2\2\2\u00e5-\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7\u010b\5\64\33"+
		"\2\u00e8\u010b\7%\2\2\u00e9\u010b\7&\2\2\u00ea\u00eb\5\64\33\2\u00eb\u00ec"+
		"\7\20\2\2\u00ec\u00ed\5.\30\2\u00ed\u010b\3\2\2\2\u00ee\u00ef\5\64\33"+
		"\2\u00ef\u00f0\7\21\2\2\u00f0\u00f1\5.\30\2\u00f1\u010b\3\2\2\2\u00f2"+
		"\u00f3\5\64\33\2\u00f3\u00f4\7\22\2\2\u00f4\u00f5\5.\30\2\u00f5\u010b"+
		"\3\2\2\2\u00f6\u00f7\5\64\33\2\u00f7\u00f8\7\23\2\2\u00f8\u00f9\5.\30"+
		"\2\u00f9\u010b\3\2\2\2\u00fa\u00fb\5\64\33\2\u00fb\u00fc\7\24\2\2\u00fc"+
		"\u00fd\5.\30\2\u00fd\u010b\3\2\2\2\u00fe\u00ff\5\64\33\2\u00ff\u0100\7"+
		"\25\2\2\u0100\u0101\5.\30\2\u0101\u010b\3\2\2\2\u0102\u0103\5\64\33\2"+
		"\u0103\u0104\7\26\2\2\u0104\u0105\5.\30\2\u0105\u010b\3\2\2\2\u0106\u0107"+
		"\5\64\33\2\u0107\u0108\7\27\2\2\u0108\u0109\5.\30\2\u0109\u010b\3\2\2"+
		"\2\u010a\u00e7\3\2\2\2\u010a\u00e8\3\2\2\2\u010a\u00e9\3\2\2\2\u010a\u00ea"+
		"\3\2\2\2\u010a\u00ee\3\2\2\2\u010a\u00f2\3\2\2\2\u010a\u00f6\3\2\2\2\u010a"+
		"\u00fa\3\2\2\2\u010a\u00fe\3\2\2\2\u010a\u0102\3\2\2\2\u010a\u0106\3\2"+
		"\2\2\u010b/\3\2\2\2\u010c\u010d\5\66\34\2\u010d\u010e\7\7\2\2\u010e\u010f"+
		"\5\62\32\2\u010f\u0110\7\b\2\2\u0110\61\3\2\2\2\u0111\u0113\5,\27\2\u0112"+
		"\u0111\3\2\2\2\u0113\u0116\3\2\2\2\u0114\u0112\3\2\2\2\u0114\u0115\3\2"+
		"\2\2\u0115\u011b\3\2\2\2\u0116\u0114\3\2\2\2\u0117\u0118\7\5\2\2\u0118"+
		"\u011a\5,\27\2\u0119\u0117\3\2\2\2\u011a\u011d\3\2\2\2\u011b\u0119\3\2"+
		"\2\2\u011b\u011c\3\2\2\2\u011c\63\3\2\2\2\u011d\u011b\3\2\2\2\u011e\u0121"+
		"\5\66\34\2\u011f\u0121\58\35\2\u0120\u011e\3\2\2\2\u0120\u011f\3\2\2\2"+
		"\u0121\65\3\2\2\2\u0122\u0123\7\'\2\2\u0123\67\3\2\2\2\u0124\u0125\t\2"+
		"\2\2\u01259\3\2\2\2\22>DHMdkr\u0086\u0095\u00d4\u00e2\u00e4\u010a\u0114"+
		"\u011b\u0120";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}