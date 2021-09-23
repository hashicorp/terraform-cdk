import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRdsDbProxyTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html#id DataAwsccRdsDbProxyTargetGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo extends cdktf.ComplexComputedList {
    get connectionBorrowTimeout(): number;
    get initQuery(): string;
    get maxConnectionsPercent(): number;
    get maxIdleConnectionsPercent(): number;
    get sessionPinningFilters(): string[];
}
export declare function dataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfoToTerraform(struct?: DataAwsccRdsDbProxyTargetGroupConnectionPoolConfigurationInfo): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group}
*/
export declare class DataAwsccRdsDbProxyTargetGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/rds_db_proxy_target_group.html awscc_rds_db_proxy_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRdsDbProxyTargetGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRdsDbProxyTargetGroupConfig);
    get connectionPoolConfigurationInfo(): any;
    get dbClusterIdentifiers(): string[];
    get dbInstanceIdentifiers(): string[];
    get dbProxyName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get targetGroupArn(): string;
    get targetGroupName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
