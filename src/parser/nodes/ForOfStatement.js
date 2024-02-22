import * as util from '../../util.js'
export default (elm,parser)=>{
    
    return {node:"forOf",children:parser(elm.body),iterator:parser(elm.left),iterable:parser(elm.right)}
}