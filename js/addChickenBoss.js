function addchickenBoss(){
    let Boss = new Image();
    Boss.src = 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.PNG';
    if(Boss.complete){
        ctx.drawImage(Boss, boss_x + movingBackground, 190, Boss.width * 0.3, Boss.height * 0.3);
    }
}