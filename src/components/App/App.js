import React from 'react';
import './App.css';
import NavMenu from '../NavMenu';
import Slideshow from '../Slideshow';
import UnitsList from '../UnitsList';
import UnitInfo from '../UnitInfo';

function App() {
  const unitsList = [
    { name: '12345' },
    { name: '123456' },
    { name: '1234567' },
    { name: '12345678' },
  ];

  return (
    <div className="App">
      <NavMenu />
      <Slideshow />
      <div className="unit-wrap">
        <UnitsList unitsList={unitsList} />
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

export default App;
