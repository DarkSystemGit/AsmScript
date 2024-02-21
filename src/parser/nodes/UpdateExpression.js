import * as util from './../../util.js'
export default (elm,parser)=>{
    var node={node:"dec",type:"number",children:parser(elm.argument)}
    if(elm.operator=='++')node.node='inc'
    return node
}