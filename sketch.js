const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground)
  
  var options={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,options)
  World.add(world,ball)
  // console.log(object);
  // console.log(object.type);
  // console.log(object.position.x);
  // console.log(object.position.y);

}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

// Engine=universe
// World=earth
// Bodies=human, animals
