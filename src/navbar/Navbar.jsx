import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div>
        <h1>Abdul Rehman</h1>
    </div>
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
    </div>

    </>
  )
}

export default Navbar;