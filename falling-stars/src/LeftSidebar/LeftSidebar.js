import React, { Component } from 'react';
import LinkBox from './LinkBox/LinkBox';

class LeftSidebar extends Component {
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
      <div className="LeftSidebar">
        <LinkBox />
      </div>
    );
  }
}

export default LeftSidebar;
