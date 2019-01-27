import React, { PureComponent } from 'react';

class PortfolioItem extends PureComponent {
  render() {
    return (
      <div className="PortfolioItem">
        <div>
          <a href={this.props.siteLink}>{this.props.title}</a>
        </div>
        <div>{this.props.description}</div>
        <img src={this.props.image} alt={`${this.props.title} preview`} />
      </div>
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
