class Roof{
    constructor(){
       var options = {
           isStatic:true
       }
       this.body = Bodies.rectangle(450,200,275,25,options);
       this.width = 275;
       this.height = 15;
       World.add(world,this.body);
    }
    display(){
        var positions = this.body.position;
        rectMode(CENTER);
        fill("white")
        rect(positions.x,positions.y,this.width,this.height);
      }
}