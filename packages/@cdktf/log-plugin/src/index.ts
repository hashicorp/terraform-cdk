// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { Construct } from "constructs";
import { Annotations } from "cdktf";
import { LogPlugin } from "./plugin";

export const LOGGABLE_CONSTRUCTS = "loggable-constructs";
export const LOG_COMMAND = "command";
/**
 * Anotates a construct as loggable.
 *
 * The command will be run to retrieve the log output, the string passed is a handlebars template.
 * The template has access to some variables:
 *
 * - {{ state }}: is the entire terraform state of the construct.
 * - {{ watch }}: is a boolean indicating if the user wants to watch the log output.
 *
 * @param scope The scope of the construct.
 * @param command The command to run, use e.g. {{ state.arn }} to access the arn of the constructs terraform state.
 */
export function setLogCommand(scope: Construct, command: string) {
  try {
    LogPlugin.setInCdktfConstructMetadata(scope, LOG_COMMAND, command);
    addToListOfLoggableConstructs(scope);
  } catch (e) {
    Annotations.of(scope).addWarning(
      `Could not add log command to construct: ${e}`
    );
  }
}

function addToListOfLoggableConstructs(scope: Construct) {
  const loggableConstructs: string[] =
    LogPlugin.getInCdktfConstructMetadata(scope, LOGGABLE_CONSTRUCTS) || [];

  LogPlugin.setInCdktfConstructMetadata(scope, LOGGABLE_CONSTRUCTS, [
    ...loggableConstructs,
    scope.node.id,
  ]);
}
