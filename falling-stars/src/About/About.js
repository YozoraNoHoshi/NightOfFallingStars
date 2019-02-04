import React, { PureComponent } from 'react';
import './About.css';

class About extends PureComponent {
  render() {
    return (
      <div className="About">
        <div className="row-container">
          <div className="column-container quoted-for-truth">
            <div className="column-container profile">
              <div className="blurred-text row-container">Nathan Chin</div>
              <p className="blurred-text row-container">About blurb</p>
            </div>
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
          </div>
          <div className="column-container about-me">
            <img
              src="../static/profilePic.jpg"
              alt="profile goes here"
              className="about-image"
            />
            <div className="blurred-text">Age: 24</div>
            <p className="blurred-text">
              Hobbies: Stardew Valley, Dragalia Lost, other games, trying to
              make things tick.
            </p>
            <p className="blurred-text">
              Favorite Game Genre: Strategy/Tactical, (J)RPGs
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// Scribd

export default About;
