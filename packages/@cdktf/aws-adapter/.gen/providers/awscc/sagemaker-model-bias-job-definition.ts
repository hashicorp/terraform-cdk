// https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerModelBiasJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the job definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#job_definition_name SagemakerModelBiasJobDefinition#job_definition_name}
  */
  readonly jobDefinitionName?: string;
  /**
  * Identifies the resources to deploy for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#job_resources SagemakerModelBiasJobDefinition#job_resources}
  */
  readonly jobResources: SagemakerModelBiasJobDefinitionJobResources;
  /**
  * Container image configuration object for the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#model_bias_app_specification SagemakerModelBiasJobDefinition#model_bias_app_specification}
  */
  readonly modelBiasAppSpecification: SagemakerModelBiasJobDefinitionModelBiasAppSpecification;
  /**
  * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#model_bias_baseline_config SagemakerModelBiasJobDefinition#model_bias_baseline_config}
  */
  readonly modelBiasBaselineConfig?: SagemakerModelBiasJobDefinitionModelBiasBaselineConfig;
  /**
  * The inputs for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#model_bias_job_input SagemakerModelBiasJobDefinition#model_bias_job_input}
  */
  readonly modelBiasJobInput: SagemakerModelBiasJobDefinitionModelBiasJobInput;
  /**
  * The output configuration for monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#model_bias_job_output_config SagemakerModelBiasJobDefinition#model_bias_job_output_config}
  */
  readonly modelBiasJobOutputConfig: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#network_config SagemakerModelBiasJobDefinition#network_config}
  */
  readonly networkConfig?: SagemakerModelBiasJobDefinitionNetworkConfig;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#role_arn SagemakerModelBiasJobDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Specifies a time limit for how long the monitoring job is allowed to run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#stopping_condition SagemakerModelBiasJobDefinition#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerModelBiasJobDefinitionStoppingCondition;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#tags SagemakerModelBiasJobDefinition#tags}
  */
  readonly tags?: SagemakerModelBiasJobDefinitionTags[];
}
export interface SagemakerModelBiasJobDefinitionJobResourcesClusterConfig {
  /**
  * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#instance_count SagemakerModelBiasJobDefinition#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The ML compute instance type for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#instance_type SagemakerModelBiasJobDefinition#instance_type}
  */
  readonly instanceType: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#volume_kms_key_id SagemakerModelBiasJobDefinition#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#volume_size_in_gb SagemakerModelBiasJobDefinition#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}

export function sagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerModelBiasJobDefinitionJobResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export interface SagemakerModelBiasJobDefinitionJobResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#cluster_config SagemakerModelBiasJobDefinition#cluster_config}
  */
  readonly clusterConfig: SagemakerModelBiasJobDefinitionJobResourcesClusterConfig;
}

export function sagemakerModelBiasJobDefinitionJobResourcesToTerraform(struct?: SagemakerModelBiasJobDefinitionJobResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: sagemakerModelBiasJobDefinitionJobResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasAppSpecification {
  /**
  * The S3 URI to an analysis configuration file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#config_uri SagemakerModelBiasJobDefinition#config_uri}
  */
  readonly configUri: string;
  /**
  * Sets the environment variables in the Docker container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#environment SagemakerModelBiasJobDefinition#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The container image to be run by the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#image_uri SagemakerModelBiasJobDefinition#image_uri}
  */
  readonly imageUri: string;
}

export function sagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_uri: cdktf.stringToTerraform(struct!.configUri),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_uri SagemakerModelBiasJobDefinition#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasBaselineConfig {
  /**
  * The name of a processing job
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#baselining_job_name SagemakerModelBiasJobDefinition#baselining_job_name}
  */
  readonly baseliningJobName?: string;
  /**
  * The baseline constraints resource for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#constraints_resource SagemakerModelBiasJobDefinition#constraints_resource}
  */
  readonly constraintsResource?: SagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource;
}

