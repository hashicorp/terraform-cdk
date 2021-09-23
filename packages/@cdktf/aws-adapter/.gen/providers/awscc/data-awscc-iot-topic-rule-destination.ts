// https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotTopicRuleDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html#id DataAwsccIotTopicRuleDestination#id}
  */
  readonly id: string;
}
export class DataAwsccIotTopicRuleDestinationHttpUrlProperties extends cdktf.ComplexComputedList {

  // confirmation_url - computed: true, optional: false, required: false
  public get confirmationUrl() {
    return this.getStringAttribute('confirmation_url');
  }
}

export function dataAwsccIotTopicRuleDestinationHttpUrlPropertiesToTerraform(struct?: DataAwsccIotTopicRuleDestinationHttpUrlProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
  }
}

export class DataAwsccIotTopicRuleDestinationVpcProperties extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export function dataAwsccIotTopicRuleDestinationVpcPropertiesToTerraform(struct?: DataAwsccIotTopicRuleDestinationVpcProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html awscc_iot_topic_rule_destination}
*/
export class DataAwsccIotTopicRuleDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_topic_rule_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_topic_rule_destination.html awscc_iot_topic_rule_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotTopicRuleDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotTopicRuleDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_topic_rule_destination',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // http_url_properties - computed: true, optional: false, required: false
  public get httpUrlProperties() {
    return this.interpolationForAttribute('http_url_properties') as any;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // vpc_properties - computed: true, optional: false, required: false
  public get vpcProperties() {
    return this.interpolationForAttribute('vpc_properties') as any;
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
