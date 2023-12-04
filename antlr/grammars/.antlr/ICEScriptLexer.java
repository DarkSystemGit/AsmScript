// Generated from /home/darksystem/ICEScript/antlr/grammars/ICEScript by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ICEScriptLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", 
			"END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", "LESS_THAN", 
			"EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", 
			"OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", 
			"DIVASSIGN", "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", 
			"FOR", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", "INT", "STRING", 
			"LIST", "NUMBER", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import'", "'function '", "':'", "','", "'class'", 
			"'extends'", "'__LLVM'", "'in'", "'['", "']'", "'object'", "'void'", 
			"'list'", "'str'", "'number'", "'bool'", "'[]'", "'('", "')'", "'{'", 
			"'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", 
			"'>='", "'<='", "'||'", "'&&'", "'!'", "'='", "'+='", "'-='", "'*='", 
			"'/='", "'if'", "'else'", "'++'", "'--'", "'function'", "'var'", "'while'", 
			"'for'", "'return'", "'true'", "'false'", null, "'$pi'"
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


	public ICEScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ICEScript"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2>\u0196\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n"+
		"\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16"+
		"\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\25\3\25"+
		"\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34"+
		"\3\35\3\35\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3"+
		"#\3#\3$\3$\3$\3%\3%\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3"+
		"+\3+\3,\3,\3,\3,\3,\3-\3-\3-\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3/\3/\3\60"+
		"\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63"+
		"\3\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65"+
		"\3\65\3\65\3\65\3\66\3\66\7\66\u014a\n\66\f\66\16\66\u014d\13\66\3\67"+
		"\3\67\3\67\3\67\38\38\38\78\u0156\n8\f8\168\u0159\138\58\u015b\n8\39\3"+
		"9\79\u015f\n9\f9\169\u0162\139\39\39\3:\3:\6:\u0168\n:\r:\16:\u0169\3"+
		":\3:\3;\5;\u016f\n;\3;\3;\3;\6;\u0174\n;\r;\16;\u0175\5;\u0178\n;\3<\3"+
		"<\3<\3<\7<\u017e\n<\f<\16<\u0181\13<\3<\3<\3=\3=\3=\3=\7=\u0189\n=\f="+
		"\16=\u018c\13=\3=\3=\3=\3=\3=\3>\3>\3>\3>\4\u0169\u018a\2?\3\3\5\4\7\5"+
		"\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23"+
		"%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G"+
		"%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o\2q9s:u;w<y="+
		"{>\3\2\t\4\2C\\c|\7\2\60\60\62;C\\aac|\3\2\63;\3\2\62;\5\2\f\f\17\17$"+
		"$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u019e\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2"+
		"\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2"+
		"\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2"+
		"\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2"+
		"\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M"+
		"\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2"+
		"\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2"+
		"\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u"+
		"\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\3}\3\2\2\2\5\u0083\3\2\2\2\7"+
		"\u008a\3\2\2\2\t\u0094\3\2\2\2\13\u0096\3\2\2\2\r\u0098\3\2\2\2\17\u009e"+
		"\3\2\2\2\21\u00a6\3\2\2\2\23\u00ad\3\2\2\2\25\u00b0\3\2\2\2\27\u00b2\3"+
		"\2\2\2\31\u00b4\3\2\2\2\33\u00bb\3\2\2\2\35\u00c0\3\2\2\2\37\u00c5\3\2"+
		"\2\2!\u00c9\3\2\2\2#\u00d0\3\2\2\2%\u00d5\3\2\2\2\'\u00d8\3\2\2\2)\u00da"+
		"\3\2\2\2+\u00dc\3\2\2\2-\u00de\3\2\2\2/\u00e0\3\2\2\2\61\u00e2\3\2\2\2"+
		"\63\u00e4\3\2\2\2\65\u00e6\3\2\2\2\67\u00e8\3\2\2\29\u00ea\3\2\2\2;\u00ec"+
		"\3\2\2\2=\u00ee\3\2\2\2?\u00f1\3\2\2\2A\u00f4\3\2\2\2C\u00f7\3\2\2\2E"+
		"\u00fa\3\2\2\2G\u00fd\3\2\2\2I\u0100\3\2\2\2K\u0102\3\2\2\2M\u0104\3\2"+
		"\2\2O\u0107\3\2\2\2Q\u010a\3\2\2\2S\u010d\3\2\2\2U\u0110\3\2\2\2W\u0113"+
		"\3\2\2\2Y\u0118\3\2\2\2[\u011b\3\2\2\2]\u011e\3\2\2\2_\u0127\3\2\2\2a"+
		"\u012b\3\2\2\2c\u0131\3\2\2\2e\u0135\3\2\2\2g\u013c\3\2\2\2i\u0141\3\2"+
		"\2\2k\u0147\3\2\2\2m\u014e\3\2\2\2o\u015a\3\2\2\2q\u015c\3\2\2\2s\u0165"+
		"\3\2\2\2u\u016e\3\2\2\2w\u0179\3\2\2\2y\u0184\3\2\2\2{\u0192\3\2\2\2}"+
		"~\7p\2\2~\177\7c\2\2\177\u0080\7o\2\2\u0080\u0081\7g\2\2\u0081\u0082\7"+
		"<\2\2\u0082\4\3\2\2\2\u0083\u0084\7k\2\2\u0084\u0085\7o\2\2\u0085\u0086"+
		"\7r\2\2\u0086\u0087\7q\2\2\u0087\u0088\7t\2\2\u0088\u0089\7v\2\2\u0089"+
		"\6\3\2\2\2\u008a\u008b\7h\2\2\u008b\u008c\7w\2\2\u008c\u008d\7p\2\2\u008d"+
		"\u008e\7e\2\2\u008e\u008f\7v\2\2\u008f\u0090\7k\2\2\u0090\u0091\7q\2\2"+
		"\u0091\u0092\7p\2\2\u0092\u0093\7\"\2\2\u0093\b\3\2\2\2\u0094\u0095\7"+
		"<\2\2\u0095\n\3\2\2\2\u0096\u0097\7.\2\2\u0097\f\3\2\2\2\u0098\u0099\7"+
		"e\2\2\u0099\u009a\7n\2\2\u009a\u009b\7c\2\2\u009b\u009c\7u\2\2\u009c\u009d"+
		"\7u\2\2\u009d\16\3\2\2\2\u009e\u009f\7g\2\2\u009f\u00a0\7z\2\2\u00a0\u00a1"+
		"\7v\2\2\u00a1\u00a2\7g\2\2\u00a2\u00a3\7p\2\2\u00a3\u00a4\7f\2\2\u00a4"+
		"\u00a5\7u\2\2\u00a5\20\3\2\2\2\u00a6\u00a7\7a\2\2\u00a7\u00a8\7a\2\2\u00a8"+
		"\u00a9\7N\2\2\u00a9\u00aa\7N\2\2\u00aa\u00ab\7X\2\2\u00ab\u00ac\7O\2\2"+
		"\u00ac\22\3\2\2\2\u00ad\u00ae\7k\2\2\u00ae\u00af\7p\2\2\u00af\24\3\2\2"+
		"\2\u00b0\u00b1\7]\2\2\u00b1\26\3\2\2\2\u00b2\u00b3\7_\2\2\u00b3\30\3\2"+
		"\2\2\u00b4\u00b5\7q\2\2\u00b5\u00b6\7d\2\2\u00b6\u00b7\7l\2\2\u00b7\u00b8"+
		"\7g\2\2\u00b8\u00b9\7e\2\2\u00b9\u00ba\7v\2\2\u00ba\32\3\2\2\2\u00bb\u00bc"+
		"\7x\2\2\u00bc\u00bd\7q\2\2\u00bd\u00be\7k\2\2\u00be\u00bf\7f\2\2\u00bf"+
		"\34\3\2\2\2\u00c0\u00c1\7n\2\2\u00c1\u00c2\7k\2\2\u00c2\u00c3\7u\2\2\u00c3"+
		"\u00c4\7v\2\2\u00c4\36\3\2\2\2\u00c5\u00c6\7u\2\2\u00c6\u00c7\7v\2\2\u00c7"+
		"\u00c8\7t\2\2\u00c8 \3\2\2\2\u00c9\u00ca\7p\2\2\u00ca\u00cb\7w\2\2\u00cb"+
		"\u00cc\7o\2\2\u00cc\u00cd\7d\2\2\u00cd\u00ce\7g\2\2\u00ce\u00cf\7t\2\2"+
		"\u00cf\"\3\2\2\2\u00d0\u00d1\7d\2\2\u00d1\u00d2\7q\2\2\u00d2\u00d3\7q"+
		"\2\2\u00d3\u00d4\7n\2\2\u00d4$\3\2\2\2\u00d5\u00d6\7]\2\2\u00d6\u00d7"+
		"\7_\2\2\u00d7&\3\2\2\2\u00d8\u00d9\7*\2\2\u00d9(\3\2\2\2\u00da\u00db\7"+
		"+\2\2\u00db*\3\2\2\2\u00dc\u00dd\7}\2\2\u00dd,\3\2\2\2\u00de\u00df\7\177"+
		"\2\2\u00df.\3\2\2\2\u00e0\u00e1\7=\2\2\u00e1\60\3\2\2\2\u00e2\u00e3\7"+
		"-\2\2\u00e3\62\3\2\2\2\u00e4\u00e5\7/\2\2\u00e5\64\3\2\2\2\u00e6\u00e7"+
		"\7,\2\2\u00e7\66\3\2\2\2\u00e8\u00e9\7\61\2\2\u00e98\3\2\2\2\u00ea\u00eb"+
		"\7@\2\2\u00eb:\3\2\2\2\u00ec\u00ed\7>\2\2\u00ed<\3\2\2\2\u00ee\u00ef\7"+
		"?\2\2\u00ef\u00f0\7?\2\2\u00f0>\3\2\2\2\u00f1\u00f2\7#\2\2\u00f2\u00f3"+
		"\7?\2\2\u00f3@\3\2\2\2\u00f4\u00f5\7@\2\2\u00f5\u00f6\7?\2\2\u00f6B\3"+
		"\2\2\2\u00f7\u00f8\7>\2\2\u00f8\u00f9\7?\2\2\u00f9D\3\2\2\2\u00fa\u00fb"+
		"\7~\2\2\u00fb\u00fc\7~\2\2\u00fcF\3\2\2\2\u00fd\u00fe\7(\2\2\u00fe\u00ff"+
		"\7(\2\2\u00ffH\3\2\2\2\u0100\u0101\7#\2\2\u0101J\3\2\2\2\u0102\u0103\7"+
		"?\2\2\u0103L\3\2\2\2\u0104\u0105\7-\2\2\u0105\u0106\7?\2\2\u0106N\3\2"+
		"\2\2\u0107\u0108\7/\2\2\u0108\u0109\7?\2\2\u0109P\3\2\2\2\u010a\u010b"+
		"\7,\2\2\u010b\u010c\7?\2\2\u010cR\3\2\2\2\u010d\u010e\7\61\2\2\u010e\u010f"+
		"\7?\2\2\u010fT\3\2\2\2\u0110\u0111\7k\2\2\u0111\u0112\7h\2\2\u0112V\3"+
		"\2\2\2\u0113\u0114\7g\2\2\u0114\u0115\7n\2\2\u0115\u0116\7u\2\2\u0116"+
		"\u0117\7g\2\2\u0117X\3\2\2\2\u0118\u0119\7-\2\2\u0119\u011a\7-\2\2\u011a"+
		"Z\3\2\2\2\u011b\u011c\7/\2\2\u011c\u011d\7/\2\2\u011d\\\3\2\2\2\u011e"+
		"\u011f\7h\2\2\u011f\u0120\7w\2\2\u0120\u0121\7p\2\2\u0121\u0122\7e\2\2"+
		"\u0122\u0123\7v\2\2\u0123\u0124\7k\2\2\u0124\u0125\7q\2\2\u0125\u0126"+
		"\7p\2\2\u0126^\3\2\2\2\u0127\u0128\7x\2\2\u0128\u0129\7c\2\2\u0129\u012a"+
		"\7t\2\2\u012a`\3\2\2\2\u012b\u012c\7y\2\2\u012c\u012d\7j\2\2\u012d\u012e"+
		"\7k\2\2\u012e\u012f\7n\2\2\u012f\u0130\7g\2\2\u0130b\3\2\2\2\u0131\u0132"+
		"\7h\2\2\u0132\u0133\7q\2\2\u0133\u0134\7t\2\2\u0134d\3\2\2\2\u0135\u0136"+
		"\7t\2\2\u0136\u0137\7g\2\2\u0137\u0138\7v\2\2\u0138\u0139\7w\2\2\u0139"+
		"\u013a\7t\2\2\u013a\u013b\7p\2\2\u013bf\3\2\2\2\u013c\u013d\7v\2\2\u013d"+
		"\u013e\7t\2\2\u013e\u013f\7w\2\2\u013f\u0140\7g\2\2\u0140h\3\2\2\2\u0141"+
		"\u0142\7h\2\2\u0142\u0143\7c\2\2\u0143\u0144\7n\2\2\u0144\u0145\7u\2\2"+
		"\u0145\u0146\7g\2\2\u0146j\3\2\2\2\u0147\u014b\t\2\2\2\u0148\u014a\t\3"+
		"\2\2\u0149\u0148\3\2\2\2\u014a\u014d\3\2\2\2\u014b\u0149\3\2\2\2\u014b"+
		"\u014c\3\2\2\2\u014cl\3\2\2\2\u014d\u014b\3\2\2\2\u014e\u014f\7&\2\2\u014f"+
		"\u0150\7r\2\2\u0150\u0151\7k\2\2\u0151n\3\2\2\2\u0152\u015b\7\62\2\2\u0153"+
		"\u0157\t\4\2\2\u0154\u0156\t\5\2\2\u0155\u0154\3\2\2\2\u0156\u0159\3\2"+
		"\2\2\u0157\u0155\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u015b\3\2\2\2\u0159"+
		"\u0157\3\2\2\2\u015a\u0152\3\2\2\2\u015a\u0153\3\2\2\2\u015bp\3\2\2\2"+
		"\u015c\u0160\7$\2\2\u015d\u015f\n\6\2\2\u015e\u015d\3\2\2\2\u015f\u0162"+
		"\3\2\2\2\u0160\u015e\3\2\2\2\u0160\u0161\3\2\2\2\u0161\u0163\3\2\2\2\u0162"+
		"\u0160\3\2\2\2\u0163\u0164\7$\2\2\u0164r\3\2\2\2\u0165\u0167\7]\2\2\u0166"+
		"\u0168\13\2\2\2\u0167\u0166\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\3"+
		"\2\2\2\u0169\u0167\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016c\7_\2\2\u016c"+
		"t\3\2\2\2\u016d\u016f\7/\2\2\u016e\u016d\3\2\2\2\u016e\u016f\3\2\2\2\u016f"+
		"\u0170\3\2\2\2\u0170\u0177\5o8\2\u0171\u0173\7\60\2\2\u0172\u0174\t\5"+
		"\2\2\u0173\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175\u0173\3\2\2\2\u0175"+
		"\u0176\3\2\2\2\u0176\u0178\3\2\2\2\u0177\u0171\3\2\2\2\u0177\u0178\3\2"+
		"\2\2\u0178v\3\2\2\2\u0179\u017a\7\61\2\2\u017a\u017b\7\61\2\2\u017b\u017f"+
		"\3\2\2\2\u017c\u017e\n\7\2\2\u017d\u017c\3\2\2\2\u017e\u0181\3\2\2\2\u017f"+
		"\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u0182\3\2\2\2\u0181\u017f\3\2"+
		"\2\2\u0182\u0183\b<\2\2\u0183x\3\2\2\2\u0184\u0185\7\61\2\2\u0185\u0186"+
		"\7,\2\2\u0186\u018a\3\2\2\2\u0187\u0189\13\2\2\2\u0188\u0187\3\2\2\2\u0189"+
		"\u018c\3\2\2\2\u018a\u018b\3\2\2\2\u018a\u0188\3\2\2\2\u018b\u018d\3\2"+
		"\2\2\u018c\u018a\3\2\2\2\u018d\u018e\7,\2\2\u018e\u018f\7\61\2\2\u018f"+
		"\u0190\3\2\2\2\u0190\u0191\b=\2\2\u0191z\3\2\2\2\u0192\u0193\t\b\2\2\u0193"+
		"\u0194\3\2\2\2\u0194\u0195\b>\2\2\u0195|\3\2\2\2\r\2\u014b\u0157\u015a"+
		"\u0160\u0169\u016e\u0175\u0177\u017f\u018a\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}