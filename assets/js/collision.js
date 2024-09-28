class collision {
    constructor() {
        this.obstacles = [];
    }

    addCollision(obstacle) {
        this.obstacles.push(obstacle);
    }

    printObstacles() {
        this.obstacles.forEach(function (obstacle) { console.log(obstacle); });
    }

    detectCollision(x, y) {
        this.obstacles.forEach(function (obstacle) { if (obstacle.isHit(x, y)) { return true } });
    }
}