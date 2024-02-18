import { Tree } from 'antlr4/src/antlr4/tree/Tree.js'
import * as util from './../../util.js'
export default (elm, parser, ex) => {
    if (ex == "memexp") {
        return elm.value
    }else{
        return {node:"varAccess",children:[],name:elm.value,type:tree.getVar(elm.value,this.data.scope,this.data.var,elm.span)}
    }
}