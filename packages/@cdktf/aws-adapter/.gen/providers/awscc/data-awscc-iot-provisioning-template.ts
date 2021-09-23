// https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotProvisioningTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html#id DataAwsccIotProvisioningTemplate#id}
  */
  readonly id: string;
}
export class DataAwsccIotProvisioningTemplatePreProvisioningHook extends cdktf.ComplexComputedList {

  // payload_version - computed: true, optional: false, required: false
  public get payloadVersion() {
    return this.getStringAttribute('payload_version');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}

export function dataAwsccIotProvisioningTemplatePreProvisioningHookToTerraform(struct?: DataAwsccIotProvisioningTemplatePreProvisioningHook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    payload_version: cdktf.stringToTerraform(struct!.payloadVersion),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class DataAwsccIotProvisioningTemplateTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotProvisioningTemplateTagsToTerraform(struct?: DataAwsccIotProvisioningTemplateTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html awscc_iot_provisioning_template}
*/
export class DataAwsccIotProvisioningTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_provisioning_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_provisioning_template.html awscc_iot_provisioning_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotProvisioningTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotProvisioningTemplateConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // pre_provisioning_hook - computed: true, optional: false, required: false
  public get preProvisioningHook() {
    return this.interpolationForAttribute('pre_provisioning_hook') as any;
  }

  // provisioning_role_arn - computed: true, optional: false, required: false
  public get provisioningRoleArn() {
    return this.getStringAttribute('provisioning_role_arn');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // template_arn - computed: true, optional: false, required: false
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
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
