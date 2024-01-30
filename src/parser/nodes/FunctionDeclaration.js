import * as util from './../../util.js'
export default (elm, parser) => {
    var params = []
    var data=this.data
    //console.log(data)
    data.functions=data.functions||{}
    elm.params.forEach((param) => {
        params.push({name: param.pat.value, type: util.getType(param.pat.typeAnnotation, data.file)})
    })
    //console.log(data)
    
    var oldScope=util.copy(data.scope)
    data.scope=`${oldScope}.function:${elm.identifier.value}`
    data.functions[`${elm.identifier.value}|${oldScope}`]={ node: "function", params, scope: oldScope, type: util.getType(elm.returnType, data.file), name: elm.identifier.value, children: parser(elm.body) }
    data.scope=oldScope
    return data.functions[`${elm.identifier.value}|${data.scope}`]
}