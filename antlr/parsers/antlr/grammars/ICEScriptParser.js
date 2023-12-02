// Generated from ./antlr/grammars/ICEScript by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ICEScriptListener = require('./ICEScriptListener').ICEScriptListener;
var ICEScriptVisitor = require('./ICEScriptVisitor').ICEScriptVisitor;

var grammarFileName = "ICEScript";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003;\u019c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0003",
    "\u0002\u0003\u0002\u0007\u0002K\n\u0002\f\u0002\u000e\u0002N\u000b\u0002",
    "\u0003\u0002\u0007\u0002Q\n\u0002\f\u0002\u000e\u0002T\u000b\u0002\u0003",
    "\u0002\u0005\u0002W\n\u0002\u0003\u0003\u0007\u0003Z\n\u0003\f\u0003",
    "\u000e\u0003]\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\bw\n\b\f\b\u000e\bz\u000b\b\u0005\b|\n\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u0083\n\t\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0007\n\u008a\n\n\f\n\u000e\n\u008d\u000b\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\n\u00a2\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0006\r",
    "\u00af\n\r\r\r\u000e\r\u00b0\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u00f4\n\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u0104\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u0115\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0007\u001a\u0123\n\u001a\f\u001a\u000e\u001a",
    "\u0126\u000b\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u0138\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u015f\n\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0007",
    "\u001e\u0167\n\u001e\f\u001e\u000e\u001e\u016a\u000b\u001e\u0003\u001e",
    "\u0003\u001e\u0007\u001e\u016e\n\u001e\f\u001e\u000e\u001e\u0171\u000b",
    "\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u0175\n\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0007\"\u017d\n\"\f\"\u000e\"\u0180",
    "\u000b\"\u0003\"\u0003\"\u0007\"\u0184\n\"\f\"\u000e\"\u0187\u000b\"",
    "\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0005$\u0193\n$\u0003$\u0003$\u0007$\u0197\n$\f$\u000e$\u019a\u000b",
    "$\u0003$\u0003\u00b0\u00042F%\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDF\u0002\u0003",
    "\u0004\u00025588\u0002\u01ba\u0002V\u0003\u0002\u0002\u0002\u0004[\u0003",
    "\u0002\u0002\u0002\u0006^\u0003\u0002\u0002\u0002\b`\u0003\u0002\u0002",
    "\u0002\nd\u0003\u0002\u0002\u0002\fh\u0003\u0002\u0002\u0002\u000e{",
    "\u0003\u0002\u0002\u0002\u0010\u0082\u0003\u0002\u0002\u0002\u0012\u00a1",
    "\u0003\u0002\u0002\u0002\u0014\u00a3\u0003\u0002\u0002\u0002\u0016\u00a8",
    "\u0003\u0002\u0002\u0002\u0018\u00ae\u0003\u0002\u0002\u0002\u001a\u00b2",
    "\u0003\u0002\u0002\u0002\u001c\u00b7\u0003\u0002\u0002\u0002\u001e\u00bc",
    "\u0003\u0002\u0002\u0002 \u00c1\u0003\u0002\u0002\u0002\"\u00c6\u0003",
    "\u0002\u0002\u0002$\u00ca\u0003\u0002\u0002\u0002&\u00ce\u0003\u0002",
    "\u0002\u0002(\u00d4\u0003\u0002\u0002\u0002*\u00dc\u0003\u0002\u0002",
    "\u0002,\u00f3\u0003\u0002\u0002\u0002.\u0103\u0003\u0002\u0002\u0002",
    "0\u0105\u0003\u0002\u0002\u00022\u0114\u0003\u0002\u0002\u00024\u0137",
    "\u0003\u0002\u0002\u00026\u015e\u0003\u0002\u0002\u00028\u0160\u0003",
    "\u0002\u0002\u0002:\u0168\u0003\u0002\u0002\u0002<\u0174\u0003\u0002",
    "\u0002\u0002>\u0176\u0003\u0002\u0002\u0002@\u0178\u0003\u0002\u0002",
    "\u0002B\u017a\u0003\u0002\u0002\u0002D\u018a\u0003\u0002\u0002\u0002",
    "F\u0192\u0003\u0002\u0002\u0002HL\u0005\u0004\u0003\u0002IK\u0005\f",
    "\u0007\u0002JI\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MR\u0003\u0002\u0002\u0002",
    "NL\u0003\u0002\u0002\u0002OQ\u0005\u0012\n\u0002PO\u0003\u0002\u0002",
    "\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002",
    "\u0002\u0002SW\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UW\u0007",
    "\u0002\u0002\u0003VH\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002",
    "W\u0003\u0003\u0002\u0002\u0002XZ\u0005\n\u0006\u0002YX\u0003\u0002",
    "\u0002\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\",
    "\u0003\u0002\u0002\u0002\\\u0005\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002^_\u0005\b\u0005\u0002_\u0007\u0003\u0002\u0002\u0002`a",
    "\u0007\u0003\u0002\u0002ab\u0005> \u0002bc\u0007\u0016\u0002\u0002c",
    "\t\u0003\u0002\u0002\u0002de\u0007\u0004\u0002\u0002ef\u0005> \u0002",
    "fg\u0007\u0016\u0002\u0002g\u000b\u0003\u0002\u0002\u0002hi\u0007\u0005",
    "\u0002\u0002ij\u0005> \u0002jk\u0007\u0012\u0002\u0002kl\u0005\u000e",
    "\b\u0002lm\u0007\u0013\u0002\u0002mn\u0007\u0006\u0002\u0002no\u0005",
    "F$\u0002op\u0005\u0012\n\u0002p\r\u0003\u0002\u0002\u0002q|\u0005\u0010",
    "\t\u0002r|\u0003\u0002\u0002\u0002sx\u0005\u0010\t\u0002tu\u0007\u0007",
    "\u0002\u0002uw\u0005\u0010\t\u0002vt\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{q\u0003\u0002\u0002",
    "\u0002{r\u0003\u0002\u0002\u0002{s\u0003\u0002\u0002\u0002|\u000f\u0003",
    "\u0002\u0002\u0002}\u0083\u0005> \u0002~\u0083\u0003\u0002\u0002\u0002",
    "\u007f\u0083\u00052\u001a\u0002\u0080\u0083\u0003\u0002\u0002\u0002",
    "\u0081\u0083\u0005\u0018\r\u0002\u0082}\u0003\u0002\u0002\u0002\u0082",
    "~\u0003\u0002\u0002\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0006\u0002\u0002\u0085",
    "\u0086\u0005F$\u0002\u0086\u0011\u0003\u0002\u0002\u0002\u0087\u008b",
    "\u0007\u0014\u0002\u0002\u0088\u008a\u0005\u0012\n\u0002\u0089\u0088",
    "\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e",
    "\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u00a2",
    "\u0007\u0015\u0002\u0002\u008f\u00a2\u0005\u0014\u000b\u0002\u0090\u00a2",
    "\u0005\u0016\f\u0002\u0091\u00a2\u0005\u001a\u000e\u0002\u0092\u00a2",
    "\u0005\u001c\u000f\u0002\u0093\u00a2\u0005\u001e\u0010\u0002\u0094\u00a2",
    "\u0005 \u0011\u0002\u0095\u00a2\u0005\"\u0012\u0002\u0096\u00a2\u0005",
    "$\u0013\u0002\u0097\u00a2\u0005&\u0014\u0002\u0098\u00a2\u0005(\u0015",
    "\u0002\u0099\u00a2\u0005*\u0016\u0002\u009a\u00a2\u0005,\u0017\u0002",
    "\u009b\u00a2\u0005.\u0018\u0002\u009c\u00a2\u00050\u0019\u0002\u009d",
    "\u009e\u00052\u001a\u0002\u009e\u009f\u0007\u0016\u0002\u0002\u009f",
    "\u00a2\u0003\u0002\u0002\u0002\u00a0\u00a2\u0007\u0016\u0002\u0002\u00a1",
    "\u0087\u0003\u0002\u0002\u0002\u00a1\u008f\u0003\u0002\u0002\u0002\u00a1",
    "\u0090\u0003\u0002\u0002\u0002\u00a1\u0091\u0003\u0002\u0002\u0002\u00a1",
    "\u0092\u0003\u0002\u0002\u0002\u00a1\u0093\u0003\u0002\u0002\u0002\u00a1",
    "\u0094\u0003\u0002\u0002\u0002\u00a1\u0095\u0003\u0002\u0002\u0002\u00a1",
    "\u0096\u0003\u0002\u0002\u0002\u00a1\u0097\u0003\u0002\u0002\u0002\u00a1",
    "\u0098\u0003\u0002\u0002\u0002\u00a1\u0099\u0003\u0002\u0002\u0002\u00a1",
    "\u009a\u0003\u0002\u0002\u0002\u00a1\u009b\u0003\u0002\u0002\u0002\u00a1",
    "\u009c\u0003\u0002\u0002\u0002\u00a1\u009d\u0003\u0002\u0002\u0002\u00a1",
    "\u00a0\u0003\u0002\u0002\u0002\u00a2\u0013\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0005> \u0002\u00a4\u00a5\u0007$\u0002\u0002\u00a5\u00a6\u0005",
    "2\u001a\u0002\u00a6\u00a7\u0007\u0016\u0002\u0002\u00a7\u0015\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0007\b\u0002\u0002\u00a9\u00aa\u0007",
    "\u0014\u0002\u0002\u00aa\u00ab\u0005\u0018\r\u0002\u00ab\u00ac\u0007",
    "\u0015\u0002\u0002\u00ac\u0017\u0003\u0002\u0002\u0002\u00ad\u00af\u000b",
    "\u0002\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003",
    "\u0002\u0002\u0002\u00b1\u0019\u0003\u0002\u0002\u0002\u00b2\u00b3\u0005",
    "> \u0002\u00b3\u00b4\u0007%\u0002\u0002\u00b4\u00b5\u0005<\u001f\u0002",
    "\u00b5\u00b6\u0007\u0016\u0002\u0002\u00b6\u001b\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u0005> \u0002\u00b8\u00b9\u0007&\u0002\u0002\u00b9\u00ba",
    "\u0005<\u001f\u0002\u00ba\u00bb\u0007\u0016\u0002\u0002\u00bb\u001d",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005> \u0002\u00bd\u00be\u0007",
    "\'\u0002\u0002\u00be\u00bf\u0005<\u001f\u0002\u00bf\u00c0\u0007\u0016",
    "\u0002\u0002\u00c0\u001f\u0003\u0002\u0002\u0002\u00c1\u00c2\u0005>",
    " \u0002\u00c2\u00c3\u0007(\u0002\u0002\u00c3\u00c4\u0005<\u001f\u0002",
    "\u00c4\u00c5\u0007\u0016\u0002\u0002\u00c5!\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0005> \u0002\u00c7\u00c8\u0007+\u0002\u0002\u00c8\u00c9",
    "\u0007\u0016\u0002\u0002\u00c9#\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0005> \u0002\u00cb\u00cc\u0007,\u0002\u0002\u00cc\u00cd\u0007\u0016",
    "\u0002\u0002\u00cd%\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007)\u0002",
    "\u0002\u00cf\u00d0\u0007\u0012\u0002\u0002\u00d0\u00d1\u00056\u001c",
    "\u0002\u00d1\u00d2\u0007\u0013\u0002\u0002\u00d2\u00d3\u0005\u0012\n",
    "\u0002\u00d3\'\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007)\u0002\u0002",
    "\u00d5\u00d6\u0007\u0012\u0002\u0002\u00d6\u00d7\u00056\u001c\u0002",
    "\u00d7\u00d8\u0007\u0013\u0002\u0002\u00d8\u00d9\u0005\u0012\n\u0002",
    "\u00d9\u00da\u0007*\u0002\u0002\u00da\u00db\u0005\u0012\n\u0002\u00db",
    ")\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007/\u0002\u0002\u00dd\u00de",
    "\u0007\u0012\u0002\u0002\u00de\u00df\u00056\u001c\u0002\u00df\u00e0",
    "\u0007\u0013\u0002\u0002\u00e0\u00e1\u0005\u0012\n\u0002\u00e1+\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u00070\u0002\u0002\u00e3\u00e4\u0007",
    "\u0012\u0002\u0002\u00e4\u00e5\u0005.\u0018\u0002\u00e5\u00e6\u0005",
    "6\u001c\u0002\u00e6\u00e7\u0007\u0016\u0002\u0002\u00e7\u00e8\u0005",
    "\"\u0012\u0002\u00e8\u00e9\u0007\u0013\u0002\u0002\u00e9\u00ea\u0005",
    "\u0012\n\u0002\u00ea\u00f4\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007",
    "0\u0002\u0002\u00ec\u00ed\u0007\u0012\u0002\u0002\u00ed\u00ee\u0005",
    ".\u0018\u0002\u00ee\u00ef\u0007\t\u0002\u0002\u00ef\u00f0\u0005<\u001f",
    "\u0002\u00f0\u00f1\u0007\u0013\u0002\u0002\u00f1\u00f2\u0005\u0012\n",
    "\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00e2\u0003\u0002\u0002",
    "\u0002\u00f3\u00eb\u0003\u0002\u0002\u0002\u00f4-\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0007.\u0002\u0002\u00f6\u00f7\u0005> \u0002\u00f7",
    "\u00f8\u0007$\u0002\u0002\u00f8\u00f9\u00052\u001a\u0002\u00f9\u00fa",
    "\u0007\u0016\u0002\u0002\u00fa\u0104\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0007.\u0002\u0002\u00fc\u00fd\u0005> \u0002\u00fd\u00fe\u0007\u0006",
    "\u0002\u0002\u00fe\u00ff\u0005F$\u0002\u00ff\u0100\u0007$\u0002\u0002",
    "\u0100\u0101\u00052\u001a\u0002\u0101\u0102\u0007\u0016\u0002\u0002",
    "\u0102\u0104\u0003\u0002\u0002\u0002\u0103\u00f5\u0003\u0002\u0002\u0002",
    "\u0103\u00fb\u0003\u0002\u0002\u0002\u0104/\u0003\u0002\u0002\u0002",
    "\u0105\u0106\u00071\u0002\u0002\u0106\u0107\u00052\u001a\u0002\u0107",
    "\u0108\u0007\u0016\u0002\u0002\u01081\u0003\u0002\u0002\u0002\u0109",
    "\u010a\b\u001a\u0001\u0002\u010a\u010b\u0007\u0012\u0002\u0002\u010b",
    "\u010c\u00052\u001a\u0002\u010c\u010d\u0007\u0013\u0002\u0002\u010d",
    "\u0115\u0003\u0002\u0002\u0002\u010e\u0115\u0005<\u001f\u0002\u010f",
    "\u0115\u0005> \u0002\u0110\u0115\u00056\u001c\u0002\u0111\u0115\u0007",
    "6\u0002\u0002\u0112\u0115\u00058\u001d\u0002\u0113\u0115\u00077\u0002",
    "\u0002\u0114\u0109\u0003\u0002\u0002\u0002\u0114\u010e\u0003\u0002\u0002",
    "\u0002\u0114\u010f\u0003\u0002\u0002\u0002\u0114\u0110\u0003\u0002\u0002",
    "\u0002\u0114\u0111\u0003\u0002\u0002\u0002\u0114\u0112\u0003\u0002\u0002",
    "\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115\u0124\u0003\u0002\u0002",
    "\u0002\u0116\u0117\f\u0006\u0002\u0002\u0117\u0118\u0007\u0017\u0002",
    "\u0002\u0118\u0123\u00052\u001a\u0007\u0119\u011a\f\u0005\u0002\u0002",
    "\u011a\u011b\u0007\u0018\u0002\u0002\u011b\u0123\u00052\u001a\u0006",
    "\u011c\u011d\f\u0004\u0002\u0002\u011d\u011e\u0007\u0019\u0002\u0002",
    "\u011e\u0123\u00052\u001a\u0005\u011f\u0120\f\u0003\u0002\u0002\u0120",
    "\u0121\u0007\u001a\u0002\u0002\u0121\u0123\u00052\u001a\u0004\u0122",
    "\u0116\u0003\u0002\u0002\u0002\u0122\u0119\u0003\u0002\u0002\u0002\u0122",
    "\u011c\u0003\u0002\u0002\u0002\u0122\u011f\u0003\u0002\u0002\u0002\u0123",
    "\u0126\u0003\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124",
    "\u0125\u0003\u0002\u0002\u0002\u01253\u0003\u0002\u0002\u0002\u0126",
    "\u0124\u0003\u0002\u0002\u0002\u0127\u0128\u00052\u001a\u0002\u0128",
    "\u0129\u0007\u0017\u0002\u0002\u0129\u012a\u00052\u001a\u0002\u012a",
    "\u0138\u0003\u0002\u0002\u0002\u012b\u012c\u00052\u001a\u0002\u012c",
    "\u012d\u0007\u0018\u0002\u0002\u012d\u012e\u00052\u001a\u0002\u012e",
    "\u0138\u0003\u0002\u0002\u0002\u012f\u0130\u00052\u001a\u0002\u0130",
    "\u0131\u0007\u0019\u0002\u0002\u0131\u0132\u00052\u001a\u0002\u0132",
    "\u0138\u0003\u0002\u0002\u0002\u0133\u0134\u00052\u001a\u0002\u0134",
    "\u0135\u0007\u001a\u0002\u0002\u0135\u0136\u00052\u001a\u0002\u0136",
    "\u0138\u0003\u0002\u0002\u0002\u0137\u0127\u0003\u0002\u0002\u0002\u0137",
    "\u012b\u0003\u0002\u0002\u0002\u0137\u012f\u0003\u0002\u0002\u0002\u0137",
    "\u0133\u0003\u0002\u0002\u0002\u01385\u0003\u0002\u0002\u0002\u0139",
    "\u015f\u0005<\u001f\u0002\u013a\u015f\u00072\u0002\u0002\u013b\u015f",
    "\u00073\u0002\u0002\u013c\u013d\u0005<\u001f\u0002\u013d\u013e\u0007",
    "\u001b\u0002\u0002\u013e\u013f\u00056\u001c\u0002\u013f\u015f\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0005<\u001f\u0002\u0141\u0142\u0007",
    "\u001c\u0002\u0002\u0142\u0143\u00056\u001c\u0002\u0143\u015f\u0003",
    "\u0002\u0002\u0002\u0144\u0145\u0005<\u001f\u0002\u0145\u0146\u0007",
    "\u001d\u0002\u0002\u0146\u0147\u00056\u001c\u0002\u0147\u015f\u0003",
    "\u0002\u0002\u0002\u0148\u0149\u0005<\u001f\u0002\u0149\u014a\u0007",
    "\u001e\u0002\u0002\u014a\u014b\u00056\u001c\u0002\u014b\u015f\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0005<\u001f\u0002\u014d\u014e\u0007",
    "\u001f\u0002\u0002\u014e\u014f\u00056\u001c\u0002\u014f\u015f\u0003",
    "\u0002\u0002\u0002\u0150\u0151\u0005<\u001f\u0002\u0151\u0152\u0007",
    " \u0002\u0002\u0152\u0153\u00056\u001c\u0002\u0153\u015f\u0003\u0002",
    "\u0002\u0002\u0154\u0155\u0005<\u001f\u0002\u0155\u0156\u0007!\u0002",
    "\u0002\u0156\u0157\u00056\u001c\u0002\u0157\u015f\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0005<\u001f\u0002\u0159\u015a\u0007\"\u0002\u0002",
    "\u015a\u015b\u00056\u001c\u0002\u015b\u015f\u0003\u0002\u0002\u0002",
    "\u015c\u015d\u0007#\u0002\u0002\u015d\u015f\u00056\u001c\u0002\u015e",
    "\u0139\u0003\u0002\u0002\u0002\u015e\u013a\u0003\u0002\u0002\u0002\u015e",
    "\u013b\u0003\u0002\u0002\u0002\u015e\u013c\u0003\u0002\u0002\u0002\u015e",
    "\u0140\u0003\u0002\u0002\u0002\u015e\u0144\u0003\u0002\u0002\u0002\u015e",
    "\u0148\u0003\u0002\u0002\u0002\u015e\u014c\u0003\u0002\u0002\u0002\u015e",
    "\u0150\u0003\u0002\u0002\u0002\u015e\u0154\u0003\u0002\u0002\u0002\u015e",
    "\u0158\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002\u015f",
    "7\u0003\u0002\u0002\u0002\u0160\u0161\u0005> \u0002\u0161\u0162\u0007",
    "\u0012\u0002\u0002\u0162\u0163\u0005:\u001e\u0002\u0163\u0164\u0007",
    "\u0013\u0002\u0002\u01649\u0003\u0002\u0002\u0002\u0165\u0167\u0005",
    "2\u001a\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167\u016a\u0003",
    "\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0168\u0169\u0003",
    "\u0002\u0002\u0002\u0169\u016f\u0003\u0002\u0002\u0002\u016a\u0168\u0003",
    "\u0002\u0002\u0002\u016b\u016c\u0007\u0007\u0002\u0002\u016c\u016e\u0005",
    "2\u001a\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016e\u0171\u0003",
    "\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u016f\u0170\u0003",
    "\u0002\u0002\u0002\u0170;\u0003\u0002\u0002\u0002\u0171\u016f\u0003",
    "\u0002\u0002\u0002\u0172\u0175\u0005> \u0002\u0173\u0175\u0005@!\u0002",
    "\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0173\u0003\u0002\u0002\u0002",
    "\u0175=\u0003\u0002\u0002\u0002\u0176\u0177\u00074\u0002\u0002\u0177",
    "?\u0003\u0002\u0002\u0002\u0178\u0179\t\u0002\u0002\u0002\u0179A\u0003",
    "\u0002\u0002\u0002\u017a\u017e\u0007\n\u0002\u0002\u017b\u017d\u0005",
    "2\u001a\u0002\u017c\u017b\u0003\u0002\u0002\u0002\u017d\u0180\u0003",
    "\u0002\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017e\u017f\u0003",
    "\u0002\u0002\u0002\u017f\u0185\u0003\u0002\u0002\u0002\u0180\u017e\u0003",
    "\u0002\u0002\u0002\u0181\u0182\u0007\u0007\u0002\u0002\u0182\u0184\u0005",
    "2\u001a\u0002\u0183\u0181\u0003\u0002\u0002\u0002\u0184\u0187\u0003",
    "\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0185\u0186\u0003",
    "\u0002\u0002\u0002\u0186\u0188\u0003\u0002\u0002\u0002\u0187\u0185\u0003",
    "\u0002\u0002\u0002\u0188\u0189\u0007\u000b\u0002\u0002\u0189C\u0003",
    "\u0002\u0002\u0002\u018a\u018b\u00076\u0002\u0002\u018bE\u0003\u0002",
    "\u0002\u0002\u018c\u0193\b$\u0001\u0002\u018d\u0193\u0007\f\u0002\u0002",
    "\u018e\u0193\u0007\r\u0002\u0002\u018f\u0193\u0007\u000e\u0002\u0002",
    "\u0190\u0193\u0007\u000f\u0002\u0002\u0191\u0193\u0007\u0010\u0002\u0002",
    "\u0192\u018c\u0003\u0002\u0002\u0002\u0192\u018d\u0003\u0002\u0002\u0002",
    "\u0192\u018e\u0003\u0002\u0002\u0002\u0192\u018f\u0003\u0002\u0002\u0002",
    "\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0191\u0003\u0002\u0002\u0002",
    "\u0193\u0198\u0003\u0002\u0002\u0002\u0194\u0195\f\u0003\u0002\u0002",
    "\u0195\u0197\u0007\u0011\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002",
    "\u0197\u019a\u0003\u0002\u0002\u0002\u0198\u0196\u0003\u0002\u0002\u0002",
    "\u0198\u0199\u0003\u0002\u0002\u0002\u0199G\u0003\u0002\u0002\u0002",
    "\u019a\u0198\u0003\u0002\u0002\u0002\u001aLRV[x{\u0082\u008b\u00a1\u00b0",
    "\u00f3\u0103\u0114\u0122\u0124\u0137\u015e\u0168\u016f\u0174\u017e\u0185",
    "\u0192\u0198"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'name:'", "'import'", "'function '", "':'", 
                     "','", "'__ASM'", "'in'", "'['", "']'", "'void'", "'list'", 
                     "'str'", "'number'", "'bool'", "'[]'", "'('", "')'", 
                     "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", "'>'", 
                     "'<'", "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", 
                     "'!'", "'='", "'+='", "'-='", "'*='", "'/='", "'if'", 
                     "'else'", "'++'", "'--'", "'function'", "'var'", "'while'", 
                     "'for'", "'return'", "'true'", "'false'", null, "'$pi'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "OPEN_BRACKET", 
                      "CLOSE_BRACKET", "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", 
                      "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", "LESS_THAN", 
                      "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
                      "LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", 
                      "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
                      "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", "VAR", 
                      "WHILE", "FOR", "RETURN", "TRUE", "FALSE", "IDENTIFIER", 
                      "PI", "STRING", "LIST", "NUMBER", "LINECOMMENT", "BLOCKCOMMENT", 
                      "WHITESPACE" ];

