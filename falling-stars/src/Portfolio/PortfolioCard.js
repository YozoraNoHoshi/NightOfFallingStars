import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class PortfolioCard extends PureComponent {
  render() {
    return (
      <div className="PortfolioCard">
        <Link to={this.props.link}>
          <img src={this.props.image} alt="" />
          <div>{this.props.title}</div>
        </Link>
      </div>
    );
  }
}

PortfolioCard.defaultProps = {
  title: '',
  link: '/',
  image: ''
};

PortfolioCard.propTypes = {};

export default PortfolioCard;
