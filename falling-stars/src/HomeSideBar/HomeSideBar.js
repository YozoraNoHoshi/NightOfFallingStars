import React, { PureComponent } from 'react';

class RightSidebar extends PureComponent {
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
    return <div className="RightSidebar" />;
  }
}

export default RightSidebar;
