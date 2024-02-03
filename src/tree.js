import * as util from './util.js'
function getScopedChild(name,scope,nodeList){
	//console.log(nodeList)
    if(nodeList.hasOwnProperty(`${name}|${scope}`)){
		return nodeList[`${name}|${scope}`]
	}else{
		var ret=null
		scope.split('.').forEach((elm,i,arr)=>{
			var current=arr.slice(0,i+1).join('.')
            //util.termLog(current)
			if(nodeList.hasOwnProperty(`${name}|${current}`)){
				ret=nodeList[`${name}|${current}`]
			}
		})
	}
	return ret
}
export function parseScope(scope){
    return scope.split('.').map(elm=>elm.split(':'))
}
export function getFunction(name,scope,nodeList,context){
	//console.log(arguments)
	var func=getScopedChild(...Array.from(arguments))
	if(func==null){
		var classObj=getScopedChild(name.split('.')[0],scope,context.data.function)
		if((!(classObj==null))&&(classObj.type.split(':')[0]=='class')){
			return context.data.classes[classObj.type.split(':')[1]].children.filter(elm=>elm.name==name.split('.')[1])[0] 
		}
	}
	return func
}
export function getVar(name,scope,varList){
    return getScopedChild(...Array.from(arguments))
}
export function getNode(children,nodes,depth,remChildren){
	if(depth!==0){
	nodes.forEach(node=>{
	children.forEach(orgElm=>{
		var elm = util.copy(orgElm)
		if(elm.children){
			getNode(elm.children,nodes,depth-1,remChildren)
		}else if(elm.constructor === Array){
			getNode(elm,nodes,depth-1,remChildren)
		}
		if(elm.node==node){
			if(remChildren){
			elm.children=[]
		}
			data.header=data.header||[]
			data.header.push(elm)
		}
	})})
}
return data.header
}