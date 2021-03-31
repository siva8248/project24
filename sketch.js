const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1,ground,bin1,bin2,bin3;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
	paper1 = new paper(150,50,5);
	ground = new Ground(500,480,1000,20);
	bin1 = new dusbin(900,440,15,100);
	bin2 = new dusbin(695,440,15,100);
	bin3 = new dusbin(790,440,200,15);	
	Engine.run(engine);
}


function draw() {
  background("white");
  Engine.update(engine);
  paper1.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1 .body,paper1.body.position,{x:4,y:-4});
	}
}
