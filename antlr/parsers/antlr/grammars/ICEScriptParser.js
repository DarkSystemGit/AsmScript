// Generated from ./antlr/grammars/ICEScript by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ICEScriptListener from './ICEScriptListener.js';
import ICEScriptVisitor from './ICEScriptVisitor.js';

const serializedATN = [4,1,60,506,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,1,0,5,0,81,8,0,10,0,12,0,
84,9,0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,1,0,3,0,93,8,0,1,1,5,1,96,8,1,10,
1,12,1,99,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,128,8,5,1,6,1,6,1,
6,1,6,1,6,5,6,135,8,6,10,6,12,6,138,9,6,3,6,140,8,6,1,7,1,7,1,7,1,7,1,7,
3,7,147,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,
8,1,8,5,8,163,8,8,10,8,12,8,166,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,5,10,
176,8,10,10,10,12,10,179,9,10,1,10,1,10,5,10,183,8,10,10,10,12,10,186,9,
10,1,11,1,11,5,11,190,8,11,10,11,12,11,193,9,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,
11,214,8,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,4,14,
227,8,14,11,14,12,14,228,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,1,24,3,24,287,8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,3,24,300,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,3,25,316,8,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,335,8,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,27,349,8,27,10,27,12,27,352,
9,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,1,28,1,28,3,28,370,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,
409,8,29,1,30,1,30,3,30,413,8,30,1,31,1,31,1,32,1,32,1,33,1,33,5,33,421,
8,33,10,33,12,33,424,9,33,1,33,1,33,5,33,428,8,33,10,33,12,33,431,9,33,1,
33,1,33,1,34,1,34,1,34,1,34,1,34,5,34,440,8,34,10,34,12,34,443,9,34,1,34,
1,34,1,34,1,34,1,34,5,34,450,8,34,10,34,12,34,453,9,34,1,34,1,34,1,35,1,
35,1,36,1,36,1,36,3,36,462,8,36,1,36,1,36,1,36,1,36,3,36,468,8,36,1,36,1,
36,1,36,1,36,3,36,474,8,36,5,36,476,8,36,10,36,12,36,479,9,36,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,3,37,488,8,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
3,38,497,8,38,1,38,1,38,5,38,501,8,38,10,38,12,38,504,9,38,1,38,1,228,2,
54,76,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,0,1,2,0,54,54,57,57,555,
0,92,1,0,0,0,2,97,1,0,0,0,4,100,1,0,0,0,6,102,1,0,0,0,8,106,1,0,0,0,10,127,
1,0,0,0,12,139,1,0,0,0,14,146,1,0,0,0,16,151,1,0,0,0,18,169,1,0,0,0,20,177,
1,0,0,0,22,213,1,0,0,0,24,215,1,0,0,0,26,220,1,0,0,0,28,226,1,0,0,0,30,230,
1,0,0,0,32,235,1,0,0,0,34,240,1,0,0,0,36,245,1,0,0,0,38,250,1,0,0,0,40,254,
1,0,0,0,42,258,1,0,0,0,44,264,1,0,0,0,46,272,1,0,0,0,48,299,1,0,0,0,50,315,
1,0,0,0,52,317,1,0,0,0,54,334,1,0,0,0,56,369,1,0,0,0,58,408,1,0,0,0,60,412,
1,0,0,0,62,414,1,0,0,0,64,416,1,0,0,0,66,418,1,0,0,0,68,434,1,0,0,0,70,456,
1,0,0,0,72,461,1,0,0,0,74,487,1,0,0,0,76,496,1,0,0,0,78,82,3,2,1,0,79,81,
3,10,5,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,88,1,
0,0,0,84,82,1,0,0,0,85,87,3,22,11,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,
0,0,0,88,89,1,0,0,0,89,93,1,0,0,0,90,88,1,0,0,0,91,93,5,0,0,1,92,78,1,0,
0,0,92,91,1,0,0,0,93,1,1,0,0,0,94,96,3,8,4,0,95,94,1,0,0,0,96,99,1,0,0,0,
97,95,1,0,0,0,97,98,1,0,0,0,98,3,1,0,0,0,99,97,1,0,0,0,100,101,3,6,3,0,101,
5,1,0,0,0,102,103,5,1,0,0,103,104,3,62,31,0,104,105,5,23,0,0,105,7,1,0,0,
0,106,107,5,2,0,0,107,108,3,62,31,0,108,109,5,23,0,0,109,9,1,0,0,0,110,111,
5,3,0,0,111,112,3,62,31,0,112,113,5,19,0,0,113,114,3,12,6,0,114,115,5,20,
0,0,115,116,5,4,0,0,116,117,3,76,38,0,117,118,3,22,11,0,118,128,1,0,0,0,
119,120,3,62,31,0,120,121,5,19,0,0,121,122,3,12,6,0,122,123,5,20,0,0,123,
124,5,4,0,0,124,125,3,76,38,0,125,126,3,22,11,0,126,128,1,0,0,0,127,110,
1,0,0,0,127,119,1,0,0,0,128,11,1,0,0,0,129,140,3,14,7,0,130,140,1,0,0,0,
131,136,3,14,7,0,132,133,5,5,0,0,133,135,3,14,7,0,134,132,1,0,0,0,135,138,
1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,
139,129,1,0,0,0,139,130,1,0,0,0,139,131,1,0,0,0,140,13,1,0,0,0,141,147,3,
62,31,0,142,147,1,0,0,0,143,147,3,54,27,0,144,147,1,0,0,0,145,147,3,28,14,
0,146,141,1,0,0,0,146,142,1,0,0,0,146,143,1,0,0,0,146,144,1,0,0,0,146,145,
1,0,0,0,147,148,1,0,0,0,148,149,5,4,0,0,149,150,3,76,38,0,150,15,1,0,0,0,
151,152,5,6,0,0,152,157,3,62,31,0,153,154,5,7,0,0,154,156,3,62,31,0,155,
153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,
0,0,159,157,1,0,0,0,160,164,5,21,0,0,161,163,3,10,5,0,162,161,1,0,0,0,163,
166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,164,1,0,
0,0,167,168,5,22,0,0,168,17,1,0,0,0,169,170,3,62,31,0,170,171,5,19,0,0,171,
172,3,20,10,0,172,173,5,20,0,0,173,19,1,0,0,0,174,176,3,54,27,0,175,174,
1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,184,1,0,0,0,
179,177,1,0,0,0,180,181,5,5,0,0,181,183,3,54,27,0,182,180,1,0,0,0,183,186,
1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,21,1,0,0,0,186,184,1,0,0,0,187,
191,5,21,0,0,188,190,3,22,11,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,
0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,214,5,22,0,0,195,
214,3,24,12,0,196,214,3,26,13,0,197,214,3,30,15,0,198,214,3,32,16,0,199,
214,3,34,17,0,200,214,3,36,18,0,201,214,3,38,19,0,202,214,3,40,20,0,203,
214,3,42,21,0,204,214,3,44,22,0,205,214,3,46,23,0,206,214,3,48,24,0,207,
214,3,50,25,0,208,214,3,52,26,0,209,210,3,54,27,0,210,211,5,23,0,0,211,214,
1,0,0,0,212,214,5,23,0,0,213,187,1,0,0,0,213,195,1,0,0,0,213,196,1,0,0,0,
213,197,1,0,0,0,213,198,1,0,0,0,213,199,1,0,0,0,213,200,1,0,0,0,213,201,
1,0,0,0,213,202,1,0,0,0,213,203,1,0,0,0,213,204,1,0,0,0,213,205,1,0,0,0,
213,206,1,0,0,0,213,207,1,0,0,0,213,208,1,0,0,0,213,209,1,0,0,0,213,212,
1,0,0,0,214,23,1,0,0,0,215,216,3,62,31,0,216,217,5,37,0,0,217,218,3,54,27,
0,218,219,5,23,0,0,219,25,1,0,0,0,220,221,5,8,0,0,221,222,5,21,0,0,222,223,
3,28,14,0,223,224,5,22,0,0,224,27,1,0,0,0,225,227,9,0,0,0,226,225,1,0,0,
0,227,228,1,0,0,0,228,229,1,0,0,0,228,226,1,0,0,0,229,29,1,0,0,0,230,231,
3,62,31,0,231,232,5,38,0,0,232,233,3,60,30,0,233,234,5,23,0,0,234,31,1,0,
0,0,235,236,3,62,31,0,236,237,5,39,0,0,237,238,3,60,30,0,238,239,5,23,0,
0,239,33,1,0,0,0,240,241,3,62,31,0,241,242,5,40,0,0,242,243,3,60,30,0,243,
244,5,23,0,0,244,35,1,0,0,0,245,246,3,62,31,0,246,247,5,41,0,0,247,248,3,
60,30,0,248,249,5,23,0,0,249,37,1,0,0,0,250,251,3,62,31,0,251,252,5,44,0,
0,252,253,5,23,0,0,253,39,1,0,0,0,254,255,3,62,31,0,255,256,5,45,0,0,256,
257,5,23,0,0,257,41,1,0,0,0,258,259,5,42,0,0,259,260,5,19,0,0,260,261,3,
58,29,0,261,262,5,20,0,0,262,263,3,22,11,0,263,43,1,0,0,0,264,265,5,42,0,
0,265,266,5,19,0,0,266,267,3,58,29,0,267,268,5,20,0,0,268,269,3,22,11,0,
269,270,5,43,0,0,270,271,3,22,11,0,271,45,1,0,0,0,272,273,5,48,0,0,273,274,
5,19,0,0,274,275,3,58,29,0,275,276,5,20,0,0,276,277,3,22,11,0,277,47,1,0,
0,0,278,279,5,49,0,0,279,280,5,19,0,0,280,281,3,50,25,0,281,282,3,58,29,
0,282,286,5,23,0,0,283,287,3,38,19,0,284,287,1,0,0,0,285,287,3,40,20,0,286,
283,1,0,0,0,286,284,1,0,0,0,286,285,1,0,0,0,287,288,1,0,0,0,288,289,5,20,
0,0,289,290,3,22,11,0,290,300,1,0,0,0,291,292,5,49,0,0,292,293,5,19,0,0,
293,294,3,50,25,0,294,295,5,9,0,0,295,296,3,60,30,0,296,297,5,20,0,0,297,
298,3,22,11,0,298,300,1,0,0,0,299,278,1,0,0,0,299,291,1,0,0,0,300,49,1,0,
0,0,301,302,5,47,0,0,302,303,3,62,31,0,303,304,5,37,0,0,304,305,3,54,27,
0,305,306,5,23,0,0,306,316,1,0,0,0,307,308,5,47,0,0,308,309,3,62,31,0,309,
310,5,4,0,0,310,311,3,76,38,0,311,312,5,37,0,0,312,313,3,54,27,0,313,314,
5,23,0,0,314,316,1,0,0,0,315,301,1,0,0,0,315,307,1,0,0,0,316,51,1,0,0,0,
317,318,5,50,0,0,318,319,3,54,27,0,319,320,5,23,0,0,320,53,1,0,0,0,321,322,
6,27,-1,0,322,323,5,19,0,0,323,324,3,54,27,0,324,325,5,20,0,0,325,335,1,
0,0,0,326,335,3,18,9,0,327,335,3,60,30,0,328,335,3,62,31,0,329,335,3,58,
29,0,330,335,3,70,35,0,331,335,3,68,34,0,332,335,3,66,33,0,333,335,3,72,
36,0,334,321,1,0,0,0,334,326,1,0,0,0,334,327,1,0,0,0,334,328,1,0,0,0,334,
329,1,0,0,0,334,330,1,0,0,0,334,331,1,0,0,0,334,332,1,0,0,0,334,333,1,0,
0,0,335,350,1,0,0,0,336,337,10,4,0,0,337,338,5,24,0,0,338,349,3,54,27,5,
339,340,10,3,0,0,340,341,5,25,0,0,341,349,3,54,27,4,342,343,10,2,0,0,343,
344,5,26,0,0,344,349,3,54,27,3,345,346,10,1,0,0,346,347,5,27,0,0,347,349,
3,54,27,2,348,336,1,0,0,0,348,339,1,0,0,0,348,342,1,0,0,0,348,345,1,0,0,
0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,55,1,0,0,0,352,350,
1,0,0,0,353,354,3,54,27,0,354,355,5,24,0,0,355,356,3,54,27,0,356,370,1,0,
0,0,357,358,3,54,27,0,358,359,5,25,0,0,359,360,3,54,27,0,360,370,1,0,0,0,
361,362,3,54,27,0,362,363,5,26,0,0,363,364,3,54,27,0,364,370,1,0,0,0,365,
366,3,54,27,0,366,367,5,27,0,0,367,368,3,54,27,0,368,370,1,0,0,0,369,353,
1,0,0,0,369,357,1,0,0,0,369,361,1,0,0,0,369,365,1,0,0,0,370,57,1,0,0,0,371,
409,3,60,30,0,372,409,5,51,0,0,373,409,5,52,0,0,374,375,3,60,30,0,375,376,
5,28,0,0,376,377,3,58,29,0,377,409,1,0,0,0,378,379,3,60,30,0,379,380,5,29,
0,0,380,381,3,58,29,0,381,409,1,0,0,0,382,383,3,60,30,0,383,384,5,30,0,0,
384,385,3,58,29,0,385,409,1,0,0,0,386,387,3,60,30,0,387,388,5,31,0,0,388,
389,3,58,29,0,389,409,1,0,0,0,390,391,3,60,30,0,391,392,5,32,0,0,392,393,
3,58,29,0,393,409,1,0,0,0,394,395,3,60,30,0,395,396,5,33,0,0,396,397,3,58,
29,0,397,409,1,0,0,0,398,399,3,60,30,0,399,400,5,34,0,0,400,401,3,58,29,
0,401,409,1,0,0,0,402,403,3,60,30,0,403,404,5,35,0,0,404,405,3,58,29,0,405,
409,1,0,0,0,406,407,5,36,0,0,407,409,3,58,29,0,408,371,1,0,0,0,408,372,1,
0,0,0,408,373,1,0,0,0,408,374,1,0,0,0,408,378,1,0,0,0,408,382,1,0,0,0,408,
386,1,0,0,0,408,390,1,0,0,0,408,394,1,0,0,0,408,398,1,0,0,0,408,402,1,0,
0,0,408,406,1,0,0,0,409,59,1,0,0,0,410,413,3,62,31,0,411,413,3,64,32,0,412,
410,1,0,0,0,412,411,1,0,0,0,413,61,1,0,0,0,414,415,5,53,0,0,415,63,1,0,0,
0,416,417,7,0,0,0,417,65,1,0,0,0,418,422,5,10,0,0,419,421,3,54,27,0,420,
419,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,429,1,0,
0,0,424,422,1,0,0,0,425,426,5,5,0,0,426,428,3,54,27,0,427,425,1,0,0,0,428,
431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,432,1,0,0,0,431,429,1,0,
0,0,432,433,5,11,0,0,433,67,1,0,0,0,434,441,5,21,0,0,435,436,3,70,35,0,436,
437,5,4,0,0,437,438,3,74,37,0,438,440,1,0,0,0,439,435,1,0,0,0,440,443,1,
0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,442,444,1,0,0,0,443,441,1,0,0,0,444,
451,5,5,0,0,445,446,3,70,35,0,446,447,5,4,0,0,447,448,3,74,37,0,448,450,
1,0,0,0,449,445,1,0,0,0,450,453,1,0,0,0,451,449,1,0,0,0,451,452,1,0,0,0,
452,454,1,0,0,0,453,451,1,0,0,0,454,455,5,22,0,0,455,69,1,0,0,0,456,457,
5,55,0,0,457,71,1,0,0,0,458,462,3,70,35,0,459,462,1,0,0,0,460,462,3,74,37,
0,461,458,1,0,0,0,461,459,1,0,0,0,461,460,1,0,0,0,462,463,1,0,0,0,463,467,
5,24,0,0,464,468,3,70,35,0,465,468,1,0,0,0,466,468,3,74,37,0,467,464,1,0,
0,0,467,465,1,0,0,0,467,466,1,0,0,0,468,477,1,0,0,0,469,473,5,24,0,0,470,
474,3,70,35,0,471,474,1,0,0,0,472,474,3,74,37,0,473,470,1,0,0,0,473,471,
1,0,0,0,473,472,1,0,0,0,474,476,1,0,0,0,475,469,1,0,0,0,476,479,1,0,0,0,
477,475,1,0,0,0,477,478,1,0,0,0,478,73,1,0,0,0,479,477,1,0,0,0,480,488,3,
70,35,0,481,488,3,66,33,0,482,488,3,64,32,0,483,488,3,58,29,0,484,488,3,
68,34,0,485,488,3,60,30,0,486,488,3,18,9,0,487,480,1,0,0,0,487,481,1,0,0,
0,487,482,1,0,0,0,487,483,1,0,0,0,487,484,1,0,0,0,487,485,1,0,0,0,487,486,
1,0,0,0,488,75,1,0,0,0,489,497,6,38,-1,0,490,497,5,12,0,0,491,497,5,13,0,
0,492,497,5,14,0,0,493,497,5,15,0,0,494,497,5,16,0,0,495,497,5,17,0,0,496,
489,1,0,0,0,496,490,1,0,0,0,496,491,1,0,0,0,496,492,1,0,0,0,496,493,1,0,
0,0,496,494,1,0,0,0,496,495,1,0,0,0,497,502,1,0,0,0,498,499,10,1,0,0,499,
501,5,18,0,0,500,498,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,503,1,0,
0,0,503,77,1,0,0,0,504,502,1,0,0,0,35,82,88,92,97,127,136,139,146,157,164,
177,184,191,213,228,286,299,315,334,348,350,369,408,412,422,429,441,451,
461,467,473,477,487,496,502];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ICEScriptParser extends antlr4.Parser {

    static grammarFileName = "ICEScript";
    static literalNames = [ null, "'name:'", "'import'", "'function '", 
                            "':'", "','", "'class'", "'extends'", "'__LLVM'", 
                            "'in'", "'['", "']'", "'object'", "'void'", 
                            "'list'", "'str'", "'number'", "'bool'", "'[]'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'+'", "'-'", 
                            "'*'", "'/'", "'>'", "'<'", "'=='", "'!='", 
                            "'>='", "'<='", "'||'", "'&&'", "'!'", "'='", 
                            "'+='", "'-='", "'*='", "'/='", "'if'", "'else'", 
                            "'++'", "'--'", "'function'", "'var'", "'while'", 
                            "'for'", "'return'", "'true'", "'false'", null, 
                            "'$pi'" ];
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
                         "classDef", "methodcall", "methodparams", "statement", 
                         "assign_stmt", "asm_stmt", "any", "add_assign_stmt", 
                         "sub_assign_stmt", "mul_assign_stmt", "div_assign_stmt", 
                         "inc_stmt", "dec_stmt", "if_stmt", "if_else_stmt", 
                         "while_stmt", "for_stmt", "var_stmt", "return_stmt", 
                         "expression", "math", "boolexpr", "value", "identifier", 
                         "number", "list", "object", "string", "string_concat", 
                         "data", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ICEScriptParser.ruleNames;
        this.literalNames = ICEScriptParser.literalNames;
        this.symbolicNames = ICEScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 27:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 38:
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
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.header();
	            this.state = 82;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 79;
	                    this.functionDef(); 
	                }
	                this.state = 84;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	            }

	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 27788544) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 85;
	                this.statement();
	                this.state = 90;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
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
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 94;
	            this.include();
	            this.state = 99;
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
	        this.state = 100;
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
	        this.state = 102;
	        this.match(ICEScriptParser.T__0);
	        this.state = 103;
	        this.identifier();
	        this.state = 104;
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
	        this.state = 106;
	        this.match(ICEScriptParser.T__1);
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



	functionDef() {
	    let localctx = new FunctionDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ICEScriptParser.RULE_functionDef);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(ICEScriptParser.T__2);
	            this.state = 111;
	            this.identifier();
	            this.state = 112;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 113;
	            this.func_params();
	            this.state = 114;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 115;
	            this.match(ICEScriptParser.T__3);
	            this.state = 116;
	            this.type(0);
	            this.state = 117;
	            this.statement();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.identifier();
	            this.state = 120;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 121;
	            this.func_params();
	            this.state = 122;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 123;
	            this.match(ICEScriptParser.T__3);
	            this.state = 124;
	            this.type(0);
	            this.state = 125;
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
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.func_identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.func_identifier();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 132;
	                this.match(ICEScriptParser.T__4);
	                this.state = 133;
	                this.func_identifier();
	                this.state = 138;
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
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 141;
	            this.identifier();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 143;
	            this.expression(0);
	            break;

	        case 4:
	            break;

	        case 5:
	            this.state = 145;
	            this.any();
	            break;

	        }
	        this.state = 148;
	        this.match(ICEScriptParser.T__3);
	        this.state = 149;
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
	        this.state = 151;
	        this.match(ICEScriptParser.T__5);
	        this.state = 152;
	        this.identifier();
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 153;
	            this.match(ICEScriptParser.T__6);
	            this.state = 154;
	            this.identifier();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===53) {
	            this.state = 161;
	            this.functionDef();
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 167;
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



	methodcall() {
	    let localctx = new MethodcallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ICEScriptParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.identifier();
	        this.state = 170;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 171;
	        this.methodparams();
	        this.state = 172;
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
	    this.enterRule(localctx, 20, ICEScriptParser.RULE_methodparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19399680) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3112961) !== 0)) {
	            this.state = 174;
	            this.expression(0);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 180;
	            this.match(ICEScriptParser.T__4);
	            this.state = 181;
	            this.expression(0);
	            this.state = 186;
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
	    this.enterRule(localctx, 22, ICEScriptParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.match(ICEScriptParser.OPEN_CURLEY);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 27788544) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 188;
	                this.statement();
	                this.state = 193;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 194;
	            this.match(ICEScriptParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.asm_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 197;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 198;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 199;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 200;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 201;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 202;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 203;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 204;
	            this.if_else_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 205;
	            this.while_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 206;
	            this.for_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 207;
	            this.var_stmt();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 208;
	            this.return_stmt();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 209;
	            this.expression(0);
	            this.state = 210;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 212;
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
	    this.enterRule(localctx, 24, ICEScriptParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.identifier();
	        this.state = 216;
	        this.match(ICEScriptParser.ASSIGN);
	        this.state = 217;
	        this.expression(0);
	        this.state = 218;
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
	    this.enterRule(localctx, 26, ICEScriptParser.RULE_asm_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(ICEScriptParser.T__7);
	        this.state = 221;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 222;
	        this.any();
	        this.state = 223;
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
	    this.enterRule(localctx, 28, ICEScriptParser.RULE_any);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 225;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 228; 
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
	    this.enterRule(localctx, 30, ICEScriptParser.RULE_add_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.identifier();
	        this.state = 231;
	        this.match(ICEScriptParser.ADDASSIGN);
	        this.state = 232;
	        this.value();
	        this.state = 233;
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
	    this.enterRule(localctx, 32, ICEScriptParser.RULE_sub_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.identifier();
	        this.state = 236;
	        this.match(ICEScriptParser.SUBASSIGN);
	        this.state = 237;
	        this.value();
	        this.state = 238;
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
	    this.enterRule(localctx, 34, ICEScriptParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.identifier();
	        this.state = 241;
	        this.match(ICEScriptParser.MULASSIGN);
	        this.state = 242;
	        this.value();
	        this.state = 243;
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
	    this.enterRule(localctx, 36, ICEScriptParser.RULE_div_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.identifier();
	        this.state = 246;
	        this.match(ICEScriptParser.DIVASSIGN);
	        this.state = 247;
	        this.value();
	        this.state = 248;
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
	    this.enterRule(localctx, 38, ICEScriptParser.RULE_inc_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.identifier();
	        this.state = 251;
	        this.match(ICEScriptParser.INCREMENT);
	        this.state = 252;
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
	    this.enterRule(localctx, 40, ICEScriptParser.RULE_dec_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.identifier();
	        this.state = 255;
	        this.match(ICEScriptParser.DECREMENT);
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



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ICEScriptParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(ICEScriptParser.IF);
	        this.state = 259;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 260;
	        this.boolexpr();
	        this.state = 261;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 262;
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
	    this.enterRule(localctx, 44, ICEScriptParser.RULE_if_else_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(ICEScriptParser.IF);
	        this.state = 265;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 266;
	        this.boolexpr();
	        this.state = 267;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 268;
	        this.statement();
	        this.state = 269;
	        this.match(ICEScriptParser.ELSE);
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



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ICEScriptParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(ICEScriptParser.WHILE);
	        this.state = 273;
	        this.match(ICEScriptParser.OPEN_BRACKET);
	        this.state = 274;
	        this.boolexpr();
	        this.state = 275;
	        this.match(ICEScriptParser.CLOSE_BRACKET);
	        this.state = 276;
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
	    this.enterRule(localctx, 48, ICEScriptParser.RULE_for_stmt);
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.match(ICEScriptParser.FOR);
	            this.state = 279;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 280;
	            this.var_stmt();
	            this.state = 281;
	            this.boolexpr();
	            this.state = 282;
	            this.match(ICEScriptParser.END_STMT);
	            this.state = 286;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 283;
	                this.inc_stmt();
	                break;

	            case 2:
	                break;

	            case 3:
	                this.state = 285;
	                this.dec_stmt();
	                break;

	            }
	            this.state = 288;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 289;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.match(ICEScriptParser.FOR);
	            this.state = 292;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 293;
	            this.var_stmt();
	            this.state = 294;
	            this.match(ICEScriptParser.T__8);
	            this.state = 295;
	            this.value();
	            this.state = 296;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            this.state = 297;
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
	    this.enterRule(localctx, 50, ICEScriptParser.RULE_var_stmt);
	    try {
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 301;
	            this.match(ICEScriptParser.VAR);
	            this.state = 302;
	            this.identifier();
	            this.state = 303;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 304;
	            this.expression(0);
	            this.state = 305;
	            this.match(ICEScriptParser.END_STMT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 307;
	            this.match(ICEScriptParser.VAR);
	            this.state = 308;
	            this.identifier();
	            this.state = 309;
	            this.match(ICEScriptParser.T__3);
	            this.state = 310;
	            this.type(0);
	            this.state = 311;
	            this.match(ICEScriptParser.ASSIGN);
	            this.state = 312;
	            this.expression(0);
	            this.state = 313;
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
	    this.enterRule(localctx, 52, ICEScriptParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(ICEScriptParser.RETURN);
	        this.state = 318;
	        this.expression(0);
	        this.state = 319;
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
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, ICEScriptParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 322;
	            this.match(ICEScriptParser.OPEN_BRACKET);
	            this.state = 323;
	            this.expression(0);
	            this.state = 324;
	            this.match(ICEScriptParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.state = 326;
	            this.methodcall();
	            break;

	        case 3:
	            this.state = 327;
	            this.value();
	            break;

	        case 4:
	            this.state = 328;
	            this.identifier();
	            break;

	        case 5:
	            this.state = 329;
	            this.boolexpr();
	            break;

	        case 6:
	            this.state = 330;
	            this.string();
	            break;

	        case 7:
	            this.state = 331;
	            this.object();
	            break;

	        case 8:
	            this.state = 332;
	            this.list();
	            break;

	        case 9:
	            this.state = 333;
	            this.string_concat();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 350;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 348;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 336;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 337;
	                    this.match(ICEScriptParser.ADD);
	                    this.state = 338;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 339;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 340;
	                    this.match(ICEScriptParser.SUB);
	                    this.state = 341;
	                    this.expression(4);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 342;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 343;
	                    this.match(ICEScriptParser.MUL);
	                    this.state = 344;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ICEScriptParser.RULE_expression);
	                    this.state = 345;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 346;
	                    this.match(ICEScriptParser.DIV);
	                    this.state = 347;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 352;
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
	    this.enterRule(localctx, 56, ICEScriptParser.RULE_math);
	    try {
	        this.state = 369;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 353;
	            this.expression(0);
	            this.state = 354;
	            this.match(ICEScriptParser.ADD);
	            this.state = 355;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.expression(0);
	            this.state = 358;
	            this.match(ICEScriptParser.SUB);
	            this.state = 359;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 361;
	            this.expression(0);
	            this.state = 362;
	            this.match(ICEScriptParser.MUL);
	            this.state = 363;
	            this.expression(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 365;
	            this.expression(0);
	            this.state = 366;
	            this.match(ICEScriptParser.DIV);
	            this.state = 367;
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
	    this.enterRule(localctx, 58, ICEScriptParser.RULE_boolexpr);
	    try {
	        this.state = 408;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 371;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 372;
	            this.match(ICEScriptParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 373;
	            this.match(ICEScriptParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 374;
	            this.value();
	            this.state = 375;
	            this.match(ICEScriptParser.GREATER_THAN);
	            this.state = 376;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 378;
	            this.value();
	            this.state = 379;
	            this.match(ICEScriptParser.LESS_THAN);
	            this.state = 380;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 382;
	            this.value();
	            this.state = 383;
	            this.match(ICEScriptParser.EQUAL_TO);
	            this.state = 384;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 386;
	            this.value();
	            this.state = 387;
	            this.match(ICEScriptParser.NOT_EQUAL_TO);
	            this.state = 388;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 390;
	            this.value();
	            this.state = 391;
	            this.match(ICEScriptParser.GREATER_THAN_OR_EQUAL);
	            this.state = 392;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 394;
	            this.value();
	            this.state = 395;
	            this.match(ICEScriptParser.LESS_THAN_OR_EQUAL);
	            this.state = 396;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 398;
	            this.value();
	            this.state = 399;
	            this.match(ICEScriptParser.OR);
	            this.state = 400;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 402;
	            this.value();
	            this.state = 403;
	            this.match(ICEScriptParser.AND);
	            this.state = 404;
	            this.boolexpr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 406;
	            this.match(ICEScriptParser.NOT);
	            this.state = 407;
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
	    this.enterRule(localctx, 60, ICEScriptParser.RULE_value);
	    try {
	        this.state = 412;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 410;
	            this.identifier();
	            break;
	        case 54:
	        case 57:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 411;
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
	    this.enterRule(localctx, 62, ICEScriptParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
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
	    this.enterRule(localctx, 64, ICEScriptParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
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
	    this.enterRule(localctx, 66, ICEScriptParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(ICEScriptParser.T__9);
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 19399680) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3112961) !== 0)) {
	            this.state = 419;
	            this.expression(0);
	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 429;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 425;
	            this.match(ICEScriptParser.T__4);
	            this.state = 426;
	            this.expression(0);
	            this.state = 431;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 432;
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
	    this.enterRule(localctx, 68, ICEScriptParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this.match(ICEScriptParser.OPEN_CURLEY);
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 435;
	            this.string();
	            this.state = 436;
	            this.match(ICEScriptParser.T__3);
	            this.state = 437;
	            this.data();
	            this.state = 443;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        this.state = 444;
	        this.match(ICEScriptParser.T__4);
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 445;
	            this.string();
	            this.state = 446;
	            this.match(ICEScriptParser.T__3);
	            this.state = 447;
	            this.data();
	            this.state = 453;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 454;
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
	    this.enterRule(localctx, 70, ICEScriptParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
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
	    this.enterRule(localctx, 72, ICEScriptParser.RULE_string_concat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 458;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 460;
	            this.data();
	            break;

	        }
	        this.state = 463;
	        this.match(ICEScriptParser.ADD);
	        this.state = 467;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 464;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 466;
	            this.data();
	            break;

	        }
	        this.state = 477;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 469;
	                this.match(ICEScriptParser.ADD);
	                this.state = 473;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 470;
	                    this.string();
	                    break;

	                case 2:
	                    break;

	                case 3:
	                    this.state = 472;
	                    this.data();
	                    break;

	                } 
	            }
	            this.state = 479;
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
	    this.enterRule(localctx, 74, ICEScriptParser.RULE_data);
	    try {
	        this.state = 487;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 480;
	            this.string();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 481;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 482;
	            this.number();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 483;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 484;
	            this.object();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 485;
	            this.value();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 486;
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
	    const _startState = 76;
	    this.enterRecursionRule(localctx, 76, ICEScriptParser.RULE_type, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 496;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            break;

	        case 2:
	            this.state = 490;
	            this.match(ICEScriptParser.T__11);
	            break;

	        case 3:
	            this.state = 491;
	            this.match(ICEScriptParser.T__12);
	            break;

	        case 4:
	            this.state = 492;
	            this.match(ICEScriptParser.T__13);
	            break;

	        case 5:
	            this.state = 493;
	            this.match(ICEScriptParser.T__14);
	            break;

	        case 6:
	            this.state = 494;
	            this.match(ICEScriptParser.T__15);
	            break;

	        case 7:
	            this.state = 495;
	            this.match(ICEScriptParser.T__16);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 502;
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
	                this.state = 498;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 499;
	                this.match(ICEScriptParser.T__17); 
	            }
	            this.state = 504;
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
ICEScriptParser.RULE_methodcall = 9;
ICEScriptParser.RULE_methodparams = 10;
ICEScriptParser.RULE_statement = 11;
ICEScriptParser.RULE_assign_stmt = 12;
ICEScriptParser.RULE_asm_stmt = 13;
ICEScriptParser.RULE_any = 14;
ICEScriptParser.RULE_add_assign_stmt = 15;
ICEScriptParser.RULE_sub_assign_stmt = 16;
ICEScriptParser.RULE_mul_assign_stmt = 17;
ICEScriptParser.RULE_div_assign_stmt = 18;
ICEScriptParser.RULE_inc_stmt = 19;
ICEScriptParser.RULE_dec_stmt = 20;
ICEScriptParser.RULE_if_stmt = 21;
ICEScriptParser.RULE_if_else_stmt = 22;
ICEScriptParser.RULE_while_stmt = 23;
ICEScriptParser.RULE_for_stmt = 24;
ICEScriptParser.RULE_var_stmt = 25;
ICEScriptParser.RULE_return_stmt = 26;
ICEScriptParser.RULE_expression = 27;
ICEScriptParser.RULE_math = 28;
ICEScriptParser.RULE_boolexpr = 29;
ICEScriptParser.RULE_value = 30;
ICEScriptParser.RULE_identifier = 31;
ICEScriptParser.RULE_number = 32;
ICEScriptParser.RULE_list = 33;
ICEScriptParser.RULE_object = 34;
ICEScriptParser.RULE_string = 35;
ICEScriptParser.RULE_string_concat = 36;
ICEScriptParser.RULE_data = 37;
ICEScriptParser.RULE_type = 38;

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

	CLOSE_CURLEY() {
	    return this.getToken(ICEScriptParser.CLOSE_CURLEY, 0);
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
