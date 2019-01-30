import React, { PureComponent } from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

class Portfolio extends PureComponent {
  renderPortfolioCards = portfolio => {
    return portfolio.map(p => {
      return (
        <PortfolioCard
          title={p.title}
          key={p.title}
          link={p.link}
          image={p.cardImage}
        />
      );
    });
  };

  render() {
    return (
      <div className="Portfolio">
        {this.renderPortfolioCards(this.props.portfolio)}
      </div>
    );
  }
}

Portfolio.defaultProps = {
  portfolio: []
};

Portfolio.propTypes = {};

export default Portfolio;
