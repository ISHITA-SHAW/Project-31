class division{
    constructor(x,y,w,h){
        var options = {
       
            isStatic:true
        }
    this.body = bodies.rectangle(x,y,width,height,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        rectmode(CENTER);
        Fill("white");
        rect(pos.x,pos.y,this.w,this.height);

    }
    }
