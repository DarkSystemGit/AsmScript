import io;
import math;
import gfx;
function input(str:str): str{
    gfx.text(str);
    var key= 0;
    var res="";
    while(!key==io.keys.enter){
        res=res+io.getKey();
    };
    return res;
};
while(true){
    var input=input("");
    gfx.text(math.rand(0-input,input)+input);
};