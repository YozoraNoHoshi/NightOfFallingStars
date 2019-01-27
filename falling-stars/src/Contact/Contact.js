import React, { Component } from 'react';
import ContactLink from './ContactLink/ContactLink';
import './Contact.css';
import links from '../data/contact.json';
import github from '../static/GitHubLogo.png';
import linkedIn from '../static/LinkedInLogo.png';

class Contact extends Component {
  renderLinks = links => {
    return links.map(l => {
      let logo = {
        image: this.props[l.name],
        name: `${l.name}-logo`,
        height: '64px',
        width: '64px'
      };
      return (
        <ContactLink
          key={l.name}
          name={l.name}
          text={l.text}
          link={l.link}
          logo={logo}
        />
      );
    });
  };

  render() {
    return (
      <div className="Contact">
        <div className="row-container ">EMAIL</div>
        <div className="row-container">{this.renderLinks(links)}</div>
      </div>
    );
  }
}

Contact.defaultProps = {
  github,
  linkedIn
};

export default Contact;
