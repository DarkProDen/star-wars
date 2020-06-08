import React from 'react';
import './UnitButton.css';

function UnitButton(props) {
  return (
    <button type="button" className="btn btn-outline-secondary unit-button">
      {props.unitEntity.name}
    </button>
  );
}

export default UnitButton;
