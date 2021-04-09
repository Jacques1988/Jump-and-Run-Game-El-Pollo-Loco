function collisionDetection() {
    setInterval(function () {
        for (let i = 0; i < enemies.length; i++) {
            7
            let chicken = enemies[i];
            let chicken_x = chicken.enemy_x + movingBackground;


            //enemy collisiondetection
            if ((chicken_x - 100) < character_x && (chicken_x + 60) > character_x) {
                if (character_y > 230) {
                    AUDIO_PAIN.play();

                    let index = energybarGraphicIndex % energyBar.length;
                    currentEnergyBarImage = energyBar[index];
                    energybarGraphicIndex = energybarGraphicIndex + 1;


                    /* if(energybarGraphicIndex < 0){
                        currentEnergyBarImage = 'img/7.Marcadores/Barra/Marcador vida/verde/100_.PNG';
                    } */

                }
            }
        }


    }, 300);
}