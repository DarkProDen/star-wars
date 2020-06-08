import React from 'react';
import NavMenuItem from '../NavMenuItem';
import './NavMenu.css';

function NavMenu(props) {
  return (
    <nav className="nav-menu">
      <h2 className="nav-menu__home">StarWars</h2>
      <NavMenuItem
        text="People"
        clickHandler={(e) => {
          e.preventDefault();
        }}
      />
      <NavMenuItem
        text="Planets"
        clickHandler={(e) => {
          e.preventDefault();
        }}
      />
      <NavMenuItem
        text="Starships"
        clickHandler={(e) => {
          e.preventDefault();
        }}
      />
    </nav>
  );
}

export default NavMenu;
