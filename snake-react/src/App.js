import React from 'react';
import Snake from "./components/Snake";
import Food from './components/Food';
import {useEffect, useRef} from 'react';
import { useState } from 'react';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor(Math.random()*(max-min+1)/2)*2;
  let y = Math.floor(Math.random()*(max-min+1)/2)*2;
  return [x,y]
}

function App() {
  const [state, setState] = useState({
    snakeDots: [
      [0,0],
      [2,0]
    ],
    food: getRandomCoordinates(),
    direction: 'RIGHT'
  })

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);
    switch(event.key){
      case 'w':
        setState(prevState => {
          return ({
            snakeDots: [
              [prevState.snakeDots[0][0],prevState.snakeDots[0][1]-1],
              [prevState.snakeDots[1][0],prevState.snakeDots[1][1]-1]
            ],
            food: prevState.food,
            direction: 'UP'
          })
        })
        break;
      case 's':
        setState(prevState =>{
          return ({
            snakeDots: [
              [prevState.snakeDots[0][0],prevState.snakeDots[0][1]+1],
              [prevState.snakeDots[1][0],prevState.snakeDots[1][1]+1]
            ],
            food: prevState.food,
            direction: 'DOWN'
          })
        })
        break;
      case 'd':
        setState(prevState =>{
          return ({
            snakeDots: [
              [prevState.snakeDots[0][0]+1,prevState.snakeDots[0][1]],
              [prevState.snakeDots[1][0]+1,prevState.snakeDots[1][1]]
            ],
            food: prevState.food,
            direction: 'RIGHT'
          })
        })
        break;
      case 'a':
        setState(prevState =>{
          return ({
            snakeDots: [
              [prevState.snakeDots[0][0]-1,prevState.snakeDots[0][1]],
              [prevState.snakeDots[1][0]-1,prevState.snakeDots[1][1]]
            ],
            food: prevState.food,
            direction: 'LEFT'
          })
        })
        break;

    }
  };
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="game-area" ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
     <Snake snakeDots={state.snakeDots}/>
     <Food dot={state.food} />
    </div>
  );
}

export default App;


