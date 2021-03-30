
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,wall;
var speed,weight;
var deformation;

function preload()
{
	
}
function setup() {
	createCanvas(1600,400);
	speed = random(55,90);
	weight = random(400,1500);

	car = createSprite(50,200,50,50);
	wall = createSprite(1500,200,60,height/2);

	car.velocityX = speed;

	deformation=(0.5*speed*speed*weight)/22500;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  if(car.isTouching(wall)){
	  car.velocityX = 0;
	  if(deformation<100){
		  car.shapeColor = "green";
	  }
	  else if(deformation>100&&deformation<180){
		  car.shapeColor = "yellow";
	  }
	  else{
		  car.shapeColor = "red";
	  }
  }
 
}



