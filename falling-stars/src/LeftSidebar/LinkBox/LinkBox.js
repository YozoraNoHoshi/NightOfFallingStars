import React, { Component } from 'react';

class LinkBox extends Component {
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
      <div className="LinkBox link-container column-container right-margin">
        <a href={this.props.link}>
          <img
            src={this.props.logo.image}
            alt={this.props.logo.name}
            height={this.props.logo.height}
            width={this.props.logo.width}
          />
        </a>
        <a href={this.props.link} class="border-text link-text">
          {this.props.name}
        </a>
      </div>
    );
  }
}

LinkBox.defaultProps = {};

LinkBox.propTypes = {};

export default LinkBox;
