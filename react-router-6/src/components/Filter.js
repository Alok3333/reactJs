import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const age = searchParams.get('age');
  return (
    <div>
        <h1 style={{color: 'skyblue'}}>Filter Page</h1>
        <h3>To get params from the url</h3>
        <span style={{color: 'green'}}>searchParamsName: {name}</span><br/>
        <span style={{color: 'green'}}>searchParamsAge: {age}</span>
        <div>
            <input type='text' onChange={(e)=>setSearchParams({name: e.target.value, age: 28})} placeholder='set name in query params'/>
            {/* <button onClick={()=>setSearchParams({age: 28})}>Set Age in query params</button> */}
        </div>
    </div>
  )
}

export default Filter