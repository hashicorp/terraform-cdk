// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { Construct } from "constructs";
import { Annotations, TerraformResource, TerraformStack } from "cdktf";

export const LOGGABLE_CONSTRUCTS = "log-plugin:loggable-constructs";
export const LOG_COMMAND = "log-plugin:command";
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
  // TODO: move into "storeInCdktfConstructMetadata" function in plugin package
  if (TerraformResource.isTerraformResource(scope)) {
    scope.setPluginMetadata(LOG_COMMAND, command);
    addToListOfLoggableConstructs(scope);
  } else {
    Annotations.of(scope).addWarning(
      "Tried to set plugin metadata on a non-terraform construct."
    );
  }
}

export function addToListOfLoggableConstructs(scope: Construct) {
  const loggableConstructs = (TerraformStack.of(scope).getPluginMetadata(
    LOGGABLE_CONSTRUCTS
  ) || []) as string[];

  loggableConstructs.push(scope.node.id);
  TerraformStack.of(scope).setPluginMetadata(
    LOGGABLE_CONSTRUCTS,
    loggableConstructs
  );
}
