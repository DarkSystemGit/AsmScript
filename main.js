
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
    function Util() {this.data={
        fixTokens:{
            var:function(seq){
                //console.log(seq)
                if(!seq.includes('=')||(seq.indexOf('=')==seq.length-1)){
                    seq=""
                }else{
                    seq =seq.replace('=','${//0x>}').replace("var","").trim().split("${//0x>}").reverse().join('=>')
                }
                return seq
            }
        }
    }}
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
        this.tokenMap = locations
    }
    String.prototype.replaceAt = function(index, replacement,length) {
        return this.substring(0, index) + replacement + this.substring(index + length);
    }
    Util.prototype.fixTokens=function(fileStr){
        //console.log(this.tokenMap)
        for(var i=0; i<Object.values(this.tokenMap).length;i++){
            for(var counter=0;counter<=Object.values(Object.values(this.tokenMap)[i]).length;counter++){

                if(Object.keys(this.data.fixTokens).includes(Object.keys(this.tokenMap)[i])){
                    this.tokenize(tokenMap,fileStr)
                    var token =Object.values(this.tokenMap)[i][0]
                    //console.log(Object.values(this.tokenMap)[i])
                    var seq=fileStr.split("").slice(token).join('')

                    seq=seq.slice(0,seq.indexOf(';'))
                    //console.log(seq,token)
                    if(this.data.fixTokens[Object.keys(this.tokenMap)[i]]){
                        fileStr = fileStr.replaceAt(token,this.data.fixTokens[Object.keys(this.tokenMap)[i]](seq.substring(0,seq.length)),seq.length+1)

                    }else{

                    }
                }
            }
        }
        return fileStr
    }
    //forEach be mean
    Util.prototype.forEach= function(arr,callback,thisArg){
        thisArg = thisArg || this;
		for (var i = 0; i < arr.length; i++) {
			callback.call(thisArg, arr[i], i, arr);
		}
    }

    var util = new Util()
    util.tokenize(tokenMap,file)
    //console.log(tokenPos)
    var tokens = util.fixTokens(file)
    console.log("___________________________________________________________________________\n"+tokens)
}

function cli() {
    var args = parseArgs({ flags: [], options: ["file"] })
    parse(fs.readFileSync(path.join(__dirname, args.file)))
}
cli()
