function listenForKeys() {

    document.addEventListener('keydown', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            isMovingRight = true;
            movingBackground = movingBackground - GAME_SPEED;
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
            /* checkForJumping();  */
        }

        if (k == 'd' && currentBottles > 0) {
            let timepassed = new Date().getTime() - bottleThrowTime;
            if (timepassed > 1000) {
                currentBottles--;
                bottleThrowTime = new Date().getTime();
            }
        }
    });

    document.addEventListener('keyup', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            isMovingRight = false;
        }

        if (k == 'ArrowLeft') {
            isMovingLeft = false;
        }
    });
}