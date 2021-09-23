// https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StepfunctionsStateMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#definition StepfunctionsStateMachine#definition}
  */
  readonly definition?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#definition_s3_location StepfunctionsStateMachine#definition_s3_location}
  */
  readonly definitionS3Location?: StepfunctionsStateMachineDefinitionS3Location;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#definition_string StepfunctionsStateMachine#definition_string}
  */
  readonly definitionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#definition_substitutions StepfunctionsStateMachine#definition_substitutions}
  */
  readonly definitionSubstitutions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#logging_configuration StepfunctionsStateMachine#logging_configuration}
  */
  readonly loggingConfiguration?: StepfunctionsStateMachineLoggingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#role_arn StepfunctionsStateMachine#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#state_machine_name StepfunctionsStateMachine#state_machine_name}
  */
  readonly stateMachineName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#state_machine_type StepfunctionsStateMachine#state_machine_type}
  */
  readonly stateMachineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#tags StepfunctionsStateMachine#tags}
  */
  readonly tags?: StepfunctionsStateMachineTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#tracing_configuration StepfunctionsStateMachine#tracing_configuration}
  */
  readonly tracingConfiguration?: StepfunctionsStateMachineTracingConfiguration;
}
export interface StepfunctionsStateMachineDefinitionS3Location {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#bucket StepfunctionsStateMachine#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#key StepfunctionsStateMachine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#version StepfunctionsStateMachine#version}
  */
  readonly version?: string;
}

export function stepfunctionsStateMachineDefinitionS3LocationToTerraform(struct?: StepfunctionsStateMachineDefinitionS3Location): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#log_group_arn StepfunctionsStateMachine#log_group_arn}
  */
  readonly logGroupArn?: string;
}

export function stepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct?: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
  }
}

export interface StepfunctionsStateMachineLoggingConfigurationDestinations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}
  */
  readonly cloudwatchLogsLogGroup?: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
}

export function stepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform(struct?: StepfunctionsStateMachineLoggingConfigurationDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs_log_group: stepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct!.cloudwatchLogsLogGroup),
  }
}

export interface StepfunctionsStateMachineLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#destinations StepfunctionsStateMachine#destinations}
  */
  readonly destinations?: StepfunctionsStateMachineLoggingConfigurationDestinations[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#include_execution_data StepfunctionsStateMachine#include_execution_data}
  */
  readonly includeExecutionData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#level StepfunctionsStateMachine#level}
  */
  readonly level?: string;
}

export function stepfunctionsStateMachineLoggingConfigurationToTerraform(struct?: StepfunctionsStateMachineLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destinations: cdktf.listMapper(stepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform)(struct!.destinations),
    include_execution_data: cdktf.booleanToTerraform(struct!.includeExecutionData),
    level: cdktf.stringToTerraform(struct!.level),
  }
}

export interface StepfunctionsStateMachineTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#key StepfunctionsStateMachine#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#value StepfunctionsStateMachine#value}
  */
  readonly value: string;
}

export function stepfunctionsStateMachineTagsToTerraform(struct?: StepfunctionsStateMachineTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StepfunctionsStateMachineTracingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#enabled StepfunctionsStateMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function stepfunctionsStateMachineTracingConfigurationToTerraform(struct?: StepfunctionsStateMachineTracingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html awscc_stepfunctions_state_machine}
*/
export class StepfunctionsStateMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_stepfunctions_state_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html awscc_stepfunctions_state_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StepfunctionsStateMachineConfig
  */
  public constructor(scope: Construct, id: string, config: StepfunctionsStateMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_stepfunctions_state_machine',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definition = config.definition;
    this._definitionS3Location = config.definitionS3Location;
    this._definitionString = config.definitionString;
    this._definitionSubstitutions = config.definitionSubstitutions;
    this._loggingConfiguration = config.loggingConfiguration;
    this._roleArn = config.roleArn;
    this._stateMachineName = config.stateMachineName;
    this._stateMachineType = config.stateMachineType;
    this._tags = config.tags;
    this._tracingConfiguration = config.tracingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: { [key: string]: string } | cdktf.IResolvable;
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // definition_s3_location - computed: false, optional: true, required: false
  private _definitionS3Location?: StepfunctionsStateMachineDefinitionS3Location;
  public get definitionS3Location() {
    return this.interpolationForAttribute('definition_s3_location') as any;
  }
  public set definitionS3Location(value: StepfunctionsStateMachineDefinitionS3Location ) {
    this._definitionS3Location = value;
  }
  public resetDefinitionS3Location() {
    this._definitionS3Location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionS3LocationInput() {
    return this._definitionS3Location
  }

  // definition_string - computed: false, optional: true, required: false
  private _definitionString?: string;
  public get definitionString() {
    return this.getStringAttribute('definition_string');
  }
  public set definitionString(value: string ) {
    this._definitionString = value;
  }
  public resetDefinitionString() {
    this._definitionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionStringInput() {
    return this._definitionString
  }

  // definition_substitutions - computed: false, optional: true, required: false
  private _definitionSubstitutions?: { [key: string]: string } | cdktf.IResolvable;
  public get definitionSubstitutions() {
    return this.interpolationForAttribute('definition_substitutions') as any;
  }
  public set definitionSubstitutions(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._definitionSubstitutions = value;
  }
  public resetDefinitionSubstitutions() {
    this._definitionSubstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionSubstitutionsInput() {
    return this._definitionSubstitutions
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: StepfunctionsStateMachineLoggingConfiguration;
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: StepfunctionsStateMachineLoggingConfiguration ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // state_machine_name - computed: true, optional: true, required: false
  private _stateMachineName?: string;
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  public resetStateMachineName() {
    this._stateMachineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName
  }

  // state_machine_type - computed: false, optional: true, required: false
  private _stateMachineType?: string;
  public get stateMachineType() {
    return this.getStringAttribute('state_machine_type');
  }
  public set stateMachineType(value: string ) {
    this._stateMachineType = value;
  }
  public resetStateMachineType() {
    this._stateMachineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineTypeInput() {
    return this._stateMachineType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: StepfunctionsStateMachineTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: StepfunctionsStateMachineTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tracing_configuration - computed: false, optional: true, required: false
  private _tracingConfiguration?: StepfunctionsStateMachineTracingConfiguration;
  public get tracingConfiguration() {
    return this.interpolationForAttribute('tracing_configuration') as any;
  }
  public set tracingConfiguration(value: StepfunctionsStateMachineTracingConfiguration ) {
    this._tracingConfiguration = value;
  }
  public resetTracingConfiguration() {
    this._tracingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigurationInput() {
    return this._tracingConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.hashMapper(cdktf.anyToTerraform)(this._definition),
      definition_s3_location: stepfunctionsStateMachineDefinitionS3LocationToTerraform(this._definitionS3Location),
      definition_string: cdktf.stringToTerraform(this._definitionString),
      definition_substitutions: cdktf.hashMapper(cdktf.anyToTerraform)(this._definitionSubstitutions),
      logging_configuration: stepfunctionsStateMachineLoggingConfigurationToTerraform(this._loggingConfiguration),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      state_machine_name: cdktf.stringToTerraform(this._stateMachineName),
      state_machine_type: cdktf.stringToTerraform(this._stateMachineType),
      tags: cdktf.listMapper(stepfunctionsStateMachineTagsToTerraform)(this._tags),
      tracing_configuration: stepfunctionsStateMachineTracingConfigurationToTerraform(this._tracingConfiguration),
    };
  }
}
