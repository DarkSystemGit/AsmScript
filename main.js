import { buildAst } from "./src/antlr.js"
import * as fs from 'fs' 
import * as path from 'path'
import * as util from './src/util.js'
import * as yaml from 'yaml'
util.info('Glacier Compiler v1.0.0\n'+`Creating Ast for ${path.basename(process.argv[2])}...`)
fs.writeFileSync('./log','{}')
buildAst(path.join(process.cwd(),process.argv[2]))
//console.dir(util.data.asts,{depth:null})
fs.writeFileSync('./ast.json',JSON.stringify(util.data.asts,null,2))
if(process.env.DEBUG=="true"){
    var doc =new yaml.Document()
    doc.contents=util.data.asts
    fs.writeFileSync('./ast.yaml',doc.toString())
}
util.info('Done!')
