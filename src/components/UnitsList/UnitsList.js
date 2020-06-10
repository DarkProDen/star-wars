import React from 'react';
import './UnitsList.css';

function UnitsList(props) {
  return (
    <ul className="btn-group-vertical units-list">
      {props.unitsList.map((unitEntity) => (
        <li
          key={unitEntity.name}
          className="btn btn-outline-secondary units-list__unit"
          tabindex="0"
        >
          {unitEntity.name}
        </li>
      ))}
    </ul>
  );
}

export default UnitsList;
