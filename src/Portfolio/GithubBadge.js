import React, { PureComponent } from 'react';
import github from '../static/GitHubLogo.png';
const TRANSPARENT = 'rgba(0,0,0,.5)';
class GithubBadge extends PureComponent {
  render() {
    return (
      <a href={this.props.github} style={{ textDecoration: 'none' }}>
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
  }
}
GithubBadge.defaultProps = { github: '' };
export default GithubBadge;
