import { ITerraformBackend } from '../terraform-backend';

export class AzurermBackend implements ITerraformBackend {
    readonly name: string = "azurerm";
    storageAccountName: string;
    containerName: string;
    key: string;
    environment?: string;
    endpoint?: string;
    subscriptionId?: string;
    tenantId?: string;
    msiEndpoint?: string;
    useMsi?: boolean;
    sasToken?: string;
    accessKey?: string;
    resourceGroupName?: string;
    clientId?: string;
    clientSecret?: string;

    public constructor(options: AzurermBackendProps) {
        this.storageAccountName = options.storageAccountName;
        this.containerName = options.containerName;
        this.key = options.key;
        this.environment = options.environment;
        this.endpoint = options.endpoint;
        this.subscriptionId = options.subscriptionId;
        this.tenantId = options.tenantId;
        this.msiEndpoint = options.msiEndpoint;
        this.useMsi = options.useMsi;
        this.sasToken = options.sasToken;
        this.accessKey = options.accessKey;
        this.resourceGroupName = options.resourceGroupName;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
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