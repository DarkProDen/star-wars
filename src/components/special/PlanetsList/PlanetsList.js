import UnitsList from '../../common/UnitsList';
import withData from '../../higherOrder/withData';
import withRenderFunction from '../../higherOrder/withRenderFunction';
import BackendService from '../../../API/BackendService';

const backendService = new BackendService();

function getCapture(planet) {
  return `${planet.name}, population: ${planet.population}`;
}

const PlanetsList = withData(
  withRenderFunction(UnitsList, getCapture),
  backendService.getPlanetsList,
);

export default PlanetsList;
