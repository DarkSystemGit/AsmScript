// Generated from ./antlr/grammars/ICEScript by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ICEScriptListener from './ICEScriptListener.js';
import ICEScriptVisitor from './ICEScriptVisitor.js';

const serializedATN = [4,1,60,516,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,5,
0,85,8,0,10,0,12,0,88,9,0,1,0,5,0,91,8,0,10,0,12,0,94,9,0,1,0,3,0,97,8,0,
1,1,5,1,100,8,1,10,1,12,1,103,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,
5,132,8,5,1,6,1,6,1,6,1,6,1,6,5,6,139,8,6,10,6,12,6,142,9,6,3,6,144,8,6,
1,7,1,7,1,7,1,7,1,7,3,7,151,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,160,8,8,
10,8,12,8,163,9,8,1,8,1,8,1,8,1,8,1,9,5,9,170,8,9,10,9,12,9,173,9,9,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,5,12,184,8,12,10,12,12,12,187,9,
12,1,12,1,12,5,12,191,8,12,10,12,12,12,194,9,12,1,13,1,13,5,13,198,8,13,
10,13,12,13,201,9,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,222,8,13,1,14,1,14,1,14,
1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,4,16,235,8,16,11,16,12,16,236,1,
17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,
1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,
23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,
1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,295,8,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,308,8,26,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,324,
8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,3,29,344,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,5,29,358,8,29,10,29,12,29,361,9,29,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,
379,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,418,8,31,1,32,1,32,
3,32,422,8,32,1,33,1,33,1,34,1,34,1,35,1,35,5,35,430,8,35,10,35,12,35,433,
9,35,1,35,1,35,5,35,437,8,35,10,35,12,35,440,9,35,1,35,1,35,1,36,1,36,1,
36,1,36,1,36,5,36,449,8,36,10,36,12,36,452,9,36,1,36,1,36,1,36,1,36,1,36,
5,36,459,8,36,10,36,12,36,462,9,36,1,36,1,36,1,37,1,37,1,38,1,38,1,38,3,
38,471,8,38,1,38,1,38,1,38,1,38,3,38,477,8,38,1,38,1,38,1,38,1,38,3,38,483,
8,38,5,38,485,8,38,10,38,12,38,488,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,
39,1,39,3,39,498,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,507,8,40,1,
40,1,40,5,40,511,8,40,10,40,12,40,514,9,40,1,40,1,236,2,58,80,41,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,0,1,2,0,54,54,57,57,565,0,96,1,0,0,0,
2,101,1,0,0,0,4,104,1,0,0,0,6,106,1,0,0,0,8,110,1,0,0,0,10,131,1,0,0,0,12,
143,1,0,0,0,14,150,1,0,0,0,16,155,1,0,0,0,18,171,1,0,0,0,20,174,1,0,0,0,
22,177,1,0,0,0,24,185,1,0,0,0,26,221,1,0,0,0,28,223,1,0,0,0,30,228,1,0,0,
0,32,234,1,0,0,0,34,238,1,0,0,0,36,243,1,0,0,0,38,248,1,0,0,0,40,253,1,0,
0,0,42,258,1,0,0,0,44,262,1,0,0,0,46,266,1,0,0,0,48,272,1,0,0,0,50,280,1,
0,0,0,52,307,1,0,0,0,54,323,1,0,0,0,56,325,1,0,0,0,58,343,1,0,0,0,60,378,
1,0,0,0,62,417,1,0,0,0,64,421,1,0,0,0,66,423,1,0,0,0,68,425,1,0,0,0,70,427,
1,0,0,0,72,443,1,0,0,0,74,465,1,0,0,0,76,470,1,0,0,0,78,497,1,0,0,0,80,506,
1,0,0,0,82,86,3,2,1,0,83,85,3,10,5,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,
0,0,0,86,87,1,0,0,0,87,92,1,0,0,0,88,86,1,0,0,0,89,91,3,26,13,0,90,89,1,
0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,97,1,0,0,0,94,92,1,0,
0,0,95,97,5,0,0,1,96,82,1,0,0,0,96,95,1,0,0,0,97,1,1,0,0,0,98,100,3,8,4,
0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,3,1,0,
0,0,103,101,1,0,0,0,104,105,3,6,3,0,105,5,1,0,0,0,106,107,5,1,0,0,107,108,
3,66,33,0,108,109,5,23,0,0,109,7,1,0,0,0,110,111,5,2,0,0,111,112,3,66,33,
0,112,113,5,23,0,0,113,9,1,0,0,0,114,115,5,46,0,0,115,116,3,66,33,0,116,
117,5,19,0,0,117,118,3,12,6,0,118,119,5,20,0,0,119,120,5,3,0,0,120,121,3,
80,40,0,121,122,3,26,13,0,122,132,1,0,0,0,123,124,3,66,33,0,124,125,5,19,
0,0,125,126,3,12,6,0,126,127,5,20,0,0,127,128,5,3,0,0,128,129,3,80,40,0,
129,130,3,26,13,0,130,132,1,0,0,0,131,114,1,0,0,0,131,123,1,0,0,0,132,11,
1,0,0,0,133,144,3,14,7,0,134,144,1,0,0,0,135,140,3,14,7,0,136,137,5,4,0,
0,137,139,3,14,7,0,138,136,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,
1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,143,133,1,0,0,0,143,134,1,0,0,0,
143,135,1,0,0,0,144,13,1,0,0,0,145,151,3,66,33,0,146,151,1,0,0,0,147,151,
3,58,29,0,148,151,1,0,0,0,149,151,3,32,16,0,150,145,1,0,0,0,150,146,1,0,
0,0,150,147,1,0,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,
153,5,3,0,0,153,154,3,80,40,0,154,15,1,0,0,0,155,156,5,5,0,0,156,161,3,66,
33,0,157,158,5,6,0,0,158,160,3,66,33,0,159,157,1,0,0,0,160,163,1,0,0,0,161,
159,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,161,1,0,0,0,164,165,5,21,
0,0,165,166,3,18,9,0,166,167,5,22,0,0,167,17,1,0,0,0,168,170,3,10,5,0,169,
168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,19,1,0,0,
0,173,171,1,0,0,0,174,175,5,7,0,0,175,176,3,22,11,0,176,21,1,0,0,0,177,178,
3,66,33,0,178,179,5,19,0,0,179,180,3,24,12,0,180,181,5,20,0,0,181,23,1,0,
0,0,182,184,3,58,29,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,
186,1,0,0,0,186,192,1,0,0,0,187,185,1,0,0,0,188,189,5,4,0,0,189,191,3,58,
29,0,190,188,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,
25,1,0,0,0,194,192,1,0,0,0,195,199,5,21,0,0,196,198,3,26,13,0,197,196,1,
0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,
199,1,0,0,0,202,222,5,22,0,0,203,222,3,28,14,0,204,222,3,30,15,0,205,222,
3,34,17,0,206,222,3,36,18,0,207,222,3,38,19,0,208,222,3,40,20,0,209,222,
3,42,21,0,210,222,3,44,22,0,211,222,3,46,23,0,212,222,3,48,24,0,213,222,
3,50,25,0,214,222,3,52,26,0,215,222,3,54,27,0,216,222,3,56,28,0,217,218,
3,58,29,0,218,219,5,23,0,0,219,222,1,0,0,0,220,222,5,23,0,0,221,195,1,0,
0,0,221,203,1,0,0,0,221,204,1,0,0,0,221,205,1,0,0,0,221,206,1,0,0,0,221,
207,1,0,0,0,221,208,1,0,0,0,221,209,1,0,0,0,221,210,1,0,0,0,221,211,1,0,
0,0,221,212,1,0,0,0,221,213,1,0,0,0,221,214,1,0,0,0,221,215,1,0,0,0,221,
216,1,0,0,0,221,217,1,0,0,0,221,220,1,0,0,0,222,27,1,0,0,0,223,224,3,66,
33,0,224,225,5,37,0,0,225,226,3,58,29,0,226,227,5,23,0,0,227,29,1,0,0,0,
228,229,5,8,0,0,229,230,5,21,0,0,230,231,3,32,16,0,231,232,5,22,0,0,232,
31,1,0,0,0,233,235,9,0,0,0,234,233,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,
0,236,234,1,0,0,0,237,33,1,0,0,0,238,239,3,66,33,0,239,240,5,38,0,0,240,
241,3,64,32,0,241,242,5,23,0,0,242,35,1,0,0,0,243,244,3,66,33,0,244,245,
5,39,0,0,245,246,3,64,32,0,246,247,5,23,0,0,247,37,1,0,0,0,248,249,3,66,
33,0,249,250,5,40,0,0,250,251,3,64,32,0,251,252,5,23,0,0,252,39,1,0,0,0,
253,254,3,66,33,0,254,255,5,41,0,0,255,256,3,64,32,0,256,257,5,23,0,0,257,
41,1,0,0,0,258,259,3,66,33,0,259,260,5,44,0,0,260,261,5,23,0,0,261,43,1,
0,0,0,262,263,3,66,33,0,263,264,5,45,0,0,264,265,5,23,0,0,265,45,1,0,0,0,
266,267,5,42,0,0,267,268,5,19,0,0,268,269,3,62,31,0,269,270,5,20,0,0,270,
271,3,26,13,0,271,47,1,0,0,0,272,273,5,42,0,0,273,274,5,19,0,0,274,275,3,
62,31,0,275,276,5,20,0,0,276,277,3,26,13,0,277,278,5,43,0,0,278,279,3,26,
13,0,279,49,1,0,0,0,280,281,5,48,0,0,281,282,5,19,0,0,282,283,3,62,31,0,
283,284,5,20,0,0,284,285,3,26,13,0,285,51,1,0,0,0,286,287,5,49,0,0,287,288,
5,19,0,0,288,289,3,54,27,0,289,290,3,62,31,0,290,294,5,23,0,0,291,295,3,
42,21,0,292,295,1,0,0,0,293,295,3,44,22,0,294,291,1,0,0,0,294,292,1,0,0,
0,294,293,1,0,0,0,295,296,1,0,0,0,296,297,5,20,0,0,297,298,3,26,13,0,298,
308,1,0,0,0,299,300,5,49,0,0,300,301,5,19,0,0,301,302,3,54,27,0,302,303,
5,9,0,0,303,304,3,64,32,0,304,305,5,20,0,0,305,306,3,26,13,0,306,308,1,0,
0,0,307,286,1,0,0,0,307,299,1,0,0,0,308,53,1,0,0,0,309,310,5,47,0,0,310,
311,3,66,33,0,311,312,5,37,0,0,312,313,3,58,29,0,313,314,5,23,0,0,314,324,
1,0,0,0,315,316,5,47,0,0,316,317,3,66,33,0,317,318,5,3,0,0,318,319,3,80,
40,0,319,320,5,37,0,0,320,321,3,58,29,0,321,322,5,23,0,0,322,324,1,0,0,0,
323,309,1,0,0,0,323,315,1,0,0,0,324,55,1,0,0,0,325,326,5,50,0,0,326,327,
3,58,29,0,327,328,5,23,0,0,328,57,1,0,0,0,329,330,6,29,-1,0,330,331,5,19,
0,0,331,332,3,58,29,0,332,333,5,20,0,0,333,344,1,0,0,0,334,344,3,20,10,0,
335,344,3,22,11,0,336,344,3,64,32,0,337,344,3,66,33,0,338,344,3,62,31,0,
339,344,3,74,37,0,340,344,3,72,36,0,341,344,3,70,35,0,342,344,3,76,38,0,
343,329,1,0,0,0,343,334,1,0,0,0,343,335,1,0,0,0,343,336,1,0,0,0,343,337,
1,0,0,0,343,338,1,0,0,0,343,339,1,0,0,0,343,340,1,0,0,0,343,341,1,0,0,0,
343,342,1,0,0,0,344,359,1,0,0,0,345,346,10,4,0,0,346,347,5,24,0,0,347,358,
3,58,29,5,348,349,10,3,0,0,349,350,5,25,0,0,350,358,3,58,29,4,351,352,10,
2,0,0,352,353,5,26,0,0,353,358,3,58,29,3,354,355,10,1,0,0,355,356,5,27,0,
0,356,358,3,58,29,2,357,345,1,0,0,0,357,348,1,0,0,0,357,351,1,0,0,0,357,
354,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,59,1,0,0,
0,361,359,1,0,0,0,362,363,3,58,29,0,363,364,5,24,0,0,364,365,3,58,29,0,365,
379,1,0,0,0,366,367,3,58,29,0,367,368,5,25,0,0,368,369,3,58,29,0,369,379,
1,0,0,0,370,371,3,58,29,0,371,372,5,26,0,0,372,373,3,58,29,0,373,379,1,0,
0,0,374,375,3,58,29,0,375,376,5,27,0,0,376,377,3,58,29,0,377,379,1,0,0,0,
378,362,1,0,0,0,378,366,1,0,0,0,378,370,1,0,0,0,378,374,1,0,0,0,379,61,1,
0,0,0,380,418,3,64,32,0,381,418,5,51,0,0,382,418,5,52,0,0,383,384,3,64,32,
0,384,385,5,28,0,0,385,386,3,62,31,0,386,418,1,0,0,0,387,388,3,64,32,0,388,
389,5,29,0,0,389,390,3,62,31,0,390,418,1,0,0,0,391,392,3,64,32,0,392,393,
5,30,0,0,393,394,3,62,31,0,394,418,1,0,0,0,395,396,3,64,32,0,396,397,5,31,
0,0,397,398,3,62,31,0,398,418,1,0,0,0,399,400,3,64,32,0,400,401,5,32,0,0,
401,402,3,62,31,0,402,418,1,0,0,0,403,404,3,64,32,0,404,405,5,33,0,0,405,
406,3,62,31,0,406,418,1,0,0,0,407,408,3,64,32,0,408,409,5,34,0,0,409,410,
3,62,31,0,410,418,1,0,0,0,411,412,3,64,32,0,412,413,5,35,0,0,413,414,3,62,
31,0,414,418,1,0,0,0,415,416,5,36,0,0,416,418,3,62,31,0,417,380,1,0,0,0,
417,381,1,0,0,0,417,382,1,0,0,0,417,383,1,0,0,0,417,387,1,0,0,0,417,391,
1,0,0,0,417,395,1,0,0,0,417,399,1,0,0,0,417,403,1,0,0,0,417,407,1,0,0,0,
417,411,1,0,0,0,417,415,1,0,0,0,418,63,1,0,0,0,419,422,3,66,33,0,420,422,
3,68,34,0,421,419,1,0,0,0,421,420,1,0,0,0,422,65,1,0,0,0,423,424,5,53,0,
0,424,67,1,0,0,0,425,426,7,0,0,0,426,69,1,0,0,0,427,431,5,10,0,0,428,430,
3,58,29,0,429,428,1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,431,432,1,0,0,
0,432,438,1,0,0,0,433,431,1,0,0,0,434,435,5,4,0,0,435,437,3,58,29,0,436,
434,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,441,1,0,
0,0,440,438,1,0,0,0,441,442,5,11,0,0,442,71,1,0,0,0,443,450,5,21,0,0,444,
445,3,74,37,0,445,446,5,3,0,0,446,447,3,78,39,0,447,449,1,0,0,0,448,444,
1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,1,0,0,0,451,453,1,0,0,0,
452,450,1,0,0,0,453,460,5,4,0,0,454,455,3,74,37,0,455,456,5,3,0,0,456,457,
3,78,39,0,457,459,1,0,0,0,458,454,1,0,0,0,459,462,1,0,0,0,460,458,1,0,0,
0,460,461,1,0,0,0,461,463,1,0,0,0,462,460,1,0,0,0,463,464,5,22,0,0,464,73,
1,0,0,0,465,466,5,55,0,0,466,75,1,0,0,0,467,471,3,74,37,0,468,471,1,0,0,
0,469,471,3,78,39,0,470,467,1,0,0,0,470,468,1,0,0,0,470,469,1,0,0,0,471,
472,1,0,0,0,472,476,5,24,0,0,473,477,3,74,37,0,474,477,1,0,0,0,475,477,3,
78,39,0,476,473,1,0,0,0,476,474,1,0,0,0,476,475,1,0,0,0,477,486,1,0,0,0,
478,482,5,24,0,0,479,483,3,74,37,0,480,483,1,0,0,0,481,483,3,78,39,0,482,
479,1,0,0,0,482,480,1,0,0,0,482,481,1,0,0,0,483,485,1,0,0,0,484,478,1,0,
0,0,485,488,1,0,0,0,486,484,1,0,0,0,486,487,1,0,0,0,487,77,1,0,0,0,488,486,
1,0,0,0,489,498,3,74,37,0,490,498,3,70,35,0,491,498,3,68,34,0,492,498,3,
62,31,0,493,498,3,72,36,0,494,498,3,64,32,0,495,498,3,20,10,0,496,498,3,
22,11,0,497,489,1,0,0,0,497,490,1,0,0,0,497,491,1,0,0,0,497,492,1,0,0,0,
497,493,1,0,0,0,497,494,1,0,0,0,497,495,1,0,0,0,497,496,1,0,0,0,498,79,1,
0,0,0,499,507,6,40,-1,0,500,507,5,12,0,0,501,507,5,13,0,0,502,507,5,14,0,
0,503,507,5,15,0,0,504,507,5,16,0,0,505,507,5,17,0,0,506,499,1,0,0,0,506,
500,1,0,0,0,506,501,1,0,0,0,506,502,1,0,0,0,506,503,1,0,0,0,506,504,1,0,
0,0,506,505,1,0,0,0,507,512,1,0,0,0,508,509,10,1,0,0,509,511,5,18,0,0,510,
508,1,0,0,0,511,514,1,0,0,0,512,510,1,0,0,0,512,513,1,0,0,0,513,81,1,0,0,
0,514,512,1,0,0,0,35,86,92,96,101,131,140,143,150,161,171,185,192,199,221,
236,294,307,323,343,357,359,378,417,421,431,438,450,460,470,476,482,486,
497,506,512];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ICEScriptParser extends antlr4.Parser {

    static grammarFileName = "ICEScript";
    static literalNames = [ null, "'name:'", "'import'", "':'", "','", "'class'", 
                            "'extends'", "'new'", "'__LLVM'", "'in'", "'['", 
                            "']'", "'object'", "'void'", "'list'", "'str'", 
                            "'number'", "'bool'", "'[]'", "'('", "')'", 
                            "'{'", "'}'", "';'", "'+'", "'-'", "'*'", "'/'", 
                            "'>'", "'<'", "'=='", "'!='", "'>='", "'<='", 
                            "'||'", "'&&'", "'!'", "'='", "'+='", "'-='", 
                            "'*='", "'/='", "'if'", "'else'", "'++'", "'--'", 
                            "'function'", "'var'", "'while'", "'for'", "'return'", 
                            "'true'", "'false'", null, "'$pi'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
                             "OPEN_CURLEY", "CLOSE_CURLEY", "END_STMT", 
                             "ADD", "SUB", "MUL", "DIV", "GREATER_THAN", 
                             "LESS_THAN", "EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN_OR_EQUAL", 
                             "LESS_THAN_OR_EQUAL", "OR", "AND", "NOT", "ASSIGN", 
                             "ADDASSIGN", "SUBASSIGN", "MULASSIGN", "DIVASSIGN", 
                             "IF", "ELSE", "INCREMENT", "DECREMENT", "DEF", 
                             "VAR", "WHILE", "FOR", "RETURN", "TRUE", "FALSE", 
                             "IDENTIFIER", "PI", "STRING", "LIST", "NUMBER", 
                             "LINECOMMENT", "BLOCKCOMMENT", "WHITESPACE" ];
    static ruleNames = [ "script", "header", "meta", "scriptName", "include", 
                         "functionDef", "func_params", "func_identifier", 
                         "classDef", "classBody", "classInit", "methodcall", 
                         "methodparams", "statement", "assign_stmt", "asm_stmt", 
                         "any", "add_assign_stmt", "sub_assign_stmt", "mul_assign_stmt", 
                         "div_assign_stmt", "inc_stmt", "dec_stmt", "if_stmt", 
                         "if_else_stmt", "while_stmt", "for_stmt", "var_stmt", 
                         "return_stmt", "expression", "math", "boolexpr", 
                         "value", "identifier", "number", "list", "object", 
                         "string", "string_concat", "data", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ICEScriptParser.ruleNames;
        this.literalNames = ICEScriptParser.literalNames;
        this.symbolicNames = ICEScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 29:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 40:
    	    		return this.type_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
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

    type_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ICEScriptParser.RULE_script);
	    var _la = 0;
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.header();
	            this.state = 86;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 83;
	                    this.functionDef(); 
	                }
	                this.state = 88;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	            }

	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 27788672) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 89;
	                this.statement();
	                this.state = 94;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
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
	}



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ICEScriptParser.RULE_header);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 98;
	            this.include();
	            this.state = 103;
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
	}



	meta() {
	    let localctx = new MetaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ICEScriptParser.RULE_meta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
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
	}



	scriptName() {
	    let localctx = new ScriptNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ICEScriptParser.RULE_scriptName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(ICEScriptParser.T__0);
	        this.state = 107;
	        this.identifier();
	        this.state = 108;
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
	}



	include() {
	    let localctx = new IncludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ICEScriptParser.RULE_include);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(ICEScriptParser.T__1);
	        this.state = 111;
	        this.identifier();
	        this.state = 112;
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
	}



	functionDef() {
	    let localctx = new FunctionDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ICEScriptParser.RULE_functionDef);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(ICEScriptParser.DEF);
	            this.state = 115;
	            this.identifier();
	            this.state = 116;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 117;
	            this.func_params();
	            this.state = 118;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 119;
	            this.match(ICEScriptParser.T__2);
	            this.state = 120;
	            this.type(0);
	            this.state = 121;
	            this.statement();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.identifier();
	            this.state = 124;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 125;
	            this.func_params();
	            this.state = 126;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 127;
	            this.match(ICEScriptParser.T__2);
	            this.state = 128;
	            this.type(0);
	            this.state = 129;
	            this.statement();
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
	}



	func_params() {
	    let localctx = new Func_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ICEScriptParser.RULE_func_params);
	    var _la = 0;
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.func_identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 135;
	            this.func_identifier();
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 136;
	                this.match(ICEScriptParser.T__3);
	                this.state = 137;
	                this.func_identifier();
	                this.state = 142;
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
	}



	func_identifier() {
	    let localctx = new Func_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ICEScriptParser.RULE_func_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 145;
	            this.identifier();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 147;
	            this.expression(0);
	            break;

	        case 4:
	            break;

	        case 5:
	            this.state = 149;
	            this.any();
	            break;

	        }
	        this.state = 152;
	        this.match(ICEScriptParser.T__2);
	        this.state = 153;
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
	}



	classDef() {
	    let localctx = new ClassDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ICEScriptParser.RULE_classDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(ICEScriptParser.T__4);
	        this.state = 156;
	        this.identifier();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 157;
	            this.match(ICEScriptParser.T__5);
	            this.state = 158;
	            this.identifier();
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 165;
	        this.classBody();
	        this.state = 166;
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
	}



	classBody() {
	    let localctx = new ClassBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ICEScriptParser.RULE_classBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46 || _la===53) {
	            this.state = 168;
	            this.functionDef();
	            this.state = 173;
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
	}



	classInit() {
	    let localctx = new ClassInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ICEScriptParser.RULE_classInit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(ICEScriptParser.T__6);
	        this.state = 175;
	        this.methodcall();
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
	}



	methodcall() {
	    let localctx = new MethodcallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ICEScriptParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.identifier();
	        this.state = 178;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 179;
	        this.methodparams();
	        this.state = 180;
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
	}



	methodparams() {
	    let localctx = new MethodparamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ICEScriptParser.RULE_methodparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19399808) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3112961) !== 0)) {
	            this.state = 182;
	            this.expression(0);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 188;
	            this.match(ICEScriptParser.T__3);
	            this.state = 189;
	            this.expression(0);
	            this.state = 194;
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
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ICEScriptParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(ICEScriptParser.OPEN_CURLEY);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 27788672) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 196;
	                this.statement();
	                this.state = 201;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 202;
	            this.match(ICEScriptParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.asm_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 206;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 207;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 208;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 209;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 210;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 211;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 212;
	            this.if_else_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 213;
	            this.while_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 214;
	            this.for_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 215;
	            this.var_stmt();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 216;
	            this.return_stmt();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 217;
	            this.expression(0);
	            this.state = 218;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 220;
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
	}



	assign_stmt() {
	    let localctx = new Assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ICEScriptParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.identifier();
	        this.state = 224;
	        this.match(ICEScriptParser.ASSIGN);
	        this.state = 225;
	        this.expression(0);
	        this.state = 226;
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
	}



	asm_stmt() {
	    let localctx = new Asm_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ICEScriptParser.RULE_asm_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(ICEScriptParser.T__7);
	        this.state = 229;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 230;
	        this.any();
	        this.state = 231;
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
	}



	any() {
	    let localctx = new AnyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ICEScriptParser.RULE_any);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 233;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 236; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
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
	}



	add_assign_stmt() {
	    let localctx = new Add_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ICEScriptParser.RULE_add_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.identifier();
	        this.state = 239;
	        this.match(ICEScriptParser.ADDASSIGN);
	        this.state = 240;
	        this.value();
	        this.state = 241;
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
	}



	sub_assign_stmt() {
	    let localctx = new Sub_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ICEScriptParser.RULE_sub_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.identifier();
	        this.state = 244;
	        this.match(ICEScriptParser.SUBASSIGN);
	        this.state = 245;
	        this.value();
	        this.state = 246;
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
	}



	mul_assign_stmt() {
	    let localctx = new Mul_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ICEScriptParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.identifier();
	        this.state = 249;
	        this.match(ICEScriptParser.MULASSIGN);
	        this.state = 250;
	        this.value();
	        this.state = 251;
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
	}



	div_assign_stmt() {
	    let localctx = new Div_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ICEScriptParser.RULE_div_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.identifier();
	        this.state = 254;
	        this.match(ICEScriptParser.DIVASSIGN);
	        this.state = 255;
	        this.value();
	        this.state = 256;
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
	}



	inc_stmt() {
	    let localctx = new Inc_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ICEScriptParser.RULE_inc_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.identifier();
	        this.state = 259;
	        this.match(ICEScriptParser.INCREMENT);
	        this.state = 260;
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
	}



	dec_stmt() {
	    let localctx = new Dec_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ICEScriptParser.RULE_dec_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.identifier();
	        this.state = 263;
	        this.match(ICEScriptParser.DECREMENT);
	        this.state = 264;
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
	}



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ICEScriptParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(ICEScriptParser.IF);
	        this.state = 267;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 268;
	        this.boolexpr();
	        this.state = 269;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 270;
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
	}



	if_else_stmt() {
	    let localctx = new If_else_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ICEScriptParser.RULE_if_else_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(ICEScriptParser.IF);
	        this.state = 273;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 274;
	        this.boolexpr();
	        this.state = 275;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 276;
	        this.statement();
	        this.state = 277;
	        this.match(ICEScriptParser.ELSE);
	        this.state = 278;
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
	}



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ICEScriptParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(ICEScriptParser.WHILE);
	        this.state = 281;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 282;
	        this.boolexpr();
	        this.state = 283;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 284;
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
	}



	for_stmt() {
	    let localctx = new For_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ICEScriptParser.RULE_for_stmt);
	    try {
	        this.state = 307;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(ICEScriptParser.FOR);
	            this.state = 287;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 288;
	            this.var_stmt();
	            this.state = 289;
	            this.boolexpr();
	            this.state = 290;
	            this.match(ICEScriptParser.END_STMT);
	            this.state = 294;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 291;
	                this.inc_stmt();
	                break;

	            case 2:
	                break;

	            case 3:
	                this.state = 293;
	                this.dec_stmt();
	                break;

	            }
	            this.state = 296;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 297;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
	            this.match(ICEScriptParser.FOR);
	            this.state = 300;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 301;
	            this.var_stmt();
	            this.state = 302;
	            this.match(ICEScriptParser.T__8);
	            this.state = 303;
	            this.value();
	            this.state = 304;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 305;
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
	}



	var_stmt() {
	    let localctx = new Var_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ICEScriptParser.RULE_var_stmt);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 309;
	            this.match(ICEScriptParser.VAR);
	            this.state = 310;
	            this.identifier();
	            this.state = 311;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 312;
	            this.expression(0);
	            this.state = 313;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.match(ICEScriptParser.VAR);
	            this.state = 316;
	            this.identifier();
	            this.state = 317;
	            this.match(ICEScriptParser.T__2);
	            this.state = 318;
	            this.type(0);
	            this.state = 319;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 320;
	            this.expression(0);
	            this.state = 321;
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
	}



	return_stmt() {
	    let localctx = new Return_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ICEScriptParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.match(ICEScriptParser.RETURN);
	        this.state = 326;
	        this.expression(0);
	        this.state = 327;
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
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, ICEScriptParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 330;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 331;
	            this.expression(0);
	            this.state = 332;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.state = 334;
	            this.classInit();
	            break;

	        case 3:
	            this.state = 335;
	            this.methodcall();
	            break;

	        case 4:
	            this.state = 336;
	            this.value();
	            break;

	        case 5:
	            this.state = 337;
	            this.identifier();
	            break;

	        case 6:
	            this.state = 338;
	            this.boolexpr();
	            break;

	        case 7:
	            this.state = 339;
	            this.string();
	            break;

	        case 8:
	            this.state = 340;
	            this.object();
	            break;

	        case 9:
	            this.state = 341;
	            this.list();
	            break;

	        case 10:
	            this.state = 342;
	            this.string_concat();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 359;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 357;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 345;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 346;
	                    this.match(ICEScriptParser.ADD);
	                    this.state = 347;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 348;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 349;
	                    this.match(ICEScriptParser.SUB);
	                    this.state = 350;
	                    this.expression(4);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 351;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 352;
	                    this.match(ICEScriptParser.MUL);
	                    this.state = 353;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 354;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 355;
	                    this.match(ICEScriptParser.DIV);
	                    this.state = 356;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 361;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	}



	math() {
	    let localctx = new MathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ICEScriptParser.RULE_math);
	    try {
	        this.state = 378;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.expression(0);
	            this.state = 363;
	            this.match(ICEScriptParser.ADD);
	            this.state = 364;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 366;
	            this.expression(0);
	            this.state = 367;
	            this.match(ICEScriptParser.SUB);
	            this.state = 368;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 370;
	            this.expression(0);
	            this.state = 371;
	            this.match(ICEScriptParser.MUL);
	            this.state = 372;
	            this.expression(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 374;
	            this.expression(0);
	            this.state = 375;
	            this.match(ICEScriptParser.DIV);
	            this.state = 376;
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
	}



	boolexpr() {
	    let localctx = new BoolexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ICEScriptParser.RULE_boolexpr);
	    try {
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 380;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 381;
	            this.match(ICEScriptParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 382;
	            this.match(ICEScriptParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 383;
	            this.value();
	            this.state = 384;
	            this.match(ICEScriptParser.GREATER_THAN);
	            this.state = 385;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 387;
	            this.value();
	            this.state = 388;
	            this.match(ICEScriptParser.LESS_THAN);
	            this.state = 389;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 391;
	            this.value();
	            this.state = 392;
	            this.match(ICEScriptParser.EQUAL_TO);
	            this.state = 393;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 395;
	            this.value();
	            this.state = 396;
	            this.match(ICEScriptParser.NOT_EQUAL_TO);
	            this.state = 397;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 399;
	            this.value();
	            this.state = 400;
	            this.match(ICEScriptParser.GREATER_THAN_OR_EQUAL);
	            this.state = 401;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 403;
	            this.value();
	            this.state = 404;
	            this.match(ICEScriptParser.LESS_THAN_OR_EQUAL);
	            this.state = 405;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 407;
	            this.value();
	            this.state = 408;
	            this.match(ICEScriptParser.OR);
	            this.state = 409;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 411;
	            this.value();
	            this.state = 412;
	            this.match(ICEScriptParser.AND);
	            this.state = 413;
	            this.boolexpr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 415;
	            this.match(ICEScriptParser.NOT);
	            this.state = 416;
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
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ICEScriptParser.RULE_value);
	    try {
	        this.state = 421;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 419;
	            this.identifier();
	            break;
	        case 54:
	        case 57:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 420;
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
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ICEScriptParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
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
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ICEScriptParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        _la = this._input.LA(1);
	        if(!(_la===54 || _la===57)) {
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
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ICEScriptParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        this.match(ICEScriptParser.T__9);
	        this.state = 431;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19399808) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3112961) !== 0)) {
	            this.state = 428;
	            this.expression(0);
	            this.state = 433;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 434;
	            this.match(ICEScriptParser.T__3);
	            this.state = 435;
	            this.expression(0);
	            this.state = 440;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 441;
	        this.match(ICEScriptParser.T__10);
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
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ICEScriptParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 450;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 444;
	            this.string();
	            this.state = 445;
	            this.match(ICEScriptParser.T__2);
	            this.state = 446;
	            this.data();
	            this.state = 452;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        this.state = 453;
	        this.match(ICEScriptParser.T__3);
	        this.state = 460;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 454;
	            this.string();
	            this.state = 455;
	            this.match(ICEScriptParser.T__2);
	            this.state = 456;
	            this.data();
	            this.state = 462;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 463;
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
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ICEScriptParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
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
	}



	string_concat() {
	    let localctx = new String_concatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ICEScriptParser.RULE_string_concat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 470;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 467;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 469;
	            this.data();
	            break;

	        }
	        this.state = 472;
	        this.match(ICEScriptParser.ADD);
	        this.state = 476;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 473;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 475;
	            this.data();
	            break;

	        }
	        this.state = 486;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 478;
	                this.match(ICEScriptParser.ADD);
	                this.state = 482;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 479;
	                    this.string();
	                    break;

	                case 2:
	                    break;

	                case 3:
	                    this.state = 481;
	                    this.data();
	                    break;

	                } 
	            }
	            this.state = 488;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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
	}



	data() {
	    let localctx = new DataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ICEScriptParser.RULE_data);
	    try {
	        this.state = 497;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 489;
	            this.string();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 491;
	            this.number();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 492;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 493;
	            this.object();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 494;
	            this.value();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 495;
	            this.classInit();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 496;
	            this.methodcall();
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
	}


	type(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TypeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 80;
	    this.enterRecursionRule(localctx, 80, ICEScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            break;

	        case 2:
	            this.state = 500;
	            this.match(ICEScriptParser.T__11);
	            break;

	        case 3:
	            this.state = 501;
	            this.match(ICEScriptParser.T__12);
	            break;

	        case 4:
	            this.state = 502;
	            this.match(ICEScriptParser.T__13);
	            break;

	        case 5:
	            this.state = 503;
	            this.match(ICEScriptParser.T__14);
	            break;

	        case 6:
	            this.state = 504;
	            this.match(ICEScriptParser.T__15);
	            break;

	        case 7:
	            this.state = 505;
	            this.match(ICEScriptParser.T__16);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 512;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TypeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_type);
	                this.state = 508;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 509;
	                this.match(ICEScriptParser.T__17); 
	            }
	            this.state = 514;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
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
	}


}

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
ICEScriptParser.T__15 = 16;
ICEScriptParser.T__16 = 17;
ICEScriptParser.T__17 = 18;
ICEScriptParser.OPEN_BRACKET = 19;
ICEScriptParser.CLOSE_BRACKET = 20;
ICEScriptParser.OPEN_CURLEY = 21;
ICEScriptParser.CLOSE_CURLEY = 22;
ICEScriptParser.END_STMT = 23;
ICEScriptParser.ADD = 24;
ICEScriptParser.SUB = 25;
ICEScriptParser.MUL = 26;
ICEScriptParser.DIV = 27;
ICEScriptParser.GREATER_THAN = 28;
ICEScriptParser.LESS_THAN = 29;
ICEScriptParser.EQUAL_TO = 30;
ICEScriptParser.NOT_EQUAL_TO = 31;
ICEScriptParser.GREATER_THAN_OR_EQUAL = 32;
ICEScriptParser.LESS_THAN_OR_EQUAL = 33;
ICEScriptParser.OR = 34;
ICEScriptParser.AND = 35;
ICEScriptParser.NOT = 36;
ICEScriptParser.ASSIGN = 37;
ICEScriptParser.ADDASSIGN = 38;
ICEScriptParser.SUBASSIGN = 39;
ICEScriptParser.MULASSIGN = 40;
ICEScriptParser.DIVASSIGN = 41;
ICEScriptParser.IF = 42;
ICEScriptParser.ELSE = 43;
ICEScriptParser.INCREMENT = 44;
ICEScriptParser.DECREMENT = 45;
ICEScriptParser.DEF = 46;
ICEScriptParser.VAR = 47;
ICEScriptParser.WHILE = 48;
ICEScriptParser.FOR = 49;
ICEScriptParser.RETURN = 50;
ICEScriptParser.TRUE = 51;
ICEScriptParser.FALSE = 52;
ICEScriptParser.IDENTIFIER = 53;
ICEScriptParser.PI = 54;
ICEScriptParser.STRING = 55;
ICEScriptParser.LIST = 56;
ICEScriptParser.NUMBER = 57;
ICEScriptParser.LINECOMMENT = 58;
ICEScriptParser.BLOCKCOMMENT = 59;
ICEScriptParser.WHITESPACE = 60;

