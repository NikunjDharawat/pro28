
class tree{
    constructor(x,y,r)
    { 
        var options={
            isStatic:true,
            restution:0,
            fricition:1,
        } 
    this.x=x;
    this.y=y;
    this.r=r 
    this.image=loadImage("image/tree.png")
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body);
}

}