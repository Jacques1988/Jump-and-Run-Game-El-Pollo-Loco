function addTabasco(src, tabasco_x, tabasco_y, scale){
    let tabasco = new Image();
    tabasco.src = src;
    if(tabasco.complete){
        ctx.drawImage(tabasco, tabasco_x + movingBackground, tabasco_y, tabasco.width * scale, tabasco.height * scale);
    }
}

function drawTabasco(){

    for(let i = 0 ; i < placeTabasco.length; i++){
        let tabasco_x = placeTabasco[i];

        addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x, tabasco_y, 0.5);
    }
}

/*eine Lösung ohne Arrayiteration

/* function drawTabasco(){
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 800 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 1200 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 1900 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 2500 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 2700 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 3200 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 3900 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 4100 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 5000 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 5900 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 7000 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 7900 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 8400 , tabasco_y, 0.5);
    addTabasco('img/7.Marcadores/Icono/Botella.png', tabasco_x + 8800 , tabasco_y, 0.5);
   
} */