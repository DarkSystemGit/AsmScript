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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, OPEN_BRACKET=16, 
		CLOSE_BRACKET=17, OPEN_CURLEY=18, CLOSE_CURLEY=19, END_STMT=20, ADD=21, 
		SUB=22, MUL=23, DIV=24, GREATER_THAN=25, LESS_THAN=26, EQUAL_TO=27, NOT_EQUAL_TO=28, 
		GREATER_THAN_OR_EQUAL=29, LESS_THAN_OR_EQUAL=30, OR=31, AND=32, NOT=33, 
		ASSIGN=34, ADDASSIGN=35, SUBASSIGN=36, MULASSIGN=37, DIVASSIGN=38, IF=39, 
		ELSE=40, INCREMENT=41, DECREMENT=42, DEF=43, VAR=44, WHILE=45, FOR=46, 
		RETURN=47, TRUE=48, FALSE=49, IDENTIFIER=50, PI=51, STRING=52, LIST=53, 
		NUMBER=54, LINECOMMENT=55, BLOCKCOMMENT=56, WHITESPACE=57;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "OPEN_BRACKET", 
			"CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", "ADD", "SUB", 
			"MUL", "DIV", "GREATER_THAN", "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", 
			"GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", 
			"ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", "IF", "ELSE", "INCREMENT", 
			"DECREMENT", "DEF", "VAR", "WHILE", "FOR", "RETURN", "TRUE", "FALSE", 
			"IDENTIFIER", "PI", "INT", "STRING", "LIST", "NUMBER", "LINECOMMENT", 
			"BLOCKCOMMENT", "WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name:'", "'import'", "'function '", "':'", "','", "'__ASM'", 
			"'in'", "'['", "']'", "'void'", "'list'", "'str'", "'number'", "'bool'", 
			"'[]'", "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", 
			"'>'", "'<'", "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", "'!'", 
			"'='", "'+='", "'-='", "'*='", "'/='", "'if'", "'else'", "'++'", "'--'", 
			"'function'", "'var'", "'while'", "'for'", "'return'", "'true'", "'false'", 
			null, "'$pi'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_CURLEY", 
			"CLOSE_CURLEY", "END_STMT", "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
			"LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", "LESS_THAN_OR_EQUAL", 
			"OR", "AND", "NOT", "ASSIGN", "ADDASSIGN", "SUBASSIGN", "MULASSIGN", 
			"DIVASSIGN", "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", "WHILE", 
			"FOR", "RETURN", "TRUE", "FALSE", "IDENTIFIER", "PI", "STRING", "LIST", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2;\u017a\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t"+
		"\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27"+
		"\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\34\3\35\3\35"+
		"\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3#\3#\3"+
		"$\3$\3$\3%\3%\3%\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3"+
		"*\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3"+
		"/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61"+
		"\3\62\3\62\3\62\3\62\3\62\3\62\3\63\3\63\7\63\u012e\n\63\f\63\16\63\u0131"+
		"\13\63\3\64\3\64\3\64\3\64\3\65\3\65\3\65\7\65\u013a\n\65\f\65\16\65\u013d"+
		"\13\65\5\65\u013f\n\65\3\66\3\66\7\66\u0143\n\66\f\66\16\66\u0146\13\66"+
		"\3\66\3\66\3\67\3\67\6\67\u014c\n\67\r\67\16\67\u014d\3\67\3\67\38\58"+
		"\u0153\n8\38\38\38\68\u0158\n8\r8\168\u0159\58\u015c\n8\39\39\39\39\7"+
		"9\u0162\n9\f9\169\u0165\139\39\39\3:\3:\3:\3:\7:\u016d\n:\f:\16:\u0170"+
		"\13:\3:\3:\3:\3:\3:\3;\3;\3;\3;\4\u014d\u016e\2<\3\3\5\4\7\5\t\6\13\7"+
		"\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25"+
		")\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O"+
		")Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\2k\66m\67o8q9s:u;\3\2\t\4\2C\\"+
		"c|\7\2\60\60\62;C\\aac|\3\2\63;\3\2\62;\5\2\f\f\17\17$$\4\2\f\f\17\17"+
		"\5\2\13\f\17\17\"\"\2\u0182\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3"+
		"\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2"+
		"\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37"+
		"\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3"+
		"\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2"+
		"\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C"+
		"\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2"+
		"\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2"+
		"\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2k"+
		"\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\3w\3\2"+
		"\2\2\5}\3\2\2\2\7\u0084\3\2\2\2\t\u008e\3\2\2\2\13\u0090\3\2\2\2\r\u0092"+
		"\3\2\2\2\17\u0098\3\2\2\2\21\u009b\3\2\2\2\23\u009d\3\2\2\2\25\u009f\3"+
		"\2\2\2\27\u00a4\3\2\2\2\31\u00a9\3\2\2\2\33\u00ad\3\2\2\2\35\u00b4\3\2"+
		"\2\2\37\u00b9\3\2\2\2!\u00bc\3\2\2\2#\u00be\3\2\2\2%\u00c0\3\2\2\2\'\u00c2"+
		"\3\2\2\2)\u00c4\3\2\2\2+\u00c6\3\2\2\2-\u00c8\3\2\2\2/\u00ca\3\2\2\2\61"+
		"\u00cc\3\2\2\2\63\u00ce\3\2\2\2\65\u00d0\3\2\2\2\67\u00d2\3\2\2\29\u00d5"+
		"\3\2\2\2;\u00d8\3\2\2\2=\u00db\3\2\2\2?\u00de\3\2\2\2A\u00e1\3\2\2\2C"+
		"\u00e4\3\2\2\2E\u00e6\3\2\2\2G\u00e8\3\2\2\2I\u00eb\3\2\2\2K\u00ee\3\2"+
		"\2\2M\u00f1\3\2\2\2O\u00f4\3\2\2\2Q\u00f7\3\2\2\2S\u00fc\3\2\2\2U\u00ff"+
		"\3\2\2\2W\u0102\3\2\2\2Y\u010b\3\2\2\2[\u010f\3\2\2\2]\u0115\3\2\2\2_"+
		"\u0119\3\2\2\2a\u0120\3\2\2\2c\u0125\3\2\2\2e\u012b\3\2\2\2g\u0132\3\2"+
		"\2\2i\u013e\3\2\2\2k\u0140\3\2\2\2m\u0149\3\2\2\2o\u0152\3\2\2\2q\u015d"+
		"\3\2\2\2s\u0168\3\2\2\2u\u0176\3\2\2\2wx\7p\2\2xy\7c\2\2yz\7o\2\2z{\7"+
		"g\2\2{|\7<\2\2|\4\3\2\2\2}~\7k\2\2~\177\7o\2\2\177\u0080\7r\2\2\u0080"+
		"\u0081\7q\2\2\u0081\u0082\7t\2\2\u0082\u0083\7v\2\2\u0083\6\3\2\2\2\u0084"+
		"\u0085\7h\2\2\u0085\u0086\7w\2\2\u0086\u0087\7p\2\2\u0087\u0088\7e\2\2"+
		"\u0088\u0089\7v\2\2\u0089\u008a\7k\2\2\u008a\u008b\7q\2\2\u008b\u008c"+
		"\7p\2\2\u008c\u008d\7\"\2\2\u008d\b\3\2\2\2\u008e\u008f\7<\2\2\u008f\n"+
		"\3\2\2\2\u0090\u0091\7.\2\2\u0091\f\3\2\2\2\u0092\u0093\7a\2\2\u0093\u0094"+
		"\7a\2\2\u0094\u0095\7C\2\2\u0095\u0096\7U\2\2\u0096\u0097\7O\2\2\u0097"+
		"\16\3\2\2\2\u0098\u0099\7k\2\2\u0099\u009a\7p\2\2\u009a\20\3\2\2\2\u009b"+
		"\u009c\7]\2\2\u009c\22\3\2\2\2\u009d\u009e\7_\2\2\u009e\24\3\2\2\2\u009f"+
		"\u00a0\7x\2\2\u00a0\u00a1\7q\2\2\u00a1\u00a2\7k\2\2\u00a2\u00a3\7f\2\2"+
		"\u00a3\26\3\2\2\2\u00a4\u00a5\7n\2\2\u00a5\u00a6\7k\2\2\u00a6\u00a7\7"+
		"u\2\2\u00a7\u00a8\7v\2\2\u00a8\30\3\2\2\2\u00a9\u00aa\7u\2\2\u00aa\u00ab"+
		"\7v\2\2\u00ab\u00ac\7t\2\2\u00ac\32\3\2\2\2\u00ad\u00ae\7p\2\2\u00ae\u00af"+
		"\7w\2\2\u00af\u00b0\7o\2\2\u00b0\u00b1\7d\2\2\u00b1\u00b2\7g\2\2\u00b2"+
		"\u00b3\7t\2\2\u00b3\34\3\2\2\2\u00b4\u00b5\7d\2\2\u00b5\u00b6\7q\2\2\u00b6"+
		"\u00b7\7q\2\2\u00b7\u00b8\7n\2\2\u00b8\36\3\2\2\2\u00b9\u00ba\7]\2\2\u00ba"+
		"\u00bb\7_\2\2\u00bb \3\2\2\2\u00bc\u00bd\7*\2\2\u00bd\"\3\2\2\2\u00be"+
		"\u00bf\7+\2\2\u00bf$\3\2\2\2\u00c0\u00c1\7}\2\2\u00c1&\3\2\2\2\u00c2\u00c3"+
		"\7\177\2\2\u00c3(\3\2\2\2\u00c4\u00c5\7=\2\2\u00c5*\3\2\2\2\u00c6\u00c7"+
		"\7-\2\2\u00c7,\3\2\2\2\u00c8\u00c9\7/\2\2\u00c9.\3\2\2\2\u00ca\u00cb\7"+
		",\2\2\u00cb\60\3\2\2\2\u00cc\u00cd\7\61\2\2\u00cd\62\3\2\2\2\u00ce\u00cf"+
		"\7@\2\2\u00cf\64\3\2\2\2\u00d0\u00d1\7>\2\2\u00d1\66\3\2\2\2\u00d2\u00d3"+
		"\7?\2\2\u00d3\u00d4\7?\2\2\u00d48\3\2\2\2\u00d5\u00d6\7#\2\2\u00d6\u00d7"+
		"\7?\2\2\u00d7:\3\2\2\2\u00d8\u00d9\7@\2\2\u00d9\u00da\7?\2\2\u00da<\3"+
		"\2\2\2\u00db\u00dc\7>\2\2\u00dc\u00dd\7?\2\2\u00dd>\3\2\2\2\u00de\u00df"+
		"\7~\2\2\u00df\u00e0\7~\2\2\u00e0@\3\2\2\2\u00e1\u00e2\7(\2\2\u00e2\u00e3"+
		"\7(\2\2\u00e3B\3\2\2\2\u00e4\u00e5\7#\2\2\u00e5D\3\2\2\2\u00e6\u00e7\7"+
		"?\2\2\u00e7F\3\2\2\2\u00e8\u00e9\7-\2\2\u00e9\u00ea\7?\2\2\u00eaH\3\2"+
		"\2\2\u00eb\u00ec\7/\2\2\u00ec\u00ed\7?\2\2\u00edJ\3\2\2\2\u00ee\u00ef"+
		"\7,\2\2\u00ef\u00f0\7?\2\2\u00f0L\3\2\2\2\u00f1\u00f2\7\61\2\2\u00f2\u00f3"+
		"\7?\2\2\u00f3N\3\2\2\2\u00f4\u00f5\7k\2\2\u00f5\u00f6\7h\2\2\u00f6P\3"+
		"\2\2\2\u00f7\u00f8\7g\2\2\u00f8\u00f9\7n\2\2\u00f9\u00fa\7u\2\2\u00fa"+
		"\u00fb\7g\2\2\u00fbR\3\2\2\2\u00fc\u00fd\7-\2\2\u00fd\u00fe\7-\2\2\u00fe"+
		"T\3\2\2\2\u00ff\u0100\7/\2\2\u0100\u0101\7/\2\2\u0101V\3\2\2\2\u0102\u0103"+
		"\7h\2\2\u0103\u0104\7w\2\2\u0104\u0105\7p\2\2\u0105\u0106\7e\2\2\u0106"+
		"\u0107\7v\2\2\u0107\u0108\7k\2\2\u0108\u0109\7q\2\2\u0109\u010a\7p\2\2"+
		"\u010aX\3\2\2\2\u010b\u010c\7x\2\2\u010c\u010d\7c\2\2\u010d\u010e\7t\2"+
		"\2\u010eZ\3\2\2\2\u010f\u0110\7y\2\2\u0110\u0111\7j\2\2\u0111\u0112\7"+
		"k\2\2\u0112\u0113\7n\2\2\u0113\u0114\7g\2\2\u0114\\\3\2\2\2\u0115\u0116"+
		"\7h\2\2\u0116\u0117\7q\2\2\u0117\u0118\7t\2\2\u0118^\3\2\2\2\u0119\u011a"+
		"\7t\2\2\u011a\u011b\7g\2\2\u011b\u011c\7v\2\2\u011c\u011d\7w\2\2\u011d"+
		"\u011e\7t\2\2\u011e\u011f\7p\2\2\u011f`\3\2\2\2\u0120\u0121\7v\2\2\u0121"+
		"\u0122\7t\2\2\u0122\u0123\7w\2\2\u0123\u0124\7g\2\2\u0124b\3\2\2\2\u0125"+
		"\u0126\7h\2\2\u0126\u0127\7c\2\2\u0127\u0128\7n\2\2\u0128\u0129\7u\2\2"+
		"\u0129\u012a\7g\2\2\u012ad\3\2\2\2\u012b\u012f\t\2\2\2\u012c\u012e\t\3"+
		"\2\2\u012d\u012c\3\2\2\2\u012e\u0131\3\2\2\2\u012f\u012d\3\2\2\2\u012f"+
		"\u0130\3\2\2\2\u0130f\3\2\2\2\u0131\u012f\3\2\2\2\u0132\u0133\7&\2\2\u0133"+
		"\u0134\7r\2\2\u0134\u0135\7k\2\2\u0135h\3\2\2\2\u0136\u013f\7\62\2\2\u0137"+
		"\u013b\t\4\2\2\u0138\u013a\t\5\2\2\u0139\u0138\3\2\2\2\u013a\u013d\3\2"+
		"\2\2\u013b\u0139\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013f\3\2\2\2\u013d"+
		"\u013b\3\2\2\2\u013e\u0136\3\2\2\2\u013e\u0137\3\2\2\2\u013fj\3\2\2\2"+
		"\u0140\u0144\7$\2\2\u0141\u0143\n\6\2\2\u0142\u0141\3\2\2\2\u0143\u0146"+
		"\3\2\2\2\u0144\u0142\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0147\3\2\2\2\u0146"+
		"\u0144\3\2\2\2\u0147\u0148\7$\2\2\u0148l\3\2\2\2\u0149\u014b\7]\2\2\u014a"+
		"\u014c\13\2\2\2\u014b\u014a\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014e\3"+
		"\2\2\2\u014d\u014b\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0150\7_\2\2\u0150"+
		"n\3\2\2\2\u0151\u0153\7/\2\2\u0152\u0151\3\2\2\2\u0152\u0153\3\2\2\2\u0153"+
		"\u0154\3\2\2\2\u0154\u015b\5i\65\2\u0155\u0157\7\60\2\2\u0156\u0158\t"+
		"\5\2\2\u0157\u0156\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u0157\3\2\2\2\u0159"+
		"\u015a\3\2\2\2\u015a\u015c\3\2\2\2\u015b\u0155\3\2\2\2\u015b\u015c\3\2"+
		"\2\2\u015cp\3\2\2\2\u015d\u015e\7\61\2\2\u015e\u015f\7\61\2\2\u015f\u0163"+
		"\3\2\2\2\u0160\u0162\n\7\2\2\u0161\u0160\3\2\2\2\u0162\u0165\3\2\2\2\u0163"+
		"\u0161\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0166\3\2\2\2\u0165\u0163\3\2"+
		"\2\2\u0166\u0167\b9\2\2\u0167r\3\2\2\2\u0168\u0169\7\61\2\2\u0169\u016a"+
		"\7,\2\2\u016a\u016e\3\2\2\2\u016b\u016d\13\2\2\2\u016c\u016b\3\2\2\2\u016d"+
		"\u0170\3\2\2\2\u016e\u016f\3\2\2\2\u016e\u016c\3\2\2\2\u016f\u0171\3\2"+
		"\2\2\u0170\u016e\3\2\2\2\u0171\u0172\7,\2\2\u0172\u0173\7\61\2\2\u0173"+
		"\u0174\3\2\2\2\u0174\u0175\b:\2\2\u0175t\3\2\2\2\u0176\u0177\t\b\2\2\u0177"+
		"\u0178\3\2\2\2\u0178\u0179\b;\2\2\u0179v\3\2\2\2\r\2\u012f\u013b\u013e"+
		"\u0144\u014d\u0152\u0159\u015b\u0163\u016e\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}