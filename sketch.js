const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball1, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(200,500,1500,10);
  box1= new Box(600,473,40,40);
  box2= new Box(600,428,40,40);
  box3= new Box(600,383,40,40);
  box4= new Box(600,338,40,40);
  box5= new Box(600,293,40,40);
  box6= new Box(600,248,40,40);
  box7= new Box(600,203,40,40);

  box8= new Box(660,473,40,40);
  box9= new Box(660,428,40,40);
  box10= new Box(660,383,40,40);
  box11= new Box(660,338,40,40);
  box12= new Box(660,293,40,40);
  box13= new Box(660,248,40,40);

  box14= new Box(720,473,40,40);
  box15= new Box(720,428,40,40);
  box16= new Box(720,383,40,40);
  box17= new Box(720,338,40,40);
  box18= new Box(720,293,40,40);
  box19= new Box(720,248,40,40);
  box20= new Box(720,203,40,40);

  box21= new Box(780,473,40,40);
  box22= new Box(780,428,40,40);
  box23= new Box(780,383,40,40);
  box24= new Box(780,338,40,40);
  box25= new Box(780,293,40,40);

  ball1= new Ball(400,250,80);

  rope= new Rope(ball1.body,{x:500,y:50});
}


function draw() {
  background(180);
  Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();

box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

ball1.display();
rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}


