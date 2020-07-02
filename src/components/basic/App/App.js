import React from 'react';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import PeopleList from '../../special/PeopleList';
import PlanetsList from '../../special/PlanetsList';
import RandomPlanetInfo from '../../special/RandomPlanetInfo/RandomPlanetInfo';
import BackendServiceContext from '../../contexts/BackendServiceContext';
import BackendService from '../../../API/BackendService';

class App extends React.Component {
  render() {
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
              <BackendServiceContext.Provider value={new BackendService()}>
                <RandomPlanetInfo />
              </BackendServiceContext.Provider>
            </ErrorBoundary>
          }
        />
      </div>
    );
  }
}

export default App;
