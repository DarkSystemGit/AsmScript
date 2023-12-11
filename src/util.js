//console.log(readFileSync(process.argv[2]))
import {writeFileSync,readFileSync} from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { isGeneratorFunction } from 'util/types';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
writeFileSync('./log','{}')
export var data=globalThis.data={}

export function hasKey(obj, key) {
	if (obj === null || obj === undefined) {
	  return false;
	}
	if (obj.hasOwnProperty(key)) {
	  return true;
	}
	for (const k in obj) {
	  if (hasKey(obj[k], key)) {
		return true;
	  }
	}
	return false;
  }
  export function indexOf(searchStr, str, caseSensitive) {
	var searchStrLen = searchStr.length;
	if (searchStrLen == 0) {
		return [];
	}
	var startIndex = 0, index, indices = [];
	if (!caseSensitive) {
		str = str.toLowerCase();
		searchStr = searchStr.toLowerCase();
	}
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indices.push(index);
		startIndex = index + searchStrLen;
	}
	return indices;
}
export function replaceAt(str, index, replacement, length) {
	return str.substring(0, index) + replacement + str.substring(index + length);
}
export function inString(char, stringMap) {
	var ret = false

	stringMap.forEach((item) => {
		try {
			//console.log(char >= item[0], char <= item[1])
			if ((char >= item[0]) && (char <= item[1])) {
				ret = true
			}
		} catch (error) {

			return
		}

	})

	return ret
}
export function genStrMap(str) {
	var stringMap = []
	var strs = indexOf('"', str, true)
	strs.forEach((section, i) => {

		if ((i % 2 == 0)) {
			stringMap.push([strs[i], strs[i + 1]])
		}
	})
	return stringMap
}
export function split(str, splitter, strMap) {
	var pos = indexOf(splitter, str)
	pos.forEach((elm, i, array) => {
		if (inString(elm, strMap)) {
			array.splice(i, 1);
		}
	})
	var res = []
	strMap.forEach((elm) => {
		res.push(str.substring(elm[0], elm[1]))
	})
	return res
}
export function replace(str,substr,replacement){
	var indices=strIndexOf(str,substr)
	indices.forEach((elm)=>{
		str=replaceAt(str,elm,replacement,substr.length)
		indices=strIndexOf(str,substr)
	})
	return str
}
export function strIndexOf(str, substr) {
	var strMap = genStrMap(str)
	var pos = indexOf(substr, str)
	pos.forEach((elm, i, array) => {
		if (inString(elm, strMap)) {
			array.splice(i, 1);
		}
	})
	return pos
}
export function error(err,type,ctx){
	var file = JSON.parse(readFileSync('./log'))
	data.errs=data.errs||[]
	file.error=file.error||{}
	file.error[type]=file.error[type]||[]
	file.error[type].push({line:ctx.start.line,column:ctx.start.column,err})
	writeFileSync('./log',JSON.stringify(file))
	if(!data.errs.includes(`[Error]: ${type} at line:${ctx.start.line}, column:${ctx.start.column};\n${err} `)){
	console.log('\x1b[31m%s\x1b[0m',`[Error]: ${type} at line:${ctx.start.line}, column:${ctx.start.column};\n${err} `)
	data.errs.push(`[Error]: ${type} at line:${ctx.start.line}, column:${ctx.start.column};\n${err} `)
	}
}
export function warn(warn,ctx){
	data.warns=data.warns||[]
	if(!data.warns.includes(`[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)){
	console.log('\x1b[33m%s\x1b[0m',`[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)
	data.warns.push(`[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)	
}
	
}
export function log(token){
	var file = JSON.parse(readFileSync('./log'))
	file.log=file.log||{main:[],parsedTokens:[]}
	var time = new Date();
	if(token!==true){
		if(file.log.main.includes({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)}))return;
		file.log.main.push({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)})
	}else{
		if(file.log.parsedTokens.includes({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)}))return;
		file.log.parsedTokens.push({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)})
	}
	writeFileSync('./log',JSON.stringify(file))
}
export function termLog(msg){
	//console.dir(`[Log]:`,msg,{depth:null})
}
export function childExists(ctx,child,index){
	try{
		if(index){
			ctx[child][index]().getText()
		}else{
			ctx[child]().getText()
		}
		return true
	}catch{
		return false
	}
}
export function getNode(children,nodes,depth,remChildren){
	if(depth!==0){
	nodes.forEach(node=>{
	children.forEach(elm=>{
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
export function registerFile(ast,name){
	data.asts=data.asts||{}
	data.asts[name]=ast
}
export function copy(obj){
	return JSON.parse(JSON.stringify(obj))
}
export function isRegisteredAst(name){
	data.asts=data.asts||{}
	if(data.asts.hasOwnProperty(name))return true
	return false
}
export function getFunction(name,scope,functionList){
	if(functionList.hasOwnProperty(`${name}|${scope}`)){
		return functionList[`${name}|${scope}`]
	}else{
		scope.split('.').forEach((elm,i,arr)=>{
			var current=arr.slice(0,i).join('.')
			if(functionList.hasOwnProperty(`${name}|${current}`)){
				return functionList[`${name}|${current}`]
			}
		})
	}
	return null
}