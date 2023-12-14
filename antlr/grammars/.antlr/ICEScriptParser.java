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
			int _alt;
			setState(96);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				header();
				setState(86);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(83);
						functionDef();
						}
						} 
					}
					setState(88);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
				}
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << ADD) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << FOR) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(89);
					statement();
					}
					}
					setState(94);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(95);
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
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(98);
				include();
				}
				}
				setState(103);
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
			setState(104);
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
			setState(106);
			match(T__0);
			setState(107);
			identifier();
			setState(108);
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
			setState(110);
			match(T__1);
			setState(111);
			identifier();
			setState(112);
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
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(114);
				match(DEF);
				setState(115);
				identifier();
				setState(116);
				match(OPEN_BRACKET);
				setState(117);
				func_params();
				setState(118);
				match(CLOSE_BRACKET);
				setState(119);
				match(T__2);
				setState(120);
				type(0);
				setState(121);
				statement();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				identifier();
				setState(124);
				match(OPEN_BRACKET);
				setState(125);
				func_params();
				setState(126);
				match(CLOSE_BRACKET);
				setState(127);
				match(T__2);
				setState(128);
				type(0);
				setState(129);
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
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
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
				setState(135);
				func_identifier();
				setState(140);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(136);
					match(T__3);
					setState(137);
					func_identifier();
					}
					}
					setState(142);
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
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(145);
				identifier();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(147);
				expression(0);
				}
				break;
			case 4:
				{
				}
				break;
			case 5:
				{
				setState(149);
				any();
				}
				break;
			}
			setState(152);
			match(T__2);
			setState(153);
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
			setState(155);
			match(T__4);
			setState(156);
			identifier();
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(157);
				match(T__5);
				setState(158);
				identifier();
				}
				}
				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(164);
			match(OPEN_CURLEY);
			setState(165);
			classBody();
			setState(166);
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
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DEF || _la==IDENTIFIER) {
				{
				{
				setState(168);
				functionDef();
				}
				}
				setState(173);
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
			setState(174);
			match(T__6);
			setState(175);
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
			setState(177);
			identifier();
			setState(178);
			match(OPEN_BRACKET);
			setState(179);
			methodparams();
			setState(180);
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
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << ADD) | (1L << NOT) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(182);
				expression(0);
				}
				}
				setState(187);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(188);
				match(T__3);
				setState(189);
				expression(0);
				}
				}
				setState(194);
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
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(195);
				match(OPEN_CURLEY);
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << END_STMT) | (1L << ADD) | (1L << NOT) | (1L << IF) | (1L << VAR) | (1L << WHILE) | (1L << FOR) | (1L << RETURN) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
					{
					{
					setState(196);
					statement();
					}
					}
					setState(201);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(202);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(203);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(204);
				asm_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(205);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(206);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(207);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(208);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(209);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(210);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(211);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(212);
				if_else_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(213);
				while_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(214);
				for_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(215);
				var_stmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(216);
				return_stmt();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(217);
				expression(0);
				setState(218);
				match(END_STMT);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(220);
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
			setState(223);
			identifier();
			setState(224);
			match(ASSIGN);
			setState(225);
			expression(0);
			setState(226);
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
			setState(228);
			match(T__7);
			setState(229);
			match(OPEN_CURLEY);
			setState(230);
			any();
			setState(231);
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
			setState(234); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(233);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(236); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
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
			setState(238);
			identifier();
			setState(239);
			match(ADDASSIGN);
			setState(240);
			value();
			setState(241);
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
			setState(243);
			identifier();
			setState(244);
			match(SUBASSIGN);
			setState(245);
			value();
			setState(246);
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
			setState(248);
			identifier();
			setState(249);
			match(MULASSIGN);
			setState(250);
			value();
			setState(251);
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
			setState(253);
			identifier();
			setState(254);
			match(DIVASSIGN);
			setState(255);
			value();
			setState(256);
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
			setState(258);
			identifier();
			setState(259);
			match(INCREMENT);
			setState(260);
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
			setState(262);
			identifier();
			setState(263);
			match(DECREMENT);
			setState(264);
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
			setState(266);
			match(IF);
			setState(267);
			match(OPEN_BRACKET);
			setState(268);
			boolexpr();
			setState(269);
			match(CLOSE_BRACKET);
			setState(270);
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
			setState(272);
			match(IF);
			setState(273);
			match(OPEN_BRACKET);
			setState(274);
			boolexpr();
			setState(275);
			match(CLOSE_BRACKET);
			setState(276);
			statement();
			setState(277);
			match(ELSE);
			setState(278);
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
			setState(280);
			match(WHILE);
			setState(281);
			match(OPEN_BRACKET);
			setState(282);
			boolexpr();
			setState(283);
			match(CLOSE_BRACKET);
			setState(284);
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
			setState(307);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(286);
				match(FOR);
				setState(287);
				match(OPEN_BRACKET);
				setState(288);
				var_stmt();
				setState(289);
				boolexpr();
				setState(290);
				match(END_STMT);
				setState(294);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(291);
					inc_stmt();
					}
					break;
				case 2:
					{
					}
					break;
				case 3:
					{
					setState(293);
					dec_stmt();
					}
					break;
				}
				setState(296);
				match(CLOSE_BRACKET);
				setState(297);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(299);
				match(FOR);
				setState(300);
				match(OPEN_BRACKET);
				setState(301);
				var_stmt();
				setState(302);
				match(T__8);
				setState(303);
				value();
				setState(304);
				match(CLOSE_BRACKET);
				setState(305);
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
			setState(323);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(309);
				match(VAR);
				setState(310);
				identifier();
				setState(311);
				match(ASSIGN);
				setState(312);
				expression(0);
				setState(313);
				match(END_STMT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(315);
				match(VAR);
				setState(316);
				identifier();
				setState(317);
				match(T__2);
				setState(318);
				type(0);
				setState(319);
				match(ASSIGN);
				setState(320);
				expression(0);
				setState(321);
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
			setState(325);
			match(RETURN);
			setState(326);
			expression(0);
			setState(327);
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
			setState(343);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(330);
				match(OPEN_BRACKET);
				setState(331);
				expression(0);
				setState(332);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(334);
				classInit();
				}
				break;
			case 3:
				{
				setState(335);
				methodcall();
				}
				break;
			case 4:
				{
				setState(336);
				value();
				}
				break;
			case 5:
				{
				setState(337);
				identifier();
				}
				break;
			case 6:
				{
				setState(338);
				boolexpr();
				}
				break;
			case 7:
				{
				setState(339);
				string();
				}
				break;
			case 8:
				{
				setState(340);
				object();
				}
				break;
			case 9:
				{
				setState(341);
				list();
				}
				break;
			case 10:
				{
				setState(342);
				string_concat();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(359);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(357);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(345);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(346);
						match(ADD);
						setState(347);
						expression(5);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(348);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(349);
						match(SUB);
						setState(350);
						expression(4);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(351);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(352);
						match(MUL);
						setState(353);
						expression(3);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(354);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(355);
						match(DIV);
						setState(356);
						expression(2);
						}
						break;
					}
					} 
				}
				setState(361);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
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
			setState(378);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(362);
				expression(0);
				setState(363);
				match(ADD);
				setState(364);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(366);
				expression(0);
				setState(367);
				match(SUB);
				setState(368);
				expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(370);
				expression(0);
				setState(371);
				match(MUL);
				setState(372);
				expression(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(374);
				expression(0);
				setState(375);
				match(DIV);
				setState(376);
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
			setState(417);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(380);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(381);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(382);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(383);
				value();
				setState(384);
				match(GREATER_THAN);
				setState(385);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(387);
				value();
				setState(388);
				match(LESS_THAN);
				setState(389);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(391);
				value();
				setState(392);
				match(EQUAL_TO);
				setState(393);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(395);
				value();
				setState(396);
				match(NOT_EQUAL_TO);
				setState(397);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(399);
				value();
				setState(400);
				match(GREATER_THAN_OR_EQUAL);
				setState(401);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(403);
				value();
				setState(404);
				match(LESS_THAN_OR_EQUAL);
				setState(405);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(407);
				value();
				setState(408);
				match(OR);
				setState(409);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(411);
				value();
				setState(412);
				match(AND);
				setState(413);
				boolexpr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(415);
				match(NOT);
				setState(416);
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
			setState(421);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(419);
				identifier();
				}
				break;
			case PI:
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(420);
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
			setState(423);
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
			setState(425);
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
			setState(427);
			match(T__9);
			setState(431);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__9) | (1L << OPEN_BRACKET) | (1L << OPEN_CURLEY) | (1L << ADD) | (1L << NOT) | (1L << TRUE) | (1L << FALSE) | (1L << IDENTIFIER) | (1L << PI) | (1L << STRING) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(428);
				expression(0);
				}
				}
				setState(433);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(438);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(434);
				match(T__3);
				setState(435);
				expression(0);
				}
				}
				setState(440);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(441);
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
			setState(443);
			match(OPEN_CURLEY);
			setState(450);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(444);
				string();
				setState(445);
				match(T__2);
				setState(446);
				data();
				}
				}
				setState(452);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(453);
			match(T__3);
			setState(460);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(454);
				string();
				setState(455);
				match(T__2);
				setState(456);
				data();
				}
				}
				setState(462);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(463);
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
			setState(465);
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
			setState(470);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(467);
				string();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(469);
				data();
				}
				break;
			}
			setState(472);
			match(ADD);
			setState(476);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				{
				setState(473);
				string();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(475);
				data();
				}
				break;
			}
			setState(486);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(478);
					match(ADD);
					setState(482);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
					case 1:
						{
						setState(479);
						string();
						}
						break;
					case 2:
						{
						}
						break;
					case 3:
						{
						setState(481);
						data();
						}
						break;
					}
					}
					} 
				}
				setState(488);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
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
			setState(497);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(489);
				string();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(490);
				list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(491);
				number();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(492);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(493);
				object();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(494);
				value();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(495);
				classInit();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(496);
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
			setState(506);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				}
				break;
			case 2:
				{
				setState(500);
				match(T__11);
				}
				break;
			case 3:
				{
				setState(501);
				match(T__12);
				}
				break;
			case 4:
				{
				setState(502);
				match(T__13);
				}
				break;
			case 5:
				{
				setState(503);
				match(T__14);
				}
				break;
			case 6:
				{
				setState(504);
				match(T__15);
				}
				break;
			case 7:
				{
				setState(505);
				match(T__16);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(512);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_type);
					setState(508);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(509);
					match(T__17);
					}
					} 
				}
				setState(514);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3>\u0206\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\3\2\3\2"+
		"\7\2W\n\2\f\2\16\2Z\13\2\3\2\7\2]\n\2\f\2\16\2`\13\2\3\2\5\2c\n\2\3\3"+
		"\7\3f\n\3\f\3\16\3i\13\3\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u0086"+
		"\n\7\3\b\3\b\3\b\3\b\3\b\7\b\u008d\n\b\f\b\16\b\u0090\13\b\5\b\u0092\n"+
		"\b\3\t\3\t\3\t\3\t\3\t\5\t\u0099\n\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\7\n\u00a2"+
		"\n\n\f\n\16\n\u00a5\13\n\3\n\3\n\3\n\3\n\3\13\7\13\u00ac\n\13\f\13\16"+
		"\13\u00af\13\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\7\16\u00ba\n\16\f"+
		"\16\16\16\u00bd\13\16\3\16\3\16\7\16\u00c1\n\16\f\16\16\16\u00c4\13\16"+
		"\3\17\3\17\7\17\u00c8\n\17\f\17\16\17\u00cb\13\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\5\17\u00e0\n\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\22\6\22\u00ed\n\22\r\22\16\22\u00ee\3\23\3\23\3\23\3\23\3\23\3\24\3"+
		"\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3"+
		"\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3"+
		"\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u0129\n\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u0136\n\34\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u0146\n\35"+
		"\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\5\37\u015a\n\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\7\37\u0168\n\37\f\37\16\37\u016b\13\37\3 \3"+
		" \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \5 \u017d\n \3!\3!\3!\3!\3"+
		"!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3"+
		"!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u01a4\n!\3\"\3\"\5\"\u01a8\n\"\3#\3#\3"+
		"$\3$\3%\3%\7%\u01b0\n%\f%\16%\u01b3\13%\3%\3%\7%\u01b7\n%\f%\16%\u01ba"+
		"\13%\3%\3%\3&\3&\3&\3&\3&\7&\u01c3\n&\f&\16&\u01c6\13&\3&\3&\3&\3&\3&"+
		"\7&\u01cd\n&\f&\16&\u01d0\13&\3&\3&\3\'\3\'\3(\3(\3(\5(\u01d9\n(\3(\3"+
		"(\3(\3(\5(\u01df\n(\3(\3(\3(\3(\5(\u01e5\n(\7(\u01e7\n(\f(\16(\u01ea\13"+
		"(\3)\3)\3)\3)\3)\3)\3)\3)\5)\u01f4\n)\3*\3*\3*\3*\3*\3*\3*\5*\u01fd\n"+
		"*\3*\3*\7*\u0201\n*\f*\16*\u0204\13*\3*\3\u00ee\4<R+\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPR\2\3\4\288;;\2"+
		"\u0237\2b\3\2\2\2\4g\3\2\2\2\6j\3\2\2\2\bl\3\2\2\2\np\3\2\2\2\f\u0085"+
		"\3\2\2\2\16\u0091\3\2\2\2\20\u0098\3\2\2\2\22\u009d\3\2\2\2\24\u00ad\3"+
		"\2\2\2\26\u00b0\3\2\2\2\30\u00b3\3\2\2\2\32\u00bb\3\2\2\2\34\u00df\3\2"+
		"\2\2\36\u00e1\3\2\2\2 \u00e6\3\2\2\2\"\u00ec\3\2\2\2$\u00f0\3\2\2\2&\u00f5"+
		"\3\2\2\2(\u00fa\3\2\2\2*\u00ff\3\2\2\2,\u0104\3\2\2\2.\u0108\3\2\2\2\60"+
		"\u010c\3\2\2\2\62\u0112\3\2\2\2\64\u011a\3\2\2\2\66\u0135\3\2\2\28\u0145"+
		"\3\2\2\2:\u0147\3\2\2\2<\u0159\3\2\2\2>\u017c\3\2\2\2@\u01a3\3\2\2\2B"+
		"\u01a7\3\2\2\2D\u01a9\3\2\2\2F\u01ab\3\2\2\2H\u01ad\3\2\2\2J\u01bd\3\2"+
		"\2\2L\u01d3\3\2\2\2N\u01d8\3\2\2\2P\u01f3\3\2\2\2R\u01fc\3\2\2\2TX\5\4"+
		"\3\2UW\5\f\7\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y^\3\2\2\2ZX\3\2"+
		"\2\2[]\5\34\17\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_c\3\2\2\2`"+
		"^\3\2\2\2ac\7\2\2\3bT\3\2\2\2ba\3\2\2\2c\3\3\2\2\2df\5\n\6\2ed\3\2\2\2"+
		"fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2h\5\3\2\2\2ig\3\2\2\2jk\5\b\5\2k\7\3\2\2"+
		"\2lm\7\3\2\2mn\5D#\2no\7\31\2\2o\t\3\2\2\2pq\7\4\2\2qr\5D#\2rs\7\31\2"+
		"\2s\13\3\2\2\2tu\7\60\2\2uv\5D#\2vw\7\25\2\2wx\5\16\b\2xy\7\26\2\2yz\7"+
		"\5\2\2z{\5R*\2{|\5\34\17\2|\u0086\3\2\2\2}~\5D#\2~\177\7\25\2\2\177\u0080"+
		"\5\16\b\2\u0080\u0081\7\26\2\2\u0081\u0082\7\5\2\2\u0082\u0083\5R*\2\u0083"+
		"\u0084\5\34\17\2\u0084\u0086\3\2\2\2\u0085t\3\2\2\2\u0085}\3\2\2\2\u0086"+
		"\r\3\2\2\2\u0087\u0092\5\20\t\2\u0088\u0092\3\2\2\2\u0089\u008e\5\20\t"+
		"\2\u008a\u008b\7\6\2\2\u008b\u008d\5\20\t\2\u008c\u008a\3\2\2\2\u008d"+
		"\u0090\3\2\2\2\u008e\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0092\3\2"+
		"\2\2\u0090\u008e\3\2\2\2\u0091\u0087\3\2\2\2\u0091\u0088\3\2\2\2\u0091"+
		"\u0089\3\2\2\2\u0092\17\3\2\2\2\u0093\u0099\5D#\2\u0094\u0099\3\2\2\2"+
		"\u0095\u0099\5<\37\2\u0096\u0099\3\2\2\2\u0097\u0099\5\"\22\2\u0098\u0093"+
		"\3\2\2\2\u0098\u0094\3\2\2\2\u0098\u0095\3\2\2\2\u0098\u0096\3\2\2\2\u0098"+
		"\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009b\7\5\2\2\u009b\u009c\5R"+
		"*\2\u009c\21\3\2\2\2\u009d\u009e\7\7\2\2\u009e\u00a3\5D#\2\u009f\u00a0"+
		"\7\b\2\2\u00a0\u00a2\5D#\2\u00a1\u009f\3\2\2\2\u00a2\u00a5\3\2\2\2\u00a3"+
		"\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a6\3\2\2\2\u00a5\u00a3\3\2"+
		"\2\2\u00a6\u00a7\7\27\2\2\u00a7\u00a8\5\24\13\2\u00a8\u00a9\7\30\2\2\u00a9"+
		"\23\3\2\2\2\u00aa\u00ac\5\f\7\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2"+
		"\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\25\3\2\2\2\u00af\u00ad"+
		"\3\2\2\2\u00b0\u00b1\7\t\2\2\u00b1\u00b2\5\30\r\2\u00b2\27\3\2\2\2\u00b3"+
		"\u00b4\5D#\2\u00b4\u00b5\7\25\2\2\u00b5\u00b6\5\32\16\2\u00b6\u00b7\7"+
		"\26\2\2\u00b7\31\3\2\2\2\u00b8\u00ba\5<\37\2\u00b9\u00b8\3\2\2\2\u00ba"+
		"\u00bd\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00c2\3\2"+
		"\2\2\u00bd\u00bb\3\2\2\2\u00be\u00bf\7\6\2\2\u00bf\u00c1\5<\37\2\u00c0"+
		"\u00be\3\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c2\u00c3\3\2"+
		"\2\2\u00c3\33\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c5\u00c9\7\27\2\2\u00c6\u00c8"+
		"\5\34\17\2\u00c7\u00c6\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2"+
		"\u00c9\u00ca\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00e0"+
		"\7\30\2\2\u00cd\u00e0\5\36\20\2\u00ce\u00e0\5 \21\2\u00cf\u00e0\5$\23"+
		"\2\u00d0\u00e0\5&\24\2\u00d1\u00e0\5(\25\2\u00d2\u00e0\5*\26\2\u00d3\u00e0"+
		"\5,\27\2\u00d4\u00e0\5.\30\2\u00d5\u00e0\5\60\31\2\u00d6\u00e0\5\62\32"+
		"\2\u00d7\u00e0\5\64\33\2\u00d8\u00e0\5\66\34\2\u00d9\u00e0\58\35\2\u00da"+
		"\u00e0\5:\36\2\u00db\u00dc\5<\37\2\u00dc\u00dd\7\31\2\2\u00dd\u00e0\3"+
		"\2\2\2\u00de\u00e0\7\31\2\2\u00df\u00c5\3\2\2\2\u00df\u00cd\3\2\2\2\u00df"+
		"\u00ce\3\2\2\2\u00df\u00cf\3\2\2\2\u00df\u00d0\3\2\2\2\u00df\u00d1\3\2"+
		"\2\2\u00df\u00d2\3\2\2\2\u00df\u00d3\3\2\2\2\u00df\u00d4\3\2\2\2\u00df"+
		"\u00d5\3\2\2\2\u00df\u00d6\3\2\2\2\u00df\u00d7\3\2\2\2\u00df\u00d8\3\2"+
		"\2\2\u00df\u00d9\3\2\2\2\u00df\u00da\3\2\2\2\u00df\u00db\3\2\2\2\u00df"+
		"\u00de\3\2\2\2\u00e0\35\3\2\2\2\u00e1\u00e2\5D#\2\u00e2\u00e3\7\'\2\2"+
		"\u00e3\u00e4\5<\37\2\u00e4\u00e5\7\31\2\2\u00e5\37\3\2\2\2\u00e6\u00e7"+
		"\7\n\2\2\u00e7\u00e8\7\27\2\2\u00e8\u00e9\5\"\22\2\u00e9\u00ea\7\30\2"+
		"\2\u00ea!\3\2\2\2\u00eb\u00ed\13\2\2\2\u00ec\u00eb\3\2\2\2\u00ed\u00ee"+
		"\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef#\3\2\2\2\u00f0"+
		"\u00f1\5D#\2\u00f1\u00f2\7(\2\2\u00f2\u00f3\5B\"\2\u00f3\u00f4\7\31\2"+
		"\2\u00f4%\3\2\2\2\u00f5\u00f6\5D#\2\u00f6\u00f7\7)\2\2\u00f7\u00f8\5B"+
		"\"\2\u00f8\u00f9\7\31\2\2\u00f9\'\3\2\2\2\u00fa\u00fb\5D#\2\u00fb\u00fc"+
		"\7*\2\2\u00fc\u00fd\5B\"\2\u00fd\u00fe\7\31\2\2\u00fe)\3\2\2\2\u00ff\u0100"+
		"\5D#\2\u0100\u0101\7+\2\2\u0101\u0102\5B\"\2\u0102\u0103\7\31\2\2\u0103"+
		"+\3\2\2\2\u0104\u0105\5D#\2\u0105\u0106\7.\2\2\u0106\u0107\7\31\2\2\u0107"+
		"-\3\2\2\2\u0108\u0109\5D#\2\u0109\u010a\7/\2\2\u010a\u010b\7\31\2\2\u010b"+
		"/\3\2\2\2\u010c\u010d\7,\2\2\u010d\u010e\7\25\2\2\u010e\u010f\5@!\2\u010f"+
		"\u0110\7\26\2\2\u0110\u0111\5\34\17\2\u0111\61\3\2\2\2\u0112\u0113\7,"+
		"\2\2\u0113\u0114\7\25\2\2\u0114\u0115\5@!\2\u0115\u0116\7\26\2\2\u0116"+
		"\u0117\5\34\17\2\u0117\u0118\7-\2\2\u0118\u0119\5\34\17\2\u0119\63\3\2"+
		"\2\2\u011a\u011b\7\62\2\2\u011b\u011c\7\25\2\2\u011c\u011d\5@!\2\u011d"+
		"\u011e\7\26\2\2\u011e\u011f\5\34\17\2\u011f\65\3\2\2\2\u0120\u0121\7\63"+
		"\2\2\u0121\u0122\7\25\2\2\u0122\u0123\58\35\2\u0123\u0124\5@!\2\u0124"+
		"\u0128\7\31\2\2\u0125\u0129\5,\27\2\u0126\u0129\3\2\2\2\u0127\u0129\5"+
		".\30\2\u0128\u0125\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0127\3\2\2\2\u0129"+
		"\u012a\3\2\2\2\u012a\u012b\7\26\2\2\u012b\u012c\5\34\17\2\u012c\u0136"+
		"\3\2\2\2\u012d\u012e\7\63\2\2\u012e\u012f\7\25\2\2\u012f\u0130\58\35\2"+
		"\u0130\u0131\7\13\2\2\u0131\u0132\5B\"\2\u0132\u0133\7\26\2\2\u0133\u0134"+
		"\5\34\17\2\u0134\u0136\3\2\2\2\u0135\u0120\3\2\2\2\u0135\u012d\3\2\2\2"+
		"\u0136\67\3\2\2\2\u0137\u0138\7\61\2\2\u0138\u0139\5D#\2\u0139\u013a\7"+
		"\'\2\2\u013a\u013b\5<\37\2\u013b\u013c\7\31\2\2\u013c\u0146\3\2\2\2\u013d"+
		"\u013e\7\61\2\2\u013e\u013f\5D#\2\u013f\u0140\7\5\2\2\u0140\u0141\5R*"+
		"\2\u0141\u0142\7\'\2\2\u0142\u0143\5<\37\2\u0143\u0144\7\31\2\2\u0144"+
		"\u0146\3\2\2\2\u0145\u0137\3\2\2\2\u0145\u013d\3\2\2\2\u01469\3\2\2\2"+
		"\u0147\u0148\7\64\2\2\u0148\u0149\5<\37\2\u0149\u014a\7\31\2\2\u014a;"+
		"\3\2\2\2\u014b\u014c\b\37\1\2\u014c\u014d\7\25\2\2\u014d\u014e\5<\37\2"+
		"\u014e\u014f\7\26\2\2\u014f\u015a\3\2\2\2\u0150\u015a\5\26\f\2\u0151\u015a"+
		"\5\30\r\2\u0152\u015a\5B\"\2\u0153\u015a\5D#\2\u0154\u015a\5@!\2\u0155"+
		"\u015a\5L\'\2\u0156\u015a\5J&\2\u0157\u015a\5H%\2\u0158\u015a\5N(\2\u0159"+
		"\u014b\3\2\2\2\u0159\u0150\3\2\2\2\u0159\u0151\3\2\2\2\u0159\u0152\3\2"+
		"\2\2\u0159\u0153\3\2\2\2\u0159\u0154\3\2\2\2\u0159\u0155\3\2\2\2\u0159"+
		"\u0156\3\2\2\2\u0159\u0157\3\2\2\2\u0159\u0158\3\2\2\2\u015a\u0169\3\2"+
		"\2\2\u015b\u015c\f\6\2\2\u015c\u015d\7\32\2\2\u015d\u0168\5<\37\7\u015e"+
		"\u015f\f\5\2\2\u015f\u0160\7\33\2\2\u0160\u0168\5<\37\6\u0161\u0162\f"+
		"\4\2\2\u0162\u0163\7\34\2\2\u0163\u0168\5<\37\5\u0164\u0165\f\3\2\2\u0165"+
		"\u0166\7\35\2\2\u0166\u0168\5<\37\4\u0167\u015b\3\2\2\2\u0167\u015e\3"+
		"\2\2\2\u0167\u0161\3\2\2\2\u0167\u0164\3\2\2\2\u0168\u016b\3\2\2\2\u0169"+
		"\u0167\3\2\2\2\u0169\u016a\3\2\2\2\u016a=\3\2\2\2\u016b\u0169\3\2\2\2"+
		"\u016c\u016d\5<\37\2\u016d\u016e\7\32\2\2\u016e\u016f\5<\37\2\u016f\u017d"+
		"\3\2\2\2\u0170\u0171\5<\37\2\u0171\u0172\7\33\2\2\u0172\u0173\5<\37\2"+
		"\u0173\u017d\3\2\2\2\u0174\u0175\5<\37\2\u0175\u0176\7\34\2\2\u0176\u0177"+
		"\5<\37\2\u0177\u017d\3\2\2\2\u0178\u0179\5<\37\2\u0179\u017a\7\35\2\2"+
		"\u017a\u017b\5<\37\2\u017b\u017d\3\2\2\2\u017c\u016c\3\2\2\2\u017c\u0170"+
		"\3\2\2\2\u017c\u0174\3\2\2\2\u017c\u0178\3\2\2\2\u017d?\3\2\2\2\u017e"+
		"\u01a4\5B\"\2\u017f\u01a4\7\65\2\2\u0180\u01a4\7\66\2\2\u0181\u0182\5"+
		"B\"\2\u0182\u0183\7\36\2\2\u0183\u0184\5@!\2\u0184\u01a4\3\2\2\2\u0185"+
		"\u0186\5B\"\2\u0186\u0187\7\37\2\2\u0187\u0188\5@!\2\u0188\u01a4\3\2\2"+
		"\2\u0189\u018a\5B\"\2\u018a\u018b\7 \2\2\u018b\u018c\5@!\2\u018c\u01a4"+
		"\3\2\2\2\u018d\u018e\5B\"\2\u018e\u018f\7!\2\2\u018f\u0190\5@!\2\u0190"+
		"\u01a4\3\2\2\2\u0191\u0192\5B\"\2\u0192\u0193\7\"\2\2\u0193\u0194\5@!"+
		"\2\u0194\u01a4\3\2\2\2\u0195\u0196\5B\"\2\u0196\u0197\7#\2\2\u0197\u0198"+
		"\5@!\2\u0198\u01a4\3\2\2\2\u0199\u019a\5B\"\2\u019a\u019b\7$\2\2\u019b"+
		"\u019c\5@!\2\u019c\u01a4\3\2\2\2\u019d\u019e\5B\"\2\u019e\u019f\7%\2\2"+
		"\u019f\u01a0\5@!\2\u01a0\u01a4\3\2\2\2\u01a1\u01a2\7&\2\2\u01a2\u01a4"+
		"\5@!\2\u01a3\u017e\3\2\2\2\u01a3\u017f\3\2\2\2\u01a3\u0180\3\2\2\2\u01a3"+
		"\u0181\3\2\2\2\u01a3\u0185\3\2\2\2\u01a3\u0189\3\2\2\2\u01a3\u018d\3\2"+
		"\2\2\u01a3\u0191\3\2\2\2\u01a3\u0195\3\2\2\2\u01a3\u0199\3\2\2\2\u01a3"+
		"\u019d\3\2\2\2\u01a3\u01a1\3\2\2\2\u01a4A\3\2\2\2\u01a5\u01a8\5D#\2\u01a6"+
		"\u01a8\5F$\2\u01a7\u01a5\3\2\2\2\u01a7\u01a6\3\2\2\2\u01a8C\3\2\2\2\u01a9"+
		"\u01aa\7\67\2\2\u01aaE\3\2\2\2\u01ab\u01ac\t\2\2\2\u01acG\3\2\2\2\u01ad"+
		"\u01b1\7\f\2\2\u01ae\u01b0\5<\37\2\u01af\u01ae\3\2\2\2\u01b0\u01b3\3\2"+
		"\2\2\u01b1\u01af\3\2\2\2\u01b1\u01b2\3\2\2\2\u01b2\u01b8\3\2\2\2\u01b3"+
		"\u01b1\3\2\2\2\u01b4\u01b5\7\6\2\2\u01b5\u01b7\5<\37\2\u01b6\u01b4\3\2"+
		"\2\2\u01b7\u01ba\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8\u01b9\3\2\2\2\u01b9"+
		"\u01bb\3\2\2\2\u01ba\u01b8\3\2\2\2\u01bb\u01bc\7\r\2\2\u01bcI\3\2\2\2"+
		"\u01bd\u01c4\7\27\2\2\u01be\u01bf\5L\'\2\u01bf\u01c0\7\5\2\2\u01c0\u01c1"+
		"\5P)\2\u01c1\u01c3\3\2\2\2\u01c2\u01be\3\2\2\2\u01c3\u01c6\3\2\2\2\u01c4"+
		"\u01c2\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5\u01c7\3\2\2\2\u01c6\u01c4\3\2"+
		"\2\2\u01c7\u01ce\7\6\2\2\u01c8\u01c9\5L\'\2\u01c9\u01ca\7\5\2\2\u01ca"+
		"\u01cb\5P)\2\u01cb\u01cd\3\2\2\2\u01cc\u01c8\3\2\2\2\u01cd\u01d0\3\2\2"+
		"\2\u01ce\u01cc\3\2\2\2\u01ce\u01cf\3\2\2\2\u01cf\u01d1\3\2\2\2\u01d0\u01ce"+
		"\3\2\2\2\u01d1\u01d2\7\30\2\2\u01d2K\3\2\2\2\u01d3\u01d4\79\2\2\u01d4"+
		"M\3\2\2\2\u01d5\u01d9\5L\'\2\u01d6\u01d9\3\2\2\2\u01d7\u01d9\5P)\2\u01d8"+
		"\u01d5\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d7\3\2\2\2\u01d9\u01da\3\2"+
		"\2\2\u01da\u01de\7\32\2\2\u01db\u01df\5L\'\2\u01dc\u01df\3\2\2\2\u01dd"+
		"\u01df\5P)\2\u01de\u01db\3\2\2\2\u01de\u01dc\3\2\2\2\u01de\u01dd\3\2\2"+
		"\2\u01df\u01e8\3\2\2\2\u01e0\u01e4\7\32\2\2\u01e1\u01e5\5L\'\2\u01e2\u01e5"+
		"\3\2\2\2\u01e3\u01e5\5P)\2\u01e4\u01e1\3\2\2\2\u01e4\u01e2\3\2\2\2\u01e4"+
		"\u01e3\3\2\2\2\u01e5\u01e7\3\2\2\2\u01e6\u01e0\3\2\2\2\u01e7\u01ea\3\2"+
		"\2\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9O\3\2\2\2\u01ea\u01e8"+
		"\3\2\2\2\u01eb\u01f4\5L\'\2\u01ec\u01f4\5H%\2\u01ed\u01f4\5F$\2\u01ee"+
		"\u01f4\5@!\2\u01ef\u01f4\5J&\2\u01f0\u01f4\5B\"\2\u01f1\u01f4\5\26\f\2"+
		"\u01f2\u01f4\5\30\r\2\u01f3\u01eb\3\2\2\2\u01f3\u01ec\3\2\2\2\u01f3\u01ed"+
		"\3\2\2\2\u01f3\u01ee\3\2\2\2\u01f3\u01ef\3\2\2\2\u01f3\u01f0\3\2\2\2\u01f3"+
		"\u01f1\3\2\2\2\u01f3\u01f2\3\2\2\2\u01f4Q\3\2\2\2\u01f5\u01fd\b*\1\2\u01f6"+
		"\u01fd\7\16\2\2\u01f7\u01fd\7\17\2\2\u01f8\u01fd\7\20\2\2\u01f9\u01fd"+
		"\7\21\2\2\u01fa\u01fd\7\22\2\2\u01fb\u01fd\7\23\2\2\u01fc\u01f5\3\2\2"+
		"\2\u01fc\u01f6\3\2\2\2\u01fc\u01f7\3\2\2\2\u01fc\u01f8\3\2\2\2\u01fc\u01f9"+
		"\3\2\2\2\u01fc\u01fa\3\2\2\2\u01fc\u01fb\3\2\2\2\u01fd\u0202\3\2\2\2\u01fe"+
		"\u01ff\f\3\2\2\u01ff\u0201\7\24\2\2\u0200\u01fe\3\2\2\2\u0201\u0204\3"+
		"\2\2\2\u0202\u0200\3\2\2\2\u0202\u0203\3\2\2\2\u0203S\3\2\2\2\u0204\u0202"+
		"\3\2\2\2%X^bg\u0085\u008e\u0091\u0098\u00a3\u00ad\u00bb\u00c2\u00c9\u00df"+
		"\u00ee\u0128\u0135\u0145\u0159\u0167\u0169\u017c\u01a3\u01a7\u01b1\u01b8"+
		"\u01c4\u01ce\u01d8\u01de\u01e4\u01e8\u01f3\u01fc\u0202";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}