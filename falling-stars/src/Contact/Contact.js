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
      <section className="Contact">
        <address className="column-container justify-around no-italics">
          <div className="row-container contact contact-header">CONTACT ME</div>
          <div className="row-container contact">NCHOSHIZORA@GMAIL.COM</div>
        </address>
        <address className="contact-links no-italics">
          {this.renderLinks(links)}
        </address>
        <strong className="row-container justify-around resume-box">
          <a
            href="../static/resume.pdf"
            className="no-underline resume"
            download
          >
            Resume
          </a>
        </strong>
      </section>
    );
  }
}

Contact.defaultProps = {
  github,
  linkedIn,
  angelList
};

export default Contact;
