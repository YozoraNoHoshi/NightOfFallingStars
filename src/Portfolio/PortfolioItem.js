import React, { PureComponent } from 'react';
import { navigate } from '@reach/router';
import github from '../static/GitHubLogo.png';

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
              <img src={github} alt="Github" />
            </a>
          </div>
        </div>
        <div className="portfolio-description">
          {this.state.portfolio.description}
        </div>
        <div className="portfolio-link">
          <a href={this.state.portfolio.siteLink} style={{ fontSize: '1em' }}>
            <img
              src={this.state.portfolio.image}
              alt={`${this.state.portfolio.title} preview`}
            />
          </a>
        </div>
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
