import * as util from './../../util.js'
export default (elm,parser)=>{
    //console.dir(elm,{depth:null})
    
    var obj={node:"funcCall"}
    obj.args=[]
    obj.name=parser(elm.callee).flat(Infinity).join('.')
    this.data.function=this.data.function||{}
    var func=tree.getFunction(obj.name,this.data.scope,this.data.function,this)
    if(func){
        obj.type=func.type
        console.log(func)
        for(var i in func.params){

            var arg=parser(elm.arguments[i])
            console.log(elm.arguments,i,elm)
        }
    }
    return obj
}