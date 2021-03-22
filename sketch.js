
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumple;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumple = new Crumple(700,100,100,100);
	Engine.run(engine);
	crumple.scale = .5;
  
 
}


function draw() {
	crumple.debug = true;
  rectMode(CENTER);
  background(230);
  crumple.display();
  groundObject.display();
  dustbinObj.display();
  if(keyDown("space")){
	  //crumple.x = 600;
  }
  //crumple.collide(groundObject);
}
 

  



