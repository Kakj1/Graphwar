let func = ''; 
let input; 
let button; 
let history = [];
let collisions = new collision();

function setup() {
  createCanvas(600, 500);

  input = select('#functionInput');
  button = select('#plotButton');
  button.mousePressed(sanitizeInput); 

  setObstacles(collisions);

  let p1 = new Player("Player 1", "#d8411c");
  let p2 = new Player("Player 2", "#4441fa");
  p1.draw();
  p2.draw();
}

function setObstacles(collisions){

  let obstacleAmount = random(3,9);
  fill(10, 113, 53);
  //  let x = random(0, width);
  //   let y = random(0, height);
  //   let radius = random(5, 50);
  let ob = new obstacle(10, 10, 50);
  ob.draw();
  collisions.addCollision(ob);

  // for (let i =0; i<= obstacleAmount; i++){
  //   let x = random(0, width);
  //   let y = random(0, height);
  //   let radius = random(5, 50);
  
  //   let ob = new obstacle(x, y, radius);
  //   ob.draw();
  //   collisions.addCollision(ob);
  // }
  // collisions.printObstacles(); 
}
  
function draw() {
  
  stroke(255);
  line(0, height / 2, width, height / 2);                   // X-axis
  line(width / 2, 0, width / 2, height);                    // Y-axis



  if (func) {
    history.push(func);
    plot();
  }
}

function sanitizeInput() {
  func = input.value().replace('^', '**').replace(/ln/g, 'Math.log'); 
}

function plot() {
  noFill();
  stroke(0, 0, 0);

  beginShape();

  for (let x = -width / 2; x < width / 2; x++) {
      let xCoord = x + width / 2;
      let y;
      try {
          y = eval(func.replace(/x/g, `(${x})`));
          console.log("y " + y);
          console.log(collisions.detectCollision(x, y));
          if(collisions.detectCollision(x, y)){
            console.log(y);
            console.log(x);
            collisions.lengthOfObs();
          } 
          
          vertex(xCoord, height / 2 - y);
      } catch (e) {
          console.error("Invalid function input", e);
          break;
      }
  }
  endShape();
  
}