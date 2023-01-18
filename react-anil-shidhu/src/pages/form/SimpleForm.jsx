import React, { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [interest, setInterest] = useState("")

    const getFormData = (e) => {
        console.log(name, tnc, interest);
        e.preventDefault();
    }

  return (
    <div>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}/>
        <br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
            <option>HP Laptop</option>
            <option>Dell Laptop</option>
            <option>Lanvo Laptop</option>
            <option>Asus Laptop</option>
            <option>Mac Book(Apple)</option>
        </select>
        <br /> <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept term & condition</span>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm;
