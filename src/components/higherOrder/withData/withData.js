import React from 'react';
import Loader from '../../basic/Loader';

function withData(WrappedComponent, getData) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      };
    }

    loadData = () => {
      this.setState({ data: null });

      getData().then((result) => {
        this.setState({ data: result });
      });
    };

    componentDidMount() {
      this.loadData();
    }

    render() {
      return this.state.data ? (
        <WrappedComponent data={this.state.data}>
          {this.props.children}
        </WrappedComponent>
      ) : (
        <Loader />
      );
    }
  };
}

export default withData;
