function updateCharacter() {
    let character = new Image();
    character.src = currentCharacterImage;
    if(character.complete){
        ctx.drawImage(character, character_x, character_y, character.width * 0.25, character.height * 0.25);

        let jumpTimePassed = new Date().getTime() - startJumpTime;

        if (jumpTimePassed < JUMP_TIME) {
            character_y = character_y - 10;
            jump = true;
        } else {
            if (character_y < 235) {
                character_y = character_y + 10;
            }
        }
    }
}

