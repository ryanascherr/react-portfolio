import React from 'react';
import $ from 'jquery';

export default function Contact() {

  function sendMail() {
    if ($("#name").val() == "" || $("#email").val() == "" || $("#email-body").val() == "") {
      return alert('Please fill in all fields')
    };
    var link = "mailto:ryanascherr@gmail.com"
      + "?cc=ryanascherr@gmail.com"
      + "&subject=" + encodeURIComponent("Hey Ryan, you're super cool!")
      + "&body=" + encodeURIComponent(document.getElementById('email-body').value)
      ;

    window.location.href = link;
  }

  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <form>
        <h3>Name:</h3>
        <input type="text" id="name" name="fname"></input><br></br>
        <h3>Email Address:</h3>
        <input type="text" id="email" name="lname"></input>
      </form>
      <h3>Message:</h3>
      <textarea id="email-body" rows="5" cols="100"></textarea>
      <button onClick={sendMail}>Submit</button>
    </div>
  );
}
