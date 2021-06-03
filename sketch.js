var garden, gardenImg; 
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;


function preload() {
  gardenImg = loadImage("garden.png");
  catImg1 = loadAnimation("cat1.png");
  catImg2 = loadAnimation("cat2.png", "cat3.png");
  mouseImg1 = loadAnimation("mouse1.png");
  mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(900,800);
    //create tom and jerry sprites here
    garden = createSprite(450,450,900,800);
    
    
    cat = createSprite(700,750,50,20);
    cat.addAnimation("cat", catImg1);
    cat.shapeColor = "red";
    
    mouse  = createSprite(150,750,50,20);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.shapeColor = "blue";



}

function draw() {

    background("lightblue");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
      
      cat.velocityX = 0;
    }


    edges = createEdgeSprites();
    

    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(RIGHT_ARROW)){
 mouse.addAnimation("mouseTeasing", mouseImg2);
 mouse.changeAnimation("mouseTeasing");
}

if(keyDown(LEFT_ARROW)){
  cat.addAnimation("catRunning", catImg1);
  cat.changeAnimation("catRunning", catImg2);
  cat.velocityX = -2;
}



}


