import * as util from './../../util.js'
export default (elm,parser)=>{
    var params = []
    var data=this.data
    //console.log(data)
    data.class=data.class||{}
    data.var=data.var||{}
    var oldScope=util.copy(data.scope)
    data.scope=`${oldScope}.class:${elm.key.value}`
    elm.function.params.forEach((param,i) => {
        params.push({name: param.pat.value, type: util.getType(param.pat.typeAnnotation, data.file)})
        data.var[param.pat.value+`|${oldScope}.class:${elm.key.value}`]={node:"var",type:util.getType(param.pat.typeAnnotation, data.file),children:[],scope:`${oldScope}.function:${elm.identifier.value}`}
    })
    //console.log(data)
    data.function[`${elm.key.value}|${oldScope}`]={ node: "method", params, scope: oldScope, type: util.getType(elm.returnType, data.file), name: elm.key.value, children: parser(elm.body) }
    data.scope=oldScope
    return {node:""}
}