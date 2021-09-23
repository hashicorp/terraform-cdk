// https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGreengrassv2ComponentVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html#id DataAwsccGreengrassv2ComponentVersion#id}
  */
  readonly id: string;
}
export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies extends cdktf.ComplexComputedList {

  // dependency_type - computed: true, optional: false, required: false
  public get dependencyType() {
    return this.getStringAttribute('dependency_type');
  }

  // version_requirement - computed: true, optional: false, required: false
  public get versionRequirement() {
    return this.getStringAttribute('version_requirement');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dependency_type: cdktf.stringToTerraform(struct!.dependencyType),
    version_requirement: cdktf.stringToTerraform(struct!.versionRequirement),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources extends cdktf.ComplexComputedList {

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices extends cdktf.ComplexComputedList {

  // add_group_owner - computed: true, optional: false, required: false
  public get addGroupOwner() {
    return this.getBooleanAttribute('add_group_owner');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_group_owner: cdktf.booleanToTerraform(struct!.addGroupOwner),
    path: cdktf.stringToTerraform(struct!.path),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes extends cdktf.ComplexComputedList {

  // add_group_owner - computed: true, optional: false, required: false
  public get addGroupOwner() {
    return this.getBooleanAttribute('add_group_owner');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_group_owner: cdktf.booleanToTerraform(struct!.addGroupOwner),
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    permission: cdktf.stringToTerraform(struct!.permission),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams extends cdktf.ComplexComputedList {

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return this.interpolationForAttribute('devices') as any;
  }

  // memory_size_in_kb - computed: true, optional: false, required: false
  public get memorySizeInKb() {
    return this.getNumberAttribute('memory_size_in_kb');
  }

  // mount_ro_sysfs - computed: true, optional: false, required: false
  public get mountRoSysfs() {
    return this.getBooleanAttribute('mount_ro_sysfs');
  }

  // volumes - computed: true, optional: false, required: false
  public get volumes() {
    return this.interpolationForAttribute('volumes') as any;
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    devices: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform)(struct!.devices),
    memory_size_in_kb: cdktf.numberToTerraform(struct!.memorySizeInKb),
    mount_ro_sysfs: cdktf.booleanToTerraform(struct!.mountRoSysfs),
    volumes: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform)(struct!.volumes),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams extends cdktf.ComplexComputedList {

  // container_params - computed: true, optional: false, required: false
  public get containerParams() {
    return this.interpolationForAttribute('container_params') as any;
  }

  // isolation_mode - computed: true, optional: false, required: false
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_params: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct!.containerParams),
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters extends cdktf.ComplexComputedList {

  // environment_variables - computed: true, optional: false, required: false
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }

  // event_sources - computed: true, optional: false, required: false
  public get eventSources() {
    return this.interpolationForAttribute('event_sources') as any;
  }

  // exec_args - computed: true, optional: false, required: false
  public get execArgs() {
    return this.getListAttribute('exec_args');
  }

  // input_payload_encoding_type - computed: true, optional: false, required: false
  public get inputPayloadEncodingType() {
    return this.getStringAttribute('input_payload_encoding_type');
  }

  // linux_process_params - computed: true, optional: false, required: false
  public get linuxProcessParams() {
    return this.interpolationForAttribute('linux_process_params') as any;
  }

  // max_idle_time_in_seconds - computed: true, optional: false, required: false
  public get maxIdleTimeInSeconds() {
    return this.getNumberAttribute('max_idle_time_in_seconds');
  }

  // max_instances_count - computed: true, optional: false, required: false
  public get maxInstancesCount() {
    return this.getNumberAttribute('max_instances_count');
  }

  // max_queue_size - computed: true, optional: false, required: false
  public get maxQueueSize() {
    return this.getNumberAttribute('max_queue_size');
  }

  // pinned - computed: true, optional: false, required: false
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }

  // status_timeout_in_seconds - computed: true, optional: false, required: false
  public get statusTimeoutInSeconds() {
    return this.getNumberAttribute('status_timeout_in_seconds');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    event_sources: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform)(struct!.eventSources),
    exec_args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.execArgs),
    input_payload_encoding_type: cdktf.stringToTerraform(struct!.inputPayloadEncodingType),
    linux_process_params: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct!.linuxProcessParams),
    max_idle_time_in_seconds: cdktf.numberToTerraform(struct!.maxIdleTimeInSeconds),
    max_instances_count: cdktf.numberToTerraform(struct!.maxInstancesCount),
    max_queue_size: cdktf.numberToTerraform(struct!.maxQueueSize),
    pinned: cdktf.booleanToTerraform(struct!.pinned),
    status_timeout_in_seconds: cdktf.numberToTerraform(struct!.statusTimeoutInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms extends cdktf.ComplexComputedList {

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunction extends cdktf.ComplexComputedList {

  // component_dependencies - computed: true, optional: false, required: false
  public get componentDependencies() {
    return this.interpolationForAttribute('component_dependencies') as any;
  }

  // component_lambda_parameters - computed: true, optional: false, required: false
  public get componentLambdaParameters() {
    return this.interpolationForAttribute('component_lambda_parameters') as any;
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_platforms - computed: true, optional: false, required: false
  public get componentPlatforms() {
    return this.interpolationForAttribute('component_platforms') as any;
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_dependencies: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.componentDependencies),
    component_lambda_parameters: dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct!.componentLambdaParameters),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    component_platforms: cdktf.listMapper(dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform)(struct!.componentPlatforms),
    component_version: cdktf.stringToTerraform(struct!.componentVersion),
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version}
*/
export class DataAwsccGreengrassv2ComponentVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_greengrassv2_component_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGreengrassv2ComponentVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGreengrassv2ComponentVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_greengrassv2_component_version',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
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

  // inline_recipe - computed: true, optional: false, required: false
  public get inlineRecipe() {
    return this.getStringAttribute('inline_recipe');
  }

  // lambda_function - computed: true, optional: false, required: false
  public get lambdaFunction() {
    return this.interpolationForAttribute('lambda_function') as any;
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
