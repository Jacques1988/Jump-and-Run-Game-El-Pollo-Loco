
//bottle collisiondetection


//Boss
function bottleCollision(throwBottle_x, throwBottle_y) {
    if (throwBottle_x > boss_x + movingBackground - 50 && throwBottle_x < boss_x + movingBackground + 50 && throwBottle_y < 445) {
        hit = hit + 5;
        AUDIO_BOTTLESPLASH.play();
        if (throwBottle_y > 445) {
            AUDIO_BOTTLESPLASH.play();
        }


        if (hit > 60 && hit < 120 && hit < 180) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Azul.PNG'
        } else if (hit > 60 && hit > 120 && hit < 180) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Naranja.PNG';
        } else if (hit > 60 && hit > 120 && hit > 180) {
            currentBossEnergy = "";
        }
    }
}

    



