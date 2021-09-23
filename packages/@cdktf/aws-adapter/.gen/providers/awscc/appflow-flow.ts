// https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#description AppflowFlow#description}
  */
  readonly description?: string;
  /**
  * List of Destination connectors of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_flow_config_list AppflowFlow#destination_flow_config_list}
  */
  readonly destinationFlowConfigList: AppflowFlowDestinationFlowConfigList[];
  /**
  * Name of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#flow_name AppflowFlow#flow_name}
  */
  readonly flowName: string;
  /**
  * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#kms_arn AppflowFlow#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Configurations of Source connector of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_flow_config AppflowFlow#source_flow_config}
  */
  readonly sourceFlowConfig: AppflowFlowSourceFlowConfig;
  /**
  * List of Tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#tags AppflowFlow#tags}
  */
  readonly tags?: AppflowFlowTags[];
  /**
  * List of tasks for the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#tasks AppflowFlow#tasks}
  */
  readonly tasks: AppflowFlowTasks[];
  /**
  * Trigger settings of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_config AppflowFlow#trigger_config}
  */
  readonly triggerConfig: AppflowFlowTriggerConfig;
}
export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
  */
  readonly failOnFirstError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
  */
  readonly failOnFirstError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    error_handling_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_type AppflowFlow#aggregation_type}
  */
  readonly aggregationType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_type AppflowFlow#prefix_type}
  */
  readonly prefixType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_config AppflowFlow#prefix_config}
  */
  readonly prefixConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    prefix_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3_output_format_config AppflowFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
  */
  readonly failOnFirstError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
  /**
  * List of fields used as ID when performing a write operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
  */
  readonly failOnFirstError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    error_handling_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_type AppflowFlow#aggregation_type}
  */
  readonly aggregationType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_type AppflowFlow#prefix_type}
  */
  readonly prefixType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#prefix_config AppflowFlow#prefix_config}
  */
  readonly prefixConfig: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    file_type: cdktf.stringToTerraform(struct!.fileType),
    prefix_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3_output_format_config AppflowFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#fail_on_first_error AppflowFlow#fail_on_first_error}
  */
  readonly failOnFirstError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_error: cdktf.booleanToTerraform(struct!.failOnFirstError),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig;
  /**
  * List of fields used as ID when performing a write operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_handling_config: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
  }
}

export interface AppflowFlowDestinationFlowConfigListDestinationConnectorProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#event_bridge AppflowFlow#event_bridge}
  */
  readonly eventBridge?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#lookout_metrics AppflowFlow#lookout_metrics}
  */
  readonly lookoutMetrics?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#redshift AppflowFlow#redshift}
  */
  readonly redshift?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#snowflake AppflowFlow#snowflake}
  */
  readonly snowflake?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#upsolver AppflowFlow#upsolver}
  */
  readonly upsolver?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: AppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk;
}

export function appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct?: AppflowFlowDestinationFlowConfigListDestinationConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_bridge: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct!.eventBridge),
    lookout_metrics: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct!.lookoutMetrics),
    redshift: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct!.redshift),
    s3: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    snowflake: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct!.snowflake),
    upsolver: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct!.upsolver),
    zendesk: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export interface AppflowFlowDestinationFlowConfigList {
  /**
  * Name of connector profile
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * Destination connector details
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_connector_properties AppflowFlow#destination_connector_properties}
  */
  readonly destinationConnectorProperties: AppflowFlowDestinationFlowConfigListDestinationConnectorProperties;
}

export function appflowFlowDestinationFlowConfigListToTerraform(struct?: AppflowFlowDestinationFlowConfigList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    destination_connector_properties: appflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct!.destinationConnectorProperties),
  }
}

export interface AppflowFlowSourceFlowConfigIncrementalPullConfig {
  /**
  * Name of the datetime/timestamp data type field to be used for importing incremental records from the source
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datetime_type_field_name AppflowFlow#datetime_type_field_name}
  */
  readonly datetimeTypeFieldName?: string;
}

