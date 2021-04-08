function draw(){    
    addBackground();
    addGround();
    drawTabasco();
    drawEnemies();
    updateCharacter(); 
    addClouds();
    addEnergyBar(); 
    drawCountbottles();
    throwBottle();
    addchickenBoss();
    addBossEnergy();

    requestAnimationFrame(draw);
}


