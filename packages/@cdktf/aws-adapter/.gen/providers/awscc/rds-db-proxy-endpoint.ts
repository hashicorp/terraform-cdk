// https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsDbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#db_proxy_endpoint_name RdsDbProxyEndpoint#db_proxy_endpoint_name}
  */
  readonly dbProxyEndpointName: string;
  /**
  * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#db_proxy_name RdsDbProxyEndpoint#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#tags RdsDbProxyEndpoint#tags}
  */
  readonly tags?: RdsDbProxyEndpointTags[];
  /**
  * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#target_role RdsDbProxyEndpoint#target_role}
  */
  readonly targetRole?: string;
  /**
  * VPC security group IDs to associate with the new DB proxy endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#vpc_security_group_ids RdsDbProxyEndpoint#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * VPC subnet IDs to associate with the new DB proxy endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#vpc_subnet_ids RdsDbProxyEndpoint#vpc_subnet_ids}
  */
  readonly vpcSubnetIds: string[];
}
export interface RdsDbProxyEndpointTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#key RdsDbProxyEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html#value RdsDbProxyEndpoint#value}
  */
  readonly value?: string;
}

export function rdsDbProxyEndpointTagsToTerraform(struct?: RdsDbProxyEndpointTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint}
*/
export class RdsDbProxyEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_db_proxy_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_endpoint.html awscc_rds_db_proxy_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbProxyEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbProxyEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_proxy_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbProxyEndpointName = config.dbProxyEndpointName;
    this._dbProxyName = config.dbProxyName;
    this._tags = config.tags;
    this._targetRole = config.targetRole;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_proxy_endpoint_arn - computed: true, optional: false, required: false
  public get dbProxyEndpointArn() {
    return this.getStringAttribute('db_proxy_endpoint_arn');
  }

  // db_proxy_endpoint_name - computed: false, optional: false, required: true
  private _dbProxyEndpointName: string;
  public get dbProxyEndpointName() {
    return this.getStringAttribute('db_proxy_endpoint_name');
  }
  public set dbProxyEndpointName(value: string) {
    this._dbProxyEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointNameInput() {
    return this._dbProxyEndpointName
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: RdsDbProxyEndpointTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: RdsDbProxyEndpointTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_role - computed: true, optional: true, required: false
  private _targetRole?: string;
  public get targetRole() {
    return this.getStringAttribute('target_role');
  }
  public set targetRole(value: string) {
    this._targetRole = value;
  }
  public resetTargetRole() {
    this._targetRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleInput() {
    return this._targetRole
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
      db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      tags: cdktf.listMapper(rdsDbProxyEndpointTagsToTerraform)(this._tags),
      target_role: cdktf.stringToTerraform(this._targetRole),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSubnetIds),
    };
  }
}
