class obstacle{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(){
        circle(this.x, this.y, this.radius * 2);
    }
}