export function sagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baselining_job_name: cdktf.stringToTerraform(struct!.baseliningJobName),
    constraints_resource: sagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput {
  /**
  * The time offsets in ISO duration format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#end_time_offset SagemakerModelBiasJobDefinition#end_time_offset}
  */
  readonly endTimeOffset?: string;
  /**
  * The name of the endpoint used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#endpoint_name SagemakerModelBiasJobDefinition#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * JSONpath to locate features in JSONlines dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#features_attribute SagemakerModelBiasJobDefinition#features_attribute}
  */
  readonly featuresAttribute?: string;
  /**
  * Index or JSONpath to locate predicted label(s)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#inference_attribute SagemakerModelBiasJobDefinition#inference_attribute}
  */
  readonly inferenceAttribute?: string;
  /**
  * Path to the filesystem where the endpoint data is available to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#local_path SagemakerModelBiasJobDefinition#local_path}
  */
  readonly localPath: string;
  /**
  * Index or JSONpath to locate probabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#probability_attribute SagemakerModelBiasJobDefinition#probability_attribute}
  */
  readonly probabilityAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#probability_threshold_attribute SagemakerModelBiasJobDefinition#probability_threshold_attribute}
  */
  readonly probabilityThresholdAttribute?: number;
  /**
  * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_data_distribution_type SagemakerModelBiasJobDefinition#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_input_mode SagemakerModelBiasJobDefinition#s3_input_mode}
  */
  readonly s3InputMode?: string;
  /**
  * The time offsets in ISO duration format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#start_time_offset SagemakerModelBiasJobDefinition#start_time_offset}
  */
  readonly startTimeOffset?: string;
}

