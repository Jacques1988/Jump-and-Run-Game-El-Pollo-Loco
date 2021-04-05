function draw(){    
    addBackground();
    addGround();
    drawTabasco();
    drawEnemies();
    updateCharacter();
    addClouds();
    addEnergyBar(); 
    drawCountbottles();
    
    requestAnimationFrame(draw);
}


