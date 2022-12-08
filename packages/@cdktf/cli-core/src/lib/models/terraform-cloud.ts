// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as path from "path";
import * as os from "os";
import * as fs from "fs";
import {
  Terraform,
  TerraformPlan,
  TerraformOutput,
  AbstractTerraformPlan,
} from "./terraform";
import { TerraformJsonConfigBackendRemote } from "../terraform-json";
import * as TerraformCloudClient from "@skorfmann/terraform-cloud";
import archiver from "archiver";
import { WritableStreamBuffer } from "stream-buffers";
import { SynthesizedStack } from "../synth-stack";
import { logger, Errors } from "@cdktf/commons";
import * as agent from "tunnel-agent";
import { URL } from "url";

type AxiosError = Partial<{
  message: string;
  name: string;
  code: string;
  request: any;
  status: number;
  isAxiosError: boolean;
  response: {
    data?: any;
    status: number;
    statusText?: string;
    headers: Record<string, string>;
    config?: any;
    request?: any;
  };
}>;

export class TerraformCloudPlan
  extends AbstractTerraformPlan
  implements TerraformPlan
{
  constructor(
    public readonly planFile: string,
    public readonly plan: { [key: string]: any },
    public readonly url: string
  ) {
    super(planFile, plan.resourceChanges, plan.outputChanges);
  }

  public get needsApply(): boolean {
    // When jsonOutput isn't available due to lack of resources, use the plan information
    if (this.plan?.attributes?.hasChanges) {
      return true;
    }

    return super.needsApply;
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
  const archive = archiver("tar", { gzip: true });
  const stream = new WritableStreamBuffer();

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on("error", (err) => reject(err))
      .on("end", () => resolve(stream.getContents()))
      .pipe(stream);
    archive.finalize();
  });
};

const wait = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const EXCLUDED_KEYS = ["Authorization"];
/**
 * Same as `JSON.stringify` except for Axios errors. For Axios Errors, fields included in the
 * `EXCLUDED_KEYS` array will be replaced with `REDACTED`. Otherwise behaves the same as
 * `JSON.stringify`
 * @param error Error thrown by Axios
 * @returns JSON stringified string with sensitive fields replaced by "REDACTED"
 */
function safeStringifyError(error: AxiosError): string {
  if (!(error as AxiosError)?.isAxiosError) {
    return JSON.stringify(error);
  }

  return JSON.stringify(error, function (key: string, value: string) {
    if (EXCLUDED_KEYS.includes(key)) return "REDACTED";
    return value;
  });
}

// Exporting for testing purposes only
export function logBetterErrorAndThrow(name: string, e: AxiosError) {
  if (e.response && e.response.status >= 400 && e.response.status <= 599) {
    logger.error(`Error in ${name}: ${safeStringifyError(e)}`);

    const errors = e.response.data?.errors as
      | Record<string, unknown>[]
      | undefined;
    if (errors) {
      throw new Error(
        `${name}: Request to Terraform Cloud failed with status ${
          e.response.status
        }: ${errors.map((subError) => JSON.stringify(subError)).join(", ")}`
      );
    }
  } else {
    logger.warn(`Error in ${name}: ${safeStringifyError(e)}`);
  }
}

function BeautifyErrors(name: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const isMethod = descriptor && descriptor.value instanceof Function;
    if (!isMethod) return;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const originalMethod = descriptor!.value;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    descriptor!.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (e) {
        logBetterErrorAndThrow(name, e as AxiosError);
        throw e;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    Object.defineProperty(target, propertyKey, descriptor!);
  };
}

function isPermissionLackingError(error: any) {
  return (
    error.response &&
    (error.response.status === 404 || error.response.status === 401)
  );
}
export class TerraformCloud implements Terraform {
  private readonly terraformConfigFilePath = path.join(
    os.homedir(),
    ".terraform.d",
    "credentials.tfrc.json"
  );
  private readonly token: string;
  private readonly hostname: string;
  private readonly workspaceName: string;
  private readonly organizationName: string;
  private readonly client: TerraformCloudClient.TerraformCloud;
  private readonly isSpeculative: boolean;
  private configurationVersionId?: string;
  public readonly workDir: string;
  public run?: TerraformCloudClient.Run;
  private lastLogMessageLength = 0;

