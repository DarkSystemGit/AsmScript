import io;
import math;
import gfx;
function input(str:str): str{
    gfx.log(str);
    var key= 0;
    var res="";
    while(!key==io.keys.enter){
        res=res+io.getKey();
    };
    return res;
};
while(true){
    var input=input("");
    gfx.log(math.rand(0-input,input)+input);
};