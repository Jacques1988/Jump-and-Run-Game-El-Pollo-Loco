function takeHearts() {

    setInterval(function(){
    for (let i = 0; i < placeHearts.length; i++) {
        let heart_x = placeHearts[i] + movingBackground;

        if ((heart_x - 50) < character_x && heart_x + 50 > character_x) {
            placeHearts.splice(i, 1);
            AUDIO_YEAH.play();
            currentLive++;
            currentEnergyBarImage = energyBar[currentLive];
            console.log(currentLive); 
        }
    }
},100);
}