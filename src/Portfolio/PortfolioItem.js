import React, { PureComponent } from 'react';
import { navigate } from '@reach/router';
import PortfolioNav from './PortfolioNav';

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
      <>
        <article className="PortfolioItem">
          <div className="portfolio-link">
            <a href={this.state.portfolio.siteLink}>
              {this.state.portfolio.title}
            </a>
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
        {/* Put navigation to portfolio objects here */}
        <PortfolioNav portfolio={this.props.portfolio} />
      </>
    ) : (
      <>
        <article className="PortfolioItem" />
        {/* Put navigation to portfolio objects here */}
        <PortfolioNav portfolio={this.props.portfolio} />
      </>
    );
  }
}

PortfolioItem.defaultProps = {
  portfolip: {}
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
