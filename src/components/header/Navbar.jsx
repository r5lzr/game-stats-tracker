import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='title'>Tracker Website</Link>
      <ul>
        <li>
          <NavLink to="/league-of-legends">League of Legends</NavLink>
        </li>
        <li>
          <NavLink to="/rocket-league">Rocket League</NavLink>
        </li>
        <li>
          <NavLink to="/counter-strike">Counter Strike</NavLink>
        </li>
      </ul>
      <div className='nav-divider'></div>
      <Link to="/login" className='login-btn'>Log in</Link>
    </nav>
  );
}
