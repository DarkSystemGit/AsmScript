import { parse } from "./src/parser/parser.js"
import * as fs from 'fs' 
import * as path from 'path'
import * as util from './src/util.js'
import * as yaml from 'yaml'
util.info('Glacier Compiler v1.0.0\n'+`Creating Ast for ${path.basename(process.argv[2])}...`)
util.write('./log','{}')
parse(path.join(process.cwd(),process.argv[2]))
//console.dir(util.data.asts,{depth:null})
util.write('./ast.json',JSON.stringify(util.data.asts,null,2))
/*if(process.env.DEBUG=="true"){
    var doc =new yaml.Document()
    doc.contents=util.data.asts
    util.write('./ast.yaml',doc.toString())
}*/
util.info('Done!')
