// https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerMonitoringScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the endpoint used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#endpoint_name SagemakerMonitoringSchedule#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Contains the reason a monitoring job failed, if it failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#failure_reason SagemakerMonitoringSchedule#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Summary of information about monitoring job
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#last_monitoring_execution_summary SagemakerMonitoringSchedule#last_monitoring_execution_summary}
  */
  readonly lastMonitoringExecutionSummary?: SagemakerMonitoringScheduleLastMonitoringExecutionSummary;
  /**
  * The configuration object that specifies the monitoring schedule and defines the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}
  */
  readonly monitoringScheduleConfig: SagemakerMonitoringScheduleMonitoringScheduleConfig;
  /**
  * The name of the monitoring schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_schedule_name SagemakerMonitoringSchedule#monitoring_schedule_name}
  */
  readonly monitoringScheduleName: string;
  /**
  * The status of a schedule job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_schedule_status SagemakerMonitoringSchedule#monitoring_schedule_status}
  */
  readonly monitoringScheduleStatus?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#tags SagemakerMonitoringSchedule#tags}
  */
  readonly tags?: SagemakerMonitoringScheduleTags[];
}
export interface SagemakerMonitoringScheduleLastMonitoringExecutionSummary {
  /**
  * The time at which the monitoring job was created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#creation_time SagemakerMonitoringSchedule#creation_time}
  */
  readonly creationTime: string;
  /**
  * The name of the endpoint used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#endpoint_name SagemakerMonitoringSchedule#endpoint_name}
  */
  readonly endpointName?: string;
  /**
  * Contains the reason a monitoring job failed, if it failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#failure_reason SagemakerMonitoringSchedule#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * A timestamp that indicates the last time the monitoring job was modified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#last_modified_time SagemakerMonitoringSchedule#last_modified_time}
  */
  readonly lastModifiedTime: string;
  /**
  * The status of the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_execution_status SagemakerMonitoringSchedule#monitoring_execution_status}
  */
  readonly monitoringExecutionStatus: string;
  /**
  * The name of the monitoring schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_schedule_name SagemakerMonitoringSchedule#monitoring_schedule_name}
  */
  readonly monitoringScheduleName: string;
  /**
  * The Amazon Resource Name (ARN) of the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#processing_job_arn SagemakerMonitoringSchedule#processing_job_arn}
  */
  readonly processingJobArn?: string;
  /**
  * The time the monitoring job was scheduled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#scheduled_time SagemakerMonitoringSchedule#scheduled_time}
  */
  readonly scheduledTime: string;
}

