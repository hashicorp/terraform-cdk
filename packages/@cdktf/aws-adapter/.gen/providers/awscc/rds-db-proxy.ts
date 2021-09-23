// https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function rdsDbProxyAuthToTerraform(struct?: RdsDbProxyAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

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

export function rdsDbProxyTagsToTerraform(struct?: RdsDbProxyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html awscc_rds_db_proxy}
*/
export class RdsDbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_db_proxy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy.html awscc_rds_db_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_proxy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auth = config.auth;
    this._dbProxyName = config.dbProxyName;
    this._debugLogging = config.debugLogging;
    this._engineFamily = config.engineFamily;
    this._idleClientTimeout = config.idleClientTimeout;
    this._requireTls = config.requireTls;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: false, required: true
  private _auth: RdsDbProxyAuth[];
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: RdsDbProxyAuth[]) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // db_proxy_arn - computed: true, optional: false, required: false
  public get dbProxyArn() {
    return this.getStringAttribute('db_proxy_arn');
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName: string;
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyNameInput() {
    return this._dbProxyName
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean | cdktf.IResolvable;
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging');
  }
  public set debugLogging(value: boolean | cdktf.IResolvable ) {
    this._debugLogging = value;
  }
  public resetDebugLogging() {
    this._debugLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLoggingInput() {
    return this._debugLogging
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine_family - computed: false, optional: false, required: true
  private _engineFamily: string;
  public get engineFamily() {
    return this.getStringAttribute('engine_family');
  }
  public set engineFamily(value: string) {
    this._engineFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFamilyInput() {
    return this._engineFamily
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_client_timeout - computed: false, optional: true, required: false
  private _idleClientTimeout?: number;
  public get idleClientTimeout() {
    return this.getNumberAttribute('idle_client_timeout');
  }
  public set idleClientTimeout(value: number ) {
    this._idleClientTimeout = value;
  }
  public resetIdleClientTimeout() {
    this._idleClientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleClientTimeoutInput() {
    return this._idleClientTimeout
  }

  // require_tls - computed: false, optional: true, required: false
  private _requireTls?: boolean | cdktf.IResolvable;
  public get requireTls() {
    return this.getBooleanAttribute('require_tls');
  }
  public set requireTls(value: boolean | cdktf.IResolvable ) {
    this._requireTls = value;
  }
  public resetRequireTls() {
    this._requireTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInput() {
    return this._requireTls
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: RdsDbProxyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: RdsDbProxyTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_security_group_ids - computed: false, optional: true, required: false
  private _vpcSecurityGroupIds?: string[];
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[] ) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds
  }

  // vpc_subnet_ids - computed: false, optional: false, required: true
  private _vpcSubnetIds: string[];
  public get vpcSubnetIds() {
    return this.getListAttribute('vpc_subnet_ids');
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIdsInput() {
    return this._vpcSubnetIds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.listMapper(rdsDbProxyAuthToTerraform)(this._auth),
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      debug_logging: cdktf.booleanToTerraform(this._debugLogging),
      engine_family: cdktf.stringToTerraform(this._engineFamily),
      idle_client_timeout: cdktf.numberToTerraform(this._idleClientTimeout),
      require_tls: cdktf.booleanToTerraform(this._requireTls),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(rdsDbProxyTagsToTerraform)(this._tags),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
    };
  }
}
