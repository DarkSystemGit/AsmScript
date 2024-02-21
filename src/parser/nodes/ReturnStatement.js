import * as util from './../../util.js'
export default (elm,parser)=>{
    return {node:"return",children:parser(elm.argument)}
}