class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.5,
      }
      this.visible = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      rect(0,0,this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visible=this.visible-5;
        pop();
      }
    }
    score(){
      if (this.visible< 0 && this.visible > -105){
        score++;
      }
    }
  }
  