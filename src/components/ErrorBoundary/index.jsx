import React from 'react';
import { Alert } from 'react-bootstrap';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error info somewhere
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <Alert variant="danger">
            {this.state.error.message}
          </Alert>
          {this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}
