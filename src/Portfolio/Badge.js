import React, { PureComponent } from 'react';
class Badge extends PureComponent {
  render() {
    return (
      <div className="portfolio-link">
        <a href={this.props.siteLink} style={{ fontSize: '1em' }}>
          <img
            style={{ height: '100%' }}
            src={this.props.badge}
            alt={`${this.props.title} on the app store`}
          />
        </a>
      </div>
    );
  }
}
Badge.defaultProps = { siteLink: '', badge: '', title: '' };

export default Badge;
