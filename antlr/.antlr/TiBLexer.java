// Generated from /workspaces/ICEScript/antlr/TiB.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class TiBLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, LETTER=21, NUMBER=22, LINECOMMENT=23, BLOCKCOMMENT=24, 
		WHITESPACE=25;
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
			"T__17", "T__18", "T__19", "LETTER", "NUMBER", "INT", "LINECOMMENT", 
			"BLOCKCOMMENT", "WHITESPACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'DISP'", "'INPUT'", "'->'", "'IF'", "'THEN'", "'END'", "'LIST'", 
			"' '", "'\"'", "':'", "';'", "','", "'.'", "'('", "')'", "'='", "'pi'", 
			"'e'", "'i'", "'\\n'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "LETTER", "NUMBER", 
			"LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE"
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


	public TiBLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TiB.g4"; }

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
		"\u0004\u0000\u0019\u009a\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0005"+
		"\u0016w\b\u0016\n\u0016\f\u0016z\t\u0016\u0003\u0016|\b\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u0082\b\u0017\n\u0017"+
		"\f\u0017\u0085\t\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0005\u0018\u008d\b\u0018\n\u0018\f\u0018\u0090"+
		"\t\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u008e\u0000\u001a\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0000/"+
		"\u00171\u00183\u0019\u0001\u0000\u0005\u0001\u0000AZ\u0001\u000009\u0001"+
		"\u000019\u0002\u0000\n\n\r\r\u0003\u0000\t\n\r\r  \u009c\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000"+
		"\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000"+
		"\u00003\u0001\u0000\u0000\u0000\u00015\u0001\u0000\u0000\u0000\u0003:"+
		"\u0001\u0000\u0000\u0000\u0005@\u0001\u0000\u0000\u0000\u0007C\u0001\u0000"+
		"\u0000\u0000\tF\u0001\u0000\u0000\u0000\u000bK\u0001\u0000\u0000\u0000"+
		"\rO\u0001\u0000\u0000\u0000\u000fT\u0001\u0000\u0000\u0000\u0011V\u0001"+
		"\u0000\u0000\u0000\u0013X\u0001\u0000\u0000\u0000\u0015Z\u0001\u0000\u0000"+
		"\u0000\u0017\\\u0001\u0000\u0000\u0000\u0019^\u0001\u0000\u0000\u0000"+
		"\u001b`\u0001\u0000\u0000\u0000\u001db\u0001\u0000\u0000\u0000\u001fd"+
		"\u0001\u0000\u0000\u0000!f\u0001\u0000\u0000\u0000#i\u0001\u0000\u0000"+
		"\u0000%k\u0001\u0000\u0000\u0000\'m\u0001\u0000\u0000\u0000)o\u0001\u0000"+
		"\u0000\u0000+q\u0001\u0000\u0000\u0000-{\u0001\u0000\u0000\u0000/}\u0001"+
		"\u0000\u0000\u00001\u0088\u0001\u0000\u0000\u00003\u0096\u0001\u0000\u0000"+
		"\u000056\u0005D\u0000\u000067\u0005I\u0000\u000078\u0005S\u0000\u0000"+
		"89\u0005P\u0000\u00009\u0002\u0001\u0000\u0000\u0000:;\u0005I\u0000\u0000"+
		";<\u0005N\u0000\u0000<=\u0005P\u0000\u0000=>\u0005U\u0000\u0000>?\u0005"+
		"T\u0000\u0000?\u0004\u0001\u0000\u0000\u0000@A\u0005-\u0000\u0000AB\u0005"+
		">\u0000\u0000B\u0006\u0001\u0000\u0000\u0000CD\u0005I\u0000\u0000DE\u0005"+
		"F\u0000\u0000E\b\u0001\u0000\u0000\u0000FG\u0005T\u0000\u0000GH\u0005"+
		"H\u0000\u0000HI\u0005E\u0000\u0000IJ\u0005N\u0000\u0000J\n\u0001\u0000"+
		"\u0000\u0000KL\u0005E\u0000\u0000LM\u0005N\u0000\u0000MN\u0005D\u0000"+
		"\u0000N\f\u0001\u0000\u0000\u0000OP\u0005L\u0000\u0000PQ\u0005I\u0000"+
		"\u0000QR\u0005S\u0000\u0000RS\u0005T\u0000\u0000S\u000e\u0001\u0000\u0000"+
		"\u0000TU\u0005 \u0000\u0000U\u0010\u0001\u0000\u0000\u0000VW\u0005\"\u0000"+
		"\u0000W\u0012\u0001\u0000\u0000\u0000XY\u0005:\u0000\u0000Y\u0014\u0001"+
		"\u0000\u0000\u0000Z[\u0005;\u0000\u0000[\u0016\u0001\u0000\u0000\u0000"+
		"\\]\u0005,\u0000\u0000]\u0018\u0001\u0000\u0000\u0000^_\u0005.\u0000\u0000"+
		"_\u001a\u0001\u0000\u0000\u0000`a\u0005(\u0000\u0000a\u001c\u0001\u0000"+
		"\u0000\u0000bc\u0005)\u0000\u0000c\u001e\u0001\u0000\u0000\u0000de\u0005"+
		"=\u0000\u0000e \u0001\u0000\u0000\u0000fg\u0005p\u0000\u0000gh\u0005i"+
		"\u0000\u0000h\"\u0001\u0000\u0000\u0000ij\u0005e\u0000\u0000j$\u0001\u0000"+
		"\u0000\u0000kl\u0005i\u0000\u0000l&\u0001\u0000\u0000\u0000mn\u0005\n"+
		"\u0000\u0000n(\u0001\u0000\u0000\u0000op\u0007\u0000\u0000\u0000p*\u0001"+
		"\u0000\u0000\u0000qr\u0007\u0001\u0000\u0000r,\u0001\u0000\u0000\u0000"+
		"s|\u00050\u0000\u0000tx\u0007\u0002\u0000\u0000uw\u0007\u0001\u0000\u0000"+
		"vu\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000"+
		"\u0000xy\u0001\u0000\u0000\u0000y|\u0001\u0000\u0000\u0000zx\u0001\u0000"+
		"\u0000\u0000{s\u0001\u0000\u0000\u0000{t\u0001\u0000\u0000\u0000|.\u0001"+
		"\u0000\u0000\u0000}~\u0005/\u0000\u0000~\u007f\u0005/\u0000\u0000\u007f"+
		"\u0083\u0001\u0000\u0000\u0000\u0080\u0082\b\u0003\u0000\u0000\u0081\u0080"+
		"\u0001\u0000\u0000\u0000\u0082\u0085\u0001\u0000\u0000\u0000\u0083\u0081"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0086"+
		"\u0001\u0000\u0000\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0086\u0087"+
		"\u0006\u0017\u0000\u0000\u00870\u0001\u0000\u0000\u0000\u0088\u0089\u0005"+
		"/\u0000\u0000\u0089\u008a\u0005*\u0000\u0000\u008a\u008e\u0001\u0000\u0000"+
		"\u0000\u008b\u008d\t\u0000\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000"+
		"\u008d\u0090\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000"+
		"\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0091\u0001\u0000\u0000\u0000"+
		"\u0090\u008e\u0001\u0000\u0000\u0000\u0091\u0092\u0005*\u0000\u0000\u0092"+
		"\u0093\u0005/\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0095"+
		"\u0006\u0018\u0000\u0000\u00952\u0001\u0000\u0000\u0000\u0096\u0097\u0007"+
		"\u0004\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0098\u0099\u0006"+
		"\u0019\u0000\u0000\u00994\u0001\u0000\u0000\u0000\u0005\u0000x{\u0083"+
		"\u008e\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}