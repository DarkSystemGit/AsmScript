import * as util from './../../util.js'
export default (elm,parser)=>{
    return {node:"while",condition:parser(elm.test),children:parser(elm.body)}
}