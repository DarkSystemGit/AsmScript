import * as util from './../../util.js'
export default (elm,parser)=>{
    var op=elm.operator.replace('=','')
    if(op=="")op=undefined
    //console.dir(parser(elm.right),{depth:null})
    return {node:"assignment",children:parser(elm.right),op,name:parser(elm.left,"memexp")}
}