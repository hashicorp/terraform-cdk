import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class GcsBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: GcsBackendProps) {
    super(scope, "backend", "gcs");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateGcs(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

export class DataTerraformRemoteStateGcs extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateGcsConfig
  ) {
    super(scope, id, "gcs", config);
  }
}
/**
 * Stores the state as an object in a configurable prefix in a pre-existing bucket
 * on Google Cloud Storage (GCS). The bucket must exist prior to configuring the backend.
 *
 * This backend supports state locking.
 *
 * Warning! It is highly recommended that you enable Object Versioning on the GCS bucket
 * to allow for state recovery in the case of accidental deletions and human error.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/gcs
 */
export interface GcsBackendProps {
  /**
   * (Required) The name of the GCS bucket. This name must be globally unique.
   */
  readonly bucket: string;
  /**
   * (Optional) Local path to Google Cloud Platform account credentials in JSON format.
   * If unset, Google Application Default Credentials are used.
   * The provided credentials must have Storage Object Admin role on the bucket.
   *
   * Warning: if using the Google Cloud Platform provider as well,
   * it will also pick up the GOOGLE_CREDENTIALS environment variable.
   */
  readonly credentials?: string;
  /**
   * (Optional) A temporary [OAuth 2.0 access token] obtained from the Google Authorization server,
   * i.e. the Authorization: Bearer token used to authenticate HTTP requests to GCP APIs.
   * This is an alternative to credentials.
   * If both are specified, access_token will be used over the credentials field.
   */
  readonly accessToken?: string;
  /**
   * (Optional) GCS prefix inside the bucket.
   * Named states for workspaces are stored in an object called <prefix>/<name>.tfstate.
   */
  readonly prefix?: string;
  /**
   * (Optional) A 32 byte base64 encoded 'customer supplied encryption key' used to encrypt all state.
   */
  readonly encryptionKey?: string;
  /**
   * (Optional) The service account to impersonate for accessing the State Bucket.
   * You must have roles/iam.serviceAccountTokenCreator role on that account for the impersonation to succeed.
   * If you are using a delegation chain, you can specify that using the impersonate_service_account_delegates field.
   * Alternatively, this can be specified using the GOOGLE_IMPERSONATE_SERVICE_ACCOUNT environment variable.
   */
  readonly impersonateServiceAccount?: string;
  /**
   * (Optional) The delegation chain for an impersonating a service account
   */
  readonly impersonateServiceAccountDelegates?: string[];
}

export interface DataTerraformRemoteStateGcsConfig
  extends DataTerraformRemoteStateConfig,
    GcsBackendProps {}
