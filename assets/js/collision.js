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
        return this.obstacles.some(function(obstacle)
        {const IsHit = obstacle.isHit(x -300, y-250);
            if(IsHit){ console.log("ID " + obstacle.id);}
             return IsHit;} )
    }

    lengthOfObs(){
        //console.log(this.obstacles);
    }
}