const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create()
    world=engine.world
    var options={isStatic:true}
    ground=Bodies.rectangle(200,390,400,20,options)
    World.add(world,ground)
    var bounce={restitution:2}
    ball=Bodies.circle(200,100,30,bounce)
    World.add(world,ball)



}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    circle(ball.position.x,ball.position.y,30)
    
}