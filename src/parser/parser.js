import { readFileSync, writeFileSync } from 'fs'
import { parseSync } from '@swc/core';
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
writeFileSync('./src/parser/ast.json', JSON.stringify(parse('./tests/snake.gs')))