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
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#certifications">Certifications</a>
  <a href="#contact">Contact</a>

      </div>

    </nav>

    </>
  )
}

export default Navbar;