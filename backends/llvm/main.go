package main
import(
	"github.com/llir/llvm/ir"
	"github.com/llir/llvm/ir/constant"
	"github.com/llir/llvm/ir/types"
	"github.com/llir/llvm/ir/value"
	"encoding/json"
	"os"
)
func check(e error) {
    if e != nil {
        panic(e)
    }
}
func main(){
	arg := os.Args
	var ast interface{}
	file, err := os.ReadFile("/tmp/dat")
    check(err)
	err := json.Unmarshal(file, &ast)
}
