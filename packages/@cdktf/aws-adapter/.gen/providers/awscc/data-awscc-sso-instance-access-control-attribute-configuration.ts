// https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html#id DataAwsccSsoInstanceAccessControlAttributeConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue extends cdktf.ComplexComputedList {

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.listMapper(cdktf.stringToTerraform)(struct!.source),
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataAwsccSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct!.value),
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue extends cdktf.ComplexComputedList {

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.listMapper(cdktf.stringToTerraform)(struct!.source),
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct!.value),
  }
}

export class DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration extends cdktf.ComplexComputedList {

  // access_control_attributes - computed: true, optional: false, required: false
  public get accessControlAttributes() {
    return this.interpolationForAttribute('access_control_attributes') as any;
  }
}

export function dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(struct?: DataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_attributes: cdktf.listMapper(dataAwsccSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform)(struct!.accessControlAttributes),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration}
*/
export class DataAwsccSsoInstanceAccessControlAttributeConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sso_instance_access_control_attribute_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsoInstanceAccessControlAttributeConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sso_instance_access_control_attribute_configuration',
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

  // access_control_attributes - computed: true, optional: false, required: false
  public get accessControlAttributes() {
    return this.interpolationForAttribute('access_control_attributes') as any;
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

  // instance_access_control_attribute_configuration - computed: true, optional: false, required: false
  public get instanceAccessControlAttributeConfiguration() {
    return this.interpolationForAttribute('instance_access_control_attribute_configuration') as any;
  }

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
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
