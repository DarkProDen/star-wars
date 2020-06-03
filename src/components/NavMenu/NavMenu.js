import React from 'react';
import NavMenuItem from '../NavMenuItem';
import './NavMenu.css';
import { peopleURL, planetsURL, starhipsURL } from '../../API/URLs';

function NavMenu(props) {
  const loadUnitsList = props.loadUnitsList;

  return (
    <nav className="nav-menu">
      <h2 className="nav-menu__home">StarWars</h2>
      <NavMenuItem
        text="People"
        clickHandler={(e) => {
          e.preventDefault();
          loadUnitsList(peopleURL);
        }}
      />
      <NavMenuItem
        text="Planets"
        clickHandler={(e) => {
          e.preventDefault();
          loadUnitsList(planetsURL);
        }}
      />
      <NavMenuItem
        text="Starships"
        clickHandler={(e) => {
          e.preventDefault();
          loadUnitsList(starhipsURL);
        }}
      />
    </nav>
  );
}

export default NavMenu;
