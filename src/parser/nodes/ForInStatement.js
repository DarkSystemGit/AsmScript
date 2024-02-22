import * as util from '../../util.js'
export default (elm,parser)=>{
    
    return {node:"forIn",children:parser(elm.body),iterator:parser(elm.left),obj:parser(elm.right)}
}