import React from 'react';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitInfo from '../UnitInfo';
import Row from '../Row';
import PeopleList from '../PeopleList';
import ErrorBoundary from '../ErrorBoundary';

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
              <PeopleList />
            </ErrorBoundary>
          }
          right={
            <ErrorBoundary>
              <UnitInfo
                fields={[
                  { name: 'fieldName1', value: 'value1' },
                  { name: 'fieldName2', value: 'value2' },
                  { name: 'fieldName3', value: 'value3' },
                ]}
              />
            </ErrorBoundary>
          }
        />
      </div>
    );
  }
}

export default App;
