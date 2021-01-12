
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score,ground,destroy,backgrImg,backgr;

function preload(){
  
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  backgrImg=loadImage("jungle.jpg");
 
}



function setup() {
createCanvas(800,400);
  
   
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backgrImg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
monkey = createSprite(100,315,20,50);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;

ground = createSprite(400,350,1000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
  ground.visible=false;
  
  
  
  FoodGroup = new Group();
obstaclesGroup = new Group();
  
  score=0;
}


function draw() {
background("lightblue"); 
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
 if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
 if (FoodGroup.isTouching(monkey)) {
    FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30:monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    } 
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
  

 if (obstaclesGroup.isTouching(monkey)) {
  monkey.scale=0.08;
}
      drawSprites();
  
  stroke("white") 
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);   
  
}
function spawnFood() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX = -5;
  
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    

    FoodGroup.add(banana);                                       }                                
  }
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
 obstacle.velocityX = -6;
    
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
   
         
    obstacle.lifetime = 300;
    
    
    
    obstaclesGroup.add(obstacle);
  }
}



