let canvas;
let ctx;
let character_x = 150;
let character_y = 235;
let isMovingRight = false;
let isMovingLeft = false;
let startJumpTime = 0;
let movingBackground = 0;
let cloudOffset_x = 0;

let GAME_SPEED = 8;
let JUMP_TIME = 300;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    draw();
    cloudOffset();
    listenForKeys();
}
