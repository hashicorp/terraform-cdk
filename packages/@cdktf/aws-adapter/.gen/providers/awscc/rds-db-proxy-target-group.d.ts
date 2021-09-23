import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function rdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(struct?: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group}
*/
export declare class RdsDbProxyTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsDbProxyTargetGroupConfig
    */
    constructor(scope: Construct, id: string, config: RdsDbProxyTargetGroupConfig);
    private _connectionPoolConfigurationInfo?;
    get connectionPoolConfigurationInfo(): RdsDbProxyTargetGroupConnectionPoolConfigurationInfo;
    set connectionPoolConfigurationInfo(value: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo);
    resetConnectionPoolConfigurationInfo(): void;
    get connectionPoolConfigurationInfoInput(): RdsDbProxyTargetGroupConnectionPoolConfigurationInfo | undefined;
    private _dbClusterIdentifiers?;
    get dbClusterIdentifiers(): string[];
    set dbClusterIdentifiers(value: string[]);
    resetDbClusterIdentifiers(): void;
    get dbClusterIdentifiersInput(): string[] | undefined;
    private _dbInstanceIdentifiers?;
    get dbInstanceIdentifiers(): string[];
    set dbInstanceIdentifiers(value: string[]);
    resetDbInstanceIdentifiers(): void;
    get dbInstanceIdentifiersInput(): string[] | undefined;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get id(): string;
    get targetGroupArn(): string;
    private _targetGroupName;
    get targetGroupName(): string;
    set targetGroupName(value: string);
    get targetGroupNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
