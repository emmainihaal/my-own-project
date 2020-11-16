var surviour,alien1;

function preload(){
 alien1 = loadImage('images/alien.png');
 background1 = loadImage("images/background.jpg");
}

function setup() {
  createCanvas(800, 600);
  alien1 = new Alien(100,200,10,10);
  surviour = new Surviour(100,200,50,60);
}

function draw() {

  background(background1);
  alien1.display();
  surviour.display();
}