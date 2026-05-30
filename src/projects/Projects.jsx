import React from 'react'
import Market from '../assets/market.png'
import Nexcent from '../assets/nexcent.png'

function Projects() {
  return (
   <>
   <div>
    <h1>Big Projects</h1>
   </div>
   <div>
    <img src={Market} alt="Market App" />
    <h2>Market Place - E-commerce Platform</h2>
    <p>A full-stack e-commerce platform built with React and Node.js, featuring a modern UI and seamless user experience.</p>
   </div>
    <div>
    <img src={Nexcent} alt="Nexcent App" />
    <h2>Nexcent - Social Media Platform</h2>
    <p>A modern social media platform built with React and Node.js, allowing users to connect, share, and engage with content.</p>
   </div>
    <div>
    <img src={Market} alt="Market App" />
    <h2>Market Place - E-commerce Platform</h2>
    <p>A full-stack e-commerce platform built with React and Node.js, featuring a modern UI and seamless user experience.</p>
   </div>
    <div>
    <img src={Market} alt="Market App" />
    <h2>Market Place - E-commerce Platform</h2>
    <p>A full-stack e-commerce platform built with React and Node.js, featuring a modern UI and seamless user experience.</p>
   </div>
     </>
  )
}

export default Projects