import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { navItems, siteHead } from './data/nav.json';
import { Router } from '@reach/router';
import Contact from './Contact/Contact';
import About from './About/About';
import Homepage from './Homepage/Homepage';
import { PORTFOLIO } from './data';
import pokemon from './data/pokemon.json';
import PortfolioItem from './Portfolio/PortfolioItem';
import './App.css';
import Game from './Pokemon/components/organisms/Game';

class App extends Component {
  render() {
    return (
      <div className="SkyOfStars">
        <Navbar navItems={navItems} siteHead={siteHead} />
        <main>
          <Router className="center-star">
            <Homepage default path="/" portfolio={PORTFOLIO} />
            <About path="/about" />
            <Contact path="contact" />
            <PortfolioItem path="/portfolio/:item" portfolio={PORTFOLIO} />
            <Game path="/pokemon/*" pokemon={pokemon} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
// https://reactstrap.github.io/components/carousel/
