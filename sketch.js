
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1,stone,tree;


    

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    mango1 = new Mango1(700,320,70,70);
    mango2 = new Mango2(920,320,70,70);
    mango3 = new Mango3(810, 350,70,70);
    mango4= new  Mango4(810,260,70,70);
    mango5 = new Mango5(700,240,70,70);
    stone = new Stone(920,240,70,70);
    tree = new Tree(810, 220); 

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    mango1.display();
    mango2.display();play();
    mango3.display();
    mango4.display();
    mango5.display();
    stone.display();
    tree.display();
}
    
