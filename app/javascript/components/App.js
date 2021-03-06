import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        exact
        path="/"
        element={<h2>Hello Welcome to Rails and React App!</h2>}
      />
      <Route path="/hello" element={<Greeting />} />
    </Routes>
  </Router>
);
export default App;
