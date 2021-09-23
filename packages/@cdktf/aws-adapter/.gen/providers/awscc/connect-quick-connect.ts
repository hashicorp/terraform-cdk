// https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the quick connect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#description ConnectQuickConnect#description}
  */
  readonly description?: string;
  /**
  * The identifier of the Amazon Connect instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#instance_arn ConnectQuickConnect#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * The name of the quick connect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#name ConnectQuickConnect#name}
  */
  readonly name: string;
  /**
  * Configuration settings for the quick connect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#quick_connect_config ConnectQuickConnect#quick_connect_config}
  */
  readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
  /**
  * One or more tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#tags ConnectQuickConnect#tags}
  */
  readonly tags?: ConnectQuickConnectTags[];
}
export interface ConnectQuickConnectQuickConnectConfigPhoneConfig {
  /**
  * The phone number in E.164 format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#phone_number ConnectQuickConnect#phone_number}
  */
  readonly phoneNumber: string;
}

export function connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}

export interface ConnectQuickConnectQuickConnectConfigQueueConfig {
  /**
  * The identifier of the contact flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#contact_flow_arn ConnectQuickConnect#contact_flow_arn}
  */
  readonly contactFlowArn: string;
  /**
  * The identifier for the queue.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#queue_arn ConnectQuickConnect#queue_arn}
  */
  readonly queueArn: string;
}

export function connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_flow_arn: cdktf.stringToTerraform(struct!.contactFlowArn),
    queue_arn: cdktf.stringToTerraform(struct!.queueArn),
  }
}

export interface ConnectQuickConnectQuickConnectConfigUserConfig {
  /**
  * The identifier of the contact flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#contact_flow_arn ConnectQuickConnect#contact_flow_arn}
  */
  readonly contactFlowArn: string;
  /**
  * The identifier of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#user_arn ConnectQuickConnect#user_arn}
  */
  readonly userArn: string;
}

export function connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_flow_arn: cdktf.stringToTerraform(struct!.contactFlowArn),
    user_arn: cdktf.stringToTerraform(struct!.userArn),
  }
}

export interface ConnectQuickConnectQuickConnectConfig {
  /**
  * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#phone_config ConnectQuickConnect#phone_config}
  */
  readonly phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig;
  /**
  * The queue configuration. This is required only if QuickConnectType is QUEUE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#queue_config ConnectQuickConnect#queue_config}
  */
  readonly queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig;
  /**
  * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#quick_connect_type ConnectQuickConnect#quick_connect_type}
  */
  readonly quickConnectType: string;
  /**
  * The user configuration. This is required only if QuickConnectType is USER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#user_config ConnectQuickConnect#user_config}
  */
  readonly userConfig?: ConnectQuickConnectQuickConnectConfigUserConfig;
}

export function connectQuickConnectQuickConnectConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    phone_config: connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct!.phoneConfig),
    queue_config: connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct!.queueConfig),
    quick_connect_type: cdktf.stringToTerraform(struct!.quickConnectType),
    user_config: connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct!.userConfig),
  }
}

export interface ConnectQuickConnectTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#key ConnectQuickConnect#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#value ConnectQuickConnect#value}
  */
  readonly value: string;
}

export function connectQuickConnectTagsToTerraform(struct?: ConnectQuickConnectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect}
*/
export class ConnectQuickConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_connect_quick_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectQuickConnectConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectQuickConnectConfig) {
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
    this._description = config.description;
    this._instanceArn = config.instanceArn;
    this._name = config.name;
    this._quickConnectConfig = config.quickConnectConfig;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // quick_connect_arn - computed: true, optional: false, required: false
  public get quickConnectArn() {
    return this.getStringAttribute('quick_connect_arn');
  }

  // quick_connect_config - computed: false, optional: false, required: true
  private _quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
  public get quickConnectConfig() {
    return this.interpolationForAttribute('quick_connect_config') as any;
  }
  public set quickConnectConfig(value: ConnectQuickConnectQuickConnectConfig) {
    this._quickConnectConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quickConnectConfigInput() {
    return this._quickConnectConfig
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ConnectQuickConnectTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ConnectQuickConnectTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      name: cdktf.stringToTerraform(this._name),
      quick_connect_config: connectQuickConnectQuickConnectConfigToTerraform(this._quickConnectConfig),
      tags: cdktf.listMapper(connectQuickConnectTagsToTerraform)(this._tags),
    };
  }
}
