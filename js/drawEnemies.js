/* function drawEnemies(){
    
    addEnemies('img/enemies/chickens/1.chicken1.PNG',800, enemy_y, 0.35);
    addEnemies('img/enemies/chickens/1.chicken2.PNG',1000, enemy_y, 0.35);
}   */

function drawEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i];
        addEnemies(enemy.img, enemy.enemy_x, enemy.enemy_y, enemy.scale);
    }
} 

function createEnemyList(type, enemy_x) {
    enemies = [
        
        createChicken(1,1700),
        createChicken(2,1900),
        createChicken(1,2700),
        createChicken(2,3300),
        createChicken(2,4000),
        createChicken(1,4900),
        createChicken(2,5700),
        createChicken(2,6000),
        createChicken(2,6800),
        createChicken(1,7500),
        createChicken(1,7900),
        createChicken(2,8400),
        createChicken(1,9000),
        createChicken(2,9900),
        createChicken(1,10000)
    ];
}