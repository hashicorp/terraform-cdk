import * as path from 'path';
import { exec, readCDKTFVersion } from 'cdktf-cli/lib/util'
import { Terraform, TerraformPlan, TerraformOutput, AbstractTerraformPlan, getResourceState, PlannedResourceAction, DeployingResource } from './terraform';
import { SynthesizedStack } from '../../helper/synth-stack';
import { terraformBinaryName } from '../../helper/terraform';


export class TerraformCliPlan extends AbstractTerraformPlan implements TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: {[key: string]: any}) {
    super(planFile, plan.resource_changes, plan.output_changes);
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

  public outputParser(line: string): DeployingResource | undefined {
    if (/^Outputs:/.test(line)) { return }
    if (/^Plan:/.test(line)) { return }
    if (/^data\..*/.test(line)) { return }

    const resourceMatch = line.match(/^([a-zA-Z_][a-zA-Z\d_\-.]*):/)
    const applyState = getResourceState(line);

    if (applyState && resourceMatch && resourceMatch.length >= 0 && resourceMatch[1] != "Warning") {
      return {
        id: resourceMatch[1] as string,
        action: PlannedResourceAction.CREATE,
        applyState
      }
    } else {
      return
    }
  }
}
