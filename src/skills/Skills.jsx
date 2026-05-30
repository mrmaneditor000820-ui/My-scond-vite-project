import React from 'react'
import javascript from '../assets/js.png'
import typescript from '../assets/assets/type.png'
import html from '../assets/assets/html.jpeg'
import react from '../assets/assets/react.png'
import Node from '../assets/assets/node.png'
import Fire from '../assets/assets/fire.png'
import Css from '../assets/assets/css.png'
import Boot from '../assets/assets/boot.jpeg'
import Ghithub from '../assets/assets/ghithub.png'

function Skills() {
  return (
   <>
   <div>
    <h1>Skills & Technologics</h1>
   </div>
   <div>
    <img src={javascript} alt="JavaScript" />
    <p>JavaScript</p>
     <img src={typescript} alt="TypeScript" />
    <p>TypeScript</p>
     <img src={html} alt="HTML" />
    <p>HTML</p>
     <img src={react} alt="React" />
    <p>React</p>
     <img src={Node} alt="Node.js" />
    <p>Node.js</p>
     <img src={Fire} alt="Firebase" />
    <p>Firebase</p>
     <img src={Css} alt="CSS" />
    <p>CSS</p>
     <img src={Boot} alt="Bootstrap" />
    <p>Bootstrap</p>
     <img src={Ghithub} alt="GitHub" />
    <p>GitHub</p>
   </div>
    </>
  )
}

export default Skills;