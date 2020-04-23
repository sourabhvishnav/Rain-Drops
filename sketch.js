function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0); 
  drops();
  drawSprites();
}

function drops (){
  
  if(frameCount%7===0){
  var drop = createSprite(200,0,20,20);
  drop.x = random(25,450);
  drop.width = random(3,6);
  drop.height = random(55,150);
  drop.velocityY = 3;
  drop.shapeColor = "green";
 }
}