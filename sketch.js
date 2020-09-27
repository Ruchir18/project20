var car , wall;
var speed , weight;
function setup() {
  createCanvas(1600,400)
  speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1300,200,60,300);
  wall.shapeColor="blue";
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
}

function draw() {
  background("red");  
  if(isTouching){
    wall.shapeColor="green"
    car.shapeColor="green" 
  }
  else{
    wall.shapeColor="blue"
    car.shapeColor=80,80,80 
  }
  car.collide(wall)
  drawSprites();
}
function isTouching(){
if (car.x - wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < wall.width/2 +car.width/2
  && car.y - wall.y < wall.height/2 +car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2) {
return true;
}
else {
return false;
}
}