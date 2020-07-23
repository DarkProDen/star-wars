import UnitsList from '../../common/UnitsList';
import withData from '../../higherOrder/withData';
import withRenderFunction from '../../higherOrder/withRenderFunction';
import withBackendService from '../../higherOrder/withBackendService';

function getCapture(planet) {
  return `${planet.name}, population: ${planet.population}`;
}

const PlanetsList = withBackendService(
  withData(withRenderFunction(UnitsList, getCapture), 'getPlanetsList'),
);

export default PlanetsList;
