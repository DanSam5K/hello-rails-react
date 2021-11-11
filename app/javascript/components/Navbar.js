import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/hello">Random Greetings</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
