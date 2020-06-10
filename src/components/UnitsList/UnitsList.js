import React from 'react';
import './UnitsList.css';
import Loader from '../Loader';
import ErrorStar from '../ErrorStar';

class UnitsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unitsListError: false,
      unitsListErrorMessage: null,
      unitsList: [],
    };
  }

  loadUnitsList = () => {
    this.setState({ unitsList: [] });

    this.props
      .getList()
      .then((result) => {
        this.setState({ unitsList: result, unitsListError: false });
      })
      .catch((e) => {
        this.setState({
          unitsListError: true,
          unitsListErrorMessage: e.message,
        });
      });
  };

  componentDidMount() {
    this.loadUnitsList();
  }

  render() {
    const getUnitsListOrLoadingOrError = () => {
      if (this.state.unitsListError) {
        return <ErrorStar errorMessage={this.state.unitsListErrorMessage} />;
      }

      if (this.state.unitsList.length === 0) {
        return <Loader />;
      }

      return (
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
    };

    return getUnitsListOrLoadingOrError();
  }
}

export default UnitsList;
