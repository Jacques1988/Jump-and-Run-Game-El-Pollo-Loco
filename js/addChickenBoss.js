function addchickenBoss(){
    let Boss = new Image();
    Boss.src = currentBoss;
    if(Boss.complete){
        ctx.drawImage(Boss, boss_x + movingBackground, 190, Boss.width * 0.3, Boss.height * 0.3);
    }
        /* BossImageIndex++;
        currentBoss = currentBossImage[BossImageIndex];
        if(BossImageIndex > 9){
            BossImageIndex = 0;
        } */
    
}

