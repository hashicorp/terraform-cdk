export enum PlannedResourceAction {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  READ = 'read',
  NO_OP = 'no-op'
}

export enum DeployingResourceApplyState {
  WAITING = 'waiting',
  UPDATING = 'updating',
  UPDATED = 'updated',
  CREATING = 'creating',
  CREATED = 'created',
  DESTROYING = 'destroying',
  DESTROYED = 'destroyed',
  SUCCESS = 'success',
  ERROR = 'error'
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
  before: {[key: string]: any };
  after: {[key: string]: any };
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
  type: string;
  value: string;
}

export interface TerraformPlan {
  readonly resources: PlannedResource[];
  readonly applyableResources: PlannedResource[];
  readonly needsApply: boolean;
  readonly planFile: string;
}

export interface Terraform {
  init: () => Promise<void>;
  plan: (destroy: boolean) => Promise<TerraformPlan>;
  deploy(planFile: string, stdout: (chunk: Buffer) => any): Promise<void>;
  destroy(stdout: (chunk: Buffer) => any): Promise<void>;
  output(): Promise<{[key: string]: TerraformOutput}>;
}
