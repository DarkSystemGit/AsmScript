import * as util from './../../util.js'
export default (elm,parser)=>{
    var inserts=parser(elm.expressions)
    var node={node:"templateLit",type:"string",value:[]}
    parser(elm.quasis).forEach((str,i) => {
        var cleaned=util.copy(str)
        delete cleaned.tail
        if(cleaned.value!="")node.value.push(cleaned)
        if(str.tail!=true)node.value.push(inserts[i])
    });
    return node
}