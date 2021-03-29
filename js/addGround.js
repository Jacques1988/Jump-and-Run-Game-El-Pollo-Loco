function addGround(){
    let ground1 = new Image();
    ground1.src = 'img/5.Fondo/Capas/1.suelo-fondo1/1.png';
    ground1.onload = function () {
        ctx.drawImage(ground1, offsetBackground_x, offsetBackground_y, canvas.width, canvas.height);
    }
}