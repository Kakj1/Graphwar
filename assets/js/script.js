let func = ''; 
let input; 
let button; 
let history = [];
let collisions = new collision();

let p1 = new Player("Player 1", "#d8411c");
let p2 = new Player("Player 2", "#4441fa");

let turn = "Player 1";

function setup() {
  createCanvas(600, 500);

  input = select('#functionInput');
  button = select('#plotButton');
  button.mousePressed(sanitizeInput); 

  setObstacles(collisions);

  p1.draw();
  p2.draw();
}

function setObstacles(collisions){

  let obstacleAmount = random(3,9);
  fill(10, 113, 53);

  for (let i =0; i<= obstacleAmount; i++){
    let x = random(-width/2, width/2);
    let y = random(-height/2, height/2);
    let radius = random(5, 50);
  
    let ob = new obstacle(x, y, radius);
    ob.draw();
    collisions.addCollision(ob);
  }
  collisions.printObstacles(); 
}
  

function draw() {
  
  clear();
  stroke(255);
  line(0, height / 2, width, height / 2);                   // X-axis
  line(width / 2, 0, width / 2, height);                    // Y-axis

  p1.draw2(p1.x, p1.y);
  p2.draw2(p2.x, p2.y);

  if(turn == "Player 1"){
    p1.plotGraph();
    setTimeout(Switch, 5000);
  }else{
    p2.plotGraph();
    setTimeout(Switch, 5000);
  }

  //plot(p1);

  // if (func) {
  //   history.push(func);
  //   plot();
  // }
}

function sanitizeInput() {
  func = input.value().replace('^', '**').replace(/ln/g, 'Math.log'); 
}

function plot(CurrentPlayer) { //Split plot into positve and negitve areas of graph, and orgin needs to be at players.
  noFill();
  stroke(0, 0, 0);

  console.log("plot");

  beginShape();
  stroke(255, 0, 0);
  for (let x = 0;  x < width / 2; x++) {
    
      let xCoord = x + width / 2 + CurrentPlayer.x;
      let y;
      try {
          y = eval(func.replace(/x/g, `(${x})`)) - CurrentPlayer.y;
          console.log("y " + y);
          // console.log(collisions.detectCollision(x, y));
          if(collisions.detectCollision(x, y)){ // TODO, fix collision
            //console.log(x, y);
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
    
    let xCoord = x + width / 2 + CurrentPlayer.x;
    let y;

    try {
      y = eval(func.replace(/x/g, `(${x})`)) - CurrentPlayer.y;
      // console.log("y " + y);
      // console.log(collisions.detectCollision(x, y));
      if(collisions.detectCollision(x, y)){
        //console.log(x, y);
        break;
      }

      vertex(xCoord -300, height / 2 - y -250);
    } catch (e) {
      console.error("Invalid function input", e);
      break;
  }
 }
  endShape();

  Switch();
}

function Switch(){
  if(turn == "Player 1"){
    turn = "Player 2";
  } else{
    turn = "Player 1";
  }
}
