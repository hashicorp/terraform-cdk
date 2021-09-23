// https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Greengrassv2ComponentVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#inline_recipe Greengrassv2ComponentVersion#inline_recipe}
  */
  readonly inlineRecipe?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#lambda_function Greengrassv2ComponentVersion#lambda_function}
  */
  readonly lambdaFunction?: Greengrassv2ComponentVersionLambdaFunction;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#tags Greengrassv2ComponentVersion#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface Greengrassv2ComponentVersionLambdaFunctionComponentDependencies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#dependency_type Greengrassv2ComponentVersion#dependency_type}
  */
  readonly dependencyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#version_requirement Greengrassv2ComponentVersion#version_requirement}
  */
  readonly versionRequirement?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentDependencies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dependency_type: cdktf.stringToTerraform(struct!.dependencyType),
    version_requirement: cdktf.stringToTerraform(struct!.versionRequirement),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#topic Greengrassv2ComponentVersion#topic}
  */
  readonly topic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#type Greengrassv2ComponentVersion#type}
  */
  readonly type?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#add_group_owner Greengrassv2ComponentVersion#add_group_owner}
  */
  readonly addGroupOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#path Greengrassv2ComponentVersion#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#permission Greengrassv2ComponentVersion#permission}
  */
  readonly permission?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_group_owner: cdktf.booleanToTerraform(struct!.addGroupOwner),
    path: cdktf.stringToTerraform(struct!.path),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#add_group_owner Greengrassv2ComponentVersion#add_group_owner}
  */
  readonly addGroupOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#destination_path Greengrassv2ComponentVersion#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#permission Greengrassv2ComponentVersion#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#source_path Greengrassv2ComponentVersion#source_path}
  */
  readonly sourcePath?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_group_owner: cdktf.booleanToTerraform(struct!.addGroupOwner),
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    permission: cdktf.stringToTerraform(struct!.permission),
    source_path: cdktf.stringToTerraform(struct!.sourcePath),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#devices Greengrassv2ComponentVersion#devices}
  */
  readonly devices?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}
  */
  readonly memorySizeInKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}
  */
  readonly mountRoSysfs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#volumes Greengrassv2ComponentVersion#volumes}
  */
  readonly volumes?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[];
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    devices: cdktf.listMapper(greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform)(struct!.devices),
    memory_size_in_kb: cdktf.numberToTerraform(struct!.memorySizeInKb),
    mount_ro_sysfs: cdktf.booleanToTerraform(struct!.mountRoSysfs),
    volumes: cdktf.listMapper(greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform)(struct!.volumes),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#container_params Greengrassv2ComponentVersion#container_params}
  */
  readonly containerParams?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#isolation_mode Greengrassv2ComponentVersion#isolation_mode}
  */
  readonly isolationMode?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_params: greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct!.containerParams),
    isolation_mode: cdktf.stringToTerraform(struct!.isolationMode),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#environment_variables Greengrassv2ComponentVersion#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#event_sources Greengrassv2ComponentVersion#event_sources}
  */
  readonly eventSources?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#exec_args Greengrassv2ComponentVersion#exec_args}
  */
  readonly execArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}
  */
  readonly inputPayloadEncodingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#linux_process_params Greengrassv2ComponentVersion#linux_process_params}
  */
  readonly linuxProcessParams?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}
  */
  readonly maxIdleTimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_instances_count Greengrassv2ComponentVersion#max_instances_count}
  */
  readonly maxInstancesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_queue_size Greengrassv2ComponentVersion#max_queue_size}
  */
  readonly maxQueueSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#pinned Greengrassv2ComponentVersion#pinned}
  */
  readonly pinned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}
  */
  readonly statusTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environmentVariables),
    event_sources: cdktf.listMapper(greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform)(struct!.eventSources),
    exec_args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.execArgs),
    input_payload_encoding_type: cdktf.stringToTerraform(struct!.inputPayloadEncodingType),
    linux_process_params: greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct!.linuxProcessParams),
    max_idle_time_in_seconds: cdktf.numberToTerraform(struct!.maxIdleTimeInSeconds),
    max_instances_count: cdktf.numberToTerraform(struct!.maxInstancesCount),
    max_queue_size: cdktf.numberToTerraform(struct!.maxQueueSize),
    pinned: cdktf.booleanToTerraform(struct!.pinned),
    status_timeout_in_seconds: cdktf.numberToTerraform(struct!.statusTimeoutInSeconds),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#attributes Greengrassv2ComponentVersion#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#name Greengrassv2ComponentVersion#name}
  */
  readonly name?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Greengrassv2ComponentVersionLambdaFunction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_dependencies Greengrassv2ComponentVersion#component_dependencies}
  */
  readonly componentDependencies?: { [key: string]: Greengrassv2ComponentVersionLambdaFunctionComponentDependencies } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}
  */
  readonly componentLambdaParameters?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_name Greengrassv2ComponentVersion#component_name}
  */
  readonly componentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_platforms Greengrassv2ComponentVersion#component_platforms}
  */
  readonly componentPlatforms?: Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_version Greengrassv2ComponentVersion#component_version}
  */
  readonly componentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#lambda_arn Greengrassv2ComponentVersion#lambda_arn}
  */
  readonly lambdaArn?: string;
}

export function greengrassv2ComponentVersionLambdaFunctionToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_dependencies: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.componentDependencies),
    component_lambda_parameters: greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct!.componentLambdaParameters),
    component_name: cdktf.stringToTerraform(struct!.componentName),
    component_platforms: cdktf.listMapper(greengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform)(struct!.componentPlatforms),
    component_version: cdktf.stringToTerraform(struct!.componentVersion),
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html awscc_greengrassv2_component_version}
*/
export class Greengrassv2ComponentVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_greengrassv2_component_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html awscc_greengrassv2_component_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Greengrassv2ComponentVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Greengrassv2ComponentVersionConfig = {}) {
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
    this._inlineRecipe = config.inlineRecipe;
    this._lambdaFunction = config.lambdaFunction;
    this._tags = config.tags;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_recipe - computed: true, optional: true, required: false
  private _inlineRecipe?: string;
  public get inlineRecipe() {
    return this.getStringAttribute('inline_recipe');
  }
  public set inlineRecipe(value: string) {
    this._inlineRecipe = value;
  }
  public resetInlineRecipe() {
    this._inlineRecipe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRecipeInput() {
    return this._inlineRecipe
  }

  // lambda_function - computed: true, optional: true, required: false
  private _lambdaFunction?: Greengrassv2ComponentVersionLambdaFunction;
  public get lambdaFunction() {
    return this.interpolationForAttribute('lambda_function') as any;
  }
  public set lambdaFunction(value: Greengrassv2ComponentVersionLambdaFunction) {
    this._lambdaFunction = value;
  }
  public resetLambdaFunction() {
    this._lambdaFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionInput() {
    return this._lambdaFunction
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      inline_recipe: cdktf.stringToTerraform(this._inlineRecipe),
      lambda_function: greengrassv2ComponentVersionLambdaFunctionToTerraform(this._lambdaFunction),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
