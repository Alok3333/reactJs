import React from 'react'

const Member = (props) => {
  return (
    <div>
        <h1>Pass Function as Props Super Child Member Component</h1>
        <button className='btn btn-danger' onClick={props.data}>Click Me</button>
    </div>
  )
}

export default Member;