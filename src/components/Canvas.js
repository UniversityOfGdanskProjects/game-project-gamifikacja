import React, {useRef,useEffect} from 'react';
const Canvas = ({coords, setCoords,arrows}) => {

    const canvasRef = useRef(null)

    const drawBall = (x,y,r,context) => {
        context.beginPath();
        context.arc(x,y, r, 0, 2 * Math.PI);
        context.strokeStyle = "#dc143c"
        context.fillStyle = "#dc143c"
        context.stroke();
        context.fill()
    }

    const control = (direction, x, y, dx, dy, r, maxX, maxY) => {
        if (direction === "ArrowUp"){
            if (y - r - dy >= 0) setCoords([x, y -dy])
            else setCoords([x,y])
        }
        if (direction === "ArrowDown"){
            if (y + r + dy<= maxY) setCoords([x, y+dy])
            else setCoords([x,y])
        }
        if (direction === "ArrowRight"){
            if (x + r + dx <= maxX) setCoords([x+dx, y])
            else setCoords([x,y])
        }
        if (direction === "ArrowLeft"){
            if (x - r - dx >= 0) setCoords([x-dx, y])
            else setCoords([x,y])
        }
    }

    useEffect( () => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        canvas.width = window.innerWidth*0.7
        canvas.height = window.innerHeight*0.9
        drawBall(coords[0], coords[1],50, context)
        control(arrows[0], coords[0], coords[1], 20, 20, 50, canvas.width, canvas.height)        
    }, [arrows, coords])
    
    return <canvas ref={canvasRef}/>
};

export default Canvas;