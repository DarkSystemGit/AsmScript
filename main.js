import { buildTree } from "./src/antlr.js"
import * as fs from 'fs' 
fs.writeFileSync('./ast.json',JSON.stringify(buildTree(process.argv[2]),null,2))
