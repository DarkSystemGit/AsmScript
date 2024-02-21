import * as util from './../../util.js'
export default (elm,parser)=>{
    //console.dir(elm,{depth:null})
    
    var obj={node:"funcCall"}
    obj.args=[]
    obj.name=parser(elm.callee,true).flat(Infinity).join('.')
    this.data.function=this.data.function||{}
    var func=tree.getFunction(obj.name,this.data.scope,this.data.function,this)
    elm.arguments.forEach(arg => {
        obj.args.push(parser(arg.expression))
    });
    if(func){
        obj.type=func.type
        //console.log(func)
    }else{
        util.error('No such function: '+obj.name,'Access',elm.span,this.data)
    }
    return obj
}