var DiceArrayPos = 0;  //Array Index has to begin at zero

var DiceValueFunctionArray = [DiceValueOne, DiceValueTwo, DiceValueThree, DiceValueFour, DiceValueFive, DiceValueSix];

function setup() {
  createCanvas(400, 400);
  
  //console.log(DiceValueFunctionArray) Dispalys the six DiceValue Array positions in the variable above
  
  button = createButton('Click Here');
  button.position(100, 120);
  button.mousePressed(changeDiceArrayPos);
}

function draw() {
  background(220);
  
  DiceValueFunctionArray[DiceArrayPos](40,20,20);
  //if(DiceValue == 1){
  //DiceValueOne(40, 20, 20);
  //}
}
  function changeDiceArrayPos() {
  //let val = random(0,6); //parsing here lops off decimals
  DiceArrayPos = parseInt(random(0,6));
  //Now randomly selecting one of the six DiceValue Array positions in order to simulate rolling the dice. 
  console.log(DiceArrayPos);
//}
}
//This is a user defined function for drawing a dice with the value one.

function DiceValueOne(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function DiceValueTwo(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function DiceValueThree(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function DiceValueFour(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function DiceValueFive(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function DiceValueSix(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.5) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.5) + yPoint);
}
