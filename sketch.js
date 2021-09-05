var bg,sleep,brush,gym,eat,drink,move;
var astronaut;

function preload() {
  bg = loadImage("/iss.png");
  sleep = loadAnimation("/sleep.png");
  brush = loadAnimation("/brush.png")
  gym = loadAnimation("/gym1.png");
  eat = loadAnimation("/eat1.png")
  drink = loadImage("/drink1.png")
  move = loadImage("/move.png")

}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("moving",move);
  astronaut.scale= 0.1

}

function draw() {
  background(bg);
  
  textSize(15);
  text("UP ARROW = Brushing",50,50);
  textSize(15);
  text("DOWN ARROW = Gymming",50,70);
  textSize(15);
  text("LEFT ARROW = Eating",50,90);
  textSize(15);
  text("RIGHT ARROW = Sleeping",50,110);
  textSize(15);
  text("M KEY = MOVING",50,130);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 150
    astronaut.x = 200
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 300
    astronaut.x = 200
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating")
    astronaut.x = 350
    astronaut.y = 200
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping")
    astronaut.y = 200
    astronaut.x = 400
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving")
    astronaut.y = 300
  }




  drawSprites();
}