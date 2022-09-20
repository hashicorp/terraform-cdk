// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { keysToSnakeCase, deepMerge, terraformBinaryName } from "../util";
import { DataTerraformRemoteState } from "./remote-backend";
import { Fn } from "../terraform-functions";
import { TerraformRemoteState } from "../terraform-remote-state";
import { TerraformBackend } from "../terraform-backend";
import { ValidateBinaryVersion } from "../validations";

/**
 * The Cloud Backend synthesizes a {@link https://www.terraform.io/cli/cloud/settings#the-cloud-block cloud block}.
 * The cloud block is a nested block within the top-level terraform settings block.
 * It specifies which Terraform Cloud workspaces to use for the current working directory.
 * The cloud block only affects Terraform CLI's behavior.
 * When Terraform Cloud uses a configuration that contains a cloud block - for example, when a workspace is configured to use a VCS provider directly - it ignores the block and behaves according to its own workspace settings.
 */
export class CloudBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: CloudBackendProps) {
    super(scope, "backend", "cloud");

    this.node.addValidation(
      new ValidateBinaryVersion(
        "terraform",
        ">=1.1",
        `${terraformBinaryName} version`,
        `The cloud block is only supported for Terraform >=1.1. Please upgrade your Terraform version.`
      )
    );
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      terraform: {
        cloud: deepMerge(this.synthesizeAttributes(), this.rawOverrides),
      },
    };
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({
      ...this.props,
      workspaces: this.props.workspaces.toTerraform(),
    });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    // The cloud "backend" does not have a coresponding remote state data source since it's meant to also
    // work with multiple workspaces through tags.
    if ("name" in this.props.workspaces) {
      return new DataTerraformRemoteState(scope, name, {
        organization: this.props.organization,
        workspaces: { name: (this.props.workspaces as any).name },
        token: this.props.token,
        hostname: this.props.hostname,
      });
    }

    throw new Error(
      "The Cloud backend only supports cross-stack references when the workspace is defined by name instead of by tags."
    );
  }
}

/**
 * The Cloud Backend synthesizes a {@link https://www.terraform.io/cli/cloud/settings#the-cloud-block cloud block}.
 * The cloud block is a nested block within the top-level terraform settings block.
 * It specifies which Terraform Cloud workspaces to use for the current working directory.
 * The cloud block only affects Terraform CLI's behavior.
 * When Terraform Cloud uses a configuration that contains a cloud block - for example, when a workspace is configured to use a VCS provider directly - it ignores the block and behaves according to its own workspace settings.
 *
 * https://www.terraform.io/cli/cloud/settings#arguments
 */
export interface CloudBackendProps {
  /**
   * The name of the organization containing the workspace(s) the current configuration should use.
   */
  readonly organization: string;

  /**
   * A nested block that specifies which remote Terraform Cloud workspaces to use for the current configuration.
   * The workspaces block must contain exactly one of the following arguments, each denoting a strategy for how workspaces should be mapped:
   */
  readonly workspaces: NamedCloudWorkspace | TaggedCloudWorkspaces;

  /**
   * The hostname of a Terraform Enterprise installation, if using Terraform Enterprise.
   *
   * @default app.terraform.io
   */
  readonly hostname?: string;

  /**
   * The token used to authenticate with Terraform Cloud.
   * We recommend omitting the token from the configuration, and instead using terraform login or manually configuring credentials in the CLI config file.
   */
  readonly token?: string;
}

/**
 * A cloud workspace can either be a single named workspace, or a list of tagged workspaces.
 */
export abstract class CloudWorkspace {
  public abstract toTerraform(): any;
}

/**
 * The name of a single Terraform Cloud workspace.
 * You will only be able to use the workspace specified in the configuration with this working directory, and cannot manage workspaces from the CLI (e.g. terraform workspace select or terraform workspace new).
 */
export class NamedCloudWorkspace extends CloudWorkspace {
  public constructor(public name: string) {
    super();
  }
  public toTerraform(): any {
    return {
      name: this.name,
    };
  }
}

/**
 *  A set of Terraform Cloud workspace tags. You will be able to use this working directory with any workspaces that have all of the specified tags, and can use the terraform workspace commands to switch between them or create new workspaces. New workspaces will automatically have the specified tags. This option conflicts with name.
 */
export class TaggedCloudWorkspaces extends CloudWorkspace {
  public constructor(public tags: string[]) {
    super();
  }
  public toTerraform(): any {
    return {
      tags: Fn.toset(this.tags),
    };
  }
}
