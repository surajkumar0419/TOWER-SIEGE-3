const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var launcher;
var ground,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygonImage;
var score = 0;
var bg = "bg1.png";
var backgroundImg;

function preload(){
polygonImage = loadImage("polygon.png");
getBackgroundImg();
}

function setup() {
  createCanvas(1280,570);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(640,565,1280,10);
  stand1 = new Ground(620,420,350,10);
  stand2 = new Ground(1015,200,280,10);
  block1 = new Block(500,390,40,50);
  block2 = new Block(540,390,40,50);
  block3 = new Block(580,390,40,50);
  block4 = new Block(620,390,40,50);
  block5 = new Block(660,390,40,50);
  block6 = new Block(700,390,40,50);
  block7 = new Block(740,390,40,50);
  block8 = new Block(540,340,40,50);
  block9 = new Block(580,340,40,50);
  block10 = new Block(620,340,40,50);
  block11 = new Block(660,340,40,50);
  block12 = new Block(700,340,40,50);
  block13 = new Block(580,290,40,50);
  block14 = new Block(620,290,40,50);
  block15 = new Block(660,290,40,50);
  block16 = new Block(620,240,40,50);

  block17 = new Block(935,170,40,50);
  block18 = new Block(975,170,40,50);
  block19 = new Block(1015,170,40,50);
  block20 = new Block(1055,170,40,50);
  block21 = new Block(1095,170,40,50);
  block22 = new Block(975,120,40,50);
  block23 = new Block(1015,120,40,50);
  block24 = new Block(1055,120,40,50);
  block25 = new Block(1015,70,40,50);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  launcher = new Launcher(this.polygon,{x:200,y:200});
  
}

function draw() {
if(backgroundImg)
    background(backgroundImg);


  textSize(25)
  fill("white")
  text("Score:"+score,570,50);

  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  fill("skyblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  fill("grey");
  block16.display();
  block16.score();
  fill("skyblue");
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  fill("turquoise");
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  fill("pink");
  block25.display();
  block25.score();
  launcher.display();

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
 launcher.fly();
}

function keyPressed(){
  if(keyCode===32){
      launcher.attach(this.polygon);

  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

