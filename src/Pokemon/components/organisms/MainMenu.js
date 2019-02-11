import React, { PureComponent } from 'react';
import ChangeScreenButton from '../molecules/ChangeScreenButton';

class MainMenu extends PureComponent {
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
    return (
      <div className="MainMenu">
        {/* Find Pokemon Button */}
        <ChangeScreenButton to="/battle">
          Search for Pokemon!
        </ChangeScreenButton>
        {/* Habitat Submenu */}
        <ChangeScreenButton to="/habitats">Habitats</ChangeScreenButton>
        {/* Inventory Submenu */}
        <ChangeScreenButton to="/bag">Bag</ChangeScreenButton>
        {/* Trainer Details - includes Save/Load */}
        <ChangeScreenButton to="/trainer">
          Trainer Information
        </ChangeScreenButton>
      </div>
    );
  }
}

MainMenu.defaultProps = {};

MainMenu.propTypes = {};

export default MainMenu;
