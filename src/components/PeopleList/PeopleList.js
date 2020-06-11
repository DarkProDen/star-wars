import React from 'react';
import UnitsList from '../UnitsList';
import BackendService from '../../API/BackendService';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);

    this.backendService = new BackendService();
  }

  getCapture(person) {
    return `${person.name}, eye color: ${person.eye_color}`;
  }

  render() {
    return (
      <UnitsList
        getList={this.backendService.getPeopleList}
        getCapture={this.getCapture}
      />
    );
  }
}

export default PeopleList;
