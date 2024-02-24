import io;
import engine;
var game = new Game()
var white = [255, 255, 255]
game.addObject(new GameObject([[white, white, white, white, white, white, white, white, white, white]], (data: Object, sprite: Number[][][], position: Number[]) => {
    position[0]=25
    if(data.ballPos[1]>position[1]){
        position[1]++
    }
    if(data.ballPos[1]<position[1]){
        position[1]--
    }
    data.pad2Pos=position
}))
game.addObject(new GameObject([[white, white, white, white, white, white, white, white, white, white]], (data: Object, sprite: Number[][][], position: Number[]) => {
    var key = io.getKey();
    if (key == io.keys.up) {
        position[1]++
    }
    if (key == io.keys.down) {
        position[1]--
    }
    data.pad1Pos=position
}))