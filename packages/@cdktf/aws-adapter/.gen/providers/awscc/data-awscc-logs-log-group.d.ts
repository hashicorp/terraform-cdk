import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_group.html#id DataAwsccLogsLogGroup#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_group.html awscc_logs_log_group}
*/
export declare class DataAwsccLogsLogGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_log_group.html awscc_logs_log_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsLogGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLogsLogGroupConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get logGroupName(): string;
    get retentionInDays(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
