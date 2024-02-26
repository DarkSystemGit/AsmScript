import * as util from './../../util.js'
export default (elm,parser)=>{
    //console.log(elm)
    return {node:"classDec",name:elm.identifier.value,children:parser(elm.body),extends:elm.implements}
}