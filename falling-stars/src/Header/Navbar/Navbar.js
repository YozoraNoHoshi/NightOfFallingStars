import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  renderNavItem = navItems => {
    return navItems.map(n => {
      return <NavItem name={n.name} link={n.link} />;
    });
  };

  render() {
    // URLs will need to be updated
    return <nav id="navbar">{this.renderNavItem(this.props.navItems)}</nav>;
  }
}

Navbar.defaultProps = {
  navitems: [{}, {}]
};

export default Navbar;
