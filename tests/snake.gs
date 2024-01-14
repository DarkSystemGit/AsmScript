import * as io from 'io';
import * as gfx from 'gfx';
import * as math from 'math';
gfx.clearScreen();
var data = { oldSnake: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]], snake: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]], dir: [0, 0], screen: [320, 270], food: [0, 0], score: 0 };
function update(snake: number[][]): number[][] {
    data.oldSnake = snake;
    var key = io.getKey();
    if (key == io.keys.down) {
        data.dir = [0, -1];
    }
    if (key == io.keys.up) {
        data.dir = [0, 1];
    }
    if (key == io.keys.right) {
        data.dir = [1, 0];
    }
    if (key == io.keys.left) {
        data.dir = [-1, 0];
    }
    if (snake[snake.length - 1] == data.food) {
        data.score++;
        data.snake = moveSnake(snake, data.dir);
        gfx.clear(...data.food);
    }
    data.snake = moveSnake(snake, data.dir);
    drawSnake(data.oldSnake, snake);
    gfx.text(2,2,"Score: "+data.score)
    return snake;
}
function moveSnake(snake: number[][], add: number[]): number[][] {
    for (var i = 0; i < snake.length; i++) {
        snake[i][0] = snake[i][0] + add[0];
        snake[i][1] = snake[i][1] + add[1];
    }
    return snake;
}
function foodGen(): void {
    data.food = [math.rand(0, data.screen[0]), math.rand(0, data.screen[1])];
    gfx.draw(...data.food, [256, 0, 0]);
}
function drawSnake(oldSnake: number[][], snake: number[][]): void {
    for (var i = 0; i < oldSnake.length; i++) {
        gfx.clear(oldSnake[i][0], oldSnake[i][1]);
        gfx.draw(snake[i][0], snake[i][1], [0, 256, 0]);
    }
}
foodGen();
while (true) {
    data.snake = update(data.snake);
}