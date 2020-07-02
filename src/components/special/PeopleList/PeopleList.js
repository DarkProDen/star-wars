import UnitsList from '../../common/UnitsList';
import withData from '../../higherOrder/withData';
import withRenderFunction from '../../higherOrder/withRenderFunction';
import withBackendService from '../../higherOrder/withBackendService';

function getCapture(person) {
  return `${person.name}, eye color: ${person.eye_color}`;
}

const PeopleList = withBackendService(
  withData(withRenderFunction(UnitsList, getCapture), 'getPeopleList'),
);

export default PeopleList;
