const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope;

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(0, 600, 1200, 20);
  
  
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  
  ball = new Ball(200, 200, 40, 40);
  

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




