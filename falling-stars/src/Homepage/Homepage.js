import React, { PureComponent } from 'react';
import Portfolio from '../Portfolio/Portfolio';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="Homepage">
        <Portfolio portfolio={Object.values(this.props.portfolio)} />
      </div>
    );
  }
}

Homepage.defaultProps = {
  portfolio: {}
};

Homepage.propTypes = {};

export default Homepage;
