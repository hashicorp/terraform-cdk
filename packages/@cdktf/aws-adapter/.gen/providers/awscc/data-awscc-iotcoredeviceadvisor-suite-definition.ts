// https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html#id DataAwsccIotcoredeviceadvisorSuiteDefinition#id}
  */
  readonly id: string;
}
export class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices extends cdktf.ComplexComputedList {

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // thing_arn - computed: true, optional: false, required: false
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    thing_arn: cdktf.stringToTerraform(struct!.thingArn),
  }
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration extends cdktf.ComplexComputedList {

  // device_permission_role_arn - computed: true, optional: false, required: false
  public get devicePermissionRoleArn() {
    return this.getStringAttribute('device_permission_role_arn');
  }

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return this.interpolationForAttribute('devices') as any;
  }

  // intended_for_qualification - computed: true, optional: false, required: false
  public get intendedForQualification() {
    return this.getBooleanAttribute('intended_for_qualification');
  }

  // root_group - computed: true, optional: false, required: false
  public get rootGroup() {
    return this.getStringAttribute('root_group');
  }

  // suite_definition_name - computed: true, optional: false, required: false
  public get suiteDefinitionName() {
    return this.getStringAttribute('suite_definition_name');
  }
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_permission_role_arn: cdktf.stringToTerraform(struct!.devicePermissionRoleArn),
    devices: cdktf.listMapper(dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform)(struct!.devices),
    intended_for_qualification: cdktf.booleanToTerraform(struct!.intendedForQualification),
    root_group: cdktf.stringToTerraform(struct!.rootGroup),
    suite_definition_name: cdktf.stringToTerraform(struct!.suiteDefinitionName),
  }
}

export class DataAwsccIotcoredeviceadvisorSuiteDefinitionTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition}
*/
export class DataAwsccIotcoredeviceadvisorSuiteDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotcoredeviceadvisor_suite_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotcoredeviceadvisor_suite_definition.html awscc_iotcoredeviceadvisor_suite_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // suite_definition_arn - computed: true, optional: false, required: false
  public get suiteDefinitionArn() {
    return this.getStringAttribute('suite_definition_arn');
  }

  // suite_definition_configuration - computed: true, optional: false, required: false
  public get suiteDefinitionConfiguration() {
    return this.interpolationForAttribute('suite_definition_configuration') as any;
  }

  // suite_definition_id - computed: true, optional: false, required: false
  public get suiteDefinitionId() {
    return this.getStringAttribute('suite_definition_id');
  }

  // suite_definition_version - computed: true, optional: false, required: false
  public get suiteDefinitionVersion() {
    return this.getStringAttribute('suite_definition_version');
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
