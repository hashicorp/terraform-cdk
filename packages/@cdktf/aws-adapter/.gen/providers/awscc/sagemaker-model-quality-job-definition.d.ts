import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the job definition.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#job_definition_name SagemakerModelQualityJobDefinition#job_definition_name}
    */
    readonly jobDefinitionName?: string;
    /**
    * Identifies the resources to deploy for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#job_resources SagemakerModelQualityJobDefinition#job_resources}
    */
    readonly jobResources: SagemakerModelQualityJobDefinitionJobResources;
    /**
    * Container image configuration object for the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#model_quality_app_specification SagemakerModelQualityJobDefinition#model_quality_app_specification}
    */
    readonly modelQualityAppSpecification: SagemakerModelQualityJobDefinitionModelQualityAppSpecification;
    /**
    * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#model_quality_baseline_config SagemakerModelQualityJobDefinition#model_quality_baseline_config}
    */
    readonly modelQualityBaselineConfig?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig;
    /**
    * The inputs for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#model_quality_job_input SagemakerModelQualityJobDefinition#model_quality_job_input}
    */
    readonly modelQualityJobInput: SagemakerModelQualityJobDefinitionModelQualityJobInput;
    /**
    * The output configuration for monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#model_quality_job_output_config SagemakerModelQualityJobDefinition#model_quality_job_output_config}
    */
    readonly modelQualityJobOutputConfig: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
    /**
    * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#network_config SagemakerModelQualityJobDefinition#network_config}
    */
    readonly networkConfig?: SagemakerModelQualityJobDefinitionNetworkConfig;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#role_arn SagemakerModelQualityJobDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Specifies a time limit for how long the monitoring job is allowed to run.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#stopping_condition SagemakerModelQualityJobDefinition#stopping_condition}
    */
    readonly stoppingCondition?: SagemakerModelQualityJobDefinitionStoppingCondition;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#tags SagemakerModelQualityJobDefinition#tags}
    */
    readonly tags?: SagemakerModelQualityJobDefinitionTags[];
}
export interface SagemakerModelQualityJobDefinitionJobResourcesClusterConfig {
    /**
    * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#instance_count SagemakerModelQualityJobDefinition#instance_count}
    */
    readonly instanceCount: number;
    /**
    * The ML compute instance type for the processing job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#instance_type SagemakerModelQualityJobDefinition#instance_type}
    */
    readonly instanceType: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#volume_kms_key_id SagemakerModelQualityJobDefinition#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#volume_size_in_gb SagemakerModelQualityJobDefinition#volume_size_in_gb}
    */
    readonly volumeSizeInGb: number;
}
export declare function sagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig): any;
export interface SagemakerModelQualityJobDefinitionJobResources {
    /**
    * Configuration for the cluster used to run model monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#cluster_config SagemakerModelQualityJobDefinition#cluster_config}
    */
    readonly clusterConfig: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig;
}
export declare function sagemakerModelQualityJobDefinitionJobResourcesToTerraform(struct?: SagemakerModelQualityJobDefinitionJobResources): any;
export interface SagemakerModelQualityJobDefinitionModelQualityAppSpecification {
    /**
    * An array of arguments for the container used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#container_arguments SagemakerModelQualityJobDefinition#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * Specifies the entrypoint for a container used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#container_entrypoint SagemakerModelQualityJobDefinition#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#environment SagemakerModelQualityJobDefinition#environment}
    */
    readonly environment?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The container image to be run by the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#image_uri SagemakerModelQualityJobDefinition#image_uri}
    */
    readonly imageUri: string;
    /**
    * The Amazon S3 URI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#post_analytics_processor_source_uri SagemakerModelQualityJobDefinition#post_analytics_processor_source_uri}
    */
    readonly postAnalyticsProcessorSourceUri?: string;
    /**
    * The status of the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#problem_type SagemakerModelQualityJobDefinition#problem_type}
    */
    readonly problemType: string;
    /**
    * The Amazon S3 URI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#record_preprocessor_source_uri SagemakerModelQualityJobDefinition#record_preprocessor_source_uri}
    */
    readonly recordPreprocessorSourceUri?: string;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityAppSpecification): any;
export interface SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource {
    /**
    * The Amazon S3 URI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_uri SagemakerModelQualityJobDefinition#s3_uri}
    */
    readonly s3Uri?: string;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource): any;
