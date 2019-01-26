import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import HomeSideBar from './HomeSideBar/HomeSideBar';
class Routes extends PureComponent {
  render() {
    return (
      <div className="center-star">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <>
                {/* <Home {...props} />
              <HomeSideBar {...props} /> */}
              </>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
export default Routes;
