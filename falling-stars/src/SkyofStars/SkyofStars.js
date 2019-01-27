import React, { Component } from 'react';
import Routes from '../Routes';
import { navItems, siteHead } from '../data/nav.json';
import Navbar from '../Navbar/Navbar';

// The main container

class SkyOfStars extends Component {
  render() {
    return (
      <div className="SkyOfStars">
        <Navbar navItems={navItems} siteHead={siteHead} />
        <div className="center-star">
          <div id="main">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

// Effectively a global object containing all the things
SkyOfStars.defaultProps = {};

export default SkyOfStars;
