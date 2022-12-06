import ziomus from '../../Images/ziomus.png'
class GameObject {
    constructor (config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.image = new Image();
        this.image.src = config.src || ziomus;
    }

    update() {

    }

    draw(ctx) {

        // console.log(this.image.src)
        ctx.drawImage(this.image,
            0,0,
            this.image.width / 4,this.image.height,
            this.x,this.y,
            this.image.width / 4, this.image.height
            )


    }
}
export default GameObject;