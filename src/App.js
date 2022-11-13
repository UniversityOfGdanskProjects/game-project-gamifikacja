import React, {useState, useEffect} from 'react';
import Actions from './components/Actions';
import Controls from './components/Controls';

const App = () => {

  const [arrows, setArrows] = useState([])
  const [actions, setActions] = useState([])

  return (
    <div className='game'>
      <div className='canvas'>
        <h1> |---------- Canvas component here ----------|</h1>
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