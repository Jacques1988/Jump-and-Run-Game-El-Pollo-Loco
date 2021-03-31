let canvas;
let ctx;

let character_x = 150;
let character_y = 235;
let isMovingRight = false;
let isMovingLeft = false;
let jump = false;
let currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG';
let runningRight = ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.PNG'];
let runningLeft = ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.PNG'];
let isJumping = ['img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.PNG', 'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.PNG'];
let characterGraphicIndex = 0;
let characterJumpIndex = 0;
let startJumpTime = 0;

let movingBackground = 0;
let cloudOffset_x = 0;

let enemies = [];
let enemy_y = 445;

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
    checkForRunning();
    createEnemyList();
}

//characterJumpIndex kumuliert sich. Sequenzen werden bei dem 2. Sprung unsauber
/* function checkForJumping() {
setInterval(function(){

        if (jump) {
            let index = characterJumpIndex % isJumping.length;
            currentCharacterImage = isJumping[index];
            characterJumpIndex = characterJumpIndex + 1;
            if(characterJumpIndex > isJumping.length){
                index = 0 ;
            }
        }
        if (character_y == 235) {
            jump = false;
        }
    },133);
    console.log(characterJumpIndex);
    requestAnimationFrame(checkForJumping);
    } */
