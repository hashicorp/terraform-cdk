import {
  ConstructsMaker,
  GetOptions,
  config,
  setLogger,
} from "@cdktf/provider-generator";
import {} from "@cdktf/provider-generator/lib/config";
import * as fs from "fs-extra";
import { logger } from "./logging";

export enum GetStatus {
  STARTING = "starting",
  DOWNLOADING = "downloading and generating modules and providers",
  DONE = "done",
  ERROR = "error",
}

type StringDependencyConstraint = string; // e.g. hashicorp/aws@ ~> 2.0
type DependencyConstraint =
  | config.TerraformDependencyConstraint
  | StringDependencyConstraint;

interface GetConfig {
  constraints: DependencyConstraint[];
  constructsOptions: GetOptions;
  onUpdate?: (payload: GetStatus) => void;
  reportTelemetry?: (telemetry: {
    targetLanguage: string;
    trackingPayload: Record<string, any>;
  }) => void;
}

export async function get({
  constructsOptions,
  constraints,
  onUpdate = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  reportTelemetry = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
}: GetConfig) {
  setLogger(logger as any);
  logger.debug(
    `Starting get, removing output directory: '${constructsOptions.codeMakerOutput}'`
  );
  await fs.remove(constructsOptions.codeMakerOutput);
  const constructsMaker = new ConstructsMaker(
    constructsOptions,
    constraints as config.TerraformDependencyConstraint[], // ConstructsMaker handles both string and extended form, but is not consistent type wise
    reportTelemetry
  );
  onUpdate(GetStatus.DOWNLOADING);
  logger.debug("Generating provider bindings");
  await constructsMaker.generate();
  logger.debug("Provider bindings generated");

  if (!(await fs.pathExists(constructsOptions.codeMakerOutput))) {
    onUpdate(GetStatus.ERROR);
    logger.debug("Failed to generate provider bindings");
  } else {
    onUpdate(GetStatus.DONE);
    logger.debug("Provider bindings generated");
  }
}
