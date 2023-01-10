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
 * @deprecated CDK for Terraform no longer supports the manta backend. Terraform deprecated manta in v1.2.3 and removed it in v1.3.
 */
export class MantaBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: MantaBackendConfig) {
    super(scope, "backend", "manta");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateManta(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

/**
 * @deprecated CDK for Terraform no longer supports the manta backend. Terraform deprecated manta in v1.2.3 and removed it in v1.3.
 */
export class DataTerraformRemoteStateManta extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateMantaConfig
  ) {
    super(scope, id, "manta", config);
  }
}

/**
 * @deprecated CDK for Terraform no longer supports the manta backend. Terraform deprecated manta in v1.2.3 and removed it in v1.3.
 */
export interface MantaBackendConfig {
  readonly account: string;
  readonly user?: string;
  readonly url?: string;
  readonly keyMaterial?: string;
  readonly keyId: string;
  readonly insecureSkipTlsVerify?: boolean;
  readonly path: string;
  readonly objectName?: string;
}

/**
 * @deprecated CDK for Terraform no longer supports the manta backend. Terraform deprecated manta in v1.2.3 and removed it in v1.3.
 */
export interface DataTerraformRemoteStateMantaConfig
  extends DataTerraformRemoteStateConfig,
    MantaBackendConfig {}
