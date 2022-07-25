import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class HttpBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: HttpBackendProps) {
    super(scope, "backend", "http");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateHttp(scope, name, this.props);
  }
}

export class DataTerraformRemoteStateHttp extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateHttpConfig
  ) {
    super(scope, id, "http", config);
  }
}
/**
 * Stores the state using a simple REST client.
 *
 * State will be fetched via GET, updated via POST, and purged with DELETE.
 * The method used for updating is configurable.
 *
 * This backend optionally supports state locking.
 * When locking support is enabled it will use LOCK and UNLOCK requests providing the lock info in the body.
 * The endpoint should return a 423: Locked or 409: Conflict with the holding lock info when
 * it's already taken, 200: OK for success. Any other status will be considered an error.
 * The ID of the holding lock info will be added as a query parameter to state updates requests.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/http
 */
export interface HttpBackendProps {
  /**
   * (Required) The address of the REST endpoint
   */
  readonly address: string;
  /**
   * (Optional) HTTP method to use when updating state. Defaults to POST.
   */
  readonly updateMethod?: string;
  /**
   * (Optional) The address of the lock REST endpoint. Defaults to disabled.
   */
  readonly lockAddress?: string;
  /**
   * (Optional) The HTTP method to use when locking. Defaults to LOCK.
   */
  readonly lockMethod?: string;
  /**
   * (Optional) The address of the unlock REST endpoint. Defaults to disabled.
   */
  readonly unlockAddress?: string;
  /**
   * (Optional) The HTTP method to use when unlocking. Defaults to UNLOCK.
   */
  readonly unlockMethod?: string;
  /**
   * (Optional) The username for HTTP basic authentication
   */
  readonly username?: string;
  /**
   * (Optional) The password for HTTP basic authentication
   */
  readonly password?: string;
  /**
   * (Optional) Whether to skip TLS verification. Defaults to false.
   */
  readonly skipCertVerification?: boolean;
  /**
   * (Optional) The number of HTTP request retries. Defaults to 2.
   */
  readonly retryMax?: number;
  /**
   * (Optional) The minimum time in seconds to wait between HTTP request attempts. Defaults to 1.
   */
  readonly retryWaitMin?: number;
  /**
   * (Optional) The maximum time in seconds to wait between HTTP request attempts. Defaults to 30.
   */
  readonly retryWaitMax?: number;
}

export interface DataTerraformRemoteStateHttpConfig
  extends DataTerraformRemoteStateConfig,
    HttpBackendProps {}