var ruleNames =  [ "script", "header", "meta", "scriptName", "include", 
                   "functionDef", "func_params", "func_identifier", "statement", 
                   "assign_stmt", "ti_basic_stmt", "any", "add_assign_stmt", 
                   "sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", 
                   "inc_stmt", "dec_stmt", "if_stmt", "if_else_stmt", "while_stmt", 
                   "for_stmt", "var_stmt", "return_stmt", "expression", 
                   "math", "boolexpr", "methodcall", "methodparams", "value", 
                   "identifier", "number", "list", "string", "type" ];

function ICEScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ICEScriptParser.prototype = Object.create(antlr4.Parser.prototype);
ICEScriptParser.prototype.constructor = ICEScriptParser;

Object.defineProperty(ICEScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ICEScriptParser.EOF = antlr4.Token.EOF;
ICEScriptParser.T__0 = 1;
ICEScriptParser.T__1 = 2;
ICEScriptParser.T__2 = 3;
ICEScriptParser.T__3 = 4;
ICEScriptParser.T__4 = 5;
ICEScriptParser.T__5 = 6;
ICEScriptParser.T__6 = 7;
ICEScriptParser.T__7 = 8;
ICEScriptParser.T__8 = 9;
ICEScriptParser.T__9 = 10;
ICEScriptParser.T__10 = 11;
ICEScriptParser.T__11 = 12;
ICEScriptParser.T__12 = 13;
ICEScriptParser.T__13 = 14;
ICEScriptParser.T__14 = 15;
ICEScriptParser.OPEN_BRACKET = 16;
ICEScriptParser.CLOSE_BRACKET = 17;
ICEScriptParser.OPEN_CURLEY = 18;
ICEScriptParser.CLOSE_CURLEY = 19;
ICEScriptParser.END_STMT = 20;
ICEScriptParser.ADD = 21;
ICEScriptParser.SUB = 22;
ICEScriptParser.MUL = 23;
ICEScriptParser.DIV = 24;
ICEScriptParser.GREATER_THAN = 25;
ICEScriptParser.LESS_THAN = 26;
ICEScriptParser.EQUAL_TO = 27;
ICEScriptParser.NOT_EQUAL_TO = 28;
ICEScriptParser.GREATER_THAN_OR_EQUAL = 29;
ICEScriptParser.LESS_THAN_OR_EQUAL = 30;
ICEScriptParser.OR = 31;
ICEScriptParser.AND = 32;
ICEScriptParser.NOT = 33;
ICEScriptParser.ASSIGN = 34;
ICEScriptParser.ADDASSIGN = 35;
ICEScriptParser.SUBASSIGN = 36;
ICEScriptParser.MULASSIGN = 37;
ICEScriptParser.DIVASSIGN = 38;
ICEScriptParser.IF = 39;
ICEScriptParser.ELSE = 40;
ICEScriptParser.INCREMENT = 41;
ICEScriptParser.DECREMENT = 42;
ICEScriptParser.DEF = 43;
ICEScriptParser.VAR = 44;
ICEScriptParser.WHILE = 45;
ICEScriptParser.FOR = 46;
ICEScriptParser.RETURN = 47;
ICEScriptParser.TRUE = 48;
ICEScriptParser.FALSE = 49;
ICEScriptParser.IDENTIFIER = 50;
ICEScriptParser.PI = 51;
ICEScriptParser.STRING = 52;
ICEScriptParser.LIST = 53;
ICEScriptParser.NUMBER = 54;
ICEScriptParser.LINECOMMENT = 55;
ICEScriptParser.BLOCKCOMMENT = 56;
ICEScriptParser.WHITESPACE = 57;

ICEScriptParser.RULE_script = 0;
ICEScriptParser.RULE_header = 1;
ICEScriptParser.RULE_meta = 2;
ICEScriptParser.RULE_scriptName = 3;
ICEScriptParser.RULE_include = 4;
ICEScriptParser.RULE_functionDef = 5;
ICEScriptParser.RULE_func_params = 6;
ICEScriptParser.RULE_func_identifier = 7;
ICEScriptParser.RULE_statement = 8;
ICEScriptParser.RULE_assign_stmt = 9;
ICEScriptParser.RULE_ti_basic_stmt = 10;
ICEScriptParser.RULE_any = 11;
ICEScriptParser.RULE_add_assign_stmt = 12;
ICEScriptParser.RULE_sub_assign_stmt = 13;
ICEScriptParser.RULE_mul_assign_stmt = 14;
ICEScriptParser.RULE_div_assign_stmt = 15;
ICEScriptParser.RULE_inc_stmt = 16;
ICEScriptParser.RULE_dec_stmt = 17;
ICEScriptParser.RULE_if_stmt = 18;
ICEScriptParser.RULE_if_else_stmt = 19;
ICEScriptParser.RULE_while_stmt = 20;
ICEScriptParser.RULE_for_stmt = 21;
ICEScriptParser.RULE_var_stmt = 22;
ICEScriptParser.RULE_return_stmt = 23;
ICEScriptParser.RULE_expression = 24;
ICEScriptParser.RULE_math = 25;
ICEScriptParser.RULE_boolexpr = 26;
ICEScriptParser.RULE_methodcall = 27;
ICEScriptParser.RULE_methodparams = 28;
ICEScriptParser.RULE_value = 29;
ICEScriptParser.RULE_identifier = 30;
ICEScriptParser.RULE_number = 31;
ICEScriptParser.RULE_list = 32;
ICEScriptParser.RULE_string = 33;
ICEScriptParser.RULE_type = 34;

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

ScriptContext.prototype.functionDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDefContext);
    } else {
        return this.getTypedRuleContext(FunctionDefContext,i);
    }
};

ScriptContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ScriptContext.prototype.EOF = function() {
    return this.getToken(ICEScriptParser.EOF, 0);
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitScript(this);
	}
};

ScriptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitScript(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.ScriptContext = ScriptContext;

ICEScriptParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ICEScriptParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.header();
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ICEScriptParser.T__2) {
                this.state = 71;
                this.functionDef();
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ICEScriptParser.T__5) | (1 << ICEScriptParser.OPEN_BRACKET) | (1 << ICEScriptParser.OPEN_CURLEY) | (1 << ICEScriptParser.END_STMT))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ICEScriptParser.NOT - 33)) | (1 << (ICEScriptParser.IF - 33)) | (1 << (ICEScriptParser.VAR - 33)) | (1 << (ICEScriptParser.WHILE - 33)) | (1 << (ICEScriptParser.FOR - 33)) | (1 << (ICEScriptParser.RETURN - 33)) | (1 << (ICEScriptParser.TRUE - 33)) | (1 << (ICEScriptParser.FALSE - 33)) | (1 << (ICEScriptParser.IDENTIFIER - 33)) | (1 << (ICEScriptParser.PI - 33)) | (1 << (ICEScriptParser.STRING - 33)) | (1 << (ICEScriptParser.LIST - 33)) | (1 << (ICEScriptParser.NUMBER - 33)))) !== 0)) {
                this.state = 77;
                this.statement();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.match(ICEScriptParser.EOF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_header;
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.include = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeContext);
    } else {
        return this.getTypedRuleContext(IncludeContext,i);
    }
};

HeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterHeader(this);
	}
};

HeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitHeader(this);
	}
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.HeaderContext = HeaderContext;

ICEScriptParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ICEScriptParser.RULE_header);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ICEScriptParser.T__1) {
            this.state = 86;
            this.include();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_meta;
    return this;
}

MetaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetaContext.prototype.constructor = MetaContext;

MetaContext.prototype.scriptName = function() {
    return this.getTypedRuleContext(ScriptNameContext,0);
};

MetaContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterMeta(this);
	}
};

MetaContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitMeta(this);
	}
};

MetaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitMeta(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.MetaContext = MetaContext;

ICEScriptParser.prototype.meta = function() {

    var localctx = new MetaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ICEScriptParser.RULE_meta);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.scriptName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ScriptNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_scriptName;
    return this;
}

ScriptNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptNameContext.prototype.constructor = ScriptNameContext;

ScriptNameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ScriptNameContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

ScriptNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterScriptName(this);
	}
};

ScriptNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitScriptName(this);
	}
};

ScriptNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitScriptName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.ScriptNameContext = ScriptNameContext;

ICEScriptParser.prototype.scriptName = function() {

    var localctx = new ScriptNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ICEScriptParser.RULE_scriptName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(ICEScriptParser.T__0);
        this.state = 95;
        this.identifier();
        this.state = 96;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IncludeContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitInclude(this);
	}
};

IncludeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitInclude(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.IncludeContext = IncludeContext;

ICEScriptParser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ICEScriptParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(ICEScriptParser.T__1);
        this.state = 99;
        this.identifier();
        this.state = 100;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_functionDef;
    return this;
}

FunctionDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefContext.prototype.constructor = FunctionDefContext;

FunctionDefContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FunctionDefContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

FunctionDefContext.prototype.func_params = function() {
    return this.getTypedRuleContext(Func_paramsContext,0);
};

FunctionDefContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

FunctionDefContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionDefContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

FunctionDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterFunctionDef(this);
	}
};

FunctionDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitFunctionDef(this);
	}
};

FunctionDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitFunctionDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.FunctionDefContext = FunctionDefContext;

ICEScriptParser.prototype.functionDef = function() {

    var localctx = new FunctionDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ICEScriptParser.RULE_functionDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(ICEScriptParser.T__2);
        this.state = 103;
        this.identifier();
        this.state = 104;
        this.match(ICEScriptParser.OPEN_BRACKET);
        this.state = 105;
        this.func_params();
        this.state = 106;
        this.match(ICEScriptParser.CLOSE_BRACKET);
        this.state = 107;
        this.match(ICEScriptParser.T__3);
        this.state = 108;
        this.type(0);
        this.state = 109;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_paramsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_func_params;
    return this;
}

Func_paramsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_paramsContext.prototype.constructor = Func_paramsContext;

Func_paramsContext.prototype.func_identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Func_identifierContext);
    } else {
        return this.getTypedRuleContext(Func_identifierContext,i);
    }
};

Func_paramsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterFunc_params(this);
	}
};

Func_paramsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitFunc_params(this);
	}
};

Func_paramsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitFunc_params(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Func_paramsContext = Func_paramsContext;

ICEScriptParser.prototype.func_params = function() {

    var localctx = new Func_paramsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ICEScriptParser.RULE_func_params);
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.func_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 113;
            this.func_identifier();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ICEScriptParser.T__4) {
                this.state = 114;
                this.match(ICEScriptParser.T__4);
                this.state = 115;
                this.func_identifier();
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Func_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_func_identifier;
    return this;
}

Func_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_identifierContext.prototype.constructor = Func_identifierContext;

Func_identifierContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Func_identifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Func_identifierContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Func_identifierContext.prototype.any = function() {
    return this.getTypedRuleContext(AnyContext,0);
};

Func_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterFunc_identifier(this);
	}
};

Func_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitFunc_identifier(this);
	}
};

Func_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitFunc_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Func_identifierContext = Func_identifierContext;

ICEScriptParser.prototype.func_identifier = function() {

    var localctx = new Func_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ICEScriptParser.RULE_func_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.state = 123;
            this.identifier();
            break;

        case 2:
            break;

        case 3:
            this.state = 125;
            this.expression(0);
            break;

        case 4:
            break;

        case 5:
            this.state = 127;
            this.any();
            break;

        }
        this.state = 130;
        this.match(ICEScriptParser.T__3);
        this.state = 131;
        this.type(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.OPEN_CURLEY = function() {
    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
};

StatementContext.prototype.CLOSE_CURLEY = function() {
    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.assign_stmt = function() {
    return this.getTypedRuleContext(Assign_stmtContext,0);
};

StatementContext.prototype.ti_basic_stmt = function() {
    return this.getTypedRuleContext(Ti_basic_stmtContext,0);
};

StatementContext.prototype.add_assign_stmt = function() {
    return this.getTypedRuleContext(Add_assign_stmtContext,0);
};

StatementContext.prototype.sub_assign_stmt = function() {
    return this.getTypedRuleContext(Sub_assign_stmtContext,0);
};

StatementContext.prototype.mul_assign_stmt = function() {
    return this.getTypedRuleContext(Mul_assign_stmtContext,0);
};

StatementContext.prototype.div_assign_stmt = function() {
    return this.getTypedRuleContext(Div_assign_stmtContext,0);
};

StatementContext.prototype.inc_stmt = function() {
    return this.getTypedRuleContext(Inc_stmtContext,0);
};

StatementContext.prototype.dec_stmt = function() {
    return this.getTypedRuleContext(Dec_stmtContext,0);
};

StatementContext.prototype.if_stmt = function() {
    return this.getTypedRuleContext(If_stmtContext,0);
};

StatementContext.prototype.if_else_stmt = function() {
    return this.getTypedRuleContext(If_else_stmtContext,0);
};

StatementContext.prototype.while_stmt = function() {
    return this.getTypedRuleContext(While_stmtContext,0);
};

StatementContext.prototype.for_stmt = function() {
    return this.getTypedRuleContext(For_stmtContext,0);
};

StatementContext.prototype.var_stmt = function() {
    return this.getTypedRuleContext(Var_stmtContext,0);
};

StatementContext.prototype.return_stmt = function() {
    return this.getTypedRuleContext(Return_stmtContext,0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.StatementContext = StatementContext;

ICEScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ICEScriptParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.match(ICEScriptParser.OPEN_CURLEY);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ICEScriptParser.T__5) | (1 << ICEScriptParser.OPEN_BRACKET) | (1 << ICEScriptParser.OPEN_CURLEY) | (1 << ICEScriptParser.END_STMT))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ICEScriptParser.NOT - 33)) | (1 << (ICEScriptParser.IF - 33)) | (1 << (ICEScriptParser.VAR - 33)) | (1 << (ICEScriptParser.WHILE - 33)) | (1 << (ICEScriptParser.FOR - 33)) | (1 << (ICEScriptParser.RETURN - 33)) | (1 << (ICEScriptParser.TRUE - 33)) | (1 << (ICEScriptParser.FALSE - 33)) | (1 << (ICEScriptParser.IDENTIFIER - 33)) | (1 << (ICEScriptParser.PI - 33)) | (1 << (ICEScriptParser.STRING - 33)) | (1 << (ICEScriptParser.LIST - 33)) | (1 << (ICEScriptParser.NUMBER - 33)))) !== 0)) {
                this.state = 134;
                this.statement();
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 140;
            this.match(ICEScriptParser.CLOSE_CURLEY);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
            this.assign_stmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 142;
            this.ti_basic_stmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 143;
            this.add_assign_stmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 144;
            this.sub_assign_stmt();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 145;
            this.mul_assign_stmt();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 146;
            this.div_assign_stmt();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 147;
            this.inc_stmt();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 148;
            this.dec_stmt();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 149;
            this.if_stmt();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 150;
            this.if_else_stmt();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 151;
            this.while_stmt();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 152;
            this.for_stmt();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 153;
            this.var_stmt();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 154;
            this.return_stmt();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 155;
            this.expression(0);
            this.state = 156;
            this.match(ICEScriptParser.END_STMT);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 158;
            this.match(ICEScriptParser.END_STMT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Assign_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_assign_stmt;
    return this;
}

Assign_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assign_stmtContext.prototype.constructor = Assign_stmtContext;

Assign_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Assign_stmtContext.prototype.ASSIGN = function() {
    return this.getToken(ICEScriptParser.ASSIGN, 0);
};

Assign_stmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Assign_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Assign_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterAssign_stmt(this);
	}
};

Assign_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitAssign_stmt(this);
	}
};

Assign_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitAssign_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Assign_stmtContext = Assign_stmtContext;

ICEScriptParser.prototype.assign_stmt = function() {

    var localctx = new Assign_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ICEScriptParser.RULE_assign_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.identifier();
        this.state = 162;
        this.match(ICEScriptParser.ASSIGN);
        this.state = 163;
        this.expression(0);
        this.state = 164;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ti_basic_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_ti_basic_stmt;
    return this;
}

Ti_basic_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ti_basic_stmtContext.prototype.constructor = Ti_basic_stmtContext;

Ti_basic_stmtContext.prototype.OPEN_CURLEY = function() {
    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
};

Ti_basic_stmtContext.prototype.any = function() {
    return this.getTypedRuleContext(AnyContext,0);
};

