import React, { PureComponent } from 'react';
import './About.css';

class About extends PureComponent {
  render() {
    return (
      <div className="About column-container">
        <div className="row-container">
          <div className="column-container">
            <div className="quote column-container">
              <div className="quote-text blurred-text">
                "For my part I know nothing with any certainty, but the sight of
                the stars makes me dream."
              </div>
              <div
                className="quote-text blurred-text"
                style={{ textAlign: 'right' }}
              >
                - Vincent Van Gogh
              </div>
            </div>
            <div className="column-container profile">
              <div className="blurred-text row-container">Nathan Chin</div>
              <p className="blurred-text row-container">About blurb</p>
            </div>
          </div>
          <div className="column-container">
            <img
              src="../static/profilePic.jpg"
              alt="profile goes here"
              className="about-image"
            />
            <div>Age</div>
            <div>Hobbies</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
