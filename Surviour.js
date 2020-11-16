class Surviour{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/surviour.png2.png");
    }

    display(){
        /* this.body.position.x = mouseX;
         this.body.position.y = mouseY;*/
        rect (this.x,this.y,this.width,this.height);
        image(this.image,500,400, this.width, this.height);

    }
    velocity(){
        if(keyDown("LEFT_ARROW")){
          image.velocityX = -2;
        }
         if(keyDown("RIGHT_ARROW")){
           image.velocityY = 2
        }
    }


}