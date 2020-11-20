var gameState = "serve";
var description = "With the increase and rise of pollution \n around the world this game focusses\n on encountering pollution in a fun \n and interactive way";
var button;
var bg ,bgImg,serveTree,serveTreeImg,serveInvisibleGround;

function preload(){
  serveTreeImg = loadImage("tree.png");
  playBg = loadImage("li.jpg");
  getBackground();
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  button= createButton("Lets Plant");
  button.position(displayWidth/2,displayHeight/2+350);
  
  serveTree = createSprite(displayWidth - 400, displayHeight-displayHeight-300);
  serveTree.addImage(serveTreeImg);
  serveTree.scale = 0.5;
  serveTree.velocityY = 3;
  serveInvisibleGround = createSprite(displayWidth / 2 + 200, displayHeight / 2+100, displayWidth, 20);
  serveInvisibleGround.visible = false;
  // description.velocityX = -3;
  //  bg = createSprite(200,200, 500, 500);
  //  bg.addImage("hello",bgImg);
}

function draw() {
   //  if (gameState == "serve") {
   //    bg.addImage(bgImg);
   //  }
   // else {
   //    bg = null;
   //  }

 
  // if (gameState=="serve" && keyDown==32) {
  //   gameState = "play";
  // }
  if (gameState == "serve") {
     background(bg);
    if (serveTree.isTouching(serveInvisibleGround)) {
      serveTree.velocityY = 0;
      gameState = "play";
    }
  }
  if (gameState == "play") {
     background(playBg);
    var us = createSprite(displayWidth/2, displayHeight-30, displayWidth, 20);
    button.hide();
    serveTree.destroy();
  }

  drawSprites();
  if (gameState == "serve") {
    textSize(40);
    fill("black");
    textStyle(BOLDITALIC);
    text(description, 500, 300);
    textSize(20);
    fill(0);
    text("Objective: Collect and plant seeds,\n fight the pollution monster\n and make the dry earth green", 600, 570);
  }

}

function getBackground() {
  if (gameState == "serve") {
    bgImg = "bg1.jpg";
  }
  // else  {
  //   bgImg = "li.jpg";
  // }
  bg = loadImage(bgImg);
}
function changeState() {
  gameState = "play";
}

function keyPressed(){
  if (gameState == "serve" && keyCode === ENTER) {
    gameState == "play";
  }
}

