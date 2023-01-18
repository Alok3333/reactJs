import React, { useState } from 'react'

const HideShowButton = () => {
    const [status, setStatus] = useState(false)

  return (
    <div>
        {
            status ? <h2>Hello Hide & Show button!</h2> : null
        }

        <button onClick={()=>setStatus(!status)}>Toggle</button>
        {/* <button onClick={()=>setStatus(false)}>Hide</button> */}
        {/* <button onClick={()=>setStatus(true)}>Show</button> */}
    </div>
  )
}

export default HideShowButton;
