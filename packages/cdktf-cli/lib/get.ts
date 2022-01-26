import { ConstructsMaker, GetOptions, config } from "@cdktf/provider-generator";
import * as fs from "fs-extra";

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
  onUpdate: (payload: GetStatus) => void;
  reportTelemetry: (telemetry: {
    targetLanguage: string;
    trackingPayload: Record<string, any>;
  }) => void;
}

export async function get({
  constructsOptions,
  constraints,
  onUpdate,
  reportTelemetry,
}: GetConfig) {
  await fs.remove(constructsOptions.codeMakerOutput);
  const constructsMaker = new ConstructsMaker(
    constructsOptions,
    constraints as config.TerraformDependencyConstraint[], // ConstructsMaker handles both string and extended form, but is not consistent type wise
    reportTelemetry
  );
  onUpdate(GetStatus.DOWNLOADING);
  await constructsMaker.generate();

  if (!(await fs.pathExists(constructsOptions.codeMakerOutput))) {
    onUpdate(GetStatus.ERROR);
  } else {
    onUpdate(GetStatus.DONE);
  }
}
