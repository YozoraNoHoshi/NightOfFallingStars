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
    if (portfolio) this.setState({ portfolio });
    else navigate('/', { replace: true });
  }

  render() {
    return this.state.portfolio ? (
      <div className="PortfolioItem">
        <div>
          <a href={this.state.portfolio.siteLink}>
            {this.state.portfolio.title}
          </a>
        </div>
        <div>{this.state.portfolio.description}</div>
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
