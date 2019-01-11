import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';

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
        <div id="img-banner" class="row-container">
          <h1 id="title-banner">
            <a href="index.html" class="border-text no-underline">
              A Night Sky Full of Stars
            </a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
