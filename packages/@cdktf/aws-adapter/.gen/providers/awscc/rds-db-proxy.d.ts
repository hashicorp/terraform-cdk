import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsDbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The authorization mechanism that the proxy uses.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#auth RdsDbProxy#auth}
    */
    readonly auth: RdsDbProxyAuth[];
    /**
    * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#db_proxy_name RdsDbProxy#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Whether the proxy includes detailed information about SQL statements in its logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#debug_logging RdsDbProxy#debug_logging}
    */
    readonly debugLogging?: boolean | cdktf.IResolvable;
    /**
    * The kinds of databases that the proxy can connect to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#engine_family RdsDbProxy#engine_family}
    */
    readonly engineFamily: string;
    /**
    * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#idle_client_timeout RdsDbProxy#idle_client_timeout}
    */
    readonly idleClientTimeout?: number;
    /**
    * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#require_tls RdsDbProxy#require_tls}
    */
    readonly requireTls?: boolean | cdktf.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#role_arn RdsDbProxy#role_arn}
    */
    readonly roleArn: string;
    /**
    * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#tags RdsDbProxy#tags}
    */
    readonly tags?: RdsDbProxyTags[];
    /**
    * VPC security group IDs to associate with the new proxy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * VPC subnet IDs to associate with the new proxy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
}
export interface RdsDbProxyAuth {
    /**
    * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#auth_scheme RdsDbProxy#auth_scheme}
    */
    readonly authScheme?: string;
    /**
    * A user-specified description about the authentication used by a proxy to log in as a specific database user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#description RdsDbProxy#description}
    */
    readonly description?: string;
    /**
    * Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#iam_auth RdsDbProxy#iam_auth}
    */
    readonly iamAuth?: string;
    /**
    * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#secret_arn RdsDbProxy#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The name of the database user to which the proxy connects.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#user_name RdsDbProxy#user_name}
    */
    readonly userName?: string;
}
export declare function rdsDbProxyAuthToTerraform(struct?: RdsDbProxyAuth): any;
export interface RdsDbProxyTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#key RdsDbProxy#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html#value RdsDbProxy#value}
    */
    readonly value?: string;
}
export declare function rdsDbProxyTagsToTerraform(struct?: RdsDbProxyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html awscc_rds_db_proxy}
*/
export declare class RdsDbProxy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html awscc_rds_db_proxy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsDbProxyConfig
    */
    constructor(scope: Construct, id: string, config: RdsDbProxyConfig);
    private _auth;
    get auth(): RdsDbProxyAuth[];
    set auth(value: RdsDbProxyAuth[]);
    get authInput(): RdsDbProxyAuth[];
    get dbProxyArn(): string;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    private _debugLogging?;
    get debugLogging(): boolean | cdktf.IResolvable;
    set debugLogging(value: boolean | cdktf.IResolvable);
    resetDebugLogging(): void;
    get debugLoggingInput(): boolean | cdktf.IResolvable | undefined;
    get endpoint(): string;
    private _engineFamily;
    get engineFamily(): string;
    set engineFamily(value: string);
    get engineFamilyInput(): string;
    get id(): string;
    private _idleClientTimeout?;
    get idleClientTimeout(): number;
    set idleClientTimeout(value: number);
    resetIdleClientTimeout(): void;
    get idleClientTimeoutInput(): number | undefined;
    private _requireTls?;
    get requireTls(): boolean | cdktf.IResolvable;
    set requireTls(value: boolean | cdktf.IResolvable);
    resetRequireTls(): void;
    get requireTlsInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tags?;
    get tags(): RdsDbProxyTags[];
    set tags(value: RdsDbProxyTags[]);
    resetTags(): void;
    get tagsInput(): RdsDbProxyTags[] | undefined;
    get vpcId(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _vpcSubnetIds;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
