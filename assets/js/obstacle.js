class obstacle{
    constructor(x, y, radius){
        this.x = x + 300;
        this.y = y + 250;
        this.radius = radius;
    }

    draw(){
        circle(this.x, this.y, this.radius * 2);
    }

    isHit(x, y){
        //console.log(Math.sqrt((x - this.x)**2 + (y - this.y)**2));
        return Math.sqrt((x - this.x)**2 + (y - this.y)**2) <= this.radius
    }
}