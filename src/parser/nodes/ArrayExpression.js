import * as util from './../../util.js'
export default (elm,parser)=>{
    var elms=parser(elm.elements)
    console.log(elm)
    return {node:"array"}
}