// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

// eslint-disable-next-line jsdoc/require-jsdoc
export class ConsulBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: ConsulBackendProps) {
    super(scope, "backend", "consul");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateConsul(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateConsul extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateConsulConfig
  ) {
    super(scope, id, "consul", config);
  }
}
/**
 * Stores the state in the Consul KV store at a given path.
 * This backend supports state locking.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/consul
 */
export interface ConsulBackendProps {
  /**
   * (Required) Path in the Consul KV store
   */
  readonly path: string;
  /**
   * (Required) Access token
   */
  readonly accessToken: string;
  /**
   * (Optional) DNS name and port of your Consul endpoint specified in the format dnsname:port.
   *  Defaults to the local agent HTTP listener.
   */
  readonly address?: string;
  /**
   * (Optional) Specifies what protocol to use when talking to the given address,either http or https.
   * SSL support can also be triggered by setting then environment variable CONSUL_HTTP_SSL to true.
   */
  readonly scheme?: string;
  /**
   * (Optional) The datacenter to use. Defaults to that of the agent.
   */
  readonly datacenter?: string;
  /**
   * (Optional) HTTP Basic Authentication credentials to be used when communicating with Consul,
   * in the format of either user or user:pass.
   */
  readonly httpAuth?: string;
  /**
   * (Optional) true to compress the state data using gzip,
   * or false (the default) to leave it uncompressed.
   */
  readonly gzip?: boolean;
  /**
   * (Optional) false to disable locking.
   * This defaults to true, but will require session permissions with Consul and
   * at least kv write permissions on $path/.lock to perform locking.
   */
  readonly lock?: boolean;
  /**
   * (Optional) A path to a PEM-encoded certificate authority
   * used to verify the remote agent's certificate.
   */
  readonly caFile?: string;
  /**
   * (Optional) A path to a PEM-encoded certificate provided to the remote agent;
   * requires use of key_file.
   */
  readonly certFile?: string;
  /**
   * (Optional) A path to a PEM-encoded private key, required if cert_file is specified.
   */
  readonly keyFile?: string;
}

export interface DataTerraformRemoteStateConsulConfig
  extends DataTerraformRemoteStateConfig,
    ConsulBackendProps {}
