// Generated from /home/pdarksystem/ICEScript/antlr/grammars/ICEScript by ANTLR 4.9.2
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
		T__9=10, T__10=11, T__11=12, OPEN_BRACKET=13, CLOSE_BRACKET=14, OPEN_CURLEY=15, 
		CLOSE_CURLEY=16, END_STMT=17, ADD=18, SUB=19, MUL=20, DIV=21, GREATER_THAN=22, 
		LESS_THAN=23, EQUAL_TO=24, NOT_EQUAL_TO=25, GREATER_THAN_OR_EQUAL=26, 
		LESS_THAN_OR_EQUAL=27, OR=28, AND=29, NOT=30, ASSIGN=31, ADDASSIGN=32, 
		SUBASSIGN=33, MULASSIGN=34, DIVASSIGN=35, IF=36, ELSE=37, INCREMENT=38, 
		DECREMENT=39, DEF=40, VAR=41, WHILE=42, RETURN=43, TRUE=44, FALSE=45, 
		IDENTIFIER=46, PI=47, E=48, I=49, STRING=50, LIST=51, NUMBER=52, LINECOMMENT=53, 
		BLOCKCOMMENT=54, WHITESPACE=55;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", 
			"CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
			"LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", 
			"OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", 
			"DIVASSIGN", "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", 
			"RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", "E", "I", "INT", "STRING", 
			"LIST", "NUMBER", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import'", "'function '", "':'", "','", "'__ICE'", 
			"'void'", "'list'", "'str'", "'int'", "'float'", "'bool'", "'('", "')'", 
			"'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'=='", 
			"'!='", "'>='", "'<='", "'||'", "'&&'", "'!'", "'='", "'+='", "'-='", 
			"'*='", "'/='", "'if'", "'else'", "'++'", "'--'", "'function'", "'var'", 
			"'while'", "'return'", "'true'", "'false'", null, "'pi'", "'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", 
			"END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", "LESS_THAN", 
			"EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", 
			"OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", 
			"DIVASSIGN", "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", 
			"RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", "E", "I", "STRING", "LIST", 
			"NUMBER", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\29\u016e\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3"+
		"\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3"+
		"\31\3\32\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3"+
		"\36\3\36\3\37\3\37\3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3%\3%"+
		"\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3)\3*"+
		"\3*\3*\3*\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3."+
		"\3.\3.\3.\3.\3/\3/\7/\u011f\n/\f/\16/\u0122\13/\3\60\3\60\3\60\3\61\3"+
		"\61\3\62\3\62\3\63\3\63\3\63\7\63\u012e\n\63\f\63\16\63\u0131\13\63\5"+
		"\63\u0133\n\63\3\64\3\64\7\64\u0137\n\64\f\64\16\64\u013a\13\64\3\64\3"+
		"\64\3\65\3\65\6\65\u0140\n\65\r\65\16\65\u0141\3\65\3\65\3\66\5\66\u0147"+
		"\n\66\3\66\3\66\3\66\6\66\u014c\n\66\r\66\16\66\u014d\5\66\u0150\n\66"+
		"\3\67\3\67\3\67\3\67\7\67\u0156\n\67\f\67\16\67\u0159\13\67\3\67\3\67"+
		"\38\38\38\38\78\u0161\n8\f8\168\u0164\138\38\38\38\38\38\39\39\39\39\4"+
		"\u0141\u0162\2:\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\2"+
		"g\64i\65k\66m\67o8q9\3\2\t\4\2C\\c|\7\2\60\60\62;C\\aac|\3\2\63;\3\2\62"+
		";\5\2\f\f\17\17$$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u0176\2\3\3\2\2\2"+
		"\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2"+
		"\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2"+
		"\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2"+
		"\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2"+
		"\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2"+
		"\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2"+
		"\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W"+
		"\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2"+
		"\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2"+
		"\3s\3\2\2\2\5y\3\2\2\2\7\u0080\3\2\2\2\t\u008a\3\2\2\2\13\u008c\3\2\2"+
		"\2\r\u008e\3\2\2\2\17\u0094\3\2\2\2\21\u0099\3\2\2\2\23\u009e\3\2\2\2"+
		"\25\u00a2\3\2\2\2\27\u00a6\3\2\2\2\31\u00ac\3\2\2\2\33\u00b1\3\2\2\2\35"+
		"\u00b3\3\2\2\2\37\u00b5\3\2\2\2!\u00b7\3\2\2\2#\u00b9\3\2\2\2%\u00bb\3"+
		"\2\2\2\'\u00bd\3\2\2\2)\u00bf\3\2\2\2+\u00c1\3\2\2\2-\u00c3\3\2\2\2/\u00c5"+
		"\3\2\2\2\61\u00c7\3\2\2\2\63\u00ca\3\2\2\2\65\u00cd\3\2\2\2\67\u00d0\3"+
		"\2\2\29\u00d3\3\2\2\2;\u00d6\3\2\2\2=\u00d9\3\2\2\2?\u00db\3\2\2\2A\u00dd"+
		"\3\2\2\2C\u00e0\3\2\2\2E\u00e3\3\2\2\2G\u00e6\3\2\2\2I\u00e9\3\2\2\2K"+
		"\u00ec\3\2\2\2M\u00f1\3\2\2\2O\u00f4\3\2\2\2Q\u00f7\3\2\2\2S\u0100\3\2"+
		"\2\2U\u0104\3\2\2\2W\u010a\3\2\2\2Y\u0111\3\2\2\2[\u0116\3\2\2\2]\u011c"+
		"\3\2\2\2_\u0123\3\2\2\2a\u0126\3\2\2\2c\u0128\3\2\2\2e\u0132\3\2\2\2g"+
		"\u0134\3\2\2\2i\u013d\3\2\2\2k\u0146\3\2\2\2m\u0151\3\2\2\2o\u015c\3\2"+
		"\2\2q\u016a\3\2\2\2st\7p\2\2tu\7c\2\2uv\7o\2\2vw\7g\2\2wx\7<\2\2x\4\3"+
		"\2\2\2yz\7k\2\2z{\7o\2\2{|\7r\2\2|}\7q\2\2}~\7t\2\2~\177\7v\2\2\177\6"+
		"\3\2\2\2\u0080\u0081\7h\2\2\u0081\u0082\7w\2\2\u0082\u0083\7p\2\2\u0083"+
		"\u0084\7e\2\2\u0084\u0085\7v\2\2\u0085\u0086\7k\2\2\u0086\u0087\7q\2\2"+
		"\u0087\u0088\7p\2\2\u0088\u0089\7\"\2\2\u0089\b\3\2\2\2\u008a\u008b\7"+
		"<\2\2\u008b\n\3\2\2\2\u008c\u008d\7.\2\2\u008d\f\3\2\2\2\u008e\u008f\7"+
		"a\2\2\u008f\u0090\7a\2\2\u0090\u0091\7K\2\2\u0091\u0092\7E\2\2\u0092\u0093"+
		"\7G\2\2\u0093\16\3\2\2\2\u0094\u0095\7x\2\2\u0095\u0096\7q\2\2\u0096\u0097"+
		"\7k\2\2\u0097\u0098\7f\2\2\u0098\20\3\2\2\2\u0099\u009a\7n\2\2\u009a\u009b"+
		"\7k\2\2\u009b\u009c\7u\2\2\u009c\u009d\7v\2\2\u009d\22\3\2\2\2\u009e\u009f"+
		"\7u\2\2\u009f\u00a0\7v\2\2\u00a0\u00a1\7t\2\2\u00a1\24\3\2\2\2\u00a2\u00a3"+
		"\7k\2\2\u00a3\u00a4\7p\2\2\u00a4\u00a5\7v\2\2\u00a5\26\3\2\2\2\u00a6\u00a7"+
		"\7h\2\2\u00a7\u00a8\7n\2\2\u00a8\u00a9\7q\2\2\u00a9\u00aa\7c\2\2\u00aa"+
		"\u00ab\7v\2\2\u00ab\30\3\2\2\2\u00ac\u00ad\7d\2\2\u00ad\u00ae\7q\2\2\u00ae"+
		"\u00af\7q\2\2\u00af\u00b0\7n\2\2\u00b0\32\3\2\2\2\u00b1\u00b2\7*\2\2\u00b2"+
		"\34\3\2\2\2\u00b3\u00b4\7+\2\2\u00b4\36\3\2\2\2\u00b5\u00b6\7}\2\2\u00b6"+
		" \3\2\2\2\u00b7\u00b8\7\177\2\2\u00b8\"\3\2\2\2\u00b9\u00ba\7=\2\2\u00ba"+
		"$\3\2\2\2\u00bb\u00bc\7-\2\2\u00bc&\3\2\2\2\u00bd\u00be\7/\2\2\u00be("+
		"\3\2\2\2\u00bf\u00c0\7,\2\2\u00c0*\3\2\2\2\u00c1\u00c2\7\61\2\2\u00c2"+
		",\3\2\2\2\u00c3\u00c4\7@\2\2\u00c4.\3\2\2\2\u00c5\u00c6\7>\2\2\u00c6\60"+
		"\3\2\2\2\u00c7\u00c8\7?\2\2\u00c8\u00c9\7?\2\2\u00c9\62\3\2\2\2\u00ca"+
		"\u00cb\7#\2\2\u00cb\u00cc\7?\2\2\u00cc\64\3\2\2\2\u00cd\u00ce\7@\2\2\u00ce"+
		"\u00cf\7?\2\2\u00cf\66\3\2\2\2\u00d0\u00d1\7>\2\2\u00d1\u00d2\7?\2\2\u00d2"+
		"8\3\2\2\2\u00d3\u00d4\7~\2\2\u00d4\u00d5\7~\2\2\u00d5:\3\2\2\2\u00d6\u00d7"+
		"\7(\2\2\u00d7\u00d8\7(\2\2\u00d8<\3\2\2\2\u00d9\u00da\7#\2\2\u00da>\3"+
		"\2\2\2\u00db\u00dc\7?\2\2\u00dc@\3\2\2\2\u00dd\u00de\7-\2\2\u00de\u00df"+
		"\7?\2\2\u00dfB\3\2\2\2\u00e0\u00e1\7/\2\2\u00e1\u00e2\7?\2\2\u00e2D\3"+
		"\2\2\2\u00e3\u00e4\7,\2\2\u00e4\u00e5\7?\2\2\u00e5F\3\2\2\2\u00e6\u00e7"+
		"\7\61\2\2\u00e7\u00e8\7?\2\2\u00e8H\3\2\2\2\u00e9\u00ea\7k\2\2\u00ea\u00eb"+
		"\7h\2\2\u00ebJ\3\2\2\2\u00ec\u00ed\7g\2\2\u00ed\u00ee\7n\2\2\u00ee\u00ef"+
		"\7u\2\2\u00ef\u00f0\7g\2\2\u00f0L\3\2\2\2\u00f1\u00f2\7-\2\2\u00f2\u00f3"+
		"\7-\2\2\u00f3N\3\2\2\2\u00f4\u00f5\7/\2\2\u00f5\u00f6\7/\2\2\u00f6P\3"+
		"\2\2\2\u00f7\u00f8\7h\2\2\u00f8\u00f9\7w\2\2\u00f9\u00fa\7p\2\2\u00fa"+
		"\u00fb\7e\2\2\u00fb\u00fc\7v\2\2\u00fc\u00fd\7k\2\2\u00fd\u00fe\7q\2\2"+
		"\u00fe\u00ff\7p\2\2\u00ffR\3\2\2\2\u0100\u0101\7x\2\2\u0101\u0102\7c\2"+
		"\2\u0102\u0103\7t\2\2\u0103T\3\2\2\2\u0104\u0105\7y\2\2\u0105\u0106\7"+
		"j\2\2\u0106\u0107\7k\2\2\u0107\u0108\7n\2\2\u0108\u0109\7g\2\2\u0109V"+
		"\3\2\2\2\u010a\u010b\7t\2\2\u010b\u010c\7g\2\2\u010c\u010d\7v\2\2\u010d"+
		"\u010e\7w\2\2\u010e\u010f\7t\2\2\u010f\u0110\7p\2\2\u0110X\3\2\2\2\u0111"+
		"\u0112\7v\2\2\u0112\u0113\7t\2\2\u0113\u0114\7w\2\2\u0114\u0115\7g\2\2"+
		"\u0115Z\3\2\2\2\u0116\u0117\7h\2\2\u0117\u0118\7c\2\2\u0118\u0119\7n\2"+
		"\2\u0119\u011a\7u\2\2\u011a\u011b\7g\2\2\u011b\\\3\2\2\2\u011c\u0120\t"+
		"\2\2\2\u011d\u011f\t\3\2\2\u011e\u011d\3\2\2\2\u011f\u0122\3\2\2\2\u0120"+
		"\u011e\3\2\2\2\u0120\u0121\3\2\2\2\u0121^\3\2\2\2\u0122\u0120\3\2\2\2"+
		"\u0123\u0124\7r\2\2\u0124\u0125\7k\2\2\u0125`\3\2\2\2\u0126\u0127\7g\2"+
		"\2\u0127b\3\2\2\2\u0128\u0129\7k\2\2\u0129d\3\2\2\2\u012a\u0133\7\62\2"+
		"\2\u012b\u012f\t\4\2\2\u012c\u012e\t\5\2\2\u012d\u012c\3\2\2\2\u012e\u0131"+
		"\3\2\2\2\u012f\u012d\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0133\3\2\2\2\u0131"+
		"\u012f\3\2\2\2\u0132\u012a\3\2\2\2\u0132\u012b\3\2\2\2\u0133f\3\2\2\2"+
		"\u0134\u0138\7$\2\2\u0135\u0137\n\6\2\2\u0136\u0135\3\2\2\2\u0137\u013a"+
		"\3\2\2\2\u0138\u0136\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u013b\3\2\2\2\u013a"+
		"\u0138\3\2\2\2\u013b\u013c\7$\2\2\u013ch\3\2\2\2\u013d\u013f\7]\2\2\u013e"+
		"\u0140\13\2\2\2\u013f\u013e\3\2\2\2\u0140\u0141\3\2\2\2\u0141\u0142\3"+
		"\2\2\2\u0141\u013f\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0144\7_\2\2\u0144"+
		"j\3\2\2\2\u0145\u0147\7/\2\2\u0146\u0145\3\2\2\2\u0146\u0147\3\2\2\2\u0147"+
		"\u0148\3\2\2\2\u0148\u014f\5e\63\2\u0149\u014b\7\60\2\2\u014a\u014c\t"+
		"\5\2\2\u014b\u014a\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014b\3\2\2\2\u014d"+
		"\u014e\3\2\2\2\u014e\u0150\3\2\2\2\u014f\u0149\3\2\2\2\u014f\u0150\3\2"+
		"\2\2\u0150l\3\2\2\2\u0151\u0152\7\61\2\2\u0152\u0153\7\61\2\2\u0153\u0157"+
		"\3\2\2\2\u0154\u0156\n\7\2\2\u0155\u0154\3\2\2\2\u0156\u0159\3\2\2\2\u0157"+
		"\u0155\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u015a\3\2\2\2\u0159\u0157\3\2"+
		"\2\2\u015a\u015b\b\67\2\2\u015bn\3\2\2\2\u015c\u015d\7\61\2\2\u015d\u015e"+
		"\7,\2\2\u015e\u0162\3\2\2\2\u015f\u0161\13\2\2\2\u0160\u015f\3\2\2\2\u0161"+
		"\u0164\3\2\2\2\u0162\u0163\3\2\2\2\u0162\u0160\3\2\2\2\u0163\u0165\3\2"+
		"\2\2\u0164\u0162\3\2\2\2\u0165\u0166\7,\2\2\u0166\u0167\7\61\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u0169\b8\2\2\u0169p\3\2\2\2\u016a\u016b\t\b\2\2\u016b"+
		"\u016c\3\2\2\2\u016c\u016d\b9\2\2\u016dr\3\2\2\2\r\2\u0120\u012f\u0132"+
		"\u0138\u0141\u0146\u014d\u014f\u0157\u0162\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}