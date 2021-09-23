// https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2FlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html#id DataAwsccEc2FlowLog#id}
  */
  readonly id: string;
}
export class DataAwsccEc2FlowLogTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2FlowLogTagsToTerraform(struct?: DataAwsccEc2FlowLogTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html awscc_ec2_flow_log}
*/
export class DataAwsccEc2FlowLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_flow_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_flow_log.html awscc_ec2_flow_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2FlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2FlowLogConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deliver_logs_permission_arn - computed: true, optional: false, required: false
  public get deliverLogsPermissionArn() {
    return this.getStringAttribute('deliver_logs_permission_arn');
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

  // log_destination - computed: true, optional: false, required: false
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }

  // log_destination_type - computed: true, optional: false, required: false
  public get logDestinationType() {
    return this.getStringAttribute('log_destination_type');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // max_aggregation_interval - computed: true, optional: false, required: false
  public get maxAggregationInterval() {
    return this.getNumberAttribute('max_aggregation_interval');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
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
