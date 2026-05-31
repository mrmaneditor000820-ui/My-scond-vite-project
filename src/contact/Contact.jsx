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
   
   </>
  )
}

export default Contact;