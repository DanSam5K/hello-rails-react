import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import configureStore from '../redux/configureStore';
const store = configureStore();

class App extends React.Component {
  render() {
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={'Home!'} />
          <Route path="/hello" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>;
  }
}

export default App;
