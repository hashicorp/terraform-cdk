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
  private configurationVersionId?: string;

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
          autoQueueRuns: false
        }
      }
    })

    this.configurationVersionId = version.id

    const zipBuffer = await zipDirectory(this.workdir)
    const url = (version.attributes as any)['upload-url']

    if (!zipBuffer) throw new Error("Couldn't upload directory to Terraform Cloud");

    await this.client.ConfigurationVersion.upload(url, zipBuffer)
  }

  public async plan(destroy = false): Promise<TerraformPlan> {
    if (!this.configurationVersionId) throw new Error("Please create a ConfigurationVersion before planning");
    const workspace = await this.workspace()
    let result = await this.client.Runs.create({
      data: {
        attributes: {
          iDestroy: destroy,
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

    return new TerraformCloudPlan('terraform-cloud', plan)
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
