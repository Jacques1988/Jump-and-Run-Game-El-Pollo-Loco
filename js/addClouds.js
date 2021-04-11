function addClouds() {

    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 0 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 700 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 1400 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 2100 + cloudOffset_x, 30, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 2800 + cloudOffset_x, 0, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 3500 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 4200 + cloudOffset_x, 0, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 4900 + cloudOffset_x, 30, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 5600 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 6300 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 7000 + cloudOffset_x, 0, 0.4);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 7700 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 8400 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 9100 + cloudOffset_x, 30, 0.5);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/1.PNG', 9800 + cloudOffset_x, 0, 0.6);
    addBackgroundObject('img/5.Fondo/Capas/4.nubes/2.PNG', 10500 + cloudOffset_x, 30, 0.6);

} 

function cloudOffset(){

    setInterval(function(){
        cloudOffset_x = cloudOffset_x - 0.25;
    },25);
}