Ti_basic_stmtContext.prototype.CLOSE_CURLEY = function() {
    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
};

Ti_basic_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterTi_basic_stmt(this);
	}
};

Ti_basic_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitTi_basic_stmt(this);
	}
};

Ti_basic_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitTi_basic_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Ti_basic_stmtContext = Ti_basic_stmtContext;

ICEScriptParser.prototype.ti_basic_stmt = function() {

    var localctx = new Ti_basic_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ICEScriptParser.RULE_ti_basic_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(ICEScriptParser.T__5);
        this.state = 167;
        this.match(ICEScriptParser.OPEN_CURLEY);
        this.state = 168;
        this.any();
        this.state = 169;
        this.match(ICEScriptParser.CLOSE_CURLEY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_any;
    return this;
}

AnyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnyContext.prototype.constructor = AnyContext;


AnyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterAny(this);
	}
};

AnyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitAny(this);
	}
};

AnyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitAny(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.AnyContext = AnyContext;

ICEScriptParser.prototype.any = function() {

    var localctx = new AnyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ICEScriptParser.RULE_any);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 171;
        		this.matchWildcard();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 174; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Add_assign_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_add_assign_stmt;
    return this;
}

Add_assign_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_assign_stmtContext.prototype.constructor = Add_assign_stmtContext;

Add_assign_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Add_assign_stmtContext.prototype.ADDASSIGN = function() {
    return this.getToken(ICEScriptParser.ADDASSIGN, 0);
};

Add_assign_stmtContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Add_assign_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Add_assign_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterAdd_assign_stmt(this);
	}
};

Add_assign_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitAdd_assign_stmt(this);
	}
};

Add_assign_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitAdd_assign_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Add_assign_stmtContext = Add_assign_stmtContext;

ICEScriptParser.prototype.add_assign_stmt = function() {

    var localctx = new Add_assign_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ICEScriptParser.RULE_add_assign_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.identifier();
        this.state = 177;
        this.match(ICEScriptParser.ADDASSIGN);
        this.state = 178;
        this.value();
        this.state = 179;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sub_assign_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_sub_assign_stmt;
    return this;
}

Sub_assign_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sub_assign_stmtContext.prototype.constructor = Sub_assign_stmtContext;

Sub_assign_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Sub_assign_stmtContext.prototype.SUBASSIGN = function() {
    return this.getToken(ICEScriptParser.SUBASSIGN, 0);
};

Sub_assign_stmtContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Sub_assign_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Sub_assign_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterSub_assign_stmt(this);
	}
};

Sub_assign_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitSub_assign_stmt(this);
	}
};

Sub_assign_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitSub_assign_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Sub_assign_stmtContext = Sub_assign_stmtContext;

ICEScriptParser.prototype.sub_assign_stmt = function() {

    var localctx = new Sub_assign_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ICEScriptParser.RULE_sub_assign_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.identifier();
        this.state = 182;
        this.match(ICEScriptParser.SUBASSIGN);
        this.state = 183;
        this.value();
        this.state = 184;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mul_assign_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_mul_assign_stmt;
    return this;
}

Mul_assign_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mul_assign_stmtContext.prototype.constructor = Mul_assign_stmtContext;

Mul_assign_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Mul_assign_stmtContext.prototype.MULASSIGN = function() {
    return this.getToken(ICEScriptParser.MULASSIGN, 0);
};

Mul_assign_stmtContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Mul_assign_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Mul_assign_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterMul_assign_stmt(this);
	}
};

Mul_assign_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitMul_assign_stmt(this);
	}
};

Mul_assign_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitMul_assign_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Mul_assign_stmtContext = Mul_assign_stmtContext;

ICEScriptParser.prototype.mul_assign_stmt = function() {

    var localctx = new Mul_assign_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ICEScriptParser.RULE_mul_assign_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.identifier();
        this.state = 187;
        this.match(ICEScriptParser.MULASSIGN);
        this.state = 188;
        this.value();
        this.state = 189;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Div_assign_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_div_assign_stmt;
    return this;
}

Div_assign_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Div_assign_stmtContext.prototype.constructor = Div_assign_stmtContext;

Div_assign_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Div_assign_stmtContext.prototype.DIVASSIGN = function() {
    return this.getToken(ICEScriptParser.DIVASSIGN, 0);
};

Div_assign_stmtContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Div_assign_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Div_assign_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterDiv_assign_stmt(this);
	}
};

Div_assign_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitDiv_assign_stmt(this);
	}
};

Div_assign_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitDiv_assign_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Div_assign_stmtContext = Div_assign_stmtContext;

ICEScriptParser.prototype.div_assign_stmt = function() {

    var localctx = new Div_assign_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ICEScriptParser.RULE_div_assign_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.identifier();
        this.state = 192;
        this.match(ICEScriptParser.DIVASSIGN);
        this.state = 193;
        this.value();
        this.state = 194;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Inc_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_inc_stmt;
    return this;
}

Inc_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Inc_stmtContext.prototype.constructor = Inc_stmtContext;

Inc_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Inc_stmtContext.prototype.INCREMENT = function() {
    return this.getToken(ICEScriptParser.INCREMENT, 0);
};

Inc_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Inc_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterInc_stmt(this);
	}
};

Inc_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitInc_stmt(this);
	}
};

Inc_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitInc_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Inc_stmtContext = Inc_stmtContext;

ICEScriptParser.prototype.inc_stmt = function() {

    var localctx = new Inc_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ICEScriptParser.RULE_inc_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.identifier();
        this.state = 197;
        this.match(ICEScriptParser.INCREMENT);
        this.state = 198;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Dec_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_dec_stmt;
    return this;
}

Dec_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dec_stmtContext.prototype.constructor = Dec_stmtContext;

Dec_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Dec_stmtContext.prototype.DECREMENT = function() {
    return this.getToken(ICEScriptParser.DECREMENT, 0);
};

Dec_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Dec_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterDec_stmt(this);
	}
};

Dec_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitDec_stmt(this);
	}
};

Dec_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitDec_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Dec_stmtContext = Dec_stmtContext;

ICEScriptParser.prototype.dec_stmt = function() {

    var localctx = new Dec_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ICEScriptParser.RULE_dec_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.identifier();
        this.state = 201;
        this.match(ICEScriptParser.DECREMENT);
        this.state = 202;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_if_stmt;
    return this;
}

If_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_stmtContext.prototype.constructor = If_stmtContext;

If_stmtContext.prototype.IF = function() {
    return this.getToken(ICEScriptParser.IF, 0);
};

If_stmtContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

If_stmtContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

If_stmtContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

If_stmtContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

If_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterIf_stmt(this);
	}
};

If_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitIf_stmt(this);
	}
};

If_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitIf_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.If_stmtContext = If_stmtContext;

ICEScriptParser.prototype.if_stmt = function() {

    var localctx = new If_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ICEScriptParser.RULE_if_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(ICEScriptParser.IF);
        this.state = 205;
        this.match(ICEScriptParser.OPEN_BRACKET);
        this.state = 206;
        this.boolexpr();
        this.state = 207;
        this.match(ICEScriptParser.CLOSE_BRACKET);
        this.state = 208;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_else_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_if_else_stmt;
    return this;
}

If_else_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_else_stmtContext.prototype.constructor = If_else_stmtContext;

If_else_stmtContext.prototype.IF = function() {
    return this.getToken(ICEScriptParser.IF, 0);
};

If_else_stmtContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

If_else_stmtContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

If_else_stmtContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

If_else_stmtContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

If_else_stmtContext.prototype.ELSE = function() {
    return this.getToken(ICEScriptParser.ELSE, 0);
};

If_else_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterIf_else_stmt(this);
	}
};

If_else_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitIf_else_stmt(this);
	}
};

If_else_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitIf_else_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.If_else_stmtContext = If_else_stmtContext;

ICEScriptParser.prototype.if_else_stmt = function() {

    var localctx = new If_else_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ICEScriptParser.RULE_if_else_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(ICEScriptParser.IF);
        this.state = 211;
        this.match(ICEScriptParser.OPEN_BRACKET);
        this.state = 212;
        this.boolexpr();
        this.state = 213;
        this.match(ICEScriptParser.CLOSE_BRACKET);
        this.state = 214;
        this.statement();
        this.state = 215;
        this.match(ICEScriptParser.ELSE);
        this.state = 216;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function While_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_while_stmt;
    return this;
}

While_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_stmtContext.prototype.constructor = While_stmtContext;

