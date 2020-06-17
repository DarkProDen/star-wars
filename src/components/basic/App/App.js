import React from 'react';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitInfo from '../../common/UnitInfo';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import PeopleList from '../../special/PeopleList';
import PlanetsList from '../../special/PlanetsList';
import withData from '../../higherOrder/withData';
import BackendService from '../../../API/BackendService';
import Record from '../../common/Record';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.backendService = new BackendService();
  }

  render() {
    const RandomPlanetInfo = withData(
      UnitInfo,
      this.backendService.getRandomPlanet,
    );

    return (
      <div className="App">
        <ErrorBoundary>
          <NavMenu />
        </ErrorBoundary>
        <ErrorBoundary>
          <Slideshow />
        </ErrorBoundary>
        <Row
          left={
            <ErrorBoundary>
              <PlanetsList />
            </ErrorBoundary>
          }
          right={
            <ErrorBoundary>
              <RandomPlanetInfo>
                <Record label="Diameter:" field="diameter" />
                <Record label="Climate:" field="climate" />
                <Record label="Population:" field="population" />
              </RandomPlanetInfo>
            </ErrorBoundary>
          }
        />
      </div>
    );
  }
}

export default App;
