import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact/Contact';
import About from './About/About';
import Homepage from './Homepage/Homepage';
import portfolio from './data/portfolio.json';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage portfolio={portfolio} />}
        />
        <Route exact path="/about" render={props => <About />} />
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
