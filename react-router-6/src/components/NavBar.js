import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const NavBar = () => {  
  return (
    <div>
        <ul className='navbar'>
            <li>
                <NavLink className='nav-bar-link' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='nav-bar-link' to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className='nav-bar-link' to='/blog'>Blog</NavLink>
            </li>
            <li>
                <NavLink className='nav-bar-link' to='/filter'>Filter</NavLink>
            </li>
            <li>
                <NavLink className='nav-bar-link' to='/login'>Login</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar