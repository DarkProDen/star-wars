import React from 'react';
import './Record.css';

function Record(props) {
  const { data, label, field } = props;

  return (
    <div className="record">
      {label} {data[field]}
    </div>
  );
}

export default Record;
