import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLinks = () => {
    return (
        <ul className="right">
          <li><NavLink to='/create'>Create New Post</NavLink></li>
          <li><NavLink to='/feed'>Feed</NavLink></li>
          <li><NavLink to='/location'>Location</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/logout'>Log Out</NavLink></li>
          <li><NavLink to='/' className='btn btn-floating pink lighten-1'>A</NavLink></li>
        </ul>
    )
}

export default AdminLinks;
