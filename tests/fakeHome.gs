import io;
import math;
import gfx;
function input(str:str): str{
    gfx.text(str);
    var key= 0;
    var res=[];
    while(!key==io.keys.enter){
        key=io.getKey();
        res.push(key)
    };
    return io.keys.toString(res);
};
while(true){
    var input=input("");
    gfx.text(math.rand(0-input,input)+input);
};