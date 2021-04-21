/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import { Terraform, TerraformPlan, TerraformOutput, PlannedResourceAction, PlannedResource, ResourceChanges } from './terraform'
import { TerraformJsonConfigBackendRemote } from '../terraform-json'
import * as TerraformCloudClient from '@skorfmann/terraform-cloud'
import archiver from 'archiver';
import { WritableStreamBuffer } from 'stream-buffers';
import { logger } from '../../../../lib/logging';

export class TerraformCloudPlan implements TerraformPlan {
  constructor(public readonly planFile: string, public readonly plan: { [key: string]: any }, public readonly url: string) { }

  public get resources(): PlannedResource[] {
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
  const archive = archiver('tar', { gzip: true });
  const stream = new WritableStreamBuffer()

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .on('end', () => resolve(stream.getContents()))
      .pipe(stream)
      ;
    archive.finalize();
  });
}

const wait = (ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function BeautifyErrors(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const isMethod = descriptor && descriptor.value instanceof Function;
    if (!isMethod)
      return;

    const originalMethod = descriptor!.value;
    descriptor!.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (e) {
        if (e.response && e.response.status >= 400 && e.response.status <= 599){
          const errors = e.response.data?.errors as (object[] | undefined);
          if (errors) {
            throw new Error(`Request to Terraform Cloud failed with status ${e.response.status}: ${errors.map(e => JSON.stringify(e)).join(', ')}`);
          }
        }
        throw e;
      }
    };

    Object.defineProperty(target, propertyKey, descriptor!);
}

export class TerraformCloud implements Terraform {
  private readonly terraformConfigFilePath = path.join(os.homedir(), '.terraform.d', 'credentials.tfrc.json')
  private readonly token: string;
  private readonly hostname: string;
  private readonly workspaceName: string;
  private readonly organizationName: string;
  private readonly client: TerraformCloudClient.TerraformCloud;
  private readonly isSpeculative: boolean;
  private configurationVersionId?: string;
  public run?: TerraformCloudClient.Run;

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

  @BeautifyErrors
  public async isRemoteWorkspace(): Promise<boolean> {
    const workspace = await this.workspace()
    return workspace.attributes.executionMode !== 'local'
  }

  @BeautifyErrors
  public async init(): Promise<void> {
    if (fs.existsSync(path.join(process.cwd(), 'terraform.tfstate'))) throw new Error('Found a "terraform.tfstate" file in your current working directory. Please migrate the state manually to Terraform Cloud and delete the file afterwards. https://cdk.tf/migrate-state')
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

    // we might get an HTTP 422 error if we don't wait for the processing and try to run too early. see #647
    await this.waitForConfigurationVersionToBeReady();
  }

  @BeautifyErrors
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
    const url = `https://app.terraform.io/app/${this.organizationName}/workspaces/${this.workspaceName}/runs/${result.id}`
    return new TerraformCloudPlan('terraform-cloud', plan as unknown as any, url)
  }

  @BeautifyErrors
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
      case 'applied': break;
      default: throw new Error(`error: ${result.attributes.status}`);
    }
  }

  @BeautifyErrors
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
      case 'applied': break;
      default: throw new Error(`error: ${result.attributes.status}`);
    }
  }

  @BeautifyErrors
  public async version(): Promise<string> {
    return (await this.workspace()).attributes.terraformVersion
  }

  @BeautifyErrors
  public async output(): Promise<{ [key: string]: TerraformOutput }> {
    const stateVersion = await this.client.StateVersions.current((await this.workspace()).id, true)
    if (!stateVersion.included) return {}

    const outputs = stateVersion.included.reduce((acc, output) => {
      acc[output.id] = {
        sensitive: output.attributes.sensitive,
        type: output.attributes.type,
        value: output.attributes.value
      }

      return acc
    }, {} as { [key: string]: TerraformOutput })

    return outputs
  }

  @BeautifyErrors
  private async workspace() {
    try {
      return await this.client.Workspaces.showByName(this.organizationName, this.workspaceName)
    } catch (e) {
      if (e.response?.status === 404) {
        // return a more descriptive error message as http response is not descriptive enough
        // will not be touched by BeautifyErrors decorator
        throw new Error(`TerraformCloud returned an HTTP 404 error. Please make sure the configured organization (${this.organizationName}) and workspace (${this.workspaceName}) exist and you have the correct access rights.`);
      }
      throw e;
    }
  }

  private async isConfigurationVersionReady(): Promise<boolean> {
    if (!this.configurationVersionId) throw new Error('No ConfigurationVersionId known. Cannot wait for ConfigurationVersion to become ready');
    const configVersion = await this.client.ConfigurationVersion.show(this.configurationVersionId);
    const { status } = configVersion.attributes;
    switch (status) {
      case 'uploaded': return true;
      case 'errored':
        const { error, errorMessage } = configVersion.attributes;
        logger.error(`ConfigurationVersion in Terraform Cloud has status "${status}". Returned config version was ${JSON.stringify(configVersion)}`);
        throw new Error(`Terraform Cloud ConfigurationVersion ${this.configurationVersionId} has status "errored" ${JSON.stringify({ error, errorMessage })}`);
      case 'pending': // fallthrough
      default:
        logger.debug(`ConfigurationVersion in Terraform Cloud not considered ready with status "${status}".`)
        return false;
    }
  }

  private async waitForConfigurationVersionToBeReady(timeoutMs: number = 60_000): Promise<void> {
    logger.debug('waiting for Configuration Version to be ready in Terraform Cloud');
    let timeoutReached = false;
    const ready = async () => {
      while (!(await this.isConfigurationVersionReady() && !timeoutReached)) {
        await wait(1000);
      }
    };
    const timeout = async () => {
      await wait(timeoutMs);
      timeoutReached = true;
      throw new Error(`Waiting for Terraform Cloud ConfigurationVersion to become ready timed out (timeout was ${timeoutMs}ms)`);
    };
    await Promise.race([ready(), timeout()]);
    logger.debug('Configuration Version is ready in Terraform Cloud');
  }
}
