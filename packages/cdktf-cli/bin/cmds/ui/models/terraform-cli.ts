import * as path from 'path';
import { exec, readCDKTFVersion } from 'cdktf-cli/lib/util'
import { Terraform, TerraformPlan, TerraformOutput, PlannedResourceAction, PlannedResource, ResourceChanges } from './terraform'
import { SynthesizedStack } from '../../helper/synth-stack';

const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || 'terraform'

export class TerraformCliPlan implements TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: {[key: string]: any}) {}

  public get resources(): PlannedResource[]  {
    if (!this.plan.resource_changes) return [];

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

export class TerraformCli implements Terraform {
  public readonly workdir: string;

  constructor(public readonly stack: SynthesizedStack) {
    this.workdir = stack.workingDirectory
  }

  public async init(): Promise<void> {
    await this.setUserAgent()
    await exec(terraformBinaryName, ['init', '-input=false'], { cwd: this.workdir, env: process.env })
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    const planFile = 'plan'
    const options = ['plan', '-input=false', '-out', planFile, ...this.stateFileOption]
    if (destroy) {
      options.push('-destroy')
    }
    await this.setUserAgent()
    await exec(terraformBinaryName, options, { cwd: this.workdir, env: process.env });
    const jsonPlan = await exec(terraformBinaryName, ['show', '-json', planFile], { cwd: this.workdir, env: process.env });
    return new TerraformCliPlan(planFile, JSON.parse(jsonPlan));
  }

  public async deploy(planFile: string, stdout: (chunk: Buffer) => any): Promise<void> {
    await this.setUserAgent()
    await exec(terraformBinaryName, ['apply', '-auto-approve', '-input=false', ...this.stateFileOption, planFile], { cwd: this.workdir, env: process.env }, stdout);
  }

  public async destroy(stdout: (chunk: Buffer) => any): Promise<void> {
    await this.setUserAgent()
    await exec(terraformBinaryName, ['destroy', '-auto-approve', '-input=false', ...this.stateFileOption], { cwd: this.workdir, env: process.env }, stdout);
  }

  public async version(): Promise<string> {
    try {
      return await exec(terraformBinaryName, ['-v'], { cwd: this.workdir, env: process.env });
    } catch {
      throw new Error("Terraform CLI not present - Please install a current version https://learn.hashicorp.com/terraform/getting-started/install.html")
    }
  }

  public async output(): Promise<{[key: string]: TerraformOutput}> {
    const output = await exec(terraformBinaryName, ['output', '-json', ...this.stateFileOption], { cwd: this.workdir, env: process.env });
    return JSON.parse(output)
  }

  private get stateFileOption() {
    return ['-state', path.join(process.cwd(), `terraform.${this.stack.name}.tfstate`)]
  }

  public async setUserAgent(): Promise<void> {
    // Read the cdktf version from the 'cdk.tf.json' file
    // and set the user agent.
    const version = await readCDKTFVersion(this.workdir)
    if (version != "") {
      process.env.TF_APPEND_USER_AGENT = "cdktf/" + version + " (+https://github.com/hashicorp/terraform-cdk)";
    }
  }
}
