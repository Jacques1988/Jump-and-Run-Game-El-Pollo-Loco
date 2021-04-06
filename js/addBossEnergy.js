

function addBossEnergy() {
    let BossEnergy = new Image();
    BossEnergy.src = 'img/7.Marcadores/Marcadorvida_enemy/Vede.png';
    if (BossEnergy.complete) {
        ctx.drawImage(BossEnergy, boss_x, 0, BossEnergy.width * 0.5, BossEnergy.height * 0.5);
    }
}



