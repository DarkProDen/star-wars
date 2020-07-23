import React from 'react';
import './UnitsList.css';

class UnitsList extends React.Component {
  render() {
    const { data, renderFunction } = this.props;

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
}

export default UnitsList;
