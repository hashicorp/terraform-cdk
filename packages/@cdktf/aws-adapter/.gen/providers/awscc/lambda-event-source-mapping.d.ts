import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * The maximum number of items to retrieve in a single batch.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#batch_size LambdaEventSourceMapping#batch_size}
    */
    readonly batchSize?: number;
    /**
    * (Streams) If the function returns an error, split the batch in two and retry.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
    */
    readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
    /**
    * (Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#destination_config LambdaEventSourceMapping#destination_config}
    */
    readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig;
    /**
    * Disables the event source mapping to pause polling and invocation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#enabled LambdaEventSourceMapping#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the event source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#event_source_arn LambdaEventSourceMapping#event_source_arn}
    */
    readonly eventSourceArn?: string;
    /**
    * The name of the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#function_name LambdaEventSourceMapping#function_name}
    */
    readonly functionName: string;
    /**
    * (Streams) A list of response types supported by the function.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#function_response_types LambdaEventSourceMapping#function_response_types}
    */
    readonly functionResponseTypes?: string[];
    /**
    * (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * (Streams) The maximum age of a record that Lambda sends to a function for processing.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * (Streams) The maximum number of times to retry when the function returns an error.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * (Streams) The number of batches to process from each shard concurrently.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * (ActiveMQ) A list of ActiveMQ queues.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#queues LambdaEventSourceMapping#queues}
    */
    readonly queues?: string[];
    /**
    * The configuration used by AWS Lambda to access a self-managed event source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
    */
    readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
    /**
    * A list of SourceAccessConfiguration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#source_access_configurations LambdaEventSourceMapping#source_access_configurations}
    */
    readonly sourceAccessConfigurations?: LambdaEventSourceMappingSourceAccessConfigurations[];
    /**
    * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#starting_position LambdaEventSourceMapping#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: number;
    /**
    * (Kafka) A list of Kafka topics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#topics LambdaEventSourceMapping#topics}
    */
    readonly topics?: string[];
    /**
    * (Streams) Tumbling window (non-overlapping time window) duration to perform aggregations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
    */
    readonly tumblingWindowInSeconds?: number;
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
    /**
    * The Amazon Resource Name (ARN) of the destination resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#destination LambdaEventSourceMapping#destination}
    */
    readonly destination?: string;
}
export declare function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailure): any;
export interface LambdaEventSourceMappingDestinationConfig {
    /**
    * A destination for events that failed processing.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#on_failure LambdaEventSourceMapping#on_failure}
    */
    readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure;
}
export declare function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfig): any;
export interface LambdaEventSourceMappingSelfManagedEventSourceEndpoints {
    /**
    * A list of Kafka server endpoints.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#kafka_bootstrap_servers LambdaEventSourceMapping#kafka_bootstrap_servers}
    */
    readonly kafkaBootstrapServers?: string[];
}
export declare function lambdaEventSourceMappingSelfManagedEventSourceEndpointsToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceEndpoints): any;
export interface LambdaEventSourceMappingSelfManagedEventSource {
    /**
    * The endpoints used by AWS Lambda to access a self-managed event source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#endpoints LambdaEventSourceMapping#endpoints}
    */
    readonly endpoints?: LambdaEventSourceMappingSelfManagedEventSourceEndpoints;
}
export declare function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSource): any;
export interface LambdaEventSourceMappingSourceAccessConfigurations {
    /**
    * The type of source access configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#type LambdaEventSourceMapping#type}
    */
    readonly type?: string;
    /**
    * The URI for the source access configuration resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html#uri LambdaEventSourceMapping#uri}
    */
    readonly uri?: string;
}
export declare function lambdaEventSourceMappingSourceAccessConfigurationsToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfigurations): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html awscc_lambda_event_source_mapping}
*/
export declare class LambdaEventSourceMapping extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lambda_event_source_mapping.html awscc_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _bisectBatchOnFunctionError?;
    get bisectBatchOnFunctionError(): boolean | cdktf.IResolvable;
    set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable);
    resetBisectBatchOnFunctionError(): void;
    get bisectBatchOnFunctionErrorInput(): boolean | cdktf.IResolvable | undefined;
    private _destinationConfig?;
    get destinationConfig(): LambdaEventSourceMappingDestinationConfig;
    set destinationConfig(value: LambdaEventSourceMappingDestinationConfig);
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaEventSourceMappingDestinationConfig | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _eventSourceArn?;
    get eventSourceArn(): string;
    set eventSourceArn(value: string);
    resetEventSourceArn(): void;
    get eventSourceArnInput(): string | undefined;
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    private _functionResponseTypes?;
    get functionResponseTypes(): string[];
    set functionResponseTypes(value: string[]);
    resetFunctionResponseTypes(): void;
    get functionResponseTypesInput(): string[] | undefined;
    get id(): string;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _maximumRecordAgeInSeconds?;
    get maximumRecordAgeInSeconds(): number;
    set maximumRecordAgeInSeconds(value: number);
    resetMaximumRecordAgeInSeconds(): void;
    get maximumRecordAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number | undefined;
    private _queues?;
    get queues(): string[];
    set queues(value: string[]);
    resetQueues(): void;
    get queuesInput(): string[] | undefined;
    private _selfManagedEventSource?;
    get selfManagedEventSource(): LambdaEventSourceMappingSelfManagedEventSource;
    set selfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource);
    resetSelfManagedEventSource(): void;
    get selfManagedEventSourceInput(): LambdaEventSourceMappingSelfManagedEventSource | undefined;
    private _sourceAccessConfigurations?;
    get sourceAccessConfigurations(): LambdaEventSourceMappingSourceAccessConfigurations[];
    set sourceAccessConfigurations(value: LambdaEventSourceMappingSourceAccessConfigurations[]);
    resetSourceAccessConfigurations(): void;
    get sourceAccessConfigurationsInput(): LambdaEventSourceMappingSourceAccessConfigurations[] | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
    private _startingPositionTimestamp?;
    get startingPositionTimestamp(): number;
    set startingPositionTimestamp(value: number);
    resetStartingPositionTimestamp(): void;
    get startingPositionTimestampInput(): number | undefined;
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    resetTopics(): void;
    get topicsInput(): string[] | undefined;
    private _tumblingWindowInSeconds?;
    get tumblingWindowInSeconds(): number;
    set tumblingWindowInSeconds(value: number);
    resetTumblingWindowInSeconds(): void;
    get tumblingWindowInSecondsInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
