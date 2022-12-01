class CannonBall
{
constructor(x,y)
{
    var options =
    {
        isStatic:true
    }
    this.r = 25;
    this.body = Bodies.circle(x,y,this.r,options)
    this.image = loadImage("./assets/cannonball.png")
    World.add(world,this.body)
}
show()
{    
   
    push()
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    pop()
}
 shoot()
 {
    var newAngle = topCannon.angle - 30
    newAngle = newAngle*(3.14/180)
    var vel = p5.Vector.fromAngle(newAngle)
    vel.mult(0.5)
Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:vel.x*(180/3.14),y:vel.y*(180/3.14)})

 }
}
