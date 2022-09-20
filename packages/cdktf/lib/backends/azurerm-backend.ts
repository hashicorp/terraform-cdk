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
export class AzurermBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: AzurermBackendProps) {
    super(scope, "backend", "azurerm");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateAzurerm(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateAzurerm extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateAzurermConfig
  ) {
    super(scope, id, "azurerm", config);
  }
}
/**
 * Stores the state as a Blob with the given Key
 * within the Blob Container within the Blob Storage Account.
 *
 * This backend supports state locking and consistency checking
 * with Azure Blob Storage native capabilities.
 *
 * Note: By default the Azure Backend uses ADAL for authentication which is deprecated
 * in favour of MSAL - MSAL can be used by setting use_microsoft_graph to true.
 * The default for this will change in Terraform 1.2,
 * so that MSAL authentication is used by default.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/azurerm
 */
export interface AzurermBackendProps {
  /**
   * (Required) The Name of the Storage Account.
   */
  readonly storageAccountName: string;
  /**
   * (Required) The Name of the Storage Container within the Storage Account.
   */
  readonly containerName: string;
  /**
   * (Required) The name of the Blob used to retrieve/store Terraform's State file
   * inside the Storage Container.
   */
  readonly key: string;
  /**
   * (Optional) The Azure Environment which should be used.
   * This can also be sourced from the ARM_ENVIRONMENT environment variable.
   *  Possible values are public, china, german, stack and usgovernment. Defaults to public.
   */
  readonly environment?: string;
  /**
   * (Optional) The Custom Endpoint for Azure Resource Manager.
   * This can also be sourced from the ARM_ENDPOINT environment variable.
   *
   * NOTE: An endpoint should only be configured when using Azure Stack.
   */
  readonly endpoint?: string;
  /**
   * (Optional) The Subscription ID in which the Storage Account exists.
   * This can also be sourced from the ARM_SUBSCRIPTION_ID environment variable.
   */
  readonly subscriptionId?: string;
  /**
   * (Optional) The Tenant ID in which the Subscription exists.
   * This can also be sourced from the ARM_TENANT_ID environment variable.
   */
  readonly tenantId?: string;
  /**
   * (Optional) The path to a custom Managed Service Identity endpoint which is automatically
   * determined if not specified.
   * This can also be sourced from the ARM_MSI_ENDPOINT environment variable.
   */
  readonly msiEndpoint?: string;
  /**
   * (Optional) Should Managed Service Identity authentication be used?
   * This can also be sourced from the ARM_USE_MSI environment variable.
   */
  readonly useMsi?: boolean;
  /**
   * (Optional) The SAS Token used to access the Blob Storage Account.
   * This can also be sourced from the ARM_SAS_TOKEN environment variable.
   */
  readonly sasToken?: string;
  /**
   * access_key - (Optional) The Access Key used to access the Blob Storage Account.
   * This can also be sourced from the ARM_ACCESS_KEY environment variable.
   */
  readonly accessKey?: string;
  /**
   * (Required) The Name of the Resource Group in which the Storage Account exists.
   */
  readonly resourceGroupName?: string;
  /**
   * (Optional) The Client ID of the Service Principal.
   * This can also be sourced from the ARM_CLIENT_ID environment variable.
   */
  readonly clientId?: string;
  /**
   * (Optional) The Client Secret of the Service Principal.
   * This can also be sourced from the ARM_CLIENT_SECRET environment variable.
   */
  readonly clientSecret?: string;
}

export interface DataTerraformRemoteStateAzurermConfig
  extends DataTerraformRemoteStateConfig,
    AzurermBackendProps {}
