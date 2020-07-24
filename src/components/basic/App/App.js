import React from 'react';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import PeopleList from '../../special/PeopleList';
import PlanetsList from '../../special/PlanetsList';
import BackendServiceContext from '../../contexts/BackendServiceContext';
import BackendService from '../../../API/BackendService';
import { Route, BrowserRouter } from 'react-router-dom';
import StarhipsList from '../../special/StarshipsList';
import PlanetInfo from '../../special/PlanetInfo';
import StarshipInfo from '../../special/StarshipInfo';
import CharacterInfo from '../../special/CharacterInfo';

function App(props) {
  return (
    <BrowserRouter>
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
              <Route path="/planets" component={PlanetsList} />
              <Route path="/people" component={PeopleList} />
              <Route path="/starships" component={StarhipsList} />
            </ErrorBoundary>
          }
          right={
            <ErrorBoundary>
              <BackendServiceContext.Provider value={new BackendService()}>
                <Route path="/planets/:id" component={PlanetInfo} />
                <Route path="/people/:id" component={CharacterInfo} />
                <Route path="/starships/:id" component={StarshipInfo} />
              </BackendServiceContext.Provider>
            </ErrorBoundary>
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
