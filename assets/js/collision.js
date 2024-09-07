class collision{
    constructor(){
        this.obstacles = [];
    }

    addCollision(obstacle){
        this.obstacles.push(obstacle);
    }
    
    printObstacles(){
        this.obstacles.forEach(function(obstacle){console.log(obstacle);});
    }
}