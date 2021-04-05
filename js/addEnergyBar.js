function addEnergyBarObject(currentEnergyBarImage ,energyBar_x, energyBar_y, scale){
    let energyBar = new Image();
    energyBar.src = currentEnergyBarImage;
    if(energyBar.complete){
        ctx.drawImage(energyBar, energyBar_x, energyBar_y, energyBar.width * scale, energyBar.height* scale);
    } 
}

function addEnergyBar(){
    addEnergyBarObject(currentEnergyBarImage, energyBar_x, energyBar_y, 0.5);
}  

