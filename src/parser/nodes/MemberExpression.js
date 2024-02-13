import * as util from './../../util.js'
export default (elm,parser)=>{
    return [parser(elm.object,"memexp"),parser(elm.property,"memexp")].flat(Infinity)
}