import { ITerraformBackend } from '../terraform-backend';

export class SwiftBackend implements ITerraformBackend {
    readonly name: string = "swift";
    authUrl?: string;
    cloud?: string;
    container: string;
    stateName?: string;
    userName?: string;
    userId?: string;
    password?: string;
    applicationCredentialId?: string;
    applicationCredentialName?: string;
    applicationCredentialSecret?: string;
    token?: string;
    regionName?: string;
    tenantId?: string;
    tenantName?: string;
    domainId?: string;
    domainName?: string;
    userDomainName?: string;
    userDomainId?: string;
    projectDomainName?: string;
    defaultDomain?: string;
    insecure?: boolean;
    cacertFile?: string;
    cert?: string;
    key?: string;
    archiveContainer?: string;
    expireAfter?: string;

    public constructor(options: SwiftBackendProps) {
        this.authUrl = options.authUrl;
        this.cloud = options.cloud;
        this.container = options.container;
        this.stateName = options.stateName;
        this.userName = options.userName;
        this.userId = options.userId;
        this.password = options.password;
        this.applicationCredentialId = options.applicationCredentialId;
        this.applicationCredentialName = options.applicationCredentialName;
        this.applicationCredentialSecret = options.applicationCredentialSecret;
        this.token = options.token;
        this.regionName = options.regionName;
        this.tenantId = options.tenantId;
        this.tenantName = options.tenantName;
        this.domainId = options.domainId;
        this.domainName = options.domainName;
        this.userDomainName = options.userDomainName;
        this.userDomainId = options.userDomainId;
        this.projectDomainName = options.projectDomainName;
        this.defaultDomain = options.defaultDomain;
        this.insecure = options.insecure;
        this.cacertFile = options.cacertFile;
        this.cert = options.cert;
        this.key = options.key;
        this.archiveContainer = options.archiveContainer;
        this.expireAfter = options.expireAfter;
    }
}

export interface SwiftBackendProps {
    readonly authUrl?: string;
    readonly cloud?: string;
    readonly container: string;
    readonly stateName?: string;
    readonly userName?: string;
    readonly userId?: string;
    readonly password?: string;
    readonly applicationCredentialId?: string;
    readonly applicationCredentialName?: string;
    readonly applicationCredentialSecret?: string;
    readonly token?: string;
    readonly regionName?: string;
    readonly tenantId?: string;
    readonly tenantName?: string;
    readonly domainId?: string;
    readonly domainName?: string;
    readonly userDomainName?: string;
    readonly userDomainId?: string;
    readonly projectDomainName?: string;
    readonly defaultDomain?: string;
    readonly insecure?: boolean;
    readonly cacertFile?: string;
    readonly cert?: string;
    readonly key?: string;
    readonly archiveContainer?: string;
    readonly expireAfter?: string;
}