import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#deliver_logs_permission_arn Ec2FlowLog#deliver_logs_permission_arn}
    */
    readonly deliverLogsPermissionArn?: string;
    /**
    * Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group or an Amazon S3 bucket. The value specified for this parameter depends on the value specified for LogDestinationType.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#log_destination Ec2FlowLog#log_destination}
    */
    readonly logDestination?: string;
    /**
    * Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#log_destination_type Ec2FlowLog#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * The fields to include in the flow log record, in the order in which they should appear.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#log_format Ec2FlowLog#log_format}
    */
    readonly logFormat?: string;
    /**
    * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3, do not specify DeliverLogsPermissionArn or LogGroupName.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#log_group_name Ec2FlowLog#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#max_aggregation_interval Ec2FlowLog#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * The ID of the subnet, network interface, or VPC for which you want to create a flow log.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#resource_id Ec2FlowLog#resource_id}
    */
    readonly resourceId: string;
    /**
    * The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#resource_type Ec2FlowLog#resource_type}
    */
    readonly resourceType: string;
    /**
    * The tags to apply to the flow logs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#tags Ec2FlowLog#tags}
    */
    readonly tags?: Ec2FlowLogTags[];
    /**
    * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#traffic_type Ec2FlowLog#traffic_type}
    */
    readonly trafficType: string;
}
export interface Ec2FlowLogTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#key Ec2FlowLog#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html#value Ec2FlowLog#value}
    */
    readonly value: string;
}
export declare function ec2FlowLogTagsToTerraform(struct?: Ec2FlowLogTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html awscc_ec2_flow_log}
*/
export declare class Ec2FlowLog extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html awscc_ec2_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FlowLogConfig
    */
    constructor(scope: Construct, id: string, config: Ec2FlowLogConfig);
    private _deliverLogsPermissionArn?;
    get deliverLogsPermissionArn(): string;
    set deliverLogsPermissionArn(value: string);
    resetDeliverLogsPermissionArn(): void;
    get deliverLogsPermissionArnInput(): string | undefined;
    get id(): string;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string | undefined;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string | undefined;
    private _logFormat?;
    get logFormat(): string;
    set logFormat(value: string);
    resetLogFormat(): void;
    get logFormatInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _maxAggregationInterval?;
    get maxAggregationInterval(): number;
    set maxAggregationInterval(value: number);
    resetMaxAggregationInterval(): void;
    get maxAggregationIntervalInput(): number | undefined;
    private _resourceId;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    private _resourceType;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string;
    private _tags?;
    get tags(): Ec2FlowLogTags[];
    set tags(value: Ec2FlowLogTags[]);
    resetTags(): void;
    get tagsInput(): Ec2FlowLogTags[] | undefined;
    private _trafficType;
    get trafficType(): string;
    set trafficType(value: string);
    get trafficTypeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
