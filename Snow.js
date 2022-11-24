var snow_angle = 0

class Snow extends BaseClass{
    constructor(x, image){
        super(x, -25, 50, 50, snow_angle)
        this.image = loadImage(image)
    }

    display(){
        super.display()

        if(frameCount%40 === 0){
            snow_angle += 1
            Matter.Body.setAngle(this.body, snow_angle%360)
        }

        this.body.velocity.y = 0.1
    }
}