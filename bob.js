class Bob {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:0.3,
          friction:0,
          density:1.2
      }

      this.radius = radius;
      this.body = Bodies.circle(x, y, this.radius, options);

      
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      var posit = this.body.position;
      push();
      translate(posit.x, posit.y);
      pop();

    }
}