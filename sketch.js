var bg,bgImg;
var soldier, shooterImg, shooting_position;
var enemy, enemyImg, enemyGroup;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;




function preload(){
  
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");

 

  shooterImg = loadImage("assets/shooter.png");
  shooting_position = loadImage("assets/shooting_position.png");
  enemyImg  = loadImage("assets/enemy.png");
  bgImg = loadImage("assets/bg.jpg");

}

function setup(){

createCanvas(windowWidth,windowHeight);

//adding the background image
bg = createSprite(displayWidth/2-10,displayHeight/2-30,20,20)
bg.addImage(bgImg)
bg.scale = 1.5



//creating the player sprite
soldier = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
soldier.addImage(shooterImg)
soldier.scale = 0.3
soldier.debug = true
soldier.setCollider("rectangle",0,0,300,300)

heart1 = createSprite(displayWidth-90,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.2

    heart2 = createSprite(displayWidth-90,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.2

    heart3 = createSprite(displayWidth-90,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.2
   
   
 enemyGroup = new Group();

}

function draw() {
  background(0); 


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  soldier.y = soldier.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  soldier.y = soldier.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  soldier.addImage(shooting_position);
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  soldier.addImage(shooterImg)
}



if(enemyGroup.isTouching(soldier)){
 

  for(var i=0;i<enemyGroup.length;i++){     
       
   if(enemyGroup[i].isTouching(soldier)){
        enemyGroup[i].destroy()
        } 
  }
 }



enemies()



drawSprites();

}


function enemies(){
  if(frameCount%80 === 0){
    enemy = createSprite(random(550,1100),random(100,600),30,30);
    enemy.addImage(enemyImg);
    enemy.velocityX = -5;
    enemy.scale = 1.7;
    enemyGroup.add(enemy);
    enemy.lifetime = 400;
  }
}