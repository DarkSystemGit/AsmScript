import { readFileSync, writeFileSync, existsSync } from 'fs'
import { parseSync } from '@swc/core';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as tree from './../tree.js'
import * as util from '../util.js'
import * as process from 'process'
import { Visitor } from './Visitor.js';
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(fileURLToPath(import.meta.url));
var visitor = new Visitor({ scope: 'function:global' })
function parse(file) {
    //stack.push('parse', data)
    file = readFileSync(file).toString()
    var ast = []
    
    var imports = extractImports(file,visitor)
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
function importAst(file,visitor){
    try{
    var filename=path.join(process.cwd(),path.dirname(process.argv[2]),file+'.gs')
    var type='file'
    if(!existsSync(path.join(process.cwd(),path.dirname(process.argv[2]),file+'.gs'))){
        filename=path.join(__dirname,'stdlib',file+'.json')
        type='std'
    }
    if(type=='std'){
        var file=JSON.parse(readFileSync(filename))
    }else{
        var file=parse(filename)
    }
    //console.log(file)
    tree.getNode(file,["function","var","class"],1,false).forEach(node=>visitor.setData([node.node,node]))
    }catch(e){
        console.log(e)
        //util.error(`File ${file} cannot be found`,'ImportError',{start:0,end:0},visitor.data)
    }
}
function extractImports(file,visitor) {
    var lines = 0
    var tl=0
    var imports = file.split(';').flatMap((elm) => {
        elm = elm.trim()
        if (elm.indexOf('import') == 0) {
            lines++
            elm = elm.replace('import', '').trim()

            importAst(elm,visitor)

            return [{ node: 'import', name: elm }]
        } else {
            return []
        }
    })
    file.split('\n').forEach(e=>{if(e.trim().indexOf('import') == 0){tl++;}})
    visitor.setData(['imports',tl])
    JSON.parse(readFileSync(path.join(__dirname,'stdlib','std.json'))).forEach(lib=>importAst(lib,visitor))
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
                if (data != undefined) {
                    ast.push(node)
                }
            }})
        } else {
            //stack.push('parseNode', data)
            if(body.type!='EmptyStatement'){
            var node = astNodeHandler(body, args)
            if (data != undefined) {
                ast.push(node)
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


    if (visitor[elm.type]) return visitor[elm.type](elm, parseNode,...extra.slice(1))
    else return astNodeHandler(getBody(elm),extra)
}

writeFileSync(path.join(__dirname,'ast.json'), JSON.stringify(parse(path.join(process.cwd() , process.argv[2])),null, 2))
//console.log(data)