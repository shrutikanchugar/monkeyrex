var monkey, monkey_running, m_j, monkeyg;
var ground,ground_img;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var i_d;

function preload()
{
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyg = loadImage("sprite_7.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.jpg");
  //m_j = loadSound("Mairo-jump-sound.wav");
}

function setup() 
{
  createCanvas(1900,320);
   
 //i_d=createSprite(100,174,20,200000000);

  monkey = createSprite(200,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  //monkey.colide("ground");
  
  ground = createSprite(200,243,20000,30);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  obstacle=createSprite(700,160);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2
  obstacle.velocityX=-7;
}

function draw() 
{
  background("white");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  if (keyDown("space")){
    monkey.velocityY=-20;
    //m_j.Play();
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (obstacle.x<=100)
  {
    obstacle = createSprite(1000, 160);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -7;
  }
  if (monkey.isTouching(obstacle)){
    monkey.addImage(monkeyg);
    monkey.velocityY = 0;
    monkey .visible = false;
    obstacle.visible = false;
    background("red");
    obstacle.velocityX = 0;
    ground.visible = false;
  }
  drawSprites();  
} 
 
   