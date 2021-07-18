import React from 'react';
import techPic from '../../img/tech-blog.png';
import yodaPic from '../../img/yoda.png';
import weatherPic from '../../img/weather.png';
import horiseonPic from '../../img/horiseon.png';
import $ from "jquery";

export default function Portfolio() {

    const toggleProjectOne = () => {
        $(".one").slideToggle();
        $(".two").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
    }

    const toggleProjectTwo = () => {
        $(".two").slideToggle();
        $(".one").slideUp();
        $(".three").slideUp();
        $(".four").slideUp();
    }

    const toggleProjectThree = () => {
        $(".three").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".four").slideUp();
    }

    const toggleProjectFour = () => {
        $(".four").slideToggle();
        $(".one").slideUp();
        $(".two").slideUp();
        $(".three").slideUp();
    }

    return (
        <div className="portfolio">
            <h1>My Portfolio</h1>
            <h2>Click on a project to learn more</h2>
            <div className="projects">
                <div className="project project-one" onClick={toggleProjectOne}>
                    <div className="project-name">
                        <h3>Tech Blog</h3>
                    </div>
                    <div className="pic-container">
                        <img src={techPic} alt=""></img>
                    </div>
                    <div className="image-label hidden one">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows users to create posts about web development and reply to other users' posts. Users can also log in and edit or delete their own posts.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, Express, MySQL, Sequelize, Handlebars.js, Dotenv, Bcrypt</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/tech-blog" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://whispering-sea-48503.herokuapp.com/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-two" onClick={toggleProjectTwo}>
                    <div className="project-name">
                        <h3>Yoda Translator</h3>
                    </div>
                    <div className="pic-container">
                        <img src={yodaPic} alt=""></img>
                    </div>
                    <div className="image-label hidden two">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows a user to generate a random piece of advice or make their own, then have it translated by the Jedi Master Yoda.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, MaterializeCSS, Fun Translations API, Advice Slip JSON API</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/caitbopp/yoda-advice" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://caitbopp.github.io/yoda-advice/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-three" onClick={toggleProjectThree}>
                    <div className="project-name">
                        <h3>Weather Finder</h3>
                    </div>
                    <div className="pic-container">
                        <img src={weatherPic} alt=""></img>
                    </div>
                    <div className="image-label hidden three">
                        <h4>Description:</h4>
                        <p className="bottom">This application allows a user to find weather information for any city across the world, as well as a 5-day forecast.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS, JS, JQuery, MaterializeCSS, Fun Translations API, Advice Slip JSON API</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/weather-dashboard" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://ryanascherr.github.io/weather-dashboard/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
                <div className="project project-four" onClick={toggleProjectFour}>
                    <div className="project-name">
                        <h3>Horiseon</h3>
                    </div>
                    <div className="pic-container">
                        <img src={horiseonPic} alt=""></img>
                    </div>
                    <div className="image-label hidden four">
                        <h4>Description:</h4>
                        <p className="bottom">This webpage is a mockup of a company website which fetaures responsive design and a clean UI.</p>
                        <h4>Technologies Used:</h4>
                        <p className="bottom">HTML, CSS</p>
                        <div className="buttons">
                            <button className="button"><a href="https://github.com/ryanascherr/horiseon" target="_blank">Repo</a></button>
                            <button className="button"><a href="https://ryanascherr.github.io/horiseon/" target="_blank">Web Page</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}
