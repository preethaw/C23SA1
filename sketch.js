const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope;

function setup() {
  createCanvas(600, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(0, 380, 600, 20);
  
  
  box1 = new Box(300, 100, 70, 70);
  box2 = new Box(400, 100, 70, 70);
  box3 = new Box(500, 100, 70, 70);
  
  ball = new Ball(100, 100, 40, 40);
  

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  

  ball.display();
}




