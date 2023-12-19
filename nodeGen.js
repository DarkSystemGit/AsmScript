import * as fs from 'fs'
import * as cli from 'inquirer'
console.log('Glacier Stdlib Header Node Creater v1.0.0')

var prompt = cli.default.prompt
var node={}
prompt([
    {
        name: 'files',
        message: 'Choose a file:',
        type: 'list',
        choices:fs.readdirSync('./src/headers')
    }])
    .then(function (file) {
        //console.log(ans)
        file=file.files
        var fileName=file
        var file= JSON.parse(fs.readFileSync('./src/headers/'+file))
        prompt([{name:'type',message:'Node type:',type:'list',choices:['function','var','class']}]).then((nodeType)=>{
            nodeType=nodeType.type
            node.node=nodeType
            if(nodeType=="var"){
                node.node="varDec"
            }
            prompt([{name:'name',message:'Name:',type:'input'}]).then((name)=>{
                node.name=fileName.split('.')[0]+'.'+name.name
                prompt([{name:'type',message:'Type:',type:'list',choices:['number','string','bool','void','object']}]).then((type)=>{
                    node.type=type.type
                    if(nodeType=='function'){
                        prompt([{name:'params',message:'Parameter Number: ',type:'input'}]).then(()=>{})
                    }else{

                    }
                })
            })
        })

        
    });