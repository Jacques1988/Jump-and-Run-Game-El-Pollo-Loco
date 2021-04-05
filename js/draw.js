function draw(){    
    addBackground();
    addGround();
    drawEnemies();
    updateCharacter();
    addClouds();
    addEnergyBar(); 
    requestAnimationFrame(draw);
}