While_stmtContext.prototype.WHILE = function() {
    return this.getToken(ICEScriptParser.WHILE, 0);
};

While_stmtContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

While_stmtContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

While_stmtContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

While_stmtContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

While_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterWhile_stmt(this);
	}
};

While_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitWhile_stmt(this);
	}
};

While_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitWhile_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.While_stmtContext = While_stmtContext;

ICEScriptParser.prototype.while_stmt = function() {

    var localctx = new While_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ICEScriptParser.RULE_while_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(ICEScriptParser.WHILE);
        this.state = 219;
        this.match(ICEScriptParser.OPEN_BRACKET);
        this.state = 220;
        this.boolexpr();
        this.state = 221;
        this.match(ICEScriptParser.CLOSE_BRACKET);
        this.state = 222;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function For_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_for_stmt;
    return this;
}

For_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_stmtContext.prototype.constructor = For_stmtContext;

For_stmtContext.prototype.FOR = function() {
    return this.getToken(ICEScriptParser.FOR, 0);
};

For_stmtContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

For_stmtContext.prototype.var_stmt = function() {
    return this.getTypedRuleContext(Var_stmtContext,0);
};

For_stmtContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

For_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

For_stmtContext.prototype.inc_stmt = function() {
    return this.getTypedRuleContext(Inc_stmtContext,0);
};

For_stmtContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

For_stmtContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

For_stmtContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

For_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterFor_stmt(this);
	}
};

For_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitFor_stmt(this);
	}
};

For_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitFor_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.For_stmtContext = For_stmtContext;

ICEScriptParser.prototype.for_stmt = function() {

    var localctx = new For_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ICEScriptParser.RULE_for_stmt);
    try {
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.match(ICEScriptParser.FOR);
            this.state = 225;
            this.match(ICEScriptParser.OPEN_BRACKET);
            this.state = 226;
            this.var_stmt();
            this.state = 227;
            this.boolexpr();
            this.state = 228;
            this.match(ICEScriptParser.END_STMT);
            this.state = 229;
            this.inc_stmt();
            this.state = 230;
            this.match(ICEScriptParser.CLOSE_BRACKET);
            this.state = 231;
            this.statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.match(ICEScriptParser.FOR);
            this.state = 234;
            this.match(ICEScriptParser.OPEN_BRACKET);
            this.state = 235;
            this.var_stmt();
            this.state = 236;
            this.match(ICEScriptParser.T__6);
            this.state = 237;
            this.value();
            this.state = 238;
            this.match(ICEScriptParser.CLOSE_BRACKET);
            this.state = 239;
            this.statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Var_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_var_stmt;
    return this;
}

Var_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_stmtContext.prototype.constructor = Var_stmtContext;

Var_stmtContext.prototype.VAR = function() {
    return this.getToken(ICEScriptParser.VAR, 0);
};

Var_stmtContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Var_stmtContext.prototype.ASSIGN = function() {
    return this.getToken(ICEScriptParser.ASSIGN, 0);
};

Var_stmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Var_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Var_stmtContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Var_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterVar_stmt(this);
	}
};

Var_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitVar_stmt(this);
	}
};

Var_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitVar_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Var_stmtContext = Var_stmtContext;

ICEScriptParser.prototype.var_stmt = function() {

    var localctx = new Var_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ICEScriptParser.RULE_var_stmt);
    try {
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.match(ICEScriptParser.VAR);
            this.state = 244;
            this.identifier();
            this.state = 245;
            this.match(ICEScriptParser.ASSIGN);
            this.state = 246;
            this.expression(0);
            this.state = 247;
            this.match(ICEScriptParser.END_STMT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 249;
            this.match(ICEScriptParser.VAR);
            this.state = 250;
            this.identifier();
            this.state = 251;
            this.match(ICEScriptParser.T__3);
            this.state = 252;
            this.type(0);
            this.state = 253;
            this.match(ICEScriptParser.ASSIGN);
            this.state = 254;
            this.expression(0);
            this.state = 255;
            this.match(ICEScriptParser.END_STMT);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_return_stmt;
    return this;
}

Return_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_stmtContext.prototype.constructor = Return_stmtContext;

Return_stmtContext.prototype.RETURN = function() {
    return this.getToken(ICEScriptParser.RETURN, 0);
};

Return_stmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Return_stmtContext.prototype.END_STMT = function() {
    return this.getToken(ICEScriptParser.END_STMT, 0);
};

Return_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterReturn_stmt(this);
	}
};

Return_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitReturn_stmt(this);
	}
};

Return_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitReturn_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.Return_stmtContext = Return_stmtContext;

ICEScriptParser.prototype.return_stmt = function() {

    var localctx = new Return_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ICEScriptParser.RULE_return_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(ICEScriptParser.RETURN);
        this.state = 260;
        this.expression(0);
        this.state = 261;
        this.match(ICEScriptParser.END_STMT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

ExpressionContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

ExpressionContext.prototype.STRING = function() {
    return this.getToken(ICEScriptParser.STRING, 0);
};

ExpressionContext.prototype.methodcall = function() {
    return this.getTypedRuleContext(MethodcallContext,0);
};

ExpressionContext.prototype.LIST = function() {
    return this.getToken(ICEScriptParser.LIST, 0);
};

ExpressionContext.prototype.ADD = function() {
    return this.getToken(ICEScriptParser.ADD, 0);
};

ExpressionContext.prototype.SUB = function() {
    return this.getToken(ICEScriptParser.SUB, 0);
};

ExpressionContext.prototype.MUL = function() {
    return this.getToken(ICEScriptParser.MUL, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(ICEScriptParser.DIV, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ICEScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 48;
    this.enterRecursionRule(localctx, 48, ICEScriptParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 264;
            this.match(ICEScriptParser.OPEN_BRACKET);
            this.state = 265;
            this.expression(0);
            this.state = 266;
            this.match(ICEScriptParser.CLOSE_BRACKET);
            break;

        case 2:
            this.state = 268;
            this.value();
            break;

        case 3:
            this.state = 269;
            this.identifier();
            break;

        case 4:
            this.state = 270;
            this.boolexpr();
            break;

        case 5:
            this.state = 271;
            this.match(ICEScriptParser.STRING);
            break;

        case 6:
            this.state = 272;
            this.methodcall();
            break;

        case 7:
            this.state = 273;
            this.match(ICEScriptParser.LIST);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 290;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 288;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
                    this.state = 276;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 277;
                    this.match(ICEScriptParser.ADD);
                    this.state = 278;
                    this.expression(5);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
                    this.state = 279;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 280;
                    this.match(ICEScriptParser.SUB);
                    this.state = 281;
                    this.expression(4);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
                    this.state = 282;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 283;
                    this.match(ICEScriptParser.MUL);
                    this.state = 284;
                    this.expression(3);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
                    this.state = 285;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 286;
                    this.match(ICEScriptParser.DIV);
                    this.state = 287;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 292;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function MathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_math;
    return this;
}

MathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathContext.prototype.constructor = MathContext;

MathContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MathContext.prototype.ADD = function() {
    return this.getToken(ICEScriptParser.ADD, 0);
};

MathContext.prototype.SUB = function() {
    return this.getToken(ICEScriptParser.SUB, 0);
};

MathContext.prototype.MUL = function() {
    return this.getToken(ICEScriptParser.MUL, 0);
};

MathContext.prototype.DIV = function() {
    return this.getToken(ICEScriptParser.DIV, 0);
};

MathContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterMath(this);
	}
};

MathContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitMath(this);
	}
};

MathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitMath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.MathContext = MathContext;

ICEScriptParser.prototype.math = function() {

    var localctx = new MathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ICEScriptParser.RULE_math);
    try {
        this.state = 309;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 293;
            this.expression(0);
            this.state = 294;
            this.match(ICEScriptParser.ADD);
            this.state = 295;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 297;
            this.expression(0);
            this.state = 298;
            this.match(ICEScriptParser.SUB);
            this.state = 299;
            this.expression(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 301;
            this.expression(0);
            this.state = 302;
            this.match(ICEScriptParser.MUL);
            this.state = 303;
            this.expression(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 305;
            this.expression(0);
            this.state = 306;
            this.match(ICEScriptParser.DIV);
            this.state = 307;
            this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BoolexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_boolexpr;
    return this;
}

BoolexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolexprContext.prototype.constructor = BoolexprContext;

BoolexprContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

BoolexprContext.prototype.TRUE = function() {
    return this.getToken(ICEScriptParser.TRUE, 0);
};

BoolexprContext.prototype.FALSE = function() {
    return this.getToken(ICEScriptParser.FALSE, 0);
};

BoolexprContext.prototype.GREATER_THAN = function() {
    return this.getToken(ICEScriptParser.GREATER_THAN, 0);
};

BoolexprContext.prototype.boolexpr = function() {
    return this.getTypedRuleContext(BoolexprContext,0);
};

BoolexprContext.prototype.LESS_THAN = function() {
    return this.getToken(ICEScriptParser.LESS_THAN, 0);
};

BoolexprContext.prototype.EQUAL_TO = function() {
    return this.getToken(ICEScriptParser.EQUAL_TO, 0);
};

BoolexprContext.prototype.NOT_EQUAL_TO = function() {
    return this.getToken(ICEScriptParser.NOT_EQUAL_TO, 0);
};

BoolexprContext.prototype.GREATER_THAN_OR_EQUAL = function() {
    return this.getToken(ICEScriptParser.GREATER_THAN_OR_EQUAL, 0);
};

BoolexprContext.prototype.LESS_THAN_OR_EQUAL = function() {
    return this.getToken(ICEScriptParser.LESS_THAN_OR_EQUAL, 0);
};

BoolexprContext.prototype.OR = function() {
    return this.getToken(ICEScriptParser.OR, 0);
};

BoolexprContext.prototype.AND = function() {
    return this.getToken(ICEScriptParser.AND, 0);
};

BoolexprContext.prototype.NOT = function() {
    return this.getToken(ICEScriptParser.NOT, 0);
};

BoolexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterBoolexpr(this);
	}
};

BoolexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitBoolexpr(this);
	}
};

BoolexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitBoolexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.BoolexprContext = BoolexprContext;

ICEScriptParser.prototype.boolexpr = function() {

    var localctx = new BoolexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ICEScriptParser.RULE_boolexpr);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.match(ICEScriptParser.TRUE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 313;
            this.match(ICEScriptParser.FALSE);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 314;
            this.value();
            this.state = 315;
            this.match(ICEScriptParser.GREATER_THAN);
            this.state = 316;
            this.boolexpr();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 318;
            this.value();
            this.state = 319;
            this.match(ICEScriptParser.LESS_THAN);
            this.state = 320;
            this.boolexpr();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 322;
            this.value();
            this.state = 323;
            this.match(ICEScriptParser.EQUAL_TO);
            this.state = 324;
            this.boolexpr();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 326;
            this.value();
            this.state = 327;
            this.match(ICEScriptParser.NOT_EQUAL_TO);
            this.state = 328;
            this.boolexpr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 330;
            this.value();
            this.state = 331;
            this.match(ICEScriptParser.GREATER_THAN_OR_EQUAL);
            this.state = 332;
            this.boolexpr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 334;
            this.value();
            this.state = 335;
            this.match(ICEScriptParser.LESS_THAN_OR_EQUAL);
            this.state = 336;
            this.boolexpr();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 338;
            this.value();
            this.state = 339;
            this.match(ICEScriptParser.OR);
            this.state = 340;
            this.boolexpr();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 342;
            this.value();
            this.state = 343;
            this.match(ICEScriptParser.AND);
            this.state = 344;
            this.boolexpr();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 346;
            this.match(ICEScriptParser.NOT);
            this.state = 347;
            this.boolexpr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodcallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_methodcall;
    return this;
}

MethodcallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodcallContext.prototype.constructor = MethodcallContext;

MethodcallContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MethodcallContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
};

MethodcallContext.prototype.methodparams = function() {
    return this.getTypedRuleContext(MethodparamsContext,0);
};

MethodcallContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
};

MethodcallContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterMethodcall(this);
	}
};

MethodcallContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitMethodcall(this);
	}
};

MethodcallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitMethodcall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.MethodcallContext = MethodcallContext;

ICEScriptParser.prototype.methodcall = function() {

    var localctx = new MethodcallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ICEScriptParser.RULE_methodcall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.identifier();
        this.state = 351;
        this.match(ICEScriptParser.OPEN_BRACKET);
        this.state = 352;
        this.methodparams();
        this.state = 353;
        this.match(ICEScriptParser.CLOSE_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodparamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_methodparams;
    return this;
}

MethodparamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodparamsContext.prototype.constructor = MethodparamsContext;

MethodparamsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MethodparamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterMethodparams(this);
	}
};

MethodparamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitMethodparams(this);
	}
};

MethodparamsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitMethodparams(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.MethodparamsContext = MethodparamsContext;

ICEScriptParser.prototype.methodparams = function() {

    var localctx = new MethodparamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ICEScriptParser.RULE_methodparams);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ICEScriptParser.OPEN_BRACKET || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ICEScriptParser.NOT - 33)) | (1 << (ICEScriptParser.TRUE - 33)) | (1 << (ICEScriptParser.FALSE - 33)) | (1 << (ICEScriptParser.IDENTIFIER - 33)) | (1 << (ICEScriptParser.PI - 33)) | (1 << (ICEScriptParser.STRING - 33)) | (1 << (ICEScriptParser.LIST - 33)) | (1 << (ICEScriptParser.NUMBER - 33)))) !== 0)) {
            this.state = 355;
            this.expression(0);
            this.state = 360;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 365;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ICEScriptParser.T__4) {
            this.state = 361;
            this.match(ICEScriptParser.T__4);
            this.state = 362;
            this.expression(0);
            this.state = 367;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.ValueContext = ValueContext;

ICEScriptParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ICEScriptParser.RULE_value);
    try {
        this.state = 370;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ICEScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 368;
            this.identifier();
            break;
        case ICEScriptParser.PI:
        case ICEScriptParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 369;
            this.number();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(ICEScriptParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.IdentifierContext = IdentifierContext;

ICEScriptParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ICEScriptParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.match(ICEScriptParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(ICEScriptParser.NUMBER, 0);
};

NumberContext.prototype.PI = function() {
    return this.getToken(ICEScriptParser.PI, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.NumberContext = NumberContext;

ICEScriptParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ICEScriptParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        _la = this._input.LA(1);
        if(!(_la===ICEScriptParser.PI || _la===ICEScriptParser.NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.ListContext = ListContext;

ICEScriptParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ICEScriptParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(ICEScriptParser.T__7);
        this.state = 380;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ICEScriptParser.OPEN_BRACKET || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ICEScriptParser.NOT - 33)) | (1 << (ICEScriptParser.TRUE - 33)) | (1 << (ICEScriptParser.FALSE - 33)) | (1 << (ICEScriptParser.IDENTIFIER - 33)) | (1 << (ICEScriptParser.PI - 33)) | (1 << (ICEScriptParser.STRING - 33)) | (1 << (ICEScriptParser.LIST - 33)) | (1 << (ICEScriptParser.NUMBER - 33)))) !== 0)) {
            this.state = 377;
            this.expression(0);
            this.state = 382;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 387;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ICEScriptParser.T__4) {
            this.state = 383;
            this.match(ICEScriptParser.T__4);
            this.state = 384;
            this.expression(0);
            this.state = 389;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 390;
        this.match(ICEScriptParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(ICEScriptParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ICEScriptParser.StringContext = StringContext;

ICEScriptParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ICEScriptParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(ICEScriptParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ICEScriptParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ICEScriptListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ICEScriptVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ICEScriptParser.prototype.type = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TypeContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 68;
    this.enterRecursionRule(localctx, 68, ICEScriptParser.RULE_type, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            break;

        case 2:
            this.state = 395;
            this.match(ICEScriptParser.T__9);
            break;

        case 3:
            this.state = 396;
            this.match(ICEScriptParser.T__10);
            break;

        case 4:
            this.state = 397;
            this.match(ICEScriptParser.T__11);
            break;

        case 5:
            this.state = 398;
            this.match(ICEScriptParser.T__12);
            break;

        case 6:
            this.state = 399;
            this.match(ICEScriptParser.T__13);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 406;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new TypeContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_type);
                this.state = 402;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 403;
                this.match(ICEScriptParser.T__14); 
            }
            this.state = 408;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


ICEScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 24:
			return this.expression_sempred(localctx, predIndex);
	case 34:
			return this.type_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ICEScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ICEScriptParser.prototype.type_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ICEScriptParser = ICEScriptParser;
