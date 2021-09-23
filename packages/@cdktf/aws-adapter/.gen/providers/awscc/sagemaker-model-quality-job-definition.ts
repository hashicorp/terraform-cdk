// https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function sagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export interface SagemakerModelQualityJobDefinitionJobResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#cluster_config SagemakerModelQualityJobDefinition#cluster_config}
  */
  readonly clusterConfig: SagemakerModelQualityJobDefinitionJobResourcesClusterConfig;
}

export function sagemakerModelQualityJobDefinitionJobResourcesToTerraform(struct?: SagemakerModelQualityJobDefinitionJobResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: sagemakerModelQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

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
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
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

export function sagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerEntrypoint),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    problem_type: cdktf.stringToTerraform(struct!.problemType),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}

export interface SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_uri SagemakerModelQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

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

export function sagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: sagemakerModelQualityJobDefinitionModelQualityBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
  }
}

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

export function sagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    inference_attribute: cdktf.stringToTerraform(struct!.inferenceAttribute),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    probability_attribute: cdktf.stringToTerraform(struct!.probabilityAttribute),
    probability_threshold_attribute: cdktf.numberToTerraform(struct!.probabilityThresholdAttribute),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}

export interface SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input {
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_uri SagemakerModelQualityJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3Input): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

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

export function sagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: sagemakerModelQualityJobDefinitionModelQualityJobInputEndpointInputToTerraform(struct!.endpointInput),
    ground_truth_s3_input: sagemakerModelQualityJobDefinitionModelQualityJobInputGroundTruthS3InputToTerraform(struct!.groundTruthS3Input),
  }
}

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

export function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs {
  /**
  * Information about where and how to store the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#s3_output SagemakerModelQualityJobDefinition#s3_output}
  */
  readonly s3Output: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3Output;
}

export function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

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

export function sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

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

export function sagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

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

