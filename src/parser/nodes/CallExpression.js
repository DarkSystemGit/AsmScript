import * as util from './../../util.js'
export default (elm,parser)=>{
    //console.dir(elm,{depth:null})
    
    var obj={node:"funcCall"}
    obj.args=[]
    obj.name=parser(elm.callee).flat(Infinity)
    this.data.functions=this.data.functions||{}
    var func=tree.getFunction(obj.name.join('.'),this.data.scope,this.data.functions,this)
    if(func){
        obj.type=func.type
        console.log(func.params)
        for(var i in func.params){

            var arg=parser(elm.arguments[i])
            console.log(arg)
        }
    }
    return obj
}