
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
	paperImg=loadImage("paper.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	var ball_options={
		restitution:0.4,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
imageMode(CENTER)
image(paperImg,ball.position.x,ball.position.y,50,50)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:130,y:135})
	}
}