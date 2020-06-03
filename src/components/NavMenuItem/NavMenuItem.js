import React from 'react';
import './NavMenuItem.css';

function NavMenuItem(props) {
  return (
    <a href="/" onClick={props.clickHandler} className="nav-menu__item">
      {props.text}
    </a>
  );
}

export default NavMenuItem;
