/* eslint-disable no-control-regex */
import React from 'react';
import { TerraformProvider } from './terraform-context'
import { ErrorBoundary } from './error-boundary'


export interface AppConfig {}

// eslint-disable-next-line react/prop-types
export const App: React.FunctionComponent<AppConfig> = ({ children }): React.ReactElement => {
  return (
    <ErrorBoundary>
      <TerraformProvider>
        { children }
      </TerraformProvider>
    </ErrorBoundary>
  )
}
