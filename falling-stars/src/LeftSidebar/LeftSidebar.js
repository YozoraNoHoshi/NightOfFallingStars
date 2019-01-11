import React, { Component } from 'react';

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
    return <div className="LeftSidebar" />;
  }
}

export default LeftSidebar;
