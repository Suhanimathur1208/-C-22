//namespacing

const Engine=Matter.Engine;   // universe
const World= Matter.World;   // Globe
const Bodies= Matter.Bodies;   // Object

var engine,world,ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(200,200,50,50);

 engine=Engine.create();
 world=engine.world;

var ground_options = {

  isStatic: true

}

 ground=Bodies.rectangle(200,390,400,20, ground_options);
 World.add(world,ground);

 var options = {

  restitution: 0.9 
 }
ball=Bodies.circle(200,200,25,options);
World.add(world,ball);


console.log(ground);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode (CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  fill ("red");
  ellipseMode(RADIUS);
  ellipse (ball.position.x,ball.position.y,25,25);
  drawSprites();
}