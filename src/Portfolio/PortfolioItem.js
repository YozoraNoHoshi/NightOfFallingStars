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
          <div
            className="portfolio-item-text column-container"
            style={{ width: '6ch', justifyContent: 'center' }}
          >
            Source Code
          </div>
          <div>
            <img src={github} alt="Github" />
          </div>
        </a>
      </div>
    );
  };

  renderBadges = () => {
    return this.state.portfolio.badge || this.state.portfolio.github ? (
      <div className="portfolio-item-container" style={{ marginBottom: 0 }}>
        {this.state.portfolio.github && this.renderGHLogo()}
        {this.state.portfolio.badge && this.renderBadge()}
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

  renderPreview = () => {
    return this.state.portfolio.imgType === 'video' ? (
      <video controls autoPlay loop>
        <source src={this.state.portfolio.image} type="video/mp4" />
        {this.state.portfolio.title} preview.
      </video>
    ) : (
      <img
        src={this.state.portfolio.image}
        alt={`${this.state.portfolio.title} preview`}
      />
    );
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
        <div className="row-container" style={{ width: '90%' }}>
          <div className="portfolio-description">
            {this.parseDescription(this.state.portfolio.description)}
          </div>
          <div className="portfolio-item-container portfolio-image">
            <a
              className="portfolio-item-text"
              href={this.state.portfolio.siteLink}
              style={{ fontSize: '1em' }}
            >
              {this.renderPreview()}
              {this.state.portfolio.title !== 'Groupmuse' && (
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
