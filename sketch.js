function setup() {
  createCanvas(600, 600);
  background("blue");
}

function draw() {

  stroke("blue"); 
  fill("white");
  
  

  if(mouseIsPressed){
  rect(mouseX,mouseY,10,10);
 }
}