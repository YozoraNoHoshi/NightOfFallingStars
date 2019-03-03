import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { Router } from '@reach/router';
import Contact from './Contact/Contact';
import About from './About/About';
import { PORTFOLIO, RESUME, NAV } from './data';
import PortfolioItem from './Portfolio/PortfolioItem';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Contact/Resume';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.portfolio = Object.values(PORTFOLIO);
  }

  render() {
    return (
      <div className="SkyOfStars">
        <Navbar navItems={NAV.navItems} siteHead={NAV.siteHead} />
        <main>
          <Router className="center-star">
            <Portfolio default path="/" portfolio={this.portfolio} />
            <About path="/about" />
            <Contact path="/contact" />
            <PortfolioItem path="/portfolio/:item" portfolio={PORTFOLIO} />
            <Resume path="/resume" resume={RESUME} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
