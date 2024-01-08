import io;
import math;
import gfx;
function input(str:string, line:number): string{
    gfx.text(str,line);
    if(str==""){
        line=line-1
    }
    var key= 0;
    var res=[];
    var pos=0;
    while(!key==io.keys.enter){
        key=io.getKey();
        gfx.text(io.keys.toString([key])[0],pos,line+1)
        res.push(key);
        pos++;
    };
    return io.keys.toString(res);
};
var line=0;
while(true){
    var input=input("",line);
    var num=math.rand(0-input,input)+input
    gfx.text(num,26-num.toString().length,line+1);
    line=line+2
};