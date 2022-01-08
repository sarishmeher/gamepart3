var gameState=0
let ground;
let lander;
var lander_img;
var bg_sur1,bg;
var alien1

var Alien1
var alien3
var Alien3

var ufo2
var Ufo2

var home1
var Home1

var gun1
var gun2

var human1;
var human2;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_sur1 = loadImage("moon_sur3.jpg");
  alien1 = loadImage("alien1.png")
  alien3 = loadImage("alien3.png")
  ufo2 = loadImage("ufo2.png")
  home1 = loadImage("home1.png")
  gun1 = loadImage("gun1.png")
  gun2 = loadImage("gun2.png")
  human1 = loadImage("human1.png")
  human2 = loadImage("human2.png")
}

function setup() {
  createCanvas(1600,700);
  frameRate(80);

 

  bg = createSprite(700,300,1600,50)
  bg.addImage(bg_sur1)
  bg.scale = 1.4
  //bg.y = bg.height/2

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  Alien1 = createSprite(600,480,20,20);
  Alien1.addImage(alien1);
  Alien1.scale = 0.2;
  

  Alien3 = createSprite(800,470,20,20);
  Alien3.addImage(alien3);
  Alien3.scale = 0.3;

Ufo2 = createSprite(1150,150,40,40);
Ufo2.addImage(ufo2)
Ufo2.scale = 1


Home1 = createSprite(300,400)
Home1.addImage(home1);

  Alien1.visible = false
  Alien3.visible = false

 
  rectMode(CENTER);
 
  textSize(15);
  ground = createSprite(1150,500,200,10)
  ground.shapeColor = "red"
  ground.visible=false
  
}

function draw() 
{
  background(51);

  Ufo2.velocityY =2

  
  if (gameState===1) {
    Ufo2.visible=false

    Alien1.visible = true
  Alien3.visible = true


  }

  if(Ufo2.collide(ground)) {
    gameState=1
  }
//bg.velocityY=-2

//if(bg.y>windowHeight -100){
 // bg.y = bg.heigth/2
//}
  
 

 

  
 
  drawSprites();
}


