import React from 'react';
import getDisplayName from '../../../misc/getDisplayName';

function withRenderFunction(WrappedComponent, renderFunction) {
  class WithRenderFunction extends React.Component {
    render() {
      return (
        <WrappedComponent renderFunction={renderFunction} {...this.props} />
      );
    }
  }

  WithRenderFunction.displayName = `WithRenderFunction(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithRenderFunction;
}

export default withRenderFunction;
