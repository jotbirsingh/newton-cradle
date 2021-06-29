class Bob
{
	constructor(x,y,r)
	{
        var options={
			'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':0.8
        }
     this.x=x;
    this.y=y;
     this.r=r;
     
     
     this.body=Bodies.circle(x, y,(this.r/2) , options);
 		World.add(world, this.body);
	

	 console.log(this.body);
	}
    display()
	{
			
			var groundPos=this.body.position;		
            
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop()
			
	}

}