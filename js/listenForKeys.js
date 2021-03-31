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
            startJumpTime = new Date().getTime();
            jump = true;
            /* checkForJumping(); */
            console.log(jump);
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