  constructor(
    public readonly abortSignal: AbortSignal,
    public readonly stack: SynthesizedStack,
    public readonly config: TerraformJsonConfigBackendRemote,
    isSpeculative = false,
    private readonly createTerraformLogHandler = (_phase: string) =>
      (_stdout: string, _isErr = false) => {} // eslint-disable-line @typescript-eslint/no-empty-function
  ) {
    if (!config.workspaces?.name)
      throw new Error("Please provide a workspace name for Terraform Cloud");
    if (!config.organization)
      throw new Error("Please provide an organization for Terraform Cloud");
    this.workDir = stack.workingDirectory;

    this.hostname = config.hostname || "app.terraform.io";
    this.workspaceName = config.workspaces.name;
    this.organizationName = config.organization;
    this.isSpeculative = isSpeculative;
    if (config.token) {
      this.token = config.token;
    } else if (process.env.TERRAFORM_CLOUD_TOKEN) {
      this.token = process.env.TERRAFORM_CLOUD_TOKEN;
    } else {
      if (!fs.existsSync(this.terraformConfigFilePath))
        throw new Error("Please provide a token for Terraform Cloud");
      const configFile = JSON.parse(
        fs.readFileSync(this.terraformConfigFilePath, "utf8")
      ) as TerraformCredentialsFile;
      this.token = configFile.credentials[this.hostname].token;
    }

    this.client = new TerraformCloudClient.TerraformCloud(
      this.token,
      this.hostname
    );

    this.abortSignal.addEventListener("abort", () => {
      this.removeRun("cancel");
    });

    const httpProxy = process.env.http_proxy || process.env.HTTP_PROXY;
    if (httpProxy && httpProxy !== "undefined") {
      // ¯\_(ツ)_/¯
      const url = new URL(httpProxy);
      logger.debug(
        `setting tunnel agent via hostname=${url.hostname} port=${url.port}`
      );
      this.client.client.defaults.httpsAgent = agent.httpsOverHttp({
        proxy: { host: url.hostname, port: url.port },
      });
    }
  }

  @BeautifyErrors("IsRemoteWorkspace")
  public async isRemoteWorkspace(): Promise<boolean> {
    const workspace = await this.workspace();
    return workspace.attributes.executionMode !== "local";
  }

  @BeautifyErrors("Init")
  public async init(needsUpgrade: boolean): Promise<void> {
    const sendLog = this.createTerraformLogHandler("init");
    if (
      fs.existsSync(
        path.join(process.cwd(), `terraform.${this.stack.name}.tfstate`)
      )
    )
      throw new Error(
        `Found a "terraform.${this.stack.name}.tfstate" file in your current working directory. Please migrate the state manually to Terraform Cloud and delete the file afterwards. https://cdk.tf/migrate-state`
      );

    const workspace = await this.workspace();
    sendLog("Creating Terraform Cloud configuration version");
    const version = await this.client.ConfigurationVersion.create(
      workspace.id,
      {
        data: {
          type: "configuration-version",
          attributes: {
            autoQueueRuns: false,
            speculative: this.isSpeculative,
          },
        },
      }
    );

    this.configurationVersionId = version.id;
    sendLog(
      `Created Terraform Cloud configuration version ${this.configurationVersionId}`
    );

    this.removeLocalTerraformDirectory();

    if (needsUpgrade) {
      // Most likely this file doesn't exist, but try removing since init upgrade isn't possible in TFC/E
      this.removeLocalLockFile();
    }

    sendLog(`Zipping up the directory ${this.workDir}`);
    const zipBuffer = await zipDirectory(this.workDir);
    if (!zipBuffer)
      throw new Error("Couldn't upload directory to Terraform Cloud");

    sendLog(`Uploading the directory to Terraform Cloud`);
    await this.client.ConfigurationVersion.upload(
      version.attributes.uploadUrl,
      zipBuffer
    );

    sendLog(`Uploaded the directory to Terraform Cloud`);
    sendLog(`Waiting for configuration version to become ready...`);
    // we might get an HTTP 422 error if we don't wait for the processing and try to run too early. see #647
    await this.waitForConfigurationVersionToBeReady();
  }

