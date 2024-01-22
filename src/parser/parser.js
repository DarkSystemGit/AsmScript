import { readFileSync, writeFileSync,readdirSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as util from '../util.js'
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(fileURLToPath(import.meta.url));

var data=global.data={scope:'function:global'}
var nodeHandlers=util.dirImport(path.join(__dirname,'nodes'))
function parse(file) {
    file=readFileSync(file).toString()
    var ast =[]
    var imports=extractImports(file)
    file=imports[1]
    data.file=file
    imports[0].forEach(elm=>ast.push(elm))
    //console.log('file:',file+'\n',ast)
    const swcAst = parseSync(file, { syntax: "typescript" });
    parseNode(swcAst).forEach(elm=>ast.push(elm))
    return ast
}
function extractImports(file){
    var lines=0
    var imports=file.split(';').flatMap((elm)=>{
        elm= elm.trim()
        if(elm.indexOf('import')==0){
            lines++
            elm=elm.replace('import','').trim()
            //console.log(elm)
            return [{node:'import',name:elm}]
        }else{
            return []
        }
    })
    file=file.split(';').filter((elm,i)=>i+1>lines).join(';')
    return [imports,file]
}
function parseNode(node) {
    var body = getBody(node)
    var ast=[]
    if (!(JSON.stringify(body) == '{}')) {
        console.log(body)
        if (body instanceof Array) { 
            body.forEach(elm=>{
                var node=astNodeHandler(elm,parseNode)
                ast.push(node.elm)
                data=node.data

            })
        } else {
            var node=astNodeHandler(body,parseNode)
                ast.push(node.elm)
                data=node.data
        }
    }
    //console.log(ast)
    return ast
}
function getBody(node) {
    var bodies=['body','stmts','expression','callee','test','consequent','alternate','identifier']
    var body ={}
    bodies.forEach((elm)=>{
        if(node.hasOwnProperty(elm)){
            body=node[elm]
        }
    })
    return body
    
}
function astNodeHandler(elm,parser){
   // console.log(data)
    if(nodeHandlers[elm.type])return nodeHandlers[elm.type](elm,parser,global.data)
    else return parser(elm)
}

writeFileSync('./src/parser/ast.json', JSON.stringify(parse('./tests/snake.gs')))
