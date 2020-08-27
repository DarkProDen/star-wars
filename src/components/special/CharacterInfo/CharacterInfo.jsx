import React from 'react';
import withData from '../../higherOrder/withData';
import UnitInfo from '../../common/UnitInfo';
import Record from '../../common/Record';
import withBackendService from '../../higherOrder/withBackendService';

function CharacterInfo(props) {
  const CharacterInfoWithData = withBackendService(
    withData(UnitInfo, 'getCharacter', props.match.params.id),
  );

  return (
    <CharacterInfoWithData>
      <Record label="Gender:" field="gender" />
      <Record label="Height:" field="height" />
      <Record label="Mass:" field="mass" />
      <Record label="Eye color:" field="eye_color" />
    </CharacterInfoWithData>
  );
}

export default CharacterInfo;
