
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
    Util.prototype.fixTokens=function(tokenPos,fileStr){
        const fixable=["var"]
        
        Object.keys(tokenPos).forEach(function(tokenVal,c){
            //console.log(tokenVal)
            
            tokenPos[tokenVal].forEach(function(token){
                //console.log(tokenVal)
                //console.log(fileStr)
                if(fixable.includes(Object.values(tokenVal)[c])){
                    console.log(fileStr)
                    var seq=fileStr.split("").slice(token)
                    console.log(seq)
                }
            })
            
        })
    }
    var util = new Util()
    const tokenPos = util.tokenize(tokenMap,file)
    
    var tokens = util.fixTokens(tokenPos,file)
    
}

function cli() {
    var args = parseArgs({ flags: [], options: ["file"] })
    parse(fs.readFileSync(path.join(__dirname, args.file)))
}
cli()