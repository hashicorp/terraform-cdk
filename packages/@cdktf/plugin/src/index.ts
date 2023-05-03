// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import { Construct } from "constructs";
import { TerraformResource, TerraformStack } from "cdktf";
import { CdktfConfig } from "../../cli-core/src/lib/cdktf-config";
import * as path from "path";
import * as fs from "fs-extra";
import { execSync } from "child_process";

export class Plugin {
  constructor(readonly namespace: string) {}

  // === Construct Library ===
  public setInCdktfConstructMetadata(
    scope: Construct,
    key: string,
    value: any
  ) {
    if (TerraformResource.isTerraformResource(scope)) {
      scope.setPluginMetadata(this.pluginAccessKey(key), value);
    } else {
      throw new Error(
        "Tried to set plugin metadata on a non-terraform construct."
      );
    }
  }

  public getInCdktfConstructMetadata(scope: Construct, key: string) {
    if (TerraformResource.isTerraformResource(scope)) {
      return scope.getPluginMetadata(this.pluginAccessKey(key));
    } else {
      throw new Error(
        "Tried to get plugin metadata on a non-terraform construct."
      );
    }
  }

  public setInStackManifest(scope: Construct, key: string, value: any) {
    TerraformStack.of(scope).setPluginMetadata(
      this.pluginAccessKey(key),
      value
    );
  }

  public getInStackManifest(scope: Construct, key: string) {
    return TerraformStack.of(scope).getPluginMetadata(
      this.pluginAccessKey(key)
    );
  }

  // === CLI Library ===
  public getSynthedValueInCdktfConstructMetadata(
    stack: string,
    construct: string,
    key: string,
    projectDirectory = process.cwd()
  ) {
    const cdktfJson = this.getSynthedCdktfJson(stack, projectDirectory);
    const resourceInfo = findResourceByConstructPath(
      cdktfJson,
      `${stack}/${construct}`
    );

    if (!resourceInfo) {
      throw new Error(
        `No resource found for construct ${construct} in stack ${stack}`
      );
    }

    return resourceInfo.resource["//"].metadata.plugin[
      this.pluginAccessKey(key)
    ];
  }

  public getInSynthedStackManifest(
    stack: string,
    key: string,
    projectDirectory = process.cwd()
  ) {
    return this.getStackManifest(stack, projectDirectory).plugin[
      this.pluginAccessKey(key)
    ];
  }

  public getStateOfConstruct(
    stack: string,
    construct: string,
    projectDirectory = process.cwd()
  ) {
    const cdktfJson = this.getSynthedCdktfJson(stack, projectDirectory);
    const resourceInfo = findResourceByConstructPath(
      cdktfJson,
      `${stack}/${construct}`
    );

    if (!resourceInfo) {
      throw new Error(
        `No resource found for construct ${construct} in stack ${stack}`
      );
    }

    const { resourceOrDataSource, resourceType, resourceName } = resourceInfo;
    const workingDir = this.getCdktfSynthDir(stack, projectDirectory);

    execSync(`terraform init`, {
      cwd: workingDir,
      stdio: "ignore",
    });

    const terraformAddress = `${
      resourceOrDataSource === "data" ? "data." : ""
    }${resourceType}.${resourceName}`;

    const output = execSync(`terraform show -json`, {
      cwd: workingDir,
    });

    const parsedState = JSON.parse(String(output));

    // TODO: needs some zod parsing
    const rootModuleValues = parsedState.values.root_module;
    const resource = rootModuleValues.resources.find(
      (resource: any) => resource.address === terraformAddress
    );
    if (!resource) {
      throw new Error(
        `No resource found in terraform state for ${terraformAddress}`
      );
    }
    return { ...resource.values, ...resource.sensitive_values };
  }

  private readManifest(projectDirectory: string) {
    const cfg = CdktfConfig.read(projectDirectory);

    if (!cfg) {
      throw new Error("No cdktf.json found");
    }
    const manifestPath = path.resolve(cfg.output, "manifest.json");

    if (!fs.existsSync(manifestPath)) {
      throw new Error(
        `No manifest found at ${manifestPath}. Please run 'cdktf synth' first.`
      );
    }

    // TODO: parse with zod
    return JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  }

  private getStackManifest(stack: string, projectDirectory: string) {
    const manifest = this.readManifest(projectDirectory);

    const stackManifest = manifest.stacks[stack];
    if (!stackManifest) {
      throw new Error(`No stack with name '${stack}' found in manifest.`);
    }
    return stackManifest;
  }

  private getCdktfSynthDir(stack: string, projectDirectory: string) {
    const cfg = CdktfConfig.read(process.cwd());

    if (!cfg) {
      throw new Error("No cdktf.json found");
    }

    const manifest = this.readManifest(projectDirectory);

    const stackManifest = manifest.stacks[stack];
    if (!stackManifest) {
      throw new Error(
        `No stack found in manifest for ${stack}. Please run 'cdktf synth' first.`
      );
    }

    return path.resolve(cfg.output, stackManifest.workingDirectory);
  }

  private getSynthedCdktfJson(stack: string, projectDirectory: string) {
    const workingDir = this.getCdktfSynthDir(stack, projectDirectory);

    const cdktfJsonPath = path.resolve(
      projectDirectory,
      workingDir,
      "cdk.tf.json"
    );

    if (!fs.existsSync(cdktfJsonPath)) {
      throw new Error(
        `No cdk.tf.json found at ${cdktfJsonPath}. Please run 'cdktf synth' first.`
      );
    }

    // TODO: parse with zod
    return JSON.parse(fs.readFileSync(cdktfJsonPath, "utf-8"));
  }

  private pluginAccessKey(key: string) {
    return `${this.namespace}:${key}`;
  }
}

function findResourceByConstructPath(json: any, constructPath: string): any {
  type CdktfJsonResource = {
    [resourceType: string]: {
      [resourceName: string]: {
        ["//"]: {
          metadata: {
            path: string;
            plugin: any;
          };
        };
      } & Record<string, any>;
    };
  };
  type CdktfJson = {
    resource: CdktfJsonResource;
    data: CdktfJsonResource;
  };
  let returnValue = undefined;
  Object.entries({
    resource: json.resource,
    data: json.data,
  } as CdktfJson).forEach(([resourceOrDataSource, resourceTypes]) =>
    Object.entries(resourceTypes).forEach(([resourceType, resourceInstances]) =>
      Object.entries(resourceInstances).forEach(([resourceName, resource]) => {
        if (resource["//"].metadata.path === constructPath) {
          returnValue = {
            resourceOrDataSource,
            resourceType,
            resourceName,
            resource,
          };
        }
      })
    )
  );

  return returnValue;
}
