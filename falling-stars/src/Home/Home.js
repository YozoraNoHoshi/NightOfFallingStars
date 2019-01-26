import React, { PureComponent } from 'react';

class MainContainer extends PureComponent {
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
    return <div className="MainContainer" />;
  }
}

export default MainContainer;
