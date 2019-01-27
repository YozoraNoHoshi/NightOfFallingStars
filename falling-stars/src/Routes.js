import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact/Contact';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={props => <div>Homepage</div>} />
        <Route exact path="/about" render={props => <></>} />
        <Route exact path="/contact" render={props => <Contact />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;

/* 
https://stackoverflow.com/questions/16724049/css-transform-translate-to-center-of-window
For translating about to center of window when clicked.
*/
