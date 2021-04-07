
//bottle collisiondetection

function bottleCollision(throwBottle_x, throwBottle_y) {
    if (throwBottle_x > boss_x + movingBackground - 50 && throwBottle_x < boss_x + movingBackground + 50 && throwBottle_y < 445) {
        hit = hit + 5;
        console.log(hit);

        if (hit > 25 && hit < 50 && hit < 70) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Azul.PNG'
        } else if (hit > 25 && hit > 50 && hit < 70) {
            currentBossEnergy = 'img/7.Marcadores/Marcadorvida_enemy/Naranja.PNG';
        } else if (hit > 25 && hit > 50 && hit > 70){
            currentBossEnergy = "";
        }
    }
        }
    


