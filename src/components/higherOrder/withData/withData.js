import React from 'react';
import Loader from '../../basic/Loader';
import getDisplayName from '../../../misc/getDisplayName';

function withData(WrappedComponent, getDataName) {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      };
    }

    loadData = () => {
      this.setState({ data: null });

      this.props.backendService[getDataName]().then((result) => {
        this.setState({ data: result });
      });
    };

    componentDidMount() {
      this.loadData();
    }

    render() {
      const { data } = this.state;

      return data ? (
        <WrappedComponent data={data} {...this.props} />
      ) : (
        <Loader />
      );
    }
  }

  WithData.displayName = `WithData(${getDisplayName(WrappedComponent)})`;

  return WithData;
}

export default withData;
