import React, { PureComponent } from 'react';
import './App.css';
import SkyOfStars from './SkyofStars/SkyofStars';

class App extends PureComponent {
  render() {
    return (
      <div className="Sky-Of-Stars">
        <SkyOfStars />
      </div>
    );
  }
}

export default App;
