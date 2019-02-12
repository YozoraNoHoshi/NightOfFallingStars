import React, { PureComponent } from 'react';

class InventoryMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return <div className="InventoryMenu">{/* Show inventory contents */}</div>;
  }
}

InventoryMenu.defaultProps = {};

InventoryMenu.propTypes = {};

export default InventoryMenu;
