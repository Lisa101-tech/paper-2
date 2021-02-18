class CrumpledPaper {
    constructor(x,y,radius) {
        var options = {
        
        //add these options  
           restitution:0.7,
           friction:0.5,
           density:0.8
                     

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        //this.height = height;
        World.add(world, this.body);

        this.image = loadImage("paper.png")
      }
      display(){
        //imageMode(CENTER)
        //image(this.paper,200,200)
        var pos =this.body.position;
        push();
           translate(pos.x,pos.y)
            rotate (this.body.angle)
            //fill("white");
            //noStroke()
          // ellipseMode(RADIUS);
          // ellipse(0, 0, this.radius,this.radius);
       
       
       //replace shape(rect or ellipse) with image

             imageMode(RADIUS);
              image( this.image,0,0,this.radius*2,this.radius*2);
       pop ();
      }
    }
   