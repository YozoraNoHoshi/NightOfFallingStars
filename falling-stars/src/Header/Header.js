import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css';

class Header extends Component {
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

  render() {
    return (
      <header>
        <aside>
          <Navbar />
        </aside>
        <div id="img-banner" className="row-container justify-around">
          <h1 id="title-banner">
            <a href="index.html" className="border-text no-underline">
              A Night Sky Full of Stars
            </a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
