import React from 'react';
import NavMenuItem from '../NavMenuItem';
import './NavMenu.css';

function NavMenu(props) {
  return (
    <nav className="nav-menu">
      <h2 className="nav-menu__home">StarWars</h2>
      <NavMenuItem text="People" path="/people" />
      <NavMenuItem text="Planets" path="/planets" />
      <NavMenuItem text="Starships" path="/starships" />
    </nav>
  );
}

export default NavMenu;
