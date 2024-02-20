import * as util from './../../util.js'
export default (elm, parser, ex) => {
    if (ex == "memexp") {
        return elm.value
    }else{
        this.data.var=this.data.var||{}
        return {node:"varAccess",children:[],name:elm.value,type:tree.getVar(elm.value,this.data.scope,this.data.var,elm.span).type}
    }
}