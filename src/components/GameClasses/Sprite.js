
class Sprite {
    constructor(config) {

        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {     //THIS IS ASYNC
            this.isLoaded = true;
        }

        //cords
        this.x = config.x;
        this.y = config.y;

    }

    draw(ctx) {
        const x = this.x 
        const y = this.y
        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            this.image.width / 4,this.image.height,
            x,y,
            this.image.width / 4, this.image.height
            )
        this.isLoaded && console.log("typek narysowany")


    }
}

export default Sprite