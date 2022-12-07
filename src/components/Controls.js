import React from 'react';

const Controls = ({arrows, setArrows}) => {
    return (
        <div className='directions'>
            <button className="arrows" id='up' onClick={()=>setArrows([...arrows, "ArrowUp"])}>ᐃ</button>
            <button className="arrows" id='right' onClick={()=>setArrows([...arrows, "ArrowRight"])}>ᐅ</button>
            <button className="arrows" id='left'onClick={()=>setArrows([...arrows, "ArrowLeft"])}>ᐊ</button>
            <button className="arrows" id='down' onClick={()=>setArrows([...arrows, "ArrowDown"])}>ᐁ</button>
        </div>
    );
};

export default Controls;