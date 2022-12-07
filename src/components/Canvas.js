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
                x: coords[0],
                y: coords[1],
                isPlayerControlled: true
            })
        },
        src: map_png
    })
    
    const startGameLoop = (ctx,canvas) => {       
        const step = (ctx,canvas) => {
            console.log("render")
            console.log(arrows)
            // ctx.clearRect(0, 0, canvas.width/2, canvas.height);
            
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            const direction = arrows[arrows.length - 1]
            if (direction === "ArrowUp"){
                // map.gameObjects.hero.y -= 100;
                setCoords([coords[0]-100,coords[1]])
                setArrows([])
                console.log(map.gameObjects.hero.y)
                console.log(arrows)
                // setArrows([])
            }
            
            
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
        const direction = arrows[arrows.length - 1]
        
        if (direction === "ArrowUp"){
            // map.gameObjects.hero.y -= 100;
            setCoords([coords[0],coords[1]-100])
            setArrows([])
            console.log(map.gameObjects.hero.y)
            console.log(arrows)
            // setArrows([])
        }
        if (direction === "ArrowDown"){
            setCoords([coords[0],coords[1]+100])
            setArrows([])
        }
        if (direction === "ArrowRight"){
            setCoords([coords[0]+100,coords[1]])
            setArrows([])
        }
        if (direction === "ArrowLeft"){
            setCoords([coords[0]-100,coords[1]])
            setArrows([])
        }
        map.render(ctx); // map  init
        
        // startGameLoop(ctx,canvas);
        // console.log("boba")
        // console.log("render")
    },[arrows])
    
    return <canvas ref={canvasRef}/>


};

export default Canvas;