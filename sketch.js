
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var stone,tree,ground,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var point;

function preload()
{
	boy = loadImage('boy.png')
	tree = loadImage('tree.png')
}

function setup() {
	createCanvas(1500,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(750,780,1500,20)
	mango1 = new Mango(1100,150,60)
	mango2 = new Mango(1000,170,60)
	mango3 = new Mango(1225,200,60)
	mango4 = new Mango(1075,250,60)
	mango5 = new Mango(1325,275,60)
	mango6 = new Mango(1200,320,60)
	mango7 = new Mango(900,290,60)
	mango8 = new Mango(1000,330,60)
	stone = new Stone(150,610,50)
    point = new Point(stone.body,{x:150,y:610})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white')
  
  textSize(30)
  text('Press Space To Get A Second Chance To Play',50,50)

  image(boy,110,540,200,300)
  image(tree,650,50,800,800)
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  point.display();

  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)
  
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
   }

function detectollision(Lstone,Lmango){

	var mangoBodyPosition = Lmango.body.position
	var stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=Lmango.r + Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:610})
	}
}

function mouseReleased(){
	point.fly();
}
function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:610})
		point = new Point(stone.body,{x:150,y:610})
    }
}
