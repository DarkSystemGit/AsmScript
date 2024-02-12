import * as util from './../../util.js'
export default (elm,parser)=>{
    var node="if"
    var children=parser(elm.consequent)
    if(elm.alternate!=null){
        node="ifElse"
        children=[parser(elm.consequent),parser(elm.alternate)]
    }
    return {node,condition:parser(elm.test),children}
}