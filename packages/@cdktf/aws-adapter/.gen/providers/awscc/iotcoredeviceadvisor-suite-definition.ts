// https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotcoredeviceadvisorSuiteDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}
  */
  readonly suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#tags IotcoredeviceadvisorSuiteDefinition#tags}
  */
  readonly tags?: IotcoredeviceadvisorSuiteDefinitionTags[];
}
export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}
  */
  readonly thingArn?: string;
}

export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    thing_arn: cdktf.stringToTerraform(struct!.thingArn),
  }
}

export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {
  /**
  * The device permission role arn of the test suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}
  */
  readonly devicePermissionRoleArn: string;
  /**
  * The devices being tested in the test suite
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#devices IotcoredeviceadvisorSuiteDefinition#devices}
  */
  readonly devices?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[];
  /**
  * Whether the tests are intended for qualification in a suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}
  */
  readonly intendedForQualification?: boolean | cdktf.IResolvable;
  /**
  * The root group of the test suite.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#root_group IotcoredeviceadvisorSuiteDefinition#root_group}
  */
  readonly rootGroup: string;
  /**
  * The Name of the suite definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}
  */
  readonly suiteDefinitionName?: string;
}

export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_permission_role_arn: cdktf.stringToTerraform(struct!.devicePermissionRoleArn),
    devices: cdktf.listMapper(iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform)(struct!.devices),
    intended_for_qualification: cdktf.booleanToTerraform(struct!.intendedForQualification),
    root_group: cdktf.stringToTerraform(struct!.rootGroup),
    suite_definition_name: cdktf.stringToTerraform(struct!.suiteDefinitionName),
  }
}

export interface IotcoredeviceadvisorSuiteDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#key IotcoredeviceadvisorSuiteDefinition#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html#value IotcoredeviceadvisorSuiteDefinition#value}
  */
  readonly value: string;
}

export function iotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition}
*/
export class IotcoredeviceadvisorSuiteDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotcoredeviceadvisor_suite_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotcoredeviceadvisorSuiteDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: IotcoredeviceadvisorSuiteDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotcoredeviceadvisor_suite_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._suiteDefinitionConfiguration = config.suiteDefinitionConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suite_definition_arn - computed: true, optional: false, required: false
  public get suiteDefinitionArn() {
    return this.getStringAttribute('suite_definition_arn');
  }

  // suite_definition_configuration - computed: false, optional: false, required: true
  private _suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
  public get suiteDefinitionConfiguration() {
    return this.interpolationForAttribute('suite_definition_configuration') as any;
  }
  public set suiteDefinitionConfiguration(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration) {
    this._suiteDefinitionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suiteDefinitionConfigurationInput() {
    return this._suiteDefinitionConfiguration
  }

  // suite_definition_id - computed: true, optional: false, required: false
  public get suiteDefinitionId() {
    return this.getStringAttribute('suite_definition_id');
  }

  // suite_definition_version - computed: true, optional: false, required: false
  public get suiteDefinitionVersion() {
    return this.getStringAttribute('suite_definition_version');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotcoredeviceadvisorSuiteDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotcoredeviceadvisorSuiteDefinitionTags[] ) {
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
      suite_definition_configuration: iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(this._suiteDefinitionConfiguration),
      tags: cdktf.listMapper(iotcoredeviceadvisorSuiteDefinitionTagsToTerraform)(this._tags),
    };
  }
}
