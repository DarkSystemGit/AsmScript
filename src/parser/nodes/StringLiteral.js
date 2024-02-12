import * as util from './../../util.js'
export default (elm,parser)=>{
    console.log(elm)
    return {node:"literal",type:"string",value:elm.value}
}