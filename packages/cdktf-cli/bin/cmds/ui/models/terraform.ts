import * as path from 'path';
import { exec } from '../../../../lib/util'

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

export class TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: {[key: string]: any}) {}

  public get resources(): PlannedResource[]  {
    return this.plan.resource_changes.map((resource: ResourceChanges) => {
      return {
        id: resource.address,
        action: resource.change.actions[0]
      } as PlannedResource
    })
  }

  public get applyableResources(): PlannedResource[] {
    const applyActions = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DELETE, PlannedResourceAction.READ];
    return this.resources.filter(resource => (applyActions.includes(resource.action)));
  }

  public get needsApply(): boolean {
    return this.applyableResources.length > 0
  }
}

export class Terraform  {
  constructor(public readonly workdir: string) {
  }

  public async init(): Promise<void> {
    await exec('terraform', ['init'], { cwd: this.workdir, env: process.env })
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    const planFile = path.join(this.workdir, 'plan')
    const options = ['plan', '-out', planFile]
    if (destroy) {
      options.push('-destroy')
    }
    await exec('terraform', options, { cwd: this.workdir, env: process.env });
    const jsonPlan = await exec('terraform', ['show', '-json', planFile], { cwd: this.workdir, env: process.env });
    return new TerraformPlan(planFile, JSON.parse(jsonPlan));
  }

  public async deploy(planFile: string, stdout: (chunk: Buffer) => any): Promise<void> {
    await exec('terraform', ['apply', '-auto-approve', planFile], { cwd: this.workdir, env: process.env }, stdout);
  }

  public async destroy(stdout: (chunk: Buffer) => any): Promise<void> {
    await exec('terraform', ['destroy', '-auto-approve'], { cwd: this.workdir, env: process.env }, stdout);
  }

  public async output(): Promise<{[key: string]: TerraformOutput}> {
    const output = await exec('terraform', ['output', '-json'], { cwd: this.workdir, env: process.env });
    return JSON.parse(output)
  }
}
