class Bob{
    constructor(x, y, r){
      var options = {
        isStatic : false,
        restitution : 1,
        friction : 0.5,
        density : 0.6
      }
  this.x = x
  this.y = y
  this.radius = r;
  
      this.body = Bodies.circle(this.x, this.y, this.radius, options)
      World.add(world, this.body)
    }
    display(){
      ellipseMode(RADIUS)
      fill("pink")
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
  
  }        