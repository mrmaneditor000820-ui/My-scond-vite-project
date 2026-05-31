import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaLanguage } from "react-icons/fa";
import './Certifications.css'

function Certifications() {
  return (
    <>
    <>
  <div className="cert-heading">
    <h1>Certifications & Achievements</h1>
    <p>Professional certifications and continuous learning journey.</p>
  </div>

  <div className="cert-container">

    <div className="cert-card">
      <FaHtml5 className="cert-icon" />
      <h3>Certificate of HTML</h3>
      <h5>Course By Cisco Networking Academy</h5>
      <p>
        Completed a professional certification in Web Development Foundations,
        covering semantic HTML5 structure, accessibility standards and clean coding practices.
      </p>
    </div>

    <div className="cert-card">
      <FaCss3Alt className="cert-icon" />
      <h3>Certificate of CSS</h3>
      <h5>Course By Cisco Networking Academy</h5>
      <p>
        Completed a professional certification in Advanced Styling and Design,
        covering responsive design, Flexbox, Grid and CSS variables.
      </p>
    </div>

    <div className="cert-card">
      <FaJs className="cert-icon" />
      <h3>Certificate of JavaScript</h3>
      <h5>Course By Cisco Networking Academy</h5>
      <p>
        Completed a professional certification in Programming Foundations with
        JavaScript, including DOM manipulation and asynchronous programming.
      </p>
    </div>

    <div className="cert-card">
      <FaLanguage className="cert-icon" />
      <h3>English Language Certificate</h3>
      <h5>Course By Duolingo</h5>
      <p>
        Completed a professional certification in English Language Proficiency,
        covering communication, writing, reading and listening skills.
      </p>
    </div>

  </div>
</>
    </>
  )
}

export default Certifications;