import Navbar from './navbar/Navbar'
import Home from './homepage/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import Certifications from './certifications/Certifications'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import './App.css'
import { useContext } from 'react'
import { Theme } from '../public/theme/Themecontaxt'


function App() {
  
  const {user,setuser} = useContext(Theme)
  const change = ()=>{
    setuser({
      name :"sikander ali",
      age :"35",
      email :"sikanderali@gamil.com"
    })
  }
  
  return (
    
    <>
    <h1>hi i am {user.name}</h1>
    <h1>And my age is  {user.age}</h1>
    <h1>And my email is {user.email}</h1>
    <button style={{border:"2px solid blue",padding:"5px",borderRadius:"20px"}}
    onClick={change}
    >Change data</button>



      <Navbar />
      
      {/* <section id="home">
        <Home />
      </section> */}

      {/* <section id="about">
        <About />
      </section> */}

      {/* <section id="skills">
        <Skills />
      </section> */}

      {/* <section id="projects">
        <Projects />
      </section> */}

      {/* <section id="certifications">
        <Certifications />
      </section> */}

      {/* <section id="contact">
        <Contact />
      </section> */}
      {/* <Footer /> */}
    </>
  )
}

export default App;

