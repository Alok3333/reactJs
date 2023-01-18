import React,{ useState } from 'react';
import Student from '../Function_Component/Student';

function UpdateName() {
  const [name, setName] = useState("Alok")
  return (
    <div className="App">
      <Student id={1} name={name} />
      <button onClick={()=>setName("Aalok")}>Update Name</button>

    </div>
  );
}

export default UpdateName;
