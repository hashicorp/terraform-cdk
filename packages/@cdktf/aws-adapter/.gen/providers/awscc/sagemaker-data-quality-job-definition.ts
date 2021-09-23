// https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDataQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Container image configuration object for the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}
  */
  readonly dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
  /**
  * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}
  */
  readonly dataQualityBaselineConfig?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
  /**
  * The inputs for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}
  */
  readonly dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInput;
  /**
  * The output configuration for monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}
  */
  readonly dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
  /**
  * The name of the job definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#job_definition_name SagemakerDataQualityJobDefinition#job_definition_name}
  */
  readonly jobDefinitionName?: string;
  /**
  * Identifies the resources to deploy for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#job_resources SagemakerDataQualityJobDefinition#job_resources}
  */
  readonly jobResources: SagemakerDataQualityJobDefinitionJobResources;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#network_config SagemakerDataQualityJobDefinition#network_config}
  */
  readonly networkConfig?: SagemakerDataQualityJobDefinitionNetworkConfig;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#role_arn SagemakerDataQualityJobDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Specifies a time limit for how long the monitoring job is allowed to run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerDataQualityJobDefinitionStoppingCondition;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#tags SagemakerDataQualityJobDefinition#tags}
  */
  readonly tags?: SagemakerDataQualityJobDefinitionTags[];
}
export interface SagemakerDataQualityJobDefinitionDataQualityAppSpecification {
  /**
  * An array of arguments for the container used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#container_arguments SagemakerDataQualityJobDefinition#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Specifies the entrypoint for a container used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#container_entrypoint SagemakerDataQualityJobDefinition#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * Sets the environment variables in the Docker container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#environment SagemakerDataQualityJobDefinition#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The container image to be run by the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#image_uri SagemakerDataQualityJobDefinition#image_uri}
  */
  readonly imageUri: string;
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}
  */
  readonly postAnalyticsProcessorSourceUri?: string;
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}
  */
  readonly recordPreprocessorSourceUri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerEntrypoint),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfig {
  /**
  * The name of a processing job
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#baselining_job_name SagemakerDataQualityJobDefinition#baselining_job_name}
  */
  readonly baseliningJobName?: string;
  /**
  * The baseline constraints resource for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}
  */
  readonly constraintsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
  /**
  * The baseline statistics resource for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}
  */
  readonly statisticsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
}

export function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {
  /**
  * The name of the endpoint used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Path to the filesystem where the endpoint data is available to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#local_path SagemakerDataQualityJobDefinition#local_path}
  */
  readonly localPath: string;
  /**
  * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityJobInput {
  /**
  * The endpoint for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}
  */
  readonly endpointInput: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct!.endpointInput),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
  /**
  * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#local_path SagemakerDataQualityJobDefinition#local_path}
  */
  readonly localPath: string;
  /**
  * Whether to upload the results of the monitoring job continuously or after the job completes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
  /**
  * Information about where and how to store the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#s3_output SagemakerDataQualityJobDefinition#s3_output}
  */
  readonly s3Output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}
  */
  readonly monitoringOutputs: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs[];
}

export function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export interface SagemakerDataQualityJobDefinitionJobResourcesClusterConfig {
  /**
  * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#instance_count SagemakerDataQualityJobDefinition#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The ML compute instance type for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#instance_type SagemakerDataQualityJobDefinition#instance_type}
  */
  readonly instanceType: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}

export function sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export interface SagemakerDataQualityJobDefinitionJobResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#cluster_config SagemakerDataQualityJobDefinition#cluster_config}
  */
  readonly clusterConfig: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
}

export function sagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export interface SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {
  /**
  * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#subnets SagemakerDataQualityJobDefinition#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface SagemakerDataQualityJobDefinitionNetworkConfig {
  /**
  * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#vpc_config SagemakerDataQualityJobDefinition#vpc_config}
  */
  readonly vpcConfig?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
}

export function sagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export interface SagemakerDataQualityJobDefinitionStoppingCondition {
  /**
  * The maximum runtime allowed in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds: number;
}

export function sagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerDataQualityJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export interface SagemakerDataQualityJobDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#key SagemakerDataQualityJobDefinition#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html#value SagemakerDataQualityJobDefinition#value}
  */
  readonly value: string;
}

