// https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRdsDbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html#id DataAwsccRdsDbProxy#id}
  */
  readonly id: string;
}
export class DataAwsccRdsDbProxyAuth extends cdktf.ComplexComputedList {

  // auth_scheme - computed: true, optional: false, required: false
  public get authScheme() {
    return this.getStringAttribute('auth_scheme');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // iam_auth - computed: true, optional: false, required: false
  public get iamAuth() {
    return this.getStringAttribute('iam_auth');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export function dataAwsccRdsDbProxyAuthToTerraform(struct?: DataAwsccRdsDbProxyAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_scheme: cdktf.stringToTerraform(struct!.authScheme),
    description: cdktf.stringToTerraform(struct!.description),
    iam_auth: cdktf.stringToTerraform(struct!.iamAuth),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export class DataAwsccRdsDbProxyTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccRdsDbProxyTagsToTerraform(struct?: DataAwsccRdsDbProxyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html awscc_rds_db_proxy}
*/
export class DataAwsccRdsDbProxy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_db_proxy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy.html awscc_rds_db_proxy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRdsDbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }

  // db_proxy_arn - computed: true, optional: false, required: false
  public get dbProxyArn() {
    return this.getStringAttribute('db_proxy_arn');
  }

  // db_proxy_name - computed: true, optional: false, required: false
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
  }

  // debug_logging - computed: true, optional: false, required: false
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // engine_family - computed: true, optional: false, required: false
  public get engineFamily() {
    return this.getStringAttribute('engine_family');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // idle_client_timeout - computed: true, optional: false, required: false
  public get idleClientTimeout() {
    return this.getNumberAttribute('idle_client_timeout');
  }

  // require_tls - computed: true, optional: false, required: false
  public get requireTls() {
    return this.getBooleanAttribute('require_tls');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_security_group_ids - computed: true, optional: false, required: false
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }

  // vpc_subnet_ids - computed: true, optional: false, required: false
  public get vpcSubnetIds() {
    return this.getListAttribute('vpc_subnet_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
