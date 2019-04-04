import React, { PureComponent } from 'react';
import { Redirect } from '@reach/router';
import Badge from './Badge';
import GithubBadge from './GithubBadge';
import VideoPreview from './VideoPreview';

class PortfolioItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: props.portfolio[props.item]
    };
  }

  renderBadges = () => {
    return this.state.portfolio.badge || this.state.portfolio.github ? (
      <div className="portfolio-item-container" style={{ marginBottom: 0 }}>
        {this.state.portfolio.github && (
          <GithubBadge github={this.state.portfolio.github} />
        )}
        {this.state.portfolio.badge && (
          <Badge
            siteLink={this.state.portfolio.siteLink}
            badge={this.state.portfolio.badge}
            title={this.state.portfolio.title}
          />
        )}
      </div>
    ) : null;
  };

  parseDescription = text => {
    let parsedText = text.split('\n').map((text, i) => {
      return (
        <div key={`text${i}`} className="portfolio-description-text">
          {text}
        </div>
      );
    });
    return parsedText;
  };

  render() {
    return this.state.portfolio ? (
      <article className="PortfolioItem">
        <div
          className="portfolio-item-container portfolio-item-text"
          style={{ fontSize: '4em', pointerEvents: 'none' }}
        >
          {this.state.portfolio.title}
        </div>
        <div className="portfolio-item-content" style={{ width: '90%' }}>
          <div className="portfolio-description">
            {this.parseDescription(this.state.portfolio.description)}
          </div>
          <div className="portfolio-item-container portfolio-image">
            <a
              className="portfolio-item-text"
              href={this.state.portfolio.siteLink}
              style={{ fontSize: '1em' }}
            >
              <VideoPreview
                imgType={this.state.portfolio.imgType}
                image={this.state.portfolio.image}
                title={this.state.portfolio.title}
              />
              {!this.state.portfolio.noVisit && (
                <div
                  style={{
                    textDecoration: 'underline',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  Visit {this.state.portfolio.title}!
                </div>
              )}
            </a>
          </div>
        </div>
        {this.renderBadges()}
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
