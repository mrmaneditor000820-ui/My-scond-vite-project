import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
    
    <nav className='navbar'>

<h1 className="logo-text">
  &lt;<span>Abdul Rehman</span> /&gt;
</h1>

      <div className='nav-links'>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Certifications">Certifications</Link>
        <Link to="/Contact">Contact</Link>
      </div>

    </nav>

    </>
  )
}

export default Navbar;