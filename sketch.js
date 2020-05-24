var package,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin;
var dustbin_img,ball_img;

function preload(){
   dustbin_img = loadImage("dustbingreen.png");
   ball_img = loadImage("paper.png");
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world  = engine.world;

	dustbin = createSprite(440,450,5,5)
	dustbin.addImage(dustbin_img)
	dustbin.scale = 0.3


	package = Bodies.circle(25 , 380 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, package);
	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 450, width, 5 , {isStatic:true} );
 	 World.add(world, ground);

	Engine.run(engine);

}


function draw() {

	Engine.update(engine);
	background(200);


   image(ball_img,package.position.x,package.position.y,70, 70)

   rectMode(CENTER);
//    fill("red");
//    rect(ground.position.x,ground.position.y,500,10);
   
   

   console.log(package.position.x);
  
   rect(dustbin.position.x,dustbin.position.y,5,5);
    


  if(package.x<430){
	  World.remove(package.body);
  }
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW) {
		Body.applyForce( package, {x: package.position.x, y: package.position.y}, {x: 0.0008, y: -0.0008});
	}
}




