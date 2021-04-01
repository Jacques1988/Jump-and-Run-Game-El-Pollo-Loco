function calculateEnemyposition() {

    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        enemy.enemy_x = enemy.enemy_x - enemy.speed; 
    }

requestAnimationFrame(calculateEnemyposition);
} 