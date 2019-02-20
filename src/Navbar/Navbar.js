import React, { PureComponent } from 'react';
import NavItem from './NavItem';
import './Navbar.css';

class Navbar extends PureComponent {
  renderNavItem = navItems => {
    return navItems.map(n => {
      return (
        <NavItem
          key={`nav-${n.name}`}
          name={n.name}
          text={n.text}
          link={n.link}
        />
      );
    });
  };

  render() {
    return (
      <header>
        <nav id="navbar">
          <ul className="row-container">
            <NavItem
              key={`nav-${this.props.siteHead.name}`}
              name={this.props.siteHead.name}
              text={this.props.siteHead.text}
              link={this.props.siteHead.link}
            />
          </ul>
          <ul className="row-container nav-items">
            {this.renderNavItem(this.props.navItems)}
          </ul>
        </nav>
      </header>
    );
  }
}

Navbar.defaultProps = {
  navitems: [{}, {}]
};

export default Navbar;
