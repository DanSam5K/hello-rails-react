import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={'Home!'} />
          <Route path="/hello" element={<Greeting message="Friend" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
