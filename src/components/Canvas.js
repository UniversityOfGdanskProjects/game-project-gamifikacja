import React, {useRef,useEffect} from 'react';
import map_png from '../Images/map_png.png'
import OverworldMap from './GameClasses/OverworldMap'
import Person from './GameClasses/Person'
const Canvas = ({coords, setCoords,arrows}) => {

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



    

    
    
    useEffect( () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        canvas.width = 1400
        canvas.height = 700

        map.render(ctx)
        
       
      
    },[])
    
    return <canvas ref={canvasRef}/>

};

export default Canvas;