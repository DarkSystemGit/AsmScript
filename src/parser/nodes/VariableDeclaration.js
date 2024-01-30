import * as util from './../../util.js'
export default (elm,parser)=>{
    //console.log(this)
    data=this.data
    data.var=data.var||{}
    elm=elm.declarations[0]
    var name= elm.id.value;
    var children=parser(elm.init)
    if(data.var.hasOwnProperty(`${name}|${data.scope}`)){
    if(data.var[`${name}|${data.scope}`].type!=children.type){
        if(data.var[`${name}|${data.scope}`]!=undefined){
            util.error('Illegal Type Assignment','TypeError',elm.span)
        }
    }}
    data.var[`${name}|${data.scope}`]={node:"var",type:children.type,children,name,scope:data.scope}
    return data.var[`${name}|${data.scope}`]
}