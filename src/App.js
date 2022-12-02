import React, {useState, useEffect, Fragment} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Canvas from './components/Canvas';
import Controls from './components/Controls';
import Actions from './components/Actions';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Loading from './components/Loading';

const App = () => {

  const [arrows, setArrows] = useState([])
  const [actions, setActions] = useState([])
  const [coords, setCoords] = useState([100,100])
  const [isUser, setIsUser] = useState(false)
  const [isAuthorised, setIsAuthorised] = useState(false)


  // useEffect(()=> {
  //   setArrows(arrows.slice(1))
  // },[])

  
  return (
    <Fragment>
      <Routes>
        <Route path='signup' element={<SignUp setIsUser={setIsUser} />}/>
        <Route path='signin' element={<SignIn setIsAuthorised={setIsAuthorised}/>}/>
        <Route path='loading' element={<Loading/>}/>
        <Route path='game'
          element={
            <div className='ui'>
              <div className='canvas'>
              <Canvas coords={coords} setCoords={setCoords} arrows={arrows}setArrows={setArrows} width={1024} height={576}/>
            </div>
            <div className='panel'>
              <div className='controls'>
                <Controls arrows={arrows} setArrows={setArrows}/>
              </div>
              <Actions actions={actions} setActions={setActions}/>
            </div>
            </div>
          }/>
      </Routes>
    </Fragment>
  );
};

export default App;