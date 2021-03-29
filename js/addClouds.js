function addClouds() {

    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 0 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 700 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 1400 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 2100 + cloudOffset_x, 30, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 2800 + cloudOffset_x, 0, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 3500 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 4200 + cloudOffset_x, 0, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 4900 + cloudOffset_x, 30, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 5600 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 6300 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 7000 + cloudOffset_x, 0, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 7700 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 8400 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 9100 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.png', 9800 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.png', 10500 + cloudOffset_x, 30, 0.6);

} 

function cloudOffset(){

    setInterval(function(){
        cloudOffset_x = cloudOffset_x - 0.25;
    },25);
}