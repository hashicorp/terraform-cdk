/* eslint-disable no-control-regex */
import React from 'react';
import { TerraformProvider } from './terraform-context'
import { ErrorBoundary } from './error-boundary'
import { useTerraformState } from './terraform-context'
import { useApp } from 'ink'

export const TerraformErrors: React.FunctionComponent<{}> = ({ children }): React.ReactElement => {
  const { errors } = useTerraformState()
  const { exit } = useApp()

  if (errors) {
    const errorMessages = errors.map((e: any) => e.message)
    exit(new Error(errorMessages.join(', ')))
    return <></>
  }

  return <>{children}</>
}

// eslint-disable-next-line react/prop-types
export const App: React.FunctionComponent<{}> = ({ children }): React.ReactElement => {
  return (
    <ErrorBoundary>
      <TerraformProvider>
        <TerraformErrors>
          { children }
        </TerraformErrors>
      </TerraformProvider>
    </ErrorBoundary>
  )
}
