import React from 'react'
import './About.css'

import { FaUserTie, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section className="about-section">

      <div className="about-heading">
        <h1>About Me</h1>
        <p>Get to know more about me and my journey.</p>
      </div>

      <div className="about-container">

        <div className="about-card">
          <FaUserTie className="about-icon" />
          <h3>Who I Am</h3>

          <p>
            I’m a Frontend Developer specializing in React.js and modern web
            technologies. I enjoy building responsive, user-friendly and
            visually appealing web applications while continuously learning
            new technologies and improving my problem-solving skills.
          </p>
        </div>

        <div className="about-card">
          <FaGraduationCap className="about-icon" />
          <h3>Education</h3>

          <h4>Govt National College</h4>
          <p>Pre Engineering</p>
          <span>2024 - 2025</span>
        </div>

        <div className="about-card">
          <FaLaptopCode className="about-icon" />
          <h3>Professional Training</h3>

          <h4>Modern Web & App Development</h4>
          <p>Saylani Mass IT Training</p>
        </div>

      </div>

      <div className="stats">

        <div className="stat-box">
          <h2>10+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h2>1+</h2>
          <p>Years Learning</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>

      </div>

    </section>
  )
}

export default About;