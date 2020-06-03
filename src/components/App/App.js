import React from 'react';
import './App.css';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitsList from '../UnitsList';
import UnitInfo from '../UnitInfo';
import fetchUnitsList from '../../API/fetchUnitsList';
import { peopleURL } from '../../API/URLs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitsListError: false,
      unitsList: [],
    };
  }

  loadUnitsList = (url) => {
    this.setState({ unitsList: [] });

    fetchUnitsList(url)
      .then((result) => {
        this.setState({ unitsList: result, unitsListError: false });
      })
      .catch(() => {
        this.setState({ unitsListError: true });
      });
  };

  componentDidMount() {
    this.loadUnitsList(peopleURL);
  }

  render() {
    return (
      <div className="App">
        <NavMenu loadUnitsList={this.loadUnitsList} />
        {this.state.planetsListError ? <div>Error :(</div> : <Slideshow />}
        <div className="unit-wrap">
          {this.state.unitsListError ? (
            <div>Error :(</div>
          ) : this.state.unitsList.length === 0 ? (
            <div>Loading...</div>
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
