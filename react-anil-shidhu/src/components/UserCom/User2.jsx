import React from 'react'

const User2 = (props) => {
  return (
    <div>
        <h1>Pass Function as Props User Component 2</h1>
        <button className='btn btn-danger' onClick={props.data}>Click Me</button>
    </div>
  )
}

export default User2
