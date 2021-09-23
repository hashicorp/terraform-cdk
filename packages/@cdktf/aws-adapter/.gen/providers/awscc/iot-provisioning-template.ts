// https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotProvisioningTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#description IotProvisioningTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#enabled IotProvisioningTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}
  */
  readonly preProvisioningHook?: IotProvisioningTemplatePreProvisioningHook;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}
  */
  readonly provisioningRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#tags IotProvisioningTemplate#tags}
  */
  readonly tags?: IotProvisioningTemplateTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#template_body IotProvisioningTemplate#template_body}
  */
  readonly templateBody: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#template_name IotProvisioningTemplate#template_name}
  */
  readonly templateName?: string;
}
export interface IotProvisioningTemplatePreProvisioningHook {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#payload_version IotProvisioningTemplate#payload_version}
  */
  readonly payloadVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#target_arn IotProvisioningTemplate#target_arn}
  */
  readonly targetArn?: string;
}

export function iotProvisioningTemplatePreProvisioningHookToTerraform(struct?: IotProvisioningTemplatePreProvisioningHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload_version: cdktf.stringToTerraform(struct!.payloadVersion),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotProvisioningTemplateTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#key IotProvisioningTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html#value IotProvisioningTemplate#value}
  */
  readonly value: string;
}

export function iotProvisioningTemplateTagsToTerraform(struct?: IotProvisioningTemplateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html awscc_iot_provisioning_template}
*/
export class IotProvisioningTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_provisioning_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_provisioning_template.html awscc_iot_provisioning_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotProvisioningTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: IotProvisioningTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_provisioning_template',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._preProvisioningHook = config.preProvisioningHook;
    this._provisioningRoleArn = config.provisioningRoleArn;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateName = config.templateName;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pre_provisioning_hook - computed: false, optional: true, required: false
  private _preProvisioningHook?: IotProvisioningTemplatePreProvisioningHook;
  public get preProvisioningHook() {
    return this.interpolationForAttribute('pre_provisioning_hook') as any;
  }
  public set preProvisioningHook(value: IotProvisioningTemplatePreProvisioningHook ) {
    this._preProvisioningHook = value;
  }
  public resetPreProvisioningHook() {
    this._preProvisioningHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProvisioningHookInput() {
    return this._preProvisioningHook
  }

  // provisioning_role_arn - computed: false, optional: false, required: true
  private _provisioningRoleArn: string;
  public get provisioningRoleArn() {
    return this.getStringAttribute('provisioning_role_arn');
  }
  public set provisioningRoleArn(value: string) {
    this._provisioningRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningRoleArnInput() {
    return this._provisioningRoleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotProvisioningTemplateTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotProvisioningTemplateTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // template_body - computed: false, optional: false, required: true
  private _templateBody: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string;
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      pre_provisioning_hook: iotProvisioningTemplatePreProvisioningHookToTerraform(this._preProvisioningHook),
      provisioning_role_arn: cdktf.stringToTerraform(this._provisioningRoleArn),
      tags: cdktf.listMapper(iotProvisioningTemplateTagsToTerraform)(this._tags),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }
}