export function sagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    features_attribute: cdktf.stringToTerraform(struct!.featuresAttribute),
    inference_attribute: cdktf.stringToTerraform(struct!.inferenceAttribute),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    probability_attribute: cdktf.stringToTerraform(struct!.probabilityAttribute),
    probability_threshold_attribute: cdktf.numberToTerraform(struct!.probabilityThresholdAttribute),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input {
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_uri SagemakerModelBiasJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobInput {
  /**
  * The endpoint for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#endpoint_input SagemakerModelBiasJobDefinition#endpoint_input}
  */
  readonly endpointInput: SagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput;
  /**
  * Ground truth input provided in S3 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#ground_truth_s3_input SagemakerModelBiasJobDefinition#ground_truth_s3_input}
  */
  readonly groundTruthS3Input: SagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input;
}

export function sagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: sagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputToTerraform(struct!.endpointInput),
    ground_truth_s3_input: sagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputToTerraform(struct!.groundTruthS3Input),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output {
  /**
  * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#local_path SagemakerModelBiasJobDefinition#local_path}
  */
  readonly localPath: string;
  /**
  * Whether to upload the results of the monitoring job continuously or after the job completes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_upload_mode SagemakerModelBiasJobDefinition#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_uri SagemakerModelBiasJobDefinition#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs {
  /**
  * Information about where and how to store the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#s3_output SagemakerModelBiasJobDefinition#s3_output}
  */
  readonly s3Output: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output;
}

export function sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export interface SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig {
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#kms_key_id SagemakerModelBiasJobDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#monitoring_outputs SagemakerModelBiasJobDefinition#monitoring_outputs}
  */
  readonly monitoringOutputs: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs[];
}

export function sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(struct?: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export interface SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig {
  /**
  * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#security_group_ids SagemakerModelBiasJobDefinition#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#subnets SagemakerModelBiasJobDefinition#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface SagemakerModelBiasJobDefinitionNetworkConfig {
  /**
  * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#enable_inter_container_traffic_encryption SagemakerModelBiasJobDefinition#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#enable_network_isolation SagemakerModelBiasJobDefinition#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#vpc_config SagemakerModelBiasJobDefinition#vpc_config}
  */
  readonly vpcConfig?: SagemakerModelBiasJobDefinitionNetworkConfigVpcConfig;
}

export function sagemakerModelBiasJobDefinitionNetworkConfigToTerraform(struct?: SagemakerModelBiasJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerModelBiasJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export interface SagemakerModelBiasJobDefinitionStoppingCondition {
  /**
  * The maximum runtime allowed in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#max_runtime_in_seconds SagemakerModelBiasJobDefinition#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds: number;
}

export function sagemakerModelBiasJobDefinitionStoppingConditionToTerraform(struct?: SagemakerModelBiasJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export interface SagemakerModelBiasJobDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#key SagemakerModelBiasJobDefinition#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html#value SagemakerModelBiasJobDefinition#value}
  */
  readonly value: string;
}

export function sagemakerModelBiasJobDefinitionTagsToTerraform(struct?: SagemakerModelBiasJobDefinitionTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition}
*/
export class SagemakerModelBiasJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_model_bias_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_model_bias_job_definition.html awscc_sagemaker_model_bias_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelBiasJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelBiasJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_model_bias_job_definition',
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
    this._modelBiasAppSpecification = config.modelBiasAppSpecification;
    this._modelBiasBaselineConfig = config.modelBiasBaselineConfig;
    this._modelBiasJobInput = config.modelBiasJobInput;
    this._modelBiasJobOutputConfig = config.modelBiasJobOutputConfig;
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
  private _jobResources: SagemakerModelBiasJobDefinitionJobResources;
  public get jobResources() {
    return this.interpolationForAttribute('job_resources') as any;
  }
  public set jobResources(value: SagemakerModelBiasJobDefinitionJobResources) {
    this._jobResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobResourcesInput() {
    return this._jobResources
  }

  // model_bias_app_specification - computed: false, optional: false, required: true
  private _modelBiasAppSpecification: SagemakerModelBiasJobDefinitionModelBiasAppSpecification;
  public get modelBiasAppSpecification() {
    return this.interpolationForAttribute('model_bias_app_specification') as any;
  }
  public set modelBiasAppSpecification(value: SagemakerModelBiasJobDefinitionModelBiasAppSpecification) {
    this._modelBiasAppSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelBiasAppSpecificationInput() {
    return this._modelBiasAppSpecification
  }

  // model_bias_baseline_config - computed: true, optional: true, required: false
  private _modelBiasBaselineConfig?: SagemakerModelBiasJobDefinitionModelBiasBaselineConfig;
  public get modelBiasBaselineConfig() {
    return this.interpolationForAttribute('model_bias_baseline_config') as any;
  }
  public set modelBiasBaselineConfig(value: SagemakerModelBiasJobDefinitionModelBiasBaselineConfig) {
    this._modelBiasBaselineConfig = value;
  }
  public resetModelBiasBaselineConfig() {
    this._modelBiasBaselineConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelBiasBaselineConfigInput() {
    return this._modelBiasBaselineConfig
  }

  // model_bias_job_input - computed: false, optional: false, required: true
  private _modelBiasJobInput: SagemakerModelBiasJobDefinitionModelBiasJobInput;
  public get modelBiasJobInput() {
    return this.interpolationForAttribute('model_bias_job_input') as any;
  }
  public set modelBiasJobInput(value: SagemakerModelBiasJobDefinitionModelBiasJobInput) {
    this._modelBiasJobInput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelBiasJobInputInput() {
    return this._modelBiasJobInput
  }

  // model_bias_job_output_config - computed: false, optional: false, required: true
  private _modelBiasJobOutputConfig: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig;
  public get modelBiasJobOutputConfig() {
    return this.interpolationForAttribute('model_bias_job_output_config') as any;
  }
  public set modelBiasJobOutputConfig(value: SagemakerModelBiasJobDefinitionModelBiasJobOutputConfig) {
    this._modelBiasJobOutputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelBiasJobOutputConfigInput() {
    return this._modelBiasJobOutputConfig
  }

  // network_config - computed: true, optional: true, required: false
  private _networkConfig?: SagemakerModelBiasJobDefinitionNetworkConfig;
  public get networkConfig() {
    return this.interpolationForAttribute('network_config') as any;
  }
  public set networkConfig(value: SagemakerModelBiasJobDefinitionNetworkConfig) {
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
  private _stoppingCondition?: SagemakerModelBiasJobDefinitionStoppingCondition;
  public get stoppingCondition() {
    return this.interpolationForAttribute('stopping_condition') as any;
  }
  public set stoppingCondition(value: SagemakerModelBiasJobDefinitionStoppingCondition) {
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
  private _tags?: SagemakerModelBiasJobDefinitionTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerModelBiasJobDefinitionTags[]) {
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
      job_resources: sagemakerModelBiasJobDefinitionJobResourcesToTerraform(this._jobResources),
      model_bias_app_specification: sagemakerModelBiasJobDefinitionModelBiasAppSpecificationToTerraform(this._modelBiasAppSpecification),
      model_bias_baseline_config: sagemakerModelBiasJobDefinitionModelBiasBaselineConfigToTerraform(this._modelBiasBaselineConfig),
      model_bias_job_input: sagemakerModelBiasJobDefinitionModelBiasJobInputToTerraform(this._modelBiasJobInput),
      model_bias_job_output_config: sagemakerModelBiasJobDefinitionModelBiasJobOutputConfigToTerraform(this._modelBiasJobOutputConfig),
      network_config: sagemakerModelBiasJobDefinitionNetworkConfigToTerraform(this._networkConfig),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stopping_condition: sagemakerModelBiasJobDefinitionStoppingConditionToTerraform(this._stoppingCondition),
      tags: cdktf.listMapper(sagemakerModelBiasJobDefinitionTagsToTerraform)(this._tags),
    };
  }
}
