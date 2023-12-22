// Generated from /home/pdarksystem/ICEScript/antlr/grammars/Glacier by ANTLR 4.9.2
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
		OPEN_BRACKET=18, CLOSE_BRACKET=19, OPEN_CURLEY=20, CLOSE_CURLEY=21, END_STMT=22, 
		ADD=23, SUB=24, MUL=25, DIV=26, GREATER_THAN=27, LESS_THAN=28, EQUAL_TO=29, 
		NOT_EQUAL_TO=30, GREATER_THAN_OR_EQUAL=31, LESS_THAN_OR_EQUAL=32, OR=33, 
		AND=34, NOT=35, ASSIGN=36, ADDASSIGN=37, SUBASSIGN=38, MULASSIGN=39, DIVASSIGN=40, 
		IF=41, ELSE=42, INCREMENT=43, DECREMENT=44, DEF=45, VAR=46, WHILE=47, 
		FOR=48, RETURN=49, TRUE=50, FALSE=51, IDENTIFIER=52, PI=53, STRING=54, 
		LIST=55, NUMBER=56, LINECOMMENT=57, BLOCKCOMMENT=58, WHITESPACE=59;
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
			"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", 
			"ADD", "SUB", "MUL", "DIV", "GREATER_THAN", "LESS_THAN", "EQUAL_TO", 
			"NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", "OR", 
			"AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
			"IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", "FOR", 
			"RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", "INT", "STRING", "LIST", 
			"NUMBER", "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2=\u0189\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\23"+
		"\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32"+
		"\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3"+
		" \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3$\3$\3%\3%\3&\3&\3&\3\'\3\'\3\'\3"+
		"(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3+\3+\3+\3+\3,\3,\3,\3-\3-\3-\3.\3.\3.\3"+
		".\3.\3.\3.\3.\3.\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3"+
		"\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\3"+
		"\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\7\65\u013d\n\65\f\65\16\65\u0140"+
		"\13\65\3\66\3\66\3\66\3\66\3\67\3\67\3\67\7\67\u0149\n\67\f\67\16\67\u014c"+
		"\13\67\5\67\u014e\n\67\38\38\78\u0152\n8\f8\168\u0155\138\38\38\39\39"+
		"\69\u015b\n9\r9\169\u015c\39\39\3:\5:\u0162\n:\3:\3:\3:\6:\u0167\n:\r"+
		":\16:\u0168\5:\u016b\n:\3;\3;\3;\3;\7;\u0171\n;\f;\16;\u0174\13;\3;\3"+
		";\3<\3<\3<\3<\7<\u017c\n<\f<\16<\u017f\13<\3<\3<\3<\3<\3<\3=\3=\3=\3="+
		"\4\u015c\u017d\2>\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64"+
		"g\65i\66k\67m\2o8q9s:u;w<y=\3\2\t\4\2C\\c|\7\2\60\60\62;C\\aac|\3\2\63"+
		";\3\2\62;\5\2\f\f\17\17$$\4\2\f\f\17\17\5\2\13\f\17\17\"\"\2\u0191\2\3"+
		"\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2"+
		"\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31"+
		"\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2"+
		"\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2"+
		"\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2"+
		"\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2"+
		"I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3"+
		"\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2"+
		"\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2o\3\2\2\2\2"+
		"q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\3{\3\2\2\2\5\u0081"+
		"\3\2\2\2\7\u0088\3\2\2\2\t\u008a\3\2\2\2\13\u008c\3\2\2\2\r\u0092\3\2"+
		"\2\2\17\u009a\3\2\2\2\21\u009e\3\2\2\2\23\u00a5\3\2\2\2\25\u00a8\3\2\2"+
		"\2\27\u00aa\3\2\2\2\31\u00ac\3\2\2\2\33\u00b3\3\2\2\2\35\u00b8\3\2\2\2"+
		"\37\u00bc\3\2\2\2!\u00c3\3\2\2\2#\u00c8\3\2\2\2%\u00cb\3\2\2\2\'\u00cd"+
		"\3\2\2\2)\u00cf\3\2\2\2+\u00d1\3\2\2\2-\u00d3\3\2\2\2/\u00d5\3\2\2\2\61"+
		"\u00d7\3\2\2\2\63\u00d9\3\2\2\2\65\u00db\3\2\2\2\67\u00dd\3\2\2\29\u00df"+
		"\3\2\2\2;\u00e1\3\2\2\2=\u00e4\3\2\2\2?\u00e7\3\2\2\2A\u00ea\3\2\2\2C"+
		"\u00ed\3\2\2\2E\u00f0\3\2\2\2G\u00f3\3\2\2\2I\u00f5\3\2\2\2K\u00f7\3\2"+
		"\2\2M\u00fa\3\2\2\2O\u00fd\3\2\2\2Q\u0100\3\2\2\2S\u0103\3\2\2\2U\u0106"+
		"\3\2\2\2W\u010b\3\2\2\2Y\u010e\3\2\2\2[\u0111\3\2\2\2]\u011a\3\2\2\2_"+
		"\u011e\3\2\2\2a\u0124\3\2\2\2c\u0128\3\2\2\2e\u012f\3\2\2\2g\u0134\3\2"+
		"\2\2i\u013a\3\2\2\2k\u0141\3\2\2\2m\u014d\3\2\2\2o\u014f\3\2\2\2q\u0158"+
		"\3\2\2\2s\u0161\3\2\2\2u\u016c\3\2\2\2w\u0177\3\2\2\2y\u0185\3\2\2\2{"+
		"|\7p\2\2|}\7c\2\2}~\7o\2\2~\177\7g\2\2\177\u0080\7<\2\2\u0080\4\3\2\2"+
		"\2\u0081\u0082\7k\2\2\u0082\u0083\7o\2\2\u0083\u0084\7r\2\2\u0084\u0085"+
		"\7q\2\2\u0085\u0086\7t\2\2\u0086\u0087\7v\2\2\u0087\6\3\2\2\2\u0088\u0089"+
		"\7<\2\2\u0089\b\3\2\2\2\u008a\u008b\7.\2\2\u008b\n\3\2\2\2\u008c\u008d"+
		"\7e\2\2\u008d\u008e\7n\2\2\u008e\u008f\7c\2\2\u008f\u0090\7u\2\2\u0090"+
		"\u0091\7u\2\2\u0091\f\3\2\2\2\u0092\u0093\7g\2\2\u0093\u0094\7z\2\2\u0094"+
		"\u0095\7v\2\2\u0095\u0096\7g\2\2\u0096\u0097\7p\2\2\u0097\u0098\7f\2\2"+
		"\u0098\u0099\7u\2\2\u0099\16\3\2\2\2\u009a\u009b\7p\2\2\u009b\u009c\7"+
		"g\2\2\u009c\u009d\7y\2\2\u009d\20\3\2\2\2\u009e\u009f\7a\2\2\u009f\u00a0"+
		"\7a\2\2\u00a0\u00a1\7N\2\2\u00a1\u00a2\7N\2\2\u00a2\u00a3\7X\2\2\u00a3"+
		"\u00a4\7O\2\2\u00a4\22\3\2\2\2\u00a5\u00a6\7k\2\2\u00a6\u00a7\7p\2\2\u00a7"+
		"\24\3\2\2\2\u00a8\u00a9\7]\2\2\u00a9\26\3\2\2\2\u00aa\u00ab\7_\2\2\u00ab"+
		"\30\3\2\2\2\u00ac\u00ad\7q\2\2\u00ad\u00ae\7d\2\2\u00ae\u00af\7l\2\2\u00af"+
		"\u00b0\7g\2\2\u00b0\u00b1\7e\2\2\u00b1\u00b2\7v\2\2\u00b2\32\3\2\2\2\u00b3"+
		"\u00b4\7x\2\2\u00b4\u00b5\7q\2\2\u00b5\u00b6\7k\2\2\u00b6\u00b7\7f\2\2"+
		"\u00b7\34\3\2\2\2\u00b8\u00b9\7u\2\2\u00b9\u00ba\7v\2\2\u00ba\u00bb\7"+
		"t\2\2\u00bb\36\3\2\2\2\u00bc\u00bd\7p\2\2\u00bd\u00be\7w\2\2\u00be\u00bf"+
		"\7o\2\2\u00bf\u00c0\7d\2\2\u00c0\u00c1\7g\2\2\u00c1\u00c2\7t\2\2\u00c2"+
		" \3\2\2\2\u00c3\u00c4\7d\2\2\u00c4\u00c5\7q\2\2\u00c5\u00c6\7q\2\2\u00c6"+
		"\u00c7\7n\2\2\u00c7\"\3\2\2\2\u00c8\u00c9\7]\2\2\u00c9\u00ca\7_\2\2\u00ca"+
		"$\3\2\2\2\u00cb\u00cc\7*\2\2\u00cc&\3\2\2\2\u00cd\u00ce\7+\2\2\u00ce("+
		"\3\2\2\2\u00cf\u00d0\7}\2\2\u00d0*\3\2\2\2\u00d1\u00d2\7\177\2\2\u00d2"+
		",\3\2\2\2\u00d3\u00d4\7=\2\2\u00d4.\3\2\2\2\u00d5\u00d6\7-\2\2\u00d6\60"+
		"\3\2\2\2\u00d7\u00d8\7/\2\2\u00d8\62\3\2\2\2\u00d9\u00da\7,\2\2\u00da"+
		"\64\3\2\2\2\u00db\u00dc\7\61\2\2\u00dc\66\3\2\2\2\u00dd\u00de\7@\2\2\u00de"+
		"8\3\2\2\2\u00df\u00e0\7>\2\2\u00e0:\3\2\2\2\u00e1\u00e2\7?\2\2\u00e2\u00e3"+
		"\7?\2\2\u00e3<\3\2\2\2\u00e4\u00e5\7#\2\2\u00e5\u00e6\7?\2\2\u00e6>\3"+
		"\2\2\2\u00e7\u00e8\7@\2\2\u00e8\u00e9\7?\2\2\u00e9@\3\2\2\2\u00ea\u00eb"+
		"\7>\2\2\u00eb\u00ec\7?\2\2\u00ecB\3\2\2\2\u00ed\u00ee\7~\2\2\u00ee\u00ef"+
		"\7~\2\2\u00efD\3\2\2\2\u00f0\u00f1\7(\2\2\u00f1\u00f2\7(\2\2\u00f2F\3"+
		"\2\2\2\u00f3\u00f4\7#\2\2\u00f4H\3\2\2\2\u00f5\u00f6\7?\2\2\u00f6J\3\2"+
		"\2\2\u00f7\u00f8\7-\2\2\u00f8\u00f9\7?\2\2\u00f9L\3\2\2\2\u00fa\u00fb"+
		"\7/\2\2\u00fb\u00fc\7?\2\2\u00fcN\3\2\2\2\u00fd\u00fe\7,\2\2\u00fe\u00ff"+
		"\7?\2\2\u00ffP\3\2\2\2\u0100\u0101\7\61\2\2\u0101\u0102\7?\2\2\u0102R"+
		"\3\2\2\2\u0103\u0104\7k\2\2\u0104\u0105\7h\2\2\u0105T\3\2\2\2\u0106\u0107"+
		"\7g\2\2\u0107\u0108\7n\2\2\u0108\u0109\7u\2\2\u0109\u010a\7g\2\2\u010a"+
		"V\3\2\2\2\u010b\u010c\7-\2\2\u010c\u010d\7-\2\2\u010dX\3\2\2\2\u010e\u010f"+
		"\7/\2\2\u010f\u0110\7/\2\2\u0110Z\3\2\2\2\u0111\u0112\7h\2\2\u0112\u0113"+
		"\7w\2\2\u0113\u0114\7p\2\2\u0114\u0115\7e\2\2\u0115\u0116\7v\2\2\u0116"+
		"\u0117\7k\2\2\u0117\u0118\7q\2\2\u0118\u0119\7p\2\2\u0119\\\3\2\2\2\u011a"+
		"\u011b\7x\2\2\u011b\u011c\7c\2\2\u011c\u011d\7t\2\2\u011d^\3\2\2\2\u011e"+
		"\u011f\7y\2\2\u011f\u0120\7j\2\2\u0120\u0121\7k\2\2\u0121\u0122\7n\2\2"+
		"\u0122\u0123\7g\2\2\u0123`\3\2\2\2\u0124\u0125\7h\2\2\u0125\u0126\7q\2"+
		"\2\u0126\u0127\7t\2\2\u0127b\3\2\2\2\u0128\u0129\7t\2\2\u0129\u012a\7"+
		"g\2\2\u012a\u012b\7v\2\2\u012b\u012c\7w\2\2\u012c\u012d\7t\2\2\u012d\u012e"+
		"\7p\2\2\u012ed\3\2\2\2\u012f\u0130\7v\2\2\u0130\u0131\7t\2\2\u0131\u0132"+
		"\7w\2\2\u0132\u0133\7g\2\2\u0133f\3\2\2\2\u0134\u0135\7h\2\2\u0135\u0136"+
		"\7c\2\2\u0136\u0137\7n\2\2\u0137\u0138\7u\2\2\u0138\u0139\7g\2\2\u0139"+
		"h\3\2\2\2\u013a\u013e\t\2\2\2\u013b\u013d\t\3\2\2\u013c\u013b\3\2\2\2"+
		"\u013d\u0140\3\2\2\2\u013e\u013c\3\2\2\2\u013e\u013f\3\2\2\2\u013fj\3"+
		"\2\2\2\u0140\u013e\3\2\2\2\u0141\u0142\7&\2\2\u0142\u0143\7r\2\2\u0143"+
		"\u0144\7k\2\2\u0144l\3\2\2\2\u0145\u014e\7\62\2\2\u0146\u014a\t\4\2\2"+
		"\u0147\u0149\t\5\2\2\u0148\u0147\3\2\2\2\u0149\u014c\3\2\2\2\u014a\u0148"+
		"\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014e\3\2\2\2\u014c\u014a\3\2\2\2\u014d"+
		"\u0145\3\2\2\2\u014d\u0146\3\2\2\2\u014en\3\2\2\2\u014f\u0153\7$\2\2\u0150"+
		"\u0152\n\6\2\2\u0151\u0150\3\2\2\2\u0152\u0155\3\2\2\2\u0153\u0151\3\2"+
		"\2\2\u0153\u0154\3\2\2\2\u0154\u0156\3\2\2\2\u0155\u0153\3\2\2\2\u0156"+
		"\u0157\7$\2\2\u0157p\3\2\2\2\u0158\u015a\7]\2\2\u0159\u015b\13\2\2\2\u015a"+
		"\u0159\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015d\3\2\2\2\u015c\u015a\3\2"+
		"\2\2\u015d\u015e\3\2\2\2\u015e\u015f\7_\2\2\u015fr\3\2\2\2\u0160\u0162"+
		"\7/\2\2\u0161\u0160\3\2\2\2\u0161\u0162\3\2\2\2\u0162\u0163\3\2\2\2\u0163"+
		"\u016a\5m\67\2\u0164\u0166\7\60\2\2\u0165\u0167\t\5\2\2\u0166\u0165\3"+
		"\2\2\2\u0167\u0168\3\2\2\2\u0168\u0166\3\2\2\2\u0168\u0169\3\2\2\2\u0169"+
		"\u016b\3\2\2\2\u016a\u0164\3\2\2\2\u016a\u016b\3\2\2\2\u016bt\3\2\2\2"+
		"\u016c\u016d\7\61\2\2\u016d\u016e\7\61\2\2\u016e\u0172\3\2\2\2\u016f\u0171"+
		"\n\7\2\2\u0170\u016f\3\2\2\2\u0171\u0174\3\2\2\2\u0172\u0170\3\2\2\2\u0172"+
		"\u0173\3\2\2\2\u0173\u0175\3\2\2\2\u0174\u0172\3\2\2\2\u0175\u0176\b;"+
		"\2\2\u0176v\3\2\2\2\u0177\u0178\7\61\2\2\u0178\u0179\7,\2\2\u0179\u017d"+
		"\3\2\2\2\u017a\u017c\13\2\2\2\u017b\u017a\3\2\2\2\u017c\u017f\3\2\2\2"+
		"\u017d\u017e\3\2\2\2\u017d\u017b\3\2\2\2\u017e\u0180\3\2\2\2\u017f\u017d"+
		"\3\2\2\2\u0180\u0181\7,\2\2\u0181\u0182\7\61\2\2\u0182\u0183\3\2\2\2\u0183"+
		"\u0184\b<\2\2\u0184x\3\2\2\2\u0185\u0186\t\b\2\2\u0186\u0187\3\2\2\2\u0187"+
		"\u0188\b=\2\2\u0188z\3\2\2\2\r\2\u013e\u014a\u014d\u0153\u015c\u0161\u0168"+
		"\u016a\u0172\u017d\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}