// https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsDbProxyTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}
  */
  readonly connectionPoolConfigurationInfo?: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}
  */
  readonly dbClusterIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}
  */
  readonly dbInstanceIdentifiers?: string[];
  /**
  * The identifier for the proxy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * The identifier for the DBProxyTargetGroup
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#target_group_name RdsDbProxyTargetGroup#target_group_name}
  */
  readonly targetGroupName: string;
}
export interface RdsDbProxyTargetGroupConnectionPoolConfigurationInfo {
  /**
  * The number of seconds for a proxy to wait for a connection to become available in the connection pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}
  */
  readonly connectionBorrowTimeout?: number;
  /**
  * One or more SQL statements for the proxy to run when opening each new database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#init_query RdsDbProxyTargetGroup#init_query}
  */
  readonly initQuery?: string;
  /**
  * The maximum size of the connection pool for each target in a target group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}
  */
  readonly maxConnectionsPercent?: number;
  /**
  * Controls how actively the proxy closes idle database connections in the connection pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}
  */
  readonly maxIdleConnectionsPercent?: number;
  /**
  * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}
  */
  readonly sessionPinningFilters?: string[];
}

export function rdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(struct?: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group}
*/
export class RdsDbProxyTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_db_proxy_target_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbProxyTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbProxyTargetGroupConfig) {
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
    this._connectionPoolConfigurationInfo = config.connectionPoolConfigurationInfo;
    this._dbClusterIdentifiers = config.dbClusterIdentifiers;
    this._dbInstanceIdentifiers = config.dbInstanceIdentifiers;
    this._dbProxyName = config.dbProxyName;
    this._targetGroupName = config.targetGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_pool_configuration_info - computed: false, optional: true, required: false
  private _connectionPoolConfigurationInfo?: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
  public get connectionPoolConfigurationInfo() {
    return this.interpolationForAttribute('connection_pool_configuration_info') as any;
  }
  public set connectionPoolConfigurationInfo(value: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo ) {
    this._connectionPoolConfigurationInfo = value;
  }
  public resetConnectionPoolConfigurationInfo() {
    this._connectionPoolConfigurationInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolConfigurationInfoInput() {
    return this._connectionPoolConfigurationInfo
  }

  // db_cluster_identifiers - computed: false, optional: true, required: false
  private _dbClusterIdentifiers?: string[];
  public get dbClusterIdentifiers() {
    return this.getListAttribute('db_cluster_identifiers');
  }
  public set dbClusterIdentifiers(value: string[] ) {
    this._dbClusterIdentifiers = value;
  }
  public resetDbClusterIdentifiers() {
    this._dbClusterIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifiersInput() {
    return this._dbClusterIdentifiers
  }

  // db_instance_identifiers - computed: false, optional: true, required: false
  private _dbInstanceIdentifiers?: string[];
  public get dbInstanceIdentifiers() {
    return this.getListAttribute('db_instance_identifiers');
  }
  public set dbInstanceIdentifiers(value: string[] ) {
    this._dbInstanceIdentifiers = value;
  }
  public resetDbInstanceIdentifiers() {
    this._dbInstanceIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifiersInput() {
    return this._dbInstanceIdentifiers
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }

  // target_group_name - computed: false, optional: false, required: true
  private _targetGroupName: string;
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_pool_configuration_info: rdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(this._connectionPoolConfigurationInfo),
      db_cluster_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._dbClusterIdentifiers),
      db_instance_identifiers: cdktf.listMapper(cdktf.stringToTerraform)(this._dbInstanceIdentifiers),
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      target_group_name: cdktf.stringToTerraform(this._targetGroupName),
    };
  }
}
