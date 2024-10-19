class Player{
    constructor(label, colour) {
        this.label = label;
        this.x = 0;
        this.y = 0 ;
        this.diameter = 15;
        this.colour = colour;
    }

    draw(){
        fill(this.colour);
        stroke("black");
        
        this.x = random(0, width - (4 * this.diameter));
        this.y = random(0, height - (4 * this.diameter));
        circle(this.x, this.y, this.diameter);
        text(this.label + " (" + floor(this.x) + "," + floor(this.y) + ")" , this.x - (4 * this.diameter), this.y - this.diameter);
    }

    draw2(x, y){
        fill(this.colour);
        stroke("black");

        circle(this.x, this.y, this.diameter);
        text(this.label + " (" + floor(this.x) + "," + floor(this.y) + ")" , this.x - (4 * this.diameter), this.y - this.diameter);
    }
}