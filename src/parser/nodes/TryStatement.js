import * as util from './../../util.js'
export default (elm,parser)=>{
    var node={node:"try",children:parser(elm.body)}
    if(elm.handler)node.catch=parser(elm.handler)
    if(elm.finalizer)node.finally=parser(elm.finalizer)
    return node
}