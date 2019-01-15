import React, { Component } from 'react';
import LinkBox from './LinkBox/LinkBox';
import './LeftSidebar.css';

class LeftSidebar extends Component {
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

  renderTitleBox = text => {
    return (
      <div class="title-box">
        <h3 class="title-text">{text}</h3>
      </div>
    );
  };

  renderLinks = links => {
    return links.map(l => {
      let logo = {
        image: l.logo.image,
        name: l.logo.name,
        height: l.logo.height,
        width: l.logo.width
      };
      return <LinkBox name={l.name} link={l.link} logo={logo} />;
    });
  };

  renderLinkBoxes = linkboxes => {
    return linkboxes.map(s => {
      return (
        <div className="title-box-container">
          <div class="title-box">
            <h3 class="title-text">{s.titleBox}</h3>
          </div>
          <div className="siderow-container">{this.renderLinks(s.links)}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="LeftSidebar">
        {this.renderLinkBoxes(this.props.sidebarLinks)}
      </div>
    );
  }
}

LeftSidebar.defaultProps = {
  sidebarLinks: [
    {
      titleBox: '',
      links: [
        {
          logo: {
            image: '',
            name: '',
            height: '',
            width: ''
          },
          name: '',
          link: ''
        }
      ]
    }
  ]
};

export default LeftSidebar;
