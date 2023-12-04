import io;
import math;
function input(str:str): str{
    io.disp(str);
    var key= 0;
    var res="";
    while(!key==io.keys.enter){
        res=res+io.getKey();
    };
    return res;
};
while(true){
    var input=input("");
    io.disp(math.rand(0-input,input)+input);
};