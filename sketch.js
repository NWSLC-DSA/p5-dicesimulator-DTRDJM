var DiceValue = 0;

function setup() {
  createCanvas(400, 400);
  
  button = createButton('Click Here');
  button.position(100, 120);
  button.mousePressed(changeDiceValue);
}

function draw() {
  background(220);
  
  if(DiceValue == 1){
      //result = DiceValueOne;
  DiceValueOne(40, 20, 20);
      //window.prompt(DiceValueOne);
  }
  if(DiceValue == 2){
  DiceValueTwo(40, 20, 20);
  }
}
  function changeDiceValue() {
  let val = random(1,7); //parsing here lops off decimals
  //console.log("changeDiceValue called val = " + val)
  DiceValue = parseInt(val);
  console.log("parsed number = " + DiceValue);
  
  //let val = random(6);
  //parseInt(val);
  //let string = val - NOT REQUIRED see parseInt in Mozilla
  //let number = parseInt(string);
  
  //let val = Math.floor(Math.random() * 6);
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

function diceValueThree(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFour(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFive(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueSix(size, xPoint, yPoint){
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
