import React, { PureComponent } from 'react';

class ContactLink extends PureComponent {
  render() {
    return (
      <figure className="ContactLink">
        <a href={this.props.link} className="link-image">
          <img
            src={this.props.logo.image}
            alt={this.props.logo.name}
            height={this.props.logo.height}
            width={this.props.logo.width}
          />
        </a>
        <a href={this.props.link} className="contact-text">
          {this.props.text}
        </a>
      </figure>
    );
  }
}

export default ContactLink;
