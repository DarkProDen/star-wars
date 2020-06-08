import React from 'react';
import './UnitInfo.css';

function UnitInfo(props) {
  return (
    <div className="card unit-info">
      <img
        className="card-img unit-info__img"
        src="https://starwars-visualguide.com/assets/img/characters/2.jpg"
        alt="Image not found"
      ></img>
      <div>
        <h4 className="unit-info__title">Name</h4>
        {props.fields.map((field) => {
          return (
            <div key={field.name} className="unit-info__field">
              {field.name} {field.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnitInfo;
