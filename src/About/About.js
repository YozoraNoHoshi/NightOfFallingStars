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
              <h2 className="blurred-text row-container">Nathan Chin</h2>
              <p className="blurred-text row-container">About blurb</p>
            </div>
            <div className="quote column-container">
              <q className="quote-text blurred-text">
                For my part I know nothing with any certainty, but the sight of
                the stars makes me dream.
              </q>
              <blockquote
                className="quote-text blurred-text"
                style={{ textAlign: 'right' }}
              >
                - Vincent Van Gogh
              </blockquote>
            </div>
          </div>
          <div className="row-container about-me">
            <div className="column-container">
              <p className="blurred-text">Age: 24</p>
              <p className="blurred-text">
                Hobbies: Games, memes, anime/manga, not necessarily in that
                order.
              </p>
              <p className="blurred-text">
                Favorite Game Genre: Strategy/Tactical, (J)RPGs
              </p>
              <div className="row-container">
                <p className="blurred-text">Favorite Emoji:</p>
                <img
                  src={blobderpy}
                  alt="blobderpy"
                  style={{ width: 32, height: 32 }}
                />
              </div>
            </div>
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
