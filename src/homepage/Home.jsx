import React from 'react'
import './Home.css'
import MyImage from '../assets/My.jpeg'
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <h1>
  Hi, I'm <span>Abdul Rehman</span>
</h1>

<h2>
  <TypeAnimation
    sequence={[
      'React Developer',
      2000,
      'Frontend Developer',
      2000,
      'Problem Solver',
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</h2>
        <p>
          I’m  Frontend Developer specializing in React.js and modern web technologies. I enjoy building responsive, user-friendly, and visually appealing web applications that provide seamless user experiences. Through hands-on projects, I have gained experience working with React, JavaScript, Context API, and modern UI development practices. I am constantly learning new technologies, improving my problem-solving skills, and creating projects that transform ideas into real-world solutions. My goal is to grow as a Full-Stack Developer while contributing to impactful and innovative digital products.
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