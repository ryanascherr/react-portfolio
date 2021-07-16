import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact-links">
        <a href="mailto: ryanascherr@gmail.com" target="_blank"><button className="link"><p>Email</p><p>ryanascherr@gmail.com</p></button></a>
        <a href="https://github.com/ryanascherr" target="_blank"><button className="link"><p>GitHub</p><p>github.com/ryanascherr</p></button></a>
        <a href="https://www.linkedin.com/in/ryanascherr/" target="_blank"><button className="link"><p>LinkedIn</p><p>linkedin.com/in/ryanascherr</p></button></a>
      </div>
    </div>
  );
}
