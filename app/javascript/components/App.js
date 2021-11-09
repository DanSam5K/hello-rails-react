import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" render={() => 'Home!'} />
            <Route path="/hello" render={() => <Greeting message="Friend" />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
