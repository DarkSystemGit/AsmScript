import { buildAst } from "./src/antlr.js"
import * as fs from 'fs' 
import * as path from 'path'
import * as util from './src/util.js'
util.info('Glacier Compiler v1.0.0\n'+`Creating Ast for ${path.basename(process.argv[2])}...`)
fs.writeFileSync('./log','{}')
buildAst(path.join(process.cwd(),process.argv[2]))
//console.dir(util.data.asts,{depth:null})
fs.writeFileSync('./ast.json',JSON.stringify(util.data.asts,null,2))
util.info('Done!')
