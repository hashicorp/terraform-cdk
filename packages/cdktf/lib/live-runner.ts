// Singleton class for each synth / plan / deploy

import { Construct } from "constructs";
import * as fs from "fs/promises";
import { TerraformProvider } from "./terraform-provider";
import { deepMerge } from "./util";
import { tmpdir } from "os";
import { join } from "path";
import { spawn } from "node:child_process";
import { TerraformResource } from "./terraform-resource";
import { TerraformStack } from "./terraform-stack";
import { TerraformOutput } from "./terraform-output";
import { TerraformModule } from "./terraform-module";

const SHOW_TERRAFORM_OUTPUT = false;

export type TerraformStateOutputs = {
  [name: string]: TerraformStateOutput;
};

export type TerraformStateOutput = {
  [name: string]: string | number | boolean;
};

/**
 *
 */
export class LiveRunner {
  private static instance: LiveRunner;
  private rootTempDir = "";
  private providers: TerraformProvider[] = [];
  private needsInit = true;
  private currentConfig: any;
  private awaitingUpdate: any[] = [];

  static get session() {
    if (!LiveRunner.instance) {
      LiveRunner.instance = new LiveRunner();
    }
    return LiveRunner.instance;
  }

  public async initialize() {
    const temp = tmpdir();

    const t = await fs.mkdtemp(join(temp, "live-cdktf-"));
    this.rootTempDir = t;

    await this.loadState();
  }

  private constructor() {
    // Create a new temporary folder
    this.currentConfig = {};
  }

  public async createResource(
    instance: TerraformResource,
    _scope: Construct
  ): Promise<any> {
    const tf = this.getCurrentTerraformConfig();

    deepMerge(tf, instance.toTerraform());
    this.awaitingUpdate.push(instance);
    instance.markAwaitingUpdate();

    this.currentConfig = tf;

    return instance;
  }

  public async createModule(
    instance: TerraformModule,
    _scope: Construct
  ): Promise<any> {
    const tf = this.getCurrentTerraformConfig();

    deepMerge(tf, instance.toTerraform());
    this.awaitingUpdate.push(instance);
    instance.markAwaitingUpdate();

    this.currentConfig = tf;
    return instance;
  }

  public async createOutputs(
    outputs: { [name: string]: any },
    stack: TerraformStack
  ) {
    const tf = this.getCurrentTerraformConfig();

    for (const [name, value] of Object.entries(outputs)) {
      if (value === undefined || value === null) continue;
      let out: TerraformOutput;
      // if value is object
      if (typeof value === "object") {
        out = new TerraformOutput(stack, name, value);
      } else {
        out = new TerraformOutput(stack, name, { value });
      }
      if (out) deepMerge(tf, out.toTerraform());
    }

    this.currentConfig = tf;
    await this.serializeAndApplyTerraform();
  }

  public async useProvider(
    instance: TerraformProvider,
    _scope: Construct
  ): Promise<any> {
    // get the terraform config for this provider and push it to the common config
    this.providers.push(instance);
    this.needsInit = true;
  }

  public async outputsFromState(): Promise<TerraformStateOutputs> {
    const rootDir = this.rootTempDir;
    const stateFile = join(rootDir, `terraform.tfstate`);
    const state = await fs.readFile(stateFile, "utf8");
    const stateJson = JSON.parse(state);
    const outputs = stateJson.outputs;
    return outputs;
  }

  public async triggerUpdate(): Promise<void> {
    await this.serializeAndApplyTerraform();
  }

  public async saveState() {
    await fs.mkdir("state", { recursive: true });
    await fs.copyFile(
      join(this.rootTempDir, "terraform.tfstate"),
      join("state", "terraform.tfstate")
    );
  }

  private getCurrentTerraformConfig(): any {
    const tf = this.currentConfig;
    // add all providers to the terraform
    for (const provider of this.providers) {
      if (!this.hasProvider(tf, provider)) {
        deepMerge(tf, provider.toTerraform());
      }
    }
    return tf;
  }

  private async serializeAndApplyTerraform() {
    const tf = this.getCurrentTerraformConfig();
    const json = JSON.stringify(tf, null, 2);
    const rootDir = this.rootTempDir;
    const filename = join(rootDir, `main.tf.json`);

    await fs.writeFile(filename, json, "utf8");

    await this.initializeTerraform();
    await this.planTerraform();
    await this.applyTerraform();
    for (const instance of this.awaitingUpdate) {
      await this.updateFromState(instance);
    }
    this.awaitingUpdate = [];
  }

  private hasProvider(tf: any, provider: TerraformProvider) {
    const providerConfig = provider.toTerraform();
    const providerName = Object.keys(providerConfig.provider)[0];
    const providers = tf.provider;
    if (!providers) return false;
    if (!providers[providerName]) return false;

    const existingProvider = providers[providerName];
    // check if there's an alias difference
    if (existingProvider.alias !== providerConfig.provider.alias) return false;

    return true;
  }

  private async updateFromState(instance: TerraformResource | TerraformModule) {
    const rootDir = this.rootTempDir;
    const stateFile = join(rootDir, `terraform.tfstate`);
    const state = await fs.readFile(stateFile, "utf8");
    const stateJson = JSON.parse(state);
    const resources = stateJson.resources;

    if (instance instanceof TerraformResource) {
      const resource = resources.find((r: any) => r.name === instance.node.id);
      if (!resource) {
        console.error(`Resource ${instance.node.id} not found in state`);
        console.log(JSON.stringify(stateJson, null, 2));
        return;
      }
      instance.updateAttributesFromState(resource.instances[0].attributes);
      return;
    }

    // We're now looking for all resources that belong to this module
    const allResources = resources.filter(
      (r: any) => r.module == `module.${instance.node.id}`
    );

    instance.updateResourcesForModule(allResources);
  }

  private async loadState() {
    // check if terraform state file exists in local folder
    try {
      await fs.copyFile(
        join("state", "terraform.tfstate"),
        join(this.rootTempDir, "terraform.tfstate")
      );
    } catch (e) {
      console.log("No terraform state file found");
    }
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
    const rootDir = this.rootTempDir;
    let output = "";
    let error = "";
    return new Promise((resolve, reject) => {
      const cmd = spawn(`terraform`, [command, ...args], {
        cwd: rootDir,
        stdio: "pipe",
      });

      cmd.stdout.on("data", (data) => {
        output += data.toString();
        if (SHOW_TERRAFORM_OUTPUT) console.log(data.toString());
      });

      cmd.stderr.on("data", (data) => {
        error += data.toString();

        if (SHOW_TERRAFORM_OUTPUT) console.error(data.toString());
      });

      cmd.on("error", (err) => {
        console.error(err);
        console.log(output);
        console.error(error);

        reject(err);
      });

      cmd.on("close", (code) => {
        if (code !== 0) {
          console.log(`terraform ${command} exited with code ${code}`);
          console.log(output);
          console.error(error);
          reject(code);
          return;
        }

        resolve(code);
      });
    });
  }
}
