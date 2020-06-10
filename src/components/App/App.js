import React from 'react';
import './App.css';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitInfo from '../UnitInfo';
import Row from '../Row';
import PeopleList from '../PeopleList/PeopleList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Slideshow />
        <Row
          left={<PeopleList />}
          right={
            <UnitInfo
              fields={[
                { name: 'fieldName1', value: 'value1' },
                { name: 'fieldName2', value: 'value2' },
                { name: 'fieldName3', value: 'value3' },
              ]}
            />
          }
        />
      </div>
    );
  }
}

export default App;
