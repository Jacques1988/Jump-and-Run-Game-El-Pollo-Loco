function addEnergyBarObject(src, energyBar_x, energyBar_y, scale){
    let energyBar = new Image();
    energyBar.src = src;
    if(energyBar.complete){
        ctx.drawImage(energyBar, energyBar_x, energyBar_y, energyBar.width * scale, energyBar.height* scale);
    } 
}

function addEnergyBar(){
    addEnergyBarObject('img/7.Marcadores/Barra/Marcador vida/verde/100_.PNG', energyBar_x, energyBar_y, 0.5);
}  

