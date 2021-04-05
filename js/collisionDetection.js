function collisionDetection() {
    setInterval(function(){
        for(let i = 0; i < enemies.length; i++){7
            let chicken = enemies[i];
            let chicken_x = chicken.enemy_x + movingBackground;

            if((chicken_x - 40) < character_x && (chicken_x + 40) > character_x ){
                if(character_y > 230 ){
                AUDIO_PAIN.play();
                console.log('treffer!!!');
                }
            }
        }
    },150);
}