  @BeautifyErrors("Plan")
  public async plan(
    destroy = false,
    refreshOnly = false,
    // Parallelism is ignored as custom parallelism is not supported by TFC yet
    _parallelism = -1
  ): Promise<TerraformPlan> {
    if (!this.configurationVersionId)
      throw new Error("Please create a ConfigurationVersion before planning");
    const sendLog = this.createTerraformLogHandler("plan");
    const workspace = await this.workspace();
    const workspaceUrl = `https://${this.hostname}/app/${this.organizationName}/workspaces/${this.workspaceName}`;

    if (
      workspace.attributes.locked &&
      workspace.relationships?.lockedBy?.data?.type === "users"
    ) {
      throw new Error(
        `Can not plan, the workspace ${this.organizationName}/${this.workspaceName} is locked by a user. You can find more information at ${workspaceUrl}`
      );
    }

    if (
      workspace.attributes.locked &&
      workspace.relationships?.lockedBy?.data?.type === "runs"
    ) {
      throw new Error(
        `Can not plan, the workspace ${this.organizationName}/${this.workspaceName} is locked by a previous run, please wait until it's done. You can find more information at ${workspaceUrl}`
      );
    }

    if (workspace.attributes.locked) {
      throw new Error(
        `Can not plan, the workspace ${this.organizationName}/${
          this.workspaceName
        } is locked for an unknown reason: ${JSON.stringify(
          workspace.relationships?.lockedBy
        )}. You can find more information at ${workspaceUrl}`
      );
    }

    sendLog(`Creating speculative Terraform Cloud run`);
    let result = await this.client.Runs.create({
      data: {
        attributes: {
          isDestroy: destroy,
          refreshOnly,
          message: "cdktf",
        },
        relationships: {
          configurationVersion: {
            data: {
              id: this.configurationVersionId,
              type: "configuration-versions",
            },
          },
          workspace: {
            data: {
              id: workspace.id,
              type: "workspaces",
            },
          },
        },
      },
    });
    const url = `https://${this.hostname}/app/${this.organizationName}/workspaces/${this.workspaceName}/runs/${result.id}`;
    sendLog(`Created speculative Terraform Cloud run: ${url}`);

    // the source of truth of all pending states are from
    // https://developer.hashicorp.com/terraform/cloud-docs/api-docs/run#run-states
    // any state before `apply_queued` is considered pending unless it is specified as a final state
    const pendingStates = [
      "pending",
      "fetching",
      "fetching_completed",
      "pre_plan_running",
      "pre_plan_completed",
      "queuing",
      "plan_queued",
      "planning",
      "cost_estimating",
      "cost_estimated",
      "policy_checking",
      "policy_override",
      "policy_checked",
      "post_plan_running",
      "post_plan_completed",
    ];

    while (pendingStates.includes(result.attributes.status)) {
      result = await this.update(this.client, result.id, "plan");
      await wait(1000);
    }

    sendLog(`Speculative Terraform Cloud run done`);
    if (result.attributes.status === "errored") {
      throw new Error(`Error planning the run, please take a look at ${url}`);
    }

    sendLog(`Getting plan output`);
    let plan;
    try {
      plan = await this.client.Plans.jsonOutput(
        result.relationships.plan.data.id
      );
    } catch (e) {
      if (isPermissionLackingError(e)) {
        // We may have a token without admin permissions
        sendLog(
          `Cannot get plan output due to token without administator scope. To view plan output visit:\n\n${url}`
        );

        try {
          plan = await this.client.Plans.show(
            result.relationships.plan.data.id
          );
        } catch (e) {
          if (isPermissionLackingError(e)) {
            // This shouldn't happen, since we had enough permissions to create a plan
            throw e;
          }
        }
      }
    }

    this.run = result;
    return new TerraformCloudPlan(
      "terraform-cloud",
      plan as unknown as any,
      url
    );
  }

