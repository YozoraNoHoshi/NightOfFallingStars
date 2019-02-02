import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { navItems, siteHead } from './data/nav.json';
import { Router } from '@reach/router';
import Contact from './Contact/Contact';
import About from './About/About';
import Homepage from './Homepage/Homepage';
import portfolio from './data/portfolio.json';
import PortfolioItem from './Portfolio/PortfolioItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="SkyOfStars">
        <Navbar navItems={navItems} siteHead={siteHead} />
        <main>
          <Router className="center-star">
            <Homepage default path="/" portfolio={portfolio} />
            <About path="/about" />
            <Contact path="contact" />
            <PortfolioItem path="/portfolio/:item" portfolio={portfolio} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
