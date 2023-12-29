// Generated from ./antlr/grammars/Glacier by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GlacierListener from './GlacierListener.js';
import GlacierVisitor from './GlacierVisitor.js';

const serializedATN = [4,1,59,503,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,5,12,186,8,12,10,12,12,
12,189,9,12,1,13,1,13,5,13,193,8,13,10,13,12,13,196,9,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,3,13,217,8,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
1,16,4,16,230,8,16,11,16,12,16,231,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,
18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,
1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,
24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,3,26,290,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,3,26,303,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,3,27,319,8,27,1,28,1,28,1,28,1,28,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,339,8,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,353,8,29,
10,29,12,29,356,9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,3,30,374,8,30,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,3,31,413,8,31,1,32,1,32,3,32,417,8,32,1,33,1,33,1,34,1,34,1,35,
1,35,1,35,1,35,5,35,427,8,35,10,35,12,35,430,9,35,1,35,1,35,1,35,1,35,3,
35,436,8,35,1,36,1,36,1,36,1,36,1,36,5,36,443,8,36,10,36,12,36,446,9,36,
1,36,1,36,1,36,1,36,1,36,5,36,453,8,36,10,36,12,36,456,9,36,1,36,1,36,1,
37,1,37,1,38,1,38,1,38,3,38,465,8,38,1,38,1,38,1,38,1,38,3,38,471,8,38,1,
38,1,38,1,38,1,38,3,38,477,8,38,5,38,479,8,38,10,38,12,38,482,9,38,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,492,8,39,1,40,1,40,1,40,1,40,1,40,
1,40,1,40,3,40,501,8,40,1,40,1,231,1,58,41,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,0,1,2,0,53,53,56,56,551,0,96,1,0,0,0,2,101,1,0,0,0,4,104,
1,0,0,0,6,106,1,0,0,0,8,110,1,0,0,0,10,131,1,0,0,0,12,143,1,0,0,0,14,150,
1,0,0,0,16,155,1,0,0,0,18,171,1,0,0,0,20,174,1,0,0,0,22,177,1,0,0,0,24,182,
1,0,0,0,26,216,1,0,0,0,28,218,1,0,0,0,30,223,1,0,0,0,32,229,1,0,0,0,34,233,
1,0,0,0,36,238,1,0,0,0,38,243,1,0,0,0,40,248,1,0,0,0,42,253,1,0,0,0,44,257,
1,0,0,0,46,261,1,0,0,0,48,267,1,0,0,0,50,275,1,0,0,0,52,302,1,0,0,0,54,318,
1,0,0,0,56,320,1,0,0,0,58,338,1,0,0,0,60,373,1,0,0,0,62,412,1,0,0,0,64,416,
1,0,0,0,66,418,1,0,0,0,68,420,1,0,0,0,70,435,1,0,0,0,72,437,1,0,0,0,74,459,
1,0,0,0,76,464,1,0,0,0,78,491,1,0,0,0,80,500,1,0,0,0,82,86,3,2,1,0,83,85,
3,10,5,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,92,1,
0,0,0,88,86,1,0,0,0,89,91,3,26,13,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,
0,0,0,92,93,1,0,0,0,93,97,1,0,0,0,94,92,1,0,0,0,95,97,5,0,0,1,96,82,1,0,
0,0,96,95,1,0,0,0,97,1,1,0,0,0,98,100,3,8,4,0,99,98,1,0,0,0,100,103,1,0,
0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,3,1,0,0,0,103,101,1,0,0,0,104,105,
3,6,3,0,105,5,1,0,0,0,106,107,5,1,0,0,107,108,3,66,33,0,108,109,5,22,0,0,
109,7,1,0,0,0,110,111,5,2,0,0,111,112,3,66,33,0,112,113,5,22,0,0,113,9,1,
0,0,0,114,115,5,45,0,0,115,116,3,66,33,0,116,117,5,18,0,0,117,118,3,12,6,
0,118,119,5,19,0,0,119,120,5,3,0,0,120,121,3,66,33,0,121,122,3,26,13,0,122,
132,1,0,0,0,123,124,3,66,33,0,124,125,5,18,0,0,125,126,3,12,6,0,126,127,
5,19,0,0,127,128,5,3,0,0,128,129,3,66,33,0,129,130,3,26,13,0,130,132,1,0,
0,0,131,114,1,0,0,0,131,123,1,0,0,0,132,11,1,0,0,0,133,144,3,14,7,0,134,
144,1,0,0,0,135,140,3,14,7,0,136,137,5,4,0,0,137,139,3,14,7,0,138,136,1,
0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,144,1,0,0,0,142,
140,1,0,0,0,143,133,1,0,0,0,143,134,1,0,0,0,143,135,1,0,0,0,144,13,1,0,0,
0,145,151,3,66,33,0,146,151,1,0,0,0,147,151,3,58,29,0,148,151,1,0,0,0,149,
151,3,32,16,0,150,145,1,0,0,0,150,146,1,0,0,0,150,147,1,0,0,0,150,148,1,
0,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,153,5,3,0,0,153,154,3,80,40,0,
154,15,1,0,0,0,155,156,5,5,0,0,156,161,3,66,33,0,157,158,5,6,0,0,158,160,
3,66,33,0,159,157,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,
0,162,164,1,0,0,0,163,161,1,0,0,0,164,165,5,20,0,0,165,166,3,18,9,0,166,
167,5,21,0,0,167,17,1,0,0,0,168,170,3,10,5,0,169,168,1,0,0,0,170,173,1,0,
0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,19,1,0,0,0,173,171,1,0,0,0,174,175,
5,7,0,0,175,176,3,22,11,0,176,21,1,0,0,0,177,178,3,66,33,0,178,179,5,18,
0,0,179,180,3,24,12,0,180,181,5,19,0,0,181,23,1,0,0,0,182,187,3,58,29,0,
183,184,5,4,0,0,184,186,3,58,29,0,185,183,1,0,0,0,186,189,1,0,0,0,187,185,
1,0,0,0,187,188,1,0,0,0,188,25,1,0,0,0,189,187,1,0,0,0,190,194,5,20,0,0,
191,193,3,26,13,0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,
1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,217,5,21,0,0,198,217,3,28,14,
0,199,217,3,30,15,0,200,217,3,34,17,0,201,217,3,36,18,0,202,217,3,38,19,
0,203,217,3,40,20,0,204,217,3,42,21,0,205,217,3,44,22,0,206,217,3,46,23,
0,207,217,3,48,24,0,208,217,3,50,25,0,209,217,3,52,26,0,210,217,3,54,27,
0,211,217,3,56,28,0,212,213,3,58,29,0,213,214,5,22,0,0,214,217,1,0,0,0,215,
217,5,22,0,0,216,190,1,0,0,0,216,198,1,0,0,0,216,199,1,0,0,0,216,200,1,0,
0,0,216,201,1,0,0,0,216,202,1,0,0,0,216,203,1,0,0,0,216,204,1,0,0,0,216,
205,1,0,0,0,216,206,1,0,0,0,216,207,1,0,0,0,216,208,1,0,0,0,216,209,1,0,
0,0,216,210,1,0,0,0,216,211,1,0,0,0,216,212,1,0,0,0,216,215,1,0,0,0,217,
27,1,0,0,0,218,219,3,66,33,0,219,220,5,36,0,0,220,221,3,58,29,0,221,222,
5,22,0,0,222,29,1,0,0,0,223,224,5,8,0,0,224,225,5,20,0,0,225,226,3,32,16,
0,226,227,5,21,0,0,227,31,1,0,0,0,228,230,9,0,0,0,229,228,1,0,0,0,230,231,
1,0,0,0,231,232,1,0,0,0,231,229,1,0,0,0,232,33,1,0,0,0,233,234,3,66,33,0,
234,235,5,37,0,0,235,236,3,64,32,0,236,237,5,22,0,0,237,35,1,0,0,0,238,239,
3,66,33,0,239,240,5,38,0,0,240,241,3,64,32,0,241,242,5,22,0,0,242,37,1,0,
0,0,243,244,3,66,33,0,244,245,5,39,0,0,245,246,3,64,32,0,246,247,5,22,0,
0,247,39,1,0,0,0,248,249,3,66,33,0,249,250,5,40,0,0,250,251,3,64,32,0,251,
252,5,22,0,0,252,41,1,0,0,0,253,254,3,66,33,0,254,255,5,43,0,0,255,256,5,
22,0,0,256,43,1,0,0,0,257,258,3,66,33,0,258,259,5,44,0,0,259,260,5,22,0,
0,260,45,1,0,0,0,261,262,5,41,0,0,262,263,5,18,0,0,263,264,3,62,31,0,264,
265,5,19,0,0,265,266,3,26,13,0,266,47,1,0,0,0,267,268,5,41,0,0,268,269,5,
18,0,0,269,270,3,62,31,0,270,271,5,19,0,0,271,272,3,26,13,0,272,273,5,42,
0,0,273,274,3,26,13,0,274,49,1,0,0,0,275,276,5,47,0,0,276,277,5,18,0,0,277,
278,3,62,31,0,278,279,5,19,0,0,279,280,3,26,13,0,280,51,1,0,0,0,281,282,
5,48,0,0,282,283,5,18,0,0,283,284,3,54,27,0,284,285,3,62,31,0,285,289,5,
22,0,0,286,290,3,42,21,0,287,290,1,0,0,0,288,290,3,44,22,0,289,286,1,0,0,
0,289,287,1,0,0,0,289,288,1,0,0,0,290,291,1,0,0,0,291,292,5,19,0,0,292,293,
3,26,13,0,293,303,1,0,0,0,294,295,5,48,0,0,295,296,5,18,0,0,296,297,3,54,
27,0,297,298,5,9,0,0,298,299,3,64,32,0,299,300,5,19,0,0,300,301,3,26,13,
0,301,303,1,0,0,0,302,281,1,0,0,0,302,294,1,0,0,0,303,53,1,0,0,0,304,305,
5,46,0,0,305,306,3,66,33,0,306,307,5,36,0,0,307,308,3,58,29,0,308,309,5,
22,0,0,309,319,1,0,0,0,310,311,5,46,0,0,311,312,3,66,33,0,312,313,5,3,0,
0,313,314,3,80,40,0,314,315,5,36,0,0,315,316,3,58,29,0,316,317,5,22,0,0,
317,319,1,0,0,0,318,304,1,0,0,0,318,310,1,0,0,0,319,55,1,0,0,0,320,321,5,
49,0,0,321,322,3,58,29,0,322,323,5,22,0,0,323,57,1,0,0,0,324,325,6,29,-1,
0,325,326,5,18,0,0,326,327,3,58,29,0,327,328,5,19,0,0,328,339,1,0,0,0,329,
339,3,20,10,0,330,339,3,22,11,0,331,339,3,64,32,0,332,339,3,66,33,0,333,
339,3,62,31,0,334,339,3,74,37,0,335,339,3,72,36,0,336,339,3,70,35,0,337,
339,3,76,38,0,338,324,1,0,0,0,338,329,1,0,0,0,338,330,1,0,0,0,338,331,1,
0,0,0,338,332,1,0,0,0,338,333,1,0,0,0,338,334,1,0,0,0,338,335,1,0,0,0,338,
336,1,0,0,0,338,337,1,0,0,0,339,354,1,0,0,0,340,341,10,4,0,0,341,342,5,23,
0,0,342,353,3,58,29,5,343,344,10,3,0,0,344,345,5,24,0,0,345,353,3,58,29,
4,346,347,10,2,0,0,347,348,5,25,0,0,348,353,3,58,29,3,349,350,10,1,0,0,350,
351,5,26,0,0,351,353,3,58,29,2,352,340,1,0,0,0,352,343,1,0,0,0,352,346,1,
0,0,0,352,349,1,0,0,0,353,356,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,
59,1,0,0,0,356,354,1,0,0,0,357,358,3,58,29,0,358,359,5,23,0,0,359,360,3,
58,29,0,360,374,1,0,0,0,361,362,3,58,29,0,362,363,5,24,0,0,363,364,3,58,
29,0,364,374,1,0,0,0,365,366,3,58,29,0,366,367,5,25,0,0,367,368,3,58,29,
0,368,374,1,0,0,0,369,370,3,58,29,0,370,371,5,26,0,0,371,372,3,58,29,0,372,
374,1,0,0,0,373,357,1,0,0,0,373,361,1,0,0,0,373,365,1,0,0,0,373,369,1,0,
0,0,374,61,1,0,0,0,375,413,3,64,32,0,376,413,5,50,0,0,377,413,5,51,0,0,378,
379,3,64,32,0,379,380,5,27,0,0,380,381,3,62,31,0,381,413,1,0,0,0,382,383,
3,64,32,0,383,384,5,28,0,0,384,385,3,62,31,0,385,413,1,0,0,0,386,387,3,64,
32,0,387,388,5,29,0,0,388,389,3,62,31,0,389,413,1,0,0,0,390,391,3,64,32,
0,391,392,5,30,0,0,392,393,3,62,31,0,393,413,1,0,0,0,394,395,3,64,32,0,395,
396,5,31,0,0,396,397,3,62,31,0,397,413,1,0,0,0,398,399,3,64,32,0,399,400,
5,32,0,0,400,401,3,62,31,0,401,413,1,0,0,0,402,403,3,64,32,0,403,404,5,33,
0,0,404,405,3,62,31,0,405,413,1,0,0,0,406,407,3,64,32,0,407,408,5,34,0,0,
408,409,3,62,31,0,409,413,1,0,0,0,410,411,5,35,0,0,411,413,3,62,31,0,412,
375,1,0,0,0,412,376,1,0,0,0,412,377,1,0,0,0,412,378,1,0,0,0,412,382,1,0,
0,0,412,386,1,0,0,0,412,390,1,0,0,0,412,394,1,0,0,0,412,398,1,0,0,0,412,
402,1,0,0,0,412,406,1,0,0,0,412,410,1,0,0,0,413,63,1,0,0,0,414,417,3,66,
33,0,415,417,3,68,34,0,416,414,1,0,0,0,416,415,1,0,0,0,417,65,1,0,0,0,418,
419,5,52,0,0,419,67,1,0,0,0,420,421,7,0,0,0,421,69,1,0,0,0,422,423,5,10,
0,0,423,428,3,58,29,0,424,425,5,4,0,0,425,427,3,58,29,0,426,424,1,0,0,0,
427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,431,1,0,0,0,430,428,
1,0,0,0,431,432,5,11,0,0,432,436,1,0,0,0,433,436,1,0,0,0,434,436,5,11,0,
0,435,422,1,0,0,0,435,433,1,0,0,0,435,434,1,0,0,0,436,71,1,0,0,0,437,444,
5,20,0,0,438,439,3,74,37,0,439,440,5,3,0,0,440,441,3,78,39,0,441,443,1,0,
0,0,442,438,1,0,0,0,443,446,1,0,0,0,444,442,1,0,0,0,444,445,1,0,0,0,445,
447,1,0,0,0,446,444,1,0,0,0,447,454,5,4,0,0,448,449,3,74,37,0,449,450,5,
3,0,0,450,451,3,78,39,0,451,453,1,0,0,0,452,448,1,0,0,0,453,456,1,0,0,0,
454,452,1,0,0,0,454,455,1,0,0,0,455,457,1,0,0,0,456,454,1,0,0,0,457,458,
5,21,0,0,458,73,1,0,0,0,459,460,5,54,0,0,460,75,1,0,0,0,461,465,3,74,37,
0,462,465,1,0,0,0,463,465,3,78,39,0,464,461,1,0,0,0,464,462,1,0,0,0,464,
463,1,0,0,0,465,466,1,0,0,0,466,470,5,23,0,0,467,471,3,74,37,0,468,471,1,
0,0,0,469,471,3,78,39,0,470,467,1,0,0,0,470,468,1,0,0,0,470,469,1,0,0,0,
471,480,1,0,0,0,472,476,5,23,0,0,473,477,3,74,37,0,474,477,1,0,0,0,475,477,
3,78,39,0,476,473,1,0,0,0,476,474,1,0,0,0,476,475,1,0,0,0,477,479,1,0,0,
0,478,472,1,0,0,0,479,482,1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,77,
1,0,0,0,482,480,1,0,0,0,483,492,3,74,37,0,484,492,3,70,35,0,485,492,3,68,
34,0,486,492,3,62,31,0,487,492,3,72,36,0,488,492,3,64,32,0,489,492,3,20,
10,0,490,492,3,22,11,0,491,483,1,0,0,0,491,484,1,0,0,0,491,485,1,0,0,0,491,
486,1,0,0,0,491,487,1,0,0,0,491,488,1,0,0,0,491,489,1,0,0,0,491,490,1,0,
0,0,492,79,1,0,0,0,493,501,1,0,0,0,494,501,5,12,0,0,495,501,5,13,0,0,496,
501,5,14,0,0,497,501,5,15,0,0,498,501,5,16,0,0,499,501,5,17,0,0,500,493,
1,0,0,0,500,494,1,0,0,0,500,495,1,0,0,0,500,496,1,0,0,0,500,497,1,0,0,0,
500,498,1,0,0,0,500,499,1,0,0,0,501,81,1,0,0,0,33,86,92,96,101,131,140,143,
150,161,171,187,194,216,231,289,302,318,338,352,354,373,412,416,428,435,
444,454,464,470,476,480,491,500];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GlacierParser extends antlr4.Parser {

    static grammarFileName = "Glacier";
    static literalNames = [ null, "'name:'", "'import'", "':'", "','", "'class'", 
                            "'extends'", "'new'", "'__LLVM'", "'in'", "'['", 
                            "']'", "'object'", "'void'", "'string'", "'number'", 
                            "'bool'", "'array'", "'('", "')'", "'{'", "'}'", 
                            "';'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", 
                            "'=='", "'!='", "'>='", "'<='", "'||'", "'&&'", 
                            "'!'", "'='", "'+='", "'-='", "'*='", "'/='", 
                            "'if'", "'else'", "'++'", "'--'", "'function'", 
                            "'var'", "'while'", "'for'", "'return'", "'true'", 
                            "'false'", null, "'$pi'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "OPEN_BRACKET", "CLOSE_BRACKET", 
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
        this.ruleNames = GlacierParser.ruleNames;
        this.literalNames = GlacierParser.literalNames;
        this.symbolicNames = GlacierParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 29:
    	    		return this.expression_sempred(localctx, predIndex);
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




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GlacierParser.RULE_script);
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
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 89;
	                    this.statement(); 
	                }
	                this.state = 94;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 98;
	                this.include(); 
	            }
	            this.state = 103;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 6, GlacierParser.RULE_scriptName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(GlacierParser.T__0);
	        this.state = 107;
	        this.identifier();
	        this.state = 108;
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
	        this.state = 110;
	        this.match(GlacierParser.T__1);
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



	functionDef() {
	    let localctx = new FunctionDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GlacierParser.RULE_functionDef);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(GlacierParser.DEF);
	            this.state = 115;
	            this.identifier();
	            this.state = 116;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 117;
	            this.func_params();
	            this.state = 118;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 119;
	            this.match(GlacierParser.T__2);
	            this.state = 120;
	            this.identifier();
	            this.state = 121;
	            this.statement();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.identifier();
	            this.state = 124;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 125;
	            this.func_params();
	            this.state = 126;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 127;
	            this.match(GlacierParser.T__2);
	            this.state = 128;
	            this.identifier();
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
	    this.enterRule(localctx, 12, GlacierParser.RULE_func_params);
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
	                this.match(GlacierParser.T__3);
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
	    this.enterRule(localctx, 14, GlacierParser.RULE_func_identifier);
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
	        this.match(GlacierParser.T__2);
	        this.state = 153;
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
	        this.state = 155;
	        this.match(GlacierParser.T__4);
	        this.state = 156;
	        this.identifier();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 157;
	            this.match(GlacierParser.T__5);
	            this.state = 158;
	            this.identifier();
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 165;
	        this.classBody();
	        this.state = 166;
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
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45 || _la===52) {
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
	    this.enterRule(localctx, 20, GlacierParser.RULE_classInit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(GlacierParser.T__6);
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
	    this.enterRule(localctx, 22, GlacierParser.RULE_methodcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.identifier();
	        this.state = 178;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 179;
	        this.methodparams();
	        this.state = 180;
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
	        this.state = 182;
	        this.expression(0);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 183;
	            this.match(GlacierParser.T__3);
	            this.state = 184;
	            this.expression(0);
	            this.state = 189;
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
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 190;
	            this.match(GlacierParser.OPEN_CURLEY);
	            this.state = 194;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 191;
	                    this.statement(); 
	                }
	                this.state = 196;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 197;
	            this.match(GlacierParser.CLOSE_CURLEY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.assign_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 199;
	            this.asm_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 200;
	            this.add_assign_stmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 201;
	            this.sub_assign_stmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 202;
	            this.mul_assign_stmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 203;
	            this.div_assign_stmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 204;
	            this.inc_stmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 205;
	            this.dec_stmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 206;
	            this.if_stmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 207;
	            this.if_else_stmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 208;
	            this.while_stmt();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 209;
	            this.for_stmt();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 210;
	            this.var_stmt();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 211;
	            this.return_stmt();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 212;
	            this.expression(0);
	            this.state = 213;
	            this.match(GlacierParser.END_STMT);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 215;
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
	        this.state = 218;
	        this.identifier();
	        this.state = 219;
	        this.match(GlacierParser.ASSIGN);
	        this.state = 220;
	        this.expression(0);
	        this.state = 221;
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
	        this.state = 223;
	        this.match(GlacierParser.T__7);
	        this.state = 224;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 225;
	        this.any();
	        this.state = 226;
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
	        this.state = 229; 
	        this._errHandler.sync(this);
	        var _alt = 1+1;
	        do {
	        	switch (_alt) {
	        	case 1+1:
	        		this.state = 228;
	        		this.matchWildcard();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 231; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
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
	        this.state = 233;
	        this.identifier();
	        this.state = 234;
	        this.match(GlacierParser.ADDASSIGN);
	        this.state = 235;
	        this.value();
	        this.state = 236;
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
	        this.state = 238;
	        this.identifier();
	        this.state = 239;
	        this.match(GlacierParser.SUBASSIGN);
	        this.state = 240;
	        this.value();
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



	mul_assign_stmt() {
	    let localctx = new Mul_assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GlacierParser.RULE_mul_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.identifier();
	        this.state = 244;
	        this.match(GlacierParser.MULASSIGN);
	        this.state = 245;
	        this.value();
	        this.state = 246;
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
	        this.state = 248;
	        this.identifier();
	        this.state = 249;
	        this.match(GlacierParser.DIVASSIGN);
	        this.state = 250;
	        this.value();
	        this.state = 251;
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
	        this.state = 253;
	        this.identifier();
	        this.state = 254;
	        this.match(GlacierParser.INCREMENT);
	        this.state = 255;
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
	        this.state = 257;
	        this.identifier();
	        this.state = 258;
	        this.match(GlacierParser.DECREMENT);
	        this.state = 259;
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
	        this.state = 261;
	        this.match(GlacierParser.IF);
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



	if_else_stmt() {
	    let localctx = new If_else_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GlacierParser.RULE_if_else_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(GlacierParser.IF);
	        this.state = 268;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 269;
	        this.boolexpr();
	        this.state = 270;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 271;
	        this.statement();
	        this.state = 272;
	        this.match(GlacierParser.ELSE);
	        this.state = 273;
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
	        this.state = 275;
	        this.match(GlacierParser.WHILE);
	        this.state = 276;
	        this.match(GlacierParser.OPEN_BRACKET);
	        this.state = 277;
	        this.boolexpr();
	        this.state = 278;
	        this.match(GlacierParser.CLOSE_BRACKET);
	        this.state = 279;
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
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.match(GlacierParser.FOR);
	            this.state = 282;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 283;
	            this.var_stmt();
	            this.state = 284;
	            this.boolexpr();
	            this.state = 285;
	            this.match(GlacierParser.END_STMT);
	            this.state = 289;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 286;
	                this.inc_stmt();
	                break;

	            case 2:
	                break;

	            case 3:
	                this.state = 288;
	                this.dec_stmt();
	                break;

	            }
	            this.state = 291;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 292;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 294;
	            this.match(GlacierParser.FOR);
	            this.state = 295;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 296;
	            this.var_stmt();
	            this.state = 297;
	            this.match(GlacierParser.T__8);
	            this.state = 298;
	            this.value();
	            this.state = 299;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            this.state = 300;
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
	        this.state = 318;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(GlacierParser.VAR);
	            this.state = 305;
	            this.identifier();
	            this.state = 306;
	            this.match(GlacierParser.ASSIGN);
	            this.state = 307;
	            this.expression(0);
	            this.state = 308;
	            this.match(GlacierParser.END_STMT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.match(GlacierParser.VAR);
	            this.state = 311;
	            this.identifier();
	            this.state = 312;
	            this.match(GlacierParser.T__2);
	            this.state = 313;
	            this.type();
	            this.state = 314;
	            this.match(GlacierParser.ASSIGN);
	            this.state = 315;
	            this.expression(0);
	            this.state = 316;
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



	return_stmt() {
	    let localctx = new Return_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GlacierParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(GlacierParser.RETURN);
	        this.state = 321;
	        this.expression(0);
	        this.state = 322;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, GlacierParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 325;
	            this.match(GlacierParser.OPEN_BRACKET);
	            this.state = 326;
	            this.expression(0);
	            this.state = 327;
	            this.match(GlacierParser.CLOSE_BRACKET);
	            break;

	        case 2:
	            this.state = 329;
	            this.classInit();
	            break;

	        case 3:
	            this.state = 330;
	            this.methodcall();
	            break;

	        case 4:
	            this.state = 331;
	            this.value();
	            break;

	        case 5:
	            this.state = 332;
	            this.identifier();
	            break;

	        case 6:
	            this.state = 333;
	            this.boolexpr();
	            break;

	        case 7:
	            this.state = 334;
	            this.string();
	            break;

	        case 8:
	            this.state = 335;
	            this.object();
	            break;

	        case 9:
	            this.state = 336;
	            this.list();
	            break;

	        case 10:
	            this.state = 337;
	            this.string_concat();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 354;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 352;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, GlacierParser.RULE_expression);
	                    this.state = 340;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 341;
	                    this.match(GlacierParser.ADD);
	                    this.state = 342;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, GlacierParser.RULE_expression);
	                    this.state = 343;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 344;
	                    this.match(GlacierParser.SUB);
	                    this.state = 345;
	                    this.expression(4);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, GlacierParser.RULE_expression);
	                    this.state = 346;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 347;
	                    this.match(GlacierParser.MUL);
	                    this.state = 348;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, GlacierParser.RULE_expression);
	                    this.state = 349;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 350;
	                    this.match(GlacierParser.DIV);
	                    this.state = 351;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 356;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    this.enterRule(localctx, 60, GlacierParser.RULE_math);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 357;
	            this.expression(0);
	            this.state = 358;
	            this.match(GlacierParser.ADD);
	            this.state = 359;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 361;
	            this.expression(0);
	            this.state = 362;
	            this.match(GlacierParser.SUB);
	            this.state = 363;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 365;
	            this.expression(0);
	            this.state = 366;
	            this.match(GlacierParser.MUL);
	            this.state = 367;
	            this.expression(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 369;
	            this.expression(0);
	            this.state = 370;
	            this.match(GlacierParser.DIV);
	            this.state = 371;
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
	    this.enterRule(localctx, 62, GlacierParser.RULE_boolexpr);
	    try {
	        this.state = 412;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 375;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.match(GlacierParser.TRUE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 377;
	            this.match(GlacierParser.FALSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 378;
	            this.value();
	            this.state = 379;
	            this.match(GlacierParser.GREATER_THAN);
	            this.state = 380;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 382;
	            this.value();
	            this.state = 383;
	            this.match(GlacierParser.LESS_THAN);
	            this.state = 384;
	            this.boolexpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 386;
	            this.value();
	            this.state = 387;
	            this.match(GlacierParser.EQUAL_TO);
	            this.state = 388;
	            this.boolexpr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 390;
	            this.value();
	            this.state = 391;
	            this.match(GlacierParser.NOT_EQUAL_TO);
	            this.state = 392;
	            this.boolexpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 394;
	            this.value();
	            this.state = 395;
	            this.match(GlacierParser.GREATER_THAN_OR_EQUAL);
	            this.state = 396;
	            this.boolexpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 398;
	            this.value();
	            this.state = 399;
	            this.match(GlacierParser.LESS_THAN_OR_EQUAL);
	            this.state = 400;
	            this.boolexpr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 402;
	            this.value();
	            this.state = 403;
	            this.match(GlacierParser.OR);
	            this.state = 404;
	            this.boolexpr();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 406;
	            this.value();
	            this.state = 407;
	            this.match(GlacierParser.AND);
	            this.state = 408;
	            this.boolexpr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 410;
	            this.match(GlacierParser.NOT);
	            this.state = 411;
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
	    this.enterRule(localctx, 64, GlacierParser.RULE_value);
	    try {
	        this.state = 416;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 52:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 414;
	            this.identifier();
	            break;
	        case 53:
	        case 56:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 415;
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
	    this.enterRule(localctx, 66, GlacierParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
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
	    this.enterRule(localctx, 68, GlacierParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        _la = this._input.LA(1);
	        if(!(_la===53 || _la===56)) {
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
	    this.enterRule(localctx, 70, GlacierParser.RULE_list);
	    var _la = 0;
	    try {
	        this.state = 435;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 422;
	            this.match(GlacierParser.T__9);

	            this.state = 423;
	            this.expression(0);
	            this.state = 428;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 424;
	                this.match(GlacierParser.T__3);
	                this.state = 425;
	                this.expression(0);
	                this.state = 430;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 431;
	            this.match(GlacierParser.T__10);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 434;
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
	    this.enterRule(localctx, 72, GlacierParser.RULE_object);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this.match(GlacierParser.OPEN_CURLEY);
	        this.state = 444;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 438;
	            this.string();
	            this.state = 439;
	            this.match(GlacierParser.T__2);
	            this.state = 440;
	            this.data();
	            this.state = 446;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        this.state = 447;
	        this.match(GlacierParser.T__3);
	        this.state = 454;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 448;
	            this.string();
	            this.state = 449;
	            this.match(GlacierParser.T__2);
	            this.state = 450;
	            this.data();
	            this.state = 456;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 457;
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
	    this.enterRule(localctx, 74, GlacierParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
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
	    this.enterRule(localctx, 76, GlacierParser.RULE_string_concat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 461;
	            this.string();
	            break;

	        case 2:
	            break;

	        case 3:
	            this.state = 463;
	            this.data();
	            break;

	        }
	        this.state = 466;
	        this.match(GlacierParser.ADD);
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
	        this.state = 480;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 472;
	                this.match(GlacierParser.ADD);
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
	            }
	            this.state = 482;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
	    this.enterRule(localctx, 78, GlacierParser.RULE_data);
	    try {
	        this.state = 491;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 483;
	            this.string();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 484;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 485;
	            this.number();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 486;
	            this.boolexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 487;
	            this.object();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 488;
	            this.value();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 489;
	            this.classInit();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 490;
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
	    this.enterRule(localctx, 80, GlacierParser.RULE_type);
	    try {
	        this.state = 500;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 19:
	        case 36:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 494;
	            this.match(GlacierParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 495;
	            this.match(GlacierParser.T__12);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 496;
	            this.match(GlacierParser.T__13);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 497;
	            this.match(GlacierParser.T__14);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 498;
	            this.match(GlacierParser.T__15);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 499;
	            this.match(GlacierParser.T__16);
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
GlacierParser.OPEN_BRACKET = 18;
GlacierParser.CLOSE_BRACKET = 19;
GlacierParser.OPEN_CURLEY = 20;
GlacierParser.CLOSE_CURLEY = 21;
GlacierParser.END_STMT = 22;
GlacierParser.ADD = 23;
GlacierParser.SUB = 24;
GlacierParser.MUL = 25;
GlacierParser.DIV = 26;
GlacierParser.GREATER_THAN = 27;
GlacierParser.LESS_THAN = 28;
GlacierParser.EQUAL_TO = 29;
GlacierParser.NOT_EQUAL_TO = 30;
GlacierParser.GREATER_THAN_OR_EQUAL = 31;
GlacierParser.LESS_THAN_OR_EQUAL = 32;
GlacierParser.OR = 33;
GlacierParser.AND = 34;
GlacierParser.NOT = 35;
GlacierParser.ASSIGN = 36;
GlacierParser.ADDASSIGN = 37;
GlacierParser.SUBASSIGN = 38;
GlacierParser.MULASSIGN = 39;
GlacierParser.DIVASSIGN = 40;
GlacierParser.IF = 41;
GlacierParser.ELSE = 42;
GlacierParser.INCREMENT = 43;
GlacierParser.DECREMENT = 44;
GlacierParser.DEF = 45;
GlacierParser.VAR = 46;
GlacierParser.WHILE = 47;
GlacierParser.FOR = 48;
GlacierParser.RETURN = 49;
GlacierParser.TRUE = 50;
GlacierParser.FALSE = 51;
GlacierParser.IDENTIFIER = 52;
GlacierParser.PI = 53;
GlacierParser.STRING = 54;
GlacierParser.LIST = 55;
GlacierParser.NUMBER = 56;
GlacierParser.LINECOMMENT = 57;
GlacierParser.BLOCKCOMMENT = 58;
GlacierParser.WHITESPACE = 59;

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
GlacierParser.RULE_math = 30;
GlacierParser.RULE_boolexpr = 31;
GlacierParser.RULE_value = 32;
GlacierParser.RULE_identifier = 33;
GlacierParser.RULE_number = 34;
GlacierParser.RULE_list = 35;
GlacierParser.RULE_object = 36;
GlacierParser.RULE_string = 37;
GlacierParser.RULE_string_concat = 38;
GlacierParser.RULE_data = 39;
GlacierParser.RULE_type = 40;

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

	DEF() {
	    return this.getToken(GlacierParser.DEF, 0);
	};

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

	OPEN_BRACKET() {
	    return this.getToken(GlacierParser.OPEN_BRACKET, 0);
	};

	func_params() {
	    return this.getTypedRuleContext(Func_paramsContext,0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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
	    return this.getToken(GlacierParser.CLOSE_BRACKET, 0);
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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
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

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GlacierParser.ADD);
	    } else {
	        return this.getToken(GlacierParser.ADD, i);
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
GlacierParser.MathContext = MathContext; 
GlacierParser.BoolexprContext = BoolexprContext; 
GlacierParser.ValueContext = ValueContext; 
GlacierParser.IdentifierContext = IdentifierContext; 
GlacierParser.NumberContext = NumberContext; 
GlacierParser.ListContext = ListContext; 
GlacierParser.ObjectContext = ObjectContext; 
GlacierParser.StringContext = StringContext; 
GlacierParser.String_concatContext = String_concatContext; 
GlacierParser.DataContext = DataContext; 
GlacierParser.TypeContext = TypeContext; 
