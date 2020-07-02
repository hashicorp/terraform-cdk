import React from 'react'
import { Box, Text, Color } from 'ink'
import { logger } from '../../../lib/logging'

export interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component {
  public state: ErrorBoundaryState;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    logger.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Box><Text><Color red>Something went wrong.</Color></Text></Box>;
    }

    return this.props.children;
  }
}