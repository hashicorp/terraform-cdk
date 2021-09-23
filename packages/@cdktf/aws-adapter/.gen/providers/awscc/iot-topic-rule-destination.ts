// https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTopicRuleDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#http_url_properties IotTopicRuleDestination#http_url_properties}
  */
  readonly httpUrlProperties?: IotTopicRuleDestinationHttpUrlProperties;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#status IotTopicRuleDestination#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#vpc_properties IotTopicRuleDestination#vpc_properties}
  */
  readonly vpcProperties?: IotTopicRuleDestinationVpcProperties;
}
export interface IotTopicRuleDestinationHttpUrlProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#confirmation_url IotTopicRuleDestination#confirmation_url}
  */
  readonly confirmationUrl?: string;
}

export function iotTopicRuleDestinationHttpUrlPropertiesToTerraform(struct?: IotTopicRuleDestinationHttpUrlProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confirmation_url: cdktf.stringToTerraform(struct!.confirmationUrl),
  }
}

export interface IotTopicRuleDestinationVpcProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#role_arn IotTopicRuleDestination#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#security_groups IotTopicRuleDestination#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#subnet_ids IotTopicRuleDestination#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html#vpc_id IotTopicRuleDestination#vpc_id}
  */
  readonly vpcId?: string;
}

export function iotTopicRuleDestinationVpcPropertiesToTerraform(struct?: IotTopicRuleDestinationVpcProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html awscc_iot_topic_rule_destination}
*/
export class IotTopicRuleDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_topic_rule_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_topic_rule_destination.html awscc_iot_topic_rule_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTopicRuleDestinationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotTopicRuleDestinationConfig = {}) {
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
    this._httpUrlProperties = config.httpUrlProperties;
    this._status = config.status;
    this._vpcProperties = config.vpcProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // http_url_properties - computed: true, optional: true, required: false
  private _httpUrlProperties?: IotTopicRuleDestinationHttpUrlProperties;
  public get httpUrlProperties() {
    return this.interpolationForAttribute('http_url_properties') as any;
  }
  public set httpUrlProperties(value: IotTopicRuleDestinationHttpUrlProperties) {
    this._httpUrlProperties = value;
  }
  public resetHttpUrlProperties() {
    this._httpUrlProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlPropertiesInput() {
    return this._httpUrlProperties
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // vpc_properties - computed: true, optional: true, required: false
  private _vpcProperties?: IotTopicRuleDestinationVpcProperties;
  public get vpcProperties() {
    return this.interpolationForAttribute('vpc_properties') as any;
  }
  public set vpcProperties(value: IotTopicRuleDestinationVpcProperties) {
    this._vpcProperties = value;
  }
  public resetVpcProperties() {
    this._vpcProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPropertiesInput() {
    return this._vpcProperties
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_url_properties: iotTopicRuleDestinationHttpUrlPropertiesToTerraform(this._httpUrlProperties),
      status: cdktf.stringToTerraform(this._status),
      vpc_properties: iotTopicRuleDestinationVpcPropertiesToTerraform(this._vpcProperties),
    };
  }
}
