import React from 'react';
import BackendServiceContext from '../../contexts/BackendServiceContext';
import getDisplayName from '../../../misc/getDisplayName';

function withBackendService(WrappedComponent) {
  class WithBackendService extends React.Component {
    render() {
      return (
        <BackendServiceContext.Consumer>
          {(context) => (
            <WrappedComponent backendService={context} {...this.props} />
          )}
        </BackendServiceContext.Consumer>
      );
    }
  }

  WithBackendService.displayName = `WithBackendService(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithBackendService;
}

export default withBackendService;
