import * as util from './../../util.js'
export default (elm, parser, ex) => {
    if (ex == "memexp") {
        return elm.value
    }else{
        this.data.var=this.data.var||{}
        var type=tree.getVar(elm.value,this.data.scope,this.data.var,elm.span,this.data)
        if(type!=undefined)type=type.type;else{type="void"}
        return {node:"varAccess",children:[],name:elm.value,type}
    }
}