import * as fs from 'fs'
import * as cli from 'inquirer'
console.log('Glacier Stdlib Header Node Creater v1.0.0')

var prompt = cli.default.prompt
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
        prompt([{name:'type',message:'Type:',type:'list',choices:['function','var','class']}]).then((type)=>{
            type=type.type
            prompt([{name:'name',message:'Name:',type:'input'}]).then((name)=>{
                name=fileName.split('.')[0]+name.name
                console.log([name,type])
            })
        })

        
    });