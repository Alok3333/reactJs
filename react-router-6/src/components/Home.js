import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const NavToPage = (url) => {
    // console.log(url);
    navigate(url)
  }
  return (
    <div>
      <h1 style={{color: 'darkblue'}}>Home Pages</h1>
      <button onClick={()=>NavToPage('/about')}>Goto About Us page</button>
      <br/>
      <button onClick={()=>NavToPage('/filter')}>Goto Filter page</button>
    </div>
  )
}

export default Home