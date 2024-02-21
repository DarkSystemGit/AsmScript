import * as util from './../../util.js'
export default (elm,parser)=>{
    var node;
    var type;
    util.checkOp(['~'],()=>{node='bitwise';type='binary'},elm)
    util.checkOp(['delete'],()=>{node='delete';},elm)
    util.checkOp(['typeof'],()=>{node='typeof';type="string"},elm)
    util.checkOp(['!'],()=>{node='logic';type='bool'},elm)
    util.checkOp(['-'],()=>{node='literal';type='number'},elm)
    if(type=='number')return {node,type,value:parser(elm.argument).value}
    return {node,type,children:parser(elm.argument),operation:elm.operator}
}