import UnitsList from '../../common/UnitsList';
import withData from '../../higherOrder/withData';
import withRenderFunction from '../../higherOrder/withRenderFunction';
import BackendService from '../../../API/BackendService';

const backendService = new BackendService();

function getCapture(person) {
  return `${person.name}, eye color: ${person.eye_color}`;
}

const PeopleList = withData(
  withRenderFunction(UnitsList, getCapture),
  backendService.getPeopleList,
);

export default PeopleList;
