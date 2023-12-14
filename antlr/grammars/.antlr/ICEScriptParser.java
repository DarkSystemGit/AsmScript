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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, OPEN_BRACKET=19, CLOSE_BRACKET=20, OPEN_CURLEY=21, CLOSE_CURLEY=22, 
		END_STMT=23, ADD=24, SUB=25, MUL=26, DIV=27, GREATER_THAN=28, LESS_THAN=29, 
		EQUAL_TO=30, NOT_EQUAL_TO=31, GREATER_THAN_OR_EQUAL=32, LESS_THAN_OR_EQUAL=33, 
		OR=34, AND=35, NOT=36, ASSIGN=37, ADDASSIGN=38, SUBASSIGN=39, MULASSIGN=40, 
		DIVASSIGN=41, IF=42, ELSE=43, INCREMENT=44, DECREMENT=45, DEF=46, VAR=47, 
		WHILE=48, FOR=49, RETURN=50, TRUE=51, FALSE=52, IDENTIFIER=53, PI=54, 
		STRING=55, LIST=56, NUMBER=57, LINECOMMENT=58, BLOCKCOMMENT=59, WHITESPACE=60;
	public static final int
		RULE_script = 0, RULE_header = 1, RULE_meta = 2, RULE_scriptName = 3, 
		RULE_include = 4, RULE_functionDef = 5, RULE_func_params = 6, RULE_func_identifier = 7, 
		RULE_classDef = 8, RULE_classBody = 9, RULE_classInit = 10, RULE_methodcall = 11, 
		RULE_methodparams = 12, RULE_statement = 13, RULE_assign_stmt = 14, RULE_asm_stmt = 15, 
		RULE_any = 16, RULE_add_assign_stmt = 17, RULE_sub_assign_stmt = 18, RULE_mul_assign_stmt = 19, 
		RULE_div_assign_stmt = 20, RULE_inc_stmt = 21, RULE_dec_stmt = 22, RULE_if_stmt = 23, 
		RULE_if_else_stmt = 24, RULE_while_stmt = 25, RULE_for_stmt = 26, RULE_var_stmt = 27, 
		RULE_return_stmt = 28, RULE_expression = 29, RULE_math = 30, RULE_boolexpr = 31, 
		RULE_value = 32, RULE_identifier = 33, RULE_number = 34, RULE_list = 35, 
		RULE_object = 36, RULE_string = 37, RULE_string_concat = 38, RULE_data = 39, 
		RULE_type = 40;
	private static String[] makeRuleNames() {
		return new String[] {
			"script", "header", "meta", "scriptName", "include", "functionDef", "func_params", 
			"func_identifier", "classDef", "classBody", "classInit", "methodcall", 
			"methodparams", "statement", "assign_stmt", "asm_stmt", "any", "add_assign_stmt", 
			"sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", "inc_stmt", 
			"dec_stmt", "if_stmt", "if_else_stmt", "while_stmt", "for_stmt", "var_stmt", 
			"return_stmt", "expression", "math", "boolexpr", "value", "identifier", 
			"number", "list", "object", "string", "string_concat", "data", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import'", "':'", "','", "'class'", "'extends'", "'new'", 
			"'__LLVM'", "'in'", "'['", "']'", "'object'", "'void'", "'list'", "'str'", 
			"'number'", "'bool'", "'[]'", "'('", "')'", "'{'", "'}'", "';'", "'+'", 
			"'-'", "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", "'>='", "'<='", "'||'", 
			"'&&'", "'!'", "'='", "'+='", "'-='", "'*='", "'/='", "'if'", "'else'", 
			"'++'", "'--'", "'function'", "'var'", "'while'", "'for'", "'return'", 
			"'true'", "'false'", null, "'$pi'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
			"OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", 
			"GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
			"LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", 
			"MULASSIGN", "DIVASSIGN", "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", 
			"VAR", "WHILE", "FOR", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", 
			"STRING", "LIST", "NUMBER", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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
		public List<FunctionDefContext> functionDef() {
			return getRuleContexts(FunctionDefContext.class);
		}
		public FunctionDefContext functionDef(int i) {
			return getRuleContext(FunctionDefContext.class,i);
		}
		public List<ClassDefContext> classDef() {
			return getRuleContexts(ClassDefContext.class);
		}
		public ClassDefContext classDef(int i) {
			return getRuleContext(ClassDefContext.class,i);
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
			setState(103);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				header();
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DEF || _la==IDENTIFIER) {
					{
					{
					setState(83);
					functionDef();
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
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
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__4) {
					{
					{
					setState(90);
					classDef();
					}
					}
					setState(95);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(99);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << ADD) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << FOR) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(96);
					statement();
					}
					}
					setState(101);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(102);
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
			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(105);
				include();
				}
				}
				setState(110);
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
			setState(111);
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
			setState(113);
			match(T__0);
			setState(114);
			identifier();
			setState(115);
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
			setState(117);
			match(T__1);
			setState(118);
			identifier();
			setState(119);
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

	public static class FunctionDefContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(ICEScriptParser.DEF, 0); }
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
		public FunctionDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDef; }
	}

	public final FunctionDefContext functionDef() throws RecognitionException {
		FunctionDefContext _localctx = new FunctionDefContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionDef);
		try {
			setState(138);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(DEF);
				setState(122);
				identifier();
				setState(123);
				match(OPEN_BRACKET);
				setState(124);
				func_params();
				setState(125);
				match(CLOSE_BRACKET);
				setState(126);
				match(T__2);
				setState(127);
				type(0);
				setState(128);
				statement();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				identifier();
				setState(131);
				match(OPEN_BRACKET);
				setState(132);
				func_params();
				setState(133);
				match(CLOSE_BRACKET);
				setState(134);
				match(T__2);
				setState(135);
				type(0);
				setState(136);
				statement();
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
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(140);
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
				setState(142);
				func_identifier();
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(143);
					match(T__3);
					setState(144);
					func_identifier();
					}
					}
					setState(149);
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
			setState(157);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(152);
				identifier();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(154);
				expression(0);
				}
				break;
			case 4:
				{
				}
				break;
			case 5:
				{
				setState(156);
				any();
				}
				break;
			}
			setState(159);
			match(T__2);
			setState(160);
			type(0);
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

	public static class ClassDefContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode OPEN_CURLEY() { return getToken(ICEScriptParser.OPEN_CURLEY, 0); }
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode CLOSE_CURLEY() { return getToken(ICEScriptParser.CLOSE_CURLEY, 0); }
		public ClassDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDef; }
	}

	public final ClassDefContext classDef() throws RecognitionException {
		ClassDefContext _localctx = new ClassDefContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_classDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(T__4);
			setState(163);
			identifier();
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(164);
				match(T__5);
				setState(165);
				identifier();
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(171);
			match(OPEN_CURLEY);
			setState(172);
			classBody();
			setState(173);
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

	public static class ClassBodyContext extends ParserRuleContext {
		public List<FunctionDefContext> functionDef() {
			return getRuleContexts(FunctionDefContext.class);
		}
		public FunctionDefContext functionDef(int i) {
			return getRuleContext(FunctionDefContext.class,i);
		}
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DEF || _la==IDENTIFIER) {
				{
				{
				setState(175);
				functionDef();
				}
				}
				setState(180);
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

	public static class ClassInitContext extends ParserRuleContext {
		public MethodcallContext methodcall() {
			return getRuleContext(MethodcallContext.class,0);
		}
		public ClassInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classInit; }
	}

	public final ClassInitContext classInit() throws RecognitionException {
		ClassInitContext _localctx = new ClassInitContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_classInit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(T__6);
			setState(182);
			methodcall();
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
		enterRule(_localctx, 22, RULE_methodcall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			identifier();
			setState(185);
			match(OPEN_BRACKET);
			setState(186);
			methodparams();
			setState(187);
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
		enterRule(_localctx, 24, RULE_methodparams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << ADD) | (1L << NOT) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(189);
				expression(0);
				}
				}
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(195);
				match(T__3);
				setState(196);
				expression(0);
				}
				}
				setState(201);
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
		public Asm_stmtContext asm_stmt() {
			return getRuleContext(Asm_stmtContext.class,0);
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
		public For_stmtContext for_stmt() {
			return getRuleContext(For_stmtContext.class,0);
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
		enterRule(_localctx, 26, RULE_statement);
		int _la;
		try {
			setState(228);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(202);
				match(OPEN_CURLEY);
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << ADD) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << FOR) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(203);
					statement();
					}
					}
					setState(208);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(209);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(210);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(211);
				asm_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(212);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(213);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(214);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(215);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(216);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(217);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(218);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(219);
				if_else_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(220);
				while_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(221);
				for_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(222);
				var_stmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(223);
				return_stmt();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(224);
				expression(0);
				setState(225);
				match(END_STMT);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
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
		enterRule(_localctx, 28, RULE_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			identifier();
			setState(231);
			match(ASSIGN);
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

	public static class Asm_stmtContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLEY() { return getToken(ICEScriptParser.OPEN_CURLEY, 0); }
		public AnyContext any() {
			return getRuleContext(AnyContext.class,0);
		}
		public TerminalNode CLOSE_CURLEY() { return getToken(ICEScriptParser.CLOSE_CURLEY, 0); }
		public Asm_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asm_stmt; }
	}

	public final Asm_stmtContext asm_stmt() throws RecognitionException {
		Asm_stmtContext _localctx = new Asm_stmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_asm_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(T__7);
			setState(236);
			match(OPEN_CURLEY);
			setState(237);
			any();
			setState(238);
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
		enterRule(_localctx, 32, RULE_any);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(241); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(240);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(243); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
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
		enterRule(_localctx, 34, RULE_add_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			identifier();
			setState(246);
			match(ADDASSIGN);
			setState(247);
			value();
			setState(248);
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
		enterRule(_localctx, 36, RULE_sub_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			identifier();
			setState(251);
			match(SUBASSIGN);
			setState(252);
			value();
			setState(253);
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
		enterRule(_localctx, 38, RULE_mul_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			identifier();
			setState(256);
			match(MULASSIGN);
			setState(257);
			value();
			setState(258);
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
		enterRule(_localctx, 40, RULE_div_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			identifier();
			setState(261);
			match(DIVASSIGN);
			setState(262);
			value();
			setState(263);
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
		enterRule(_localctx, 42, RULE_inc_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			identifier();
			setState(266);
			match(INCREMENT);
			setState(267);
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
		enterRule(_localctx, 44, RULE_dec_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			identifier();
			setState(270);
			match(DECREMENT);
			setState(271);
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
		enterRule(_localctx, 46, RULE_if_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(IF);
			setState(274);
			match(OPEN_BRACKET);
			setState(275);
			boolexpr();
			setState(276);
			match(CLOSE_BRACKET);
			setState(277);
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
		enterRule(_localctx, 48, RULE_if_else_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(IF);
			setState(280);
			match(OPEN_BRACKET);
			setState(281);
			boolexpr();
			setState(282);
			match(CLOSE_BRACKET);
			setState(283);
			statement();
			setState(284);
			match(ELSE);
			setState(285);
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
		enterRule(_localctx, 50, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			match(WHILE);
			setState(288);
			match(OPEN_BRACKET);
			setState(289);
			boolexpr();
			setState(290);
			match(CLOSE_BRACKET);
			setState(291);
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

	public static class For_stmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(ICEScriptParser.FOR, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(ICEScriptParser.OPEN_BRACKET, 0); }
		public Var_stmtContext var_stmt() {
			return getRuleContext(Var_stmtContext.class,0);
		}
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(ICEScriptParser.END_STMT, 0); }
		public TerminalNode CLOSE_BRACKET() { return getToken(ICEScriptParser.CLOSE_BRACKET, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public Inc_stmtContext inc_stmt() {
			return getRuleContext(Inc_stmtContext.class,0);
		}
		public Dec_stmtContext dec_stmt() {
			return getRuleContext(Dec_stmtContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public For_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_stmt; }
	}

	public final For_stmtContext for_stmt() throws RecognitionException {
		For_stmtContext _localctx = new For_stmtContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_for_stmt);
		try {
			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(293);
				match(FOR);
				setState(294);
				match(OPEN_BRACKET);
				setState(295);
				var_stmt();
				setState(296);
				boolexpr();
				setState(297);
				match(END_STMT);
				setState(301);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
				case 1:
					{
					setState(298);
					inc_stmt();
					}
					break;
				case 2:
					{
					}
					break;
				case 3:
					{
					setState(300);
					dec_stmt();
					}
					break;
				}
				setState(303);
				match(CLOSE_BRACKET);
				setState(304);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(306);
				match(FOR);
				setState(307);
				match(OPEN_BRACKET);
				setState(308);
				var_stmt();
				setState(309);
				match(T__8);
				setState(310);
				value();
				setState(311);
				match(CLOSE_BRACKET);
				setState(312);
				statement();
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
		enterRule(_localctx, 54, RULE_var_stmt);
		try {
			setState(330);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(316);
				match(VAR);
				setState(317);
				identifier();
				setState(318);
				match(ASSIGN);
				setState(319);
				expression(0);
				setState(320);
				match(END_STMT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
				match(VAR);
				setState(323);
				identifier();
				setState(324);
				match(T__2);
				setState(325);
				type(0);
				setState(326);
				match(ASSIGN);
				setState(327);
				expression(0);
				setState(328);
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
		enterRule(_localctx, 56, RULE_return_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(RETURN);
			setState(333);
			expression(0);
			setState(334);
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
		public ClassInitContext classInit() {
			return getRuleContext(ClassInitContext.class,0);
		}
		public MethodcallContext methodcall() {
			return getRuleContext(MethodcallContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public String_concatContext string_concat() {
			return getRuleContext(String_concatContext.class,0);
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
		int _startState = 58;
		enterRecursionRule(_localctx, 58, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(337);
				match(OPEN_BRACKET);
				setState(338);
				expression(0);
				setState(339);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(341);
				classInit();
				}
				break;
			case 3:
				{
				setState(342);
				methodcall();
				}
				break;
			case 4:
				{
				setState(343);
				value();
				}
				break;
			case 5:
				{
				setState(344);
				identifier();
				}
				break;
			case 6:
				{
				setState(345);
				boolexpr();
				}
				break;
			case 7:
				{
				setState(346);
				string();
				}
				break;
			case 8:
				{
				setState(347);
				object();
				}
				break;
			case 9:
				{
				setState(348);
				list();
				}
				break;
			case 10:
				{
				setState(349);
				string_concat();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(366);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(364);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(352);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(353);
						match(ADD);
						setState(354);
						expression(5);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(355);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(356);
						match(SUB);
						setState(357);
						expression(4);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(358);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(359);
						match(MUL);
						setState(360);
						expression(3);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(361);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(362);
						match(DIV);
						setState(363);
						expression(2);
						}
						break;
					}
					} 
				}
				setState(368);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
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

	public static class MathContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(ICEScriptParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ICEScriptParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(ICEScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ICEScriptParser.DIV, 0); }
		public MathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math; }
	}

	public final MathContext math() throws RecognitionException {
		MathContext _localctx = new MathContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_math);
		try {
			setState(385);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(369);
				expression(0);
				setState(370);
				match(ADD);
				setState(371);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(373);
				expression(0);
				setState(374);
				match(SUB);
				setState(375);
				expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(377);
				expression(0);
				setState(378);
				match(MUL);
				setState(379);
				expression(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(381);
				expression(0);
				setState(382);
				match(DIV);
				setState(383);
				expression(0);
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
		enterRule(_localctx, 62, RULE_boolexpr);
		try {
			setState(424);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(387);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(388);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(389);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(390);
				value();
				setState(391);
				match(GREATER_THAN);
				setState(392);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(394);
				value();
				setState(395);
				match(LESS_THAN);
				setState(396);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(398);
				value();
				setState(399);
				match(EQUAL_TO);
				setState(400);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(402);
				value();
				setState(403);
				match(NOT_EQUAL_TO);
				setState(404);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(406);
				value();
				setState(407);
				match(GREATER_THAN_OR_EQUAL);
				setState(408);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(410);
				value();
				setState(411);
				match(LESS_THAN_OR_EQUAL);
				setState(412);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(414);
				value();
				setState(415);
				match(OR);
				setState(416);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(418);
				value();
				setState(419);
				match(AND);
				setState(420);
				boolexpr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(422);
				match(NOT);
				setState(423);
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
		enterRule(_localctx, 64, RULE_value);
		try {
			setState(428);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				identifier();
				}
				break;
			case PI:
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(427);
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
		enterRule(_localctx, 66, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
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
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			_la = _input.LA(1);
			if ( !(_la==PI || _la==NUMBER) ) {
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

	public static class ListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(T__9);
			setState(438);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << ADD) | (1L << NOT) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(435);
				expression(0);
				}
				}
				setState(440);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(445);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(441);
				match(T__3);
				setState(442);
				expression(0);
				}
				}
				setState(447);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(448);
			match(T__10);
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

	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLEY() { return getToken(ICEScriptParser.OPEN_CURLEY, 0); }
		public TerminalNode CLOSE_CURLEY() { return getToken(ICEScriptParser.CLOSE_CURLEY, 0); }
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			match(OPEN_CURLEY);
			setState(457);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(451);
				string();
				setState(452);
				match(T__2);
				setState(453);
				data();
				}
				}
				setState(459);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(460);
			match(T__3);
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(461);
				string();
				setState(462);
				match(T__2);
				setState(463);
				data();
				}
				}
				setState(469);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(470);
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

	public static class StringContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(ICEScriptParser.STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(STRING);
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

	public static class String_concatContext extends ParserRuleContext {
		public List<TerminalNode> ADD() { return getTokens(ICEScriptParser.ADD); }
		public TerminalNode ADD(int i) {
			return getToken(ICEScriptParser.ADD, i);
		}
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public List<DataContext> data() {
			return getRuleContexts(DataContext.class);
		}
		public DataContext data(int i) {
			return getRuleContext(DataContext.class,i);
		}
		public String_concatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string_concat; }
	}

	public final String_concatContext string_concat() throws RecognitionException {
		String_concatContext _localctx = new String_concatContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_string_concat);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(474);
				string();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(476);
				data();
				}
				break;
			}
			setState(479);
			match(ADD);
			setState(483);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(480);
				string();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(482);
				data();
				}
				break;
			}
			setState(493);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(485);
					match(ADD);
					setState(489);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
					case 1:
						{
						setState(486);
						string();
						}
						break;
					case 2:
						{
						}
						break;
					case 3:
						{
						setState(488);
						data();
						}
						break;
					}
					}
					} 
				}
				setState(495);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
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

	public static class DataContext extends ParserRuleContext {
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public ObjectContext object() {
			return getRuleContext(ObjectContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ClassInitContext classInit() {
			return getRuleContext(ClassInitContext.class,0);
		}
		public MethodcallContext methodcall() {
			return getRuleContext(MethodcallContext.class,0);
		}
		public DataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_data; }
	}

	public final DataContext data() throws RecognitionException {
		DataContext _localctx = new DataContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_data);
		try {
			setState(504);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(496);
				string();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(497);
				list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(498);
				number();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(499);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(500);
				object();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(501);
				value();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(502);
				classInit();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(503);
				methodcall();
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

	public static class TypeContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		return type(0);
	}

	private TypeContext type(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeContext _localctx = new TypeContext(_ctx, _parentState);
		TypeContext _prevctx = _localctx;
		int _startState = 80;
		enterRecursionRule(_localctx, 80, RULE_type, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				{
				}
				break;
			case 2:
				{
				setState(507);
				match(T__11);
				}
				break;
			case 3:
				{
				setState(508);
				match(T__12);
				}
				break;
			case 4:
				{
				setState(509);
				match(T__13);
				}
				break;
			case 5:
				{
				setState(510);
				match(T__14);
				}
				break;
			case 6:
				{
				setState(511);
				match(T__15);
				}
				break;
			case 7:
				{
				setState(512);
				match(T__16);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(519);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_type);
					setState(515);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(516);
					match(T__17);
					}
					} 
				}
				setState(521);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 29:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 40:
			return type_sempred((TypeContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean type_sempred(TypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3>\u020d\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\3\2\3\2"+
		"\7\2W\n\2\f\2\16\2Z\13\2\3\2\3\2\7\2^\n\2\f\2\16\2a\13\2\3\2\7\2d\n\2"+
		"\f\2\16\2g\13\2\3\2\5\2j\n\2\3\3\7\3m\n\3\f\3\16\3p\13\3\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u008d\n\7\3\b\3\b\3\b\3\b\3\b\7\b\u0094\n"+
		"\b\f\b\16\b\u0097\13\b\5\b\u0099\n\b\3\t\3\t\3\t\3\t\3\t\5\t\u00a0\n\t"+
		"\3\t\3\t\3\t\3\n\3\n\3\n\3\n\7\n\u00a9\n\n\f\n\16\n\u00ac\13\n\3\n\3\n"+
		"\3\n\3\n\3\13\7\13\u00b3\n\13\f\13\16\13\u00b6\13\13\3\f\3\f\3\f\3\r\3"+
		"\r\3\r\3\r\3\r\3\16\7\16\u00c1\n\16\f\16\16\16\u00c4\13\16\3\16\3\16\7"+
		"\16\u00c8\n\16\f\16\16\16\u00cb\13\16\3\17\3\17\7\17\u00cf\n\17\f\17\16"+
		"\17\u00d2\13\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00e7\n\17\3\20\3\20\3\20"+
		"\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\6\22\u00f4\n\22\r\22\16\22\u00f5"+
		"\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\5\34\u0130\n\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\5\34\u013d\n\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\5\35\u014d\n\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u0161\n\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u016f\n\37"+
		"\f\37\16\37\u0172\13\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3"+
		" \5 \u0184\n \3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3"+
		"!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u01ab\n!\3"+
		"\"\3\"\5\"\u01af\n\"\3#\3#\3$\3$\3%\3%\7%\u01b7\n%\f%\16%\u01ba\13%\3"+
		"%\3%\7%\u01be\n%\f%\16%\u01c1\13%\3%\3%\3&\3&\3&\3&\3&\7&\u01ca\n&\f&"+
		"\16&\u01cd\13&\3&\3&\3&\3&\3&\7&\u01d4\n&\f&\16&\u01d7\13&\3&\3&\3\'\3"+
		"\'\3(\3(\3(\5(\u01e0\n(\3(\3(\3(\3(\5(\u01e6\n(\3(\3(\3(\3(\5(\u01ec\n"+
		"(\7(\u01ee\n(\f(\16(\u01f1\13(\3)\3)\3)\3)\3)\3)\3)\3)\5)\u01fb\n)\3*"+
		"\3*\3*\3*\3*\3*\3*\5*\u0204\n*\3*\3*\7*\u0208\n*\f*\16*\u020b\13*\3*\3"+
		"\u00f5\4<R+\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\66"+
		"8:<>@BDFHJLNPR\2\3\4\288;;\2\u0241\2i\3\2\2\2\4n\3\2\2\2\6q\3\2\2\2\b"+
		"s\3\2\2\2\nw\3\2\2\2\f\u008c\3\2\2\2\16\u0098\3\2\2\2\20\u009f\3\2\2\2"+
		"\22\u00a4\3\2\2\2\24\u00b4\3\2\2\2\26\u00b7\3\2\2\2\30\u00ba\3\2\2\2\32"+
		"\u00c2\3\2\2\2\34\u00e6\3\2\2\2\36\u00e8\3\2\2\2 \u00ed\3\2\2\2\"\u00f3"+
		"\3\2\2\2$\u00f7\3\2\2\2&\u00fc\3\2\2\2(\u0101\3\2\2\2*\u0106\3\2\2\2,"+
		"\u010b\3\2\2\2.\u010f\3\2\2\2\60\u0113\3\2\2\2\62\u0119\3\2\2\2\64\u0121"+
		"\3\2\2\2\66\u013c\3\2\2\28\u014c\3\2\2\2:\u014e\3\2\2\2<\u0160\3\2\2\2"+
		">\u0183\3\2\2\2@\u01aa\3\2\2\2B\u01ae\3\2\2\2D\u01b0\3\2\2\2F\u01b2\3"+
		"\2\2\2H\u01b4\3\2\2\2J\u01c4\3\2\2\2L\u01da\3\2\2\2N\u01df\3\2\2\2P\u01fa"+
		"\3\2\2\2R\u0203\3\2\2\2TX\5\4\3\2UW\5\f\7\2VU\3\2\2\2WZ\3\2\2\2XV\3\2"+
		"\2\2XY\3\2\2\2Yj\3\2\2\2ZX\3\2\2\2[j\3\2\2\2\\^\5\22\n\2]\\\3\2\2\2^a"+
		"\3\2\2\2_]\3\2\2\2_`\3\2\2\2`e\3\2\2\2a_\3\2\2\2bd\5\34\17\2cb\3\2\2\2"+
		"dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2fj\3\2\2\2ge\3\2\2\2hj\7\2\2\3iT\3\2\2\2"+
		"i[\3\2\2\2i_\3\2\2\2ih\3\2\2\2j\3\3\2\2\2km\5\n\6\2lk\3\2\2\2mp\3\2\2"+
		"\2nl\3\2\2\2no\3\2\2\2o\5\3\2\2\2pn\3\2\2\2qr\5\b\5\2r\7\3\2\2\2st\7\3"+
		"\2\2tu\5D#\2uv\7\31\2\2v\t\3\2\2\2wx\7\4\2\2xy\5D#\2yz\7\31\2\2z\13\3"+
		"\2\2\2{|\7\60\2\2|}\5D#\2}~\7\25\2\2~\177\5\16\b\2\177\u0080\7\26\2\2"+
		"\u0080\u0081\7\5\2\2\u0081\u0082\5R*\2\u0082\u0083\5\34\17\2\u0083\u008d"+
		"\3\2\2\2\u0084\u0085\5D#\2\u0085\u0086\7\25\2\2\u0086\u0087\5\16\b\2\u0087"+
		"\u0088\7\26\2\2\u0088\u0089\7\5\2\2\u0089\u008a\5R*\2\u008a\u008b\5\34"+
		"\17\2\u008b\u008d\3\2\2\2\u008c{\3\2\2\2\u008c\u0084\3\2\2\2\u008d\r\3"+
		"\2\2\2\u008e\u0099\5\20\t\2\u008f\u0099\3\2\2\2\u0090\u0095\5\20\t\2\u0091"+
		"\u0092\7\6\2\2\u0092\u0094\5\20\t\2\u0093\u0091\3\2\2\2\u0094\u0097\3"+
		"\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0099\3\2\2\2\u0097"+
		"\u0095\3\2\2\2\u0098\u008e\3\2\2\2\u0098\u008f\3\2\2\2\u0098\u0090\3\2"+
		"\2\2\u0099\17\3\2\2\2\u009a\u00a0\5D#\2\u009b\u00a0\3\2\2\2\u009c\u00a0"+
		"\5<\37\2\u009d\u00a0\3\2\2\2\u009e\u00a0\5\"\22\2\u009f\u009a\3\2\2\2"+
		"\u009f\u009b\3\2\2\2\u009f\u009c\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u009e"+
		"\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2\7\5\2\2\u00a2\u00a3\5R*\2\u00a3"+
		"\21\3\2\2\2\u00a4\u00a5\7\7\2\2\u00a5\u00aa\5D#\2\u00a6\u00a7\7\b\2\2"+
		"\u00a7\u00a9\5D#\2\u00a8\u00a6\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8"+
		"\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ad\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad"+
		"\u00ae\7\27\2\2\u00ae\u00af\5\24\13\2\u00af\u00b0\7\30\2\2\u00b0\23\3"+
		"\2\2\2\u00b1\u00b3\5\f\7\2\u00b2\u00b1\3\2\2\2\u00b3\u00b6\3\2\2\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\25\3\2\2\2\u00b6\u00b4\3\2\2"+
		"\2\u00b7\u00b8\7\t\2\2\u00b8\u00b9\5\30\r\2\u00b9\27\3\2\2\2\u00ba\u00bb"+
		"\5D#\2\u00bb\u00bc\7\25\2\2\u00bc\u00bd\5\32\16\2\u00bd\u00be\7\26\2\2"+
		"\u00be\31\3\2\2\2\u00bf\u00c1\5<\37\2\u00c0\u00bf\3\2\2\2\u00c1\u00c4"+
		"\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c9\3\2\2\2\u00c4"+
		"\u00c2\3\2\2\2\u00c5\u00c6\7\6\2\2\u00c6\u00c8\5<\37\2\u00c7\u00c5\3\2"+
		"\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"\33\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00d0\7\27\2\2\u00cd\u00cf\5\34"+
		"\17\2\u00ce\u00cd\3\2\2\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0"+
		"\u00d1\3\2\2\2\u00d1\u00d3\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3\u00e7\7\30"+
		"\2\2\u00d4\u00e7\5\36\20\2\u00d5\u00e7\5 \21\2\u00d6\u00e7\5$\23\2\u00d7"+
		"\u00e7\5&\24\2\u00d8\u00e7\5(\25\2\u00d9\u00e7\5*\26\2\u00da\u00e7\5,"+
		"\27\2\u00db\u00e7\5.\30\2\u00dc\u00e7\5\60\31\2\u00dd\u00e7\5\62\32\2"+
		"\u00de\u00e7\5\64\33\2\u00df\u00e7\5\66\34\2\u00e0\u00e7\58\35\2\u00e1"+
		"\u00e7\5:\36\2\u00e2\u00e3\5<\37\2\u00e3\u00e4\7\31\2\2\u00e4\u00e7\3"+
		"\2\2\2\u00e5\u00e7\7\31\2\2\u00e6\u00cc\3\2\2\2\u00e6\u00d4\3\2\2\2\u00e6"+
		"\u00d5\3\2\2\2\u00e6\u00d6\3\2\2\2\u00e6\u00d7\3\2\2\2\u00e6\u00d8\3\2"+
		"\2\2\u00e6\u00d9\3\2\2\2\u00e6\u00da\3\2\2\2\u00e6\u00db\3\2\2\2\u00e6"+
		"\u00dc\3\2\2\2\u00e6\u00dd\3\2\2\2\u00e6\u00de\3\2\2\2\u00e6\u00df\3\2"+
		"\2\2\u00e6\u00e0\3\2\2\2\u00e6\u00e1\3\2\2\2\u00e6\u00e2\3\2\2\2\u00e6"+
		"\u00e5\3\2\2\2\u00e7\35\3\2\2\2\u00e8\u00e9\5D#\2\u00e9\u00ea\7\'\2\2"+
		"\u00ea\u00eb\5<\37\2\u00eb\u00ec\7\31\2\2\u00ec\37\3\2\2\2\u00ed\u00ee"+
		"\7\n\2\2\u00ee\u00ef\7\27\2\2\u00ef\u00f0\5\"\22\2\u00f0\u00f1\7\30\2"+
		"\2\u00f1!\3\2\2\2\u00f2\u00f4\13\2\2\2\u00f3\u00f2\3\2\2\2\u00f4\u00f5"+
		"\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f6#\3\2\2\2\u00f7"+
		"\u00f8\5D#\2\u00f8\u00f9\7(\2\2\u00f9\u00fa\5B\"\2\u00fa\u00fb\7\31\2"+
		"\2\u00fb%\3\2\2\2\u00fc\u00fd\5D#\2\u00fd\u00fe\7)\2\2\u00fe\u00ff\5B"+
		"\"\2\u00ff\u0100\7\31\2\2\u0100\'\3\2\2\2\u0101\u0102\5D#\2\u0102\u0103"+
		"\7*\2\2\u0103\u0104\5B\"\2\u0104\u0105\7\31\2\2\u0105)\3\2\2\2\u0106\u0107"+
		"\5D#\2\u0107\u0108\7+\2\2\u0108\u0109\5B\"\2\u0109\u010a\7\31\2\2\u010a"+
		"+\3\2\2\2\u010b\u010c\5D#\2\u010c\u010d\7.\2\2\u010d\u010e\7\31\2\2\u010e"+
		"-\3\2\2\2\u010f\u0110\5D#\2\u0110\u0111\7/\2\2\u0111\u0112\7\31\2\2\u0112"+
		"/\3\2\2\2\u0113\u0114\7,\2\2\u0114\u0115\7\25\2\2\u0115\u0116\5@!\2\u0116"+
		"\u0117\7\26\2\2\u0117\u0118\5\34\17\2\u0118\61\3\2\2\2\u0119\u011a\7,"+
		"\2\2\u011a\u011b\7\25\2\2\u011b\u011c\5@!\2\u011c\u011d\7\26\2\2\u011d"+
		"\u011e\5\34\17\2\u011e\u011f\7-\2\2\u011f\u0120\5\34\17\2\u0120\63\3\2"+
		"\2\2\u0121\u0122\7\62\2\2\u0122\u0123\7\25\2\2\u0123\u0124\5@!\2\u0124"+
		"\u0125\7\26\2\2\u0125\u0126\5\34\17\2\u0126\65\3\2\2\2\u0127\u0128\7\63"+
		"\2\2\u0128\u0129\7\25\2\2\u0129\u012a\58\35\2\u012a\u012b\5@!\2\u012b"+
		"\u012f\7\31\2\2\u012c\u0130\5,\27\2\u012d\u0130\3\2\2\2\u012e\u0130\5"+
		".\30\2\u012f\u012c\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u012e\3\2\2\2\u0130"+
		"\u0131\3\2\2\2\u0131\u0132\7\26\2\2\u0132\u0133\5\34\17\2\u0133\u013d"+
		"\3\2\2\2\u0134\u0135\7\63\2\2\u0135\u0136\7\25\2\2\u0136\u0137\58\35\2"+
		"\u0137\u0138\7\13\2\2\u0138\u0139\5B\"\2\u0139\u013a\7\26\2\2\u013a\u013b"+
		"\5\34\17\2\u013b\u013d\3\2\2\2\u013c\u0127\3\2\2\2\u013c\u0134\3\2\2\2"+
		"\u013d\67\3\2\2\2\u013e\u013f\7\61\2\2\u013f\u0140\5D#\2\u0140\u0141\7"+
		"\'\2\2\u0141\u0142\5<\37\2\u0142\u0143\7\31\2\2\u0143\u014d\3\2\2\2\u0144"+
		"\u0145\7\61\2\2\u0145\u0146\5D#\2\u0146\u0147\7\5\2\2\u0147\u0148\5R*"+
		"\2\u0148\u0149\7\'\2\2\u0149\u014a\5<\37\2\u014a\u014b\7\31\2\2\u014b"+
		"\u014d\3\2\2\2\u014c\u013e\3\2\2\2\u014c\u0144\3\2\2\2\u014d9\3\2\2\2"+
		"\u014e\u014f\7\64\2\2\u014f\u0150\5<\37\2\u0150\u0151\7\31\2\2\u0151;"+
		"\3\2\2\2\u0152\u0153\b\37\1\2\u0153\u0154\7\25\2\2\u0154\u0155\5<\37\2"+
		"\u0155\u0156\7\26\2\2\u0156\u0161\3\2\2\2\u0157\u0161\5\26\f\2\u0158\u0161"+
		"\5\30\r\2\u0159\u0161\5B\"\2\u015a\u0161\5D#\2\u015b\u0161\5@!\2\u015c"+
		"\u0161\5L\'\2\u015d\u0161\5J&\2\u015e\u0161\5H%\2\u015f\u0161\5N(\2\u0160"+
		"\u0152\3\2\2\2\u0160\u0157\3\2\2\2\u0160\u0158\3\2\2\2\u0160\u0159\3\2"+
		"\2\2\u0160\u015a\3\2\2\2\u0160\u015b\3\2\2\2\u0160\u015c\3\2\2\2\u0160"+
		"\u015d\3\2\2\2\u0160\u015e\3\2\2\2\u0160\u015f\3\2\2\2\u0161\u0170\3\2"+
		"\2\2\u0162\u0163\f\6\2\2\u0163\u0164\7\32\2\2\u0164\u016f\5<\37\7\u0165"+
		"\u0166\f\5\2\2\u0166\u0167\7\33\2\2\u0167\u016f\5<\37\6\u0168\u0169\f"+
		"\4\2\2\u0169\u016a\7\34\2\2\u016a\u016f\5<\37\5\u016b\u016c\f\3\2\2\u016c"+
		"\u016d\7\35\2\2\u016d\u016f\5<\37\4\u016e\u0162\3\2\2\2\u016e\u0165\3"+
		"\2\2\2\u016e\u0168\3\2\2\2\u016e\u016b\3\2\2\2\u016f\u0172\3\2\2\2\u0170"+
		"\u016e\3\2\2\2\u0170\u0171\3\2\2\2\u0171=\3\2\2\2\u0172\u0170\3\2\2\2"+
		"\u0173\u0174\5<\37\2\u0174\u0175\7\32\2\2\u0175\u0176\5<\37\2\u0176\u0184"+
		"\3\2\2\2\u0177\u0178\5<\37\2\u0178\u0179\7\33\2\2\u0179\u017a\5<\37\2"+
		"\u017a\u0184\3\2\2\2\u017b\u017c\5<\37\2\u017c\u017d\7\34\2\2\u017d\u017e"+
		"\5<\37\2\u017e\u0184\3\2\2\2\u017f\u0180\5<\37\2\u0180\u0181\7\35\2\2"+
		"\u0181\u0182\5<\37\2\u0182\u0184\3\2\2\2\u0183\u0173\3\2\2\2\u0183\u0177"+
		"\3\2\2\2\u0183\u017b\3\2\2\2\u0183\u017f\3\2\2\2\u0184?\3\2\2\2\u0185"+
		"\u01ab\5B\"\2\u0186\u01ab\7\65\2\2\u0187\u01ab\7\66\2\2\u0188\u0189\5"+
		"B\"\2\u0189\u018a\7\36\2\2\u018a\u018b\5@!\2\u018b\u01ab\3\2\2\2\u018c"+
		"\u018d\5B\"\2\u018d\u018e\7\37\2\2\u018e\u018f\5@!\2\u018f\u01ab\3\2\2"+
		"\2\u0190\u0191\5B\"\2\u0191\u0192\7 \2\2\u0192\u0193\5@!\2\u0193\u01ab"+
		"\3\2\2\2\u0194\u0195\5B\"\2\u0195\u0196\7!\2\2\u0196\u0197\5@!\2\u0197"+
		"\u01ab\3\2\2\2\u0198\u0199\5B\"\2\u0199\u019a\7\"\2\2\u019a\u019b\5@!"+
		"\2\u019b\u01ab\3\2\2\2\u019c\u019d\5B\"\2\u019d\u019e\7#\2\2\u019e\u019f"+
		"\5@!\2\u019f\u01ab\3\2\2\2\u01a0\u01a1\5B\"\2\u01a1\u01a2\7$\2\2\u01a2"+
		"\u01a3\5@!\2\u01a3\u01ab\3\2\2\2\u01a4\u01a5\5B\"\2\u01a5\u01a6\7%\2\2"+
		"\u01a6\u01a7\5@!\2\u01a7\u01ab\3\2\2\2\u01a8\u01a9\7&\2\2\u01a9\u01ab"+
		"\5@!\2\u01aa\u0185\3\2\2\2\u01aa\u0186\3\2\2\2\u01aa\u0187\3\2\2\2\u01aa"+
		"\u0188\3\2\2\2\u01aa\u018c\3\2\2\2\u01aa\u0190\3\2\2\2\u01aa\u0194\3\2"+
		"\2\2\u01aa\u0198\3\2\2\2\u01aa\u019c\3\2\2\2\u01aa\u01a0\3\2\2\2\u01aa"+
		"\u01a4\3\2\2\2\u01aa\u01a8\3\2\2\2\u01abA\3\2\2\2\u01ac\u01af\5D#\2\u01ad"+
		"\u01af\5F$\2\u01ae\u01ac\3\2\2\2\u01ae\u01ad\3\2\2\2\u01afC\3\2\2\2\u01b0"+
		"\u01b1\7\67\2\2\u01b1E\3\2\2\2\u01b2\u01b3\t\2\2\2\u01b3G\3\2\2\2\u01b4"+
		"\u01b8\7\f\2\2\u01b5\u01b7\5<\37\2\u01b6\u01b5\3\2\2\2\u01b7\u01ba\3\2"+
		"\2\2\u01b8\u01b6\3\2\2\2\u01b8\u01b9\3\2\2\2\u01b9\u01bf\3\2\2\2\u01ba"+
		"\u01b8\3\2\2\2\u01bb\u01bc\7\6\2\2\u01bc\u01be\5<\37\2\u01bd\u01bb\3\2"+
		"\2\2\u01be\u01c1\3\2\2\2\u01bf\u01bd\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0"+
		"\u01c2\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c2\u01c3\7\r\2\2\u01c3I\3\2\2\2"+
		"\u01c4\u01cb\7\27\2\2\u01c5\u01c6\5L\'\2\u01c6\u01c7\7\5\2\2\u01c7\u01c8"+
		"\5P)\2\u01c8\u01ca\3\2\2\2\u01c9\u01c5\3\2\2\2\u01ca\u01cd\3\2\2\2\u01cb"+
		"\u01c9\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc\u01ce\3\2\2\2\u01cd\u01cb\3\2"+
		"\2\2\u01ce\u01d5\7\6\2\2\u01cf\u01d0\5L\'\2\u01d0\u01d1\7\5\2\2\u01d1"+
		"\u01d2\5P)\2\u01d2\u01d4\3\2\2\2\u01d3\u01cf\3\2\2\2\u01d4\u01d7\3\2\2"+
		"\2\u01d5\u01d3\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d8\3\2\2\2\u01d7\u01d5"+
		"\3\2\2\2\u01d8\u01d9\7\30\2\2\u01d9K\3\2\2\2\u01da\u01db\79\2\2\u01db"+
		"M\3\2\2\2\u01dc\u01e0\5L\'\2\u01dd\u01e0\3\2\2\2\u01de\u01e0\5P)\2\u01df"+
		"\u01dc\3\2\2\2\u01df\u01dd\3\2\2\2\u01df\u01de\3\2\2\2\u01e0\u01e1\3\2"+
		"\2\2\u01e1\u01e5\7\32\2\2\u01e2\u01e6\5L\'\2\u01e3\u01e6\3\2\2\2\u01e4"+
		"\u01e6\5P)\2\u01e5\u01e2\3\2\2\2\u01e5\u01e3\3\2\2\2\u01e5\u01e4\3\2\2"+
		"\2\u01e6\u01ef\3\2\2\2\u01e7\u01eb\7\32\2\2\u01e8\u01ec\5L\'\2\u01e9\u01ec"+
		"\3\2\2\2\u01ea\u01ec\5P)\2\u01eb\u01e8\3\2\2\2\u01eb\u01e9\3\2\2\2\u01eb"+
		"\u01ea\3\2\2\2\u01ec\u01ee\3\2\2\2\u01ed\u01e7\3\2\2\2\u01ee\u01f1\3\2"+
		"\2\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0O\3\2\2\2\u01f1\u01ef"+
		"\3\2\2\2\u01f2\u01fb\5L\'\2\u01f3\u01fb\5H%\2\u01f4\u01fb\5F$\2\u01f5"+
		"\u01fb\5@!\2\u01f6\u01fb\5J&\2\u01f7\u01fb\5B\"\2\u01f8\u01fb\5\26\f\2"+
		"\u01f9\u01fb\5\30\r\2\u01fa\u01f2\3\2\2\2\u01fa\u01f3\3\2\2\2\u01fa\u01f4"+
		"\3\2\2\2\u01fa\u01f5\3\2\2\2\u01fa\u01f6\3\2\2\2\u01fa\u01f7\3\2\2\2\u01fa"+
		"\u01f8\3\2\2\2\u01fa\u01f9\3\2\2\2\u01fbQ\3\2\2\2\u01fc\u0204\b*\1\2\u01fd"+
		"\u0204\7\16\2\2\u01fe\u0204\7\17\2\2\u01ff\u0204\7\20\2\2\u0200\u0204"+
		"\7\21\2\2\u0201\u0204\7\22\2\2\u0202\u0204\7\23\2\2\u0203\u01fc\3\2\2"+
		"\2\u0203\u01fd\3\2\2\2\u0203\u01fe\3\2\2\2\u0203\u01ff\3\2\2\2\u0203\u0200"+
		"\3\2\2\2\u0203\u0201\3\2\2\2\u0203\u0202\3\2\2\2\u0204\u0209\3\2\2\2\u0205"+
		"\u0206\f\3\2\2\u0206\u0208\7\24\2\2\u0207\u0205\3\2\2\2\u0208\u020b\3"+
		"\2\2\2\u0209\u0207\3\2\2\2\u0209\u020a\3\2\2\2\u020aS\3\2\2\2\u020b\u0209"+
		"\3\2\2\2&X_ein\u008c\u0095\u0098\u009f\u00aa\u00b4\u00c2\u00c9\u00d0\u00e6"+
		"\u00f5\u012f\u013c\u014c\u0160\u016e\u0170\u0183\u01aa\u01ae\u01b8\u01bf"+
		"\u01cb\u01d5\u01df\u01e5\u01eb\u01ef\u01fa\u0203\u0209";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}