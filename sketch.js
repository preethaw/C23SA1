

var box1, box2, box3, ground;
var ball;


function setup() 
{
  createCanvas(600, 400);

  ball = new Ball(100, 100, 40, 40);
  
  console.log(ball);

  ground = new Box(0, 380, 600, 20);
  
  
  box1 = new Box(200, 100, 70, 70);
  box2 = new Box(300, 100, 70, 70);
  box3 = new Box(400, 100, 70, 70);

}

function draw() 
{
  background(220);

 
  ground.display(); 
  box1.display();
  box2.display()
  box3.display()
  
  ball.display();
}








