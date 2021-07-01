const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies; 
const Body = Matter.Body;
var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos =  [];
function preload(){

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
   
  ground = new Ground(400,690,800,20);

  for (var i = 0;i<=width; i=i+80){
    divisions.pudh(new Division (i,height_divisionsHeight/2,10,divisionsHeight))
  }
  for (var j = 40; j <=width; j=j+50)

{

}

plinkos.push(new Plinko(j,75));

for (var j = 15; j <=width-10; j-j+50) |

plinkos.push(new Plinko(j,175));

}
}

function draw() {
  background(0);
  for (var j = 0; j < particles.length; j++) {

    particles [j].display();
    
    }
    
    for (var k = 0; k<divisions.length; k++) {
    
    divisions [k].display();
    
    }  
  drawSprites();
}