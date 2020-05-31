import React from 'react';
import UnitButton from '../UnitButton';
import './UnitsList.css';

function UnitsList(props) {
  return (
    <div className="btn-group-vertical units-list">
      {props.unitsList.map((unitEntity) => {
        return <UnitButton key={unitEntity.name} unitEntity={unitEntity} />;
      })}
    </div>
  );
}

export default UnitsList;
