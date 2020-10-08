var car,wall;
var speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1300,200,60,height/2);
  wall.shapeColor=(80,80,80);
  speed=random(55,90)
  weight=random(400,1500)

  car.velocityX=speed;
}
function draw() {
  background(0,255,0);  
  if(car.collide(wall)){
    car.shapeColor=(0,0,255)
  }



  drawSprites();
}