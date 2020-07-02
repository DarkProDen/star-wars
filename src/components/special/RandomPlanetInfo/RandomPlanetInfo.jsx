import React from 'react';
import BackendServiceContext from '../../contexts/BackendServiceContext';
import withData from '../../higherOrder/withData';
import UnitInfo from '../../common/UnitInfo';
import Record from '../../common/Record';

class RandomPlanetInfo extends React.Component {
  render() {
    const RandomPlanetInfoWithData = withData(
      UnitInfo,
      this.context.getRandomPlanet,
    );

    return (
      <RandomPlanetInfoWithData>
        <Record label="Diameter:" field="diameter" />
        <Record label="Climate:" field="climate" />
        <Record label="Population:" field="population" />
      </RandomPlanetInfoWithData>
    );
  }
}

RandomPlanetInfo.contextType = BackendServiceContext;

export default RandomPlanetInfo;
