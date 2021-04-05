function takeBottles() {
    //take tabasco bottles

    /*********************Warum muss man + movingBackground einfügen ? Nicht ganz verstanden */
    setInterval(function () {
        for (let i = 0; i < placeTabasco.length; i++) {
            let tabasco_x = placeTabasco[i] + movingBackground;

            if ((tabasco_x - 50) < character_x && (tabasco_x + 50) > character_x) {
                if (character_y > 230) {
                    placeTabasco.splice(i, 1);
                    AUDIO_TAKEBOTTLE.play();
                    currentBottles++;
                    
                    let index = tabascoBarGraphicIncex % availableTabasco.length;
                    currentTabasco = availableTabasco[index];
                    tabascoBarGraphicIncex = tabascoBarGraphicIncex + 1;
                    if(currentBottles > 6 ){
                        currentTabasco = 'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.PNG';
                        if(currentTabasco < 0){
                            currentTabasco = 'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.PNG';
                        }
                    }
                }
            }
        }
    }, 50);
}
