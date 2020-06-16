import React from 'react';
import UnitsList from '../../common/UnitsList';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
  }

  getCapture(person) {
    return `${person.name}, eye color: ${person.eye_color}`;
  }

  render() {
    return <UnitsList data={this.props.data} getCapture={this.getCapture} />;
  }
}

export default PeopleList;
