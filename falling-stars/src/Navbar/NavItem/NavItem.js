import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends PureComponent {
  render() {
    let classes =
      this.props.name === 'theSkyofStars' ? 'menu nav-header' : 'menu nav-item';
    return (
      <header>
        <aside>
          <li id={`nav-${this.props.name}`} className={classes}>
            <NavLink
              className="no-underline nav-link"
              to={this.props.link}
              style={{ opacity: 1.0 }}
            >
              {this.props.text}
            </NavLink>
          </li>
        </aside>
      </header>
    );
  }
}
NavItem.defaultProps = {
  name: '', // first letter should be capitalized
  link: '' // url link for the a href
};

export default NavItem;
