import React from 'react';
import Snake from "./components/Snake";
import Food from './components/Food';
import {useEffect, useRef} from 'react';


const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor(Math.random()*(max-min+1)/2)*2;
  let y = Math.floor(Math.random()*(max-min+1)/2)*2;
  return [x,y]
}

function App() {
  let state = {
    snakeDots: [
      [0,0],
      [2,0]
    ],
    food: getRandomCoordinates(),
    direction: 'RIGHT'
  }

  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);
  };
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

// function componentDidMount(){
//   document.onkeydown = this.onKeyDown
// }

// function onKeyDown(e) {
//   e = e || window.event;
//   switch (e.keyCode) {
//     case 38:
//       if (!["UP", "DOWN"].includes(this.state.direction)) {
//         this.setState({ direction: "UP" });
//       }
//       break;
//     case 40:
//       if (!["UP", "DOWN"].includes(this.state.direction)) {
//         this.setState({ direction: "DOWN" });
//       }
//       break;
//     case 37:
//       if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
//         this.setState({ direction: "LEFT" });
//       }
//       break;
//     case 39:
//       if (!["LEFT", "RIGHT"].includes(this.state.direction)) {
//         this.setState({ direction: "RIGHT" });
//       }
//       break;
//   }
// };


  return (
    <div className="game-area" ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
     <Snake snakeDots={state.snakeDots}/>
     <Food dot={state.food} />
    </div>
  );
}

export default App;


