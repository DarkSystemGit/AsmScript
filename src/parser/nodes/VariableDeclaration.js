import * as util from './../../util.js'
export default (elm,parser,data)=>{
    console.log(elm.declarations)
    data.var=data.var||{}
    elm=elm.declarations[0]
    var name= elm.id.value;
    var children=parser(elm.init)
    data.var[`${name}`]={node:"var",type:children.type,children}
    return {elm:data.var,data}
}