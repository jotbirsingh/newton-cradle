
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

var engine, world;
var bob1,bob2;
var roof;
var bobDiameter=40;
var ground1;

function setup(){
    var canvas = createCanvas(1000,800);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(400,20,3000,20);
    startBobPositionX=width/2;
     startBobPositionY=height/4+500;
     bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
      bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
      bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
       bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
     bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

    
    rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
    rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
    rope3=new Rope(bobObject3.body,roof.body,-bobDiameter,0,0);
    rope4=new Rope(bobObject4.body,roof.body,-bobDiameter*1,0);
    rope5=new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);
    //ground1 = new Ground(200,490,600,20);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    //ground1.display();
   roof.display();
}
function keyPressed(){
    if(keyCode === 32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:230,y:0})
}
}