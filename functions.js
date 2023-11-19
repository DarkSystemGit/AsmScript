//console.log(readFileSync(process.argv[2]))
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
