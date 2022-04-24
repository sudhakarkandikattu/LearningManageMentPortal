/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  min-height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: inline;
  background: transparent;
  border: 0;
  padding: 0;
  color: #0000ff;
  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.error(
      'ERROR BOUNDARY::: Error Caught in getDerivedStateFromError -',
      error
    );
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error(
      'ERROR BOUNDARY::: Error Caught in ComponentDidCatch -',
      error,
      errorInfo
    );
  }

  render() {
    const { hasError } = this.state;
    const { theme, children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Wrapper>
          <h1>Something went wrong!</h1>
          <h5>
            Click{' '}
            <Button type="button" onClick={() => window.location.reload()}>
              here
            </Button>{' '}
            to reload
          </h5>
        </Wrapper>
      );
    }

    return children;
  }
}

export default withTheme(ErrorBoundary);
