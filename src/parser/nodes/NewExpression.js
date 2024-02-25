import * as util from './../../util.js'
export default (elm,parser)=>{
    var params=[]
    elm.arguments.forEach((param)=>{params.push(parser(param.expression))})

    return {node:"classInit",name:elm.callee.value,params}
}