  private async update(
    client: TerraformCloudClient.TerraformCloud,
    runId: string,
    phase: string
  ) {
    const sendLog = this.createTerraformLogHandler(phase);
    const res = await client.Runs.show(runId);

    // fetch logs and update UI in the background
    client.Applies.logs(res.relationships.apply.data.id).then(({ data }) => {
      // In rare cases the backend sends an empty chunk of data back.
      if (data && data.length) {
        const buffer = Buffer.from(data, "utf8");

        // We only want to send what we have not seen yet.
        const bufferWithoutLastKnown = buffer
          .subarray(this.lastLogMessageLength)
          .toString("utf8");
        if (bufferWithoutLastKnown.trim().length) {
          sendLog(bufferWithoutLastKnown, false);
          this.lastLogMessageLength = buffer.length;
        }
      }
    });
    return res;
  }

  @BeautifyErrors("Deploy")
  public async deploy(
    _planFile: string,
    _refreshOnly?: boolean,
    // Parallelism is ignored as custom parallelism is not supported by TFC yet
    _parallelism?: number
  ): Promise<void> {
    const sendLog = this.createTerraformLogHandler("deploy");
    if (!this.run) {
      throw new Error(
        "Please create a ConfigurationVersion / Plan before deploying"
      );
    }

    if (this.run.attributes.autoApply) {
      logger.info("Auto apply is enabled, skipping confirming the deploy plan");
      return;
    }

    const deployingStates = ["confirmed", "apply_queued", "applying"];
    const runId = this.run.id;
    sendLog(`Deploying Terraform Cloud run`);
    try {
      await this.client.Runs.action("apply", runId);
    } catch (e) {
      if (isPermissionLackingError(e)) {
        // We may have a token without apply permissions
        sendLog(
          `Failed to apply Terraform run. This may be due to lacking permissions.`
        );
      }
      throw e;
    }

    let result = await this.client.Runs.show(runId);

    while (deployingStates.includes(result.attributes.status)) {
      result = await this.update(this.client, runId, "deploy");
      await wait(1000);
    }

    switch (result.attributes.status) {
      case "applied":
        break;
      default:
        throw new Error(`error: ${result.attributes.status}`);
    }
  }

  @BeautifyErrors("Destroy")
  public async destroy(): Promise<void> {
    if (!this.run) {
      throw new Error(
        "Please create a ConfigurationVersion / Plan before destroying"
      );
    }

    // if the workspace has auto apply enabled and we attempt to confirm the plan
    // it will result in 409 error
    if (this.run.attributes.autoApply) {
      logger.info(
        "Auto apply is enabled, skipping confirming the destroy plan"
      );
      return;
    }

    const sendLog = this.createTerraformLogHandler("destroy");
    const destroyingStates = ["confirmed", "apply_queued", "applying"];
    const runId = this.run.id;
    sendLog(`Applying Terraform Cloud run`);
    await this.client.Runs.action("apply", runId);

    let result = await this.client.Runs.show(runId);

    while (destroyingStates.includes(result.attributes.status)) {
      result = await this.update(this.client, runId, "destroy");
      await wait(1000);
    }

    switch (result.attributes.status) {
      case "applied":
        break;
      default:
        throw new Error(`error: ${result.attributes.status}`);
    }
  }

  @BeautifyErrors("Version")
  public async version(): Promise<string> {
    return (await this.workspace()).attributes.terraformVersion;
  }

  @BeautifyErrors("Abort")
  public async abort(): Promise<void> {
    if (!this.run) {
      throw Errors.Internal(
        "No run is present to abort, this means we called abort before the plan was started"
      );
    }

    await this.removeRun("discard");
  }

