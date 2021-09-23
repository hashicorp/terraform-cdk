// https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotMitigationActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html#id DataAwsccIotMitigationAction#id}
  */
  readonly id: string;
}
export class DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams extends cdktf.ComplexComputedList {

  // override_dynamic_groups - computed: true, optional: false, required: false
  public get overrideDynamicGroups() {
    return this.getBooleanAttribute('override_dynamic_groups');
  }

  // thing_group_names - computed: true, optional: false, required: false
  public get thingGroupNames() {
    return this.getListAttribute('thing_group_names');
  }
}

export function dataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    override_dynamic_groups: cdktf.booleanToTerraform(struct!.overrideDynamicGroups),
    thing_group_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.thingGroupNames),
  }
}

export class DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams extends cdktf.ComplexComputedList {

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // role_arn_for_logging - computed: true, optional: false, required: false
  public get roleArnForLogging() {
    return this.getStringAttribute('role_arn_for_logging');
  }
}

export function dataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    role_arn_for_logging: cdktf.stringToTerraform(struct!.roleArnForLogging),
  }
}

export class DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams extends cdktf.ComplexComputedList {

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export function dataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export class DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams extends cdktf.ComplexComputedList {

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

export function dataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}

export class DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}

export function dataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export class DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}

export function dataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}

export class DataAwsccIotMitigationActionActionParams extends cdktf.ComplexComputedList {

  // add_things_to_thing_group_params - computed: true, optional: false, required: false
  public get addThingsToThingGroupParams() {
    return this.interpolationForAttribute('add_things_to_thing_group_params') as any;
  }

  // enable_io_t_logging_params - computed: true, optional: false, required: false
  public get enableIoTLoggingParams() {
    return this.interpolationForAttribute('enable_io_t_logging_params') as any;
  }

  // publish_finding_to_sns_params - computed: true, optional: false, required: false
  public get publishFindingToSnsParams() {
    return this.interpolationForAttribute('publish_finding_to_sns_params') as any;
  }

  // replace_default_policy_version_params - computed: true, optional: false, required: false
  public get replaceDefaultPolicyVersionParams() {
    return this.interpolationForAttribute('replace_default_policy_version_params') as any;
  }

  // update_ca_certificate_params - computed: true, optional: false, required: false
  public get updateCaCertificateParams() {
    return this.interpolationForAttribute('update_ca_certificate_params') as any;
  }

  // update_device_certificate_params - computed: true, optional: false, required: false
  public get updateDeviceCertificateParams() {
    return this.interpolationForAttribute('update_device_certificate_params') as any;
  }
}

export function dataAwsccIotMitigationActionActionParamsToTerraform(struct?: DataAwsccIotMitigationActionActionParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_things_to_thing_group_params: dataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsToTerraform(struct!.addThingsToThingGroupParams),
    enable_io_t_logging_params: dataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsToTerraform(struct!.enableIoTLoggingParams),
    publish_finding_to_sns_params: dataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsToTerraform(struct!.publishFindingToSnsParams),
    replace_default_policy_version_params: dataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsToTerraform(struct!.replaceDefaultPolicyVersionParams),
    update_ca_certificate_params: dataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsToTerraform(struct!.updateCaCertificateParams),
    update_device_certificate_params: dataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsToTerraform(struct!.updateDeviceCertificateParams),
  }
}

export class DataAwsccIotMitigationActionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotMitigationActionTagsToTerraform(struct?: DataAwsccIotMitigationActionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html awscc_iot_mitigation_action}
*/
export class DataAwsccIotMitigationAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_mitigation_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_mitigation_action.html awscc_iot_mitigation_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotMitigationActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotMitigationActionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // action_params - computed: true, optional: false, required: false
  public get actionParams() {
    return this.interpolationForAttribute('action_params') as any;
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

  // mitigation_action_arn - computed: true, optional: false, required: false
  public get mitigationActionArn() {
    return this.getStringAttribute('mitigation_action_arn');
  }

  // mitigation_action_id - computed: true, optional: false, required: false
  public get mitigationActionId() {
    return this.getStringAttribute('mitigation_action_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
