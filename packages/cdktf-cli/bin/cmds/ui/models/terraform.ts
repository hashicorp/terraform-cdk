import { spawn, SpawnOptions } from 'child_process';
import * as path from 'path';

export enum PlannedResourceAction {
  CREATE = 'create',
  UPDATE = 'update',
  DESTROY = 'destroy',
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
  type: string;
  value: string;
}

export class TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: { [key: string]: any }) { }

  public get resources(): PlannedResource[] {
    return this.plan.resource_changes.map((resource: ResourceChanges) => {
      return {
        id: resource.address,
        action: resource.change.actions[0]
      } as PlannedResource
    })
  }

  public get applyableResources(): PlannedResource[] {
    const applyActions = [PlannedResourceAction.UPDATE, PlannedResourceAction.CREATE, PlannedResourceAction.DESTROY, PlannedResourceAction.READ];
    return this.resources.filter(resource => (applyActions.includes(resource.action)));
  }

  public get needsApply(): boolean {
    return this.applyableResources.length > 0
  }
}

export interface ITerraform {
  init: () => Promise<void>;
  plan: () => Promise<TerraformPlan>;
  deploy: (planFile: string, stdout: (chunk: Buffer) => any) => Promise<void>;
  output: () => Promise<{ [key: string]: TerraformOutput }>;
}

export class Terraform implements ITerraform {
  constructor(public readonly workdir: string) {
  }

  public async init(): Promise<void> {
    await this.exec('terraform', ['init'], { cwd: this.workdir, env: process.env })
  }

  public async plan(): Promise<TerraformPlan> {
    const planFile = path.join(this.workdir, 'plan')
    await this.exec('terraform', ['plan', '-out', planFile], { cwd: this.workdir, env: process.env });
    const jsonPlan = await this.exec('terraform', ['show', '-json', planFile], { cwd: this.workdir, env: process.env });
    return new TerraformPlan(planFile, JSON.parse(jsonPlan));
  }

  public async deploy(planFile: string, stdout: (chunk: Buffer) => any): Promise<void> {
    await this.exec('terraform', ['apply', '-auto-approve', planFile], { cwd: this.workdir, env: process.env }, stdout);
  }

  public async output(): Promise<{ [key: string]: TerraformOutput }> {
    const output = await this.exec('terraform', ['output', '-json'], { cwd: this.workdir, env: process.env });
    return JSON.parse(output)
  }

  private async exec(command: string, args: string[], options: SpawnOptions, stdout?: (chunk: Buffer) => any): Promise<string> {
    return new Promise((ok, ko) => {
      const child = spawn(command, args, options);
      const out = new Array<Buffer>();
      if (stdout !== undefined) {
        child.stdout?.on('data', stdout);
      } else {
        child.stdout?.on('data', (chunk: Buffer) => out.push(chunk));
      }
      child.stderr?.on('data', (chunk: string | Uint8Array) => process.stderr.write(chunk));
      child.once('error', (err: any) => ko(err));
      child.once('close', (code: number) => {
        if (code !== 0) {
          return ko(new Error(`non-zero exit code ${code}`));
        }
        return ok(Buffer.concat(out).toString('utf-8'));
      });
    });
  }
}
