import React, { PureComponent } from 'react';
import ContactLink from './ContactLink';
import './Contact.css';
import { CONTACT } from '../data';
import { Link } from '@reach/router';

class Contact extends PureComponent {
  renderLinks = links => {
    return links.map(l => {
      let logo = {
        image: l.logo,
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
          {this.renderLinks(CONTACT)}
        </address>

        <strong className="row-container justify-around resume-box">
          <Link to="/resume" className="resume">
            View Resume
          </Link>
        </strong>
      </section>
    );
  }
}

export default Contact;
