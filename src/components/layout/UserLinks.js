import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLinks = () => {
    return (
        <ul className="right">
          <li><NavLink to='/feed'>Feed</NavLink></li>
          <li><NavLink to='/location'>Location</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    )
}

export default UserLinks;
