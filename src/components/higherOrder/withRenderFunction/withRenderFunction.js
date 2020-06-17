import React from 'react';

function withRenderFunction(WrappedComponent, renderFunction) {
  return class extends React.Component {
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
  };
}

export default withRenderFunction;
