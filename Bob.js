class Bob{
    constructor(){
      var options = {
        restitution: 1.6,
        friction: 1,
        density: 1.2
      };
      this.body = Bodies.rectangle(250, 550, 40, 40, options);
      this.width = 35;
      World.add(world, this.body);
    };
    display() {
      var positions = this.body.position;
      push();
      translate(positions.x, positions.y);
      fill("purple");
      ellipse(0, 0, 60, 60);
      pop();
    }
  }