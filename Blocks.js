class Blocks{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;
    
    World.add(world, this.body);
    }
    display(){
        
       
       if(this.body.speed < 3){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }

        else{
            World.remove(world, this.body)
            push()
            this.Visibility = this.Visibility-5;
            tint(255, this.Visibility);
            pop();
            }
        }
    }