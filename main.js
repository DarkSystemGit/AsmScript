import { buildAst } from "./src/antlr.js"
import * as fs from 'fs' 
import * as path from 'path'
console.log('Glacier Compiler v1.0.0\n'+`Creating Ast for ${path.basename(process.argv[2])}...`)
fs.writeFileSync('./log','{}')
fs.writeFileSync('./ast.json',JSON.stringify(buildAst(process.argv[2]),null,2))
console.log('Done!')
