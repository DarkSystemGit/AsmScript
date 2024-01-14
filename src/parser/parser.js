
import { parseSync } from'@swc/core';
const ast = parseSync('console.log("Hello, World!")');
console.dir(ast,{depth:null})
