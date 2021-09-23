// https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ec2FlowLogTagsToTerraform(struct?: Ec2FlowLogTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html awscc_ec2_flow_log}
*/
export class Ec2FlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_flow_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_flow_log.html awscc_ec2_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2FlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2FlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deliverLogsPermissionArn = config.deliverLogsPermissionArn;
    this._logDestination = config.logDestination;
    this._logDestinationType = config.logDestinationType;
    this._logFormat = config.logFormat;
    this._logGroupName = config.logGroupName;
    this._maxAggregationInterval = config.maxAggregationInterval;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._tags = config.tags;
    this._trafficType = config.trafficType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deliver_logs_permission_arn - computed: true, optional: true, required: false
  private _deliverLogsPermissionArn?: string;
  public get deliverLogsPermissionArn() {
    return this.getStringAttribute('deliver_logs_permission_arn');
  }
  public set deliverLogsPermissionArn(value: string) {
    this._deliverLogsPermissionArn = value;
  }
  public resetDeliverLogsPermissionArn() {
    this._deliverLogsPermissionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverLogsPermissionArnInput() {
    return this._deliverLogsPermissionArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_destination - computed: true, optional: true, required: false
  private _logDestination?: string;
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination
  }

  // log_destination_type - computed: true, optional: true, required: false
  private _logDestinationType?: string;
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }
  public set logDestinationType(value: string) {
    this._logDestinationType = value;
  }
  public resetLogDestinationType() {
    this._logDestinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationTypeInput() {
    return this._logDestinationType
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string;
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string;
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // max_aggregation_interval - computed: true, optional: true, required: false
  private _maxAggregationInterval?: number;
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }
  public set maxAggregationInterval(value: number) {
    this._maxAggregationInterval = value;
  }
  public resetMaxAggregationInterval() {
    this._maxAggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAggregationIntervalInput() {
    return this._maxAggregationInterval
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2FlowLogTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2FlowLogTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType: string;
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deliver_logs_permission_arn: cdktf.stringToTerraform(this._deliverLogsPermissionArn),
      log_destination: cdktf.stringToTerraform(this._logDestination),
      log_destination_type: cdktf.stringToTerraform(this._logDestinationType),
      log_format: cdktf.stringToTerraform(this._logFormat),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      max_aggregation_interval: cdktf.numberToTerraform(this._maxAggregationInterval),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tags: cdktf.listMapper(ec2FlowLogTagsToTerraform)(this._tags),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
    };
  }
}
