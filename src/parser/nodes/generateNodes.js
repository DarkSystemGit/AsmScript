import {readFileSync,writeFileSync} from 'fs'
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
JSON.parse(readFileSync(path.join(__dirname,'nodes.json'))).forEach((elm)=>{
    writeFileSync(path.join(__dirname,elm.replace('visit','')+'.js'),`export default (elm,parser)=>{

}`)
})