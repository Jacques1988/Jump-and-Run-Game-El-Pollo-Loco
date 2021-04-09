function checkForRunning(){
    
    setInterval(function(){  

    
        if(isMovingRight){
            let index = characterGraphicIndex % runningRight.length;
            currentCharacterImage = runningRight[index];
            characterGraphicIndex = characterGraphicIndex +1;
            AUDIO_RUNNING.play();
        }

        if(isMovingLeft){
            let index = characterGraphicIndex % runningLeft.length;
            currentCharacterImage = runningLeft[index];
            characterGraphicIndex = characterGraphicIndex -1;
            AUDIO_RUNNING.play();
            if(characterGraphicIndex < 0){
                characterGraphicIndex = characterGraphicIndex = 0;
            }
        }
     },100);  
              
          
}