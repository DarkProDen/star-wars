import React from 'react';
import getDisplayName from '../../../misc/getDisplayName';

function withRenderFunction(WrappedComponent, renderFunction) {
  class WithRenderFunction extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { children } = this.props;

      return (
        <WrappedComponent renderFunction={renderFunction} {...this.props}>
          {children}
        </WrappedComponent>
      );
    }
  }

  WithRenderFunction.displayName = `WithRenderFunction(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithRenderFunction;
}

export default withRenderFunction;
