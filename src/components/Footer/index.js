import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        <img className="logo" src="logo.png"></img>
        <div className="col">
          <div className="category">About Us</div>
          <div>Contact Us</div>
          <div>How it Works</div>
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
        <div className="col">
          <div className="category">Services</div>
          <div>Website Design</div>
          <div>Hosting Options</div>
          <div>E-Invitations</div>
          <div>Consultations</div>
        </div>
        <div className="col">
          <div className="category">Social Media</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Youtube</div>
          <div>LinkedIn</div>
        </div>
    </div>
  );
}

export default Footer;
