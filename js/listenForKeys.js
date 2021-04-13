
let key = {
    "ArrowRight": false,
    "ArrowLeft": false,
    "Space": false,
    "d": false
};

let jumpTimePassed = new Date().getTime() - startJumpTime;

function listenForKeys() {

    document.addEventListener('keydown', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            key['ArrowRight'] = true;
            isMovingRight = true;
            movingBackground = movingBackground - GAME_SPEED;
            if(movingBackground < -8400){
                movingBackground = -8400;
            }
        }

        if (k == 'ArrowLeft' && movingBackground < 0) {
            key['ArrowLeft'] = true;
            isMovingLeft = true;
            movingBackground = movingBackground + GAME_SPEED;   
        }

        let jumpTimePassed = new Date().getTime() - startJumpTime;

        if (e.code == 'Space' && jumpTimePassed > JUMP_TIME * 2) {
            key['Space'] = true;
            AUDIO_JUMPING.play();
            startJumpTime = new Date().getTime();
            jump = true;
        }

        if (k == 'd' && currentBottles > 0) {
            key['d'] = true;
            let timepassed = new Date().getTime() - bottleThrowTime;
            if (timepassed > 1000 && character_y == 235) {
                currentBottles--;
                bottleThrowTime = new Date().getTime();
                AUDIO_THROWBOTTLE.play();
                decrementBottleGraphic();
        }
    }
    });

    document.addEventListener('keyup', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            key['ArrowRight'] = false;
            isMovingRight = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG'
            AUDIO_RUNNING.pause();
        }

        if (k == 'ArrowLeft') {
            key['ArrowLeft'] = false;
            isMovingLeft = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG';
            AUDIO_RUNNING.pause();
        }

        if(k == 'Space'){
            key['Space'] = false;
        }

        if(k == 'd'){
            key['d'] = false;
        }
    });
} 

/* function updateActions() {


    document.onkeydown = function (e) {
        if (e.key == 'ArrowRight') {
            key['ArrowRight'] = true;
            isMovingRight = true;
            movingBackground = movingBackground - GAME_SPEED;
            if (movingBackground < -8400) {
                movingBackground = -8400;
            }
        }

        if (e.key == 'ArrowLeft') {
            key['ArrowLeft'] = true;
            isMovingLeft = true;
            movingBackground = movingBackground + GAME_SPEED;
        }

        if (e.code == 'Space' && jumpTimePassed > JUMP_TIME * 2) {
            key['Space'] = true;
            AUDIO_JUMPING.play();
            startJumpTime = new Date().getTime();
            jump = true; 
        }

        if (e.key == 'd' && currentBottles > 0) {
            key['d'] = true;
            let timepassed = new Date().getTime() - bottleThrowTime;
            if (timepassed > 1000 && character_y == 235) {
                currentBottles--;
                bottleThrowTime = new Date().getTime();
                AUDIO_THROWBOTTLE.play();
                decrementBottleGraphic();
            }
        }
    }
    
    document.onkeyup = function (e){

        if (e.key == 'ArrowRight') {
            key['ArrowRight'] = false;
            isMovingRight = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG'
            AUDIO_RUNNING.pause();
        }

        if (e.key == 'ArrowLeft') {
            key['ArrowLeft'] = false;
            isMovingLeft = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG';
            AUDIO_RUNNING.pause();
        }

        if (e.key == 'Space') {
            key['Space'] = false;
            jump = false;
        }

        if (e.key == 'd') {
            key['d'] = false;
        }
    }
}  */






