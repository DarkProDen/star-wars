import React from 'react';
import './Row.css';

function Row(props) {
  return (
    <div className="row">
      {props.left} {props.right}
    </div>
  );
}

export default Row;
