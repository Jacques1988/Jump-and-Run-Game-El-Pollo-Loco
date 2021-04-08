function drawCountbottles(){
   
    ctx.font = '30px Kalam';
    ctx.fillText('X' + currentBottles, 280, 113);

    let availableBottles = new Image();
    availableBottles.src = currentTabasco;
    if(availableBottles.complete){
        ctx.drawImage(availableBottles, 40, 60, availableBottles.width * 0.4, availableBottles.height * 0.4 );
    }
}

