// Generated from /home/pdarksystem/ICEScript/antlr/grammars/ICEScript by ANTLR 4.9.2
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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, OPEN_BRACKET=12, CLOSE_BRACKET=13, OPEN_CURLEY=14, 
		CLOSE_CURLEY=15, END_STMT=16, ADD=17, SUB=18, MUL=19, DIV=20, GREATER_THAN=21, 
		LESS_THAN=22, EQUAL_TO=23, NOT_EQUAL_TO=24, GREATER_THAN_OR_EQUAL=25, 
		LESS_THAN_OR_EQUAL=26, OR=27, AND=28, NOT=29, ASSIGN=30, ADDASSIGN=31, 
		SUBASSIGN=32, MULASSIGN=33, DIVASSIGN=34, IF=35, ELSE=36, INCREMENT=37, 
		DECREMENT=38, DEF=39, VAR=40, WHILE=41, RETURN=42, TRUE=43, FALSE=44, 
		IDENTIFIER=45, PI=46, E=47, I=48, STRING=49, LIST=50, NUMBER=51, LINECOMMENT=52, 
		BLOCKCOMMENT=53, WHITESPACE=54;
	public static final int
		RULE_script = 0, RULE_header = 1, RULE_meta = 2, RULE_scriptName = 3, 
		RULE_include = 4, RULE_function = 5, RULE_func_params = 6, RULE_func_identifier = 7, 
		RULE_statement = 8, RULE_assign_stmt = 9, RULE_ti_basic_stmt = 10, RULE_any = 11, 
		RULE_add_assign_stmt = 12, RULE_sub_assign_stmt = 13, RULE_mul_assign_stmt = 14, 
		RULE_div_assign_stmt = 15, RULE_inc_stmt = 16, RULE_dec_stmt = 17, RULE_if_stmt = 18, 
		RULE_if_else_stmt = 19, RULE_while_stmt = 20, RULE_var_stmt = 21, RULE_return_stmt = 22, 
		RULE_expression = 23, RULE_boolexpr = 24, RULE_methodcall = 25, RULE_methodparams = 26, 
		RULE_value = 27, RULE_identifier = 28, RULE_number = 29, RULE_type = 30;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "header", "meta", "scriptName", "include", "function", "func_params", 
			"func_identifier", "statement", "assign_stmt", "ti_basic_stmt", "any", 
			"add_assign_stmt", "sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", 
			"inc_stmt", "dec_stmt", "if_stmt", "if_else_stmt", "while_stmt", "var_stmt", 
			"return_stmt", "expression", "boolexpr", "methodcall", "methodparams", 
			"value", "identifier", "number", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import'", "'function '", "':'", "','", "'__ICE'", 
			"'void'", "'list'", "'str'", "'int'", "'float'", "'('", "')'", "'{'", 
			"'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", 
			"'>='", "'<='", "'||'", "'&&'", "'!'", "'='", "'+='", "'-='", "'*='", 
			"'/='", "'if'", "'else'", "'++'", "'--'", "'function'", "'var'", "'while'", 
			"'return'", "'true'", "'false'", null, "'pi'", "'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", 
			"ADD", "SUB", "MUL", "DIV", "GREATER_THAN", "LESS_THAN", "EQUAL_TO", 
			"NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", "OR", 
			"AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
			"IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", "RETURN", 
			"TRUE", "FALSE", "IDENTIFIER", "PI", "E", "I", "STRING", "LIST", "NUMBER", 
			"LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				header();
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(63);
					function();
					}
					}
					setState(68);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << E) | (1L << I) | (1L << STRING) | (1L << LIST) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(69);
					statement();
					}
					}
					setState(74);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
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
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(78);
				include();
				}
				}
				setState(83);
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
			setState(84);
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
			setState(86);
			match(T__0);
			setState(87);
			identifier();
			setState(88);
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
			setState(90);
			match(T__1);
			setState(91);
			identifier();
			setState(92);
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
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public Func_paramsContext func_params() {
			return getRuleContext(Func_paramsContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
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
			setState(94);
			match(T__2);
			setState(95);
			identifier();
			setState(96);
			match(OPEN_BRACKET);
			setState(97);
			func_params();
			setState(98);
			match(CLOSE_BRACKET);
			setState(99);
			match(T__3);
			setState(100);
			type();
			setState(101);
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
		public List<Func_identifierContext> func_identifier() {
			return getRuleContexts(Func_identifierContext.class);
		}
		public Func_identifierContext func_identifier(int i) {
			return getRuleContext(Func_identifierContext.class,i);
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
			setState(113);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				func_identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(105);
				func_identifier();
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__4) {
					{
					{
					setState(106);
					match(T__4);
					setState(107);
					func_identifier();
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
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

	public static class Func_identifierContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AnyContext any() {
			return getRuleContext(AnyContext.class,0);
		}
		public Func_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_identifier; }
	}

	public final Func_identifierContext func_identifier() throws RecognitionException {
		Func_identifierContext _localctx = new Func_identifierContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_func_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(115);
				identifier();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(117);
				expression(0);
				}
				break;
			case 4:
				{
				}
				break;
			case 5:
				{
				setState(119);
				any();
				}
				break;
			}
			setState(122);
			match(T__3);
			setState(123);
			type();
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
		public If_else_stmtContext if_else_stmt() {
			return getRuleContext(If_else_stmtContext.class,0);
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
		enterRule(_localctx, 16, RULE_statement);
		int _la;
		try {
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				match(OPEN_CURLEY);
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__5) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << E) | (1L << I) | (1L << STRING) | (1L << LIST) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(126);
					statement();
					}
					}
					setState(131);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(132);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(134);
				ti_basic_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(135);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(136);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(137);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(138);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(139);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(140);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(141);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(142);
				if_else_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(143);
				while_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(144);
				var_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(145);
				return_stmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(146);
				expression(0);
				setState(147);
				match(END_STMT);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(149);
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
		enterRule(_localctx, 18, RULE_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			identifier();
			setState(153);
			match(ASSIGN);
			setState(154);
			expression(0);
			setState(155);
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
		enterRule(_localctx, 20, RULE_ti_basic_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(T__5);
			setState(158);
			match(OPEN_CURLEY);
			setState(159);
			any();
			setState(160);
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
		enterRule(_localctx, 22, RULE_any);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(163); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(162);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(165); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		enterRule(_localctx, 24, RULE_add_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			identifier();
			setState(168);
			match(ADDASSIGN);
			setState(169);
			value();
			setState(170);
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
		enterRule(_localctx, 26, RULE_sub_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			identifier();
			setState(173);
			match(SUBASSIGN);
			setState(174);
			value();
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
		enterRule(_localctx, 28, RULE_mul_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			identifier();
			setState(178);
			match(MULASSIGN);
			setState(179);
			value();
			setState(180);
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
		enterRule(_localctx, 30, RULE_div_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			identifier();
			setState(183);
			match(DIVASSIGN);
			setState(184);
			value();
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
		enterRule(_localctx, 32, RULE_inc_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			identifier();
			setState(188);
			match(INCREMENT);
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
		enterRule(_localctx, 34, RULE_dec_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			identifier();
			setState(192);
			match(DECREMENT);
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
		enterRule(_localctx, 36, RULE_if_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(IF);
			setState(196);
			match(OPEN_BRACKET);
			setState(197);
			boolexpr();
			setState(198);
			match(CLOSE_BRACKET);
			setState(199);
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

	public static class If_else_stmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(ICEScriptParser.IF, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(ICEScriptParser.ELSE, 0); }
		public If_else_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_else_stmt; }
	}

	public final If_else_stmtContext if_else_stmt() throws RecognitionException {
		If_else_stmtContext _localctx = new If_else_stmtContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_if_else_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(IF);
			setState(202);
			match(OPEN_BRACKET);
			setState(203);
			boolexpr();
			setState(204);
			match(CLOSE_BRACKET);
			setState(205);
			statement();
			setState(206);
			match(ELSE);
			setState(207);
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
			setState(209);
			match(WHILE);
			setState(210);
			match(OPEN_BRACKET);
			setState(211);
			boolexpr();
			setState(212);
			match(CLOSE_BRACKET);
			setState(213);
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
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public Var_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_stmt; }
	}

	public final Var_stmtContext var_stmt() throws RecognitionException {
		Var_stmtContext _localctx = new Var_stmtContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_var_stmt);
		try {
			setState(229);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(215);
				match(VAR);
				setState(216);
				identifier();
				setState(217);
				match(ASSIGN);
				setState(218);
				expression(0);
				setState(219);
				match(END_STMT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(221);
				match(VAR);
				setState(222);
				identifier();
				setState(223);
				match(T__3);
				setState(224);
				type();
				setState(225);
				match(ASSIGN);
				setState(226);
				expression(0);
				setState(227);
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
			setState(231);
			match(RETURN);
			setState(232);
			expression(0);
			setState(233);
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
		public TerminalNode STRING() { return getToken(ICEScriptParser.STRING, 0); }
		public MethodcallContext methodcall() {
			return getRuleContext(MethodcallContext.class,0);
		}
		public TerminalNode LIST() { return getToken(ICEScriptParser.LIST, 0); }
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
			setState(245);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(236);
				match(OPEN_BRACKET);
				setState(237);
				expression(0);
				setState(238);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(240);
				value();
				}
				break;
			case 3:
				{
				setState(241);
				boolexpr();
				}
				break;
			case 4:
				{
				setState(242);
				match(STRING);
				}
				break;
			case 5:
				{
				setState(243);
				methodcall();
				}
				break;
			case 6:
				{
				setState(244);
				match(LIST);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(261);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(259);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(247);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(248);
						match(ADD);
						setState(249);
						expression(10);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(250);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(251);
						match(SUB);
						setState(252);
						expression(9);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(253);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(254);
						match(MUL);
						setState(255);
						expression(8);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(256);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(257);
						match(DIV);
						setState(258);
						expression(7);
						}
						break;
					}
					} 
				}
				setState(263);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		public TerminalNode NOT() { return getToken(ICEScriptParser.NOT, 0); }
		public BoolexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolexpr; }
	}

	public final BoolexprContext boolexpr() throws RecognitionException {
		BoolexprContext _localctx = new BoolexprContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_boolexpr);
		try {
			setState(301);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(264);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(265);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(266);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(267);
				value();
				setState(268);
				match(GREATER_THAN);
				setState(269);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(271);
				value();
				setState(272);
				match(LESS_THAN);
				setState(273);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(275);
				value();
				setState(276);
				match(EQUAL_TO);
				setState(277);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(279);
				value();
				setState(280);
				match(NOT_EQUAL_TO);
				setState(281);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(283);
				value();
				setState(284);
				match(GREATER_THAN_OR_EQUAL);
				setState(285);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(287);
				value();
				setState(288);
				match(LESS_THAN_OR_EQUAL);
				setState(289);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(291);
				value();
				setState(292);
				match(OR);
				setState(293);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(295);
				value();
				setState(296);
				match(AND);
				setState(297);
				boolexpr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(299);
				match(NOT);
				setState(300);
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
			setState(303);
			identifier();
			setState(304);
			match(OPEN_BRACKET);
			setState(305);
			methodparams();
			setState(306);
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
			setState(311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPEN_BRACKET) | (1L << NOT) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << E) | (1L << I) | (1L << STRING) | (1L << LIST) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(308);
				expression(0);
				}
				}
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(318);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(314);
				match(T__4);
				setState(315);
				expression(0);
				}
				}
				setState(320);
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
			setState(323);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(321);
				identifier();
				}
				break;
			case PI:
			case E:
			case I:
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
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
			setState(325);
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
			setState(327);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PI) | (1L << E) | (1L << I) | (1L << NUMBER))) != 0)) ) {
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

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_type);
		try {
			setState(335);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
			case T__5:
			case OPEN_BRACKET:
			case CLOSE_BRACKET:
			case OPEN_CURLEY:
			case END_STMT:
			case NOT:
			case ASSIGN:
			case IF:
			case VAR:
			case WHILE:
			case RETURN:
			case TRUE:
			case FALSE:
			case IDENTIFIER:
			case PI:
			case E:
			case I:
			case STRING:
			case LIST:
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(330);
				match(T__6);
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 3);
				{
				setState(331);
				match(T__7);
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 4);
				{
				setState(332);
				match(T__8);
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 5);
				{
				setState(333);
				match(T__9);
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 6);
				{
				setState(334);
				match(T__10);
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
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\38\u0154\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \3\2"+
		"\3\2\7\2C\n\2\f\2\16\2F\13\2\3\2\7\2I\n\2\f\2\16\2L\13\2\3\2\5\2O\n\2"+
		"\3\3\7\3R\n\3\f\3\16\3U\13\3\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\7\bo\n\b\f\b\16"+
		"\br\13\b\5\bt\n\b\3\t\3\t\3\t\3\t\3\t\5\t{\n\t\3\t\3\t\3\t\3\n\3\n\7\n"+
		"\u0082\n\n\f\n\16\n\u0085\13\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0099\n\n\3\13\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\3\f\3\f\3\r\6\r\u00a6\n\r\r\r\16\r\u00a7\3\16\3\16\3\16\3"+
		"\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3"+
		"\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3"+
		"\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3"+
		"\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\5\27\u00e8\n\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\5\31\u00f8\n\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\7\31\u0106\n\31\f\31\16\31\u0109\13"+
		"\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\5\32\u0130\n\32\3\33"+
		"\3\33\3\33\3\33\3\33\3\34\7\34\u0138\n\34\f\34\16\34\u013b\13\34\3\34"+
		"\3\34\7\34\u013f\n\34\f\34\16\34\u0142\13\34\3\35\3\35\5\35\u0146\n\35"+
		"\3\36\3\36\3\37\3\37\3 \3 \3 \3 \3 \3 \5 \u0152\n \3 \3\u00a7\3\60!\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>\2\3\4\2"+
		"\60\62\65\65\2\u016d\2N\3\2\2\2\4S\3\2\2\2\6V\3\2\2\2\bX\3\2\2\2\n\\\3"+
		"\2\2\2\f`\3\2\2\2\16s\3\2\2\2\20z\3\2\2\2\22\u0098\3\2\2\2\24\u009a\3"+
		"\2\2\2\26\u009f\3\2\2\2\30\u00a5\3\2\2\2\32\u00a9\3\2\2\2\34\u00ae\3\2"+
		"\2\2\36\u00b3\3\2\2\2 \u00b8\3\2\2\2\"\u00bd\3\2\2\2$\u00c1\3\2\2\2&\u00c5"+
		"\3\2\2\2(\u00cb\3\2\2\2*\u00d3\3\2\2\2,\u00e7\3\2\2\2.\u00e9\3\2\2\2\60"+
		"\u00f7\3\2\2\2\62\u012f\3\2\2\2\64\u0131\3\2\2\2\66\u0139\3\2\2\28\u0145"+
		"\3\2\2\2:\u0147\3\2\2\2<\u0149\3\2\2\2>\u0151\3\2\2\2@D\5\4\3\2AC\5\f"+
		"\7\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2EJ\3\2\2\2FD\3\2\2\2GI\5\22"+
		"\n\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2KO\3\2\2\2LJ\3\2\2\2MO\7\2"+
		"\2\3N@\3\2\2\2NM\3\2\2\2O\3\3\2\2\2PR\5\n\6\2QP\3\2\2\2RU\3\2\2\2SQ\3"+
		"\2\2\2ST\3\2\2\2T\5\3\2\2\2US\3\2\2\2VW\5\b\5\2W\7\3\2\2\2XY\7\3\2\2Y"+
		"Z\5:\36\2Z[\7\22\2\2[\t\3\2\2\2\\]\7\4\2\2]^\5:\36\2^_\7\22\2\2_\13\3"+
		"\2\2\2`a\7\5\2\2ab\5:\36\2bc\7\16\2\2cd\5\16\b\2de\7\17\2\2ef\7\6\2\2"+
		"fg\5> \2gh\5\22\n\2h\r\3\2\2\2it\5\20\t\2jt\3\2\2\2kp\5\20\t\2lm\7\7\2"+
		"\2mo\5\20\t\2nl\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2qt\3\2\2\2rp\3\2"+
		"\2\2si\3\2\2\2sj\3\2\2\2sk\3\2\2\2t\17\3\2\2\2u{\5:\36\2v{\3\2\2\2w{\5"+
		"\60\31\2x{\3\2\2\2y{\5\30\r\2zu\3\2\2\2zv\3\2\2\2zw\3\2\2\2zx\3\2\2\2"+
		"zy\3\2\2\2{|\3\2\2\2|}\7\6\2\2}~\5> \2~\21\3\2\2\2\177\u0083\7\20\2\2"+
		"\u0080\u0082\5\22\n\2\u0081\u0080\3\2\2\2\u0082\u0085\3\2\2\2\u0083\u0081"+
		"\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0086\3\2\2\2\u0085\u0083\3\2\2\2\u0086"+
		"\u0099\7\21\2\2\u0087\u0099\5\24\13\2\u0088\u0099\5\26\f\2\u0089\u0099"+
		"\5\32\16\2\u008a\u0099\5\34\17\2\u008b\u0099\5\36\20\2\u008c\u0099\5 "+
		"\21\2\u008d\u0099\5\"\22\2\u008e\u0099\5$\23\2\u008f\u0099\5&\24\2\u0090"+
		"\u0099\5(\25\2\u0091\u0099\5*\26\2\u0092\u0099\5,\27\2\u0093\u0099\5."+
		"\30\2\u0094\u0095\5\60\31\2\u0095\u0096\7\22\2\2\u0096\u0099\3\2\2\2\u0097"+
		"\u0099\7\22\2\2\u0098\177\3\2\2\2\u0098\u0087\3\2\2\2\u0098\u0088\3\2"+
		"\2\2\u0098\u0089\3\2\2\2\u0098\u008a\3\2\2\2\u0098\u008b\3\2\2\2\u0098"+
		"\u008c\3\2\2\2\u0098\u008d\3\2\2\2\u0098\u008e\3\2\2\2\u0098\u008f\3\2"+
		"\2\2\u0098\u0090\3\2\2\2\u0098\u0091\3\2\2\2\u0098\u0092\3\2\2\2\u0098"+
		"\u0093\3\2\2\2\u0098\u0094\3\2\2\2\u0098\u0097\3\2\2\2\u0099\23\3\2\2"+
		"\2\u009a\u009b\5:\36\2\u009b\u009c\7 \2\2\u009c\u009d\5\60\31\2\u009d"+
		"\u009e\7\22\2\2\u009e\25\3\2\2\2\u009f\u00a0\7\b\2\2\u00a0\u00a1\7\20"+
		"\2\2\u00a1\u00a2\5\30\r\2\u00a2\u00a3\7\21\2\2\u00a3\27\3\2\2\2\u00a4"+
		"\u00a6\13\2\2\2\u00a5\u00a4\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\3"+
		"\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\31\3\2\2\2\u00a9\u00aa\5:\36\2\u00aa"+
		"\u00ab\7!\2\2\u00ab\u00ac\58\35\2\u00ac\u00ad\7\22\2\2\u00ad\33\3\2\2"+
		"\2\u00ae\u00af\5:\36\2\u00af\u00b0\7\"\2\2\u00b0\u00b1\58\35\2\u00b1\u00b2"+
		"\7\22\2\2\u00b2\35\3\2\2\2\u00b3\u00b4\5:\36\2\u00b4\u00b5\7#\2\2\u00b5"+
		"\u00b6\58\35\2\u00b6\u00b7\7\22\2\2\u00b7\37\3\2\2\2\u00b8\u00b9\5:\36"+
		"\2\u00b9\u00ba\7$\2\2\u00ba\u00bb\58\35\2\u00bb\u00bc\7\22\2\2\u00bc!"+
		"\3\2\2\2\u00bd\u00be\5:\36\2\u00be\u00bf\7\'\2\2\u00bf\u00c0\7\22\2\2"+
		"\u00c0#\3\2\2\2\u00c1\u00c2\5:\36\2\u00c2\u00c3\7(\2\2\u00c3\u00c4\7\22"+
		"\2\2\u00c4%\3\2\2\2\u00c5\u00c6\7%\2\2\u00c6\u00c7\7\16\2\2\u00c7\u00c8"+
		"\5\62\32\2\u00c8\u00c9\7\17\2\2\u00c9\u00ca\5\22\n\2\u00ca\'\3\2\2\2\u00cb"+
		"\u00cc\7%\2\2\u00cc\u00cd\7\16\2\2\u00cd\u00ce\5\62\32\2\u00ce\u00cf\7"+
		"\17\2\2\u00cf\u00d0\5\22\n\2\u00d0\u00d1\7&\2\2\u00d1\u00d2\5\22\n\2\u00d2"+
		")\3\2\2\2\u00d3\u00d4\7+\2\2\u00d4\u00d5\7\16\2\2\u00d5\u00d6\5\62\32"+
		"\2\u00d6\u00d7\7\17\2\2\u00d7\u00d8\5\22\n\2\u00d8+\3\2\2\2\u00d9\u00da"+
		"\7*\2\2\u00da\u00db\5:\36\2\u00db\u00dc\7 \2\2\u00dc\u00dd\5\60\31\2\u00dd"+
		"\u00de\7\22\2\2\u00de\u00e8\3\2\2\2\u00df\u00e0\7*\2\2\u00e0\u00e1\5:"+
		"\36\2\u00e1\u00e2\7\6\2\2\u00e2\u00e3\5> \2\u00e3\u00e4\7 \2\2\u00e4\u00e5"+
		"\5\60\31\2\u00e5\u00e6\7\22\2\2\u00e6\u00e8\3\2\2\2\u00e7\u00d9\3\2\2"+
		"\2\u00e7\u00df\3\2\2\2\u00e8-\3\2\2\2\u00e9\u00ea\7,\2\2\u00ea\u00eb\5"+
		"\60\31\2\u00eb\u00ec\7\22\2\2\u00ec/\3\2\2\2\u00ed\u00ee\b\31\1\2\u00ee"+
		"\u00ef\7\16\2\2\u00ef\u00f0\5\60\31\2\u00f0\u00f1\7\17\2\2\u00f1\u00f8"+
		"\3\2\2\2\u00f2\u00f8\58\35\2\u00f3\u00f8\5\62\32\2\u00f4\u00f8\7\63\2"+
		"\2\u00f5\u00f8\5\64\33\2\u00f6\u00f8\7\64\2\2\u00f7\u00ed\3\2\2\2\u00f7"+
		"\u00f2\3\2\2\2\u00f7\u00f3\3\2\2\2\u00f7\u00f4\3\2\2\2\u00f7\u00f5\3\2"+
		"\2\2\u00f7\u00f6\3\2\2\2\u00f8\u0107\3\2\2\2\u00f9\u00fa\f\13\2\2\u00fa"+
		"\u00fb\7\23\2\2\u00fb\u0106\5\60\31\f\u00fc\u00fd\f\n\2\2\u00fd\u00fe"+
		"\7\24\2\2\u00fe\u0106\5\60\31\13\u00ff\u0100\f\t\2\2\u0100\u0101\7\25"+
		"\2\2\u0101\u0106\5\60\31\n\u0102\u0103\f\b\2\2\u0103\u0104\7\26\2\2\u0104"+
		"\u0106\5\60\31\t\u0105\u00f9\3\2\2\2\u0105\u00fc\3\2\2\2\u0105\u00ff\3"+
		"\2\2\2\u0105\u0102\3\2\2\2\u0106\u0109\3\2\2\2\u0107\u0105\3\2\2\2\u0107"+
		"\u0108\3\2\2\2\u0108\61\3\2\2\2\u0109\u0107\3\2\2\2\u010a\u0130\58\35"+
		"\2\u010b\u0130\7-\2\2\u010c\u0130\7.\2\2\u010d\u010e\58\35\2\u010e\u010f"+
		"\7\27\2\2\u010f\u0110\5\62\32\2\u0110\u0130\3\2\2\2\u0111\u0112\58\35"+
		"\2\u0112\u0113\7\30\2\2\u0113\u0114\5\62\32\2\u0114\u0130\3\2\2\2\u0115"+
		"\u0116\58\35\2\u0116\u0117\7\31\2\2\u0117\u0118\5\62\32\2\u0118\u0130"+
		"\3\2\2\2\u0119\u011a\58\35\2\u011a\u011b\7\32\2\2\u011b\u011c\5\62\32"+
		"\2\u011c\u0130\3\2\2\2\u011d\u011e\58\35\2\u011e\u011f\7\33\2\2\u011f"+
		"\u0120\5\62\32\2\u0120\u0130\3\2\2\2\u0121\u0122\58\35\2\u0122\u0123\7"+
		"\34\2\2\u0123\u0124\5\62\32\2\u0124\u0130\3\2\2\2\u0125\u0126\58\35\2"+
		"\u0126\u0127\7\35\2\2\u0127\u0128\5\62\32\2\u0128\u0130\3\2\2\2\u0129"+
		"\u012a\58\35\2\u012a\u012b\7\36\2\2\u012b\u012c\5\62\32\2\u012c\u0130"+
		"\3\2\2\2\u012d\u012e\7\37\2\2\u012e\u0130\5\62\32\2\u012f\u010a\3\2\2"+
		"\2\u012f\u010b\3\2\2\2\u012f\u010c\3\2\2\2\u012f\u010d\3\2\2\2\u012f\u0111"+
		"\3\2\2\2\u012f\u0115\3\2\2\2\u012f\u0119\3\2\2\2\u012f\u011d\3\2\2\2\u012f"+
		"\u0121\3\2\2\2\u012f\u0125\3\2\2\2\u012f\u0129\3\2\2\2\u012f\u012d\3\2"+
		"\2\2\u0130\63\3\2\2\2\u0131\u0132\5:\36\2\u0132\u0133\7\16\2\2\u0133\u0134"+
		"\5\66\34\2\u0134\u0135\7\17\2\2\u0135\65\3\2\2\2\u0136\u0138\5\60\31\2"+
		"\u0137\u0136\3\2\2\2\u0138\u013b\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u013a"+
		"\3\2\2\2\u013a\u0140\3\2\2\2\u013b\u0139\3\2\2\2\u013c\u013d\7\7\2\2\u013d"+
		"\u013f\5\60\31\2\u013e\u013c\3\2\2\2\u013f\u0142\3\2\2\2\u0140\u013e\3"+
		"\2\2\2\u0140\u0141\3\2\2\2\u0141\67\3\2\2\2\u0142\u0140\3\2\2\2\u0143"+
		"\u0146\5:\36\2\u0144\u0146\5<\37\2\u0145\u0143\3\2\2\2\u0145\u0144\3\2"+
		"\2\2\u01469\3\2\2\2\u0147\u0148\7/\2\2\u0148;\3\2\2\2\u0149\u014a\t\2"+
		"\2\2\u014a=\3\2\2\2\u014b\u0152\3\2\2\2\u014c\u0152\7\t\2\2\u014d\u0152"+
		"\7\n\2\2\u014e\u0152\7\13\2\2\u014f\u0152\7\f\2\2\u0150\u0152\7\r\2\2"+
		"\u0151\u014b\3\2\2\2\u0151\u014c\3\2\2\2\u0151\u014d\3\2\2\2\u0151\u014e"+
		"\3\2\2\2\u0151\u014f\3\2\2\2\u0151\u0150\3\2\2\2\u0152?\3\2\2\2\25DJN"+
		"Spsz\u0083\u0098\u00a7\u00e7\u00f7\u0105\u0107\u012f\u0139\u0140\u0145"+
		"\u0151";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}