export function sagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform(struct?: SagemakerMonitoringScheduleLastMonitoringExecutionSummary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    creation_time: cdktf.stringToTerraform(struct!.creationTime),
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    failure_reason: cdktf.stringToTerraform(struct!.failureReason),
    last_modified_time: cdktf.stringToTerraform(struct!.lastModifiedTime),
    monitoring_execution_status: cdktf.stringToTerraform(struct!.monitoringExecutionStatus),
    monitoring_schedule_name: cdktf.stringToTerraform(struct!.monitoringScheduleName),
    processing_job_arn: cdktf.stringToTerraform(struct!.processingJobArn),
    scheduled_time: cdktf.stringToTerraform(struct!.scheduledTime),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_uri SagemakerMonitoringSchedule#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource {
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_uri SagemakerMonitoringSchedule#s3_uri}
  */
  readonly s3Uri?: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig {
  /**
  * The baseline constraints resource for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#constraints_resource SagemakerMonitoringSchedule#constraints_resource}
  */
  readonly constraintsResource?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResource;
  /**
  * The baseline statistics resource for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#statistics_resource SagemakerMonitoringSchedule#statistics_resource}
  */
  readonly statisticsResource?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResource;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constraints_resource: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigConstraintsResourceToTerraform(struct!.constraintsResource),
    statistics_resource: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigStatisticsResourceToTerraform(struct!.statisticsResource),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification {
  /**
  * An array of arguments for the container used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#container_arguments SagemakerMonitoringSchedule#container_arguments}
  */
  readonly containerArguments?: string[];
  /**
  * Specifies the entrypoint for a container used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#container_entrypoint SagemakerMonitoringSchedule#container_entrypoint}
  */
  readonly containerEntrypoint?: string[];
  /**
  * The container image to be run by the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#image_uri SagemakerMonitoringSchedule#image_uri}
  */
  readonly imageUri: string;
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#post_analytics_processor_source_uri SagemakerMonitoringSchedule#post_analytics_processor_source_uri}
  */
  readonly postAnalyticsProcessorSourceUri?: string;
  /**
  * The Amazon S3 URI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#record_preprocessor_source_uri SagemakerMonitoringSchedule#record_preprocessor_source_uri}
  */
  readonly recordPreprocessorSourceUri?: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_arguments: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerArguments),
    container_entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerEntrypoint),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    post_analytics_processor_source_uri: cdktf.stringToTerraform(struct!.postAnalyticsProcessorSourceUri),
    record_preprocessor_source_uri: cdktf.stringToTerraform(struct!.recordPreprocessorSourceUri),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput {
  /**
  * The name of the endpoint used to run the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#endpoint_name SagemakerMonitoringSchedule#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Path to the filesystem where the endpoint data is available to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#local_path SagemakerMonitoringSchedule#local_path}
  */
  readonly localPath: string;
  /**
  * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_data_distribution_type SagemakerMonitoringSchedule#s3_data_distribution_type}
  */
  readonly s3DataDistributionType?: string;
  /**
  * Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_input_mode SagemakerMonitoringSchedule#s3_input_mode}
  */
  readonly s3InputMode?: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_data_distribution_type: cdktf.stringToTerraform(struct!.s3DataDistributionType),
    s3_input_mode: cdktf.stringToTerraform(struct!.s3InputMode),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs {
  /**
  * The endpoint for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#endpoint_input SagemakerMonitoringSchedule#endpoint_input}
  */
  readonly endpointInput: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInput;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_input: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsEndpointInputToTerraform(struct!.endpointInput),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output {
  /**
  * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#local_path SagemakerMonitoringSchedule#local_path}
  */
  readonly localPath: string;
  /**
  * Whether to upload the results of the monitoring job continuously or after the job completes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_upload_mode SagemakerMonitoringSchedule#s3_upload_mode}
  */
  readonly s3UploadMode?: string;
  /**
  * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_uri SagemakerMonitoringSchedule#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_path: cdktf.stringToTerraform(struct!.localPath),
    s3_upload_mode: cdktf.stringToTerraform(struct!.s3UploadMode),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs {
  /**
  * Information about where and how to store the results of a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#s3_output SagemakerMonitoringSchedule#s3_output}
  */
  readonly s3Output: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3Output;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_output: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsS3OutputToTerraform(struct!.s3Output),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig {
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#kms_key_id SagemakerMonitoringSchedule#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_outputs SagemakerMonitoringSchedule#monitoring_outputs}
  */
  readonly monitoringOutputs: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputs[];
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    monitoring_outputs: cdktf.listMapper(sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigMonitoringOutputsToTerraform)(struct!.monitoringOutputs),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig {
  /**
  * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#instance_count SagemakerMonitoringSchedule#instance_count}
  */
  readonly instanceCount: number;
  /**
  * The ML compute instance type for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#instance_type SagemakerMonitoringSchedule#instance_type}
  */
  readonly instanceType: string;
  /**
  * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#volume_kms_key_id SagemakerMonitoringSchedule#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#volume_size_in_gb SagemakerMonitoringSchedule#volume_size_in_gb}
  */
  readonly volumeSizeInGb: number;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_size_in_gb: cdktf.numberToTerraform(struct!.volumeSizeInGb),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources {
  /**
  * Configuration for the cluster used to run model monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#cluster_config SagemakerMonitoringSchedule#cluster_config}
  */
  readonly clusterConfig: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfig;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_config: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesClusterConfigToTerraform(struct!.clusterConfig),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig {
  /**
  * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#security_group_ids SagemakerMonitoringSchedule#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#subnets SagemakerMonitoringSchedule#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig {
  /**
  * Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#enable_inter_container_traffic_encryption SagemakerMonitoringSchedule#enable_inter_container_traffic_encryption}
  */
  readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#enable_network_isolation SagemakerMonitoringSchedule#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#vpc_config SagemakerMonitoringSchedule#vpc_config}
  */
  readonly vpcConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfig;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_inter_container_traffic_encryption: cdktf.booleanToTerraform(struct!.enableInterContainerTrafficEncryption),
    enable_network_isolation: cdktf.booleanToTerraform(struct!.enableNetworkIsolation),
    vpc_config: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition {
  /**
  * The maximum runtime allowed in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#max_runtime_in_seconds SagemakerMonitoringSchedule#max_runtime_in_seconds}
  */
  readonly maxRuntimeInSeconds: number;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_runtime_in_seconds: cdktf.numberToTerraform(struct!.maxRuntimeInSeconds),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition {
  /**
  * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#baseline_config SagemakerMonitoringSchedule#baseline_config}
  */
  readonly baselineConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfig;
  /**
  * Sets the environment variables in the Docker container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#environment SagemakerMonitoringSchedule#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Container image configuration object for the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_app_specification SagemakerMonitoringSchedule#monitoring_app_specification}
  */
  readonly monitoringAppSpecification: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecification;
  /**
  * The array of inputs for the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_inputs SagemakerMonitoringSchedule#monitoring_inputs}
  */
  readonly monitoringInputs: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputs[];
  /**
  * The output configuration for monitoring jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_output_config SagemakerMonitoringSchedule#monitoring_output_config}
  */
  readonly monitoringOutputConfig: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfig;
  /**
  * Identifies the resources to deploy for a monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_resources SagemakerMonitoringSchedule#monitoring_resources}
  */
  readonly monitoringResources: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResources;
  /**
  * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#network_config SagemakerMonitoringSchedule#network_config}
  */
  readonly networkConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfig;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#role_arn SagemakerMonitoringSchedule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Specifies a time limit for how long the monitoring job is allowed to run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#stopping_condition SagemakerMonitoringSchedule#stopping_condition}
  */
  readonly stoppingCondition?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingCondition;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    baseline_config: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionBaselineConfigToTerraform(struct!.baselineConfig),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    monitoring_app_specification: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringAppSpecificationToTerraform(struct!.monitoringAppSpecification),
    monitoring_inputs: cdktf.listMapper(sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringInputsToTerraform)(struct!.monitoringInputs),
    monitoring_output_config: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringOutputConfigToTerraform(struct!.monitoringOutputConfig),
    monitoring_resources: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionMonitoringResourcesToTerraform(struct!.monitoringResources),
    network_config: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionNetworkConfigToTerraform(struct!.networkConfig),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stopping_condition: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionStoppingConditionToTerraform(struct!.stoppingCondition),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig {
  /**
  * A cron expression that describes details about the monitoring schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#schedule_expression SagemakerMonitoringSchedule#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

export interface SagemakerMonitoringScheduleMonitoringScheduleConfig {
  /**
  * Defines the monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_job_definition SagemakerMonitoringSchedule#monitoring_job_definition}
  */
  readonly monitoringJobDefinition?: SagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinition;
  /**
  * Name of the job definition
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}
  */
  readonly monitoringJobDefinitionName?: string;
  /**
  * The type of monitoring job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#monitoring_type SagemakerMonitoringSchedule#monitoring_type}
  */
  readonly monitoringType?: string;
  /**
  * Configuration details about the monitoring schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#schedule_config SagemakerMonitoringSchedule#schedule_config}
  */
  readonly scheduleConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig;
}

export function sagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitoring_job_definition: sagemakerMonitoringScheduleMonitoringScheduleConfigMonitoringJobDefinitionToTerraform(struct!.monitoringJobDefinition),
    monitoring_job_definition_name: cdktf.stringToTerraform(struct!.monitoringJobDefinitionName),
    monitoring_type: cdktf.stringToTerraform(struct!.monitoringType),
    schedule_config: sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct!.scheduleConfig),
  }
}

export interface SagemakerMonitoringScheduleTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#key SagemakerMonitoringSchedule#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html#value SagemakerMonitoringSchedule#value}
  */
  readonly value: string;
}

export function sagemakerMonitoringScheduleTagsToTerraform(struct?: SagemakerMonitoringScheduleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule}
*/
export class SagemakerMonitoringSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_monitoring_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_monitoring_schedule.html awscc_sagemaker_monitoring_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerMonitoringScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerMonitoringScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_monitoring_schedule',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointName = config.endpointName;
    this._failureReason = config.failureReason;
    this._lastMonitoringExecutionSummary = config.lastMonitoringExecutionSummary;
    this._monitoringScheduleConfig = config.monitoringScheduleConfig;
    this._monitoringScheduleName = config.monitoringScheduleName;
    this._monitoringScheduleStatus = config.monitoringScheduleStatus;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // endpoint_name - computed: false, optional: true, required: false
  private _endpointName?: string;
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string ) {
    this._endpointName = value;
  }
  public resetEndpointName() {
    this._endpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName
  }

  // failure_reason - computed: false, optional: true, required: false
  private _failureReason?: string;
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string ) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // last_monitoring_execution_summary - computed: false, optional: true, required: false
  private _lastMonitoringExecutionSummary?: SagemakerMonitoringScheduleLastMonitoringExecutionSummary;
  public get lastMonitoringExecutionSummary() {
    return this.interpolationForAttribute('last_monitoring_execution_summary') as any;
  }
  public set lastMonitoringExecutionSummary(value: SagemakerMonitoringScheduleLastMonitoringExecutionSummary ) {
    this._lastMonitoringExecutionSummary = value;
  }
  public resetLastMonitoringExecutionSummary() {
    this._lastMonitoringExecutionSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMonitoringExecutionSummaryInput() {
    return this._lastMonitoringExecutionSummary
  }

  // monitoring_schedule_arn - computed: true, optional: false, required: false
  public get monitoringScheduleArn() {
    return this.getStringAttribute('monitoring_schedule_arn');
  }

  // monitoring_schedule_config - computed: false, optional: false, required: true
  private _monitoringScheduleConfig: SagemakerMonitoringScheduleMonitoringScheduleConfig;
  public get monitoringScheduleConfig() {
    return this.interpolationForAttribute('monitoring_schedule_config') as any;
  }
  public set monitoringScheduleConfig(value: SagemakerMonitoringScheduleMonitoringScheduleConfig) {
    this._monitoringScheduleConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleConfigInput() {
    return this._monitoringScheduleConfig
  }

  // monitoring_schedule_name - computed: false, optional: false, required: true
  private _monitoringScheduleName: string;
  public get monitoringScheduleName() {
    return this.getStringAttribute('monitoring_schedule_name');
  }
  public set monitoringScheduleName(value: string) {
    this._monitoringScheduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleNameInput() {
    return this._monitoringScheduleName
  }

  // monitoring_schedule_status - computed: false, optional: true, required: false
  private _monitoringScheduleStatus?: string;
  public get monitoringScheduleStatus() {
    return this.getStringAttribute('monitoring_schedule_status');
  }
  public set monitoringScheduleStatus(value: string ) {
    this._monitoringScheduleStatus = value;
  }
  public resetMonitoringScheduleStatus() {
    this._monitoringScheduleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringScheduleStatusInput() {
    return this._monitoringScheduleStatus
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerMonitoringScheduleTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerMonitoringScheduleTags[] ) {
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
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      failure_reason: cdktf.stringToTerraform(this._failureReason),
      last_monitoring_execution_summary: sagemakerMonitoringScheduleLastMonitoringExecutionSummaryToTerraform(this._lastMonitoringExecutionSummary),
      monitoring_schedule_config: sagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(this._monitoringScheduleConfig),
      monitoring_schedule_name: cdktf.stringToTerraform(this._monitoringScheduleName),
      monitoring_schedule_status: cdktf.stringToTerraform(this._monitoringScheduleStatus),
      tags: cdktf.listMapper(sagemakerMonitoringScheduleTagsToTerraform)(this._tags),
    };
  }
}
