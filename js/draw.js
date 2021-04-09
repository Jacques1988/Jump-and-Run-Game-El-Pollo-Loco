function draw(){    
    addBackground();
    addGround();
    drawTabasco();
    drawHearts();
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


