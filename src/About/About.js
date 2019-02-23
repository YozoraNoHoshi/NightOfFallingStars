import React, { PureComponent } from 'react';
import './About.css';
import blobderpy from '../static/blobderpy.png';
import profilePicture from '../static/profilepic.jpg';

class About extends PureComponent {
  render() {
    return (
      <div className="About">
        <div className="row-container">
          <div className="column-container quoted-for-truth">
            <div className="column-container profile">
              <h1 className="blurred-text row-container">Nathan Chin</h1>
              <p className="blurred-text row-container">
                Software Engineer, Gamer for Life
              </p>
            </div>
            <div className="profile">
              <p className="blurred-text">
                I'm a full-stack software engineer currently based in the Bay
                Area. My passion for programming stems from my imagination,
                which provides the fuel to turn the imaginary into (virtual)
                reality.
              </p>
              <p className="blurred-text">
                My favorite game genre(s): Strategy/Tactical, (J)RPGs
              </p>
              <div className="row-container">
                <p className="blurred-text">All-time favorite emoji:</p>
                <img
                  src={blobderpy}
                  alt="blobderpy"
                  style={{ width: 32, height: 32 }}
                />
              </div>
            </div>
            <div className="quote column-container">
              <q className="quote-text blurred-text">
                We are not the result of some process - we are still the
                process.
              </q>
              {/* <blockquote
                className="quote-text blurred-text"
                style={{ textAlign: 'right' }}
              >
                - Vincent Van Gogh
              </blockquote> */}
            </div>
          </div>
          <div className="row-container about-me">
            <div className="column-container profile-image">
              <img src={profilePicture} alt="profile pic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Scribd

export default About;
