import React, { PureComponent } from 'react';

class MenuButton extends PureComponent {
  render() {
    return (
      <div className="MenuButton" onClick={this.props.click}>
        {this.props.children}
      </div>
    );
  }
}

MenuButton.defaultProps = {
  click: console.log,
  children: ''
};

MenuButton.propTypes = {};

export default MenuButton;
