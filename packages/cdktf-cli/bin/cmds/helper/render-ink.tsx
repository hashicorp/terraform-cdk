import { render } from "ink";
import React, { Fragment } from "react";
import { exit } from "process";
import { terraformCheck } from "../helper/terraform-check";

export const renderInk = async (component: React.ReactElement) => {
  await terraformCheck();

  const { waitUntilExit } = render(
    React.createElement(Fragment, {}, component)
  );

  try {
    await waitUntilExit();
  } catch (e) {
    console.error(e.message);
    exit(1);
  }
};
