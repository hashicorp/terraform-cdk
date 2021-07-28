import { render } from "ink";
import React from "react";
import { exit } from "process";
import { App } from "../ui/app";
import { terraformCheck } from "../helper/terraform-check";

export const renderInk = async (component: React.ReactElement) => {
  await terraformCheck();

  const { waitUntilExit } = render(React.createElement(App, {}, component));

  try {
    await waitUntilExit();
  } catch (e) {
    console.error(e.message);
    exit(1);
  }
};
