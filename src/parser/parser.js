import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as util from '../util.js'
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(fileURLToPath(import.meta.url));
globalThis.data = { scope: 'function:global' }
class Visitor{
    static data={ scope: 'function:global' }
    constructor(){
        var nodes=util.dirImport(path.join(__dirname, 'nodes'))
        for(node in nodes){
            this[node]=nodes[node]
        }
    }
}
var visitor=new Visitor()
function parse(file) {
    stack.push('parse', data)
    file = readFileSync(file).toString()
    var ast = []
    var imports = extractImports(file)
    file = imports[1]
    visitor.data.file = file
    imports[0].forEach(elm => ast.push(elm))
    //console.log('file:',file+'\n',ast)
    const swcAst = parseSync(file, { syntax: "typescript" });
    parseNode(swcAst).forEach(elm => ast.push(elm))
    return ast
}
function extractImports(file) {
    var lines = 0
    var imports = file.split(';').flatMap((elm) => {
        elm = elm.trim()
        if (elm.indexOf('import') == 0) {
            lines++
            elm = elm.replace('import', '').trim()
            //console.log(elm)
            return [{ node: 'import', name: elm }]
        } else {
            return []
        }
    })
    file = file.split(';').filter((elm, i) => i + 1 > lines).join(';')
    return [imports, file]
}
function parseNode(node) {

    var body = getBody(node)
    var ast = []
    if (!(JSON.stringify(body) == '{}')) {

        if (body instanceof Array) {
            body.forEach(elm => {
                stack.push('parseNode', data)
                //console.log('parseNode:',data)
                var node = astNodeHandler(elm, parseNode)
                ast.push(node.elm)
                
                if (data == undefined) {
                    //console.log(body.type)
                    throw new Error(elm.type)
                }
            })
        } else {
            stack.push('parseNode', data)
            var node = astNodeHandler(body, parseNode)
            ast.push(node.elm)
            
            if (data == undefined) {
                throw new Error(body.type)
                
            }
        }
    }
    //console.log(ast)
    return ast
}
function getBody(node) {
    stack.push('getBody', data)
    var bodies = ['body', 'stmts', 'expression', 'callee', 'test', 'consequent', 'alternate', 'identifier']
    var body = {}
    bodies.forEach((elm) => {
        if (node.hasOwnProperty(elm)) {
            body = node[elm]
        }
    })
    return body

}
function astNodeHandler(elm, parser) {
    // console.log(data,elm.type,/*(new Error()).stack*/)
    stack.push('astNodeHandler', data, elm.type)
    //console.log(stack)
    if (nodeHandlers[elm.type]) return visitor[elm.type](elm,parseNode)
    else return astNodeHandler(getBody(elm))
}

writeFileSync('./src/parser/ast.json', JSON.stringify(parse('./tests/snake.gs')))
