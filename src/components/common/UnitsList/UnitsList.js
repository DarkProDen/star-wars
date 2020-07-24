import React from 'react';
import './UnitsList.css';

function UnitsList(props) {
  const { data, renderFunction } = props;

  return (
    <ul className="btn-group-vertical units-list">
      {data.map((unitEntity) => (
        <li
          key={unitEntity.name}
          className="btn btn-outline-secondary units-list__unit"
          tabIndex="0"
        >
          {renderFunction(unitEntity)}
        </li>
      ))}
    </ul>
  );
}

export default UnitsList;
