import React from 'react'
import javascript from '../assets/js.png'
import typescript from '../assets/type.png'
import html from '../assets/html.jpeg'
import react from '../assets/react.png'
import Node from '../assets/node.png'
import Fire from '../assets/fire.png'
import Css from '../assets/css.png'
import Boot from '../assets/boot.jpeg'
import Ghithub from '../assets/ghithub.png'
import './Skills.css'

function Skills() {
  return (
   <>
   <div className="skills-heading">
    <h1>Skills & Technologies</h1>
   </div>

   <div className="skills-container">

    <div className="skill-card">
      <img src={javascript} alt="JavaScript" />
      <p>JavaScript</p>
    </div>

    <div className="skill-card">
      <img src={typescript} alt="TypeScript" />
      <p>TypeScript</p>
    </div>

    <div className="skill-card">
      <img src={html} alt="HTML" />
      <p>HTML</p>
    </div>

    <div className="skill-card">
      <img src={react} alt="React" />
      <p>React</p>
    </div>

    <div className="skill-card">
      <img src={Node} alt="Node.js" />
      <p>Node.js</p>
    </div>

    <div className="skill-card">
      <img src={Fire} alt="Firebase" />
      <p>Firebase</p>
    </div>

    <div className="skill-card">
      <img src={Css} alt="CSS" />
      <p>CSS</p>
    </div>

    <div className="skill-card">
      <img src={Boot} alt="Bootstrap" />
      <p>Bootstrap</p>
    </div>

    <div className="skill-card">
      <img src={Ghithub} alt="GitHub" />
      <p>GitHub</p>
    </div>

   </div>
    </>
  )
}

export default Skills