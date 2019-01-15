import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <aside>
          <Navbar navItems={this.props.navItems} />
        </aside>
        <div id="img-banner">
          <h1 id="title-banner">
            <a href="index.html" className="site-title">
              A Night Sky Full of Stars
            </a>
          </h1>
        </div>
      </header>
    );
  }
}
Header.defaultProps = {
  navItems: [{ name: '', link: '' }]
};

export default Header;
