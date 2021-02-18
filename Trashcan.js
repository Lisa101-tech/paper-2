class Trashcan {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbin.png")
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        noStroke()
        //rect(pos.x, pos.y, this.width, this.height);
        
        image(this.image,580,470,160,150);
      }
    }
  
  
  