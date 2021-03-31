function draw(){    
    addBackground();
    addGround();
    drawEnemies();
    updateCharacter();
    addClouds();
    
    requestAnimationFrame(draw); 
    
}
