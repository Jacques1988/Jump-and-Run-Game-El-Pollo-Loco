function enemyCollision() {
    setInterval(function () {
        for (let i = 0; i < enemies.length; i++) {
            7
            let chicken = enemies[i];
            let chicken_x = chicken.enemy_x + movingBackground;


            //enemy collisiondetection
            if ((chicken_x - 100) < character_x && (chicken_x + 60) > character_x) {
                if (character_y > 230) {
                    AUDIO_PAIN.play();
                
                    currentEnergyBarImage = energyBar[currentLive];
                    currentLive--;
    
                    if(currentLive <= 0 ){
                         currentEnergyBarImage = 'img/7.Marcadores/Barra/Marcador vida/verde/0_.PNG';
                         currentLive = 0;
                    }
                     if(energybarGraphicIndex > 5){
                        currentEnergyBarImage = 'img/7.Marcadores/Barra/Marcador vida/verde/0_.PNG';
                    } 
                }
            }
        }
        
    }, 200);
}