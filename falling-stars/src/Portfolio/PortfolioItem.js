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
      <div className="PortfolioItem">
        <div className="portfolio-link">
          <a href={this.state.portfolio.siteLink}>
            {this.state.portfolio.title}
          </a>
        </div>
        <div className="portfolio-description">
          {this.state.portfolio.description}
        </div>
        <img
          src={this.state.portfolio.image}
          alt={`${this.state.portfolio.title} preview`}
        />
      </div>
    ) : (
      <div className="PortfolioItem" />
    );
  }
}

PortfolioItem.defaultProps = {
  title: '',
  description: '',
  siteLink: '',
  image: ''
};

PortfolioItem.propTypes = {};

export default PortfolioItem;
