// https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html#id DataAwsccConnectQuickConnect#id}
  */
  readonly id: string;
}
export class DataAwsccConnectQuickConnectQuickConnectConfigPhoneConfig extends cdktf.ComplexComputedList {

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
}

export function dataAwsccConnectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigPhoneConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export class DataAwsccConnectQuickConnectQuickConnectConfigQueueConfig extends cdktf.ComplexComputedList {

  // contact_flow_arn - computed: true, optional: false, required: false
  public get contactFlowArn() {
    return this.getStringAttribute('contact_flow_arn');
  }

  // queue_arn - computed: true, optional: false, required: false
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }
}

export function dataAwsccConnectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigQueueConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_flow_arn: cdktf.stringToTerraform(struct!.contactFlowArn),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}

export class DataAwsccConnectQuickConnectQuickConnectConfigUserConfig extends cdktf.ComplexComputedList {

  // contact_flow_arn - computed: true, optional: false, required: false
  public get contactFlowArn() {
    return this.getStringAttribute('contact_flow_arn');
  }

  // user_arn - computed: true, optional: false, required: false
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }
}

export function dataAwsccConnectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfigUserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_flow_arn: cdktf.stringToTerraform(struct!.contactFlowArn),
    user_arn: cdktf.stringToTerraform(struct!.userArn),
  }
}

export class DataAwsccConnectQuickConnectQuickConnectConfig extends cdktf.ComplexComputedList {

  // phone_config - computed: true, optional: false, required: false
  public get phoneConfig() {
    return this.interpolationForAttribute('phone_config') as any;
  }

  // queue_config - computed: true, optional: false, required: false
  public get queueConfig() {
    return this.interpolationForAttribute('queue_config') as any;
  }

  // quick_connect_type - computed: true, optional: false, required: false
  public get quickConnectType() {
    return this.getStringAttribute('quick_connect_type');
  }

  // user_config - computed: true, optional: false, required: false
  public get userConfig() {
    return this.interpolationForAttribute('user_config') as any;
  }
}

export function dataAwsccConnectQuickConnectQuickConnectConfigToTerraform(struct?: DataAwsccConnectQuickConnectQuickConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    phone_config: dataAwsccConnectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct!.phoneConfig),
    queue_config: dataAwsccConnectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct!.queueConfig),
    quick_connect_type: cdktf.stringToTerraform(struct!.quickConnectType),
    user_config: dataAwsccConnectQuickConnectQuickConnectConfigUserConfigToTerraform(struct!.userConfig),
  }
}

export class DataAwsccConnectQuickConnectTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccConnectQuickConnectTagsToTerraform(struct?: DataAwsccConnectQuickConnectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html awscc_connect_quick_connect}
*/
export class DataAwsccConnectQuickConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_connect_quick_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/connect_quick_connect.html awscc_connect_quick_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectQuickConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_quick_connect',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // quick_connect_arn - computed: true, optional: false, required: false
  public get quickConnectArn() {
    return this.getStringAttribute('quick_connect_arn');
  }

  // quick_connect_config - computed: true, optional: false, required: false
  public get quickConnectConfig() {
    return this.interpolationForAttribute('quick_connect_config') as any;
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
