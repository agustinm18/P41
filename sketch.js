const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = [];
var maxDrops = 100;
var umbrella1;
var cover,person,personIMG,umbrellaIMG,umbrella3;

function preload(){
    personIMG=loadImage("person.png");
    
}

function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(500,700);
    background(0);

    cover = createSprite(250,540,200,140)
    cover.shapeColor = "black"

    person = createSprite(250,600);
    person.addImage(personIMG)

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500),random(0,500)));
    }

    umbrella1 = new Umbrella(250,500)
    
}

function draw(){
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    

    for(var i=0; i<maxDrops; i++){
        drops[i].display()
        drops[i].update()
    }

    umbrella1.display();

    drawSprites();
}   

