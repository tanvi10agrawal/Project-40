var sponge, pine, ocean, end, squid, wall, wall2, wall3, win;
var spongebobImg, oceanImg, squidImg, pineImg, endImg, winImg;
var play = 1;
var end = 0;
var gamestate = play;


function preload() {
  spongebobImg = loadAnimation("spongebob.png","spongebob2.png","spongebob3.png");
  pineImg = loadImage("pineapple.png");
  oceanImg = loadImage("bg.jpg");
  endImg = loadImage("end.png");
  squidImg = loadAnimation("squidward.png", "squidward2.png");
  winImg=loadImage("win.png");
}

function setup() {
  createCanvas(1200, 600);

  ocean = createSprite(1, 1, 1, 1);
 // ocean.addImage(oceanImg);
  ocean.velocityX = -4;
  ocean.scale=0.25

  sponge = createSprite(100, 75);
  sponge.addAnimation("running",spongebobImg);
 //sponge.velocityX=3;
  sponge.scale=0.1

  squid = createSprite(300,500);
  squid.addAnimation("running", squidImg);
  squid.scale=1

  end = createSprite(500, 300);
  end.depth=end.depth+1;
  end.addImage(endImg);
  end.visible = false;
  end.scale=0.1

  pine = createSprite(1100,300);
  pine.addImage(pineImg);
  pine.scale=0.52

//  win=createSprite(500,300);
  //win.addImage(win.png);
 // win.visible=false

  wall=createSprite(510,500, 30, 600);
  wall2=createSprite(200,100,30,500);
  wall3=createSprite(800,100,30,600);

}

function draw() {
  background(oceanImg);

  textSize(20)
  fill("white");
  text("Get SpongeBob to his home without touching the walls!", 1, 575);

  if(gamestate === play){
    ocean.velocityX = -4;
    if(ocean.x<0){
       ocean.x=ocean.width/2;
    }    

  }else if(gamestate === end){
    end.visible=true;
  }

  if(keyDown("right")){
    sponge.x=sponge.x+10;
  }
  if(keyDown("left")){
    sponge.x=sponge.x-10;
  }
  if(keyDown("up")){
    sponge.y=sponge.y-10;
  }
  if(keyDown("down")){
    sponge.y=sponge.y+10;
  }

  if(sponge.isTouching(wall2)){
    gamestate=end;
  }
  if(sponge.isTouching(wall3)){
    gamestate=end;
  }
  if(sponge.isTouching(wall)){
    gamestate=end;
  }
 if(sponge.isTouching(pine)){
   fill("white");
   textSize(100)
   text("YOU WIN!!!!", 275,300);
  }





  drawSprites();
}