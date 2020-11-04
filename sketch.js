const World= Matter.World; //namespacing
const Engine = Matter.Engine //namespacing
const Bodies = Matter.Bodies

var engine,world;
var rectBody;
var ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundOptions = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,groundOptions)
World.add(world,ground)

  var options = {
    //isStatic:false
    restitution:0.5
  } //json format
  circleBody = Bodies.circle(200,100,50,options);
  World.add(world,circleBody);
  console.log(rectBody);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(circleBody.position.x,circleBody.position.y,50,50);


}