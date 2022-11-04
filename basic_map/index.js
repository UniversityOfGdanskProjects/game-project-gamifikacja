

const canvas = document.querySelector('canvas');
const contex = canvas.getContext('2d')
canvas.width = 700
canvas.height = 576

contex.fillStyle = "white"
contex.fillRect(0,0,canvas.width, canvas.height)
const image = new Image()
image.src = './src/pokemonmapa.png'

const playerImage = new Image()
playerImage.src = './src/playerDown.png'

class Sprite{
    constructor({position, velocity, image}){
        this.position = position
        this.image = image
    }

    draw(){
        contex.drawImage(this.image, this.position.x, this.position.y)
    }
}

const backgroud = new Sprite({
    position: {
        x: -500,
        y: -530
        },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
         pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    backgroud.draw()
    contex.drawImage(playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,
         canvas.width/2 - playerImage.width/8,
         canvas.height/2 - playerImage.height/2,
         playerImage.width/4,
        playerImage.height)

    if(keys.w.pressed){
        backgroud.position.y= backgroud.position.y+3
    }
    if(keys.s.pressed){
        backgroud.position.y= backgroud.position.y-3
    }
    if(keys.d.pressed){
        backgroud.position.x= backgroud.position.x-3
    }
    if(keys.a.pressed){
        backgroud.position.x= backgroud.position.x+3
    }
    
}

animate()

window.addEventListener('keydown',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break;}
    switch (e.key) {
        case 'd':
            keys.d.pressed = true
            break;
    }
    switch (e.key) {
        case 's':
            keys.s.pressed = true
            break;
    }
    switch (e.key) {
        case 'a':
            keys.a.pressed = true
            break;
    }
    console.log(keys)
})
window.addEventListener('keyup',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break;}
    switch (e.key) {
        case 'd':
            keys.d.pressed = false
            break;
    }
    switch (e.key) {
        case 's':
            keys.s.pressed = false
            break;
    }
    switch (e.key) {
        case 'a':
            keys.a.pressed = false
            break;
    }
    console.log(keys)
})