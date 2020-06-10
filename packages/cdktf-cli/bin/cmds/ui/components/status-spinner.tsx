import React, { Fragment } from 'react';
import { Color, Text, Box } from 'ink'
import Spinner from 'ink-spinner';

interface StatusSpinnerProps {
  statusText: string;
}

export const StatusSpinner = ({statusText}: StatusSpinnerProps) => {
  return(
  <Fragment>
    <Color green><Spinner type="dots"/></Color><Box paddingLeft={1}><Text>{ statusText }</Text></Box>
  </Fragment>
  )
}
