import React from 'react';
import NavMenuItem from '../NavMenuItem';
import './NavMenu.css';

function NavMenu() {
  return (
    <nav className="nav-menu">
      <h2 className="nav-menu__home">StarWars</h2>
      <NavMenuItem text="People" />
      <NavMenuItem text="Planets" />
      <NavMenuItem text="Starships" />
    </nav>
  );
}

export default NavMenu;