  @BeautifyErrors("Output")
  public async output(): Promise<Record<string, TerraformOutput>> {
    const sendLog = this.createTerraformLogHandler("output");
    sendLog("Fetching Terraform Cloud outputs");
    try {
      const stateVersion = await this.client.StateVersions.current(
        (
          await this.workspace()
        ).id,
        true
      );
      if (!stateVersion.included) return {};

      const outputs = stateVersion.included.reduce((acc, output) => {
        acc[output.attributes.name] = {
          sensitive: output.attributes.sensitive,
          type: output.attributes.type,
          value: output.attributes.value,
        };

        return acc;
      }, {} as { [key: string]: TerraformOutput });

      return outputs;
    } catch (e) {
      if (isPermissionLackingError(e)) {
        logger.info(
          "Unable to obtain state versions since the token supplied lacks permission, proceeding without outputs"
        );
        return {};
      }

      throw e;
    }
  }

  @BeautifyErrors("Workspace")
  private async workspace() {
    try {
      return await this.client.Workspaces.showByName(
        this.organizationName,
        this.workspaceName
      );
    } catch (e) {
      if (e.response?.status === 404) {
        // return a more descriptive error message as http response is not descriptive enough
        // will not be touched by BeautifyErrors decorator
        throw new Error(
          `TerraformCloud returned an HTTP 404 error. Please make sure the configured organization (${this.organizationName}) and workspace (${this.workspaceName}) exist and you have the correct access rights.`
        );
      }
      throw e;
    }
  }

  private async isConfigurationVersionReady(): Promise<boolean> {
    if (!this.configurationVersionId)
      throw new Error(
        "No ConfigurationVersionId known. Cannot wait for ConfigurationVersion to become ready"
      );
    const configVersion = await this.client.ConfigurationVersion.show(
      this.configurationVersionId
    );
    const { status } = configVersion.attributes;
    switch (status) {
      case "uploaded":
        return true;
      case "errored": {
        const { error, errorMessage } = configVersion.attributes;
        logger.error(
          `ConfigurationVersion in Terraform Cloud has status "${status}". Returned config version was ${JSON.stringify(
            configVersion
          )}`
        );
        throw new Error(
          `Terraform Cloud ConfigurationVersion ${
            this.configurationVersionId
          } has status "errored" ${JSON.stringify({ error, errorMessage })}`
        );
      }
      case "pending": // fallthrough
      default:
        logger.debug(
          `ConfigurationVersion in Terraform Cloud not considered ready with status "${status}".`
        );
        return false;
    }
  }

  private async removeRun(action: "cancel" | "discard") {
    if (!this.run) {
      logger.debug("No run to remove");
      return;
    }

    const url = `https://${this.hostname}/app/${this.organizationName}/workspaces/${this.workspaceName}/runs/${this.run.id}`;
    logger.info(`${action}ing run ${url}`);
    this.client.Runs.action(action, this.run.id)
      .then(() => {
        logger.debug(`Cancelled run ${url}`);
      })
      .catch(() => {
        logger.error(`Failed to cancel run, please cancel manually at ${url}`);
      });
  }

  private async waitForConfigurationVersionToBeReady(
    timeoutMs = 60_000
  ): Promise<void> {
    logger.debug(
      "waiting for Configuration Version to be ready in Terraform Cloud"
    );
    let timeoutReached = false;
    const ready = async () => {
      while (!((await this.isConfigurationVersionReady()) && !timeoutReached)) {
        await wait(1000);
      }
    };
    const timeout = async () => {
      await wait(timeoutMs);
      timeoutReached = true;
      throw new Error(
        `Waiting for Terraform Cloud ConfigurationVersion to become ready timed out (timeout was ${timeoutMs}ms)`
      );
    };
    await Promise.race([ready(), timeout()]);
    logger.debug("Configuration Version is ready in Terraform Cloud");
  }

  private removeLocalTerraformDirectory() {
    try {
      fs.rmSync(path.resolve(this.stack.workingDirectory, ".terraform"), {
        recursive: true,
      });
    } catch (error) {
      logger.debug(`Could not remove .terraform folder`, error);
    }
  }

  private removeLocalLockFile() {
    try {
      fs.rmSync(
        path.resolve(this.stack.workingDirectory, ".terraform.lock.hcl")
      );
    } catch (error) {
      logger.debug(`Could not remove ".terraform.lock.hcl" file`, error);
    }
  }
}
