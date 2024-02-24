import gfx;
gfx.clearScreen();
gfx.setWindowSize([25,20])
gfx.fillScreen([0,0,0])
class Game{
    objects:Array<GameObject>
    data:Object
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
        this.objects=[]
    }
    addObject(object:GameObject){
        this.objects.push(object)
    }
}
class GameObject{
    sprite:Number[][][]
    position:Array<Number>
    onFrame:Function
    constructor(sprite:Number[][][],onFrame:Function){
        this.sprite=sprite
        this.onFrame=onFrame
        this.position=[0,0]
    }
    draw(data:Object){
        this.onFrame(data,this.sprite,this.position)
        for(var x;x<this.sprite.length;x++){
            for(var y;y<this.sprite[x].length;y++){
                gfx.draw(x+this.position[0],y+this.position[1],this.sprite[x][y])
            }
        }
    }
}
