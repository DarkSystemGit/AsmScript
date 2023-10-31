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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, OPEN_BRACKET=8, 
		CLOSE_BRACKET=9, OPEN_CURLEY=10, CLOSE_CURLEY=11, END_STMT=12, ADD=13, 
		SUB=14, MUL=15, DIV=16, GREATER_THAN=17, LESS_THAN=18, EQUAL_TO=19, NOT_EQUAL_TO=20, 
		GREATER_THAN_OR_EQUAL=21, LESS_THAN_OR_EQUAL=22, OR=23, AND=24, ASSIGN=25, 
		ADDASSIGN=26, SUBASSIGN=27, MULASSIGN=28, DIVASSIGN=29, INCREMENT=30, 
		DECREMENT=31, DEF=32, VAR=33, STR=34, IF=35, WHILE=36, RETURN=37, TRUE=38, 
		FALSE=39, IDENTIFIER=40, NUMBER=41, PI=42, E=43, I=44, QUOTED_TEXT=45, 
		LINECOMMENT=46, BLOCKCOMMENT=47, WHITESPACE=48;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "OPEN_BRACKET", 
			"CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", 
			"MUL", "DIV", "GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", 
			"GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", "OR", "AND", "ASSIGN", 
			"ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", "INCREMENT", "DECREMENT", 
			"DEF", "VAR", "STR", "IF", "WHILE", "RETURN", "TRUE", "FALSE", "IDENTIFIER", 
			"NUMBER", "PI", "E", "I", "INT", "QUOTED_TEXT", "LINECOMMENT", "BLOCKCOMMENT", 
			"WHITESPACE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\62\u0138\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22"+
		"\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27"+
		"\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34"+
		"\3\35\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3!\3!"+
		"\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3$\3$\3$\3%\3%\3%\3%\3%\3%\3"+
		"&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3)\3)\7)\u00f1"+
		"\n)\f)\16)\u00f4\13)\3*\5*\u00f7\n*\3*\3*\3*\6*\u00fc\n*\r*\16*\u00fd"+
		"\5*\u0100\n*\3+\3+\3+\3,\3,\3-\3-\3.\3.\3.\7.\u010c\n.\f.\16.\u010f\13"+
		".\5.\u0111\n.\3/\3/\7/\u0115\n/\f/\16/\u0118\13/\3/\3/\3\60\3\60\3\60"+
		"\3\60\7\60\u0120\n\60\f\60\16\60\u0123\13\60\3\60\3\60\3\61\3\61\3\61"+
		"\3\61\7\61\u012b\n\61\f\61\16\61\u012e\13\61\3\61\3\61\3\61\3\61\3\61"+
		"\3\62\3\62\3\62\3\62\3\u012c\2\63\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31"+
		"\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[\2]/"+
		"_\60a\61c\62\3\2\t\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\3\2\63;\5\2\f\f\17"+
		"\17$$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u013f\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2"+
		"\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2"+
		"\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2"+
		"\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2"+
		"\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2"+
		"\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y"+
		"\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\3e\3\2\2\2\5k\3\2"+
		"\2\2\7s\3\2\2\2\tu\3\2\2\2\13\177\3\2\2\2\r\u0081\3\2\2\2\17\u0083\3\2"+
		"\2\2\21\u0086\3\2\2\2\23\u0088\3\2\2\2\25\u008a\3\2\2\2\27\u008c\3\2\2"+
		"\2\31\u008e\3\2\2\2\33\u0090\3\2\2\2\35\u0092\3\2\2\2\37\u0094\3\2\2\2"+
		"!\u0096\3\2\2\2#\u0098\3\2\2\2%\u009a\3\2\2\2\'\u009c\3\2\2\2)\u009f\3"+
		"\2\2\2+\u00a2\3\2\2\2-\u00a5\3\2\2\2/\u00a8\3\2\2\2\61\u00ab\3\2\2\2\63"+
		"\u00ae\3\2\2\2\65\u00b0\3\2\2\2\67\u00b3\3\2\2\29\u00b6\3\2\2\2;\u00b9"+
		"\3\2\2\2=\u00bc\3\2\2\2?\u00bf\3\2\2\2A\u00c2\3\2\2\2C\u00cb\3\2\2\2E"+
		"\u00cf\3\2\2\2G\u00d3\3\2\2\2I\u00d6\3\2\2\2K\u00dc\3\2\2\2M\u00e3\3\2"+
		"\2\2O\u00e8\3\2\2\2Q\u00ee\3\2\2\2S\u00f6\3\2\2\2U\u0101\3\2\2\2W\u0104"+
		"\3\2\2\2Y\u0106\3\2\2\2[\u0110\3\2\2\2]\u0112\3\2\2\2_\u011b\3\2\2\2a"+
		"\u0126\3\2\2\2c\u0134\3\2\2\2ef\7p\2\2fg\7c\2\2gh\7o\2\2hi\7g\2\2ij\7"+
		"<\2\2j\4\3\2\2\2kl\7k\2\2lm\7o\2\2mn\7r\2\2no\7q\2\2op\7t\2\2pq\7v\2\2"+
		"qr\7<\2\2r\6\3\2\2\2st\7.\2\2t\b\3\2\2\2uv\7a\2\2vw\7a\2\2wx\7V\2\2xy"+
		"\7k\2\2yz\7D\2\2z{\7c\2\2{|\7u\2\2|}\7k\2\2}~\7e\2\2~\n\3\2\2\2\177\u0080"+
		"\7]\2\2\u0080\f\3\2\2\2\u0081\u0082\7_\2\2\u0082\16\3\2\2\2\u0083\u0084"+
		"\7]\2\2\u0084\u0085\7]\2\2\u0085\20\3\2\2\2\u0086\u0087\7*\2\2\u0087\22"+
		"\3\2\2\2\u0088\u0089\7+\2\2\u0089\24\3\2\2\2\u008a\u008b\7}\2\2\u008b"+
		"\26\3\2\2\2\u008c\u008d\7\177\2\2\u008d\30\3\2\2\2\u008e\u008f\7=\2\2"+
		"\u008f\32\3\2\2\2\u0090\u0091\7-\2\2\u0091\34\3\2\2\2\u0092\u0093\7/\2"+
		"\2\u0093\36\3\2\2\2\u0094\u0095\7,\2\2\u0095 \3\2\2\2\u0096\u0097\7\61"+
		"\2\2\u0097\"\3\2\2\2\u0098\u0099\7@\2\2\u0099$\3\2\2\2\u009a\u009b\7>"+
		"\2\2\u009b&\3\2\2\2\u009c\u009d\7?\2\2\u009d\u009e\7?\2\2\u009e(\3\2\2"+
		"\2\u009f\u00a0\7#\2\2\u00a0\u00a1\7?\2\2\u00a1*\3\2\2\2\u00a2\u00a3\7"+
		"@\2\2\u00a3\u00a4\7?\2\2\u00a4,\3\2\2\2\u00a5\u00a6\7>\2\2\u00a6\u00a7"+
		"\7?\2\2\u00a7.\3\2\2\2\u00a8\u00a9\7~\2\2\u00a9\u00aa\7~\2\2\u00aa\60"+
		"\3\2\2\2\u00ab\u00ac\7(\2\2\u00ac\u00ad\7(\2\2\u00ad\62\3\2\2\2\u00ae"+
		"\u00af\7?\2\2\u00af\64\3\2\2\2\u00b0\u00b1\7-\2\2\u00b1\u00b2\7?\2\2\u00b2"+
		"\66\3\2\2\2\u00b3\u00b4\7/\2\2\u00b4\u00b5\7?\2\2\u00b58\3\2\2\2\u00b6"+
		"\u00b7\7,\2\2\u00b7\u00b8\7?\2\2\u00b8:\3\2\2\2\u00b9\u00ba\7\61\2\2\u00ba"+
		"\u00bb\7?\2\2\u00bb<\3\2\2\2\u00bc\u00bd\7-\2\2\u00bd\u00be\7-\2\2\u00be"+
		">\3\2\2\2\u00bf\u00c0\7/\2\2\u00c0\u00c1\7/\2\2\u00c1@\3\2\2\2\u00c2\u00c3"+
		"\7h\2\2\u00c3\u00c4\7w\2\2\u00c4\u00c5\7p\2\2\u00c5\u00c6\7e\2\2\u00c6"+
		"\u00c7\7v\2\2\u00c7\u00c8\7k\2\2\u00c8\u00c9\7q\2\2\u00c9\u00ca\7p\2\2"+
		"\u00caB\3\2\2\2\u00cb\u00cc\7x\2\2\u00cc\u00cd\7c\2\2\u00cd\u00ce\7t\2"+
		"\2\u00ceD\3\2\2\2\u00cf\u00d0\7u\2\2\u00d0\u00d1\7v\2\2\u00d1\u00d2\7"+
		"t\2\2\u00d2F\3\2\2\2\u00d3\u00d4\7k\2\2\u00d4\u00d5\7h\2\2\u00d5H\3\2"+
		"\2\2\u00d6\u00d7\7y\2\2\u00d7\u00d8\7j\2\2\u00d8\u00d9\7k\2\2\u00d9\u00da"+
		"\7n\2\2\u00da\u00db\7g\2\2\u00dbJ\3\2\2\2\u00dc\u00dd\7t\2\2\u00dd\u00de"+
		"\7g\2\2\u00de\u00df\7v\2\2\u00df\u00e0\7w\2\2\u00e0\u00e1\7t\2\2\u00e1"+
		"\u00e2\7p\2\2\u00e2L\3\2\2\2\u00e3\u00e4\7v\2\2\u00e4\u00e5\7t\2\2\u00e5"+
		"\u00e6\7w\2\2\u00e6\u00e7\7g\2\2\u00e7N\3\2\2\2\u00e8\u00e9\7h\2\2\u00e9"+
		"\u00ea\7c\2\2\u00ea\u00eb\7n\2\2\u00eb\u00ec\7u\2\2\u00ec\u00ed\7g\2\2"+
		"\u00edP\3\2\2\2\u00ee\u00f2\t\2\2\2\u00ef\u00f1\t\3\2\2\u00f0\u00ef\3"+
		"\2\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3"+
		"R\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f5\u00f7\7/\2\2\u00f6\u00f5\3\2\2\2\u00f6"+
		"\u00f7\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00ff\5[.\2\u00f9\u00fb\7\60"+
		"\2\2\u00fa\u00fc\t\4\2\2\u00fb\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd"+
		"\u00fb\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u0100\3\2\2\2\u00ff\u00f9\3\2"+
		"\2\2\u00ff\u0100\3\2\2\2\u0100T\3\2\2\2\u0101\u0102\7r\2\2\u0102\u0103"+
		"\7k\2\2\u0103V\3\2\2\2\u0104\u0105\7g\2\2\u0105X\3\2\2\2\u0106\u0107\7"+
		"k\2\2\u0107Z\3\2\2\2\u0108\u0111\7\62\2\2\u0109\u010d\t\5\2\2\u010a\u010c"+
		"\t\4\2\2\u010b\u010a\3\2\2\2\u010c\u010f\3\2\2\2\u010d\u010b\3\2\2\2\u010d"+
		"\u010e\3\2\2\2\u010e\u0111\3\2\2\2\u010f\u010d\3\2\2\2\u0110\u0108\3\2"+
		"\2\2\u0110\u0109\3\2\2\2\u0111\\\3\2\2\2\u0112\u0116\7$\2\2\u0113\u0115"+
		"\n\6\2\2\u0114\u0113\3\2\2\2\u0115\u0118\3\2\2\2\u0116\u0114\3\2\2\2\u0116"+
		"\u0117\3\2\2\2\u0117\u0119\3\2\2\2\u0118\u0116\3\2\2\2\u0119\u011a\7$"+
		"\2\2\u011a^\3\2\2\2\u011b\u011c\7\61\2\2\u011c\u011d\7\61\2\2\u011d\u0121"+
		"\3\2\2\2\u011e\u0120\n\7\2\2\u011f\u011e\3\2\2\2\u0120\u0123\3\2\2\2\u0121"+
		"\u011f\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0124\3\2\2\2\u0123\u0121\3\2"+
		"\2\2\u0124\u0125\b\60\2\2\u0125`\3\2\2\2\u0126\u0127\7\61\2\2\u0127\u0128"+
		"\7,\2\2\u0128\u012c\3\2\2\2\u0129\u012b\13\2\2\2\u012a\u0129\3\2\2\2\u012b"+
		"\u012e\3\2\2\2\u012c\u012d\3\2\2\2\u012c\u012a\3\2\2\2\u012d\u012f\3\2"+
		"\2\2\u012e\u012c\3\2\2\2\u012f\u0130\7,\2\2\u0130\u0131\7\61\2\2\u0131"+
		"\u0132\3\2\2\2\u0132\u0133\b\61\2\2\u0133b\3\2\2\2\u0134\u0135\t\b\2\2"+
		"\u0135\u0136\3\2\2\2\u0136\u0137\b\62\2\2\u0137d\3\2\2\2\f\2\u00f2\u00f6"+
		"\u00fd\u00ff\u010d\u0110\u0116\u0121\u012c\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}