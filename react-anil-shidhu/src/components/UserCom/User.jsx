import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>Pass Function as Props</h1>
      <button className='btn btn-danger' onClick={props.data}>Click Me</button>
    </div>
  )
}

export default User
