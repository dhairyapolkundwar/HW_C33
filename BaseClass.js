class BaseClass{
    constructor(x, y, width, height , angle){
        var options = {
            'restitution': 0.1,
            'friction': 0.1,
            'density': 0.2
        }

        this.Width = width
        this.Height = height
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        this.image = loadImage("snow4.webp")
    }

    display(){
        var angle = this.body.angle
        push()
        translate (this.body.position.x, this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image (this.image, 0,0,this.Width, this.Height)
        pop()
    }
}