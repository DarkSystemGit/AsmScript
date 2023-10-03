
const fs = require('fs')
const path = require('path')
const tokenMap = {
    "==": "=",
    "&&": "and",
    "||": "or",
    "!": "not",
    "^": "xor",
    "{": "then",
    "}": "end",
    "=": "->",
    "true": "1",
    "false": "0",
    "var": "",
    "[": "{",
    "]": "}"
}
function indexOf(searchStr, str, caseSensitive) {
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
function parseArgs(keys) {
    var args = process.argv.slice(2)
    var res = { flags: [] }

    args.forEach((elm, index) => {
        //console.log(keys, index, keys.flags.includes(elm.replaceAll('-', '')))
        if (keys.flags.includes(elm.replaceAll('-', ''))) {
            res.flags.push(elm.replaceAll('-', ''))
        } else if (keys.options.includes(elm.replaceAll('-', ''))) {
            res[elm.replaceAll('-', '')] = args[index + 1]
        }
    });
    //console.log(res)
    return res
}
function parse(file) {
    file = file.toString()
    function Util() { }
    Util.prototype.inString = function (char) {
        var ret = false
        if (!this.stringMap) {
            this.genStrMap()
        }
        this.stringMap.forEach((item) => {
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
    Util.prototype.genStrMap = function () {
        this.stringMap = []
        var strs = indexOf('"', file, true)
        strs.forEach((section, i) => {

            if ((i % 2 == 0)) {
                this.stringMap.push([strs[i], strs[i + 1]])
            }
        })

    }
    Util.prototype.tokenize = function (tokenMap, file) {
        var locations = {}
        Object.keys(tokenMap).forEach((token) => {
            var tokenList = indexOf(token, file, true)
            locations[token] = []
            tokenList.forEach((pos) => {
                if (!this.inString(pos)) {
                    locations[token].push(pos)
                }
            })
        })
        return locations
    }
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    Util.prototype.fixTokens=function(tokenPos,fileStr){
        const fixable=["var"]
        this.forEach(Object.values(tokenPos),function(tokenList,i){
            this.forEach(Object.values(tokenList),function(token){
                
                if(fixable.includes(Object.keys(tokenPos)[i])){
                    //console.log(Object.keys(tokenPos))
                    var seq=fileStr.split("").slice(token).join('')
                    seq=seq.slice(0,seq.indexOf(';'))
                    if(this.data.fixTokens[Object.keys(tokenPos)[i]]){
                        var fixed =this.data.fixTokens[Object.keys(tokenPos)[i]]()

                    }
                }
            })
        })
        
    }
    //forEach be mean
    Util.prototype.forEach= function(arr,callback,thisArg){
        thisArg = thisArg || this;
		for (var i = 0; i < arr.length; i++) {
			callback.call(thisArg, arr[i], i, arr);
		}
    }
    var util = new Util()
    const tokenPos = util.tokenize(tokenMap,file)
    //console.log(tokenPos)
    var tokens = util.fixTokens(tokenPos,file)
    
}

function cli() {
    var args = parseArgs({ flags: [], options: ["file"] })
    parse(fs.readFileSync(path.join(__dirname, args.file)))
}
cli()
