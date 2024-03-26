import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div id="Contact">
        <section id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        
        <p>
          Email:{' '}
          <a href="https://mail.google.com/mail/u/0/#sent?compose=new" target="_blank" rel="noopener noreferrer">
            MY Email:gokulbecse232004@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/gokul-developer004/" target="_blank" rel="noopener noreferrer">
            Your LinkedIn Profile
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/gokulcoders" target="_blank" rel="noopener noreferrer">
            Your GitHub Profile
          </a>
        </p>
       
      </div>
    </section>
    </div>
  )
}

export default Contact
