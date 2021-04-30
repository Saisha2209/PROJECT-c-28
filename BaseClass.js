class BaseClass{
  constructor(x,y,r){
    var options={
        restitution:1,
        friction:5.0,
        density:1.0,
       
    }
    
    this.r = r;
    this.x=x
    this.y=y
    this.body=Bodies.circle(this.x, this.y, this.r, options)
   
   this.image=loadImage("boy.png")
   
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    imageMode(CENTER)
   
    //rectMode(CENTER);
   
   
  
    image(this.image,0,0, this.r,this.r);
    pop();
}
}
