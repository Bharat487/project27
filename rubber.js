class Rubber{

    constructor(x,y,radius){
    
    var option={
       restitution:1,
       density:0.3,
       friction:0.3
    }
    
    
    this.body= Bodies.circle(x,y,radius,option)
    World.add(world,this.body)
    this.radius=2*radius
    
    
    }
    
    display()
    
    {
        push()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill("blue")
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop()
    }
    
    }