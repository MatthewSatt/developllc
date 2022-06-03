import React from "react";
import "./Better.css"

function Better() {
  return (
    <div className="about" id="better">
      <div className="aboutleft">
        <h3>How We Are Different</h3>
        <p>
          Being a remote based team we are able to hire developers from all
          over, which means that we are able to assemble a roster of high tier
          developers at an affordable cost. This allows us to offer rapid
          learning, streamlined developers without breaking the bank.
        </p>
        <button className="talkwithusbutton">Learn More</button>
      </div>
      <div className="aboutright">
        <img
          id="aboutimage"
          src="https://developwebpage.com/images/undraw_team_spirit.svg"
        ></img>
      </div>
    </div>
  );
}

export default Better;