export function sagemakerModelQualityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerModelQualityJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerModelQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export interface SagemakerModelQualityJobDefinitionStoppingCondition {
  /**
  * The maximum runtime allowed in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html#max_runtime_in_seconds SagemakerModelQualityJobDefinition#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds: number;
}

export function sagemakerModelQualityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerModelQualityJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

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

export function sagemakerModelQualityJobDefinitionTagsToTerraform(struct?: SagemakerModelQualityJobDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition}
*/
export class SagemakerModelQualityJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_model_quality_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_quality_job_definition.html awscc_sagemaker_model_quality_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_quality_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._jobDefinitionName = config.jobDefinitionName;
    this._jobResources = config.jobResources;
    this._modelQualityAppSpecification = config.modelQualityAppSpecification;
    this._modelQualityBaselineConfig = config.modelQualityBaselineConfig;
    this._modelQualityJobInput = config.modelQualityJobInput;
    this._modelQualityJobOutputConfig = config.modelQualityJobOutputConfig;
    this._networkConfig = config.networkConfig;
    this._roleArn = config.roleArn;
    this._stoppingCondition = config.stoppingCondition;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: true, required: false
  private _jobDefinitionName?: string;
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }
  public set jobDefinitionName(value: string) {
    this._jobDefinitionName = value;
  }
  public resetJobDefinitionName() {
    this._jobDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDefinitionNameInput() {
    return this._jobDefinitionName
  }

  // job_resources - computed: false, optional: false, required: true
  private _jobResources: SagemakerModelQualityJobDefinitionJobResources;
  public get jobResources() {
    return this.interpolationForAttribute('job_resources') as any;
  }
  public set jobResources(value: SagemakerModelQualityJobDefinitionJobResources) {
    this._jobResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources
  }

  // model_quality_app_specification - computed: false, optional: false, required: true
  private _modelQualityAppSpecification: SagemakerModelQualityJobDefinitionModelQualityAppSpecification;
  public get modelQualityAppSpecification() {
    return this.interpolationForAttribute('model_quality_app_specification') as any;
  }
  public set modelQualityAppSpecification(value: SagemakerModelQualityJobDefinitionModelQualityAppSpecification) {
    this._modelQualityAppSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityAppSpecificationInput() {
    return this._modelQualityAppSpecification
  }

  // model_quality_baseline_config - computed: true, optional: true, required: false
  private _modelQualityBaselineConfig?: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig;
  public get modelQualityBaselineConfig() {
    return this.interpolationForAttribute('model_quality_baseline_config') as any;
  }
  public set modelQualityBaselineConfig(value: SagemakerModelQualityJobDefinitionModelQualityBaselineConfig) {
    this._modelQualityBaselineConfig = value;
  }
  public resetModelQualityBaselineConfig() {
    this._modelQualityBaselineConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityBaselineConfigInput() {
    return this._modelQualityBaselineConfig
  }

  // model_quality_job_input - computed: false, optional: false, required: true
  private _modelQualityJobInput: SagemakerModelQualityJobDefinitionModelQualityJobInput;
  public get modelQualityJobInput() {
    return this.interpolationForAttribute('model_quality_job_input') as any;
  }
  public set modelQualityJobInput(value: SagemakerModelQualityJobDefinitionModelQualityJobInput) {
    this._modelQualityJobInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityJobInputInput() {
    return this._modelQualityJobInput
  }

  // model_quality_job_output_config - computed: false, optional: false, required: true
  private _modelQualityJobOutputConfig: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig;
  public get modelQualityJobOutputConfig() {
    return this.interpolationForAttribute('model_quality_job_output_config') as any;
  }
  public set modelQualityJobOutputConfig(value: SagemakerModelQualityJobDefinitionModelQualityJobOutputConfig) {
    this._modelQualityJobOutputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelQualityJobOutputConfigInput() {
    return this._modelQualityJobOutputConfig
  }

  // network_config - computed: true, optional: true, required: false
  private _networkConfig?: SagemakerModelQualityJobDefinitionNetworkConfig;
  public get networkConfig() {
    return this.interpolationForAttribute('network_config') as any;
  }
  public set networkConfig(value: SagemakerModelQualityJobDefinitionNetworkConfig) {
    this._networkConfig = value;
  }
  public resetNetworkConfig() {
    this._networkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig
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

  // stopping_condition - computed: true, optional: true, required: false
  private _stoppingCondition?: SagemakerModelQualityJobDefinitionStoppingCondition;
  public get stoppingCondition() {
    return this.interpolationForAttribute('stopping_condition') as any;
  }
  public set stoppingCondition(value: SagemakerModelQualityJobDefinitionStoppingCondition) {
    this._stoppingCondition = value;
  }
  public resetStoppingCondition() {
    this._stoppingCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppingConditionInput() {
    return this._stoppingCondition
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerModelQualityJobDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerModelQualityJobDefinitionTags[]) {
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
      job_definition_name: cdktf.stringToTerraform(this._jobDefinitionName),
      job_resources: sagemakerModelQualityJobDefinitionJobResourcesToTerraform(this._jobResources),
      model_quality_app_specification: sagemakerModelQualityJobDefinitionModelQualityAppSpecificationToTerraform(this._modelQualityAppSpecification),
      model_quality_baseline_config: sagemakerModelQualityJobDefinitionModelQualityBaselineConfigToTerraform(this._modelQualityBaselineConfig),
      model_quality_job_input: sagemakerModelQualityJobDefinitionModelQualityJobInputToTerraform(this._modelQualityJobInput),
      model_quality_job_output_config: sagemakerModelQualityJobDefinitionModelQualityJobOutputConfigToTerraform(this._modelQualityJobOutputConfig),
      network_config: sagemakerModelQualityJobDefinitionNetworkConfigToTerraform(this._networkConfig),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stopping_condition: sagemakerModelQualityJobDefinitionStoppingConditionToTerraform(this._stoppingCondition),
      tags: cdktf.listMapper(sagemakerModelQualityJobDefinitionTagsToTerraform)(this._tags),
    };
  }
}
