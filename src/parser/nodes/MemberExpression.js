import * as util from './../../util.js'
export default (elm,parser,list)=>{
    var res= [parser(elm.object,"memexp"),parser(elm.property,"memexp")].flat(Infinity)
    if(list)return res
    return {node:"propertyAccess",property:res.join('.')}
}