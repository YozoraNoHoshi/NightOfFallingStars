import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class PortfolioCard extends PureComponent {
  render() {
    let style = {
      animation: 'faded-starfall 3s ease-in backwards',
      animationDelay: '.2s'
    };
    return (
      <Link className="portfolio-title" to={this.props.link}>
        <div className="PortfolioCard" style={style}>
          <div>{this.props.title}</div>
          <img className="portfolio-bg" src={this.props.image} alt="" />
        </div>
      </Link>
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
