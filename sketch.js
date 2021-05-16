const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var bob1, bob2, bob3, bob4, bob5, roof;
var sling1, sling2, sling3, sling4, sling5;

function preload(){
	
}

function setup(){
	createCanvas(1000, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(340, 450, 0);
	bob2 = new Bob(400, 450, 0);
	bob3 = new Bob(460, 450, 0);
	bob4 = new Bob(520, 450, 0);
	bob5 = new Bob(580, 450, 0);
	sling1 = new Sling(bob1.body, { x: 340, y: 200 });
	sling2 = new Sling(bob2.body, { x: 400, y: 200 });
	sling3 = new Sling(bob3.body, { x: 460, y: 200 });
	sling4 = new Sling(bob4.body, { x: 520, y: 200 });
	sling5 = new Sling(bob5.body, { x: 580, y: 200 });
	roof = new Roof(900, 160, 600, 25);

	Engine.run(engine);
}

function draw(){
  background(125);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  roof.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:75,y:-75});
	}
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-75});
	}
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-75});
	}
}
