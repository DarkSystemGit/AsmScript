//util.termLog(read(process.argv[2]))
import { writeFileSync, readFileSync,readdirSync } from 'fs'
import * as path from 'path'
import * as importSync from 'import-sync'
import { fileURLToPath } from 'url';
//export const __filename = fileURLToPath(import.meta.url);
//export const __dirname = path.dirname(__filename);
writeFileSync('./log', '{}')
export var data = globalThis.data = {}
export function getType(elm,file){
	//console.log(elm.typeAnnotation)
	if(elm.typeAnnotation.hasOwnProperty('kind')){
		return elm.typeAnnotation.kind
	}else if(elm.typeAnnotation.hasOwnProperty('elemType')){
		return 'class:Array'
	}
	return extract(elm.span,file)
}
export function dirImport(dir) {
	const basename = path.basename(__filename);
	const functions = {}
	readdirSync(dir, { recursive: true }).filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
		.map(function (file) { functions[file.slice(0, -3).split('/').at(-1)] = importSync.default(path.join(dir, file)).default })
	return functions
}
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
			//util.termLog(char >= item[0], char <= item[1])
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
export function replace(str, substr, replacement) {
	var indices = strIndexOf(str, substr)
	indices.forEach((elm) => {
		str = replaceAt(str, elm, replacement, substr.length)
		indices = strIndexOf(str, substr)
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
function extract(span,file){
	//console.log(file.substring(span.start,span.end))
	return file.substring(span.start,span.end).trim()
}
export function error(err, type, span) {
	var file = JSON.parse(read('./log'))
	data.errs = data.errs || []
	file.error = file.error || {}
	var searchstr="hello, this is a search str pls no copy, hahahahDGHJUYTGFDCVBHGFCV BNHGFCVBHGVBG"
	file.error[type] = file.error[type] || []
	var prgm=replaceAt(data.file,span.start,searchstr,span.end-span.start).split('\n')
	
	var line={line:0,column:0}
	prgm.forEach(elm,i=>{
		if(elm.indexOf(searchstr)!=-1){
			line={line:i,column:elm.indexOf(searchstr)}
		}
	})
	
	file.error[type].push({ line:line.line, column: line.column, err })
	writeFileSync('./log', JSON.stringify(file))
	if (!data.errs.includes(`[Error]: ${type} at line:${line.line}, column:${line.column};\n${err} `)) {
		console.log('\x1b[31m%s\x1b[0m', `[Error]: ${type} at line:${line.line}, column:${line.column};\n${err} `)
		data.errs.push(`[Error]: ${type} at line:${line.line}, column:${line.column};\n${err} `)
	}
}
export function warn(warn, ctx) {
	data.warns = data.warns || []
	if (!data.warns.includes(`[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)) {
		console.log('\x1b[33m%s\x1b[0m', `[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)
		data.warns.push(`[Warning]: Warning at line:${ctx.start.line}, column:${ctx.start.column};\n${warn}`)
	}

}
export function log(token) {
	var file = JSON.parse(read('./log'))
	file.log = file.log || { main: [], parsedTokens: [] }
	var time = new Date();
	if (token !== true) {
		if (file.log.main.includes({ time: `${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`, log: Array.from(arguments) })) return;
		file.log.main.push({ time: `${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`, log: Array.from(arguments) })
	} else {
		if (file.log.parsedTokens.includes({ time: `${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`, log: Array.from(arguments) })) return;
		file.log.parsedTokens.push({ time: `${time.getFullYear()}:${time.getMonth()}.${time.getDay()}:${time.getHours()}`, log: Array.from(arguments) })
	}
	writeFileSync('./log', JSON.stringify(file))
}
export function termLog(msg) {
	console.dir(`[Log]: ${msg}`, { depth: null })
}
export function info(msg) { console.log(msg) }
export function childExists(ctx, child, index) {
	try {
		if (index) {
			ctx[child][index]().getText()
		} else {
			ctx[child]().getText()
		}
		return true
	} catch {
		return false
	}
}
export function registerFile(ast, name) {
	data.asts = data.asts || {}
	data.asts[name] = ast
}
//all hail this glorious function
export function copy(obj) {
	return JSON.parse(JSON.stringify(obj))
}
export function isRegisteredAst(name) {
	data.asts = data.asts || {}
	if (data.asts.hasOwnProperty(name)) return true
	return false
}
export function read(file) {
	return readFileSync(file).toString()
}
export function write() {
	return writeFileSync(...Array.from(arguments))
}