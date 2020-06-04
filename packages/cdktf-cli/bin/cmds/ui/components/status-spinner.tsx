import React, { Fragment } from 'react';
import { Color } from 'ink'
import Spinner from 'ink-spinner';

interface StatusSpinnerProps {
  statusText: string;
}

export const StatusSpinner = ({statusText}: StatusSpinnerProps) => (
  <Fragment>
    <Color green><Spinner type="dots"/></Color>&nbsp;{ statusText }
  </Fragment>
)
