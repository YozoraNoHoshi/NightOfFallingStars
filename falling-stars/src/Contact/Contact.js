import React, { PureComponent } from 'react';
import ContactLink from './ContactLink';
import './Contact.css';
import links from '../data/contact.json';
import github from '../static/GitHubLogo.png';
import linkedIn from '../static/LinkedInLogo.png';
import angelList from '../static/AngelListLogo.png';

class Contact extends PureComponent {
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
        <div className="column-container justify-around">
          <div className="row-container contact contact-header">CONTACT ME</div>
          <div className="row-container contact">NCHOSHIZORA@GMAIL.COM</div>
        </div>
        <div className="contact-links">{this.renderLinks(links)}</div>
        <div className="row-container justify-around resume-box">
          <a
            href="../static/resume.pdf"
            className="no-underline resume"
            download
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
}

Contact.defaultProps = {
  github,
  linkedIn,
  angelList
};

export default Contact;
