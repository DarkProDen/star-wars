import React from 'react';
import './UnitsList.css';

class UnitsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="btn-group-vertical units-list">
        {this.props.data.map((unitEntity) => (
          <li
            key={unitEntity.name}
            className="btn btn-outline-secondary units-list__unit"
            tabIndex="0"
          >
            {this.props.getCapture(unitEntity)}
          </li>
        ))}
      </ul>
    );
  }
}

export default UnitsList;
