import { readFileSync, writeFileSync } from 'fs'
import { parseSync } from '@swc/core';
function parse(file) {
    file=readFileSync(file).toString()
    var ast =[]
    var imports=extractImports(file)
    processImports(imports).forEach(elm=>ast.push(elm))
    const swcAst = parseSync(file, { syntax: "typescript" });
    parseNode(swcAst)
    return ast
}
function extractImports(file){
    return file.split(';').filter((elm)=>{
        if(elm.indexOf('import')==0){
            elm=elm.replace('import','')
            
        }else{
            return false
        }
    })
}
function parseNode(node,ast) {
    var body = getBody(node)
    if (!(JSON.stringify(body) == '{}')) {
        console.log(body)
        if (body instanceof Array) { 
            body.forEach(elm=>{
                astNodeHandler(elm,parseNode)
            })
        } else {
            astNodeHandler(body,parseNode)
        }
    }
    // return parseNode(getBody(node))
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

}
writeFileSync('./src/parser/ast.json', JSON.stringify(parse('./tests/snake.gs')))