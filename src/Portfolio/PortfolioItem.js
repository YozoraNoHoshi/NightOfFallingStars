import React, { PureComponent } from 'react';
import { navigate } from '@reach/router';

class PortfolioItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: undefined
    };
  }

  componentDidMount() {
    let portfolio = this.props.portfolio[this.props.item];
    portfolio ? this.setState({ portfolio }) : navigate('/', { replace: true });
  }

  render() {
    return this.state.portfolio ? (
      <article className="PortfolioItem">
        <div className="portfolio-link">
          <a href={this.state.portfolio.siteLink}>
            {this.state.portfolio.title}
          </a>
          <div className="portfolio-github">
            <a href={this.state.portfolio.github}>
              <img src="../static/GitHubLogo.png" alt="Github" />
            </a>
          </div>
        </div>
        <div className="portfolio-description">
          {this.state.portfolio.description}
        </div>
        <a href={this.state.portfolio.siteLink}>
          <img
            src={this.state.portfolio.image}
            alt={`${this.state.portfolio.title} preview`}
          />
        </a>
      </article>
    ) : (
      <article className="PortfolioItem" />
    );
  }
}

PortfolioItem.defaultProps = {
  portfolio: {}
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
