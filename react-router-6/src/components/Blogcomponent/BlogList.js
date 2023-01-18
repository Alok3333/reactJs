import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BlogList = () => {
  return (
    <div>
      <h2 style={{color: 'yellowgreen'}}>List Of Blog Page</h2>
      <Link to='image'>Img</Link>
      <Outlet/>
    </div>
  )
}

export default BlogList