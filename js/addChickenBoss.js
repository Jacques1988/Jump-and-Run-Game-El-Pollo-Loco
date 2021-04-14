function addchickenBoss(){
    let Boss = new Image();
    Boss.src = currentBoss;
    if(Boss.complete){
        ctx.drawImage(Boss, boss_x + movingBackground, 190, Boss.width * 0.3, Boss.height * 0.3);
    } 
}

function updateChickenBossImage() {
    setInterval(function () { 
        BossImageIndex++;
        currentBoss = currentBossImage[BossImageIndex];
        if (BossImageIndex > 8) {
            BossImageIndex = 0;
        }
    }, 1000); 


}
