
function addhearts(src, heart_x, heart_y, scale){
    let heart = new Image();
    heart.src = src;
    if(heart.complete){
        ctx.drawImage(heart, heart_x, heart_y, heart.width * 0.5, heart.height * 0.5);
    }
}

function drawHearts(){
    for(let i = 0; i < placeHearts.length; i++){
        heart_x = placeHearts[i];

        addhearts('img/7.Marcadores/Icono/Vidas.PNG', heart_x + movingBackground, 445, 0.5);
    }
    
}