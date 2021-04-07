function drawCountbottles(){
   
    ctx.font = '30px Kalam';
    ctx.fillText('X' + currentBottles, 700, 63);

    let availableBottles = new Image();
    availableBottles.src = currentTabasco;
    if(availableBottles.complete){
        ctx.drawImage(availableBottles, 400, 0, availableBottles.width * 0.5, availableBottles.height * 0.5 );
    }

}

