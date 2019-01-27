import React, { PureComponent } from 'react';
import './About.css';

class About extends PureComponent {
  render() {
    return (
      <div className="About column-container">
        <div className="row-container">
          <div className="blurred-text">quote</div>
          <div>
            <img
              src="../static/profilePic.jpg"
              alt=""
              className="about-image"
            />
          </div>
        </div>
        <div className="blurred-text row-container">Nathan Chin</div>
        <p className="blurred-text row-container">About blurb</p>
      </div>
    );
  }
}

export default About;
