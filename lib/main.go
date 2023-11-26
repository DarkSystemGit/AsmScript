package main
import(
	"github.com/llir/llvm/ir"
	"github.com/llir/llvm/ir/constant"
	"github.com/llir/llvm/ir/types"
	"github.com/llir/llvm/ir/value"
	"github.com/gopherjs/gopherjs/js"
)
func main(){
	js.Global.Set("llvm", map[string]interface{}{
		"New": ir.NewModule,
	})
}
func New(){
	return 
}