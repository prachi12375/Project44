var boy, girl;
var boyImg, girlImage, boyBackImg, girlBackImg, friendImg, arrowImg, doorImg, ghostImg, grassImg
var gameState="start";
function preload(){
  boyImg = loadImage("boy.jpg")
  girlImg = loadImage("girl.jpg")
  boyBackImg = loadImage("boy's back.png")
  girlBackImg= loadImage("girl's back.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  boy=createSprite(400, 300, 50, 50);
  boy.addImage(boyImg)
  boy.scale=0.74

  girl=createSprite(1000, 300, 50, 50);
  girl.addImage(girlImg)
  girl.scale=0.25
}

function draw() {
  background(0);  
  drawSprites();
  if(gameState==="start"){
    boy.visible=true
    girl.visible=true

    textSize(20)
    fill(255)
    text("Click on the character which you want to be and press play button to start the game.", 300, 100)
  }
}