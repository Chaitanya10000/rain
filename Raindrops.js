class Raindrops{
    constructor(x,y,width,height){
       var options={
        isStatic:false,
        density:1.0,
        friction:0.3
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.image = loadImage("blue.png");
       this.visibility = 255;
       World.add(world,this.body);
    }
    display(){
        pop();
        this.visibility = this.visibility - 10;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        push();
    }
}