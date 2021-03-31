class paper{
    constructor(x,y,radius){
    var options={
        isstatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.raduius=radius;
    World.add(world,this.body);
}
display(){
    ellipseMode(CENTER);
    fill("blue");
    ellipse(this.body.position.x,this.body.position.y,this.radius);
}
}