// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
export enum PlannedResourceAction {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  READ = "read",
  NO_OP = "no-op",
}

export enum DeployingResourceApplyState {
  WAITING = "waiting",
  UPDATING = "updating",
  UPDATED = "updated",
  CREATING = "creating",
  CREATED = "created",
  DESTROYING = "destroying",
  DESTROYED = "destroyed",
  SUCCESS = "success",
  ERROR = "error",
}
export interface PlannedResource {
  id: string;
  action: PlannedResourceAction;
}

export interface DeployingResource extends PlannedResource {
  applyState: DeployingResourceApplyState;
}

export interface ResourceChangesChange {
  actions: string[];
  before: { [key: string]: any };
  after: { [key: string]: any };
}

export interface ResourceChanges {
  address: string;
  module_address: string;
  mode: string;
  type: string;
  name: string;
  index: number;
  provider_name: string;
  change: ResourceChangesChange;
}

export interface TerraformOutput {
  sensitive: boolean;
  type: string | Array<any>;
  value: string | Record<string, unknown> | Array<any>;
}

export function isTerraformOutput(output: any): output is TerraformOutput {
  return (
    typeof output === "object" &&
    typeof output.sensitive === "boolean" &&
    (typeof output.type === "string" || Array.isArray(output.type))
  );
}

export interface TerraformPlan {
  readonly resources: PlannedResource[];
  readonly applyableResources: PlannedResource[];
  readonly needsApply: boolean;
  readonly planFile: string;
}

function filterChangingResources(resources: PlannedResource[]) {
  const applyActions = [
    PlannedResourceAction.UPDATE,
    PlannedResourceAction.CREATE,
    PlannedResourceAction.DELETE,
    PlannedResourceAction.READ,
  ];
  return resources.filter((resource) => applyActions.includes(resource.action));
}
export abstract class AbstractTerraformPlan implements TerraformPlan {
  constructor(
    public readonly planFile: string,
    private readonly resourceChanges: ResourceChanges[],
    private readonly outputChanges: Record<string, ResourceChangesChange>
  ) {}

  public get resources(): PlannedResource[] {
    return (this.resourceChanges || []).map((resource) => {
      return {
        id: resource.address,
        action: resource.change.actions[0],
      } as PlannedResource;
    });
  }

  public get applyableResources(): PlannedResource[] {
    return filterChangingResources(this.resources);
  }

  public get outputs(): PlannedResource[] {
    return Object.entries(this.outputChanges || {}).map(([key, value]) => ({
      id: `output.${key}`,
      action: value.actions[0],
    })) as PlannedResource[];
  }

  public get changingOutputs(): PlannedResource[] {
    return filterChangingResources(this.outputs);
  }

  public get needsApply(): boolean {
    return (
      this.applyableResources.length > 0 || this.changingOutputs.length > 0
    );
  }
}

export type TerraformDeployState =
  | { type: "running"; cancelled: boolean }
  | {
      type: "waiting for approval";
      approve: () => void;
      reject: () => void;
    }
  | { type: "external approval reply"; approved: boolean };

export interface Terraform {
  init: (upgrade: boolean) => Promise<void>;
  plan: (
    destroy: boolean,
    refreshOnly?: boolean,
    parallelism?: number
  ) => Promise<void>;
  deploy(
    options: {
      autoApprove?: boolean;
      refreshOnly?: boolean;
      parallelism?: number;
    },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }>;
  destroy(
    options: {
      autoApprove?: boolean;
      parallelism?: number;
    },
    callback: (state: TerraformDeployState) => void
  ): Promise<{ cancelled: boolean }>;
  output(): Promise<{ [key: string]: TerraformOutput }>;
  abort: () => Promise<void>;
}
