function addBackgroundObject(src, offset_x, offset_y, scale, opacity){
    if(opacity != undefined){
        ctx.globalAlpha = opacity;
    }

    let base_Image = new Image();
    base_Image.src = src;
    if(base_Image.complete){
        ctx.drawImage(base_Image, offset_x + movingBackground, offset_y, canvas.width * scale, canvas.height * scale);
    }
}


