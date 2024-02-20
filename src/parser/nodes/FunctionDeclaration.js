import * as util from './../../util.js'
export default (elm, parser) => {
    var params = []
    var data=this.data
    //console.log(data)
    data.function=data.function||{}
    data.var=data.var||{}
    var oldScope=util.copy(data.scope)
    data.scope=`${oldScope}.function:${elm.identifier.value}`
    elm.params.forEach((param,i) => {
        params.push({name: param.pat.value, type: util.getType(param.pat.typeAnnotation, data.file)})
        data.var[param.pat.value+`|${oldScope}.function:${elm.identifier.value}`]={node:"var",type:util.getType(param.pat.typeAnnotation, data.file),children:[],scope:`${oldScope}.function:${elm.identifier.value}`}
    })
    //console.log(data)
    data.function[`${elm.identifier.value}|${oldScope}`]={ node: "function", params, scope: oldScope, type: util.getType(elm.returnType, data.file), name: elm.identifier.value, children: parser(elm.body) }
    data.scope=oldScope
    return data.function[`${elm.identifier.value}|${data.scope}`]
}