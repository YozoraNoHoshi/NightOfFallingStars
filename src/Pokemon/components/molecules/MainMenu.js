import React, { PureComponent } from 'react';
import ChangeScreenButton from './ChangeScreenButton';
import ModalMenu from './ModalMenu';

class MainMenu extends PureComponent {
  render() {
    return (
      <div className="MainMenu">
        {/* Find Pokemon Button */}
        <ChangeScreenButton to="/battle">
          Search for Pokemon!
        </ChangeScreenButton>
        {/* Habitat Submenu */}
        <ChangeScreenButton to="/habitats">Habitats</ChangeScreenButton>
        {/* These can be modals */}
        {/* Inventory Submenu */}
        {/* <ModalMenu>
          <Bag />
        </ModalMenu> */}
        <ChangeScreenButton to="/bag">Bag</ChangeScreenButton>
        {/* Trainer Details - includes Save/Load */}
        {/* <ModalMenu>
          <TrainerInfo />
        </ModalMenu> */}
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
