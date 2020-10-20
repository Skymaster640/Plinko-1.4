var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0
var gameState = "play";





function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30)
  text("100",415,520);
  
  textSize(30)
  text("100",335,520);

  textSize(30)
  text("500",255,520);

  textSize(30)
  text("500",175,520);

  textSize(30)
  text("500",95,520);

  textSize(30)
  text("500",15,520);

  textSize(30)
  text("100",495,520);

  textSize(30)
  text("200",575,520);

  textSize(30)
  text("200",655,520);

  textSize(30)
  text("200",735,520);

  Engine.update(engine);


 
  
}

  if(gameState=="end")
  {
      
text("Game Over", 150,250);

  }

