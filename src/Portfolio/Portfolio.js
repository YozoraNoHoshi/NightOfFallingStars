import React, { PureComponent } from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

class Portfolio extends PureComponent {
  constructor(props) {
    super(props);
    this.delay = 0.25;
    this.baseDelay = 0.25;
  }

  splitCards = items => {
    // Supports up to 7 portfolio items
    let rows = { r1: [], r2: [], r3: [] };
    let ghostRow = [];
    items.forEach((e, i) => {
      if (i === 2 || i === 3 || i === 5) {
        ghostRow.push(e);
        if (i !== 3) rows.r1.push(e);
      }
      if (i === 0 || i === 1 || i === 4) rows.r2.push(e);
      if (i === 3 || i === 6) rows.r3.push(e);
    });
    if (items.length === 6) return { r1: ghostRow, r2: rows.r2, r3: [] };
    return rows;
  };

  renderPortfolioCards = (portfolio, rNumber) => {
    return (
      <div className={`Portfolio r${rNumber}`}>
        {portfolio.map(p => {
          this.delay += 0.1;
          return (
            <PortfolioCard
              delay={this.delay}
              title={p.title}
              link={p.link}
              image={p.cardImage}
              key={p.title}
            />
          );
        })}
      </div>
    );
  };

  render() {
    this.delay = this.baseDelay;
    let pfRows = this.splitCards(this.props.portfolio);
    return (
      <div className="portfolio-container">
        {pfRows.r1.length > 0 && this.renderPortfolioCards(pfRows.r1, 1)}
        {pfRows.r2.length > 0 && this.renderPortfolioCards(pfRows.r2, 2)}
        {pfRows.r3.length > 0 && this.renderPortfolioCards(pfRows.r3, 3)}
      </div>
    );
  }
}

Portfolio.defaultProps = {
  portfolio: []
};

Portfolio.propTypes = {};

export default Portfolio;
