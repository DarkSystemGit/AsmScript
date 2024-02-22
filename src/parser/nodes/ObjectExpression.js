import * as util from './../../util.js'
export default (elm, parser) => {
    var node = { node: "hashmap" }
    elm.properties.forEach((prop) => {
        node.children.push({ key:prop.key.value, value: parser(prop.value) })
    })
    return node
}