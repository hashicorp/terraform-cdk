import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class AzurermBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: AzurermBackendProps) {
    super(scope, "backend", "azurerm");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    _scope: Construct,
    _name: string,
    _fromStack: string
  ): TerraformRemoteState {
    throw new Error(
      "The AzurermBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateAzurerm extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateAzurermConfig
  ) {
    super(scope, id, "azurerm", config);
  }
}

export interface AzurermBackendProps {
  readonly storageAccountName: string;
  readonly containerName: string;
  readonly key: string;
  readonly environment?: string;
  readonly endpoint?: string;
  readonly subscriptionId?: string;
  readonly tenantId?: string;
  readonly msiEndpoint?: string;
  readonly useMsi?: boolean;
  readonly sasToken?: string;
  readonly accessKey?: string;
  readonly resourceGroupName?: string;
  readonly clientId?: string;
  readonly clientSecret?: string;
}

export interface DataTerraformRemoteStateAzurermConfig
  extends DataTerraformRemoteStateConfig,
    AzurermBackendProps {}
