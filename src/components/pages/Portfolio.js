import React from 'react';
import logo from '../../img/logo192.png'

export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="projects">
          <div className="project">
              <img src={logo} alt=""></img>
          </div>
      </div>
    </div>

  );
}
