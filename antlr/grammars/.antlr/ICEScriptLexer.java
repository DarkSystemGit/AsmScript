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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, OPEN_BRACKET=6, CLOSE_BRACKET=7, 
		OPEN_CURLEY=8, CLOSE_CURLEY=9, END_STMT=10, ADD=11, SUB=12, MUL=13, DIV=14, 
		GREATER_THAN=15, LESS_THAN=16, EQUAL_TO=17, NOT_EQUAL_TO=18, GREATER_THAN_OR_EQUAL=19, 
		LESS_THAN_OR_EQUAL=20, OR=21, AND=22, NOT=23, ASSIGN=24, ADDASSIGN=25, 
		SUBASSIGN=26, MULASSIGN=27, DIVASSIGN=28, STR=29, IF=30, ELSE=31, INCREMENT=32, 
		DECREMENT=33, DEF=34, VAR=35, WHILE=36, RETURN=37, TRUE=38, FALSE=39, 
		IDENTIFIER=40, NUMBER=41, PI=42, E=43, I=44, QUOTED_TEXT=45, LIST=46, 
		MATRIX=47, LINECOMMENT=48, BLOCKCOMMENT=49, WHITESPACE=50;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "OPEN_BRACKET", "CLOSE_BRACKET", 
			"OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", 
			"GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
			"LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", 
			"MULASSIGN", "DIVASSIGN", "STR", "IF", "ELSE", "INCREMENT", "DECREMENT", 
			"DEF", "VAR", "WHILE", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "NUMBER", 
			"PI", "E", "I", "INT", "QUOTED_TEXT", "LIST", "MATRIX", "LINECOMMENT", 
			"BLOCKCOMMENT", "WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import:'", "'function '", "','", "'__ICE'", "'('", 
			"')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", 
			"'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", "'!'", "'='", "'+='", 
			"'-='", "'*='", "'/='", "'str'", "'if'", "'else'", "'++'", "'--'", "'function'", 
			"'var'", "'while'", "'return'", "'true'", "'false'", null, null, "'pi'", 
			"'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
			"OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", 
			"GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
			"LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", 
			"MULASSIGN", "DIVASSIGN", "STR", "IF", "ELSE", "INCREMENT", "DECREMENT", 
			"DEF", "VAR", "WHILE", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "NUMBER", 
			"PI", "E", "I", "QUOTED_TEXT", "LIST", "MATRIX", "LINECOMMENT", "BLOCKCOMMENT", 
			"WHITESPACE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\64\u0155\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3"+
		"\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3"+
		"\17\3\20\3\20\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3"+
		"\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3"+
		"\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\36\3"+
		"\36\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3#\3#"+
		"\3#\3#\3#\3#\3$\3$\3$\3$\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3\'\3"+
		"\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3)\3)\7)\u00fb\n)\f)\16)\u00fe\13)\3"+
		"*\5*\u0101\n*\3*\3*\3*\6*\u0106\n*\r*\16*\u0107\5*\u010a\n*\3+\3+\3+\3"+
		",\3,\3-\3-\3.\3.\3.\7.\u0116\n.\f.\16.\u0119\13.\5.\u011b\n.\3/\3/\7/"+
		"\u011f\n/\f/\16/\u0122\13/\3/\3/\3\60\3\60\6\60\u0128\n\60\r\60\16\60"+
		"\u0129\3\60\3\60\3\61\3\61\3\61\3\61\7\61\u0132\n\61\f\61\16\61\u0135"+
		"\13\61\3\61\3\61\3\62\3\62\3\62\3\62\7\62\u013d\n\62\f\62\16\62\u0140"+
		"\13\62\3\62\3\62\3\63\3\63\3\63\3\63\7\63\u0148\n\63\f\63\16\63\u014b"+
		"\13\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\4\u0129\u0149\2\65"+
		"\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20"+
		"\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37"+
		"= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[\2]/_\60a\61c\62e\63g\64\3\2\t\4\2C\\"+
		"c|\7\2\60\60\62;C\\aac|\3\2\62;\3\2\63;\5\2\f\f\17\17$$\4\2\f\f\17\17"+
		"\5\2\13\f\17\17\"\"\2\u015e\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3"+
		"\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2"+
		"\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37"+
		"\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3"+
		"\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2"+
		"\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C"+
		"\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2"+
		"\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2]\3\2\2\2"+
		"\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\3i\3\2\2\2\5o"+
		"\3\2\2\2\7w\3\2\2\2\t\u0081\3\2\2\2\13\u0083\3\2\2\2\r\u0089\3\2\2\2\17"+
		"\u008b\3\2\2\2\21\u008d\3\2\2\2\23\u008f\3\2\2\2\25\u0091\3\2\2\2\27\u0093"+
		"\3\2\2\2\31\u0095\3\2\2\2\33\u0097\3\2\2\2\35\u0099\3\2\2\2\37\u009b\3"+
		"\2\2\2!\u009d\3\2\2\2#\u009f\3\2\2\2%\u00a2\3\2\2\2\'\u00a5\3\2\2\2)\u00a8"+
		"\3\2\2\2+\u00ab\3\2\2\2-\u00ae\3\2\2\2/\u00b1\3\2\2\2\61\u00b3\3\2\2\2"+
		"\63\u00b5\3\2\2\2\65\u00b8\3\2\2\2\67\u00bb\3\2\2\29\u00be\3\2\2\2;\u00c1"+
		"\3\2\2\2=\u00c5\3\2\2\2?\u00c8\3\2\2\2A\u00cd\3\2\2\2C\u00d0\3\2\2\2E"+
		"\u00d3\3\2\2\2G\u00dc\3\2\2\2I\u00e0\3\2\2\2K\u00e6\3\2\2\2M\u00ed\3\2"+
		"\2\2O\u00f2\3\2\2\2Q\u00f8\3\2\2\2S\u0100\3\2\2\2U\u010b\3\2\2\2W\u010e"+
		"\3\2\2\2Y\u0110\3\2\2\2[\u011a\3\2\2\2]\u011c\3\2\2\2_\u0125\3\2\2\2a"+
		"\u012d\3\2\2\2c\u0138\3\2\2\2e\u0143\3\2\2\2g\u0151\3\2\2\2ij\7p\2\2j"+
		"k\7c\2\2kl\7o\2\2lm\7g\2\2mn\7<\2\2n\4\3\2\2\2op\7k\2\2pq\7o\2\2qr\7r"+
		"\2\2rs\7q\2\2st\7t\2\2tu\7v\2\2uv\7<\2\2v\6\3\2\2\2wx\7h\2\2xy\7w\2\2"+
		"yz\7p\2\2z{\7e\2\2{|\7v\2\2|}\7k\2\2}~\7q\2\2~\177\7p\2\2\177\u0080\7"+
		"\"\2\2\u0080\b\3\2\2\2\u0081\u0082\7.\2\2\u0082\n\3\2\2\2\u0083\u0084"+
		"\7a\2\2\u0084\u0085\7a\2\2\u0085\u0086\7K\2\2\u0086\u0087\7E\2\2\u0087"+
		"\u0088\7G\2\2\u0088\f\3\2\2\2\u0089\u008a\7*\2\2\u008a\16\3\2\2\2\u008b"+
		"\u008c\7+\2\2\u008c\20\3\2\2\2\u008d\u008e\7}\2\2\u008e\22\3\2\2\2\u008f"+
		"\u0090\7\177\2\2\u0090\24\3\2\2\2\u0091\u0092\7=\2\2\u0092\26\3\2\2\2"+
		"\u0093\u0094\7-\2\2\u0094\30\3\2\2\2\u0095\u0096\7/\2\2\u0096\32\3\2\2"+
		"\2\u0097\u0098\7,\2\2\u0098\34\3\2\2\2\u0099\u009a\7\61\2\2\u009a\36\3"+
		"\2\2\2\u009b\u009c\7@\2\2\u009c \3\2\2\2\u009d\u009e\7>\2\2\u009e\"\3"+
		"\2\2\2\u009f\u00a0\7?\2\2\u00a0\u00a1\7?\2\2\u00a1$\3\2\2\2\u00a2\u00a3"+
		"\7#\2\2\u00a3\u00a4\7?\2\2\u00a4&\3\2\2\2\u00a5\u00a6\7@\2\2\u00a6\u00a7"+
		"\7?\2\2\u00a7(\3\2\2\2\u00a8\u00a9\7>\2\2\u00a9\u00aa\7?\2\2\u00aa*\3"+
		"\2\2\2\u00ab\u00ac\7~\2\2\u00ac\u00ad\7~\2\2\u00ad,\3\2\2\2\u00ae\u00af"+
		"\7(\2\2\u00af\u00b0\7(\2\2\u00b0.\3\2\2\2\u00b1\u00b2\7#\2\2\u00b2\60"+
		"\3\2\2\2\u00b3\u00b4\7?\2\2\u00b4\62\3\2\2\2\u00b5\u00b6\7-\2\2\u00b6"+
		"\u00b7\7?\2\2\u00b7\64\3\2\2\2\u00b8\u00b9\7/\2\2\u00b9\u00ba\7?\2\2\u00ba"+
		"\66\3\2\2\2\u00bb\u00bc\7,\2\2\u00bc\u00bd\7?\2\2\u00bd8\3\2\2\2\u00be"+
		"\u00bf\7\61\2\2\u00bf\u00c0\7?\2\2\u00c0:\3\2\2\2\u00c1\u00c2\7u\2\2\u00c2"+
		"\u00c3\7v\2\2\u00c3\u00c4\7t\2\2\u00c4<\3\2\2\2\u00c5\u00c6\7k\2\2\u00c6"+
		"\u00c7\7h\2\2\u00c7>\3\2\2\2\u00c8\u00c9\7g\2\2\u00c9\u00ca\7n\2\2\u00ca"+
		"\u00cb\7u\2\2\u00cb\u00cc\7g\2\2\u00cc@\3\2\2\2\u00cd\u00ce\7-\2\2\u00ce"+
		"\u00cf\7-\2\2\u00cfB\3\2\2\2\u00d0\u00d1\7/\2\2\u00d1\u00d2\7/\2\2\u00d2"+
		"D\3\2\2\2\u00d3\u00d4\7h\2\2\u00d4\u00d5\7w\2\2\u00d5\u00d6\7p\2\2\u00d6"+
		"\u00d7\7e\2\2\u00d7\u00d8\7v\2\2\u00d8\u00d9\7k\2\2\u00d9\u00da\7q\2\2"+
		"\u00da\u00db\7p\2\2\u00dbF\3\2\2\2\u00dc\u00dd\7x\2\2\u00dd\u00de\7c\2"+
		"\2\u00de\u00df\7t\2\2\u00dfH\3\2\2\2\u00e0\u00e1\7y\2\2\u00e1\u00e2\7"+
		"j\2\2\u00e2\u00e3\7k\2\2\u00e3\u00e4\7n\2\2\u00e4\u00e5\7g\2\2\u00e5J"+
		"\3\2\2\2\u00e6\u00e7\7t\2\2\u00e7\u00e8\7g\2\2\u00e8\u00e9\7v\2\2\u00e9"+
		"\u00ea\7w\2\2\u00ea\u00eb\7t\2\2\u00eb\u00ec\7p\2\2\u00ecL\3\2\2\2\u00ed"+
		"\u00ee\7v\2\2\u00ee\u00ef\7t\2\2\u00ef\u00f0\7w\2\2\u00f0\u00f1\7g\2\2"+
		"\u00f1N\3\2\2\2\u00f2\u00f3\7h\2\2\u00f3\u00f4\7c\2\2\u00f4\u00f5\7n\2"+
		"\2\u00f5\u00f6\7u\2\2\u00f6\u00f7\7g\2\2\u00f7P\3\2\2\2\u00f8\u00fc\t"+
		"\2\2\2\u00f9\u00fb\t\3\2\2\u00fa\u00f9\3\2\2\2\u00fb\u00fe\3\2\2\2\u00fc"+
		"\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fdR\3\2\2\2\u00fe\u00fc\3\2\2\2"+
		"\u00ff\u0101\7/\2\2\u0100\u00ff\3\2\2\2\u0100\u0101\3\2\2\2\u0101\u0102"+
		"\3\2\2\2\u0102\u0109\5[.\2\u0103\u0105\7\60\2\2\u0104\u0106\t\4\2\2\u0105"+
		"\u0104\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0105\3\2\2\2\u0107\u0108\3\2"+
		"\2\2\u0108\u010a\3\2\2\2\u0109\u0103\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"T\3\2\2\2\u010b\u010c\7r\2\2\u010c\u010d\7k\2\2\u010dV\3\2\2\2\u010e\u010f"+
		"\7g\2\2\u010fX\3\2\2\2\u0110\u0111\7k\2\2\u0111Z\3\2\2\2\u0112\u011b\7"+
		"\62\2\2\u0113\u0117\t\5\2\2\u0114\u0116\t\4\2\2\u0115\u0114\3\2\2\2\u0116"+
		"\u0119\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011b\3\2"+
		"\2\2\u0119\u0117\3\2\2\2\u011a\u0112\3\2\2\2\u011a\u0113\3\2\2\2\u011b"+
		"\\\3\2\2\2\u011c\u0120\7$\2\2\u011d\u011f\n\6\2\2\u011e\u011d\3\2\2\2"+
		"\u011f\u0122\3\2\2\2\u0120\u011e\3\2\2\2\u0120\u0121\3\2\2\2\u0121\u0123"+
		"\3\2\2\2\u0122\u0120\3\2\2\2\u0123\u0124\7$\2\2\u0124^\3\2\2\2\u0125\u0127"+
		"\7]\2\2\u0126\u0128\13\2\2\2\u0127\u0126\3\2\2\2\u0128\u0129\3\2\2\2\u0129"+
		"\u012a\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012c\7_"+
		"\2\2\u012c`\3\2\2\2\u012d\u012e\7]\2\2\u012e\u0133\5_\60\2\u012f\u0130"+
		"\7.\2\2\u0130\u0132\5_\60\2\u0131\u012f\3\2\2\2\u0132\u0135\3\2\2\2\u0133"+
		"\u0131\3\2\2\2\u0133\u0134\3\2\2\2\u0134\u0136\3\2\2\2\u0135\u0133\3\2"+
		"\2\2\u0136\u0137\7_\2\2\u0137b\3\2\2\2\u0138\u0139\7\61\2\2\u0139\u013a"+
		"\7\61\2\2\u013a\u013e\3\2\2\2\u013b\u013d\n\7\2\2\u013c\u013b\3\2\2\2"+
		"\u013d\u0140\3\2\2\2\u013e\u013c\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0141"+
		"\3\2\2\2\u0140\u013e\3\2\2\2\u0141\u0142\b\62\2\2\u0142d\3\2\2\2\u0143"+
		"\u0144\7\61\2\2\u0144\u0145\7,\2\2\u0145\u0149\3\2\2\2\u0146\u0148\13"+
		"\2\2\2\u0147\u0146\3\2\2\2\u0148\u014b\3\2\2\2\u0149\u014a\3\2\2\2\u0149"+
		"\u0147\3\2\2\2\u014a\u014c\3\2\2\2\u014b\u0149\3\2\2\2\u014c\u014d\7,"+
		"\2\2\u014d\u014e\7\61\2\2\u014e\u014f\3\2\2\2\u014f\u0150\b\63\2\2\u0150"+
		"f\3\2\2\2\u0151\u0152\t\b\2\2\u0152\u0153\3\2\2\2\u0153\u0154\b\64\2\2"+
		"\u0154h\3\2\2\2\16\2\u00fc\u0100\u0107\u0109\u0117\u011a\u0120\u0129\u0133"+
		"\u013e\u0149\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}