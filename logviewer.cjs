const fs = require('fs')
const path = require('path')
var log = JSON.parse(fs.readFileSync(path.join(__dirname, 'log')))

function parseArgs(keys) {
    var args = process.argv.slice(2)
    var res = { flags: [] }

    args.forEach((elm, index) => {
        //console.dir(keys, index, keys.flags.includes(elm.replaceAll('-', '')))
        if (keys.flags.includes(elm.replaceAll('-', ''))) {
            res.flags.push(elm.replaceAll('-', ''))
        } else if (keys.options.includes(elm.replaceAll('-', ''))) {
            res[elm.replaceAll('-', '')] = args[index + 1]
        }
    });
    //console.dir(res)
    return res
}
var params = { flags: ['tokens','error', 'listKeys', 'logs', 'list','parsedTokens'], options: [] }
var errorTypes = []
Object.keys(log.error).forEach((elm) => {
    params.flags.push(elm)
    errorTypes.push(elm)
})
params = parseArgs(params)
if (params.flags.includes('listKeys')) {
    if (params.flags.includes('error')) {
        console.dir(Object.keys(log.error),{ depth: null })
        process.exit()
    } else {
        console.dir(Object.keys(log.log),{ depth: null })
        process.exit()
    }
}
if (params.flags.includes('list')) {
    if (params.flags.includes('error')) {
        var type=''
        errorTypes.forEach(elm=>{if(params.flags.includes(elm)){type=elm;return}})
        console.dir(log.error[type],{ depth: null })
        process.exit()
    } else if (params.flags.includes('logs')) {
            if(params.flags.includes('parsedTokens')){
                console.dir(log.log.parsedTokens,{ depth: null })
                process.exit()
            }else{
                console.dir(log.log.main,{ depth: null })
                process.exit()
            }
    }
}