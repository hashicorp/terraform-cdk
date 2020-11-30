/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { Terraform, TerraformPlan, TerraformOutput, PlannedResourceAction, PlannedResource, ResourceChanges } from './terraform'
import { TerraformJsonConfigBackendRemote } from '../terraform-json'
import * as TerraformCloudClient from 'terraform-cloud'
import archiver from 'archiver';
import { WritableStreamBuffer } from 'stream-buffers';

export class TerraformCloudPlan implements TerraformPlan {
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

export interface TerraformCredentialsItem {
  token: string;
}

export interface TerraformCredentials {
  [hostname: string]: TerraformCredentialsItem;
}
export interface TerraformCredentialsFile {
  credentials: TerraformCredentials;
}



/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
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

export class TerraformCloud implements Terraform  {
  private readonly terraformConfigFilePath = path.join(os.homedir(), '.terraform.d', 'credentials.tfrc.json')
  private readonly token: string;
  private readonly hostname: string;
  private readonly workspaceName: string;
  private readonly organizationName: string;
  private readonly client: TerraformCloudClient.TerraformCloud;

  constructor(public readonly workdir: string, public readonly config: TerraformJsonConfigBackendRemote) {
    if (!config.workspaces.name) throw new Error("Please provide a workspace name for Terraform Cloud");
    if (!config.organization) throw new Error("Please provide an organization for Terraform Cloud");

    this.hostname = config.hostname || 'app.terraform.io'
    this.workspaceName = config.workspaces.name
    this.organizationName = config.organization

    if (config.token) {
      this.token = config.token
    } else {
      if (!fs.existsSync(this.terraformConfigFilePath)) throw new Error('Please provide token for Terraform Cloud');
      const configFile = JSON.parse(fs.readFileSync(this.terraformConfigFilePath, 'utf8')) as TerraformCredentialsFile
      this.token = configFile.credentials[this.hostname].token
    }

    this.client = new TerraformCloudClient.TerraformCloud(this.token)
  }

  public async init(): Promise<void> {
    const workspace = await this.workspace()
    const version = await this.client.ConfigurationVersion.create(workspace.id, {
      data: {
        type: 'configuration-version',
        attributes: {
          autoQueueRuns: true
        }
      }
    })

    const zipBuffer = await zipDirectory(this.workdir)
    const url = (version.attributes as any)['upload-url']

    if (!zipBuffer) throw new Error("Couldn't upload directory to Terraform Cloud");

    const uploadedVersion = await this.client.ConfigurationVersion.upload(url, zipBuffer)
    console.log({uploadedVersion})
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    destroy
    return new TerraformCloudPlan('f', {})
  }

  public async deploy(_planFile: string, _stdout: (chunk: Buffer) => any): Promise<void> {
    return
  }

  public async destroy(_stdout: (chunk: Buffer) => any): Promise<void> {
    return
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
