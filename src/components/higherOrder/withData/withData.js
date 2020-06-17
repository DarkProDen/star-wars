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
      const { data } = this.state;
      const { children } = this.props;

      return data ? (
        <WrappedComponent data={data} {...this.props}>
          {children}
        </WrappedComponent>
      ) : (
        <Loader />
      );
    }
  };
}

export default withData;
