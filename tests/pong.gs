import io;
import gfx;
import math;
gfx.clearScreen();
gfx.fillScreen([0,0,0])
class Game{
    constructor(){
        this.objects=[]
        this.data={}
        while(true){
            this.draw_frame()
        }
    }
    draw_frame(){
        gfx.fillScreen([0,0,0])
        var objects=this.objects
        for(var i=0;i<objects.length;i++){
            objects[i].draw(this.data)
        }
    }
    clearObjects(){
        this.object=[]
    }
    addObject(object){
        this.objects.push(object)
    }
}
class Object{
    draw(data){

    }
}
