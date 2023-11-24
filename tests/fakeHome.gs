import io;
function input(str): str {
    io.disp(str);
    var key= 0;
    var res="";
    while(!!key==9){
        res=res+io.getKey();
    };
    return res;
};
while(true){
    var input=input("");
    io.disp(math.rand(0-input,input)+input);
};