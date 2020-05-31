import React from 'react';
import './NavMenuItem.css';

function NavMenuItem(props) {
  return (
    <a href="/" className="nav-menu__item">
      {props.text}
    </a>
  );
}

export default NavMenuItem;
