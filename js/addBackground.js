function addBackground() {
    let air = new Image();
    air.src = 'img/5.Fondo/Capas/5.cielo_1920-1080px.png';
    air.onload = function () {
        ctx.drawImage(air, offsetBackground_x , offsetBackground_y, canvas.width, canvas.height);
    }
}