function incrementBottleGraphic() {
    /* let index = tabascoBarGraphicIndex % availableTabasco.length;
    currentTabasco = availableTabasco[index];
    tabascoBarGraphicIndex = tabascoBarGraphicIndex + 1; */

    tabascoBarGraphicIndex = currentBottles;
    currentTabasco = availableTabasco[currentBottles];
    if (currentBottles >= 6) {
        currentTabasco = 'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.PNG';  
    }
}

function decrementBottleGraphic(){
    /* let index = tabascoBarGraphicIndex % availableTabasco.length;
    currentTabasco = availableTabasco[index]; 
    tabascoBarGraphicIndex = tabascoBarGraphicIndex - 1; */

    tabascoBarGraphicIndex = currentBottles;
    currentTabasco = availableTabasco[currentBottles];
    if(currentBottles < 1){
        currentTabasco = 'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.PNG';  
    }

    requestAnimationFrame(incrementBottleGraphic);
}
