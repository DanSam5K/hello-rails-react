import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => 'Home!'} />
            <Route
              path="/hello"
              render={() => <HellWorld greetings="Friend" />}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
