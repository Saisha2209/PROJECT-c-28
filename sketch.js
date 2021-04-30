
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var launcherObject
var launcherForce=100
var stone;
function preload()
{ boyImage=loadImage("boy.png")
treeImage=loadImage("tree.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone=new STONE(215,425,50)
launcherObject=new LAUNCHER(stone.body,{x:215,y:425})
mango=new MANGO(700,200,50)
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("skyblue");
  image(boyImage,150,300,300,500)
  image(treeImage,500,0,450,700)
  drawSprites();
 stone.display();
 mango.display();
 launcherObject.display();

 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})

}
function mouseReleased(){
  launcherObject.release();
}
