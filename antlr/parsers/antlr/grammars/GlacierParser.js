// Generated from ./antlr/grammars/Glacier by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GlacierListener from './GlacierListener.js';
import GlacierVisitor from './GlacierVisitor.js';

const serializedATN = [4,1,60,499,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,1,0,5,0,89,8,0,10,0,12,0,92,9,0,1,0,5,0,95,8,0,10,0,12,0,98,
9,0,1,0,3,0,101,8,0,1,1,5,1,104,8,1,10,1,12,1,107,9,1,1,2,1,2,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,5,3,5,120,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,5,6,133,8,6,10,6,12,6,136,9,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
5,8,146,8,8,10,8,12,8,149,9,8,1,8,1,8,1,8,1,8,1,9,5,9,156,8,9,10,9,12,9,
159,9,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,5,12,172,
8,12,10,12,12,12,175,9,12,1,13,1,13,5,13,179,8,13,10,13,12,13,182,9,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,3,13,203,8,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
1,15,1,15,1,16,4,16,216,8,16,11,16,12,16,217,1,17,1,17,1,17,1,17,1,17,1,
18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,
24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,276,8,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,3,26,289,8,26,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,307,8,27,1,28,1,28,
1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,3,29,328,8,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,3,30,344,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,362,8,31,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,3,32,401,8,32,1,33,1,33,3,33,405,8,33,1,34,1,34,
1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,418,8,36,1,36,1,36,3,36,
422,8,36,1,37,1,37,1,37,1,37,5,37,428,8,37,10,37,12,37,431,9,37,1,37,1,37,
1,37,1,37,3,37,437,8,37,1,38,1,38,1,38,1,38,1,38,5,38,444,8,38,10,38,12,
38,447,9,38,1,38,1,38,1,38,1,38,1,38,5,38,454,8,38,10,38,12,38,457,9,38,
1,38,1,38,1,39,1,39,1,40,1,40,1,40,3,40,466,8,40,1,40,1,40,1,40,1,40,3,40,
472,8,40,1,40,5,40,475,8,40,10,40,12,40,478,9,40,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,3,41,488,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,497,
8,42,1,42,1,217,0,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
0,1,2,0,54,54,57,57,550,0,100,1,0,0,0,2,105,1,0,0,0,4,108,1,0,0,0,6,110,
1,0,0,0,8,114,1,0,0,0,10,119,1,0,0,0,12,129,1,0,0,0,14,137,1,0,0,0,16,141,
1,0,0,0,18,157,1,0,0,0,20,160,1,0,0,0,22,163,1,0,0,0,24,168,1,0,0,0,26,202,
1,0,0,0,28,204,1,0,0,0,30,209,1,0,0,0,32,215,1,0,0,0,34,219,1,0,0,0,36,224,
1,0,0,0,38,229,1,0,0,0,40,234,1,0,0,0,42,239,1,0,0,0,44,243,1,0,0,0,46,247,
1,0,0,0,48,253,1,0,0,0,50,261,1,0,0,0,52,288,1,0,0,0,54,306,1,0,0,0,56,308,
1,0,0,0,58,327,1,0,0,0,60,343,1,0,0,0,62,361,1,0,0,0,64,400,1,0,0,0,66,404,
1,0,0,0,68,406,1,0,0,0,70,408,1,0,0,0,72,410,1,0,0,0,74,436,1,0,0,0,76,438,
1,0,0,0,78,460,1,0,0,0,80,465,1,0,0,0,82,487,1,0,0,0,84,496,1,0,0,0,86,90,
3,2,1,0,87,89,3,10,5,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,96,1,0,0,0,92,90,1,0,0,0,93,95,3,26,13,0,94,93,1,0,0,0,95,98,1,
0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,101,1,0,0,0,98,96,1,0,0,0,99,101,5,
0,0,1,100,86,1,0,0,0,100,99,1,0,0,0,101,1,1,0,0,0,102,104,3,8,4,0,103,102,
1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,3,1,0,0,0,107,
105,1,0,0,0,108,109,3,6,3,0,109,5,1,0,0,0,110,111,5,1,0,0,111,112,3,68,34,
0,112,113,5,23,0,0,113,7,1,0,0,0,114,115,5,2,0,0,115,116,3,68,34,0,116,117,
5,23,0,0,117,9,1,0,0,0,118,120,5,46,0,0,119,118,1,0,0,0,119,120,1,0,0,0,
120,121,1,0,0,0,121,122,3,68,34,0,122,123,5,19,0,0,123,124,3,12,6,0,124,
125,5,20,0,0,125,126,5,3,0,0,126,127,3,84,42,0,127,128,3,26,13,0,128,11,
1,0,0,0,129,134,3,14,7,0,130,131,5,4,0,0,131,133,3,14,7,0,132,130,1,0,0,
0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,13,1,0,0,0,136,134,
1,0,0,0,137,138,3,68,34,0,138,139,5,3,0,0,139,140,3,84,42,0,140,15,1,0,0,
0,141,142,5,5,0,0,142,147,3,68,34,0,143,144,5,6,0,0,144,146,3,68,34,0,145,
143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,
0,0,149,147,1,0,0,0,150,151,5,21,0,0,151,152,3,18,9,0,152,153,5,22,0,0,153,
17,1,0,0,0,154,156,3,10,5,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,
0,0,157,158,1,0,0,0,158,19,1,0,0,0,159,157,1,0,0,0,160,161,5,7,0,0,161,162,
3,22,11,0,162,21,1,0,0,0,163,164,3,68,34,0,164,165,5,19,0,0,165,166,3,24,
12,0,166,167,5,20,0,0,167,23,1,0,0,0,168,173,3,58,29,0,169,170,5,4,0,0,170,
172,3,58,29,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,
0,0,0,174,25,1,0,0,0,175,173,1,0,0,0,176,180,5,21,0,0,177,179,3,26,13,0,
178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,183,
1,0,0,0,182,180,1,0,0,0,183,203,5,22,0,0,184,203,3,28,14,0,185,203,3,30,
15,0,186,203,3,34,17,0,187,203,3,36,18,0,188,203,3,38,19,0,189,203,3,40,
20,0,190,203,3,42,21,0,191,203,3,44,22,0,192,203,3,46,23,0,193,203,3,48,
24,0,194,203,3,50,25,0,195,203,3,52,26,0,196,203,3,54,27,0,197,203,3,56,
28,0,198,199,3,58,29,0,199,200,5,23,0,0,200,203,1,0,0,0,201,203,5,23,0,0,
202,176,1,0,0,0,202,184,1,0,0,0,202,185,1,0,0,0,202,186,1,0,0,0,202,187,
1,0,0,0,202,188,1,0,0,0,202,189,1,0,0,0,202,190,1,0,0,0,202,191,1,0,0,0,
202,192,1,0,0,0,202,193,1,0,0,0,202,194,1,0,0,0,202,195,1,0,0,0,202,196,
1,0,0,0,202,197,1,0,0,0,202,198,1,0,0,0,202,201,1,0,0,0,203,27,1,0,0,0,204,
205,3,68,34,0,205,206,5,37,0,0,206,207,3,58,29,0,207,208,5,23,0,0,208,29,
1,0,0,0,209,210,5,8,0,0,210,211,5,21,0,0,211,212,3,32,16,0,212,213,5,22,
0,0,213,31,1,0,0,0,214,216,9,0,0,0,215,214,1,0,0,0,216,217,1,0,0,0,217,218,
1,0,0,0,217,215,1,0,0,0,218,33,1,0,0,0,219,220,3,68,34,0,220,221,5,38,0,
0,221,222,3,58,29,0,222,223,5,23,0,0,223,35,1,0,0,0,224,225,3,68,34,0,225,
226,5,39,0,0,226,227,3,58,29,0,227,228,5,23,0,0,228,37,1,0,0,0,229,230,3,
68,34,0,230,231,5,40,0,0,231,232,3,58,29,0,232,233,5,23,0,0,233,39,1,0,0,
0,234,235,3,68,34,0,235,236,5,41,0,0,236,237,3,58,29,0,237,238,5,23,0,0,
238,41,1,0,0,0,239,240,3,68,34,0,240,241,5,44,0,0,241,242,5,23,0,0,242,43,
1,0,0,0,243,244,3,68,34,0,244,245,5,45,0,0,245,246,5,23,0,0,246,45,1,0,0,
0,247,248,5,42,0,0,248,249,5,19,0,0,249,250,3,64,32,0,250,251,5,20,0,0,251,
252,3,26,13,0,252,47,1,0,0,0,253,254,5,42,0,0,254,255,5,19,0,0,255,256,3,
64,32,0,256,257,5,20,0,0,257,258,3,26,13,0,258,259,5,43,0,0,259,260,3,26,
13,0,260,49,1,0,0,0,261,262,5,48,0,0,262,263,5,19,0,0,263,264,3,64,32,0,
264,265,5,20,0,0,265,266,3,26,13,0,266,51,1,0,0,0,267,268,5,49,0,0,268,269,
5,19,0,0,269,270,3,54,27,0,270,271,3,64,32,0,271,275,5,23,0,0,272,276,3,
42,21,0,273,276,1,0,0,0,274,276,3,44,22,0,275,272,1,0,0,0,275,273,1,0,0,
0,275,274,1,0,0,0,276,277,1,0,0,0,277,278,5,20,0,0,278,279,3,26,13,0,279,
289,1,0,0,0,280,281,5,49,0,0,281,282,5,19,0,0,282,283,3,54,27,0,283,284,
5,9,0,0,284,285,3,72,36,0,285,286,5,20,0,0,286,287,3,26,13,0,287,289,1,0,
0,0,288,267,1,0,0,0,288,280,1,0,0,0,289,53,1,0,0,0,290,291,5,47,0,0,291,
292,3,68,34,0,292,293,5,37,0,0,293,294,3,58,29,0,294,295,5,23,0,0,295,307,
1,0,0,0,296,297,5,47,0,0,297,298,3,68,34,0,298,299,5,3,0,0,299,300,3,84,
42,0,300,301,5,37,0,0,301,302,3,58,29,0,302,303,5,23,0,0,303,307,1,0,0,0,
304,305,5,47,0,0,305,307,3,68,34,0,306,290,1,0,0,0,306,296,1,0,0,0,306,304,
1,0,0,0,307,55,1,0,0,0,308,309,5,50,0,0,309,310,3,58,29,0,310,311,5,23,0,
0,311,57,1,0,0,0,312,313,5,19,0,0,313,314,3,58,29,0,314,315,5,20,0,0,315,
328,1,0,0,0,316,328,3,20,10,0,317,328,3,22,11,0,318,328,3,70,35,0,319,328,
3,68,34,0,320,328,3,64,32,0,321,328,3,78,39,0,322,328,3,76,38,0,323,328,
3,74,37,0,324,328,3,80,40,0,325,328,3,62,31,0,326,328,3,72,36,0,327,312,
1,0,0,0,327,316,1,0,0,0,327,317,1,0,0,0,327,318,1,0,0,0,327,319,1,0,0,0,
327,320,1,0,0,0,327,321,1,0,0,0,327,322,1,0,0,0,327,323,1,0,0,0,327,324,
1,0,0,0,327,325,1,0,0,0,327,326,1,0,0,0,328,59,1,0,0,0,329,330,5,19,0,0,
330,331,3,60,30,0,331,332,5,20,0,0,332,344,1,0,0,0,333,344,3,20,10,0,334,
344,3,22,11,0,335,344,3,70,35,0,336,344,3,68,34,0,337,344,3,64,32,0,338,
344,3,78,39,0,339,344,3,76,38,0,340,344,3,74,37,0,341,344,3,80,40,0,342,
344,3,72,36,0,343,329,1,0,0,0,343,333,1,0,0,0,343,334,1,0,0,0,343,335,1,
0,0,0,343,336,1,0,0,0,343,337,1,0,0,0,343,338,1,0,0,0,343,339,1,0,0,0,343,
340,1,0,0,0,343,341,1,0,0,0,343,342,1,0,0,0,344,61,1,0,0,0,345,346,3,60,
30,0,346,347,5,24,0,0,347,348,3,60,30,0,348,362,1,0,0,0,349,350,3,60,30,
0,350,351,5,25,0,0,351,352,3,60,30,0,352,362,1,0,0,0,353,354,3,60,30,0,354,
355,5,26,0,0,355,356,3,60,30,0,356,362,1,0,0,0,357,358,3,60,30,0,358,359,
5,27,0,0,359,360,3,60,30,0,360,362,1,0,0,0,361,345,1,0,0,0,361,349,1,0,0,
0,361,353,1,0,0,0,361,357,1,0,0,0,362,63,1,0,0,0,363,401,3,66,33,0,364,401,
5,51,0,0,365,401,5,52,0,0,366,367,3,66,33,0,367,368,5,28,0,0,368,369,3,64,
32,0,369,401,1,0,0,0,370,371,3,66,33,0,371,372,5,29,0,0,372,373,3,64,32,
0,373,401,1,0,0,0,374,375,3,66,33,0,375,376,5,30,0,0,376,377,3,64,32,0,377,
401,1,0,0,0,378,379,3,66,33,0,379,380,5,31,0,0,380,381,3,64,32,0,381,401,
1,0,0,0,382,383,3,66,33,0,383,384,5,32,0,0,384,385,3,64,32,0,385,401,1,0,
0,0,386,387,3,66,33,0,387,388,5,33,0,0,388,389,3,64,32,0,389,401,1,0,0,0,
390,391,3,66,33,0,391,392,5,34,0,0,392,393,3,64,32,0,393,401,1,0,0,0,394,
395,3,66,33,0,395,396,5,35,0,0,396,397,3,64,32,0,397,401,1,0,0,0,398,399,
5,36,0,0,399,401,3,64,32,0,400,363,1,0,0,0,400,364,1,0,0,0,400,365,1,0,0,
0,400,366,1,0,0,0,400,370,1,0,0,0,400,374,1,0,0,0,400,378,1,0,0,0,400,382,
1,0,0,0,400,386,1,0,0,0,400,390,1,0,0,0,400,394,1,0,0,0,400,398,1,0,0,0,
401,65,1,0,0,0,402,405,3,70,35,0,403,405,3,72,36,0,404,402,1,0,0,0,404,403,
1,0,0,0,405,67,1,0,0,0,406,407,5,53,0,0,407,69,1,0,0,0,408,409,7,0,0,0,409,
71,1,0,0,0,410,417,3,68,34,0,411,412,5,10,0,0,412,418,3,78,39,0,413,418,
1,0,0,0,414,415,3,70,35,0,415,416,5,11,0,0,416,418,1,0,0,0,417,411,1,0,0,
0,417,413,1,0,0,0,417,414,1,0,0,0,417,418,1,0,0,0,418,421,1,0,0,0,419,420,
5,12,0,0,420,422,3,68,34,0,421,419,1,0,0,0,421,422,1,0,0,0,422,73,1,0,0,
0,423,424,5,10,0,0,424,429,3,58,29,0,425,426,5,4,0,0,426,428,3,58,29,0,427,
425,1,0,0,0,428,431,1,0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,432,1,0,
0,0,431,429,1,0,0,0,432,433,5,11,0,0,433,437,1,0,0,0,434,437,1,0,0,0,435,
437,5,11,0,0,436,423,1,0,0,0,436,434,1,0,0,0,436,435,1,0,0,0,437,75,1,0,
0,0,438,445,5,21,0,0,439,440,3,78,39,0,440,441,5,3,0,0,441,442,3,82,41,0,
442,444,1,0,0,0,443,439,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,
1,0,0,0,446,448,1,0,0,0,447,445,1,0,0,0,448,455,5,4,0,0,449,450,3,78,39,
0,450,451,5,3,0,0,451,452,3,82,41,0,452,454,1,0,0,0,453,449,1,0,0,0,454,
457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,458,1,0,0,0,457,455,1,0,
0,0,458,459,5,22,0,0,459,77,1,0,0,0,460,461,5,55,0,0,461,79,1,0,0,0,462,
466,3,78,39,0,463,466,1,0,0,0,464,466,3,82,41,0,465,462,1,0,0,0,465,463,
1,0,0,0,465,464,1,0,0,0,466,467,1,0,0,0,467,471,5,24,0,0,468,472,3,82,41,
0,469,472,1,0,0,0,470,472,3,78,39,0,471,468,1,0,0,0,471,469,1,0,0,0,471,
470,1,0,0,0,472,476,1,0,0,0,473,475,3,80,40,0,474,473,1,0,0,0,475,478,1,
0,0,0,476,474,1,0,0,0,476,477,1,0,0,0,477,81,1,0,0,0,478,476,1,0,0,0,479,
488,3,78,39,0,480,488,3,74,37,0,481,488,3,70,35,0,482,488,3,64,32,0,483,
488,3,76,38,0,484,488,3,72,36,0,485,488,3,20,10,0,486,488,3,22,11,0,487,
479,1,0,0,0,487,480,1,0,0,0,487,481,1,0,0,0,487,482,1,0,0,0,487,483,1,0,
0,0,487,484,1,0,0,0,487,485,1,0,0,0,487,486,1,0,0,0,488,83,1,0,0,0,489,497,
1,0,0,0,490,497,5,13,0,0,491,497,5,14,0,0,492,497,5,15,0,0,493,497,5,16,
0,0,494,497,5,17,0,0,495,497,5,18,0,0,496,489,1,0,0,0,496,490,1,0,0,0,496,
491,1,0,0,0,496,492,1,0,0,0,496,493,1,0,0,0,496,494,1,0,0,0,496,495,1,0,
0,0,497,85,1,0,0,0,31,90,96,100,105,119,134,147,157,173,180,202,217,275,
288,306,327,343,361,400,404,417,421,429,436,445,455,465,471,476,487,496];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GlacierParser extends antlr4.Parser {

    static grammarFileName = "Glacier";
    static literalNames = [ null, "'name:'", "'import'", "':'", "','", "'class'", 
                            "'extends'", "'new'", "'__LLVM'", "'in'", "'['", 
                            "']'", "'.'", "'object'", "'void'", "'string'", 
                            "'number'", "'bool'", "'array'", "'('", "')'", 
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
                         "return_stmt", "expression", "expr2", "math", "boolexpr", 
                         "value", "identifier", "number", "varAcess", "list", 
                         "object", "string", "string_concat", "data", "type" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GlacierParser.ruleNames;
        this.literalNames = GlacierParser.literalNames;
        this.symbolicNames = GlacierParser.symbolicNames;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GlacierParser.RULE_script);
	    var _la = 0;
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.header();
	            this.state = 90;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 87;
	                    this.functionDef(); 
	                }
	                this.state = 92;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	            }

	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262671744) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 93;
	                this.statement();
	                this.state = 98;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.match(GlacierParser.EOF);
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
	    this.enterRule(localctx, 2, GlacierParser.RULE_header);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 102;
	            this.include();
	            this.state = 107;
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
	    this.enterRule(localctx, 4, GlacierParser.RULE_meta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
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
	    this.enterRule(localctx, 6, GlacierParser.RULE_scriptName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(GlacierParser.T__0);
	        this.state = 111;
	        this.identifier();
	        this.state = 112;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 8, GlacierParser.RULE_include);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(GlacierParser.T__1);
	        this.state = 115;
	        this.identifier();
	        this.state = 116;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 10, GlacierParser.RULE_functionDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 118;
	            this.match(GlacierParser.DEF);
	        }

	        this.state = 121;
	        this.identifier();
	        this.state = 122;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 123;
	        this.func_params();
	        this.state = 124;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 125;
	        this.match(GlacierParser.T__2);
	        this.state = 126;
	        this.type();
	        this.state = 127;
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



	func_params() {
	    let localctx = new Func_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GlacierParser.RULE_func_params);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.func_identifier();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 130;
	            this.match(GlacierParser.T__3);
	            this.state = 131;
	            this.func_identifier();
	            this.state = 136;
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



	func_identifier() {
	    let localctx = new Func_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GlacierParser.RULE_func_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.identifier();
	        this.state = 138;
	        this.match(GlacierParser.T__2);
	        this.state = 139;
	        this.type();
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
	    this.enterRule(localctx, 16, GlacierParser.RULE_classDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(GlacierParser.T__4);
	        this.state = 142;
	        this.identifier();
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 143;
	            this.match(GlacierParser.T__5);
	            this.state = 144;
	            this.identifier();
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 151;
	        this.classBody();
	        this.state = 152;
	        this.match(GlacierParser.CLOSE_CURLEY);
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
	    this.enterRule(localctx, 18, GlacierParser.RULE_classBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46 || _la===53) {
	            this.state = 154;
	            this.functionDef();
	            this.state = 159;
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
	    this.enterRule(localctx, 20, GlacierParser.RULE_classInit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(GlacierParser.T__6);
	        this.state = 161;
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
	    this.enterRule(localctx, 22, GlacierParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.identifier();
	        this.state = 164;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 165;
	        this.methodparams();
	        this.state = 166;
	        this.match(GlacierParser.CLOSE_BRACKET);
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
	    this.enterRule(localctx, 24, GlacierParser.RULE_methodparams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.expression();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 169;
	            this.match(GlacierParser.T__3);
	            this.state = 170;
	            this.expression();
	            this.state = 175;
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
	    this.enterRule(localctx, 26, GlacierParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.match(GlacierParser.OPEN_CURLEY);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262671744) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3143745) !== 0)) {
	                this.state = 177;
	                this.statement();
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 183;
	            this.match(GlacierParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 185;
	            this.asm_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 186;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 187;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 188;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 189;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 190;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 191;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 192;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 193;
	            this.if_else_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 194;
	            this.while_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 195;
	            this.for_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 196;
	            this.var_stmt();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 197;
	            this.return_stmt();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 198;
	            this.expression();
	            this.state = 199;
	            this.match(GlacierParser.END_STMT);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 201;
	            this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 28, GlacierParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.identifier();
	        this.state = 205;
	        this.match(GlacierParser.ASSIGN);
	        this.state = 206;
	        this.expression();
	        this.state = 207;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 30, GlacierParser.RULE_asm_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(GlacierParser.T__7);
	        this.state = 210;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 211;
	        this.any();
	        this.state = 212;
	        this.match(GlacierParser.CLOSE_CURLEY);
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
	    this.enterRule(localctx, 32, GlacierParser.RULE_any);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 214;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 217; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
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
	    this.enterRule(localctx, 34, GlacierParser.RULE_add_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.identifier();
	        this.state = 220;
	        this.match(GlacierParser.ADDASSIGN);
	        this.state = 221;
	        this.expression();
	        this.state = 222;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 36, GlacierParser.RULE_sub_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.identifier();
	        this.state = 225;
	        this.match(GlacierParser.SUBASSIGN);
	        this.state = 226;
	        this.expression();
	        this.state = 227;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 38, GlacierParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.identifier();
	        this.state = 230;
	        this.match(GlacierParser.MULASSIGN);
	        this.state = 231;
	        this.expression();
	        this.state = 232;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 40, GlacierParser.RULE_div_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.identifier();
	        this.state = 235;
	        this.match(GlacierParser.DIVASSIGN);
	        this.state = 236;
	        this.expression();
	        this.state = 237;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 42, GlacierParser.RULE_inc_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.identifier();
	        this.state = 240;
	        this.match(GlacierParser.INCREMENT);
	        this.state = 241;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 44, GlacierParser.RULE_dec_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.identifier();
	        this.state = 244;
	        this.match(GlacierParser.DECREMENT);
	        this.state = 245;
	        this.match(GlacierParser.END_STMT);
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
	    this.enterRule(localctx, 46, GlacierParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(GlacierParser.IF);
	        this.state = 248;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 249;
	        this.boolexpr();
	        this.state = 250;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 251;
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
	    this.enterRule(localctx, 48, GlacierParser.RULE_if_else_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(GlacierParser.IF);
	        this.state = 254;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 255;
	        this.boolexpr();
	        this.state = 256;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 257;
	        this.statement();
	        this.state = 258;
	        this.match(GlacierParser.ELSE);
	        this.state = 259;
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
	    this.enterRule(localctx, 50, GlacierParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(GlacierParser.WHILE);
	        this.state = 262;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 263;
	        this.boolexpr();
	        this.state = 264;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 265;
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
	    this.enterRule(localctx, 52, GlacierParser.RULE_for_stmt);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 267;
	            this.match(GlacierParser.FOR);
	            this.state = 268;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 269;
	            this.var_stmt();
	            this.state = 270;
	            this.boolexpr();
	            this.state = 271;
	            this.match(GlacierParser.END_STMT);
	            this.state = 275;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 272;
	                this.inc_stmt();
	                break;

	            case 2:
	                break;

	            case 3:
	                this.state = 274;
	                this.dec_stmt();
	                break;

	            }
	            this.state = 277;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 278;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.match(GlacierParser.FOR);
	            this.state = 281;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 282;
	            this.var_stmt();
	            this.state = 283;
	            this.match(GlacierParser.T__8);
	            this.state = 284;
	            this.varAcess();
	            this.state = 285;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 286;
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
	    this.enterRule(localctx, 54, GlacierParser.RULE_var_stmt);
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.match(GlacierParser.VAR);
	            this.state = 291;
	            this.identifier();
	            this.state = 292;
	            this.match(GlacierParser.ASSIGN);
	            this.state = 293;
	            this.expression();
	            this.state = 294;
	            this.match(GlacierParser.END_STMT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.match(GlacierParser.VAR);
	            this.state = 297;
	            this.identifier();
	            this.state = 298;
	            this.match(GlacierParser.T__2);
	            this.state = 299;
	            this.type();
	            this.state = 300;
	            this.match(GlacierParser.ASSIGN);
	            this.state = 301;
	            this.expression();
	            this.state = 302;
	            this.match(GlacierParser.END_STMT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 304;
	            this.match(GlacierParser.VAR);
	            this.state = 305;
	            this.identifier();
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
	    this.enterRule(localctx, 56, GlacierParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(GlacierParser.RETURN);
	        this.state = 309;
	        this.expression();
	        this.state = 310;
	        this.match(GlacierParser.END_STMT);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GlacierParser.RULE_expression);
	    try {
	        this.state = 327;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 313;
	            this.expression();
	            this.state = 314;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.classInit();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 317;
	            this.methodcall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 318;
	            this.number();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 319;
	            this.identifier();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 320;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 321;
	            this.string();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 322;
	            this.object();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 323;
	            this.list();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 324;
	            this.string_concat();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 325;
	            this.math();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 326;
	            this.varAcess();
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



	expr2() {
	    let localctx = new Expr2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GlacierParser.RULE_expr2);
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 329;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 330;
	            this.expr2();
	            this.state = 331;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 333;
	            this.classInit();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 334;
	            this.methodcall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 335;
	            this.number();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 336;
	            this.identifier();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 337;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 338;
	            this.string();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 339;
	            this.object();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 340;
	            this.list();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 341;
	            this.string_concat();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 342;
	            this.varAcess();
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



	math() {
	    let localctx = new MathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GlacierParser.RULE_math);
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            this.expr2();
	            this.state = 346;
	            this.match(GlacierParser.ADD);
	            this.state = 347;
	            this.expr2();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            this.expr2();
	            this.state = 350;
	            this.match(GlacierParser.SUB);
	            this.state = 351;
	            this.expr2();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.expr2();
	            this.state = 354;
	            this.match(GlacierParser.MUL);
	            this.state = 355;
	            this.expr2();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 357;
	            this.expr2();
	            this.state = 358;
	            this.match(GlacierParser.DIV);
	            this.state = 359;
	            this.expr2();
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
	    this.enterRule(localctx, 64, GlacierParser.RULE_boolexpr);
	    try {
	        this.state = 400;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 363;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(GlacierParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 365;
	            this.match(GlacierParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 366;
	            this.value();
	            this.state = 367;
	            this.match(GlacierParser.GREATER_THAN);
	            this.state = 368;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 370;
	            this.value();
	            this.state = 371;
	            this.match(GlacierParser.LESS_THAN);
	            this.state = 372;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 374;
	            this.value();
	            this.state = 375;
	            this.match(GlacierParser.EQUAL_TO);
	            this.state = 376;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 378;
	            this.value();
	            this.state = 379;
	            this.match(GlacierParser.NOT_EQUAL_TO);
	            this.state = 380;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 382;
	            this.value();
	            this.state = 383;
	            this.match(GlacierParser.GREATER_THAN_OR_EQUAL);
	            this.state = 384;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 386;
	            this.value();
	            this.state = 387;
	            this.match(GlacierParser.LESS_THAN_OR_EQUAL);
	            this.state = 388;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 390;
	            this.value();
	            this.state = 391;
	            this.match(GlacierParser.OR);
	            this.state = 392;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 394;
	            this.value();
	            this.state = 395;
	            this.match(GlacierParser.AND);
	            this.state = 396;
	            this.boolexpr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 398;
	            this.match(GlacierParser.NOT);
	            this.state = 399;
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
	    this.enterRule(localctx, 66, GlacierParser.RULE_value);
	    try {
	        this.state = 404;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 54:
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 402;
	            this.number();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.varAcess();
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
	    this.enterRule(localctx, 68, GlacierParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(GlacierParser.IDENTIFIER);
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
	    this.enterRule(localctx, 70, GlacierParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
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



	varAcess() {
	    let localctx = new VarAcessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GlacierParser.RULE_varAcess);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.identifier();
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 411;
	            this.match(GlacierParser.T__9);
	            this.state = 412;
	            this.string();

	        } else if(la_===2) {

	        } else if(la_===3) {
	            this.state = 414;
	            this.number();
	            this.state = 415;
	            this.match(GlacierParser.T__10);

	        }
	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 419;
	            this.match(GlacierParser.T__11);
	            this.state = 420;
	            this.identifier();
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
	    this.enterRule(localctx, 74, GlacierParser.RULE_list);
	    var _la = 0;
	    try {
	        this.state = 436;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 423;
	            this.match(GlacierParser.T__9);

	            this.state = 424;
	            this.expression();
	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 425;
	                this.match(GlacierParser.T__3);
	                this.state = 426;
	                this.expression();
	                this.state = 431;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 432;
	            this.match(GlacierParser.T__10);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 435;
	            this.match(GlacierParser.T__10);
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GlacierParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 439;
	            this.string();
	            this.state = 440;
	            this.match(GlacierParser.T__2);
	            this.state = 441;
	            this.data();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        this.state = 448;
	        this.match(GlacierParser.T__3);
	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55) {
	            this.state = 449;
	            this.string();
	            this.state = 450;
	            this.match(GlacierParser.T__2);
	            this.state = 451;
	            this.data();
	            this.state = 457;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 458;
	        this.match(GlacierParser.CLOSE_CURLEY);
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
	    this.enterRule(localctx, 78, GlacierParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.match(GlacierParser.STRING);
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
	    this.enterRule(localctx, 80, GlacierParser.RULE_string_concat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 462;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 464;
	            this.data();
	            break;

	        }
	        this.state = 467;
	        this.match(GlacierParser.ADD);
	        this.state = 471;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 468;
	            this.data();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 470;
	            this.string();
	            break;

	        }
	        this.state = 476;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 473;
	                this.string_concat(); 
	            }
	            this.state = 478;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
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
	    this.enterRule(localctx, 82, GlacierParser.RULE_data);
	    try {
	        this.state = 487;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 479;
	            this.string();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 480;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 481;
	            this.number();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 482;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 483;
	            this.object();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 484;
	            this.varAcess();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 485;
	            this.classInit();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, GlacierParser.RULE_type);
	    try {
	        this.state = 496;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 7:
	        case 8:
	        case 10:
	        case 11:
	        case 19:
	        case 20:
	        case 21:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 36:
	        case 37:
	        case 42:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 57:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.match(GlacierParser.T__12);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 491;
	            this.match(GlacierParser.T__13);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 492;
	            this.match(GlacierParser.T__14);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 493;
	            this.match(GlacierParser.T__15);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 494;
	            this.match(GlacierParser.T__16);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 495;
	            this.match(GlacierParser.T__17);
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


}

GlacierParser.EOF = antlr4.Token.EOF;
GlacierParser.T__0 = 1;
GlacierParser.T__1 = 2;
GlacierParser.T__2 = 3;
GlacierParser.T__3 = 4;
GlacierParser.T__4 = 5;
GlacierParser.T__5 = 6;
GlacierParser.T__6 = 7;
GlacierParser.T__7 = 8;
GlacierParser.T__8 = 9;
GlacierParser.T__9 = 10;
GlacierParser.T__10 = 11;
GlacierParser.T__11 = 12;
GlacierParser.T__12 = 13;
GlacierParser.T__13 = 14;
GlacierParser.T__14 = 15;
GlacierParser.T__15 = 16;
GlacierParser.T__16 = 17;
GlacierParser.T__17 = 18;
GlacierParser.OPEN_BRACKET = 19;
GlacierParser.CLOSE_BRACKET = 20;
GlacierParser.OPEN_CURLEY = 21;
GlacierParser.CLOSE_CURLEY = 22;
GlacierParser.END_STMT = 23;
GlacierParser.ADD = 24;
GlacierParser.SUB = 25;
GlacierParser.MUL = 26;
GlacierParser.DIV = 27;
GlacierParser.GREATER_THAN = 28;
GlacierParser.LESS_THAN = 29;
GlacierParser.EQUAL_TO = 30;
GlacierParser.NOT_EQUAL_TO = 31;
GlacierParser.GREATER_THAN_OR_EQUAL = 32;
GlacierParser.LESS_THAN_OR_EQUAL = 33;
GlacierParser.OR = 34;
GlacierParser.AND = 35;
GlacierParser.NOT = 36;
GlacierParser.ASSIGN = 37;
GlacierParser.ADDASSIGN = 38;
GlacierParser.SUBASSIGN = 39;
GlacierParser.MULASSIGN = 40;
GlacierParser.DIVASSIGN = 41;
GlacierParser.IF = 42;
GlacierParser.ELSE = 43;
GlacierParser.INCREMENT = 44;
GlacierParser.DECREMENT = 45;
GlacierParser.DEF = 46;
GlacierParser.VAR = 47;
GlacierParser.WHILE = 48;
GlacierParser.FOR = 49;
GlacierParser.RETURN = 50;
GlacierParser.TRUE = 51;
GlacierParser.FALSE = 52;
GlacierParser.IDENTIFIER = 53;
GlacierParser.PI = 54;
GlacierParser.STRING = 55;
GlacierParser.LIST = 56;
GlacierParser.NUMBER = 57;
GlacierParser.LINECOMMENT = 58;
GlacierParser.BLOCKCOMMENT = 59;
GlacierParser.WHITESPACE = 60;

GlacierParser.RULE_script = 0;
GlacierParser.RULE_header = 1;
GlacierParser.RULE_meta = 2;
GlacierParser.RULE_scriptName = 3;
GlacierParser.RULE_include = 4;
GlacierParser.RULE_functionDef = 5;
GlacierParser.RULE_func_params = 6;
GlacierParser.RULE_func_identifier = 7;
GlacierParser.RULE_classDef = 8;
GlacierParser.RULE_classBody = 9;
GlacierParser.RULE_classInit = 10;
GlacierParser.RULE_methodcall = 11;
GlacierParser.RULE_methodparams = 12;
GlacierParser.RULE_statement = 13;
GlacierParser.RULE_assign_stmt = 14;
GlacierParser.RULE_asm_stmt = 15;
GlacierParser.RULE_any = 16;
GlacierParser.RULE_add_assign_stmt = 17;
GlacierParser.RULE_sub_assign_stmt = 18;
GlacierParser.RULE_mul_assign_stmt = 19;
GlacierParser.RULE_div_assign_stmt = 20;
GlacierParser.RULE_inc_stmt = 21;
GlacierParser.RULE_dec_stmt = 22;
GlacierParser.RULE_if_stmt = 23;
GlacierParser.RULE_if_else_stmt = 24;
GlacierParser.RULE_while_stmt = 25;
GlacierParser.RULE_for_stmt = 26;
GlacierParser.RULE_var_stmt = 27;
GlacierParser.RULE_return_stmt = 28;
GlacierParser.RULE_expression = 29;
GlacierParser.RULE_expr2 = 30;
GlacierParser.RULE_math = 31;
GlacierParser.RULE_boolexpr = 32;
GlacierParser.RULE_value = 33;
GlacierParser.RULE_identifier = 34;
GlacierParser.RULE_number = 35;
GlacierParser.RULE_varAcess = 36;
GlacierParser.RULE_list = 37;
GlacierParser.RULE_object = 38;
GlacierParser.RULE_string = 39;
GlacierParser.RULE_string_concat = 40;
GlacierParser.RULE_data = 41;
GlacierParser.RULE_type = 42;

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
        this.ruleIndex = GlacierParser.RULE_script;
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
	    return this.getToken(GlacierParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_header;
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitHeader(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_meta;
    }

	scriptName() {
	    return this.getTypedRuleContext(ScriptNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterMeta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitMeta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_scriptName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterScriptName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitScriptName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_include;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterInclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitInclude(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_functionDef;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	func_params() {
	    return this.getTypedRuleContext(Func_paramsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	DEF() {
	    return this.getToken(GlacierParser.DEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterFunctionDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitFunctionDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_func_params;
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterFunc_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitFunc_params(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_func_identifier;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterFunc_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitFunc_identifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_classDef;
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
	    return this.getToken(GlacierParser.OPEN_CURLEY, 0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(GlacierParser.CLOSE_CURLEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterClassDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitClassDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_classBody;
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterClassBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitClassBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_classInit;
    }

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterClassInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitClassInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_methodcall;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	methodparams() {
	    return this.getTypedRuleContext(MethodparamsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterMethodcall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitMethodcall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_methodparams;
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterMethodparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitMethodparams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_statement;
    }

	OPEN_CURLEY() {
	    return this.getToken(GlacierParser.OPEN_CURLEY, 0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(GlacierParser.CLOSE_CURLEY, 0);
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
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(GlacierParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterAssign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitAssign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_asm_stmt;
    }

	OPEN_CURLEY() {
	    return this.getToken(GlacierParser.OPEN_CURLEY, 0);
	};

	any() {
	    return this.getTypedRuleContext(AnyContext,0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(GlacierParser.CLOSE_CURLEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterAsm_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitAsm_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_any;
    }


	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterAny(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitAny(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_add_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ADDASSIGN() {
	    return this.getToken(GlacierParser.ADDASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterAdd_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitAdd_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_sub_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	SUBASSIGN() {
	    return this.getToken(GlacierParser.SUBASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterSub_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitSub_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_mul_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	MULASSIGN() {
	    return this.getToken(GlacierParser.MULASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterMul_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitMul_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_div_assign_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DIVASSIGN() {
	    return this.getToken(GlacierParser.DIVASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterDiv_assign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitDiv_assign_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_inc_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	INCREMENT() {
	    return this.getToken(GlacierParser.INCREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterInc_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitInc_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_dec_stmt;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DECREMENT() {
	    return this.getToken(GlacierParser.DECREMENT, 0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterDec_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitDec_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_if_stmt;
    }

	IF() {
	    return this.getToken(GlacierParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterIf_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitIf_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_if_else_stmt;
    }

	IF() {
	    return this.getToken(GlacierParser.IF, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
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
	    return this.getToken(GlacierParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterIf_else_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitIf_else_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_while_stmt;
    }

	WHILE() {
	    return this.getToken(GlacierParser.WHILE, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitWhile_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_for_stmt;
    }

	FOR() {
	    return this.getToken(GlacierParser.FOR, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	var_stmt() {
	    return this.getTypedRuleContext(Var_stmtContext,0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
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

	varAcess() {
	    return this.getTypedRuleContext(VarAcessContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterFor_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitFor_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_var_stmt;
    }

	VAR() {
	    return this.getToken(GlacierParser.VAR, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(GlacierParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterVar_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitVar_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_return_stmt;
    }

	RETURN() {
	    return this.getToken(GlacierParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	END_STMT() {
	    return this.getToken(GlacierParser.END_STMT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterReturn_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitReturn_stmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_expression;
    }

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	classInit() {
	    return this.getTypedRuleContext(ClassInitContext,0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
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

	math() {
	    return this.getTypedRuleContext(MathContext,0);
	};

	varAcess() {
	    return this.getTypedRuleContext(VarAcessContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Expr2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GlacierParser.RULE_expr2;
    }

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	expr2() {
	    return this.getTypedRuleContext(Expr2Context,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	classInit() {
	    return this.getTypedRuleContext(ClassInitContext,0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
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

	varAcess() {
	    return this.getTypedRuleContext(VarAcessContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterExpr2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitExpr2(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
	        return visitor.visitExpr2(this);
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
        this.ruleIndex = GlacierParser.RULE_math;
    }

	expr2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expr2Context);
	    } else {
	        return this.getTypedRuleContext(Expr2Context,i);
	    }
	};

	ADD() {
	    return this.getToken(GlacierParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(GlacierParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(GlacierParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(GlacierParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterMath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitMath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_boolexpr;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TRUE() {
	    return this.getToken(GlacierParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(GlacierParser.FALSE, 0);
	};

	GREATER_THAN() {
	    return this.getToken(GlacierParser.GREATER_THAN, 0);
	};

	boolexpr() {
	    return this.getTypedRuleContext(BoolexprContext,0);
	};

	LESS_THAN() {
	    return this.getToken(GlacierParser.LESS_THAN, 0);
	};

	EQUAL_TO() {
	    return this.getToken(GlacierParser.EQUAL_TO, 0);
	};

	NOT_EQUAL_TO() {
	    return this.getToken(GlacierParser.NOT_EQUAL_TO, 0);
	};

	GREATER_THAN_OR_EQUAL() {
	    return this.getToken(GlacierParser.GREATER_THAN_OR_EQUAL, 0);
	};

	LESS_THAN_OR_EQUAL() {
	    return this.getToken(GlacierParser.LESS_THAN_OR_EQUAL, 0);
	};

	OR() {
	    return this.getToken(GlacierParser.OR, 0);
	};

	AND() {
	    return this.getToken(GlacierParser.AND, 0);
	};

	NOT() {
	    return this.getToken(GlacierParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterBoolexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitBoolexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_value;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	varAcess() {
	    return this.getTypedRuleContext(VarAcessContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(GlacierParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(GlacierParser.NUMBER, 0);
	};

	PI() {
	    return this.getToken(GlacierParser.PI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarAcessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GlacierParser.RULE_varAcess;
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

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterVarAcess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitVarAcess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
	        return visitor.visitVarAcess(this);
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
        this.ruleIndex = GlacierParser.RULE_list;
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_object;
    }

	OPEN_CURLEY() {
	    return this.getToken(GlacierParser.OPEN_CURLEY, 0);
	};

	CLOSE_CURLEY() {
	    return this.getToken(GlacierParser.CLOSE_CURLEY, 0);
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
	    if(listener instanceof GlacierListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_string;
    }

	STRING() {
	    return this.getToken(GlacierParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_string_concat;
    }

	ADD() {
	    return this.getToken(GlacierParser.ADD, 0);
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

	string_concat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_concatContext);
	    } else {
	        return this.getTypedRuleContext(String_concatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterString_concat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitString_concat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_data;
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

	varAcess() {
	    return this.getTypedRuleContext(VarAcessContext,0);
	};

	classInit() {
	    return this.getTypedRuleContext(ClassInitContext,0);
	};

	methodcall() {
	    return this.getTypedRuleContext(MethodcallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitData(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
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
        this.ruleIndex = GlacierParser.RULE_type;
    }


	enterRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GlacierListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GlacierVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GlacierParser.ScriptContext = ScriptContext; 
GlacierParser.HeaderContext = HeaderContext; 
GlacierParser.MetaContext = MetaContext; 
GlacierParser.ScriptNameContext = ScriptNameContext; 
GlacierParser.IncludeContext = IncludeContext; 
GlacierParser.FunctionDefContext = FunctionDefContext; 
GlacierParser.Func_paramsContext = Func_paramsContext; 
GlacierParser.Func_identifierContext = Func_identifierContext; 
GlacierParser.ClassDefContext = ClassDefContext; 
GlacierParser.ClassBodyContext = ClassBodyContext; 
GlacierParser.ClassInitContext = ClassInitContext; 
GlacierParser.MethodcallContext = MethodcallContext; 
GlacierParser.MethodparamsContext = MethodparamsContext; 
GlacierParser.StatementContext = StatementContext; 
GlacierParser.Assign_stmtContext = Assign_stmtContext; 
GlacierParser.Asm_stmtContext = Asm_stmtContext; 
GlacierParser.AnyContext = AnyContext; 
GlacierParser.Add_assign_stmtContext = Add_assign_stmtContext; 
GlacierParser.Sub_assign_stmtContext = Sub_assign_stmtContext; 
GlacierParser.Mul_assign_stmtContext = Mul_assign_stmtContext; 
GlacierParser.Div_assign_stmtContext = Div_assign_stmtContext; 
GlacierParser.Inc_stmtContext = Inc_stmtContext; 
GlacierParser.Dec_stmtContext = Dec_stmtContext; 
GlacierParser.If_stmtContext = If_stmtContext; 
GlacierParser.If_else_stmtContext = If_else_stmtContext; 
GlacierParser.While_stmtContext = While_stmtContext; 
GlacierParser.For_stmtContext = For_stmtContext; 
GlacierParser.Var_stmtContext = Var_stmtContext; 
GlacierParser.Return_stmtContext = Return_stmtContext; 
GlacierParser.ExpressionContext = ExpressionContext; 
GlacierParser.Expr2Context = Expr2Context; 
GlacierParser.MathContext = MathContext; 
GlacierParser.BoolexprContext = BoolexprContext; 
GlacierParser.ValueContext = ValueContext; 
GlacierParser.IdentifierContext = IdentifierContext; 
GlacierParser.NumberContext = NumberContext; 
GlacierParser.VarAcessContext = VarAcessContext; 
GlacierParser.ListContext = ListContext; 
GlacierParser.ObjectContext = ObjectContext; 
GlacierParser.StringContext = StringContext; 
GlacierParser.String_concatContext = String_concatContext; 
GlacierParser.DataContext = DataContext; 
GlacierParser.TypeContext = TypeContext; 
