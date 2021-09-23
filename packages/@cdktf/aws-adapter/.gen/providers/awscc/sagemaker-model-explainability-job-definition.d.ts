import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelExplainabilityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the job definition.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#job_definition_name SagemakerModelExplainabilityJobDefinition#job_definition_name}
    */
    readonly jobDefinitionName?: string;
    /**
    * Identifies the resources to deploy for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#job_resources SagemakerModelExplainabilityJobDefinition#job_resources}
    */
    readonly jobResources: SagemakerModelExplainabilityJobDefinitionJobResources;
    /**
    * Container image configuration object for the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#model_explainability_app_specification SagemakerModelExplainabilityJobDefinition#model_explainability_app_specification}
    */
    readonly modelExplainabilityAppSpecification: SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
    /**
    * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#model_explainability_baseline_config SagemakerModelExplainabilityJobDefinition#model_explainability_baseline_config}
    */
    readonly modelExplainabilityBaselineConfig?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
    /**
    * The inputs for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#model_explainability_job_input SagemakerModelExplainabilityJobDefinition#model_explainability_job_input}
    */
    readonly modelExplainabilityJobInput: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
    /**
    * The output configuration for monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#model_explainability_job_output_config SagemakerModelExplainabilityJobDefinition#model_explainability_job_output_config}
    */
    readonly modelExplainabilityJobOutputConfig: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig;
    /**
    * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#network_config SagemakerModelExplainabilityJobDefinition#network_config}
    */
    readonly networkConfig?: SagemakerModelExplainabilityJobDefinitionNetworkConfig;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#role_arn SagemakerModelExplainabilityJobDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Specifies a time limit for how long the monitoring job is allowed to run.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#stopping_condition SagemakerModelExplainabilityJobDefinition#stopping_condition}
    */
    readonly stoppingCondition?: SagemakerModelExplainabilityJobDefinitionStoppingCondition;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#tags SagemakerModelExplainabilityJobDefinition#tags}
    */
    readonly tags?: SagemakerModelExplainabilityJobDefinitionTags[];
}
export interface SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig {
    /**
    * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#instance_count SagemakerModelExplainabilityJobDefinition#instance_count}
    */
    readonly instanceCount: number;
    /**
    * The ML compute instance type for the processing job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#instance_type SagemakerModelExplainabilityJobDefinition#instance_type}
    */
    readonly instanceType: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#volume_kms_key_id SagemakerModelExplainabilityJobDefinition#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#volume_size_in_gb SagemakerModelExplainabilityJobDefinition#volume_size_in_gb}
    */
    readonly volumeSizeInGb: number;
}
export declare function sagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig): any;
export interface SagemakerModelExplainabilityJobDefinitionJobResources {
    /**
    * Configuration for the cluster used to run model monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#cluster_config SagemakerModelExplainabilityJobDefinition#cluster_config}
    */
    readonly clusterConfig: SagemakerModelExplainabilityJobDefinitionJobResourcesClusterConfig;
}
export declare function sagemakerModelExplainabilityJobDefinitionJobResourcesToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionJobResources): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification {
    /**
    * The S3 URI to an analysis configuration file
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#config_uri SagemakerModelExplainabilityJobDefinition#config_uri}
    */
    readonly configUri: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#environment SagemakerModelExplainabilityJobDefinition#environment}
    */
    readonly environment?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The container image to be run by the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#image_uri SagemakerModelExplainabilityJobDefinition#image_uri}
    */
    readonly imageUri: string;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecificationToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource {
    /**
    * The Amazon S3 URI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_uri SagemakerModelExplainabilityJobDefinition#s3_uri}
    */
    readonly s3Uri?: string;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig {
    /**
    * The name of a processing job
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#baselining_job_name SagemakerModelExplainabilityJobDefinition#baselining_job_name}
    */
    readonly baseliningJobName?: string;
    /**
    * The baseline constraints resource for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#constraints_resource SagemakerModelExplainabilityJobDefinition#constraints_resource}
    */
    readonly constraintsResource?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigConstraintsResource;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfigToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput {
    /**
    * The name of the endpoint used to run the monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#endpoint_name SagemakerModelExplainabilityJobDefinition#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * JSONpath to locate features in JSONlines dataset
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#features_attribute SagemakerModelExplainabilityJobDefinition#features_attribute}
    */
    readonly featuresAttribute?: string;
    /**
    * Index or JSONpath to locate predicted label(s)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#inference_attribute SagemakerModelExplainabilityJobDefinition#inference_attribute}
    */
    readonly inferenceAttribute?: string;
    /**
    * Path to the filesystem where the endpoint data is available to the container.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#local_path SagemakerModelExplainabilityJobDefinition#local_path}
    */
    readonly localPath: string;
    /**
    * Index or JSONpath to locate probabilities
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#probability_attribute SagemakerModelExplainabilityJobDefinition#probability_attribute}
    */
    readonly probabilityAttribute?: string;
    /**
    * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_data_distribution_type SagemakerModelExplainabilityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_input_mode SagemakerModelExplainabilityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInputToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput {
    /**
    * The endpoint for a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#endpoint_input SagemakerModelExplainabilityJobDefinition#endpoint_input}
    */
    readonly endpointInput: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputEndpointInput;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInputToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output {
    /**
    * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#local_path SagemakerModelExplainabilityJobDefinition#local_path}
    */
    readonly localPath: string;
    /**
    * Whether to upload the results of the monitoring job continuously or after the job completes.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_upload_mode SagemakerModelExplainabilityJobDefinition#s3_upload_mode}
    */
    readonly s3UploadMode?: string;
    /**
    * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_uri SagemakerModelExplainabilityJobDefinition#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs {
    /**
    * Information about where and how to store the results of a monitoring job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#s3_output SagemakerModelExplainabilityJobDefinition#s3_output}
    */
    readonly s3Output: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsS3Output;
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs): any;
export interface SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig {
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#kms_key_id SagemakerModelExplainabilityJobDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#monitoring_outputs SagemakerModelExplainabilityJobDefinition#monitoring_outputs}
    */
    readonly monitoringOutputs: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigMonitoringOutputs[];
}
export declare function sagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfigToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig): any;
export interface SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig {
    /**
    * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#security_group_ids SagemakerModelExplainabilityJobDefinition#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#subnets SagemakerModelExplainabilityJobDefinition#subnets}
    */
    readonly subnets: string[];
}
export declare function sagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig): any;
export interface SagemakerModelExplainabilityJobDefinitionNetworkConfig {
    /**
    * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#enable_inter_container_traffic_encryption SagemakerModelExplainabilityJobDefinition#enable_inter_container_traffic_encryption}
    */
    readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
    /**
    * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#enable_network_isolation SagemakerModelExplainabilityJobDefinition#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#vpc_config SagemakerModelExplainabilityJobDefinition#vpc_config}
    */
    readonly vpcConfig?: SagemakerModelExplainabilityJobDefinitionNetworkConfigVpcConfig;
}
export declare function sagemakerModelExplainabilityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionNetworkConfig): any;
export interface SagemakerModelExplainabilityJobDefinitionStoppingCondition {
    /**
    * The maximum runtime allowed in seconds.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#max_runtime_in_seconds SagemakerModelExplainabilityJobDefinition#max_runtime_in_seconds}
    */
    readonly maxRuntimeInSeconds: number;
}
export declare function sagemakerModelExplainabilityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionStoppingCondition): any;
export interface SagemakerModelExplainabilityJobDefinitionTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#key SagemakerModelExplainabilityJobDefinition#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html#value SagemakerModelExplainabilityJobDefinition#value}
    */
    readonly value: string;
}
export declare function sagemakerModelExplainabilityJobDefinitionTagsToTerraform(struct?: SagemakerModelExplainabilityJobDefinitionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition}
*/
export declare class SagemakerModelExplainabilityJobDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_explainability_job_definition.html awscc_sagemaker_model_explainability_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelExplainabilityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelExplainabilityJobDefinitionConfig);
    get creationTime(): string;
    get id(): string;
    get jobDefinitionArn(): string;
    private _jobDefinitionName?;
    get jobDefinitionName(): string;
    set jobDefinitionName(value: string);
    resetJobDefinitionName(): void;
    get jobDefinitionNameInput(): string | undefined;
    private _jobResources;
    get jobResources(): SagemakerModelExplainabilityJobDefinitionJobResources;
    set jobResources(value: SagemakerModelExplainabilityJobDefinitionJobResources);
    get jobResourcesInput(): SagemakerModelExplainabilityJobDefinitionJobResources;
    private _modelExplainabilityAppSpecification;
    get modelExplainabilityAppSpecification(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
    set modelExplainabilityAppSpecification(value: SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification);
    get modelExplainabilityAppSpecificationInput(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
    private _modelExplainabilityBaselineConfig?;
    get modelExplainabilityBaselineConfig(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
    set modelExplainabilityBaselineConfig(value: SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig);
    resetModelExplainabilityBaselineConfig(): void;
    get modelExplainabilityBaselineConfigInput(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig | undefined;
    private _modelExplainabilityJobInput;
    get modelExplainabilityJobInput(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
    set modelExplainabilityJobInput(value: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput);
    get modelExplainabilityJobInputInput(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
    private _modelExplainabilityJobOutputConfig;
    get modelExplainabilityJobOutputConfig(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig;
    set modelExplainabilityJobOutputConfig(value: SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig);
    get modelExplainabilityJobOutputConfigInput(): SagemakerModelExplainabilityJobDefinitionModelExplainabilityJobOutputConfig;
    private _networkConfig?;
    get networkConfig(): SagemakerModelExplainabilityJobDefinitionNetworkConfig;
    set networkConfig(value: SagemakerModelExplainabilityJobDefinitionNetworkConfig);
    resetNetworkConfig(): void;
    get networkConfigInput(): SagemakerModelExplainabilityJobDefinitionNetworkConfig | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stoppingCondition?;
    get stoppingCondition(): SagemakerModelExplainabilityJobDefinitionStoppingCondition;
    set stoppingCondition(value: SagemakerModelExplainabilityJobDefinitionStoppingCondition);
    resetStoppingCondition(): void;
    get stoppingConditionInput(): SagemakerModelExplainabilityJobDefinitionStoppingCondition | undefined;
    private _tags?;
    get tags(): SagemakerModelExplainabilityJobDefinitionTags[];
    set tags(value: SagemakerModelExplainabilityJobDefinitionTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerModelExplainabilityJobDefinitionTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
