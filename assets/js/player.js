class Player{
    constructor(label, colour) {
        this.label = label;
        this.x = 0;
        this.y = 0 ;
        this.diameter = 15;
        this.colour = colour;
        this.graph = "";
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

    plotGraph(func){
        noFill();
        stroke(0, 0, 0);
      
        //console.log("plot");
      
        beginShape();
        stroke(255, 0, 0);
        for (let x = 0;  x < width / 2; x++) {
          
            let xCoord = x + width / 2 + this.x;
            let y;
            try {
                y = eval(func.replace(/x/g, `(${x})`)) - this.y;
                console.log(func);
                console.log(y);
                console.log((func.replace(/x/g, `(${x})`)))
                //console.log("y " + y);
                //console.log(collisions.detectCollision(x, y));
                if(collisions.detectCollision(x, y)){ // TODO, fix collision
                  console.log("Collision");
                  break;
                } 
                
                vertex(xCoord -300, height/2 - y -250);
                
            } catch (e) {
                console.error("Invalid function input", e);
                break;
            }
        }
        endShape();
        beginShape();
        stroke(0, 0, 255);
        for (let x = 0; x > -width /2; x--){ //using p1 for testing. TODO add player turns
          
          let xCoord = x + width / 2 + this.x;
          let y;
      
          try {
            y = eval(func.replace(/x/g, `(${x})`)) - this.y;
            // console.log("y " + y);
            // console.log(collisions.detectCollision(x, y));
            if(collisions.detectCollision(x, y)){
              console.log("Collision");
              break;
            }
      
            vertex(xCoord -300, height / 2 - y -250);
          } catch (e) {
            console.error("Invalid function input", e);
            break;
        }
       }
        endShape();
    }
}