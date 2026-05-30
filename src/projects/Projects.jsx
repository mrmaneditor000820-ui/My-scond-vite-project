import React from 'react'
import Market from '../assets/market.png'
import Nexcent from '../assets/nexcent.png'
import Rentcar from '../assets/rentcar.png'
import Ring from '../assets/ring.png'

function Projects() {
  return (
   <>
   <div className="projects-heading">
  <h1>Big Projects</h1>
</div>

<div className="projects-container">

  <div className="project-card">
    <a href="https://mymarketplacewebsite.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src={Market} alt="Market App" />
      <h2>Market Place - E-commerce Platform</h2>
      <p>A full-stack e-commerce platform built with React and Node.js, featuring a modern UI and seamless user experience.</p>
    </a>
  </div>

  <div className="project-card">
    <a href="https://clonefigma.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src={Nexcent} alt="Nexcent App" />
      <h2>Nexcent - Social Media Platform</h2>
      <p>A modern social media platform built with React and Node.js, allowing users to connect, share, and engage with content.</p>
    </a>
  </div>

  <div className="project-card">
    <a href="https://dainty-pony-d52426.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src={Rentcar} alt="Rentcar App" />
      <h2>Rentcar - Car Rental Platform</h2>
      <p>A responsive car rental platform built with React and Node.js, providing a seamless booking experience for users.</p>
    </a>
  </div>

  <div className="project-card">
    <a href="https://rehman-e-commerce-web.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src={Ring} alt="Ring App" />
      <h2>Ring - Communication Platform</h2>
      <p>A modern communication platform built with React and Node.js, enabling users to connect and collaborate effectively.</p>
    </a>
  </div>

</div>
     </>
  )
}

export default Projects