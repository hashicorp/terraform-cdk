// https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRdsDbProxyTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html#id DataAwsccRdsDbProxyTargetGroup#id}
  */
  readonly id: string;
}
export class DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo extends cdktf.ComplexComputedList {

  // connection_borrow_timeout - computed: true, optional: false, required: false
  public get connectionBorrowTimeout() {
    return this.getNumberAttribute('connection_borrow_timeout');
  }

  // init_query - computed: true, optional: false, required: false
  public get initQuery() {
    return this.getStringAttribute('init_query');
  }

  // max_connections_percent - computed: true, optional: false, required: false
  public get maxConnectionsPercent() {
    return this.getNumberAttribute('max_connections_percent');
  }

  // max_idle_connections_percent - computed: true, optional: false, required: false
  public get maxIdleConnectionsPercent() {
    return this.getNumberAttribute('max_idle_connections_percent');
  }

  // session_pinning_filters - computed: true, optional: false, required: false
  public get sessionPinningFilters() {
    return this.getListAttribute('session_pinning_filters');
  }
}

export function dataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(struct?: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connection_borrow_timeout: cdktf.numberToTerraform(struct!.connectionBorrowTimeout),
    init_query: cdktf.stringToTerraform(struct!.initQuery),
    max_connections_percent: cdktf.numberToTerraform(struct!.maxConnectionsPercent),
    max_idle_connections_percent: cdktf.numberToTerraform(struct!.maxIdleConnectionsPercent),
    session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sessionPinningFilters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group}
*/
export class DataAwsccRdsDbProxyTargetGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_db_proxy_target_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRdsDbProxyTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_db_proxy_target_group',
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

  // connection_pool_configuration_info - computed: true, optional: false, required: false
  public get connectionPoolConfigurationInfo() {
    return this.interpolationForAttribute('connection_pool_configuration_info') as any;
  }

  // db_cluster_identifiers - computed: true, optional: false, required: false
  public get dbClusterIdentifiers() {
    return this.getListAttribute('db_cluster_identifiers');
  }

  // db_instance_identifiers - computed: true, optional: false, required: false
  public get dbInstanceIdentifiers() {
    return this.getListAttribute('db_instance_identifiers');
  }

  // db_proxy_name - computed: true, optional: false, required: false
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
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

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
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
