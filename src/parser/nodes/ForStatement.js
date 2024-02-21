import * as util from './../../util.js'
export default (elm,parser)=>{
    
    return {node:"for",children:parser(elm.body),iterator:parser(elm.init),condition:parser(elm.test),update:parser(elm.update)}
}