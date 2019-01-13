import React, { Component } from 'react';

class NavItem extends Component {
  static defaultProps = {
    name: '', // first letter should be capitalized
    link: '' // url link for the a href
  };
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

  convertToText = text => {
    let capsText = text.split('-').map(w => {
      return w[0].toUpperCase() + w.slice(1);
    });
    return capsText.join(' ');
  };

  render() {
    return (
      <div id={`menu-${this.props.name}`} className="menu">
        <a
          href={this.props.link}
          className="border-text link-text no-underline"
        >
          {this.convertToText(this.props.name)}
        </a>
      </div>
    );
  }
}

export default NavItem;
