function draw(){
    addBackground();
    addGround();
    updateCharacter();
    addClouds();
    requestAnimationFrame(draw);
}
