function listenForKeys() {

    document.addEventListener('keydown', e => {
        let k = e.key;

        if (k == 'ArrowRight') {
            isMovingRight = true;
            offsetBackground_x = offsetBackground_x - GAME_SPEED;
        }

        if (k == 'ArrowLeft' && offsetBackground_x < 0) {
            isMovingLeft = true;
            offsetBackground_x = offsetBackground_x + GAME_SPEED;
        }
        
        let jumpTimePassed = new Date().getTime() - startJumpTime;

        if(e.code == 'Space' && jumpTimePassed > JUMP_TIME * 2){
            startJumpTime = new Date().getTime();
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