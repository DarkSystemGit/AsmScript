import { readFileSync, writeFileSync, existsSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import * as tree from './../tree.js'
import * as util from '../util.js'
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(fileURLToPath(import.meta.url));
var data = { scope: 'function:global' }
function Visitor() {
    this.data = data

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
    tree.getNode(ast,["function","var","class"],1,true)
    ast ={ast,headers:data.headers}
    //console.log(data)
    return ast
}
function importAst(file){
    try{
    var filename=path.join(process.cwd(),file+'.json')
    var type='file'
    if(!existsSync(path.join(process.cwd(),file+'.json'))){
        filename=path.join(__dirname,'stdlib',file+'.json')
        type='std'
    }
    if(type=='std'){
        var file=JSON.parse(readFileSync(filename))
    }else{
        var file=parse(filename)
    }
    //console.log(file)
    tree.getNode(file,["function","var","class"],1,false).forEach(node=>data[node.node]=node)
    }catch{
        util.error(`File ${file} cannot be found`,'ImportError',)
    }
}
function extractImports(file) {
    var lines = 0
    var imports = file.split(';').flatMap((elm) => {
        elm = elm.trim()
        if (elm.indexOf('import') == 0) {
            lines++
            elm = elm.replace('import', '').trim()
            //console.log(elm)
            importAst(elm)

            return [{ node: 'import', name: elm }]
        } else {
            return []
        }
    })
    JSON.parse(readFileSync(path.join(__dirname,'stdlib','std.json'))).forEach(lib=>importAst(lib))
    file = file.split(';').filter((elm, i) => i + 1 > lines).join(';')
    return [imports, file]
}
function parseNode(node) {

    var body = getBody(node)
    var ast = []
    if (!(JSON.stringify(body) == '{}')) {
        var args=Array.from(arguments)
        
        if (body instanceof Array) {
            
            body.forEach(elm => {
                //stack.push('parseNode', data)
                //console.log('parseNode:',data)
                if(elm.type!='EmptyStatement'){
                    
                var node = astNodeHandler(elm, args)
                ast.push(node)

                if (data == undefined) {
                    //console.log(body.type)
                    throw new Error(elm.type)
                }
            }})
        } else {
            //stack.push('parseNode', data)
            if(body.type!='EmptyStatement'){
            var node = astNodeHandler(body, args)
            ast.push(node)
                
            if (data == undefined) {
                throw new Error(body.type)

            }}
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
function astNodeHandler(elm, extra) {
    // console.log(data,elm.type,/*(new Error()).stack*/)
    //stack.push('astNodeHandler', data, elm.type)
    //console.log(extra)
    console.log(visitor.hasOwnProperty(elm.type),elm.type)
    if (visitor[elm.type]) return visitor[elm.type](elm, parseNode,...extra.slice(1))
    else return astNodeHandler(getBody(elm),extra)
}

writeFileSync(path.join(__dirname,'ast.json'), JSON.stringify(parse(path.join(__dirname , '../../tests/fakeHome.gs')),null, 2))
//console.log(data)