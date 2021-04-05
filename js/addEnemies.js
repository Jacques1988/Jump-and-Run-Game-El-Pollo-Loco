function addEnemies(src, enemy_x, enemy_y, scale){
    
    /* let random_Enemie_X = Math.random() * 800;  */

    let base_image = new Image();
    base_image.src = src;
    if(base_image.complete){
        ctx.drawImage(base_image, enemy_x + movingBackground, enemy_y, base_image.width * scale, base_image.height * scale);
    }
   
   
} 
 
function createChicken(type, enemy_x) {
    return {
        "img": "img/enemies/chickens/1.chicken"+ type +".PNG",
        "enemy_x": enemy_x,
        "enemy_y": enemy_y,
        "scale": 0.35,
        "speed": Math.random() * 5
    };
}