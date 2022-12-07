import Person from './Person.js'

class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.image = new Image();
        this.image.src = config.src;

    }

    render(ctx) {


        this.image.onload = () => {     //THIS IS ASYNC

            ctx.drawImage(this.image, 0, 0) // tu sie laduje mapa
            // console.log("załadowana mapa")
            Object.values(this.gameObjects).forEach(obj => obj.draw(ctx)) // tu sie laduja wszystkie ziomki
        }
        // console.log("probuje zaladowac mape:")
        // console.log("laduje typa")
    }

}

export default OverworldMap;