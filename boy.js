class Boy
{
    constructor(){

        this.body = Bodies.rectangle(200,680,200,300)
        this.width = width
        this.height = height
        this.image = loadImage('boy.png')
        World.add(world,this.body)
    }
    display(){

        imageMode(CENTER)
        image(this.image,200,680,this.width,this.height)
    }
}