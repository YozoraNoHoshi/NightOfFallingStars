import React, { PureComponent } from 'react';

class LinkBox extends PureComponent {
  render() {
    return (
      <div className="LinkBox">
        <a href={this.props.link}>
          <img
            src={this.props.logo.image}
            alt={this.props.logo.name}
            height={this.props.logo.height}
            width={this.props.logo.width}
          />
        </a>
        <a href={this.props.link} class="link-text">
          {this.props.name}
        </a>
      </div>
    );
  }
}

LinkBox.defaultProps = {
  logo: { image: '', name: '', height: '', width: '' },
  name: ''
};

LinkBox.propTypes = {};

export default LinkBox;
