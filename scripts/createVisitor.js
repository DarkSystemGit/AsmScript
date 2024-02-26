import * as path from 'path'
import * as util from './../src/util.js'
import * as fs from 'fs'
import { cwd } from 'process'
import synchronizedPrettier from "@prettier/sync";
var nodes = []
var standard = `import * as util from './../../util.js'
export default (elm,parser)=>{
    
    return {node:""}
}`
fs.readdirSync(path.join(cwd(), '/src/parser/nodes')).forEach((file) => {
    var filename = util.copy(file)
    file = fs.readFileSync(path.join(cwd(), '/src/parser/nodes', file)).toString()
    if ((file != standard) && (filename != 'nodes.json') && (filename != 'generateNodes.js')) {
        var node = file.split('export default', 2)[1].replace('=>', '').trim()
        nodes.push(`${filename.split('.')[0]}${node}`)
    }
})
var classBase = `import * as util from '../util.js'
import * as tree from '../tree.js'
export class Visitor {
    stack=[]
    constructor(data){
        this.data = data
    }
    setData(elm){
        this.data[elm[0]] = elm[1]
    }
    getData(){
        return this.data
    }
    invoke(elm,extra,parseNode){
        
        if (this[elm.type]) var res= this[elm.type](elm, parseNode,...extra.slice(1))
    else{ 
        var bodies=['body', 'stmts', 'expression', 'callee', 'test', 'consequent', 'alternate', 'identifier']
        for(var body in bodies){
            body=bodies[body]
            if(elm[body])elm=elm[body]
        }
        if(elm!=undefined)var res= this.invoke(elm,extra,parseNode)
    }
    this.stack.push({type:elm.type,pos:[elm.span,this.getData().filename],node:res})
    console.log(elm.type)
    return res
    }
    ${nodes.join('\n')}
}`
fs.writeFileSync(path.join(cwd(), '/src/parser/Visitor.js'), synchronizedPrettier.format(classBase, { parser: "espree" }))