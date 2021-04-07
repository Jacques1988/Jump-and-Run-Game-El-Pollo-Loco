

function addBossEnergy() {
    let BossEnergy = new Image();
    BossEnergy.src = currentBossEnergy;
    if (BossEnergy.complete) {
        ctx.drawImage(BossEnergy, boss_x + movingBackground, 0, BossEnergy.width * 0.5, BossEnergy.height * 0.5);
    }
}