ICEScriptParser.RULE_script = 0;
ICEScriptParser.RULE_header = 1;
ICEScriptParser.RULE_meta = 2;
ICEScriptParser.RULE_scriptName = 3;
ICEScriptParser.RULE_include = 4;
ICEScriptParser.RULE_functionDef = 5;
ICEScriptParser.RULE_func_params = 6;
ICEScriptParser.RULE_func_identifier = 7;
ICEScriptParser.RULE_classDef = 8;
ICEScriptParser.RULE_classBody = 9;
ICEScriptParser.RULE_classInit = 10;
ICEScriptParser.RULE_methodcall = 11;
ICEScriptParser.RULE_methodparams = 12;
ICEScriptParser.RULE_statement = 13;
ICEScriptParser.RULE_assign_stmt = 14;
ICEScriptParser.RULE_asm_stmt = 15;
ICEScriptParser.RULE_any = 16;
ICEScriptParser.RULE_add_assign_stmt = 17;
ICEScriptParser.RULE_sub_assign_stmt = 18;
ICEScriptParser.RULE_mul_assign_stmt = 19;
ICEScriptParser.RULE_div_assign_stmt = 20;
ICEScriptParser.RULE_inc_stmt = 21;
ICEScriptParser.RULE_dec_stmt = 22;
ICEScriptParser.RULE_if_stmt = 23;
ICEScriptParser.RULE_if_else_stmt = 24;
ICEScriptParser.RULE_while_stmt = 25;
ICEScriptParser.RULE_for_stmt = 26;
ICEScriptParser.RULE_var_stmt = 27;
ICEScriptParser.RULE_return_stmt = 28;
ICEScriptParser.RULE_expression = 29;
ICEScriptParser.RULE_math = 30;
ICEScriptParser.RULE_boolexpr = 31;
ICEScriptParser.RULE_value = 32;
ICEScriptParser.RULE_identifier = 33;
ICEScriptParser.RULE_number = 34;
ICEScriptParser.RULE_list = 35;
ICEScriptParser.RULE_object = 36;
ICEScriptParser.RULE_string = 37;
ICEScriptParser.RULE_string_concat = 38;
ICEScriptParser.RULE_data = 39;
ICEScriptParser.RULE_type = 40;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_script;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	functionDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDefContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDefContext,i);
	    }
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	EOF() {
	    return this.getToken(ICEScriptParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_header;
    }

	include = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncludeContext);
	    } else {
	        return this.getTypedRuleContext(IncludeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitHeader(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitHeader(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MetaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_meta;
    }

	scriptName() {
	    return this.getTypedRuleContext(ScriptNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMeta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMeta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMeta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScriptNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_scriptName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterScriptName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitScriptName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitScriptName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_include;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterInclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitInclude(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitInclude(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_functionDef;
    }

	DEF() {
	    return this.getToken(ICEScriptParser.DEF, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	func_params() {
	    return this.getTypedRuleContext(Func_paramsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunctionDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunctionDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunctionDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_func_params;
    }

	func_identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_identifierContext);
	    } else {
	        return this.getTypedRuleContext(Func_identifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunc_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunc_params(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunc_params(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_func_identifier;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	any() {
	    return this.getTypedRuleContext(AnyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFunc_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFunc_identifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFunc_identifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_classDef;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterClassDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitClassDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitClassDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_classBody;
    }

	functionDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDefContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterClassBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitClassBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitClassBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_classInit;
    }

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterClassInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitClassInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitClassInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodcallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_methodcall;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	methodparams() {
	    return this.getTypedRuleContext(MethodparamsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMethodcall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMethodcall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMethodcall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MethodparamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_methodparams;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMethodparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMethodparams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMethodparams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_statement;
    }

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	assign_stmt() {
	    return this.getTypedRuleContext(Assign_stmtContext,0);
	};

	asm_stmt() {
	    return this.getTypedRuleContext(Asm_stmtContext,0);
	};

	add_assign_stmt() {
	    return this.getTypedRuleContext(Add_assign_stmtContext,0);
	};

	sub_assign_stmt() {
	    return this.getTypedRuleContext(Sub_assign_stmtContext,0);
	};

	mul_assign_stmt() {
	    return this.getTypedRuleContext(Mul_assign_stmtContext,0);
	};

	div_assign_stmt() {
	    return this.getTypedRuleContext(Div_assign_stmtContext,0);
	};

	inc_stmt() {
	    return this.getTypedRuleContext(Inc_stmtContext,0);
	};

	dec_stmt() {
	    return this.getTypedRuleContext(Dec_stmtContext,0);
	};

	if_stmt() {
	    return this.getTypedRuleContext(If_stmtContext,0);
	};

	if_else_stmt() {
	    return this.getTypedRuleContext(If_else_stmtContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	for_stmt() {
	    return this.getTypedRuleContext(For_stmtContext,0);
	};

	var_stmt() {
	    return this.getTypedRuleContext(Var_stmtContext,0);
	};

	return_stmt() {
	    return this.getTypedRuleContext(Return_stmtContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(ICEScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAssign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAssign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAssign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Asm_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_asm_stmt;
    }

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	any() {
	    return this.getTypedRuleContext(AnyContext,0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAsm_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAsm_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAsm_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_any;
    }


	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAny(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAny(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAny(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Add_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_add_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ADDASSIGN() {
	    return this.getToken(ICEScriptParser.ADDASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterAdd_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitAdd_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitAdd_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sub_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_sub_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SUBASSIGN() {
	    return this.getToken(ICEScriptParser.SUBASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterSub_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitSub_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitSub_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Mul_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_mul_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	MULASSIGN() {
	    return this.getToken(ICEScriptParser.MULASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMul_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMul_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMul_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Div_assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_div_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DIVASSIGN() {
	    return this.getToken(ICEScriptParser.DIVASSIGN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterDiv_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitDiv_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitDiv_assign_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Inc_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_inc_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	INCREMENT() {
	    return this.getToken(ICEScriptParser.INCREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterInc_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitInc_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitInc_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Dec_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_dec_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DECREMENT() {
	    return this.getToken(ICEScriptParser.DECREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterDec_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitDec_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitDec_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_if_stmt;
    }

	IF() {
	    return this.getToken(ICEScriptParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIf_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIf_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIf_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_else_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_if_else_stmt;
    }

	IF() {
	    return this.getToken(ICEScriptParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(ICEScriptParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIf_else_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIf_else_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIf_else_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class While_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_while_stmt;
    }

	WHILE() {
	    return this.getToken(ICEScriptParser.WHILE, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitWhile_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitWhile_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class For_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_for_stmt;
    }

	FOR() {
	    return this.getToken(ICEScriptParser.FOR, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	var_stmt() {
	    return this.getTypedRuleContext(Var_stmtContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	inc_stmt() {
	    return this.getTypedRuleContext(Inc_stmtContext,0);
	};

	dec_stmt() {
	    return this.getTypedRuleContext(Dec_stmtContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterFor_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitFor_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitFor_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Var_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_var_stmt;
    }

	VAR() {
	    return this.getToken(ICEScriptParser.VAR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(ICEScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterVar_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitVar_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitVar_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Return_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_return_stmt;
    }

	RETURN() {
	    return this.getToken(ICEScriptParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(ICEScriptParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterReturn_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitReturn_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitReturn_stmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_expression;
    }

	OPEN_BRACKET() {
	    return this.getToken(ICEScriptParser.OPEN_BRACKET, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	CLOSE_BRACKET() {
	    return this.getToken(ICEScriptParser.CLOSE_BRACKET, 0);
	};

	classInit() {
	    return this.getTypedRuleContext(ClassInitContext,0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	string_concat() {
	    return this.getTypedRuleContext(String_concatContext,0);
	};

	ADD() {
	    return this.getToken(ICEScriptParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ICEScriptParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(ICEScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ICEScriptParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_math;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(ICEScriptParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(ICEScriptParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(ICEScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ICEScriptParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterMath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitMath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitMath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_boolexpr;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TRUE() {
	    return this.getToken(ICEScriptParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ICEScriptParser.FALSE, 0);
	};

	GREATER_THAN() {
	    return this.getToken(ICEScriptParser.GREATER_THAN, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	LESS_THAN() {
	    return this.getToken(ICEScriptParser.LESS_THAN, 0);
	};

	EQUAL_TO() {
	    return this.getToken(ICEScriptParser.EQUAL_TO, 0);
	};

	NOT_EQUAL_TO() {
	    return this.getToken(ICEScriptParser.NOT_EQUAL_TO, 0);
	};

	GREATER_THAN_OR_EQUAL() {
	    return this.getToken(ICEScriptParser.GREATER_THAN_OR_EQUAL, 0);
	};

	LESS_THAN_OR_EQUAL() {
	    return this.getToken(ICEScriptParser.LESS_THAN_OR_EQUAL, 0);
	};

	OR() {
	    return this.getToken(ICEScriptParser.OR, 0);
	};

	AND() {
	    return this.getToken(ICEScriptParser.AND, 0);
	};

	NOT() {
	    return this.getToken(ICEScriptParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterBoolexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitBoolexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitBoolexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_value;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(ICEScriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(ICEScriptParser.NUMBER, 0);
	};

	PI() {
	    return this.getToken(ICEScriptParser.PI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_list;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_object;
    }

	OPEN_CURLEY() {
	    return this.getToken(ICEScriptParser.OPEN_CURLEY, 0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	data = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataContext);
	    } else {
	        return this.getTypedRuleContext(DataContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_string;
    }

	STRING() {
	    return this.getToken(ICEScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class String_concatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_string_concat;
    }

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ICEScriptParser.ADD);
	    } else {
	        return this.getToken(ICEScriptParser.ADD, i);
	    }
	};


	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	data = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataContext);
	    } else {
	        return this.getTypedRuleContext(DataContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterString_concat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitString_concat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitString_concat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_data;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	classInit() {
	    return this.getTypedRuleContext(ClassInitContext,0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ICEScriptParser.RULE_type;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ICEScriptListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ICEScriptVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ICEScriptParser.ScriptContext = ScriptContext; 
ICEScriptParser.HeaderContext = HeaderContext; 
ICEScriptParser.MetaContext = MetaContext; 
ICEScriptParser.ScriptNameContext = ScriptNameContext; 
ICEScriptParser.IncludeContext = IncludeContext; 
ICEScriptParser.FunctionDefContext = FunctionDefContext; 
ICEScriptParser.Func_paramsContext = Func_paramsContext; 
ICEScriptParser.Func_identifierContext = Func_identifierContext; 
ICEScriptParser.ClassDefContext = ClassDefContext; 
ICEScriptParser.ClassBodyContext = ClassBodyContext; 
ICEScriptParser.ClassInitContext = ClassInitContext; 
ICEScriptParser.MethodcallContext = MethodcallContext; 
ICEScriptParser.MethodparamsContext = MethodparamsContext; 
ICEScriptParser.StatementContext = StatementContext; 
ICEScriptParser.Assign_stmtContext = Assign_stmtContext; 
ICEScriptParser.Asm_stmtContext = Asm_stmtContext; 
ICEScriptParser.AnyContext = AnyContext; 
ICEScriptParser.Add_assign_stmtContext = Add_assign_stmtContext; 
ICEScriptParser.Sub_assign_stmtContext = Sub_assign_stmtContext; 
ICEScriptParser.Mul_assign_stmtContext = Mul_assign_stmtContext; 
ICEScriptParser.Div_assign_stmtContext = Div_assign_stmtContext; 
ICEScriptParser.Inc_stmtContext = Inc_stmtContext; 
ICEScriptParser.Dec_stmtContext = Dec_stmtContext; 
ICEScriptParser.If_stmtContext = If_stmtContext; 
ICEScriptParser.If_else_stmtContext = If_else_stmtContext; 
ICEScriptParser.While_stmtContext = While_stmtContext; 
ICEScriptParser.For_stmtContext = For_stmtContext; 
ICEScriptParser.Var_stmtContext = Var_stmtContext; 
ICEScriptParser.Return_stmtContext = Return_stmtContext; 
ICEScriptParser.ExpressionContext = ExpressionContext; 
ICEScriptParser.MathContext = MathContext; 
ICEScriptParser.BoolexprContext = BoolexprContext; 
ICEScriptParser.ValueContext = ValueContext; 
ICEScriptParser.IdentifierContext = IdentifierContext; 
ICEScriptParser.NumberContext = NumberContext; 
ICEScriptParser.ListContext = ListContext; 
ICEScriptParser.ObjectContext = ObjectContext; 
ICEScriptParser.StringContext = StringContext; 
ICEScriptParser.String_concatContext = String_concatContext; 
ICEScriptParser.DataContext = DataContext; 
ICEScriptParser.TypeContext = TypeContext; 
