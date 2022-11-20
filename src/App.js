import React, {useState, useEffect} from 'react';
import Canvas from './components/Canvas';
import Controls from './components/Controls';
import Actions from './components/Actions';

const App = () => {

  const [arrows, setArrows] = useState([])
  const [actions, setActions] = useState([])
  const [coords, setCoords] = useState([100,100])

  useEffect(()=> {
    setArrows(arrows.slice(1))
  },[coords, arrows])
  
  return (
    <div className='ui'>
      <div className='canvas'>
        <Canvas coords={coords} setCoords={setCoords} arrows={arrows}setArrows={setArrows}/>
      </div>
      <div className='panel'>
        <div className='controls'>
          <Controls arrows={arrows} setArrows={setArrows}/>
        </div>
        <Actions actions={actions} setActions={setActions}/>
      </div>
    </div>
  );
};

export default App;