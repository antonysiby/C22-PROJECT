const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase,archer,archerimage;
var baseimage;
var board

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png") 
  boardimage = loadImage("./assets/board.png") 

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  archer = Bodies.rectangle(280,300,100,100)
  World.add(world,archer)

 board = Bodies.rectangle(1200,200,100,100)
  World.add(world,board)

  //create player base body
playerBase = Bodies.rectangle(200,350,180,150,options);
World.add(world,playerBase);

  //create player body
  player = Bodies.rectangle(250,190,50,150, options)
  World.add(world,player)


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,180);

  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  push();
imageMode(CENTER)
  image(archerimage,archer.position.x,archer.position.y,100,100);
  pop();

  imageMode(CENTER)
  image(boardimage,board.position.x,board.position.y,140,140);

  Engine.update(engine)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  box.display();
  archer.display();
}
