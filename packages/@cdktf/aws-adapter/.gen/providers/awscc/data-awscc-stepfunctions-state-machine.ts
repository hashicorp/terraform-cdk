// https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccStepfunctionsStateMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html#id DataAwsccStepfunctionsStateMachine#id}
  */
  readonly id: string;
}
export class DataAwsccStepfunctionsStateMachineDefinitionS3Location extends cdktf.ComplexComputedList {

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccStepfunctionsStateMachineDefinitionS3LocationToTerraform(struct?: DataAwsccStepfunctionsStateMachineDefinitionS3Location): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup extends cdktf.ComplexComputedList {

  // log_group_arn - computed: true, optional: false, required: false
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
  }
}

export class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations extends cdktf.ComplexComputedList {

  // cloudwatch_logs_log_group - computed: true, optional: false, required: false
  public get cloudwatchLogsLogGroup() {
    return this.interpolationForAttribute('cloudwatch_logs_log_group') as any;
  }
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logs_log_group: dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct!.cloudwatchLogsLogGroup),
  }
}

export class DataAwsccStepfunctionsStateMachineLoggingConfiguration extends cdktf.ComplexComputedList {

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.interpolationForAttribute('destinations') as any;
  }

  // include_execution_data - computed: true, optional: false, required: false
  public get includeExecutionData() {
    return this.getBooleanAttribute('include_execution_data');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }
}

export function dataAwsccStepfunctionsStateMachineLoggingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destinations: cdktf.listMapper(dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform)(struct!.destinations),
    include_execution_data: cdktf.booleanToTerraform(struct!.includeExecutionData),
    level: cdktf.stringToTerraform(struct!.level),
  }
}

export class DataAwsccStepfunctionsStateMachineTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccStepfunctionsStateMachineTagsToTerraform(struct?: DataAwsccStepfunctionsStateMachineTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccStepfunctionsStateMachineTracingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export function dataAwsccStepfunctionsStateMachineTracingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineTracingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html awscc_stepfunctions_state_machine}
*/
export class DataAwsccStepfunctionsStateMachine extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_stepfunctions_state_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html awscc_stepfunctions_state_machine} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccStepfunctionsStateMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // definition - computed: true, optional: false, required: false
  public definition(key: string): string {
    return new cdktf.StringMap(this, 'definition').lookup(key);
  }

  // definition_s3_location - computed: true, optional: false, required: false
  public get definitionS3Location() {
    return this.interpolationForAttribute('definition_s3_location') as any;
  }

  // definition_string - computed: true, optional: false, required: false
  public get definitionString() {
    return this.getStringAttribute('definition_string');
  }

  // definition_substitutions - computed: true, optional: false, required: false
  public definitionSubstitutions(key: string): string {
    return new cdktf.StringMap(this, 'definition_substitutions').lookup(key);
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

  // logging_configuration - computed: true, optional: false, required: false
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state_machine_name - computed: true, optional: false, required: false
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }

  // state_machine_type - computed: true, optional: false, required: false
  public get stateMachineType() {
    return this.getStringAttribute('state_machine_type');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // tracing_configuration - computed: true, optional: false, required: false
  public get tracingConfiguration() {
    return this.interpolationForAttribute('tracing_configuration') as any;
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
