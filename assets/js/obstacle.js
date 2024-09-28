class obstacle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(){
        circle(this.x, this.y, this.radius * 2);
    }

    isHit(x, y){
        return Math.sqrt((this.x - x)**2 + (this.y - y)**2) <= this.radius
    }
}