var movingRect,fixedRect


function setup() {
  var canvas=createCanvas(800,400);
   movingRect=createSprite(400, 200, 50, 80);
   fixedRect=createSprite(400,300,80,50);
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="blue"
  fixedRect.velocityY=-2
  movingRect.velocityY=2

  
}

function draw() {
  background(255,255,255);  
 // movingRect.y=mouseY
  //movingRect.x=mouseX
   
BounceOff();
    //isTouching();
  drawSprites();
}
function isTouching(){

  
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2 &&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
   ){
     movingRect.shapeColor="red"
     fixedRect.shapeColor="red"
   
   }
   
   else{
     movingRect.shapeColor="blue"
     fixedRect.shapeColor="blue"
   }
  }

   function BounceOff()
{
if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2 ){

    movingRect.velocityY=movingRect.velocityY*(-1)
    fixedRect.velocityY=fixedRect.velocityY*(-1)
  }

if(  movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){

movingRect.velocityX=movingRect.velocityX*(-1)
fixedRect.velocityX=fixedRect.velocityX*(-1)

  }



}







