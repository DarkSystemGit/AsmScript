// Generated from /home/darksystem/Glacier/antlr/grammars/Glacier by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GlacierLexer extends Lexer {
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
			null, "'name:'", "'import'", "':'", "','", "'class'", "'extends'", "'new'", 
			"'__LLVM'", "'in'", "'['", "']'", "'.'", "'object'", "'void'", "'string'", 
			"'number'", "'bool'", "'array'", "'('", "')'", "'{'", "'}'", "';'", "'+'", 
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


	public GlacierLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Glacier"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2>\u0193\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3"+
		"\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3"+
		"\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3"+
		"\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\25\3\25\3"+
		"\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3"+
		"\35\3\35\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#"+
		"\3#\3$\3$\3$\3%\3%\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3+"+
		"\3+\3,\3,\3,\3,\3,\3-\3-\3-\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3/\3/\3\60\3"+
		"\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3"+
		"\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3\65\3"+
		"\65\3\65\3\65\3\66\3\66\7\66\u0147\n\66\f\66\16\66\u014a\13\66\3\67\3"+
		"\67\3\67\3\67\38\38\38\78\u0153\n8\f8\168\u0156\138\58\u0158\n8\39\39"+
		"\79\u015c\n9\f9\169\u015f\139\39\39\3:\3:\6:\u0165\n:\r:\16:\u0166\3:"+
		"\3:\3;\5;\u016c\n;\3;\3;\3;\6;\u0171\n;\r;\16;\u0172\5;\u0175\n;\3<\3"+
		"<\3<\3<\7<\u017b\n<\f<\16<\u017e\13<\3<\3<\3=\3=\3=\3=\7=\u0186\n=\f="+
		"\16=\u0189\13=\3=\3=\3=\3=\3=\3>\3>\3>\3>\4\u0166\u0187\2?\3\3\5\4\7\5"+
		"\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23"+
		"%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G"+
		"%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o\2q9s:u;w<y="+
		"{>\3\2\t\4\2C\\c|\7\2\60\60\62;C\\aac|\3\2\63;\3\2\62;\5\2\f\f\17\17$"+
		"$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u019b\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
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
		"\u008a\3\2\2\2\t\u008c\3\2\2\2\13\u008e\3\2\2\2\r\u0094\3\2\2\2\17\u009c"+
		"\3\2\2\2\21\u00a0\3\2\2\2\23\u00a7\3\2\2\2\25\u00aa\3\2\2\2\27\u00ac\3"+
		"\2\2\2\31\u00ae\3\2\2\2\33\u00b0\3\2\2\2\35\u00b7\3\2\2\2\37\u00bc\3\2"+
		"\2\2!\u00c3\3\2\2\2#\u00ca\3\2\2\2%\u00cf\3\2\2\2\'\u00d5\3\2\2\2)\u00d7"+
		"\3\2\2\2+\u00d9\3\2\2\2-\u00db\3\2\2\2/\u00dd\3\2\2\2\61\u00df\3\2\2\2"+
		"\63\u00e1\3\2\2\2\65\u00e3\3\2\2\2\67\u00e5\3\2\2\29\u00e7\3\2\2\2;\u00e9"+
		"\3\2\2\2=\u00eb\3\2\2\2?\u00ee\3\2\2\2A\u00f1\3\2\2\2C\u00f4\3\2\2\2E"+
		"\u00f7\3\2\2\2G\u00fa\3\2\2\2I\u00fd\3\2\2\2K\u00ff\3\2\2\2M\u0101\3\2"+
		"\2\2O\u0104\3\2\2\2Q\u0107\3\2\2\2S\u010a\3\2\2\2U\u010d\3\2\2\2W\u0110"+
		"\3\2\2\2Y\u0115\3\2\2\2[\u0118\3\2\2\2]\u011b\3\2\2\2_\u0124\3\2\2\2a"+
		"\u0128\3\2\2\2c\u012e\3\2\2\2e\u0132\3\2\2\2g\u0139\3\2\2\2i\u013e\3\2"+
		"\2\2k\u0144\3\2\2\2m\u014b\3\2\2\2o\u0157\3\2\2\2q\u0159\3\2\2\2s\u0162"+
		"\3\2\2\2u\u016b\3\2\2\2w\u0176\3\2\2\2y\u0181\3\2\2\2{\u018f\3\2\2\2}"+
		"~\7p\2\2~\177\7c\2\2\177\u0080\7o\2\2\u0080\u0081\7g\2\2\u0081\u0082\7"+
		"<\2\2\u0082\4\3\2\2\2\u0083\u0084\7k\2\2\u0084\u0085\7o\2\2\u0085\u0086"+
		"\7r\2\2\u0086\u0087\7q\2\2\u0087\u0088\7t\2\2\u0088\u0089\7v\2\2\u0089"+
		"\6\3\2\2\2\u008a\u008b\7<\2\2\u008b\b\3\2\2\2\u008c\u008d\7.\2\2\u008d"+
		"\n\3\2\2\2\u008e\u008f\7e\2\2\u008f\u0090\7n\2\2\u0090\u0091\7c\2\2\u0091"+
		"\u0092\7u\2\2\u0092\u0093\7u\2\2\u0093\f\3\2\2\2\u0094\u0095\7g\2\2\u0095"+
		"\u0096\7z\2\2\u0096\u0097\7v\2\2\u0097\u0098\7g\2\2\u0098\u0099\7p\2\2"+
		"\u0099\u009a\7f\2\2\u009a\u009b\7u\2\2\u009b\16\3\2\2\2\u009c\u009d\7"+
		"p\2\2\u009d\u009e\7g\2\2\u009e\u009f\7y\2\2\u009f\20\3\2\2\2\u00a0\u00a1"+
		"\7a\2\2\u00a1\u00a2\7a\2\2\u00a2\u00a3\7N\2\2\u00a3\u00a4\7N\2\2\u00a4"+
		"\u00a5\7X\2\2\u00a5\u00a6\7O\2\2\u00a6\22\3\2\2\2\u00a7\u00a8\7k\2\2\u00a8"+
		"\u00a9\7p\2\2\u00a9\24\3\2\2\2\u00aa\u00ab\7]\2\2\u00ab\26\3\2\2\2\u00ac"+
		"\u00ad\7_\2\2\u00ad\30\3\2\2\2\u00ae\u00af\7\60\2\2\u00af\32\3\2\2\2\u00b0"+
		"\u00b1\7q\2\2\u00b1\u00b2\7d\2\2\u00b2\u00b3\7l\2\2\u00b3\u00b4\7g\2\2"+
		"\u00b4\u00b5\7e\2\2\u00b5\u00b6\7v\2\2\u00b6\34\3\2\2\2\u00b7\u00b8\7"+
		"x\2\2\u00b8\u00b9\7q\2\2\u00b9\u00ba\7k\2\2\u00ba\u00bb\7f\2\2\u00bb\36"+
		"\3\2\2\2\u00bc\u00bd\7u\2\2\u00bd\u00be\7v\2\2\u00be\u00bf\7t\2\2\u00bf"+
		"\u00c0\7k\2\2\u00c0\u00c1\7p\2\2\u00c1\u00c2\7i\2\2\u00c2 \3\2\2\2\u00c3"+
		"\u00c4\7p\2\2\u00c4\u00c5\7w\2\2\u00c5\u00c6\7o\2\2\u00c6\u00c7\7d\2\2"+
		"\u00c7\u00c8\7g\2\2\u00c8\u00c9\7t\2\2\u00c9\"\3\2\2\2\u00ca\u00cb\7d"+
		"\2\2\u00cb\u00cc\7q\2\2\u00cc\u00cd\7q\2\2\u00cd\u00ce\7n\2\2\u00ce$\3"+
		"\2\2\2\u00cf\u00d0\7c\2\2\u00d0\u00d1\7t\2\2\u00d1\u00d2\7t\2\2\u00d2"+
		"\u00d3\7c\2\2\u00d3\u00d4\7{\2\2\u00d4&\3\2\2\2\u00d5\u00d6\7*\2\2\u00d6"+
		"(\3\2\2\2\u00d7\u00d8\7+\2\2\u00d8*\3\2\2\2\u00d9\u00da\7}\2\2\u00da,"+
		"\3\2\2\2\u00db\u00dc\7\177\2\2\u00dc.\3\2\2\2\u00dd\u00de\7=\2\2\u00de"+
		"\60\3\2\2\2\u00df\u00e0\7-\2\2\u00e0\62\3\2\2\2\u00e1\u00e2\7/\2\2\u00e2"+
		"\64\3\2\2\2\u00e3\u00e4\7,\2\2\u00e4\66\3\2\2\2\u00e5\u00e6\7\61\2\2\u00e6"+
		"8\3\2\2\2\u00e7\u00e8\7@\2\2\u00e8:\3\2\2\2\u00e9\u00ea\7>\2\2\u00ea<"+
		"\3\2\2\2\u00eb\u00ec\7?\2\2\u00ec\u00ed\7?\2\2\u00ed>\3\2\2\2\u00ee\u00ef"+
		"\7#\2\2\u00ef\u00f0\7?\2\2\u00f0@\3\2\2\2\u00f1\u00f2\7@\2\2\u00f2\u00f3"+
		"\7?\2\2\u00f3B\3\2\2\2\u00f4\u00f5\7>\2\2\u00f5\u00f6\7?\2\2\u00f6D\3"+
		"\2\2\2\u00f7\u00f8\7~\2\2\u00f8\u00f9\7~\2\2\u00f9F\3\2\2\2\u00fa\u00fb"+
		"\7(\2\2\u00fb\u00fc\7(\2\2\u00fcH\3\2\2\2\u00fd\u00fe\7#\2\2\u00feJ\3"+
		"\2\2\2\u00ff\u0100\7?\2\2\u0100L\3\2\2\2\u0101\u0102\7-\2\2\u0102\u0103"+
		"\7?\2\2\u0103N\3\2\2\2\u0104\u0105\7/\2\2\u0105\u0106\7?\2\2\u0106P\3"+
		"\2\2\2\u0107\u0108\7,\2\2\u0108\u0109\7?\2\2\u0109R\3\2\2\2\u010a\u010b"+
		"\7\61\2\2\u010b\u010c\7?\2\2\u010cT\3\2\2\2\u010d\u010e\7k\2\2\u010e\u010f"+
		"\7h\2\2\u010fV\3\2\2\2\u0110\u0111\7g\2\2\u0111\u0112\7n\2\2\u0112\u0113"+
		"\7u\2\2\u0113\u0114\7g\2\2\u0114X\3\2\2\2\u0115\u0116\7-\2\2\u0116\u0117"+
		"\7-\2\2\u0117Z\3\2\2\2\u0118\u0119\7/\2\2\u0119\u011a\7/\2\2\u011a\\\3"+
		"\2\2\2\u011b\u011c\7h\2\2\u011c\u011d\7w\2\2\u011d\u011e\7p\2\2\u011e"+
		"\u011f\7e\2\2\u011f\u0120\7v\2\2\u0120\u0121\7k\2\2\u0121\u0122\7q\2\2"+
		"\u0122\u0123\7p\2\2\u0123^\3\2\2\2\u0124\u0125\7x\2\2\u0125\u0126\7c\2"+
		"\2\u0126\u0127\7t\2\2\u0127`\3\2\2\2\u0128\u0129\7y\2\2\u0129\u012a\7"+
		"j\2\2\u012a\u012b\7k\2\2\u012b\u012c\7n\2\2\u012c\u012d\7g\2\2\u012db"+
		"\3\2\2\2\u012e\u012f\7h\2\2\u012f\u0130\7q\2\2\u0130\u0131\7t\2\2\u0131"+
		"d\3\2\2\2\u0132\u0133\7t\2\2\u0133\u0134\7g\2\2\u0134\u0135\7v\2\2\u0135"+
		"\u0136\7w\2\2\u0136\u0137\7t\2\2\u0137\u0138\7p\2\2\u0138f\3\2\2\2\u0139"+
		"\u013a\7v\2\2\u013a\u013b\7t\2\2\u013b\u013c\7w\2\2\u013c\u013d\7g\2\2"+
		"\u013dh\3\2\2\2\u013e\u013f\7h\2\2\u013f\u0140\7c\2\2\u0140\u0141\7n\2"+
		"\2\u0141\u0142\7u\2\2\u0142\u0143\7g\2\2\u0143j\3\2\2\2\u0144\u0148\t"+
		"\2\2\2\u0145\u0147\t\3\2\2\u0146\u0145\3\2\2\2\u0147\u014a\3\2\2\2\u0148"+
		"\u0146\3\2\2\2\u0148\u0149\3\2\2\2\u0149l\3\2\2\2\u014a\u0148\3\2\2\2"+
		"\u014b\u014c\7&\2\2\u014c\u014d\7r\2\2\u014d\u014e\7k\2\2\u014en\3\2\2"+
		"\2\u014f\u0158\7\62\2\2\u0150\u0154\t\4\2\2\u0151\u0153\t\5\2\2\u0152"+
		"\u0151\3\2\2\2\u0153\u0156\3\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2"+
		"\2\2\u0155\u0158\3\2\2\2\u0156\u0154\3\2\2\2\u0157\u014f\3\2\2\2\u0157"+
		"\u0150\3\2\2\2\u0158p\3\2\2\2\u0159\u015d\7$\2\2\u015a\u015c\n\6\2\2\u015b"+
		"\u015a\3\2\2\2\u015c\u015f\3\2\2\2\u015d\u015b\3\2\2\2\u015d\u015e\3\2"+
		"\2\2\u015e\u0160\3\2\2\2\u015f\u015d\3\2\2\2\u0160\u0161\7$\2\2\u0161"+
		"r\3\2\2\2\u0162\u0164\7]\2\2\u0163\u0165\13\2\2\2\u0164\u0163\3\2\2\2"+
		"\u0165\u0166\3\2\2\2\u0166\u0167\3\2\2\2\u0166\u0164\3\2\2\2\u0167\u0168"+
		"\3\2\2\2\u0168\u0169\7_\2\2\u0169t\3\2\2\2\u016a\u016c\7/\2\2\u016b\u016a"+
		"\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u0174\5o8\2\u016e"+
		"\u0170\7\60\2\2\u016f\u0171\t\5\2\2\u0170\u016f\3\2\2\2\u0171\u0172\3"+
		"\2\2\2\u0172\u0170\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0175\3\2\2\2\u0174"+
		"\u016e\3\2\2\2\u0174\u0175\3\2\2\2\u0175v\3\2\2\2\u0176\u0177\7\61\2\2"+
		"\u0177\u0178\7\61\2\2\u0178\u017c\3\2\2\2\u0179\u017b\n\7\2\2\u017a\u0179"+
		"\3\2\2\2\u017b\u017e\3\2\2\2\u017c\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d"+
		"\u017f\3\2\2\2\u017e\u017c\3\2\2\2\u017f\u0180\b<\2\2\u0180x\3\2\2\2\u0181"+
		"\u0182\7\61\2\2\u0182\u0183\7,\2\2\u0183\u0187\3\2\2\2\u0184\u0186\13"+
		"\2\2\2\u0185\u0184\3\2\2\2\u0186\u0189\3\2\2\2\u0187\u0188\3\2\2\2\u0187"+
		"\u0185\3\2\2\2\u0188\u018a\3\2\2\2\u0189\u0187\3\2\2\2\u018a\u018b\7,"+
		"\2\2\u018b\u018c\7\61\2\2\u018c\u018d\3\2\2\2\u018d\u018e\b=\2\2\u018e"+
		"z\3\2\2\2\u018f\u0190\t\b\2\2\u0190\u0191\3\2\2\2\u0191\u0192\b>\2\2\u0192"+
		"|\3\2\2\2\r\2\u0148\u0154\u0157\u015d\u0166\u016b\u0172\u0174\u017c\u0187"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}