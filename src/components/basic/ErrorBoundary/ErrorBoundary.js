import React from 'react';
import ErrorStar from '../ErrorStar';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { errorMessage: error.message };
  }

  render() {
    const { errorMessage } = this.state;
    const { children } = this.props;

    return errorMessage ? <ErrorStar errorMessage={errorMessage} /> : children;
  }
}

export default ErrorBoundary;
