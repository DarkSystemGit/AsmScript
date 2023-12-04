import io;
import gfx;
import math;
gfx.clearScreen()
var data = { oldSnake: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], snake: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]], oldDir: [0, 0], dir: [0, 0] }
function update(snake: number[][]): number[][] {
    data.oldSnake = snake
    var key = io.getKey()
    if (key == io.keys.down) {
        data.dir = [0, -1]
    }
    if (key == io.keys.up) {
        data.dir = [0, 1]
    }
    if (key == io.keys.right) {
        data.dir = [1, 0]
    }
    if (key == io.keys.left) {
        data.dir = [-1, 0]
    }
    data.snake = moveSnake(data.snake, dir)
    drawSnake(data.oldSnake, snake)
    return snake
}
function moveSnake(snake: number[][], add: number[]): number[][] {
    for (var i = 0; i < snake.length; i++) {
        snake[i][0] = snake[i][0] + add[0]
        snake[i][1] = snake[i][1] + add[1]
    }
    return snake
}
function drawSnake(oldSnake: number[][], snake: number[][]): void {
    for (var i = 0; i < oldSnake.length; i++) {
        gfx.clear(oldSnake[i][0], oldSnake[i][1])
        gfx.draw(snake[i][0], snake[i][1], [0, 128, 0])
    }
}
while (true) {
    data.snake = update(data.snake)
}