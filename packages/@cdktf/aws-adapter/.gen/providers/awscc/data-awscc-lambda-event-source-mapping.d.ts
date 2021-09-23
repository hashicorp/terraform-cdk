import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html#id DataAwsccLambdaEventSourceMapping#id}
    */
    readonly id: string;
}
export declare class DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure extends cdktf.ComplexComputedList {
    get destination(): string;
}
export declare function dataAwsccLambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure): any;
export declare class DataAwsccLambdaEventSourceMappingDestinationConfig extends cdktf.ComplexComputedList {
    get onFailure(): any;
}
export declare function dataAwsccLambdaEventSourceMappingDestinationConfigToTerraform(struct?: DataAwsccLambdaEventSourceMappingDestinationConfig): any;
export declare class DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints extends cdktf.ComplexComputedList {
    get kafkaBootstrapServers(): string[];
}
export declare function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints): any;
export declare class DataAwsccLambdaEventSourceMappingSelfManagedEventSource extends cdktf.ComplexComputedList {
    get endpoints(): any;
}
export declare function dataAwsccLambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: DataAwsccLambdaEventSourceMappingSelfManagedEventSource): any;
export declare class DataAwsccLambdaEventSourceMappingSourceAccessConfigurations extends cdktf.ComplexComputedList {
    get type(): string;
    get uri(): string;
}
export declare function dataAwsccLambdaEventSourceMappingSourceAccessConfigurationsToTerraform(struct?: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html awscc_lambda_event_source_mapping}
*/
export declare class DataAwsccLambdaEventSourceMapping extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lambda_event_source_mapping.html awscc_lambda_event_source_mapping} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLambdaEventSourceMappingConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLambdaEventSourceMappingConfig);
    get batchSize(): number;
    get bisectBatchOnFunctionError(): cdktf.IResolvable;
    get destinationConfig(): any;
    get enabled(): cdktf.IResolvable;
    get eventSourceArn(): string;
    get functionName(): string;
    get functionResponseTypes(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get maximumBatchingWindowInSeconds(): number;
    get maximumRecordAgeInSeconds(): number;
    get maximumRetryAttempts(): number;
    get parallelizationFactor(): number;
    get queues(): string[];
    get selfManagedEventSource(): any;
    get sourceAccessConfigurations(): any;
    get startingPosition(): string;
    get startingPositionTimestamp(): number;
    get topics(): string[];
    get tumblingWindowInSeconds(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
