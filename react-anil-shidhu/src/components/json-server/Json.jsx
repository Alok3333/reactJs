import React, { useState } from 'react'

const JsonData = () => {
    const [btn, setBtn] = useState(false)

    const jsonHandle = (e) => {
        
      fetch('http://localhost:4000/product')
      .then((response) => response.json())
      .then((data) => console.log(data));
      setBtn(true)
    }

  return (
    <div>
      <button onClick={()=>jsonHandle(btn)}>Click Me</button>
      <h1>
        
      </h1>
    </div>
  )
}

export default JsonData;
