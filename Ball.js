class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 1, 
      frictionAir: 0.005,
      restitution : 1.0
    };

    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    World.add(world, this.body);
  }


  display() {
    
    ellipseMode(RADIUS);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }

  
}


