import * as util from './../../util.js'
export default (elm,parser)=>{
    var node;
    var type;
    util.checkOp(['~'],()=>{node='bitwise';type='binary'},elm)
    util.checkOp(['delete'],()=>{node='delete'})
    return {node,type,children:parser(argument)}
}