import React, { useState } from 'react'

const Profile = () => {
    const [login, setLogin] = useState(3);

  return (
    <div>
      { login==1? <h2>Profile works!</h2> :login==2?<h2>Profile not works!</h2> : <h2>login successfully!</h2>}
    </div>
  )
}

export default Profile
