import React from 'react';
import withData from '../../higherOrder/withData';
import UnitInfo from '../../common/UnitInfo';
import Record from '../../common/Record';
import withBackendService from '../../higherOrder/withBackendService';

class RandomPlanetInfo extends React.Component {
  render() {
    const RandomPlanetInfoWithData = withBackendService(
      withData(UnitInfo, 'getRandomPlanet'),
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

export default RandomPlanetInfo;
