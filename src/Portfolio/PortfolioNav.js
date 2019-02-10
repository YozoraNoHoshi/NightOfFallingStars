import React, { PureComponent } from 'react';
import NavItem from '../Navbar/NavItem';

class PortfolioNav extends PureComponent {
  renderNavItem = navItems => {
    return navItems.map(n => {
      return (
        <NavItem
          key={`pnav-${n.title.toLowerCase()}`}
          name={n.title.toLowerCase()}
          text={n.title}
          link={n.link}
        />
      );
    });
  };

  render() {
    return (
      <footer className="PortfolioNav">
        <nav id="portfolio-navbar">
          <ul className="row-container">
            {this.renderNavItem(Object.values(this.props.portfolio))}
          </ul>
        </nav>
      </footer>
    );
  }
}

PortfolioNav.defaultProps = {
  portfolio: {}
};

export default PortfolioNav;
