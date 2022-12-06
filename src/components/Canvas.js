import React, {useRef,useEffect} from 'react';
import map_png from '../Images/map_png.png'
import OverworldMap from './GameClasses/OverworldMap'
import Person from './GameClasses/Person'
import { useState } from 'react';
const Canvas = ({coords, setCoords,arrows, setArrows}) => {


    const canvasRef = useRef(null)

    const map = new OverworldMap({
        gameObjects: {
            hero: new Person({
                x: 670,
                y: 600,
                isPlayerControlled: true
            })
        },
        src: map_png
    })
    
    const startGameLoop = (ctx,canvas) => {       
        const step = (ctx,canvas) => {
            console.log("render")
            
            // ctx.clearRect(0, 0, canvas.width/2, canvas.height);
            
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            const direction = arrows[arrows.length - 1]
            if (direction === "ArrowUp"){
                map.gameObjects.hero.y -= 100;
                console.log(map.gameObjects.hero.y)
                console.log(arrows)
                // setArrows([])
            }
            map.render(ctx); // map  init
          
          
            requestAnimationFrame( () => { //its gonna execute every frame
                step(ctx,canvas);
            })

        }
        step(ctx,canvas);
    }
    // startGameLoop()
    useEffect( () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
       
        // if (direction === "ArrowDown"){
        //     if (y + r + dy<= maxY) setCoords([x, y+dy])
        //     else setCoords([x,y])
        // }
        // if (direction === "ArrowRight"){
        //     if (x + r + dx <= maxX) setCoords([x+dx, y])
        //     else setCoords([x,y])
        // }
        // if (direction === "ArrowLeft"){
        //     if (x - r - dx >= 0) setCoords([x-dx, y])
        //     else setCoords([x,y])
        // }
        
        startGameLoop(ctx,canvas);
        // console.log("boba")
        // console.log("render")
    },[])
    
    return <canvas ref={canvasRef}/>


};

export default Canvas;