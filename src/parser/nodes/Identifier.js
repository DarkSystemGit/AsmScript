import * as util from './../../util.js'
export default (elm, parser, ex) => {
    if (ex == "memexp") {
        return elm.value
    }
}