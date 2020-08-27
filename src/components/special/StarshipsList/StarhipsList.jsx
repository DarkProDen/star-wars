import UnitsList from '../../common/UnitsList';
import withData from '../../higherOrder/withData';
import withRenderFunction from '../../higherOrder/withRenderFunction';
import withBackendService from '../../higherOrder/withBackendService';

function getCapture(starship) {
  return `${starship.name}, model: ${starship.model}`;
}

const StarhipsList = withBackendService(
  withData(withRenderFunction(UnitsList, getCapture), 'getStarshipsList'),
);

export default StarhipsList;
