const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;

var ground,hero,fly;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(800, 800);
  
  ground = new Ground(1,750,10,5);
  hero = new Hero(400,400,10);
  fly = new Fly(hero.body,{x:390 , y:390 });

}

function draw() {
  background(0);

  ground.display();
  hero.display();
  fly.display();

}

function MouseDragged(){
  Matter.Body.setPosition(hero.body , {x:mouseX , y:mouseY});
}