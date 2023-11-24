//console.log(readFileSync(process.argv[2]))
import {writeFileSync,readFileSync} from 'fs'
import {cwd} from 'process'
writeFileSync('./log','{}')
export var dirname = cwd
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
	file.error=file.error||{}
	file.error[type]=file.error[type]||[]
	file.error[type].push({line:ctx.start.line,column:ctx.start.column,err})
	writeFileSync('./log',JSON.stringify(file))
}
export function log(token){
	var file = JSON.parse(readFileSync('./log'))
	file.log=file.log||{main:[],parsedTokens:[]}
	var time = new Date();
	if(!!(token==true)){
		if(file.log.main.includes({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)}))return;
		file.log.main.push({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)})
	}else{
		if(file.log.parsedTokens.includes({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)}))return;
		file.log.parsedTokens.push({time:`${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`,log:Array.from(arguments)})
	}
	writeFileSync('./log',JSON.stringify(file))
}
export function termLog(msg){
	console.log(`[Log]:`,msg)
}