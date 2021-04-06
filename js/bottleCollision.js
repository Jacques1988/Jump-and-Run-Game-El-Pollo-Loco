function bottleCollision(){
    if(throwBottle_x > boss_x + movingBackground - 100 && throwBottle_x - 40 < boss_x + movingBackground + 100 ){
        console.log('treffer');
    }
}