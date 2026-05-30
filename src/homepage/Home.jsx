import React from 'react'
import './Home.css'
import MyImage from '../assets/My.jpeg'

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <h1>
          Hi, I'm <span>Abdul Rehman</span>
        </h1>

        <h3>React Frontend Developer</h3>

        <p>
          I’m Abdul Rehman, a passionate Frontend Developer specializing in
          React.js and modern web technologies. I enjoy building responsive,
          user-friendly, and visually appealing web applications that provide
          seamless user experiences.
        </p>

        <div className="btn-group">
          <button className="primary-btn">Contact Me</button>
          <button className="secondary-btn">View Projects</button>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/feed/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/mrmaneditor000820-ui" target="_blank">
            GitHub
          </a>
        </div>

      </div>

      <div className="home-image">
        <img src={MyImage} alt="Abdul Rehman" />
      </div>

    </section>
  )
}

export default Home;