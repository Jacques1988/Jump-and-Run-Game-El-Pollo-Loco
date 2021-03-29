function updateCharacter() {
    let character = new Image();
    character.src = 'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png';
    character.onload = function () {
        ctx.drawImage(character, character_x, character_y, character.width * 0.25, character.height * 0.25);

        let jumpTimePassed = new Date().getTime() - startJumpTime;

        if (jumpTimePassed < JUMP_TIME) {
            character_y = character_y - 10;
        } else {
            if (character_y < 235) {
                character_y = character_y + 10;
            }
        }
    }
}