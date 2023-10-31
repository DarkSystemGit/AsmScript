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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, OPEN_BRACKET=8, 
		CLOSE_BRACKET=9, OPEN_CURLEY=10, CLOSE_CURLEY=11, END_STMT=12, ADD=13, 
		SUB=14, MUL=15, DIV=16, GREATER_THAN=17, LESS_THAN=18, EQUAL_TO=19, NOT_EQUAL_TO=20, 
		GREATER_THAN_OR_EQUAL=21, LESS_THAN_OR_EQUAL=22, OR=23, AND=24, ASSIGN=25, 
		ADDASSIGN=26, SUBASSIGN=27, MULASSIGN=28, DIVASSIGN=29, INCREMENT=30, 
		DECREMENT=31, DEF=32, VAR=33, STR=34, IF=35, WHILE=36, RETURN=37, TRUE=38, 
		FALSE=39, IDENTIFIER=40, NUMBER=41, PI=42, E=43, I=44, QUOTED_TEXT=45, 
		LINECOMMENT=46, BLOCKCOMMENT=47, WHITESPACE=48;
	public static final int
		RULE_script = 0, RULE_header = 1, RULE_meta = 2, RULE_scriptName = 3, 
		RULE_include = 4, RULE_function = 5, RULE_func_params = 6, RULE_statement = 7, 
		RULE_assign_stmt = 8, RULE_ti_basic_stmt = 9, RULE_list = 10, RULE_matrix = 11, 
		RULE_any = 12, RULE_add_assign_stmt = 13, RULE_sub_assign_stmt = 14, RULE_mul_assign_stmt = 15, 
		RULE_div_assign_stmt = 16, RULE_inc_stmt = 17, RULE_dec_stmt = 18, RULE_if_stmt = 19, 
		RULE_while_stmt = 20, RULE_var_stmt = 21, RULE_return_stmt = 22, RULE_expression = 23, 
		RULE_boolexpr = 24, RULE_methodcall = 25, RULE_methodparams = 26, RULE_value = 27, 
		RULE_identifier = 28, RULE_number = 29;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "header", "meta", "scriptName", "include", "function", "func_params", 
			"statement", "assign_stmt", "ti_basic_stmt", "list", "matrix", "any", 
			"add_assign_stmt", "sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", 
			"inc_stmt", "dec_stmt", "if_stmt", "while_stmt", "var_stmt", "return_stmt", 
			"expression", "boolexpr", "methodcall", "methodparams", "value", "identifier", 
			"number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import:'", "','", "'__TiBasic'", "'['", "']'", "'[['", 
			"'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", 
			"'<'", "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", "'='", "'+='", 
			"'-='", "'*='", "'/='", "'++'", "'--'", "'function'", "'var'", "'str'", 
			"'if'", "'while'", "'return'", "'true'", "'false'", null, null, "'pi'", 
			"'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
			"OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", 
			"GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
			"LESS_THAN_OR_EQUAL", "OR", "AND", "ASSIGN", "ADDASSIGN", "SUBASSIGN", 
			"MULASSIGN", "DIVASSIGN", "INCREMENT", "DECREMENT", "DEF", "VAR", "STR", 
			"IF", "WHILE", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "NUMBER", "PI", 
			"E", "I", "QUOTED_TEXT", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(60);
				header();
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DEF) {
					{
					{
					setState(61);
					function();
					}
					}
					setState(66);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << VAR) | (1L << IF) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT))) != 0)) {
					{
					{
					setState(67);
					statement();
					}
					}
					setState(72);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(73);
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
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(76);
				include();
				}
				}
				setState(81);
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
			setState(82);
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
			setState(84);
			match(T__0);
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
			setState(88);
			match(T__1);
			setState(89);
			identifier();
			setState(90);
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
			setState(92);
			match(DEF);
			setState(93);
			identifier();
			setState(94);
			match(OPEN_BRACKET);
			setState(95);
			func_params();
			setState(96);
			match(CLOSE_BRACKET);
			setState(97);
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
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(99);
				identifier();
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(105);
				match(T__2);
				setState(106);
				identifier();
				}
				}
				setState(111);
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
			setState(136);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(112);
				match(OPEN_CURLEY);
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__3) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << VAR) | (1L << IF) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT))) != 0)) {
					{
					{
					setState(113);
					statement();
					}
					}
					setState(118);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(119);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(121);
				ti_basic_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(122);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(123);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(124);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(125);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(126);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(127);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(128);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(129);
				while_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(130);
				var_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(131);
				return_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(132);
				expression(0);
				setState(133);
				match(END_STMT);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(135);
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
			setState(138);
			identifier();
			setState(139);
			match(ASSIGN);
			setState(140);
			expression(0);
			setState(141);
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
			setState(143);
			match(T__3);
			setState(144);
			match(OPEN_CURLEY);
			setState(145);
			any();
			setState(146);
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

	public static class ListContext extends ParserRuleContext {
		public AnyContext any() {
			return getRuleContext(AnyContext.class,0);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_list);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(T__4);
			setState(149);
			any();
			setState(150);
			match(T__5);
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

	public static class MatrixContext extends ParserRuleContext {
		public List<AnyContext> any() {
			return getRuleContexts(AnyContext.class);
		}
		public AnyContext any(int i) {
			return getRuleContext(AnyContext.class,i);
		}
		public MatrixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_matrix; }
	}

	public final MatrixContext matrix() throws RecognitionException {
		MatrixContext _localctx = new MatrixContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_matrix);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(T__6);
			setState(153);
			any();
			setState(154);
			match(T__5);
			setState(155);
			any();
			setState(156);
			match(T__5);
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
		enterRule(_localctx, 24, RULE_any);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(159); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(158);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(161); 
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
		enterRule(_localctx, 26, RULE_add_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			identifier();
			setState(164);
			match(ADDASSIGN);
			setState(165);
			value();
			setState(166);
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
		enterRule(_localctx, 28, RULE_sub_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			identifier();
			setState(169);
			match(SUBASSIGN);
			setState(170);
			value();
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
		enterRule(_localctx, 30, RULE_mul_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			identifier();
			setState(174);
			match(MULASSIGN);
			setState(175);
			value();
			setState(176);
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
		enterRule(_localctx, 32, RULE_div_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			identifier();
			setState(179);
			match(DIVASSIGN);
			setState(180);
			value();
			setState(181);
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
		enterRule(_localctx, 34, RULE_inc_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			identifier();
			setState(184);
			match(INCREMENT);
			setState(185);
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
		enterRule(_localctx, 36, RULE_dec_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			identifier();
			setState(188);
			match(DECREMENT);
			setState(189);
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
		enterRule(_localctx, 38, RULE_if_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(IF);
			setState(192);
			match(OPEN_BRACKET);
			setState(193);
			boolexpr();
			setState(194);
			match(CLOSE_BRACKET);
			setState(195);
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
		enterRule(_localctx, 40, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(WHILE);
			setState(198);
			match(OPEN_BRACKET);
			setState(199);
			boolexpr();
			setState(200);
			match(CLOSE_BRACKET);
			setState(201);
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
		enterRule(_localctx, 42, RULE_var_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(VAR);
			setState(204);
			identifier();
			setState(205);
			match(ASSIGN);
			setState(206);
			expression(0);
			setState(207);
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
		enterRule(_localctx, 44, RULE_return_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(RETURN);
			setState(210);
			expression(0);
			setState(211);
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
		int _startState = 46;
		enterRecursionRule(_localctx, 46, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(214);
				match(OPEN_BRACKET);
				setState(215);
				expression(0);
				setState(216);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(218);
				value();
				}
				break;
			case 3:
				{
				setState(219);
				boolexpr();
				}
				break;
			case 4:
				{
				setState(220);
				match(QUOTED_TEXT);
				}
				break;
			case 5:
				{
				setState(221);
				methodcall();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(238);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(236);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(224);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(225);
						match(ADD);
						setState(226);
						expression(9);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(227);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(228);
						match(SUB);
						setState(229);
						expression(8);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(230);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(231);
						match(MUL);
						setState(232);
						expression(7);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(233);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(234);
						match(DIV);
						setState(235);
						expression(6);
						}
						break;
					}
					} 
				}
				setState(240);
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
		enterRule(_localctx, 48, RULE_boolexpr);
		try {
			setState(276);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(241);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(242);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(243);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(244);
				value();
				setState(245);
				match(GREATER_THAN);
				setState(246);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(248);
				value();
				setState(249);
				match(LESS_THAN);
				setState(250);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(252);
				value();
				setState(253);
				match(EQUAL_TO);
				setState(254);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(256);
				value();
				setState(257);
				match(NOT_EQUAL_TO);
				setState(258);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(260);
				value();
				setState(261);
				match(GREATER_THAN_OR_EQUAL);
				setState(262);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(264);
				value();
				setState(265);
				match(LESS_THAN_OR_EQUAL);
				setState(266);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(268);
				value();
				setState(269);
				match(OR);
				setState(270);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(272);
				value();
				setState(273);
				match(AND);
				setState(274);
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
		enterRule(_localctx, 50, RULE_methodcall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			identifier();
			setState(279);
			match(OPEN_BRACKET);
			setState(280);
			methodparams();
			setState(281);
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
		enterRule(_localctx, 52, RULE_methodparams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPEN_BRACKET) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << NUMBER) | (1L << PI) | (1L << E) | (1L << I) | (1L << QUOTED_TEXT))) != 0)) {
				{
				{
				setState(283);
				expression(0);
				}
				}
				setState(288);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(289);
				match(T__2);
				setState(290);
				expression(0);
				}
				}
				setState(295);
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
		enterRule(_localctx, 54, RULE_value);
		try {
			setState(298);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(296);
				identifier();
				}
				break;
			case NUMBER:
			case PI:
			case E:
			case I:
				enterOuterAlt(_localctx, 2);
				{
				setState(297);
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
		enterRule(_localctx, 56, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
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
		enterRule(_localctx, 58, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
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
		case 23:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\62\u0133\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\3\2\3\2\7"+
		"\2A\n\2\f\2\16\2D\13\2\3\2\7\2G\n\2\f\2\16\2J\13\2\3\2\5\2M\n\2\3\3\7"+
		"\3P\n\3\f\3\16\3S\13\3\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\b\7\bg\n\b\f\b\16\bj\13\b\3\b\3\b\7\bn\n\b\f\b"+
		"\16\bq\13\b\3\t\3\t\7\tu\n\t\f\t\16\tx\13\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u008b\n\t\3\n\3\n\3\n\3"+
		"\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\16\6\16\u00a2\n\16\r\16\16\16\u00a3\3\17\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30"+
		"\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\5\31\u00e1\n\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\7\31\u00ef"+
		"\n\31\f\31\16\31\u00f2\13\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u0117"+
		"\n\32\3\33\3\33\3\33\3\33\3\33\3\34\7\34\u011f\n\34\f\34\16\34\u0122\13"+
		"\34\3\34\3\34\7\34\u0126\n\34\f\34\16\34\u0129\13\34\3\35\3\35\5\35\u012d"+
		"\n\35\3\36\3\36\3\37\3\37\3\37\3\u00a3\3\60 \2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,.\60\62\64\668:<\2\3\3\2+.\2\u013f\2L\3\2\2\2\4Q\3"+
		"\2\2\2\6T\3\2\2\2\bV\3\2\2\2\nZ\3\2\2\2\f^\3\2\2\2\16h\3\2\2\2\20\u008a"+
		"\3\2\2\2\22\u008c\3\2\2\2\24\u0091\3\2\2\2\26\u0096\3\2\2\2\30\u009a\3"+
		"\2\2\2\32\u00a1\3\2\2\2\34\u00a5\3\2\2\2\36\u00aa\3\2\2\2 \u00af\3\2\2"+
		"\2\"\u00b4\3\2\2\2$\u00b9\3\2\2\2&\u00bd\3\2\2\2(\u00c1\3\2\2\2*\u00c7"+
		"\3\2\2\2,\u00cd\3\2\2\2.\u00d3\3\2\2\2\60\u00e0\3\2\2\2\62\u0116\3\2\2"+
		"\2\64\u0118\3\2\2\2\66\u0120\3\2\2\28\u012c\3\2\2\2:\u012e\3\2\2\2<\u0130"+
		"\3\2\2\2>B\5\4\3\2?A\5\f\7\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C"+
		"H\3\2\2\2DB\3\2\2\2EG\5\20\t\2FE\3\2\2\2GJ\3\2\2\2HF\3\2\2\2HI\3\2\2\2"+
		"IM\3\2\2\2JH\3\2\2\2KM\7\2\2\3L>\3\2\2\2LK\3\2\2\2M\3\3\2\2\2NP\5\n\6"+
		"\2ON\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2R\5\3\2\2\2SQ\3\2\2\2TU\5\b"+
		"\5\2U\7\3\2\2\2VW\7\3\2\2WX\5:\36\2XY\7\16\2\2Y\t\3\2\2\2Z[\7\4\2\2[\\"+
		"\5:\36\2\\]\7\16\2\2]\13\3\2\2\2^_\7\"\2\2_`\5:\36\2`a\7\n\2\2ab\5\16"+
		"\b\2bc\7\13\2\2cd\5\20\t\2d\r\3\2\2\2eg\5:\36\2fe\3\2\2\2gj\3\2\2\2hf"+
		"\3\2\2\2hi\3\2\2\2io\3\2\2\2jh\3\2\2\2kl\7\5\2\2ln\5:\36\2mk\3\2\2\2n"+
		"q\3\2\2\2om\3\2\2\2op\3\2\2\2p\17\3\2\2\2qo\3\2\2\2rv\7\f\2\2su\5\20\t"+
		"\2ts\3\2\2\2ux\3\2\2\2vt\3\2\2\2vw\3\2\2\2wy\3\2\2\2xv\3\2\2\2y\u008b"+
		"\7\r\2\2z\u008b\5\22\n\2{\u008b\5\24\13\2|\u008b\5\34\17\2}\u008b\5\36"+
		"\20\2~\u008b\5 \21\2\177\u008b\5\"\22\2\u0080\u008b\5$\23\2\u0081\u008b"+
		"\5&\24\2\u0082\u008b\5(\25\2\u0083\u008b\5*\26\2\u0084\u008b\5,\27\2\u0085"+
		"\u008b\5.\30\2\u0086\u0087\5\60\31\2\u0087\u0088\7\16\2\2\u0088\u008b"+
		"\3\2\2\2\u0089\u008b\7\16\2\2\u008ar\3\2\2\2\u008az\3\2\2\2\u008a{\3\2"+
		"\2\2\u008a|\3\2\2\2\u008a}\3\2\2\2\u008a~\3\2\2\2\u008a\177\3\2\2\2\u008a"+
		"\u0080\3\2\2\2\u008a\u0081\3\2\2\2\u008a\u0082\3\2\2\2\u008a\u0083\3\2"+
		"\2\2\u008a\u0084\3\2\2\2\u008a\u0085\3\2\2\2\u008a\u0086\3\2\2\2\u008a"+
		"\u0089\3\2\2\2\u008b\21\3\2\2\2\u008c\u008d\5:\36\2\u008d\u008e\7\33\2"+
		"\2\u008e\u008f\5\60\31\2\u008f\u0090\7\16\2\2\u0090\23\3\2\2\2\u0091\u0092"+
		"\7\6\2\2\u0092\u0093\7\f\2\2\u0093\u0094\5\32\16\2\u0094\u0095\7\r\2\2"+
		"\u0095\25\3\2\2\2\u0096\u0097\7\7\2\2\u0097\u0098\5\32\16\2\u0098\u0099"+
		"\7\b\2\2\u0099\27\3\2\2\2\u009a\u009b\7\t\2\2\u009b\u009c\5\32\16\2\u009c"+
		"\u009d\7\b\2\2\u009d\u009e\5\32\16\2\u009e\u009f\7\b\2\2\u009f\31\3\2"+
		"\2\2\u00a0\u00a2\13\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a4\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\33\3\2\2\2\u00a5\u00a6\5:\36"+
		"\2\u00a6\u00a7\7\34\2\2\u00a7\u00a8\58\35\2\u00a8\u00a9\7\16\2\2\u00a9"+
		"\35\3\2\2\2\u00aa\u00ab\5:\36\2\u00ab\u00ac\7\35\2\2\u00ac\u00ad\58\35"+
		"\2\u00ad\u00ae\7\16\2\2\u00ae\37\3\2\2\2\u00af\u00b0\5:\36\2\u00b0\u00b1"+
		"\7\36\2\2\u00b1\u00b2\58\35\2\u00b2\u00b3\7\16\2\2\u00b3!\3\2\2\2\u00b4"+
		"\u00b5\5:\36\2\u00b5\u00b6\7\37\2\2\u00b6\u00b7\58\35\2\u00b7\u00b8\7"+
		"\16\2\2\u00b8#\3\2\2\2\u00b9\u00ba\5:\36\2\u00ba\u00bb\7 \2\2\u00bb\u00bc"+
		"\7\16\2\2\u00bc%\3\2\2\2\u00bd\u00be\5:\36\2\u00be\u00bf\7!\2\2\u00bf"+
		"\u00c0\7\16\2\2\u00c0\'\3\2\2\2\u00c1\u00c2\7%\2\2\u00c2\u00c3\7\n\2\2"+
		"\u00c3\u00c4\5\62\32\2\u00c4\u00c5\7\13\2\2\u00c5\u00c6\5\20\t\2\u00c6"+
		")\3\2\2\2\u00c7\u00c8\7&\2\2\u00c8\u00c9\7\n\2\2\u00c9\u00ca\5\62\32\2"+
		"\u00ca\u00cb\7\13\2\2\u00cb\u00cc\5\20\t\2\u00cc+\3\2\2\2\u00cd\u00ce"+
		"\7#\2\2\u00ce\u00cf\5:\36\2\u00cf\u00d0\7\33\2\2\u00d0\u00d1\5\60\31\2"+
		"\u00d1\u00d2\7\16\2\2\u00d2-\3\2\2\2\u00d3\u00d4\7\'\2\2\u00d4\u00d5\5"+
		"\60\31\2\u00d5\u00d6\7\16\2\2\u00d6/\3\2\2\2\u00d7\u00d8\b\31\1\2\u00d8"+
		"\u00d9\7\n\2\2\u00d9\u00da\5\60\31\2\u00da\u00db\7\13\2\2\u00db\u00e1"+
		"\3\2\2\2\u00dc\u00e1\58\35\2\u00dd\u00e1\5\62\32\2\u00de\u00e1\7/\2\2"+
		"\u00df\u00e1\5\64\33\2\u00e0\u00d7\3\2\2\2\u00e0\u00dc\3\2\2\2\u00e0\u00dd"+
		"\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0\u00df\3\2\2\2\u00e1\u00f0\3\2\2\2\u00e2"+
		"\u00e3\f\n\2\2\u00e3\u00e4\7\17\2\2\u00e4\u00ef\5\60\31\13\u00e5\u00e6"+
		"\f\t\2\2\u00e6\u00e7\7\20\2\2\u00e7\u00ef\5\60\31\n\u00e8\u00e9\f\b\2"+
		"\2\u00e9\u00ea\7\21\2\2\u00ea\u00ef\5\60\31\t\u00eb\u00ec\f\7\2\2\u00ec"+
		"\u00ed\7\22\2\2\u00ed\u00ef\5\60\31\b\u00ee\u00e2\3\2\2\2\u00ee\u00e5"+
		"\3\2\2\2\u00ee\u00e8\3\2\2\2\u00ee\u00eb\3\2\2\2\u00ef\u00f2\3\2\2\2\u00f0"+
		"\u00ee\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1\61\3\2\2\2\u00f2\u00f0\3\2\2"+
		"\2\u00f3\u0117\58\35\2\u00f4\u0117\7(\2\2\u00f5\u0117\7)\2\2\u00f6\u00f7"+
		"\58\35\2\u00f7\u00f8\7\23\2\2\u00f8\u00f9\5\62\32\2\u00f9\u0117\3\2\2"+
		"\2\u00fa\u00fb\58\35\2\u00fb\u00fc\7\24\2\2\u00fc\u00fd\5\62\32\2\u00fd"+
		"\u0117\3\2\2\2\u00fe\u00ff\58\35\2\u00ff\u0100\7\25\2\2\u0100\u0101\5"+
		"\62\32\2\u0101\u0117\3\2\2\2\u0102\u0103\58\35\2\u0103\u0104\7\26\2\2"+
		"\u0104\u0105\5\62\32\2\u0105\u0117\3\2\2\2\u0106\u0107\58\35\2\u0107\u0108"+
		"\7\27\2\2\u0108\u0109\5\62\32\2\u0109\u0117\3\2\2\2\u010a\u010b\58\35"+
		"\2\u010b\u010c\7\30\2\2\u010c\u010d\5\62\32\2\u010d\u0117\3\2\2\2\u010e"+
		"\u010f\58\35\2\u010f\u0110\7\31\2\2\u0110\u0111\5\62\32\2\u0111\u0117"+
		"\3\2\2\2\u0112\u0113\58\35\2\u0113\u0114\7\32\2\2\u0114\u0115\5\62\32"+
		"\2\u0115\u0117\3\2\2\2\u0116\u00f3\3\2\2\2\u0116\u00f4\3\2\2\2\u0116\u00f5"+
		"\3\2\2\2\u0116\u00f6\3\2\2\2\u0116\u00fa\3\2\2\2\u0116\u00fe\3\2\2\2\u0116"+
		"\u0102\3\2\2\2\u0116\u0106\3\2\2\2\u0116\u010a\3\2\2\2\u0116\u010e\3\2"+
		"\2\2\u0116\u0112\3\2\2\2\u0117\63\3\2\2\2\u0118\u0119\5:\36\2\u0119\u011a"+
		"\7\n\2\2\u011a\u011b\5\66\34\2\u011b\u011c\7\13\2\2\u011c\65\3\2\2\2\u011d"+
		"\u011f\5\60\31\2\u011e\u011d\3\2\2\2\u011f\u0122\3\2\2\2\u0120\u011e\3"+
		"\2\2\2\u0120\u0121\3\2\2\2\u0121\u0127\3\2\2\2\u0122\u0120\3\2\2\2\u0123"+
		"\u0124\7\5\2\2\u0124\u0126\5\60\31\2\u0125\u0123\3\2\2\2\u0126\u0129\3"+
		"\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2\2\2\u0128\67\3\2\2\2\u0129"+
		"\u0127\3\2\2\2\u012a\u012d\5:\36\2\u012b\u012d\5<\37\2\u012c\u012a\3\2"+
		"\2\2\u012c\u012b\3\2\2\2\u012d9\3\2\2\2\u012e\u012f\7*\2\2\u012f;\3\2"+
		"\2\2\u0130\u0131\t\2\2\2\u0131=\3\2\2\2\22BHLQhov\u008a\u00a3\u00e0\u00ee"+
		"\u00f0\u0116\u0120\u0127\u012c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}