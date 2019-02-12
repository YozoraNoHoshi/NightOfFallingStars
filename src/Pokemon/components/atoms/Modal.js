import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';

class Modal extends PureComponent {
  render() {
    return (
      <div className="Modal">
        {this.props.children}
        <MenuButton click={this.props.toggleModal} />
      </div>
    );
  }
}

Modal.defaultProps = {};

Modal.propTypes = {};

export default Modal;
