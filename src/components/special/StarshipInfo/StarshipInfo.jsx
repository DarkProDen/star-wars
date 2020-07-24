import React from 'react';
import withData from '../../higherOrder/withData';
import UnitInfo from '../../common/UnitInfo';
import Record from '../../common/Record';
import withBackendService from '../../higherOrder/withBackendService';

function StarshipInfo(props) {
  const StarshipInfoWithData = withBackendService(
    withData(UnitInfo, 'getStarship', props.match.params.id),
  );

  return (
    <StarshipInfoWithData>
      <Record label="Model:" field="model" />
      <Record label="Cost in credits:" field="cost_in_credits" />
      <Record label="Passengers:" field="passengers" />
    </StarshipInfoWithData>
  );
}

export default StarshipInfo;
