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
        return this.obstacles.some(function(obstacle){const Ishit = obstacle.isHit(x -300, y-250); return Ishit;} )
    }

    lengthOfObs(){
        //console.log(this.obstacles);
    }
}