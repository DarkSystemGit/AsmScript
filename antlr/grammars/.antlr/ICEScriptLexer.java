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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, OPEN_BRACKET=7, CLOSE_BRACKET=8, 
		OPEN_CURLEY=9, CLOSE_CURLEY=10, END_STMT=11, ADD=12, SUB=13, MUL=14, DIV=15, 
		GREATER_THAN=16, LESS_THAN=17, EQUAL_TO=18, NOT_EQUAL_TO=19, GREATER_THAN_OR_EQUAL=20, 
		LESS_THAN_OR_EQUAL=21, OR=22, AND=23, NOT=24, ASSIGN=25, ADDASSIGN=26, 
		SUBASSIGN=27, MULASSIGN=28, DIVASSIGN=29, STR=30, IF=31, ELSE=32, INCREMENT=33, 
		DECREMENT=34, DEF=35, VAR=36, WHILE=37, RETURN=38, TRUE=39, FALSE=40, 
		IDENTIFIER=41, NUMBER=42, PI=43, E=44, I=45, QUOTED_TEXT=46, LIST=47, 
		MATRIX=48, LINECOMMENT=49, BLOCKCOMMENT=50, WHITESPACE=51;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "OPEN_BRACKET", "CLOSE_BRACKET", 
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
			null, "'name:'", "'import:'", "'function '", "','", "'__ICE'", "'.'", 
			"'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", 
			"'<'", "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", "'!'", "'='", 
			"'+='", "'-='", "'*='", "'/='", "'str'", "'if'", "'else'", "'++'", "'--'", 
			"'function'", "'var'", "'while'", "'return'", "'true'", "'false'", null, 
			null, "'pi'", "'e'", "'i'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\65\u0159\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3"+
		"\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3"+
		"\24\3\25\3\25\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\30\3\30\3\30\3\31\3"+
		"\31\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3"+
		"\36\3\37\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3"+
		"$\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3"+
		"\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3*\3*\7*\u00ff\n*\f*\16"+
		"*\u0102\13*\3+\5+\u0105\n+\3+\3+\3+\6+\u010a\n+\r+\16+\u010b\5+\u010e"+
		"\n+\3,\3,\3,\3-\3-\3.\3.\3/\3/\3/\7/\u011a\n/\f/\16/\u011d\13/\5/\u011f"+
		"\n/\3\60\3\60\7\60\u0123\n\60\f\60\16\60\u0126\13\60\3\60\3\60\3\61\3"+
		"\61\6\61\u012c\n\61\r\61\16\61\u012d\3\61\3\61\3\62\3\62\3\62\3\62\7\62"+
		"\u0136\n\62\f\62\16\62\u0139\13\62\3\62\3\62\3\63\3\63\3\63\3\63\7\63"+
		"\u0141\n\63\f\63\16\63\u0144\13\63\3\63\3\63\3\64\3\64\3\64\3\64\7\64"+
		"\u014c\n\64\f\64\16\64\u014f\13\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65"+
		"\3\65\3\65\4\u012d\u014d\2\66\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13"+
		"\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61"+
		"\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\2_\60"+
		"a\61c\62e\63g\64i\65\3\2\t\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\3\2\63;\5\2"+
		"\f\f\17\17$$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u0162\2\3\3\2\2\2\2\5"+
		"\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2"+
		"\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2"+
		"\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2"+
		"\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K"+
		"\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2"+
		"\2\2\2Y\3\2\2\2\2[\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2"+
		"\2g\3\2\2\2\2i\3\2\2\2\3k\3\2\2\2\5q\3\2\2\2\7y\3\2\2\2\t\u0083\3\2\2"+
		"\2\13\u0085\3\2\2\2\r\u008b\3\2\2\2\17\u008d\3\2\2\2\21\u008f\3\2\2\2"+
		"\23\u0091\3\2\2\2\25\u0093\3\2\2\2\27\u0095\3\2\2\2\31\u0097\3\2\2\2\33"+
		"\u0099\3\2\2\2\35\u009b\3\2\2\2\37\u009d\3\2\2\2!\u009f\3\2\2\2#\u00a1"+
		"\3\2\2\2%\u00a3\3\2\2\2\'\u00a6\3\2\2\2)\u00a9\3\2\2\2+\u00ac\3\2\2\2"+
		"-\u00af\3\2\2\2/\u00b2\3\2\2\2\61\u00b5\3\2\2\2\63\u00b7\3\2\2\2\65\u00b9"+
		"\3\2\2\2\67\u00bc\3\2\2\29\u00bf\3\2\2\2;\u00c2\3\2\2\2=\u00c5\3\2\2\2"+
		"?\u00c9\3\2\2\2A\u00cc\3\2\2\2C\u00d1\3\2\2\2E\u00d4\3\2\2\2G\u00d7\3"+
		"\2\2\2I\u00e0\3\2\2\2K\u00e4\3\2\2\2M\u00ea\3\2\2\2O\u00f1\3\2\2\2Q\u00f6"+
		"\3\2\2\2S\u00fc\3\2\2\2U\u0104\3\2\2\2W\u010f\3\2\2\2Y\u0112\3\2\2\2["+
		"\u0114\3\2\2\2]\u011e\3\2\2\2_\u0120\3\2\2\2a\u0129\3\2\2\2c\u0131\3\2"+
		"\2\2e\u013c\3\2\2\2g\u0147\3\2\2\2i\u0155\3\2\2\2kl\7p\2\2lm\7c\2\2mn"+
		"\7o\2\2no\7g\2\2op\7<\2\2p\4\3\2\2\2qr\7k\2\2rs\7o\2\2st\7r\2\2tu\7q\2"+
		"\2uv\7t\2\2vw\7v\2\2wx\7<\2\2x\6\3\2\2\2yz\7h\2\2z{\7w\2\2{|\7p\2\2|}"+
		"\7e\2\2}~\7v\2\2~\177\7k\2\2\177\u0080\7q\2\2\u0080\u0081\7p\2\2\u0081"+
		"\u0082\7\"\2\2\u0082\b\3\2\2\2\u0083\u0084\7.\2\2\u0084\n\3\2\2\2\u0085"+
		"\u0086\7a\2\2\u0086\u0087\7a\2\2\u0087\u0088\7K\2\2\u0088\u0089\7E\2\2"+
		"\u0089\u008a\7G\2\2\u008a\f\3\2\2\2\u008b\u008c\7\60\2\2\u008c\16\3\2"+
		"\2\2\u008d\u008e\7*\2\2\u008e\20\3\2\2\2\u008f\u0090\7+\2\2\u0090\22\3"+
		"\2\2\2\u0091\u0092\7}\2\2\u0092\24\3\2\2\2\u0093\u0094\7\177\2\2\u0094"+
		"\26\3\2\2\2\u0095\u0096\7=\2\2\u0096\30\3\2\2\2\u0097\u0098\7-\2\2\u0098"+
		"\32\3\2\2\2\u0099\u009a\7/\2\2\u009a\34\3\2\2\2\u009b\u009c\7,\2\2\u009c"+
		"\36\3\2\2\2\u009d\u009e\7\61\2\2\u009e \3\2\2\2\u009f\u00a0\7@\2\2\u00a0"+
		"\"\3\2\2\2\u00a1\u00a2\7>\2\2\u00a2$\3\2\2\2\u00a3\u00a4\7?\2\2\u00a4"+
		"\u00a5\7?\2\2\u00a5&\3\2\2\2\u00a6\u00a7\7#\2\2\u00a7\u00a8\7?\2\2\u00a8"+
		"(\3\2\2\2\u00a9\u00aa\7@\2\2\u00aa\u00ab\7?\2\2\u00ab*\3\2\2\2\u00ac\u00ad"+
		"\7>\2\2\u00ad\u00ae\7?\2\2\u00ae,\3\2\2\2\u00af\u00b0\7~\2\2\u00b0\u00b1"+
		"\7~\2\2\u00b1.\3\2\2\2\u00b2\u00b3\7(\2\2\u00b3\u00b4\7(\2\2\u00b4\60"+
		"\3\2\2\2\u00b5\u00b6\7#\2\2\u00b6\62\3\2\2\2\u00b7\u00b8\7?\2\2\u00b8"+
		"\64\3\2\2\2\u00b9\u00ba\7-\2\2\u00ba\u00bb\7?\2\2\u00bb\66\3\2\2\2\u00bc"+
		"\u00bd\7/\2\2\u00bd\u00be\7?\2\2\u00be8\3\2\2\2\u00bf\u00c0\7,\2\2\u00c0"+
		"\u00c1\7?\2\2\u00c1:\3\2\2\2\u00c2\u00c3\7\61\2\2\u00c3\u00c4\7?\2\2\u00c4"+
		"<\3\2\2\2\u00c5\u00c6\7u\2\2\u00c6\u00c7\7v\2\2\u00c7\u00c8\7t\2\2\u00c8"+
		">\3\2\2\2\u00c9\u00ca\7k\2\2\u00ca\u00cb\7h\2\2\u00cb@\3\2\2\2\u00cc\u00cd"+
		"\7g\2\2\u00cd\u00ce\7n\2\2\u00ce\u00cf\7u\2\2\u00cf\u00d0\7g\2\2\u00d0"+
		"B\3\2\2\2\u00d1\u00d2\7-\2\2\u00d2\u00d3\7-\2\2\u00d3D\3\2\2\2\u00d4\u00d5"+
		"\7/\2\2\u00d5\u00d6\7/\2\2\u00d6F\3\2\2\2\u00d7\u00d8\7h\2\2\u00d8\u00d9"+
		"\7w\2\2\u00d9\u00da\7p\2\2\u00da\u00db\7e\2\2\u00db\u00dc\7v\2\2\u00dc"+
		"\u00dd\7k\2\2\u00dd\u00de\7q\2\2\u00de\u00df\7p\2\2\u00dfH\3\2\2\2\u00e0"+
		"\u00e1\7x\2\2\u00e1\u00e2\7c\2\2\u00e2\u00e3\7t\2\2\u00e3J\3\2\2\2\u00e4"+
		"\u00e5\7y\2\2\u00e5\u00e6\7j\2\2\u00e6\u00e7\7k\2\2\u00e7\u00e8\7n\2\2"+
		"\u00e8\u00e9\7g\2\2\u00e9L\3\2\2\2\u00ea\u00eb\7t\2\2\u00eb\u00ec\7g\2"+
		"\2\u00ec\u00ed\7v\2\2\u00ed\u00ee\7w\2\2\u00ee\u00ef\7t\2\2\u00ef\u00f0"+
		"\7p\2\2\u00f0N\3\2\2\2\u00f1\u00f2\7v\2\2\u00f2\u00f3\7t\2\2\u00f3\u00f4"+
		"\7w\2\2\u00f4\u00f5\7g\2\2\u00f5P\3\2\2\2\u00f6\u00f7\7h\2\2\u00f7\u00f8"+
		"\7c\2\2\u00f8\u00f9\7n\2\2\u00f9\u00fa\7u\2\2\u00fa\u00fb\7g\2\2\u00fb"+
		"R\3\2\2\2\u00fc\u0100\t\2\2\2\u00fd\u00ff\t\3\2\2\u00fe\u00fd\3\2\2\2"+
		"\u00ff\u0102\3\2\2\2\u0100\u00fe\3\2\2\2\u0100\u0101\3\2\2\2\u0101T\3"+
		"\2\2\2\u0102\u0100\3\2\2\2\u0103\u0105\7/\2\2\u0104\u0103\3\2\2\2\u0104"+
		"\u0105\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u010d\5]/\2\u0107\u0109\7\60"+
		"\2\2\u0108\u010a\t\4\2\2\u0109\u0108\3\2\2\2\u010a\u010b\3\2\2\2\u010b"+
		"\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010e\3\2\2\2\u010d\u0107\3\2"+
		"\2\2\u010d\u010e\3\2\2\2\u010eV\3\2\2\2\u010f\u0110\7r\2\2\u0110\u0111"+
		"\7k\2\2\u0111X\3\2\2\2\u0112\u0113\7g\2\2\u0113Z\3\2\2\2\u0114\u0115\7"+
		"k\2\2\u0115\\\3\2\2\2\u0116\u011f\7\62\2\2\u0117\u011b\t\5\2\2\u0118\u011a"+
		"\t\4\2\2\u0119\u0118\3\2\2\2\u011a\u011d\3\2\2\2\u011b\u0119\3\2\2\2\u011b"+
		"\u011c\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2\2\u011e\u0116\3\2"+
		"\2\2\u011e\u0117\3\2\2\2\u011f^\3\2\2\2\u0120\u0124\7$\2\2\u0121\u0123"+
		"\n\6\2\2\u0122\u0121\3\2\2\2\u0123\u0126\3\2\2\2\u0124\u0122\3\2\2\2\u0124"+
		"\u0125\3\2\2\2\u0125\u0127\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u0128\7$"+
		"\2\2\u0128`\3\2\2\2\u0129\u012b\7]\2\2\u012a\u012c\13\2\2\2\u012b\u012a"+
		"\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012e\3\2\2\2\u012d\u012b\3\2\2\2\u012e"+
		"\u012f\3\2\2\2\u012f\u0130\7_\2\2\u0130b\3\2\2\2\u0131\u0132\7]\2\2\u0132"+
		"\u0137\5a\61\2\u0133\u0134\7.\2\2\u0134\u0136\5a\61\2\u0135\u0133\3\2"+
		"\2\2\u0136\u0139\3\2\2\2\u0137\u0135\3\2\2\2\u0137\u0138\3\2\2\2\u0138"+
		"\u013a\3\2\2\2\u0139\u0137\3\2\2\2\u013a\u013b\7_\2\2\u013bd\3\2\2\2\u013c"+
		"\u013d\7\61\2\2\u013d\u013e\7\61\2\2\u013e\u0142\3\2\2\2\u013f\u0141\n"+
		"\7\2\2\u0140\u013f\3\2\2\2\u0141\u0144\3\2\2\2\u0142\u0140\3\2\2\2\u0142"+
		"\u0143\3\2\2\2\u0143\u0145\3\2\2\2\u0144\u0142\3\2\2\2\u0145\u0146\b\63"+
		"\2\2\u0146f\3\2\2\2\u0147\u0148\7\61\2\2\u0148\u0149\7,\2\2\u0149\u014d"+
		"\3\2\2\2\u014a\u014c\13\2\2\2\u014b\u014a\3\2\2\2\u014c\u014f\3\2\2\2"+
		"\u014d\u014e\3\2\2\2\u014d\u014b\3\2\2\2\u014e\u0150\3\2\2\2\u014f\u014d"+
		"\3\2\2\2\u0150\u0151\7,\2\2\u0151\u0152\7\61\2\2\u0152\u0153\3\2\2\2\u0153"+
		"\u0154\b\64\2\2\u0154h\3\2\2\2\u0155\u0156\t\b\2\2\u0156\u0157\3\2\2\2"+
		"\u0157\u0158\b\65\2\2\u0158j\3\2\2\2\16\2\u0100\u0104\u010b\u010d\u011b"+
		"\u011e\u0124\u012d\u0137\u0142\u014d\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}