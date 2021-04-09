function takeBottles() {
    //take tabasco bottles
    setInterval(function () {
        for (let i = 0; i < placeTabasco.length; i++) {
            let tabasco_x = placeTabasco[i] + movingBackground;

            if ((tabasco_x - 50) < character_x && (tabasco_x + 50) > character_x) {
                if (character_y > 230) {
                    placeTabasco.splice(i, 1);
                    AUDIO_TAKEBOTTLE.play();
                    currentBottles++;
                    incrementBottleGraphic();
                }
            }
        }
    }, 50);
}
