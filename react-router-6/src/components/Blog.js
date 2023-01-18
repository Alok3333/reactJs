import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h1 style={{color: '#b5179e'}}>Blog Pages...</h1>
      <div style={{display: 'inline-flex'}}>
        <ul>
          <li>
            <Link to='ui'>UI-Design</Link>
          </li>
          <li>
            <Link to='bloglist'>BlogList</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  )
}

export default Blog