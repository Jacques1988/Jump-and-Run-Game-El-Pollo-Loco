function throwBottle() {
    if(bottleThrowTime) {
        let timepassed = new Date().getTime() - bottleThrowTime;
        let gravity = Math.pow(9.81, timepassed / 290);
        let bottle_x = 230 + timepassed * 0.8;
        let bottle_y = 380 - timepassed * 0.3 + gravity ;

        let baseImage = new Image();
        baseImage.src = 'img/7.Marcadores/Icono/Botella.png';
        if(baseImage.complete){
            ctx.drawImage(baseImage,bottle_x, bottle_y, baseImage.width *0.5, baseImage.height *0.5);
        }
    }
}