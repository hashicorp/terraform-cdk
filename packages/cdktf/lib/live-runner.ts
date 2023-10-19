// Singleton class for each synth / plan / deploy

import { Construct } from "constructs";
import * as fs from "fs/promises";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { tmpdir } from "os";
import { join } from "path";
import { spawn } from "node:child_process";
import { TerraformResource } from "./terraform-resource";

const SHOW_TERRAFORM_OUTPUT = false;

/**
 *
 */
export class LiveRunner {
  private static instance: LiveRunner;
  private rootTempDir = "";
  private providers: TerraformProvider[] = [];
  private needsInit = true;
  private priorConfig: any;

  static get session() {
    if (!LiveRunner.instance) {
      LiveRunner.instance = new LiveRunner();
    }
    return LiveRunner.instance;
  }

  private constructor() {
    // Create a new temporary folder
    this.priorConfig = {};
  }

  private async tempDir() {
    if (this.rootTempDir) return this.rootTempDir;
    const temp = tmpdir();

    const tempDir = await fs.mkdtemp(join(temp, "-live-cdktf"));
    this.rootTempDir = tempDir;

    return this.rootTempDir;
  }

  public async createResource(
    instance: TerraformResource,
    _scope: Construct
  ): Promise<any> {
    const tf = this.priorConfig;

    if (this.needsInit) {
      // add all providers to the terraform
      for (const provider of this.providers) {
        deepMerge(tf, provider.toTerraform());
      }
    }

    deepMerge(tf, instance.toTerraform());

    // write json to file
    const json = JSON.stringify(tf, null, 2);
    const rootDir = await this.tempDir();
    const filename = join(rootDir, `main.tf.json`);

    await fs.writeFile(filename, json, "utf8");

    await this.initializeTerraform();
    await this.planTerraform();
    await this.applyTerraform();

    await this.updateFromState(instance);

    this.priorConfig = tf;

    return instance;
  }

  public async useProvider(
    instance: TerraformProvider,
    _scope: Construct
  ): Promise<any> {
    // get the terraform config for this provider and push it to the common config
    this.providers.push(instance);
    this.needsInit = true;
  }

  private async updateFromState(instance: TerraformResource) {
    const rootDir = await this.tempDir();
    const stateFile = join(rootDir, `terraform.tfstate`);
    const state = await fs.readFile(stateFile, "utf8");
    const stateJson = JSON.parse(state);
    const resources = stateJson.resources;
    const resource = resources.find((r: any) => r.name === instance.node.id);
    if (!resource) {
      throw new Error(`Resource ${instance.node.id} not found in state`);
    }

    instance.updateAttributesFromState(resource.instances[0].attributes);
  }

  private async initializeTerraform() {
    if (!this.needsInit) return;
    await this.executeTerraformCommand("init", ["-input=false"]);

    this.needsInit = false;
  }

  private async planTerraform() {
    await this.executeTerraformCommand("plan", ["-input=false"]);
  }

  private async applyTerraform() {
    await this.executeTerraformCommand("apply", [
      "-input=false",
      "-auto-approve",
    ]);
  }

  private async executeTerraformCommand(command: string, args: string[]) {
    const rootDir = await this.tempDir();
    return new Promise((resolve, reject) => {
      const cmd = spawn(`terraform`, [command, ...args], {
        cwd: rootDir,
        stdio: "pipe",
      });

      cmd.stdout.on("data", (data) => {
        if (SHOW_TERRAFORM_OUTPUT) console.log(data.toString());
      });

      cmd.stderr.on("data", (data) => {
        if (SHOW_TERRAFORM_OUTPUT) console.error(data.toString());
      });

      cmd.on("error", (err) => {
        console.error(err);
        reject(err);
      });

      cmd.on("close", (code) => {
        if (code !== 0)
          console.log(`terraform ${command} exited with code ${code}`);
        resolve(code);
      });
    });
  }
}
