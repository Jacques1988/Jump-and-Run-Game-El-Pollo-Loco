function listenForKeys() {

    document.addEventListener('keydown', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            isMovingRight = true;
            movingBackground = movingBackground - GAME_SPEED;
            if(movingBackground < -8400){
                movingBackground = -8400;
            }
        }

        if (k == 'ArrowLeft' && movingBackground < 0) {
            isMovingLeft = true;
            movingBackground = movingBackground + GAME_SPEED;   
        }

        let jumpTimePassed = new Date().getTime() - startJumpTime;

        if (e.code == 'Space' && jumpTimePassed > JUMP_TIME * 2) {
            AUDIO_JUMPING.play();
            startJumpTime = new Date().getTime();
            jump = true;
        }

        if (k == 'd' && currentBottles > 0) {
            let timepassed = new Date().getTime() - bottleThrowTime;
            if (timepassed > 1000 && character_y == 235) {
                currentBottles--;
                bottleThrowTime = new Date().getTime();
                decrementBottleGraphic();
        }
    }
    });

    document.addEventListener('keyup', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            isMovingRight = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG'
        }

        if (k == 'ArrowLeft') {
            isMovingLeft = false;
            currentCharacterImage = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.PNG';
        }
    });
}