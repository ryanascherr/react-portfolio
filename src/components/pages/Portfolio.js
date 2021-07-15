import React from 'react';
import techPic from '../../img/tech-blog.png';
import yodaPic from '../../img/yoda.png';
import weatherPic from '../../img/weather.png';
import horiseonPic from '../../img/horiseon.png';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects">
          <div className="project">
              <div className="pic-container">
                  <img src={techPic} alt=""></img>
                  <div className="overlay">
                      <div className="text"><h1>Hello!</h1></div>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="pic-container">
                  <img src={yodaPic} alt=""></img>
                  <div className="overlay">
                      <div className="text"><h1>Hello!</h1></div>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="pic-container">
                  <img src={weatherPic} alt=""></img>
                  <div className="overlay">
                      <div className="text"><h1>Hello!</h1></div>
                  </div>
              </div>
          </div>
          <div className="project">
              <div className="pic-container">
                  <img src={horiseonPic} alt=""></img>
                  <div className="overlay">
                      <div className="text"><h1>Hello!</h1></div>
                  </div>
              </div>
          </div>
      </div>
    </div>

  );
}
