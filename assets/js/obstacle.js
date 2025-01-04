class obstacle{
    constructor(x, y, radius, id){
        this.x = x + 300;
        this.y = y + 250;
        this.radius = radius;
        this.id = id;
    }

    draw(){
        circle(this.x, this.y, this.radius * 2);
        text(this.id, this.x, this.y);
    }

    isHit(x, y){
        //console.log(Math.sqrt((x - this.x)**2 + (y - this.y)**2));
        
        return Math.sqrt((x - this.x)**2 + (y - this.y)**2) <= this.radius
        
    }
}