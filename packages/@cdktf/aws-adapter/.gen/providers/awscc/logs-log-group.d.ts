import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogsLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#kms_key_id LogsLogGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#log_group_name LogsLogGroup#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html#retention_in_days LogsLogGroup#retention_in_days}
    */
    readonly retentionInDays?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html awscc_logs_log_group}
*/
export declare class LogsLogGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_log_group.html awscc_logs_log_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogsLogGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LogsLogGroupConfig);
    get arn(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _retentionInDays?;
    get retentionInDays(): number;
    set retentionInDays(value: number);
    resetRetentionInDays(): void;
    get retentionInDaysInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
