class Mango
{
    constructor(x,y,r){

        var option = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,r,option);
        this.r = r
        this.image = loadImage('mango.png')
        World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}