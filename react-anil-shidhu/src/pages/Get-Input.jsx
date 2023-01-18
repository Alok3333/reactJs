import React, { useState } from 'react'

const InputGet = () => {
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)


    const getData = (input) => {
        // console.log(input.target.value);
        setData(input.target.value);
        setPrint(false);
    }

  return (
    <div>
        <h1>Get Input box value!</h1>
        <input type="text" onChange={getData} placeholder="Type Something Here"/>
        <button onClick={()=>setPrint(true)}>ShowText</button>
        {
            print? <h2 style={{color: "red"}}>{data}</h2> : null
        }
    </div>
  )
}

export default InputGet
