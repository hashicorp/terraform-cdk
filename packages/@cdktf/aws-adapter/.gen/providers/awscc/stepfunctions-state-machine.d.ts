import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StepfunctionsStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#definition StepfunctionsStateMachine#definition}
    */
    readonly definition?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
    readonly definitionSubstitutions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function stepfunctionsStateMachineDefinitionS3LocationToTerraform(struct?: StepfunctionsStateMachineDefinitionS3Location): any;
export interface StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#log_group_arn StepfunctionsStateMachine#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export declare function stepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct?: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any;
export interface StepfunctionsStateMachineLoggingConfigurationDestinations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}
    */
    readonly cloudwatchLogsLogGroup?: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
}
export declare function stepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform(struct?: StepfunctionsStateMachineLoggingConfigurationDestinations): any;
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
export declare function stepfunctionsStateMachineLoggingConfigurationToTerraform(struct?: StepfunctionsStateMachineLoggingConfiguration): any;
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
export declare function stepfunctionsStateMachineTagsToTerraform(struct?: StepfunctionsStateMachineTags): any;
export interface StepfunctionsStateMachineTracingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html#enabled StepfunctionsStateMachine#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function stepfunctionsStateMachineTracingConfigurationToTerraform(struct?: StepfunctionsStateMachineTracingConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html awscc_stepfunctions_state_machine}
*/
export declare class StepfunctionsStateMachine extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/stepfunctions_state_machine.html awscc_stepfunctions_state_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StepfunctionsStateMachineConfig
    */
    constructor(scope: Construct, id: string, config: StepfunctionsStateMachineConfig);
    get arn(): string;
    private _definition?;
    get definition(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set definition(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDefinition(): void;
    get definitionInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _definitionS3Location?;
    get definitionS3Location(): StepfunctionsStateMachineDefinitionS3Location;
    set definitionS3Location(value: StepfunctionsStateMachineDefinitionS3Location);
    resetDefinitionS3Location(): void;
    get definitionS3LocationInput(): StepfunctionsStateMachineDefinitionS3Location | undefined;
    private _definitionString?;
    get definitionString(): string;
    set definitionString(value: string);
    resetDefinitionString(): void;
    get definitionStringInput(): string | undefined;
    private _definitionSubstitutions?;
    get definitionSubstitutions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set definitionSubstitutions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDefinitionSubstitutions(): void;
    get definitionSubstitutionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    get id(): string;
    private _loggingConfiguration?;
    get loggingConfiguration(): StepfunctionsStateMachineLoggingConfiguration;
    set loggingConfiguration(value: StepfunctionsStateMachineLoggingConfiguration);
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): StepfunctionsStateMachineLoggingConfiguration | undefined;
    get name(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stateMachineName?;
    get stateMachineName(): string;
    set stateMachineName(value: string);
    resetStateMachineName(): void;
    get stateMachineNameInput(): string | undefined;
    private _stateMachineType?;
    get stateMachineType(): string;
    set stateMachineType(value: string);
    resetStateMachineType(): void;
    get stateMachineTypeInput(): string | undefined;
    private _tags?;
    get tags(): StepfunctionsStateMachineTags[];
    set tags(value: StepfunctionsStateMachineTags[]);
    resetTags(): void;
    get tagsInput(): StepfunctionsStateMachineTags[] | undefined;
    private _tracingConfiguration?;
    get tracingConfiguration(): StepfunctionsStateMachineTracingConfiguration;
    set tracingConfiguration(value: StepfunctionsStateMachineTracingConfiguration);
    resetTracingConfiguration(): void;
    get tracingConfigurationInput(): StepfunctionsStateMachineTracingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
