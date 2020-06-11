import React from 'react';
import './UnitsList.css';
import Loader from '../Loader';

class UnitsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unitsList: [],
    };
  }

  loadUnitsList = () => {
    this.setState({ unitsList: [] });

    this.props.getList().then((result) => {
      this.setState({ unitsList: result });
    });
  };

  componentDidMount() {
    this.loadUnitsList();
  }

  render() {
    return this.state.unitsList.length === 0 ? (
      <Loader />
    ) : (
      <ul className="btn-group-vertical units-list">
        {this.state.unitsList.map((unitEntity) => (
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
