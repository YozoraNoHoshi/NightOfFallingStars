import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class PortfolioCard extends PureComponent {
  render() {
    let style = {
      animation: 'faded-starfall 1s ease-in backwards',
      animationDelay: `${this.props.delay}s`
    };
    return (
      <Link className="portfolio-title pf-rotate" to={this.props.link}>
        <figure className="PortfolioCard" style={style}>
          {/* <figcaption>{this.props.title}</figcaption> */}
          <img className="portfolio-bg" src={this.props.image} alt="" />
        </figure>
      </Link>
    );
  }
}

PortfolioCard.defaultProps = {
  title: '',
  link: '/',
  image: '',
  delay: 0.25
};

PortfolioCard.propTypes = {};

export default PortfolioCard;
