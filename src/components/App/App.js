import React from 'react';
import './App.css';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitsList from '../UnitsList';
import UnitInfo from '../UnitInfo';
import ErrorStar from '../ErrorStar';
import Loader from '../Loader';
import BackendService from '../../API/BackendService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.backendService = new BackendService();
    this.state = {
      unitsListError: false,
      unitsListErrorMessage: null,
      unitsList: [],
    };
  }

  loadUnitsList = () => {
    this.setState({ unitsList: [] });

    this.backendService
      .getPeopleList()
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
    return (
      <div className="App">
        <NavMenu />
        <Slideshow />
        <div className="unit-wrap">
          {this.state.unitsListError ? (
            <ErrorStar errorMessage={this.state.unitsListErrorMessage} />
          ) : this.state.unitsList.length === 0 ? (
            <Loader />
          ) : (
            <UnitsList unitsList={this.state.unitsList} />
          )}
          <UnitInfo
            fields={[
              { name: 'fieldName1', value: 'value1' },
              { name: 'fieldName2', value: 'value2' },
              { name: 'fieldName3', value: 'value3' },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default App;
