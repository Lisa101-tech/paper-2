
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, trashcan1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,630,1200,20)
	
	trashcan1 = new Trashcan(550,570,15,140);
	trashcan2 = new Trashcan(580,613,200,15);
	trashcan3 = new Trashcan(730,570,15,140);

	paper = new CrumpledPaper(200,100,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);


//because of black background ,paper will not show up
//background(0);

  background(197, 224, 224);
  Engine.update(engine);
  ground.display();

  fill("black")
  textSize(20)
  strokeWeight(2)
  stroke("white")
 text("press arrow keys to move the paper",100,100)

  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  paper.display();
 //keyPressed();
//drawSprites();
 }

 function keyPressed(){
   if (keyCode===RIGHT_ARROW ){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:30, y:-40});
   }
   if (keyCode===UP_ARROW ){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:10, y:-80});
  }
  if (keyCode===LEFT_ARROW ){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-10, y:-40});
  }
  if (keyCode===32 ){
    Matter.Body.setPosition(paper.body,{x:200,y:100});
  }
 }




