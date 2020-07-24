import React from 'react';
import withData from '../../higherOrder/withData';
import UnitInfo from '../../common/UnitInfo';
import Record from '../../common/Record';
import withBackendService from '../../higherOrder/withBackendService';

function PlanetInfo(props) {
  const PlanetInfoWithData = withBackendService(
    withData(UnitInfo, 'getPlanet', props.match.params.id),
  );

  return (
    <PlanetInfoWithData>
      <Record label="Diameter:" field="diameter" />
      <Record label="Climate:" field="climate" />
      <Record label="Population:" field="population" />
    </PlanetInfoWithData>
  );
}

export default PlanetInfo;
