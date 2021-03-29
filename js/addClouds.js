function addClouds() {
    let clouds = new Image();
    clouds.src = 'img/5.Fondo/Capas/4.nubes/1.png';
    clouds.onload = function () {
        ctx.drawImage(clouds, cloudOffset_x ,0, clouds.width * 0.3, clouds.width * 0.3);
    }

    let clouds2 = new Image();
    clouds2.src = 'img/5.Fondo/Capas/4.nubes/2.png';
    clouds2.onload = function () {
        ctx.drawImage(clouds2, 600 + cloudOffset_x, 0, clouds.width * 0.3, clouds.width *0.3);
    }
}

function cloudOffset(){

    setInterval(function(){
        cloudOffset_x = cloudOffset_x - 0.25;
    },25);
}