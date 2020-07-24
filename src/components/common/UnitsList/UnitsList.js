import React from 'react';
import './UnitsList.css';
import { NavLink } from 'react-router-dom';

function UnitsList(props) {
  const { data, renderFunction, backendService } = props;

  return (
    <div className="btn-group-vertical units-list">
      {data.map((unitEntity) => (
        <NavLink
          to={backendService.getPath(unitEntity)}
          key={unitEntity.name}
          className="btn btn-outline-secondary units-list__unit"
          tabIndex="0"
        >
          {renderFunction(unitEntity)}
        </NavLink>
      ))}
    </div>
  );
}

export default UnitsList;
