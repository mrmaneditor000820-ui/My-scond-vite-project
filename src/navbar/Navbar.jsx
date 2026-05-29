import React from 'react'
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
    <div>
        <h1>Abdul Rehman</h1>
    </div>
    <div>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Certifications">Certifications</Link>
        <Link to="/Contact">Contact</Link>
        
    </div>

    </>
  )
}

export default Navbar;