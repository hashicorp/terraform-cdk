// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

/**
 * @deprecated CDK for Terraform no longer supports the artifactory backend. Terraform deprecated artifactory in v1.2.3 and removed it in v1.3.
 */
export class ArtifactoryBackend extends TerraformBackend {
  constructor(
    scope: Construct,
    private readonly props: ArtifactoryBackendConfig
  ) {
    super(scope, "backend", "artifactory");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateArtifactory(scope, name, this.props);
  }
}

/**
 * @deprecated CDK for Terraform no longer supports the artifactory backend. Terraform deprecated artifactory in v1.2.3 and removed it in v1.3.
 */
export class DataTerraformRemoteStateArtifactory extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateArtifactoryConfig
  ) {
    super(scope, id, "artifactory", config);
  }
}
/**
 * Stores the state as an artifact in a given repository in Artifactory.
 * Generic HTTP repositories are supported, and state from different configurations
 * may be kept at different subpaths within the repository.
 *
 * Note: The URL must include the path to the Artifactory installation.
 * It will likely end in /artifactory.
 *
 * This backend does not support state locking.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/artifactory
 *
 * @deprecated CDK for Terraform no longer supports the artifactory backend. Terraform deprecated artifactory in v1.2.3 and removed it in v1.3.
 */
export interface ArtifactoryBackendConfig {
  /**
   * (Required) - The username
   */
  readonly username: string;
  /**
   * (Required) - The password
   */
  readonly password: string;
  /**
   * (Required) - The URL.
   *
   * Note that this is the base url to artifactory not the full repo and subpath.
   */
  readonly url: string;
  /**
   * (Required) - The repository name
   */
  readonly repo: string;
  /**
   * (Required) - Path within the repository
   */
  readonly subpath: string;
}

/**
 * @deprecated CDK for Terraform no longer supports the artifactory backend. Terraform deprecated artifactory in v1.2.3 and removed it in v1.3.
 */
export interface DataTerraformRemoteStateArtifactoryConfig
  extends DataTerraformRemoteStateConfig,
    ArtifactoryBackendConfig {}
