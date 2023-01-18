import React, { useState } from 'react';

const NameChanging = () => {
    const [data, setData] = useState('Alok');
    const apple = () =>{
  
      setData("Raja is back my dear friend");
  
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={apple}>click Me</button>
    </div>
  )
}

export default NameChanging;
