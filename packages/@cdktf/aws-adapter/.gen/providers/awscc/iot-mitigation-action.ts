// https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotMitigationActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for the mitigation action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action_name IotMitigationAction#action_name}
  */
  readonly actionName?: string;
  /**
  * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action_params IotMitigationAction#action_params}
  */
  readonly actionParams: IotMitigationActionActionParams;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#role_arn IotMitigationAction#role_arn}
  */
  readonly roleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#tags IotMitigationAction#tags}
  */
  readonly tags?: IotMitigationActionTags[];
}
export interface IotMitigationActionActionParamsAddThingsToThingGroupParams {
  /**
  * Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#override_dynamic_groups IotMitigationAction#override_dynamic_groups}
  */
  readonly overrideDynamicGroups?: boolean | cdktf.IResolvable;
  /**
  * The list of groups to which you want to add the things that triggered the mitigation action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#thing_group_names IotMitigationAction#thing_group_names}
  */
  readonly thingGroupNames: string[];
}

export function iotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: IotMitigationActionActionParamsAddThingsToThingGroupParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    override_dynamic_groups: cdktf.booleanToTerraform(struct!.overrideDynamicGroups),
    thing_group_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.thingGroupNames),
  }
}

export interface IotMitigationActionActionParamsEnableIoTLoggingParams {
  /**
  *  Specifies which types of information are logged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#log_level IotMitigationAction#log_level}
  */
  readonly logLevel: string;
  /**
  *  The ARN of the IAM role used for logging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#role_arn_for_logging IotMitigationAction#role_arn_for_logging}
  */
  readonly roleArnForLogging: string;
}

export function iotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: IotMitigationActionActionParamsEnableIoTLoggingParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    role_arn_for_logging: cdktf.stringToTerraform(struct!.roleArnForLogging),
  }
}

export interface IotMitigationActionActionParamsPublishFindingToSnsParams {
  /**
  * The ARN of the topic to which you want to publish the findings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#topic_arn IotMitigationAction#topic_arn}
  */
  readonly topicArn: string;
}

export function iotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: IotMitigationActionActionParamsPublishFindingToSnsParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#template_name IotMitigationAction#template_name}
  */
  readonly templateName: string;
}

export function iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}

export interface IotMitigationActionActionParamsUpdateCaCertificateParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action IotMitigationAction#action}
  */
  readonly action: string;
}

export function iotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateCaCertificateParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export interface IotMitigationActionActionParamsUpdateDeviceCertificateParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#action IotMitigationAction#action}
  */
  readonly action: string;
}

export function iotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: IotMitigationActionActionParamsUpdateDeviceCertificateParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export interface IotMitigationActionActionParams {
  /**
  * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}
  */
  readonly addThingsToThingGroupParams?: IotMitigationActionActionParamsAddThingsToThingGroupParams;
  /**
  * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}
  */
  readonly enableIoTLoggingParams?: IotMitigationActionActionParamsEnableIoTLoggingParams;
  /**
  * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}
  */
  readonly publishFindingToSnsParams?: IotMitigationActionActionParamsPublishFindingToSnsParams;
  /**
  * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}
  */
  readonly replaceDefaultPolicyVersionParams?: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
  /**
  * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}
  */
  readonly updateCaCertificateParams?: IotMitigationActionActionParamsUpdateCaCertificateParams;
  /**
  * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#update_device_certificate_params IotMitigationAction#update_device_certificate_params}
  */
  readonly updateDeviceCertificateParams?: IotMitigationActionActionParamsUpdateDeviceCertificateParams;
}

export function iotMitigationActionActionParamsToTerraform(struct?: IotMitigationActionActionParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_things_to_thing_group_params: iotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct!.addThingsToThingGroupParams),
    enable_io_t_logging_params: iotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct!.enableIoTLoggingParams),
    publish_finding_to_sns_params: iotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct!.publishFindingToSnsParams),
    replace_default_policy_version_params: iotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct!.replaceDefaultPolicyVersionParams),
    update_ca_certificate_params: iotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct!.updateCaCertificateParams),
    update_device_certificate_params: iotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct!.updateDeviceCertificateParams),
  }
}

export interface IotMitigationActionTags {
  /**
  * The tag's key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#key IotMitigationAction#key}
  */
  readonly key: string;
  /**
  * The tag's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html#value IotMitigationAction#value}
  */
  readonly value: string;
}

export function iotMitigationActionTagsToTerraform(struct?: IotMitigationActionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html awscc_iot_mitigation_action}
*/
export class IotMitigationAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_mitigation_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_mitigation_action.html awscc_iot_mitigation_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotMitigationActionConfig
  */
  public constructor(scope: Construct, id: string, config: IotMitigationActionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_mitigation_action',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionName = config.actionName;
    this._actionParams = config.actionParams;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string;
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName
  }

  // action_params - computed: false, optional: false, required: true
  private _actionParams: IotMitigationActionActionParams;
  public get actionParams() {
    return this.interpolationForAttribute('action_params') as any;
  }
  public set actionParams(value: IotMitigationActionActionParams) {
    this._actionParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParamsInput() {
    return this._actionParams
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mitigation_action_arn - computed: true, optional: false, required: false
  public get mitigationActionArn() {
    return this.getStringAttribute('mitigation_action_arn');
  }

  // mitigation_action_id - computed: true, optional: false, required: false
  public get mitigationActionId() {
    return this.getStringAttribute('mitigation_action_id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotMitigationActionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotMitigationActionTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_name: cdktf.stringToTerraform(this._actionName),
      action_params: iotMitigationActionActionParamsToTerraform(this._actionParams),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(iotMitigationActionTagsToTerraform)(this._tags),
    };
  }
}
