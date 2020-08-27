import React from 'react';
import './NavMenuItem.css';
import { NavLink } from 'react-router-dom';

function NavMenuItem({ path, text }) {
  return (
    <NavLink to={path} className="nav-menu__item">
      {text}
    </NavLink>
  );
}

export default NavMenuItem;
