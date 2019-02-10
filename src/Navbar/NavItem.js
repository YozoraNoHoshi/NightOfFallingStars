import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class NavItem extends PureComponent {
  activeStyle = ({ isCurrent }) => {
    return isCurrent ? { className: 'nav-active', opacity: 1 } : null;
  };

  render() {
    let classes =
      this.props.name === 'theSkyofStars' ? 'menu nav-header' : 'menu nav-item';
    return (
      <li id={`nav-${this.props.name}`} className={classes}>
        <Link
          className="no-underline nav-link"
          to={this.props.link}
          style={{ opacity: 1.0 }}
          getProps={this.activeStyle}
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}
NavItem.defaultProps = {
  name: '', // first letter should be capitalized
  link: '' // url link for the a href
};

export default NavItem;
