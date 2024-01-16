import { readFileSync, writeFileSync,readdirSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as importSync from 'import-sync'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));


function parse(file) {
    file=readFileSync(file).toString()
    var ast =[]
    var imports=extractImports(file)
    file=imports[1]
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
        //console.log(body)
        if (body instanceof Array) { 
            body.forEach(elm=>{
                ast.push(astNodeHandler(elm,parseNode))
            })
        } else {
            ast.push(astNodeHandler(body,parseNode))
        }
    }
    return ast
}
function getBody(node) {
    var bodies=['body','stmts','expression','callee']
    var body ={}
    bodies.forEach((elm)=>{
        if(node.hasOwnProperty(elm)){
            body=node[elm]
        }
    })
    return body
    
}
function astNodeHandler(elm,parser){
    console.log(elm)
}
function dirImport(dir){
    const basename = path.basename(__filename);
    const functions = {}
readdirSync(dir,{ recursive: true }).filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .map(function (file){functions[file.slice(0, -3).split('/').at(-1)] = importSync.default(path.join(__dirname, file)).default})
  return functions
}
writeFileSync('./src/parser/ast.json', JSON.stringify(parse('./tests/snake.gs')))
console.log()