export function appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    datetime_type_field_name: cdktf.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#enable_dynamic_field_update AppflowFlow#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#include_deleted_records AppflowFlow#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export interface AppflowFlowSourceFlowConfigSourceConnectorProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datadog AppflowFlow#datadog}
  */
  readonly datadog?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#marketo AppflowFlow#marketo}
  */
  readonly marketo?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#singular AppflowFlow#singular}
  */
  readonly singular?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#slack AppflowFlow#slack}
  */
  readonly slack?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#veeva AppflowFlow#veeva}
  */
  readonly veeva?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct!.amplitude),
    datadog: appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    service_now: appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    singular: appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct!.singular),
    slack: appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct!.slack),
    trendmicro: appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct!.veeva),
    zendesk: appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}

export interface AppflowFlowSourceFlowConfig {
  /**
  * Name of connector profile
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * Configuration for scheduled incremental data pull
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#incremental_pull_config AppflowFlow#incremental_pull_config}
  */
  readonly incrementalPullConfig?: AppflowFlowSourceFlowConfigIncrementalPullConfig;
  /**
  * Source connector details required to query a connector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_connector_properties AppflowFlow#source_connector_properties}
  */
  readonly sourceConnectorProperties: AppflowFlowSourceFlowConfigSourceConnectorProperties;
}

export function appflowFlowSourceFlowConfigToTerraform(struct?: AppflowFlowSourceFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    incremental_pull_config: appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}

export interface AppflowFlowTags {
  /**
  * A string used to identify this tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#key AppflowFlow#key}
  */
  readonly key: string;
  /**
  * A string containing the value for the tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#value AppflowFlow#value}
  */
  readonly value: string;
}

export function appflowFlowTagsToTerraform(struct?: AppflowFlowTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppflowFlowTasksConnectorOperator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#datadog AppflowFlow#datadog}
  */
  readonly datadog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#marketo AppflowFlow#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#s3 AppflowFlow#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#singular AppflowFlow#singular}
  */
  readonly singular?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#slack AppflowFlow#slack}
  */
  readonly slack?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#veeva AppflowFlow#veeva}
  */
  readonly veeva?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: string;
}

export function appflowFlowTasksConnectorOperatorToTerraform(struct?: AppflowFlowTasksConnectorOperator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    amplitude: cdktf.stringToTerraform(struct!.amplitude),
    datadog: cdktf.stringToTerraform(struct!.datadog),
    dynatrace: cdktf.stringToTerraform(struct!.dynatrace),
    google_analytics: cdktf.stringToTerraform(struct!.googleAnalytics),
    infor_nexus: cdktf.stringToTerraform(struct!.inforNexus),
    marketo: cdktf.stringToTerraform(struct!.marketo),
    s3: cdktf.stringToTerraform(struct!.s3),
    salesforce: cdktf.stringToTerraform(struct!.salesforce),
    service_now: cdktf.stringToTerraform(struct!.serviceNow),
    singular: cdktf.stringToTerraform(struct!.singular),
    slack: cdktf.stringToTerraform(struct!.slack),
    trendmicro: cdktf.stringToTerraform(struct!.trendmicro),
    veeva: cdktf.stringToTerraform(struct!.veeva),
    zendesk: cdktf.stringToTerraform(struct!.zendesk),
  }
}

export interface AppflowFlowTasksTaskProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#key AppflowFlow#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#value AppflowFlow#value}
  */
  readonly value: string;
}

export function appflowFlowTasksTaskPropertiesToTerraform(struct?: AppflowFlowTasksTaskProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface AppflowFlowTasks {
  /**
  * Operation to be performed on provided source fields
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#connector_operator AppflowFlow#connector_operator}
  */
  readonly connectorOperator?: AppflowFlowTasksConnectorOperator;
  /**
  * A field value on which source field should be validated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#destination_field AppflowFlow#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Source fields on which particular task will be applied
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#source_fields AppflowFlow#source_fields}
  */
  readonly sourceFields: string[];
  /**
  * A Map used to store task related info
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#task_properties AppflowFlow#task_properties}
  */
  readonly taskProperties?: AppflowFlowTasksTaskProperties[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#task_type AppflowFlow#task_type}
  */
  readonly taskType: string;
}

export function appflowFlowTasksToTerraform(struct?: AppflowFlowTasks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    connector_operator: appflowFlowTasksConnectorOperatorToTerraform(struct!.connectorOperator),
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceFields),
    task_properties: cdktf.listMapper(appflowFlowTasksTaskPropertiesToTerraform)(struct!.taskProperties),
    task_type: cdktf.stringToTerraform(struct!.taskType),
  }
}

