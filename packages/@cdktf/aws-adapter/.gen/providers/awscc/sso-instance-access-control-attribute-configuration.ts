// https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoInstanceAccessControlAttributeConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}
  */
  readonly accessControlAttributes?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
  /**
  * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}
  */
  readonly instanceAccessControlAttributeConfiguration?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
  /**
  * The ARN of the AWS SSO instance under which the operation will be executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}
  */
  readonly instanceArn: string;
}
export interface SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#source SsoInstanceAccessControlAttributeConfiguration#source}
  */
  readonly source: string[];
}

export function ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.listMapper(cdktf.stringToTerraform)(struct!.source),
  }
}

export interface SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#key SsoInstanceAccessControlAttributeConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#value SsoInstanceAccessControlAttributeConfiguration#value}
  */
  readonly value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
}

export function ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct!.value),
  }
}

export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#source SsoInstanceAccessControlAttributeConfiguration#source}
  */
  readonly source: string[];
}

export function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    source: cdktf.listMapper(cdktf.stringToTerraform)(struct!.source),
  }
}

export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#key SsoInstanceAccessControlAttributeConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#value SsoInstanceAccessControlAttributeConfiguration#value}
  */
  readonly value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue;
}

export function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueToTerraform(struct!.value),
  }
}

export interface SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}
  */
  readonly accessControlAttributes: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
}

export function ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(struct?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_attributes: cdktf.listMapper(ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform)(struct!.accessControlAttributes),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration}
*/
export class SsoInstanceAccessControlAttributeConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sso_instance_access_control_attribute_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_instance_access_control_attribute_configuration.html awscc_sso_instance_access_control_attribute_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoInstanceAccessControlAttributeConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SsoInstanceAccessControlAttributeConfigurationConfig) {
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
    this._accessControlAttributes = config.accessControlAttributes;
    this._instanceAccessControlAttributeConfiguration = config.instanceAccessControlAttributeConfiguration;
    this._instanceArn = config.instanceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_attributes - computed: false, optional: true, required: false
  private _accessControlAttributes?: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[];
  public get accessControlAttributes() {
    return this.interpolationForAttribute('access_control_attributes') as any;
  }
  public set accessControlAttributes(value: SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes[] ) {
    this._accessControlAttributes = value;
  }
  public resetAccessControlAttributes() {
    this._accessControlAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAttributesInput() {
    return this._accessControlAttributes
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_access_control_attribute_configuration - computed: false, optional: true, required: false
  private _instanceAccessControlAttributeConfiguration?: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration;
  public get instanceAccessControlAttributeConfiguration() {
    return this.interpolationForAttribute('instance_access_control_attribute_configuration') as any;
  }
  public set instanceAccessControlAttributeConfiguration(value: SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration ) {
    this._instanceAccessControlAttributeConfiguration = value;
  }
  public resetInstanceAccessControlAttributeConfiguration() {
    this._instanceAccessControlAttributeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAccessControlAttributeConfigurationInput() {
    return this._instanceAccessControlAttributeConfiguration
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_attributes: cdktf.listMapper(ssoInstanceAccessControlAttributeConfigurationAccessControlAttributesToTerraform)(this._accessControlAttributes),
      instance_access_control_attribute_configuration: ssoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationToTerraform(this._instanceAccessControlAttributeConfiguration),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
    };
  }
}
