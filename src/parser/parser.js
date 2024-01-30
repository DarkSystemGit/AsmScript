import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as tree from './../tree.js'
import * as util from '../util.js'
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(fileURLToPath(import.meta.url));
globalThis.data = { scope: 'function:global' }
function Visitor() {
    this.data = { scope: 'function:global' }

    var nodes = util.dirImport(path.join(__dirname, 'nodes'))
    //console.log(nodes)
    for (var node in nodes) {
        if(node!='generateNodes')this[node] = eval(nodes[node])
        
    }
    //console.log(Object.keys(this))
    this.setData = (elm) => {
        this.data[elm[0]] = elm[1]
    }
}
var visitor = new Visitor()
function parse(file) {
    //stack.push('parse', data)
    file = readFileSync(file).toString()
    var ast = []
    var imports = extractImports(file)
    file = imports[1]
    visitor.setData(['file', file])
    imports[0].forEach(elm => ast.push(elm))
    //console.log('file:',file+'\n',ast)
    const swcAst = parseSync(file, { syntax: "typescript" });
    writeFileSync(path.join(__dirname,'swcAst.json'),JSON.stringify(swcAst))
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
                //stack.push('parseNode', data)
                //console.log('parseNode:',data)
                var node = astNodeHandler(elm, parseNode)
                ast.push(node)

                if (data == undefined) {
                    //console.log(body.type)
                    throw new Error(elm.type)
                }
            })
        } else {
            //stack.push('parseNode', data)
            var node = astNodeHandler(body, parseNode)
            ast.push(node)

            if (data == undefined) {
                throw new Error(body.type)

            }
        }
    }
    //console.log(ast)
    return ast
}
function getBody(node) {
    //stack.push('getBody', data)
    var bodies = ['body', 'stmts', 'expression', 'callee', 'test', 'consequent', 'alternate', 'identifier']
    var body = node
    bodies.forEach((elm) => {
        if (node.hasOwnProperty(elm)) {
            body = node[elm]
        }
    })
    return body

}
function astNodeHandler(elm, parser) {
    // console.log(data,elm.type,/*(new Error()).stack*/)
    //stack.push('astNodeHandler', data, elm.type)
    console.log(visitor.hasOwnProperty(elm.type),elm.type)
    if (visitor[elm.type]) return visitor[elm.type](elm, parseNode)
    else return astNodeHandler(getBody(elm))
}

writeFileSync(path.join(__dirname,'ast.json'), JSON.stringify(parse(path.join(__dirname , '../../tests/snake.gs'))))
