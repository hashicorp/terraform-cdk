/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { Terraform, TerraformPlan, TerraformOutput, PlannedResourceAction, PlannedResource, ResourceChanges } from './terraform'
import { TerraformJsonConfigBackendRemote } from '../terraform-json'
import * as TerraformCloudClient from '@skorfmann/terraform-cloud'
import archiver from 'archiver';
import { WritableStreamBuffer } from 'stream-buffers';

export class TerraformCloudPlan implements TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: {[key: string]: any}) {}

  public get resources(): PlannedResource[]  {
    if (!this.plan.resourceChanges) return [];

    return this.plan.resourceChanges.map((resource: ResourceChanges) => {
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

export interface TerraformCredentialsItem {
  token: string;
}

export interface TerraformCredentials {
  [hostname: string]: TerraformCredentialsItem;
}
export interface TerraformCredentialsFile {
  credentials: TerraformCredentials;
}

const zipDirectory = (source: string): Promise<Buffer | false> => {
  const archive = archiver('tar', {gzip: true});
  const stream = new WritableStreamBuffer()

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve(stream.getContents()));
    archive.finalize();
  });
}

const wait = (ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export class TerraformCloud implements Terraform  {
  private readonly terraformConfigFilePath = path.join(os.homedir(), '.terraform.d', 'credentials.tfrc.json')
  private readonly token: string;
  private readonly hostname: string;
  private readonly workspaceName: string;
  private readonly organizationName: string;
  private readonly client: TerraformCloudClient.TerraformCloud;
  private readonly isSpeculative: boolean;
  private run?: TerraformCloudClient.Run;
  private configurationVersionId?: string;

  constructor(public readonly workdir: string, public readonly config: TerraformJsonConfigBackendRemote, isSpeculative = false) {
    if (!config.workspaces.name) throw new Error("Please provide a workspace name for Terraform Cloud");
    if (!config.organization) throw new Error("Please provide an organization for Terraform Cloud");

    this.hostname = config.hostname || 'app.terraform.io'
    this.workspaceName = config.workspaces.name
    this.organizationName = config.organization
    this.isSpeculative = isSpeculative
    if (config.token) {
      this.token = config.token
    } else if (process.env.TERRAFORM_CLOUD_TOKEN) {
      this.token = process.env.TERRAFORM_CLOUD_TOKEN
    } else {
      if (!fs.existsSync(this.terraformConfigFilePath)) throw new Error('Please provide token for Terraform Cloud');
      const configFile = JSON.parse(fs.readFileSync(this.terraformConfigFilePath, 'utf8')) as TerraformCredentialsFile
      this.token = configFile.credentials[this.hostname].token
    }

    this.client = new TerraformCloudClient.TerraformCloud(this.token)
  }

  public async isRemoteWorkspace(): Promise<boolean> {
    const workspace = await this.workspace()
    return workspace.attributes.executionMode !== 'local'
  }

  public async init(): Promise<void> {
    const workspace = await this.workspace()
    const version = await this.client.ConfigurationVersion.create(workspace.id, {
      data: {
        type: 'configuration-version',
        attributes: {
          autoQueueRuns: false,
          speculative: this.isSpeculative
        }
      }
    })

    this.configurationVersionId = version.id

    const zipBuffer = await zipDirectory(this.workdir)
    if (!zipBuffer) throw new Error("Couldn't upload directory to Terraform Cloud");

    await this.client.ConfigurationVersion.upload(version.attributes.uploadUrl, zipBuffer)
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    if (!this.configurationVersionId) throw new Error("Please create a ConfigurationVersion before planning");
    const workspace = await this.workspace()
    let result = await this.client.Runs.create({
      data: {
        attributes: {
          isDestroy: destroy,
          message: 'cdktf',
        },
        relationships: {
          configurationVersion: {
            data: {
              id: this.configurationVersionId,
              type: "configuration-versions"
            }
          },
          workspace: {
            data: {
              id: workspace.id,
              type: "workspaces"
            }
          }
        }
      }
    })

    const pendingStates = ['pending', 'plan_queued', 'planning']

    if (pendingStates.includes(result.attributes.status)) {
      result = await this.client.Runs.show(result.id)
      while (pendingStates.includes(result.attributes.status)) {
        result = await this.client.Runs.show(result.id)
        await wait(1000);
      }
    }

    const plan = await this.client.Plans.jsonOutput(result.relationships.plan.data.id)
    this.run = result
    return new TerraformCloudPlan('terraform-cloud', plan as unknown as any)
  }

  public async deploy(_planFile: string, stdout: (chunk: Buffer) => any): Promise<void> {
    if (!this.run) throw new Error("Please create a ConfigurationVersion / Plan before deploying");

    const deployingStates = ['confirmed', 'apply_queued', 'applying']
    const runId = this.run.id;
    await this.client.Runs.action('apply', runId)
    let result = await this.client.Runs.show(runId)

    if (deployingStates.includes(result.attributes.status)) {
      result = await this.client.Runs.show(runId)
      while (deployingStates.includes(result.attributes.status)) {
        result = await this.client.Runs.show(runId)
        await wait(1000);
      }
    }

    const logs = await this.client.Applies.logs(result.relationships.apply.data.id)
    stdout(Buffer.from(logs.data, 'utf8'))

    switch (result.attributes.status) {
      case 'applied': console.log('done') ; break;
      default: throw new  Error(`error: ${result.attributes.status}`);
    }
  }

  public async destroy(stdout: (chunk: Buffer) => any): Promise<void> {
    if (!this.run) throw new Error("Please create a ConfigurationVersion / Plan before destroying");

    const destroyingStates = ['confirmed', 'apply_queued', 'applying']
    const runId = this.run.id;
    await this.client.Runs.action('apply', runId)
    let result = await this.client.Runs.show(runId)

    if (destroyingStates.includes(result.attributes.status)) {
      result = await this.client.Runs.show(runId)
      while (destroyingStates.includes(result.attributes.status)) {
        result = await this.client.Runs.show(runId)
        await wait(1000);
      }
    }

    const logs = await this.client.Applies.logs(result.relationships.apply.data.id)
    stdout(Buffer.from(logs.data, 'utf8'))

    switch (result.attributes.status) {
      case 'applied': console.log('done') ; break;
      default: throw new  Error(`error: ${result.attributes.status}`);
    }
  }

  public async version(): Promise<string> {
    return ''
  }

  public async output(): Promise<{[key: string]: TerraformOutput}> {
    return {}
  }

  private async workspace() {
    return await this.client.Workspaces.showByName(this.organizationName, this.workspaceName)
  }
}
