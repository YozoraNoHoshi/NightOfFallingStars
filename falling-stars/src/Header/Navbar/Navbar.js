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

  // Navitem takes props name and url

  render() {
    // URLs will need to be updated
    return (
      <nav id="navbar">
        <NavItem name="home" url="/index.html" />
        <NavItem name="meme-generator" url="/index.html" />
        <NavItem name="matching-game" url="/index.html" />
        <NavItem name="blackjack" url="/index.html" />
        <NavItem name="stam-calc" url="/index.html" />
        <NavItem name="github" url="/index.html" />
      </nav>
    );
  }
}

export default Navbar;
