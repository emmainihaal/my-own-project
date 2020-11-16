class Alien{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("images/alien.png");
  }
  
  display(){
      rect(this.x,this.y,this.width,this.height);
      image(this.image, 100,200 , 50,30);

  }
  
  
}





