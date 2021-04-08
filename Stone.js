class Stone{
    constructor(x,y,r)
{
  var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2, 
  }

  this.x=x;
  this.y=y;
  this.radius=r;

  this.image=loadImage("images/stone.png")
  this.body=Bodies.circle(x,y,r)
  World.add(world, this.body);

}
display()
{
image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

 }
}