import React, { PureComponent } from 'react';
import github from '../static/GitHubLogo.png';
import { Redirect } from '@reach/router';
const TRANSPARENT = 'rgba(0,0,0,.5)';

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
      <a href={this.state.portfolio.github} style={{ textDecoration: 'none' }}>
        <div
          className="portfolio-link"
          style={{
            padding: 10,
            background: TRANSPARENT,
            borderRadius: 10,
            boxSizing: 'border-box'
          }}
        >
          <div
            className="portfolio-item-text column-container"
            style={{
              width: '6ch',
              justifyContent: 'center'
            }}
          >
            Source Code
          </div>
          <img
            src={github}
            alt="Github"
            style={{ height: '48px', width: '48px' }}
          />
        </div>
      </a>
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