export interface AppflowFlowTriggerConfigTriggerProperties {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#data_pull_mode AppflowFlow#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_end_time AppflowFlow#schedule_end_time}
  */
  readonly scheduleEndTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_expression AppflowFlow#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#schedule_start_time AppflowFlow#schedule_start_time}
  */
  readonly scheduleStartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#time_zone AppflowFlow#time_zone}
  */
  readonly timeZone?: string;
}

export function appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: AppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_pull_mode: cdktf.stringToTerraform(struct!.dataPullMode),
    schedule_end_time: cdktf.numberToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    schedule_start_time: cdktf.numberToTerraform(struct!.scheduleStartTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export interface AppflowFlowTriggerConfig {
  /**
  * Details required for scheduled trigger type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_properties AppflowFlow#trigger_properties}
  */
  readonly triggerProperties?: AppflowFlowTriggerConfigTriggerProperties;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html#trigger_type AppflowFlow#trigger_type}
  */
  readonly triggerType: string;
}

export function appflowFlowTriggerConfigToTerraform(struct?: AppflowFlowTriggerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    trigger_properties: appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html awscc_appflow_flow}
*/
export class AppflowFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_appflow_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/appflow_flow.html awscc_appflow_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowFlowConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_appflow_flow',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destinationFlowConfigList = config.destinationFlowConfigList;
    this._flowName = config.flowName;
    this._kmsArn = config.kmsArn;
    this._sourceFlowConfig = config.sourceFlowConfig;
    this._tags = config.tags;
    this._tasks = config.tasks;
    this._triggerConfig = config.triggerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // destination_flow_config_list - computed: false, optional: false, required: true
  private _destinationFlowConfigList: AppflowFlowDestinationFlowConfigList[];
  public get destinationFlowConfigList() {
    return this.interpolationForAttribute('destination_flow_config_list') as any;
  }
  public set destinationFlowConfigList(value: AppflowFlowDestinationFlowConfigList[]) {
    this._destinationFlowConfigList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFlowConfigListInput() {
    return this._destinationFlowConfigList
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_name - computed: false, optional: false, required: true
  private _flowName: string;
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }
  public set flowName(value: string) {
    this._flowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowNameInput() {
    return this._flowName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string;
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn
  }

  // source_flow_config - computed: false, optional: false, required: true
  private _sourceFlowConfig: AppflowFlowSourceFlowConfig;
  public get sourceFlowConfig() {
    return this.interpolationForAttribute('source_flow_config') as any;
  }
  public set sourceFlowConfig(value: AppflowFlowSourceFlowConfig) {
    this._sourceFlowConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFlowConfigInput() {
    return this._sourceFlowConfig
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AppflowFlowTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AppflowFlowTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tasks - computed: false, optional: false, required: true
  private _tasks: AppflowFlowTasks[];
  public get tasks() {
    return this.interpolationForAttribute('tasks') as any;
  }
  public set tasks(value: AppflowFlowTasks[]) {
    this._tasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks
  }

  // trigger_config - computed: false, optional: false, required: true
  private _triggerConfig: AppflowFlowTriggerConfig;
  public get triggerConfig() {
    return this.interpolationForAttribute('trigger_config') as any;
  }
  public set triggerConfig(value: AppflowFlowTriggerConfig) {
    this._triggerConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigInput() {
    return this._triggerConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_flow_config_list: cdktf.listMapper(appflowFlowDestinationFlowConfigListToTerraform)(this._destinationFlowConfigList),
      flow_name: cdktf.stringToTerraform(this._flowName),
      kms_arn: cdktf.stringToTerraform(this._kmsArn),
      source_flow_config: appflowFlowSourceFlowConfigToTerraform(this._sourceFlowConfig),
      tags: cdktf.listMapper(appflowFlowTagsToTerraform)(this._tags),
      tasks: cdktf.listMapper(appflowFlowTasksToTerraform)(this._tasks),
      trigger_config: appflowFlowTriggerConfigToTerraform(this._triggerConfig),
    };
  }
}
