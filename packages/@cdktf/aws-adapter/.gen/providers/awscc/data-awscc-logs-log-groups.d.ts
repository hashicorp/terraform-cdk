import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsLogGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_groups.html awscc_logs_log_groups}
*/
export declare class DataAwsccLogsLogGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_groups.html awscc_logs_log_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsLogGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLogsLogGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
