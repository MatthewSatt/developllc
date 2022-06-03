import React from "react";
import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutleft">
        <h3>What We Do</h3>
        <p>
          Whether you running something of your own or looking for us to run the
          development for you, we are here to help. We can provide you with
          talent for your team, or handle all of the development ourselves!
          Other than our development, we provide affordable and customizable
          hosting options, as well as e-invitations.
        </p>
        <button className="talkwithusbutton">Learn More</button>
      </div>
      <div className="aboutright">
          <img id='aboutimage'src="https://developwebpage.com/images/undraw_web_development.svg"></img>
      </div>
    </div>
  );
}

export default About;
