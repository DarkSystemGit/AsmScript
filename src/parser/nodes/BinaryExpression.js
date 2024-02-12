import * as util from './../../util.js'
export default (elm, parser) => {
    var node = { children: [parser(elm.left), parser(elm.right)], operation: elm.operator }
    var op = (op) => {
        var res = false
        op.forEach(elm => {
            if(elm.type==elm)res=true
        })
        return res
    }
    if (op(['+','-','/','*','%','**'])) {
        node.type='number'
        node.node='arthmeticOp'
    }else if(op(['==','=','!=','!==','<=','<','>','>='])){
        node.type='bool'
        node.node='comparison'
    }else if(op(['&','^','|'])){
        node.type='binary'
        node.node='bitwise'
    }else if(op(['||','&&'])){
        node.node='logic'
        node.type='bool'
    }
    return node
}