export interface SagemakerModelQualityJobDefinitionModelQualityBaselineConfig {
    /**
    * The name of a processing job
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#baselining_job_name SagemakerModelQualityJobDefinition#baselining_job_name}
    */
    readonly baseliningJobName?: string;
    /**
    * The baseline constraints resource for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#constraints_resource SagemakerModelQualityJobDefinition#constraints_resource}
    */
    readonly constraintsResource?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput {
    /**
    * The time offsets in ISO duration format
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#end_time_offset SagemakerModelQualityJobDefinition#end_time_offset}
    */
    readonly endTimeOffset?: string;
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#endpoint_name SagemakerModelQualityJobDefinition#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * Index or JSONpath to locate predicted label(s)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#inference_attribute SagemakerModelQualityJobDefinition#inference_attribute}
    */
    readonly inferenceAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#local_path SagemakerModelQualityJobDefinition#local_path}
    */
    readonly localPath: string;
    /**
    * Index or JSONpath to locate probabilities
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#probability_attribute SagemakerModelQualityJobDefinition#probability_attribute}
    */
    readonly probabilityAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#probability_threshold_attribute SagemakerModelQualityJobDefinition#probability_threshold_attribute}
    */
    readonly probabilityThresholdAttribute?: number;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_data_distribution_type SagemakerModelQualityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_input_mode SagemakerModelQualityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
    /**
    * The time offsets in ISO duration format
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#start_time_offset SagemakerModelQualityJobDefinition#start_time_offset}
    */
    readonly startTimeOffset?: string;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input {
    /**
    * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_uri SagemakerModelQualityJobDefinition#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobInput {
    /**
    * The endpoint for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#endpoint_input SagemakerModelQualityJobDefinition#endpoint_input}
    */
    readonly endpointInput: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput;
    /**
    * Ground truth input provided in S3
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#ground_truth_s3_input SagemakerModelQualityJobDefinition#ground_truth_s3_input}
    */
    readonly groundTruthS3Input: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInput): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output {
    /**
    * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#local_path SagemakerModelQualityJobDefinition#local_path}
    */
    readonly localPath: string;
    /**
    * Whether to upload the results of the monitoring job continuously or after the job completes.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_upload_mode SagemakerModelQualityJobDefinition#s3_upload_mode}
    */
    readonly s3UploadMode?: string;
    /**
    * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_uri SagemakerModelQualityJobDefinition#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs {
    /**
    * Information about where and how to store the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_output SagemakerModelQualityJobDefinition#s3_output}
    */
    readonly s3Output: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output;
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs): any;
export interface SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig {
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#kms_key_id SagemakerModelQualityJobDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#monitoring_outputs SagemakerModelQualityJobDefinition#monitoring_outputs}
    */
    readonly monitoringOutputs: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs[];
}
export declare function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig): any;
export interface SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#security_group_ids SagemakerModelQualityJobDefinition#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#subnets SagemakerModelQualityJobDefinition#subnets}
    */
    readonly subnets: string[];
}
export declare function sagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig): any;
export interface SagemakerModelQualityJobDefinitionNetworkConfig {
    /**
    * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#enable_inter_container_traffic_encryption SagemakerModelQualityJobDefinition#enable_inter_container_traffic_encryption}
    */
    readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
    /**
    * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#enable_network_isolation SagemakerModelQualityJobDefinition#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#vpc_config SagemakerModelQualityJobDefinition#vpc_config}
    */
    readonly vpcConfig?: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig;
}
export declare function sagemakerModelQualityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionNetworkConfig): any;
export interface SagemakerModelQualityJobDefinitionStoppingCondition {
    /**
    * The maximum runtime allowed in seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}
    */
    readonly maxRuntimeInSeconds: number;
}
export declare function sagemakerModelQualityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerModelQualityJobDefinitionStoppingCondition): any;
export interface SagemakerModelQualityJobDefinitionTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#key SagemakerModelQualityJobDefinition#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#value SagemakerModelQualityJobDefinition#value}
    */
    readonly value: string;
}
export declare function sagemakerModelQualityJobDefinitionTagsToTerraform(struct?: SagemakerModelQualityJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition}
*/
export declare class SagemakerModelQualityJobDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelQualityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelQualityJobDefinitionConfig);
    get creationTime(): string;
    get id(): string;
    get jobDefinitionArn(): string;
    private _jobDefinitionName?;
    get jobDefinitionName(): string;
    set jobDefinitionName(value: string);
    resetJobDefinitionName(): void;
    get jobDefinitionNameInput(): string | undefined;
    private _jobResources;
    get jobResources(): SagemakerModelQualityJobDefinitionJobResources;
    set jobResources(value: SagemakerModelQualityJobDefinitionJobResources);
    get jobResourcesInput(): SagemakerModelQualityJobDefinitionJobResources;
    private _modelQualityAppSpecification;
    get modelQualityAppSpecification(): SagemakerModelQualityJobDefinitionModelQualityAppSpecification;
    set modelQualityAppSpecification(value: SagemakerModelQualityJobDefinitionModelQualityAppSpecification);
    get modelQualityAppSpecificationInput(): SagemakerModelQualityJobDefinitionModelQualityAppSpecification;
    private _modelQualityBaselineConfig?;
    get modelQualityBaselineConfig(): SagemakerModelQualityJobDefinitionModelQualityBaselineConfig;
    set modelQualityBaselineConfig(value: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig);
    resetModelQualityBaselineConfig(): void;
    get modelQualityBaselineConfigInput(): SagemakerModelQualityJobDefinitionModelQualityBaselineConfig | undefined;
    private _modelQualityJobInput;
    get modelQualityJobInput(): SagemakerModelQualityJobDefinitionModelQualityJobInput;
    set modelQualityJobInput(value: SagemakerModelQualityJobDefinitionModelQualityJobInput);
    get modelQualityJobInputInput(): SagemakerModelQualityJobDefinitionModelQualityJobInput;
    private _modelQualityJobOutputConfig;
    get modelQualityJobOutputConfig(): SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
    set modelQualityJobOutputConfig(value: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig);
    get modelQualityJobOutputConfigInput(): SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
    private _networkConfig?;
    get networkConfig(): SagemakerModelQualityJobDefinitionNetworkConfig;
    set networkConfig(value: SagemakerModelQualityJobDefinitionNetworkConfig);
    resetNetworkConfig(): void;
    get networkConfigInput(): SagemakerModelQualityJobDefinitionNetworkConfig | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stoppingCondition?;
    get stoppingCondition(): SagemakerModelQualityJobDefinitionStoppingCondition;
    set stoppingCondition(value: SagemakerModelQualityJobDefinitionStoppingCondition);
    resetStoppingCondition(): void;
    get stoppingConditionInput(): SagemakerModelQualityJobDefinitionStoppingCondition | undefined;
    private _tags?;
    get tags(): SagemakerModelQualityJobDefinitionTags[];
    set tags(value: SagemakerModelQualityJobDefinitionTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerModelQualityJobDefinitionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
