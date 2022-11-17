import React from 'react';

const Actions = ({actions, setActions}) => {
    return (
        <div className='actions'>
            <button className='letters' onClick={()=>setActions([...actions, "A"])}>A</button>
            <button className='letters' onClick={()=>setActions([...actions, "B"])}>B</button>
        </div>
    );
};

export default Actions;