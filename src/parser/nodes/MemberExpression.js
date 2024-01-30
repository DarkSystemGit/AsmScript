import * as util from './../../util.js'
export default (elm,parser)=>{
    return [parser(elm.object),parser(elm.property)].flat(Infinity)
}