export function sagemakerDataQualityJobDefinitionTagsToTerraform(struct?: SagemakerDataQualityJobDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition}
*/
export class SagemakerDataQualityJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_data_quality_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_data_quality_job_definition.html awscc_sagemaker_data_quality_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDataQualityJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDataQualityJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_data_quality_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataQualityAppSpecification = config.dataQualityAppSpecification;
    this._dataQualityBaselineConfig = config.dataQualityBaselineConfig;
    this._dataQualityJobInput = config.dataQualityJobInput;
    this._dataQualityJobOutputConfig = config.dataQualityJobOutputConfig;
    this._jobDefinitionName = config.jobDefinitionName;
    this._jobResources = config.jobResources;
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

  // data_quality_app_specification - computed: false, optional: false, required: true
  private _dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
  public get dataQualityAppSpecification() {
    return this.interpolationForAttribute('data_quality_app_specification') as any;
  }
  public set dataQualityAppSpecification(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification) {
    this._dataQualityAppSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityAppSpecificationInput() {
    return this._dataQualityAppSpecification
  }

  // data_quality_baseline_config - computed: true, optional: true, required: false
  private _dataQualityBaselineConfig?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
  public get dataQualityBaselineConfig() {
    return this.interpolationForAttribute('data_quality_baseline_config') as any;
  }
  public set dataQualityBaselineConfig(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig) {
    this._dataQualityBaselineConfig = value;
  }
  public resetDataQualityBaselineConfig() {
    this._dataQualityBaselineConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityBaselineConfigInput() {
    return this._dataQualityBaselineConfig
  }

  // data_quality_job_input - computed: false, optional: false, required: true
  private _dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInput;
  public get dataQualityJobInput() {
    return this.interpolationForAttribute('data_quality_job_input') as any;
  }
  public set dataQualityJobInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInput) {
    this._dataQualityJobInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobInputInput() {
    return this._dataQualityJobInput
  }

  // data_quality_job_output_config - computed: false, optional: false, required: true
  private _dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
  public get dataQualityJobOutputConfig() {
    return this.interpolationForAttribute('data_quality_job_output_config') as any;
  }
  public set dataQualityJobOutputConfig(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig) {
    this._dataQualityJobOutputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQualityJobOutputConfigInput() {
    return this._dataQualityJobOutputConfig
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
  private _jobResources: SagemakerDataQualityJobDefinitionJobResources;
  public get jobResources() {
    return this.interpolationForAttribute('job_resources') as any;
  }
  public set jobResources(value: SagemakerDataQualityJobDefinitionJobResources) {
    this._jobResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources
  }

  // network_config - computed: true, optional: true, required: false
  private _networkConfig?: SagemakerDataQualityJobDefinitionNetworkConfig;
  public get networkConfig() {
    return this.interpolationForAttribute('network_config') as any;
  }
  public set networkConfig(value: SagemakerDataQualityJobDefinitionNetworkConfig) {
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
  private _stoppingCondition?: SagemakerDataQualityJobDefinitionStoppingCondition;
  public get stoppingCondition() {
    return this.interpolationForAttribute('stopping_condition') as any;
  }
  public set stoppingCondition(value: SagemakerDataQualityJobDefinitionStoppingCondition) {
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
  private _tags?: SagemakerDataQualityJobDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerDataQualityJobDefinitionTags[]) {
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
      data_quality_app_specification: sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(this._dataQualityAppSpecification),
      data_quality_baseline_config: sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(this._dataQualityBaselineConfig),
      data_quality_job_input: sagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(this._dataQualityJobInput),
      data_quality_job_output_config: sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(this._dataQualityJobOutputConfig),
      job_definition_name: cdktf.stringToTerraform(this._jobDefinitionName),
      job_resources: sagemakerDataQualityJobDefinitionJobResourcesToTerraform(this._jobResources),
      network_config: sagemakerDataQualityJobDefinitionNetworkConfigToTerraform(this._networkConfig),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stopping_condition: sagemakerDataQualityJobDefinitionStoppingConditionToTerraform(this._stoppingCondition),
      tags: cdktf.listMapper(sagemakerDataQualityJobDefinitionTagsToTerraform)(this._tags),
    };
  }
}
