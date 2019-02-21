import React, { PureComponent } from 'react';
import github from '../static/GitHubLogo.png';
import { Redirect } from '@reach/router';

class PortfolioItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: props.portfolio[props.item]
    };
  }

  renderBadge = () => {
    return (
      <div className="portfolio-link">
        <a href={this.state.portfolio.siteLink} style={{ fontSize: '1em' }}>
          <img
            style={{ height: '100%' }}
            src={this.state.portfolio.badge}
            alt={`${this.state.portfolio.title} on the app store`}
          />
        </a>
      </div>
    );
  };

  renderGHLogo = () => {
    return (
      <div className="portfolio-link">
        <a href={this.state.portfolio.github}>
          <img src={github} alt="Github" />
        </a>
      </div>
    );
  };

  render() {
    return this.state.portfolio ? (
      <article className="PortfolioItem">
        <div className="portfolio-item-container" style={{ fontSize: '2em' }}>
          <a
            className="portfolio-item-text"
            href={this.state.portfolio.siteLink}
            style={{ fontSize: '2em' }}
          >
            {this.state.portfolio.title}
          </a>
        </div>
        <div className="portfolio-item-container portfolio-image">
          <a
            className="portfolio-item-text"
            href={this.state.portfolio.siteLink}
            style={{ fontSize: '1em' }}
          >
            <img
              src={this.state.portfolio.image}
              alt={`${this.state.portfolio.title} preview`}
            />
          </a>
        </div>
        <div className="portfolio-description">
          {this.state.portfolio.description}
        </div>
        {this.state.portfolio.badge || this.state.portfolio.github ? (
          <div className="portfolio-badges">
            {this.state.portfolio.github && this.renderGHLogo()}
            {this.state.portfolio.badge && this.renderBadge()}
          </div>
        ) : null}
      </article>
    ) : (
      <Redirect to="/" noThrow />
    );
  }
}

PortfolioItem.defaultProps = {
  portfolio: {}
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
