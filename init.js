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

let currentEnergyBarImage = 'img/7.Marcadores/Barra/Marcador vida/verde/100_.PNG';
let energyBar = ['img/7.Marcadores/Barra/Marcador vida/verde/100_.PNG', 'img/7.Marcadores/Barra/Marcador vida/verde/80_.PNG', 'img/7.Marcadores/Barra/Marcador vida/verde/60_.PNG', 'img/7.Marcadores/Barra/Marcador vida/verde/40_.PNG', 'img/7.Marcadores/Barra/Marcador vida/verde/20_.PNG', 'img/7.Marcadores/Barra/Marcador vida/verde/0_.PNG'];
let energyBar_x = 40;
let energyBar_y = 0;
let energybarGraphicIndex = 0;

let movingBackground = 0;
let cloudOffset_x = 0;

let enemies = [];
let enemy_x;
let enemy_y = 445;

let availableTabasco = ['img/7.Marcadores/Barra/Marcador_botella/Verde/0_.PNG', 'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.PNG', 'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.PNG', 'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.PNG', 'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.PNG', 'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.PNG'];
let placeTabasco = [800, 1200, 1500, 2600, 3400, 4100, 4500, 5300, 5200, 5500, 6700, 7300, 8000, 8400, 8800];
let tabasco_y = 445;
let currentBottles = 0;
let currentTabasco = 'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.PNG'
let tabascoBarGraphicIncex = 0;

let bottleThrowTime = 0;
let throwBottle_x = 0;
let throwBottle_y = 0;


let boss_x = 9000;
let bossEnergy = ['img/7.Marcadores/Marcadorvida_enemy/Vede.PNG','img/7.Marcadores/Marcadorvida_enemy/Azul.PNG', 'img/7.Marcadores/Marcadorvida_enemy/Naranja.PNG'];
let currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Vede.PNG';
let hit = 0;
let bossEnergyGraphicIndex = 0;

let GAME_SPEED = 8;
let JUMP_TIME = 400;

let GAME_MUSIC = new Audio('./audio/luckyChicken.mp3');
let AUDIO_RUNNING = new Audio('./audio/running.mp3');
let AUDIO_JUMPING = new Audio('./audio/jump.mp3');
let AUDIO_PAIN = new Audio('./audio/pain.mp3');
let AUDIO_TAKEBOTTLE = new Audio('./audio/corkbottle.mp3');

GAME_MUSIC.loop = true;
GAME_MUSIC.volume = 0.5;


function init() {

    /* GAME_MUSIC.play(); */
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'whitesmoke';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    cloudOffset();
    collisionDetection();
    takeBottles();
    listenForKeys();
    checkForRunning();
    createEnemyList();
    calculateEnemyposition();
    draw();
    
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
    },50);
    console.log(characterJumpIndex);
     requestAnimationFrame(checkForJumping);
    }  */
