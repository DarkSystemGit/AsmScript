import * as util from './../../util.js'
export default (elm,parser)=>{
    var children=parser(elm.elements)
    //console.log(elm)
    return {node:"array",children,type:'array'}
}