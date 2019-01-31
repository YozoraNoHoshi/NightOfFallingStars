import React, { Component } from 'react';
import { Router } from '@reach/router';
import Contact from './Contact/Contact';
import About from './About/About';
import Homepage from './Homepage/Homepage';
import portfolio from './data/portfolio.json';
import PortfolioItem from './Portfolio/PortfolioItem';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Homepage default path="/" portfolio={portfolio} />
        <About path="/about" />
        <Contact path="contact" />
        <PortfolioItem
          path="/portfolio/:item"
          portfolio={portfolio}
          // title={portfolio[props.match.item].title}
          // description={portfolio[props.match.item].description}
          // siteLink={portfolio[props.match.item].siteLink}
          // image={portfolio[props.match.item].image}
        />
      </Router>

      // <Switch>
      //   <Route
      //     exact
      //     path="/"
      //     render={props => <Homepage portfolio={portfolio} />}
      //   />
      //   <Route exact path="/about" render={props => <About />} />
      //   <Route exact path="/contact" render={props => <Contact />} />
      //   <Route
      //     exact
      //     path="/portfolio/:item"
      //     render={props => {
      //       let item = portfolio[props.match.params.item];
      //       if (item)
      //         return (
      //           <PortfolioItem
      //             title={item.title}
      //             description={item.description}
      //             siteLink={item.siteLink}
      //             image={item.image}
      //           />
      //         );
      //       else return <Redirect to="/" />;
      //     }}
      //   />

      //   <Redirect to="/" />
      // </Switch>
    );
  }
}
export default Routes;

/* 
https://stackoverflow.com/questions/16724049/css-transform-translate-to-center-of-window
For translating about to center of window when clicked.
*/
