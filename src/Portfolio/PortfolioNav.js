import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class PortfolioNav extends PureComponent {
  render() {
    return (
      <Link
        className="no-underline nav-link portfolio-return"
        to="/"
        style={{ opacity: 1.0 }}
      >
        Back
      </Link>
    );
  }
}

PortfolioNav.defaultProps = {};

export default PortfolioNav;
