import * as util from './util.js'
function getScopedChild(name,scope,nodeList){
    if(nodeList.hasOwnProperty(`${name}|${scope}`)){
		return nodeList[`${name}|${scope}`]
	}else{
		var ret=null
		scope.split('.').forEach((elm,i,arr)=>{
			var current=arr.slice(0,i+1).join('.')
            //console.log(current)
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
export function getFunction(name,scope,nodeList){
	return getScopedChild(...Array.from(arguments))
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
		if(elm.type==node){
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