import React from 'react'

function Contact() {
  return (
   <>
   <div>
    <h1>Get In Touch</h1>
   </div>
   <div>
    <form>
      <label>Full Name</label>
      <input type="text" placeholder='Name' required />
      <label>Email</label>
      <input type="email" placeholder='Email' required />
      <label>Message</label>
      <textarea placeholder='Message' required></textarea>
      <button type='submit'>Send Message</button>
    </form>
   </div>
   <div>
    <h3>Contact Information</h3>
    <h5>Email</h5>
    <p>mrmaneditor000820@gmail.com</p>
    <h5>Phone</h5>
    <p>+923463419974</p>
    <h5>Location</h5>
    <p>Pakistan</p>
    <h5>Connect With Me</h5>
    <a href="https://github.com/mrmaneditor000820" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/mrmaneditor000820/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   </div>
   </>
  )
}

export default Contact;