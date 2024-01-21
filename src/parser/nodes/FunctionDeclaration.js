import * as util from './../../util.js'
export default (elm, parser, data) => {
    var params = []
    data.functions=data.functions||{}
    elm.params.forEach((param) => {
        params.push({name: param.pat.value, type: util.getType(param.pat.typeAnnotation, data.file)})
    })
    var oldScope=util.copy(data.scope)
    data.scope=`${oldScope}.function:${elm.identifier.value}`
    data.functions[`${elm.identifier.value}|${oldScope}`]={ node: "function", params, scope: oldScope, type: util.getType(elm.returnType, data.file), name: elm.identifier.value, children: parser(elm.body) }
    data.scope=oldScope
    return {elm:data.functions[`${elm.identifier.value}|${data.scope}`],data}
}