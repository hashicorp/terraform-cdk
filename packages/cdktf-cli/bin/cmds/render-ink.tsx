import { render } from 'ink';
import React from 'react';
import { exit } from 'process';
import { App } from './ui/app'

export const renderInk = async (component: React.ReactElement) => {
  const { waitUntilExit } = render(
    React.createElement(App, {}, component)
  );

  try {
    await waitUntilExit()
  } catch(e) {
    console.error(e.message)
    exit(1)
  }
}

