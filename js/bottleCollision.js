
//bottle collisiondetection


//Boss
function bottleCollision(throwBottle_x, throwBottle_y) {
    if (throwBottle_x > boss_x + movingBackground - 50 && throwBottle_x < boss_x + movingBackground + 50 && throwBottle_y < 445) {
        hit = hit + 5;

        if (hit > 40 && hit < 60 && hit < 90) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Azul.PNG'
        } else if (hit > 40 && hit > 80 && hit < 110) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Naranja.PNG';
        } else if (hit > 40 && hit > 80 && hit > 110) {
            currentBossEnergy = "";
        }
    }
}



