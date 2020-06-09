import { spawn, SpawnOptions } from 'child_process';

export enum PlannedResourceAction {
  CREATE = 'create',
  CHANGE = 'change',
  DESTROY = 'destroy',
  READ = 'read'
}

export interface PlannedResource {
  id: string;
  action: PlannedResourceAction;
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

export class TerraformPlan {
  constructor(public readonly plan: {[key: string]: any}) {}

  public get resources(): PlannedResource[]  {
    return this.plan.resource_changes.map((resource: ResourceChanges) => {
      return {
        id: resource.address,
        action: resource.change.actions[0]
      } as PlannedResource
    })
  }
}

export class Terraform  {
  constructor(public readonly workdir: string) {
  }

  public async init(): Promise<void> {
    await this.exec('terraform', ['init'], { cwd: this.workdir, env: process.env })
  }

  public async plan(): Promise<TerraformPlan> {
    await this.exec('terraform', ['plan', '-out', '/tmp/plan'], { cwd: this.workdir, env: process.env });
    const jsonPlan = await this.exec('terraform', ['show', '-json', '/tmp/plan'], { cwd: this.workdir, env: process.env });
    return new TerraformPlan(JSON.parse(jsonPlan));
  }

  private async exec(command: string, args: string[], options: SpawnOptions): Promise<string> {
    return new Promise((ok, ko) => {
      const child = spawn(command, args, options);
      const out = new Array<Buffer>();
      child.stdout?.on('data', (chunk: Buffer) => out.push(chunk));
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
