import React from 'react';
import './UnitInfo.css';
import BackendService from '../../../API/BackendService';

const backendService = new BackendService();

function UnitInfo(props) {
  return (
    <div className="card unit-info">
      <img
        className="card-img unit-info__img"
        src={backendService.getImagePath(props.data)}
        alt="Image not found"
      ></img>
      <div>
        <h4 className="unit-info__title">{props.data.name}</h4>
        {props.children.map((record) => {
          return React.cloneElement(record, {
            data: props.data,
            key: record.props.field,
          });
        })}
      </div>
    </div>
  );
}

export default UnitInfo;
