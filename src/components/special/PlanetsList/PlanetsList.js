import React from 'react';
import UnitsList from '../../common/UnitsList';

class PlanetsList extends React.Component {
  constructor(props) {
    super(props);
  }

  getCapture(planet) {
    return `${planet.name}, population: ${planet.population}`;
  }

  render() {
    return <UnitsList data={this.props.data} getCapture={this.getCapture} />;
  }
}

export default PlanetsList;
