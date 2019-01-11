import React, { Component } from 'react';
import Header from '../Header/Header';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainContainer from '../MainContainer/MainContainer';
import RightSidebar from '../RightSidebar/RightSidebar';

class SkyOfStars extends Component {
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
      <div className="SkyOfStars">
        <Header />
        <LeftSidebar />
        <MainContainer />
        <RightSidebar />
      </div>
    );
  }
}

export default SkyOfStars;
