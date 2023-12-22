// Generated from /home/pdarksystem/ICEScript/antlr/grammars/Glacier by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GlacierParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		OPEN_BRACKET=18, CLOSE_BRACKET=19, OPEN_CURLEY=20, CLOSE_CURLEY=21, END_STMT=22, 
		ADD=23, SUB=24, MUL=25, DIV=26, GREATER_THAN=27, LESS_THAN=28, EQUAL_TO=29, 
		NOT_EQUAL_TO=30, GREATER_THAN_OR_EQUAL=31, LESS_THAN_OR_EQUAL=32, OR=33, 
		AND=34, NOT=35, ASSIGN=36, ADDASSIGN=37, SUBASSIGN=38, MULASSIGN=39, DIVASSIGN=40, 
		IF=41, ELSE=42, INCREMENT=43, DECREMENT=44, DEF=45, VAR=46, WHILE=47, 
		FOR=48, RETURN=49, TRUE=50, FALSE=51, IDENTIFIER=52, PI=53, STRING=54, 
		LIST=55, NUMBER=56, LINECOMMENT=57, BLOCKCOMMENT=58, WHITESPACE=59;
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
			"'__LLVM'", "'in'", "'['", "']'", "'object'", "'void'", "'str'", "'number'", 
			"'bool'", "'[]'", "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", 
			"'/'", "'>'", "'<'", "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", 
			"'!'", "'='", "'+='", "'-='", "'*='", "'/='", "'if'", "'else'", "'++'", 
			"'--'", "'function'", "'var'", "'while'", "'for'", "'return'", "'true'", 
			"'false'", null, "'$pi'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
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
	public String getGrammarFileName() { return "Glacier"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GlacierParser(TokenStream input) {
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
		public TerminalNode EOF() { return getToken(GlacierParser.EOF, 0); }
		public ScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_script; }
	}

	public final ScriptContext script() throws RecognitionException {
		ScriptContext _localctx = new ScriptContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_script);
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
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(89);
						statement();
						}
						} 
					}
					setState(94);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(98);
					include();
					}
					} 
				}
				setState(103);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
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
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
		public TerminalNode DEF() { return getToken(GlacierParser.DEF, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public Func_paramsContext func_params() {
			return getRuleContext(Func_paramsContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
		public TerminalNode OPEN_CURLEY() { return getToken(GlacierParser.OPEN_CURLEY, 0); }
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode CLOSE_CURLEY() { return getToken(GlacierParser.CLOSE_CURLEY, 0); }
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
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public MethodparamsContext methodparams() {
			return getRuleContext(MethodparamsContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
			setState(182);
			expression(0);
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(183);
				match(T__3);
				setState(184);
				expression(0);
				}
				}
				setState(189);
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
		public TerminalNode OPEN_CURLEY() { return getToken(GlacierParser.OPEN_CURLEY, 0); }
		public TerminalNode CLOSE_CURLEY() { return getToken(GlacierParser.CLOSE_CURLEY, 0); }
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
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_statement);
		try {
			int _alt;
			setState(216);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(190);
				match(OPEN_CURLEY);
				setState(194);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(191);
						statement();
						}
						} 
					}
					setState(196);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
				}
				setState(197);
				match(CLOSE_CURLEY);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				assign_stmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(199);
				asm_stmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(200);
				add_assign_stmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(201);
				sub_assign_stmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(202);
				mul_assign_stmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(203);
				div_assign_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(204);
				inc_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(205);
				dec_stmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(206);
				if_stmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(207);
				if_else_stmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(208);
				while_stmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(209);
				for_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(210);
				var_stmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(211);
				return_stmt();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(212);
				expression(0);
				setState(213);
				match(END_STMT);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(215);
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
		public TerminalNode ASSIGN() { return getToken(GlacierParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(218);
			identifier();
			setState(219);
			match(ASSIGN);
			setState(220);
			expression(0);
			setState(221);
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
		public TerminalNode OPEN_CURLEY() { return getToken(GlacierParser.OPEN_CURLEY, 0); }
		public AnyContext any() {
			return getRuleContext(AnyContext.class,0);
		}
		public TerminalNode CLOSE_CURLEY() { return getToken(GlacierParser.CLOSE_CURLEY, 0); }
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
			setState(223);
			match(T__7);
			setState(224);
			match(OPEN_CURLEY);
			setState(225);
			any();
			setState(226);
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
			setState(229); 
			_errHandler.sync(this);
			_alt = 1+1;
			do {
				switch (_alt) {
				case 1+1:
					{
					{
					setState(228);
					matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(231); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		public TerminalNode ADDASSIGN() { return getToken(GlacierParser.ADDASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(233);
			identifier();
			setState(234);
			match(ADDASSIGN);
			setState(235);
			value();
			setState(236);
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
		public TerminalNode SUBASSIGN() { return getToken(GlacierParser.SUBASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(238);
			identifier();
			setState(239);
			match(SUBASSIGN);
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

	public static class Mul_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode MULASSIGN() { return getToken(GlacierParser.MULASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(243);
			identifier();
			setState(244);
			match(MULASSIGN);
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

	public static class Div_assign_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode DIVASSIGN() { return getToken(GlacierParser.DIVASSIGN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(248);
			identifier();
			setState(249);
			match(DIVASSIGN);
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

	public static class Inc_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode INCREMENT() { return getToken(GlacierParser.INCREMENT, 0); }
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(253);
			identifier();
			setState(254);
			match(INCREMENT);
			setState(255);
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
		public TerminalNode DECREMENT() { return getToken(GlacierParser.DECREMENT, 0); }
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(257);
			identifier();
			setState(258);
			match(DECREMENT);
			setState(259);
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
		public TerminalNode IF() { return getToken(GlacierParser.IF, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
			setState(261);
			match(IF);
			setState(262);
			match(OPEN_BRACKET);
			setState(263);
			boolexpr();
			setState(264);
			match(CLOSE_BRACKET);
			setState(265);
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
		public TerminalNode IF() { return getToken(GlacierParser.IF, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(GlacierParser.ELSE, 0); }
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
			setState(267);
			match(IF);
			setState(268);
			match(OPEN_BRACKET);
			setState(269);
			boolexpr();
			setState(270);
			match(CLOSE_BRACKET);
			setState(271);
			statement();
			setState(272);
			match(ELSE);
			setState(273);
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
		public TerminalNode WHILE() { return getToken(GlacierParser.WHILE, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
			setState(275);
			match(WHILE);
			setState(276);
			match(OPEN_BRACKET);
			setState(277);
			boolexpr();
			setState(278);
			match(CLOSE_BRACKET);
			setState(279);
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
		public TerminalNode FOR() { return getToken(GlacierParser.FOR, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public Var_stmtContext var_stmt() {
			return getRuleContext(Var_stmtContext.class,0);
		}
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
			setState(302);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(281);
				match(FOR);
				setState(282);
				match(OPEN_BRACKET);
				setState(283);
				var_stmt();
				setState(284);
				boolexpr();
				setState(285);
				match(END_STMT);
				setState(289);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
				case 1:
					{
					setState(286);
					inc_stmt();
					}
					break;
				case 2:
					{
					}
					break;
				case 3:
					{
					setState(288);
					dec_stmt();
					}
					break;
				}
				setState(291);
				match(CLOSE_BRACKET);
				setState(292);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(294);
				match(FOR);
				setState(295);
				match(OPEN_BRACKET);
				setState(296);
				var_stmt();
				setState(297);
				match(T__8);
				setState(298);
				value();
				setState(299);
				match(CLOSE_BRACKET);
				setState(300);
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
		public TerminalNode VAR() { return getToken(GlacierParser.VAR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(GlacierParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(318);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(304);
				match(VAR);
				setState(305);
				identifier();
				setState(306);
				match(ASSIGN);
				setState(307);
				expression(0);
				setState(308);
				match(END_STMT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(310);
				match(VAR);
				setState(311);
				identifier();
				setState(312);
				match(T__2);
				setState(313);
				type(0);
				setState(314);
				match(ASSIGN);
				setState(315);
				expression(0);
				setState(316);
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
		public TerminalNode RETURN() { return getToken(GlacierParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode END_STMT() { return getToken(GlacierParser.END_STMT, 0); }
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
			setState(320);
			match(RETURN);
			setState(321);
			expression(0);
			setState(322);
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
		public TerminalNode OPEN_BRACKET() { return getToken(GlacierParser.OPEN_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(GlacierParser.CLOSE_BRACKET, 0); }
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
		public TerminalNode ADD() { return getToken(GlacierParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(GlacierParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(GlacierParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(GlacierParser.DIV, 0); }
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
			setState(338);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(325);
				match(OPEN_BRACKET);
				setState(326);
				expression(0);
				setState(327);
				match(CLOSE_BRACKET);
				}
				break;
			case 2:
				{
				setState(329);
				classInit();
				}
				break;
			case 3:
				{
				setState(330);
				methodcall();
				}
				break;
			case 4:
				{
				setState(331);
				value();
				}
				break;
			case 5:
				{
				setState(332);
				identifier();
				}
				break;
			case 6:
				{
				setState(333);
				boolexpr();
				}
				break;
			case 7:
				{
				setState(334);
				string();
				}
				break;
			case 8:
				{
				setState(335);
				object();
				}
				break;
			case 9:
				{
				setState(336);
				list();
				}
				break;
			case 10:
				{
				setState(337);
				string_concat();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(354);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(352);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(340);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(341);
						match(ADD);
						setState(342);
						expression(5);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(343);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(344);
						match(SUB);
						setState(345);
						expression(4);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(346);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(347);
						match(MUL);
						setState(348);
						expression(3);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(349);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(350);
						match(DIV);
						setState(351);
						expression(2);
						}
						break;
					}
					} 
				}
				setState(356);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
		public TerminalNode ADD() { return getToken(GlacierParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(GlacierParser.SUB, 0); }
		public TerminalNode MUL() { return getToken(GlacierParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(GlacierParser.DIV, 0); }
		public MathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_math; }
	}

	public final MathContext math() throws RecognitionException {
		MathContext _localctx = new MathContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_math);
		try {
			setState(373);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(357);
				expression(0);
				setState(358);
				match(ADD);
				setState(359);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(361);
				expression(0);
				setState(362);
				match(SUB);
				setState(363);
				expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(365);
				expression(0);
				setState(366);
				match(MUL);
				setState(367);
				expression(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(369);
				expression(0);
				setState(370);
				match(DIV);
				setState(371);
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
		public TerminalNode TRUE() { return getToken(GlacierParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(GlacierParser.FALSE, 0); }
		public TerminalNode GREATER_THAN() { return getToken(GlacierParser.GREATER_THAN, 0); }
		public BoolexprContext boolexpr() {
			return getRuleContext(BoolexprContext.class,0);
		}
		public TerminalNode LESS_THAN() { return getToken(GlacierParser.LESS_THAN, 0); }
		public TerminalNode EQUAL_TO() { return getToken(GlacierParser.EQUAL_TO, 0); }
		public TerminalNode NOT_EQUAL_TO() { return getToken(GlacierParser.NOT_EQUAL_TO, 0); }
		public TerminalNode GREATER_THAN_OR_EQUAL() { return getToken(GlacierParser.GREATER_THAN_OR_EQUAL, 0); }
		public TerminalNode LESS_THAN_OR_EQUAL() { return getToken(GlacierParser.LESS_THAN_OR_EQUAL, 0); }
		public TerminalNode OR() { return getToken(GlacierParser.OR, 0); }
		public TerminalNode AND() { return getToken(GlacierParser.AND, 0); }
		public TerminalNode NOT() { return getToken(GlacierParser.NOT, 0); }
		public BoolexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolexpr; }
	}

	public final BoolexprContext boolexpr() throws RecognitionException {
		BoolexprContext _localctx = new BoolexprContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_boolexpr);
		try {
			setState(412);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(375);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(376);
				match(TRUE);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(377);
				match(FALSE);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(378);
				value();
				setState(379);
				match(GREATER_THAN);
				setState(380);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(382);
				value();
				setState(383);
				match(LESS_THAN);
				setState(384);
				boolexpr();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(386);
				value();
				setState(387);
				match(EQUAL_TO);
				setState(388);
				boolexpr();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(390);
				value();
				setState(391);
				match(NOT_EQUAL_TO);
				setState(392);
				boolexpr();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(394);
				value();
				setState(395);
				match(GREATER_THAN_OR_EQUAL);
				setState(396);
				boolexpr();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(398);
				value();
				setState(399);
				match(LESS_THAN_OR_EQUAL);
				setState(400);
				boolexpr();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(402);
				value();
				setState(403);
				match(OR);
				setState(404);
				boolexpr();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(406);
				value();
				setState(407);
				match(AND);
				setState(408);
				boolexpr();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(410);
				match(NOT);
				setState(411);
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
			setState(416);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(414);
				identifier();
				}
				break;
			case PI:
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(415);
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
		public TerminalNode IDENTIFIER() { return getToken(GlacierParser.IDENTIFIER, 0); }
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
			setState(418);
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
		public TerminalNode NUMBER() { return getToken(GlacierParser.NUMBER, 0); }
		public TerminalNode PI() { return getToken(GlacierParser.PI, 0); }
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
			setState(420);
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
			setState(435);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(422);
				match(T__9);
				{
				setState(423);
				expression(0);
				setState(428);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(424);
					match(T__3);
					setState(425);
					expression(0);
					}
					}
					setState(430);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(431);
				match(T__10);
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
				setState(434);
				match(T__10);
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

	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode OPEN_CURLEY() { return getToken(GlacierParser.OPEN_CURLEY, 0); }
		public TerminalNode CLOSE_CURLEY() { return getToken(GlacierParser.CLOSE_CURLEY, 0); }
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
			setState(437);
			match(OPEN_CURLEY);
			setState(444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(438);
				string();
				setState(439);
				match(T__2);
				setState(440);
				data();
				}
				}
				setState(446);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			{
			setState(447);
			match(T__3);
			setState(454);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==STRING) {
				{
				{
				setState(448);
				string();
				setState(449);
				match(T__2);
				setState(450);
				data();
				}
				}
				setState(456);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(457);
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
		public TerminalNode STRING() { return getToken(GlacierParser.STRING, 0); }
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
			setState(459);
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
		public List<TerminalNode> ADD() { return getTokens(GlacierParser.ADD); }
		public TerminalNode ADD(int i) {
			return getToken(GlacierParser.ADD, i);
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
			setState(464);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(461);
				string();
				}
				break;
			case 2:
				{
				}
				break;
			case 3:
				{
				setState(463);
				data();
				}
				break;
			}
			setState(466);
			match(ADD);
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
			setState(480);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
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
					}
					} 
				}
				setState(482);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
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
			setState(491);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(483);
				string();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(484);
				list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(485);
				number();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(486);
				boolexpr();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(487);
				object();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(488);
				value();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(489);
				classInit();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(490);
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
			setState(499);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				{
				}
				break;
			case 2:
				{
				setState(494);
				match(T__11);
				}
				break;
			case 3:
				{
				setState(495);
				match(T__12);
				}
				break;
			case 4:
				{
				setState(496);
				match(T__13);
				}
				break;
			case 5:
				{
				setState(497);
				match(T__14);
				}
				break;
			case 6:
				{
				setState(498);
				match(T__15);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(505);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_type);
					setState(501);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(502);
					match(T__16);
					}
					} 
				}
				setState(507);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3=\u01ff\4\2\t\2\4"+
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
		"\13\u00af\13\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\7\16\u00bc"+
		"\n\16\f\16\16\16\u00bf\13\16\3\17\3\17\7\17\u00c3\n\17\f\17\16\17\u00c6"+
		"\13\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00db\n\17\3\20\3\20\3\20\3\20\3\20"+
		"\3\21\3\21\3\21\3\21\3\21\3\22\6\22\u00e8\n\22\r\22\16\22\u00e9\3\23\3"+
		"\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3"+
		"\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3"+
		"\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u0124"+
		"\n\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\5\34\u0131"+
		"\n\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\5\35\u0141\n\35\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u0155\n\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u0163\n\37\f\37\16"+
		"\37\u0166\13\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \3 \5 \u0178"+
		"\n \3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!"+
		"\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u019f\n!\3\"\3\"\5\""+
		"\u01a3\n\"\3#\3#\3$\3$\3%\3%\3%\3%\7%\u01ad\n%\f%\16%\u01b0\13%\3%\3%"+
		"\3%\3%\5%\u01b6\n%\3&\3&\3&\3&\3&\7&\u01bd\n&\f&\16&\u01c0\13&\3&\3&\3"+
		"&\3&\3&\7&\u01c7\n&\f&\16&\u01ca\13&\3&\3&\3\'\3\'\3(\3(\3(\5(\u01d3\n"+
		"(\3(\3(\3(\3(\5(\u01d9\n(\3(\3(\3(\3(\5(\u01df\n(\7(\u01e1\n(\f(\16(\u01e4"+
		"\13(\3)\3)\3)\3)\3)\3)\3)\3)\5)\u01ee\n)\3*\3*\3*\3*\3*\3*\5*\u01f6\n"+
		"*\3*\3*\7*\u01fa\n*\f*\16*\u01fd\13*\3*\3\u00e9\4<R+\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPR\2\3\4\2\67\67"+
		"::\2\u022f\2b\3\2\2\2\4g\3\2\2\2\6j\3\2\2\2\bl\3\2\2\2\np\3\2\2\2\f\u0085"+
		"\3\2\2\2\16\u0091\3\2\2\2\20\u0098\3\2\2\2\22\u009d\3\2\2\2\24\u00ad\3"+
		"\2\2\2\26\u00b0\3\2\2\2\30\u00b3\3\2\2\2\32\u00b8\3\2\2\2\34\u00da\3\2"+
		"\2\2\36\u00dc\3\2\2\2 \u00e1\3\2\2\2\"\u00e7\3\2\2\2$\u00eb\3\2\2\2&\u00f0"+
		"\3\2\2\2(\u00f5\3\2\2\2*\u00fa\3\2\2\2,\u00ff\3\2\2\2.\u0103\3\2\2\2\60"+
		"\u0107\3\2\2\2\62\u010d\3\2\2\2\64\u0115\3\2\2\2\66\u0130\3\2\2\28\u0140"+
		"\3\2\2\2:\u0142\3\2\2\2<\u0154\3\2\2\2>\u0177\3\2\2\2@\u019e\3\2\2\2B"+
		"\u01a2\3\2\2\2D\u01a4\3\2\2\2F\u01a6\3\2\2\2H\u01b5\3\2\2\2J\u01b7\3\2"+
		"\2\2L\u01cd\3\2\2\2N\u01d2\3\2\2\2P\u01ed\3\2\2\2R\u01f5\3\2\2\2TX\5\4"+
		"\3\2UW\5\f\7\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y^\3\2\2\2ZX\3\2"+
		"\2\2[]\5\34\17\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_c\3\2\2\2`"+
		"^\3\2\2\2ac\7\2\2\3bT\3\2\2\2ba\3\2\2\2c\3\3\2\2\2df\5\n\6\2ed\3\2\2\2"+
		"fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2h\5\3\2\2\2ig\3\2\2\2jk\5\b\5\2k\7\3\2\2"+
		"\2lm\7\3\2\2mn\5D#\2no\7\30\2\2o\t\3\2\2\2pq\7\4\2\2qr\5D#\2rs\7\30\2"+
		"\2s\13\3\2\2\2tu\7/\2\2uv\5D#\2vw\7\24\2\2wx\5\16\b\2xy\7\25\2\2yz\7\5"+
		"\2\2z{\5R*\2{|\5\34\17\2|\u0086\3\2\2\2}~\5D#\2~\177\7\24\2\2\177\u0080"+
		"\5\16\b\2\u0080\u0081\7\25\2\2\u0081\u0082\7\5\2\2\u0082\u0083\5R*\2\u0083"+
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
		"\2\2\u00a6\u00a7\7\26\2\2\u00a7\u00a8\5\24\13\2\u00a8\u00a9\7\27\2\2\u00a9"+
		"\23\3\2\2\2\u00aa\u00ac\5\f\7\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2"+
		"\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\25\3\2\2\2\u00af\u00ad"+
		"\3\2\2\2\u00b0\u00b1\7\t\2\2\u00b1\u00b2\5\30\r\2\u00b2\27\3\2\2\2\u00b3"+
		"\u00b4\5D#\2\u00b4\u00b5\7\24\2\2\u00b5\u00b6\5\32\16\2\u00b6\u00b7\7"+
		"\25\2\2\u00b7\31\3\2\2\2\u00b8\u00bd\5<\37\2\u00b9\u00ba\7\6\2\2\u00ba"+
		"\u00bc\5<\37\2\u00bb\u00b9\3\2\2\2\u00bc\u00bf\3\2\2\2\u00bd\u00bb\3\2"+
		"\2\2\u00bd\u00be\3\2\2\2\u00be\33\3\2\2\2\u00bf\u00bd\3\2\2\2\u00c0\u00c4"+
		"\7\26\2\2\u00c1\u00c3\5\34\17\2\u00c2\u00c1\3\2\2\2\u00c3\u00c6\3\2\2"+
		"\2\u00c4\u00c2\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00c7\3\2\2\2\u00c6\u00c4"+
		"\3\2\2\2\u00c7\u00db\7\27\2\2\u00c8\u00db\5\36\20\2\u00c9\u00db\5 \21"+
		"\2\u00ca\u00db\5$\23\2\u00cb\u00db\5&\24\2\u00cc\u00db\5(\25\2\u00cd\u00db"+
		"\5*\26\2\u00ce\u00db\5,\27\2\u00cf\u00db\5.\30\2\u00d0\u00db\5\60\31\2"+
		"\u00d1\u00db\5\62\32\2\u00d2\u00db\5\64\33\2\u00d3\u00db\5\66\34\2\u00d4"+
		"\u00db\58\35\2\u00d5\u00db\5:\36\2\u00d6\u00d7\5<\37\2\u00d7\u00d8\7\30"+
		"\2\2\u00d8\u00db\3\2\2\2\u00d9\u00db\7\30\2\2\u00da\u00c0\3\2\2\2\u00da"+
		"\u00c8\3\2\2\2\u00da\u00c9\3\2\2\2\u00da\u00ca\3\2\2\2\u00da\u00cb\3\2"+
		"\2\2\u00da\u00cc\3\2\2\2\u00da\u00cd\3\2\2\2\u00da\u00ce\3\2\2\2\u00da"+
		"\u00cf\3\2\2\2\u00da\u00d0\3\2\2\2\u00da\u00d1\3\2\2\2\u00da\u00d2\3\2"+
		"\2\2\u00da\u00d3\3\2\2\2\u00da\u00d4\3\2\2\2\u00da\u00d5\3\2\2\2\u00da"+
		"\u00d6\3\2\2\2\u00da\u00d9\3\2\2\2\u00db\35\3\2\2\2\u00dc\u00dd\5D#\2"+
		"\u00dd\u00de\7&\2\2\u00de\u00df\5<\37\2\u00df\u00e0\7\30\2\2\u00e0\37"+
		"\3\2\2\2\u00e1\u00e2\7\n\2\2\u00e2\u00e3\7\26\2\2\u00e3\u00e4\5\"\22\2"+
		"\u00e4\u00e5\7\27\2\2\u00e5!\3\2\2\2\u00e6\u00e8\13\2\2\2\u00e7\u00e6"+
		"\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea"+
		"#\3\2\2\2\u00eb\u00ec\5D#\2\u00ec\u00ed\7\'\2\2\u00ed\u00ee\5B\"\2\u00ee"+
		"\u00ef\7\30\2\2\u00ef%\3\2\2\2\u00f0\u00f1\5D#\2\u00f1\u00f2\7(\2\2\u00f2"+
		"\u00f3\5B\"\2\u00f3\u00f4\7\30\2\2\u00f4\'\3\2\2\2\u00f5\u00f6\5D#\2\u00f6"+
		"\u00f7\7)\2\2\u00f7\u00f8\5B\"\2\u00f8\u00f9\7\30\2\2\u00f9)\3\2\2\2\u00fa"+
		"\u00fb\5D#\2\u00fb\u00fc\7*\2\2\u00fc\u00fd\5B\"\2\u00fd\u00fe\7\30\2"+
		"\2\u00fe+\3\2\2\2\u00ff\u0100\5D#\2\u0100\u0101\7-\2\2\u0101\u0102\7\30"+
		"\2\2\u0102-\3\2\2\2\u0103\u0104\5D#\2\u0104\u0105\7.\2\2\u0105\u0106\7"+
		"\30\2\2\u0106/\3\2\2\2\u0107\u0108\7+\2\2\u0108\u0109\7\24\2\2\u0109\u010a"+
		"\5@!\2\u010a\u010b\7\25\2\2\u010b\u010c\5\34\17\2\u010c\61\3\2\2\2\u010d"+
		"\u010e\7+\2\2\u010e\u010f\7\24\2\2\u010f\u0110\5@!\2\u0110\u0111\7\25"+
		"\2\2\u0111\u0112\5\34\17\2\u0112\u0113\7,\2\2\u0113\u0114\5\34\17\2\u0114"+
		"\63\3\2\2\2\u0115\u0116\7\61\2\2\u0116\u0117\7\24\2\2\u0117\u0118\5@!"+
		"\2\u0118\u0119\7\25\2\2\u0119\u011a\5\34\17\2\u011a\65\3\2\2\2\u011b\u011c"+
		"\7\62\2\2\u011c\u011d\7\24\2\2\u011d\u011e\58\35\2\u011e\u011f\5@!\2\u011f"+
		"\u0123\7\30\2\2\u0120\u0124\5,\27\2\u0121\u0124\3\2\2\2\u0122\u0124\5"+
		".\30\2\u0123\u0120\3\2\2\2\u0123\u0121\3\2\2\2\u0123\u0122\3\2\2\2\u0124"+
		"\u0125\3\2\2\2\u0125\u0126\7\25\2\2\u0126\u0127\5\34\17\2\u0127\u0131"+
		"\3\2\2\2\u0128\u0129\7\62\2\2\u0129\u012a\7\24\2\2\u012a\u012b\58\35\2"+
		"\u012b\u012c\7\13\2\2\u012c\u012d\5B\"\2\u012d\u012e\7\25\2\2\u012e\u012f"+
		"\5\34\17\2\u012f\u0131\3\2\2\2\u0130\u011b\3\2\2\2\u0130\u0128\3\2\2\2"+
		"\u0131\67\3\2\2\2\u0132\u0133\7\60\2\2\u0133\u0134\5D#\2\u0134\u0135\7"+
		"&\2\2\u0135\u0136\5<\37\2\u0136\u0137\7\30\2\2\u0137\u0141\3\2\2\2\u0138"+
		"\u0139\7\60\2\2\u0139\u013a\5D#\2\u013a\u013b\7\5\2\2\u013b\u013c\5R*"+
		"\2\u013c\u013d\7&\2\2\u013d\u013e\5<\37\2\u013e\u013f\7\30\2\2\u013f\u0141"+
		"\3\2\2\2\u0140\u0132\3\2\2\2\u0140\u0138\3\2\2\2\u01419\3\2\2\2\u0142"+
		"\u0143\7\63\2\2\u0143\u0144\5<\37\2\u0144\u0145\7\30\2\2\u0145;\3\2\2"+
		"\2\u0146\u0147\b\37\1\2\u0147\u0148\7\24\2\2\u0148\u0149\5<\37\2\u0149"+
		"\u014a\7\25\2\2\u014a\u0155\3\2\2\2\u014b\u0155\5\26\f\2\u014c\u0155\5"+
		"\30\r\2\u014d\u0155\5B\"\2\u014e\u0155\5D#\2\u014f\u0155\5@!\2\u0150\u0155"+
		"\5L\'\2\u0151\u0155\5J&\2\u0152\u0155\5H%\2\u0153\u0155\5N(\2\u0154\u0146"+
		"\3\2\2\2\u0154\u014b\3\2\2\2\u0154\u014c\3\2\2\2\u0154\u014d\3\2\2\2\u0154"+
		"\u014e\3\2\2\2\u0154\u014f\3\2\2\2\u0154\u0150\3\2\2\2\u0154\u0151\3\2"+
		"\2\2\u0154\u0152\3\2\2\2\u0154\u0153\3\2\2\2\u0155\u0164\3\2\2\2\u0156"+
		"\u0157\f\6\2\2\u0157\u0158\7\31\2\2\u0158\u0163\5<\37\7\u0159\u015a\f"+
		"\5\2\2\u015a\u015b\7\32\2\2\u015b\u0163\5<\37\6\u015c\u015d\f\4\2\2\u015d"+
		"\u015e\7\33\2\2\u015e\u0163\5<\37\5\u015f\u0160\f\3\2\2\u0160\u0161\7"+
		"\34\2\2\u0161\u0163\5<\37\4\u0162\u0156\3\2\2\2\u0162\u0159\3\2\2\2\u0162"+
		"\u015c\3\2\2\2\u0162\u015f\3\2\2\2\u0163\u0166\3\2\2\2\u0164\u0162\3\2"+
		"\2\2\u0164\u0165\3\2\2\2\u0165=\3\2\2\2\u0166\u0164\3\2\2\2\u0167\u0168"+
		"\5<\37\2\u0168\u0169\7\31\2\2\u0169\u016a\5<\37\2\u016a\u0178\3\2\2\2"+
		"\u016b\u016c\5<\37\2\u016c\u016d\7\32\2\2\u016d\u016e\5<\37\2\u016e\u0178"+
		"\3\2\2\2\u016f\u0170\5<\37\2\u0170\u0171\7\33\2\2\u0171\u0172\5<\37\2"+
		"\u0172\u0178\3\2\2\2\u0173\u0174\5<\37\2\u0174\u0175\7\34\2\2\u0175\u0176"+
		"\5<\37\2\u0176\u0178\3\2\2\2\u0177\u0167\3\2\2\2\u0177\u016b\3\2\2\2\u0177"+
		"\u016f\3\2\2\2\u0177\u0173\3\2\2\2\u0178?\3\2\2\2\u0179\u019f\5B\"\2\u017a"+
		"\u019f\7\64\2\2\u017b\u019f\7\65\2\2\u017c\u017d\5B\"\2\u017d\u017e\7"+
		"\35\2\2\u017e\u017f\5@!\2\u017f\u019f\3\2\2\2\u0180\u0181\5B\"\2\u0181"+
		"\u0182\7\36\2\2\u0182\u0183\5@!\2\u0183\u019f\3\2\2\2\u0184\u0185\5B\""+
		"\2\u0185\u0186\7\37\2\2\u0186\u0187\5@!\2\u0187\u019f\3\2\2\2\u0188\u0189"+
		"\5B\"\2\u0189\u018a\7 \2\2\u018a\u018b\5@!\2\u018b\u019f\3\2\2\2\u018c"+
		"\u018d\5B\"\2\u018d\u018e\7!\2\2\u018e\u018f\5@!\2\u018f\u019f\3\2\2\2"+
		"\u0190\u0191\5B\"\2\u0191\u0192\7\"\2\2\u0192\u0193\5@!\2\u0193\u019f"+
		"\3\2\2\2\u0194\u0195\5B\"\2\u0195\u0196\7#\2\2\u0196\u0197\5@!\2\u0197"+
		"\u019f\3\2\2\2\u0198\u0199\5B\"\2\u0199\u019a\7$\2\2\u019a\u019b\5@!\2"+
		"\u019b\u019f\3\2\2\2\u019c\u019d\7%\2\2\u019d\u019f\5@!\2\u019e\u0179"+
		"\3\2\2\2\u019e\u017a\3\2\2\2\u019e\u017b\3\2\2\2\u019e\u017c\3\2\2\2\u019e"+
		"\u0180\3\2\2\2\u019e\u0184\3\2\2\2\u019e\u0188\3\2\2\2\u019e\u018c\3\2"+
		"\2\2\u019e\u0190\3\2\2\2\u019e\u0194\3\2\2\2\u019e\u0198\3\2\2\2\u019e"+
		"\u019c\3\2\2\2\u019fA\3\2\2\2\u01a0\u01a3\5D#\2\u01a1\u01a3\5F$\2\u01a2"+
		"\u01a0\3\2\2\2\u01a2\u01a1\3\2\2\2\u01a3C\3\2\2\2\u01a4\u01a5\7\66\2\2"+
		"\u01a5E\3\2\2\2\u01a6\u01a7\t\2\2\2\u01a7G\3\2\2\2\u01a8\u01a9\7\f\2\2"+
		"\u01a9\u01ae\5<\37\2\u01aa\u01ab\7\6\2\2\u01ab\u01ad\5<\37\2\u01ac\u01aa"+
		"\3\2\2\2\u01ad\u01b0\3\2\2\2\u01ae\u01ac\3\2\2\2\u01ae\u01af\3\2\2\2\u01af"+
		"\u01b1\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b1\u01b2\7\r\2\2\u01b2\u01b6\3\2"+
		"\2\2\u01b3\u01b6\3\2\2\2\u01b4\u01b6\7\r\2\2\u01b5\u01a8\3\2\2\2\u01b5"+
		"\u01b3\3\2\2\2\u01b5\u01b4\3\2\2\2\u01b6I\3\2\2\2\u01b7\u01be\7\26\2\2"+
		"\u01b8\u01b9\5L\'\2\u01b9\u01ba\7\5\2\2\u01ba\u01bb\5P)\2\u01bb\u01bd"+
		"\3\2\2\2\u01bc\u01b8\3\2\2\2\u01bd\u01c0\3\2\2\2\u01be\u01bc\3\2\2\2\u01be"+
		"\u01bf\3\2\2\2\u01bf\u01c1\3\2\2\2\u01c0\u01be\3\2\2\2\u01c1\u01c8\7\6"+
		"\2\2\u01c2\u01c3\5L\'\2\u01c3\u01c4\7\5\2\2\u01c4\u01c5\5P)\2\u01c5\u01c7"+
		"\3\2\2\2\u01c6\u01c2\3\2\2\2\u01c7\u01ca\3\2\2\2\u01c8\u01c6\3\2\2\2\u01c8"+
		"\u01c9\3\2\2\2\u01c9\u01cb\3\2\2\2\u01ca\u01c8\3\2\2\2\u01cb\u01cc\7\27"+
		"\2\2\u01ccK\3\2\2\2\u01cd\u01ce\78\2\2\u01ceM\3\2\2\2\u01cf\u01d3\5L\'"+
		"\2\u01d0\u01d3\3\2\2\2\u01d1\u01d3\5P)\2\u01d2\u01cf\3\2\2\2\u01d2\u01d0"+
		"\3\2\2\2\u01d2\u01d1\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4\u01d8\7\31\2\2"+
		"\u01d5\u01d9\5L\'\2\u01d6\u01d9\3\2\2\2\u01d7\u01d9\5P)\2\u01d8\u01d5"+
		"\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d7\3\2\2\2\u01d9\u01e2\3\2\2\2\u01da"+
		"\u01de\7\31\2\2\u01db\u01df\5L\'\2\u01dc\u01df\3\2\2\2\u01dd\u01df\5P"+
		")\2\u01de\u01db\3\2\2\2\u01de\u01dc\3\2\2\2\u01de\u01dd\3\2\2\2\u01df"+
		"\u01e1\3\2\2\2\u01e0\u01da\3\2\2\2\u01e1\u01e4\3\2\2\2\u01e2\u01e0\3\2"+
		"\2\2\u01e2\u01e3\3\2\2\2\u01e3O\3\2\2\2\u01e4\u01e2\3\2\2\2\u01e5\u01ee"+
		"\5L\'\2\u01e6\u01ee\5H%\2\u01e7\u01ee\5F$\2\u01e8\u01ee\5@!\2\u01e9\u01ee"+
		"\5J&\2\u01ea\u01ee\5B\"\2\u01eb\u01ee\5\26\f\2\u01ec\u01ee\5\30\r\2\u01ed"+
		"\u01e5\3\2\2\2\u01ed\u01e6\3\2\2\2\u01ed\u01e7\3\2\2\2\u01ed\u01e8\3\2"+
		"\2\2\u01ed\u01e9\3\2\2\2\u01ed\u01ea\3\2\2\2\u01ed\u01eb\3\2\2\2\u01ed"+
		"\u01ec\3\2\2\2\u01eeQ\3\2\2\2\u01ef\u01f6\b*\1\2\u01f0\u01f6\7\16\2\2"+
		"\u01f1\u01f6\7\17\2\2\u01f2\u01f6\7\20\2\2\u01f3\u01f6\7\21\2\2\u01f4"+
		"\u01f6\7\22\2\2\u01f5\u01ef\3\2\2\2\u01f5\u01f0\3\2\2\2\u01f5\u01f1\3"+
		"\2\2\2\u01f5\u01f2\3\2\2\2\u01f5\u01f3\3\2\2\2\u01f5\u01f4\3\2\2\2\u01f6"+
		"\u01fb\3\2\2\2\u01f7\u01f8\f\3\2\2\u01f8\u01fa\7\23\2\2\u01f9\u01f7\3"+
		"\2\2\2\u01fa\u01fd\3\2\2\2\u01fb\u01f9\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc"+
		"S\3\2\2\2\u01fd\u01fb\3\2\2\2$X^bg\u0085\u008e\u0091\u0098\u00a3\u00ad"+
		"\u00bd\u00c4\u00da\u00e9\u0123\u0130\u0140\u0154\u0162\u0164\u0177\u019e"+
		"\u01a2\u01ae\u01b5\u01be\u01c8\u01d2\u01d8\u01de\u01e2\u01ed\u01f5\u01fb";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}