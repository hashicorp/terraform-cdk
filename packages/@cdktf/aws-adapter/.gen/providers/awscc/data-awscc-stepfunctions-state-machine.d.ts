import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccStepfunctionsStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html#id DataAwsccStepfunctionsStateMachine#id}
    */
    readonly id: string;
}
export declare class DataAwsccStepfunctionsStateMachineDefinitionS3Location extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
    get version(): string;
}
export declare function dataAwsccStepfunctionsStateMachineDefinitionS3LocationToTerraform(struct?: DataAwsccStepfunctionsStateMachineDefinitionS3Location): any;
export declare class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup extends cdktf.ComplexComputedList {
    get logGroupArn(): string;
}
export declare function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): any;
export declare class DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations extends cdktf.ComplexComputedList {
    get cloudwatchLogsLogGroup(): any;
}
export declare function dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations): any;
export declare class DataAwsccStepfunctionsStateMachineLoggingConfiguration extends cdktf.ComplexComputedList {
    get destinations(): any;
    get includeExecutionData(): any;
    get level(): string;
}
export declare function dataAwsccStepfunctionsStateMachineLoggingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineLoggingConfiguration): any;
export declare class DataAwsccStepfunctionsStateMachineTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccStepfunctionsStateMachineTagsToTerraform(struct?: DataAwsccStepfunctionsStateMachineTags): any;
export declare class DataAwsccStepfunctionsStateMachineTracingConfiguration extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare function dataAwsccStepfunctionsStateMachineTracingConfigurationToTerraform(struct?: DataAwsccStepfunctionsStateMachineTracingConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html awscc_stepfunctions_state_machine}
*/
export declare class DataAwsccStepfunctionsStateMachine extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/stepfunctions_state_machine.html awscc_stepfunctions_state_machine} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccStepfunctionsStateMachineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineConfig);
    get arn(): string;
    definition(key: string): string;
    get definitionS3Location(): any;
    get definitionString(): string;
    definitionSubstitutions(key: string): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loggingConfiguration(): any;
    get name(): string;
    get roleArn(): string;
    get stateMachineName(): string;
    get stateMachineType(): string;
    get tags(): any;
    get tracingConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
