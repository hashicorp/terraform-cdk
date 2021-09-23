// https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisfirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#delivery_stream_encryption_configuration_input KinesisfirehoseDeliveryStream#delivery_stream_encryption_configuration_input}
  */
  readonly deliveryStreamEncryptionConfigurationInput?: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#delivery_stream_name KinesisfirehoseDeliveryStream#delivery_stream_name}
  */
  readonly deliveryStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#delivery_stream_type KinesisfirehoseDeliveryStream#delivery_stream_type}
  */
  readonly deliveryStreamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#elasticsearch_destination_configuration KinesisfirehoseDeliveryStream#elasticsearch_destination_configuration}
  */
  readonly elasticsearchDestinationConfiguration?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#extended_s3_destination_configuration KinesisfirehoseDeliveryStream#extended_s3_destination_configuration}
  */
  readonly extendedS3DestinationConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#http_endpoint_destination_configuration KinesisfirehoseDeliveryStream#http_endpoint_destination_configuration}
  */
  readonly httpEndpointDestinationConfiguration?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kinesis_stream_source_configuration KinesisfirehoseDeliveryStream#kinesis_stream_source_configuration}
  */
  readonly kinesisStreamSourceConfiguration?: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#redshift_destination_configuration KinesisfirehoseDeliveryStream#redshift_destination_configuration}
  */
  readonly redshiftDestinationConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_destination_configuration KinesisfirehoseDeliveryStream#s3_destination_configuration}
  */
  readonly s3DestinationConfiguration?: KinesisfirehoseDeliveryStreamS3DestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#splunk_destination_configuration KinesisfirehoseDeliveryStream#splunk_destination_configuration}
  */
  readonly splunkDestinationConfiguration?: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#tags KinesisfirehoseDeliveryStream#tags}
  */
  readonly tags?: KinesisfirehoseDeliveryStreamTags[];
}
export interface KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#key_arn KinesisfirehoseDeliveryStream#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#key_type KinesisfirehoseDeliveryStream#key_type}
  */
  readonly keyType: string;
}

export function kinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct?: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_name KinesisfirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_value KinesisfirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameters KinesisfirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type KinesisfirehoseDeliveryStream#type}
  */
  readonly type: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processors KinesisfirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors[];
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#security_group_ids KinesisfirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#subnet_ids KinesisfirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cluster_endpoint KinesisfirehoseDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#domain_arn KinesisfirehoseDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#index_name KinesisfirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#index_rotation_period KinesisfirehoseDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processing_configuration KinesisfirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#retry_options KinesisfirehoseDeliveryStream#retry_options}
  */
  readonly retryOptions?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_mode KinesisfirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_configuration KinesisfirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type_name KinesisfirehoseDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#vpc_configuration KinesisfirehoseDeliveryStream#vpc_configuration}
  */
  readonly vpcConfiguration?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration;
}

export function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_hints: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    cluster_endpoint: cdktf.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktf.stringToTerraform(struct!.domainArn),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktf.stringToTerraform(struct!.indexRotationPeriod),
    processing_configuration: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    vpc_configuration: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#timestamp_formats KinesisfirehoseDeliveryStream#timestamp_formats}
  */
  readonly timestampFormats?: string[];
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#case_insensitive KinesisfirehoseDeliveryStream#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#column_to_json_key_mappings KinesisfirehoseDeliveryStream#column_to_json_key_mappings}
  */
  readonly columnToJsonKeyMappings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisfirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
  */
  readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#hive_json_ser_de KinesisfirehoseDeliveryStream#hive_json_ser_de}
  */
  readonly hiveJsonSerDe?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#open_x_json_ser_de KinesisfirehoseDeliveryStream#open_x_json_ser_de}
  */
  readonly openXJsonSerDe?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hive_json_ser_de: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct!.hiveJsonSerDe),
    open_x_json_ser_de: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct!.openXJsonSerDe),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#deserializer KinesisfirehoseDeliveryStream#deserializer}
  */
  readonly deserializer?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deserializer: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct!.deserializer),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#block_size_bytes KinesisfirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bloom_filter_columns KinesisfirehoseDeliveryStream#bloom_filter_columns}
  */
  readonly bloomFilterColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bloom_filter_false_positive_probability KinesisfirehoseDeliveryStream#bloom_filter_false_positive_probability}
  */
  readonly bloomFilterFalsePositiveProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression KinesisfirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#dictionary_key_threshold KinesisfirehoseDeliveryStream#dictionary_key_threshold}
  */
  readonly dictionaryKeyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enable_padding KinesisfirehoseDeliveryStream#enable_padding}
  */
  readonly enablePadding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#format_version KinesisfirehoseDeliveryStream#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#padding_tolerance KinesisfirehoseDeliveryStream#padding_tolerance}
  */
  readonly paddingTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#row_index_stride KinesisfirehoseDeliveryStream#row_index_stride}
  */
  readonly rowIndexStride?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#stripe_size_bytes KinesisfirehoseDeliveryStream#stripe_size_bytes}
  */
  readonly stripeSizeBytes?: number;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bloomFilterColumns),
    bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct!.bloomFilterFalsePositiveProbability),
    compression: cdktf.stringToTerraform(struct!.compression),
    dictionary_key_threshold: cdktf.numberToTerraform(struct!.dictionaryKeyThreshold),
    enable_padding: cdktf.booleanToTerraform(struct!.enablePadding),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    padding_tolerance: cdktf.numberToTerraform(struct!.paddingTolerance),
    row_index_stride: cdktf.numberToTerraform(struct!.rowIndexStride),
    stripe_size_bytes: cdktf.numberToTerraform(struct!.stripeSizeBytes),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#block_size_bytes KinesisfirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression KinesisfirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enable_dictionary_compression KinesisfirehoseDeliveryStream#enable_dictionary_compression}
  */
  readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#max_padding_bytes KinesisfirehoseDeliveryStream#max_padding_bytes}
  */
  readonly maxPaddingBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#page_size_bytes KinesisfirehoseDeliveryStream#page_size_bytes}
  */
  readonly pageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#writer_version KinesisfirehoseDeliveryStream#writer_version}
  */
  readonly writerVersion?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    compression: cdktf.stringToTerraform(struct!.compression),
    enable_dictionary_compression: cdktf.booleanToTerraform(struct!.enableDictionaryCompression),
    max_padding_bytes: cdktf.numberToTerraform(struct!.maxPaddingBytes),
    page_size_bytes: cdktf.numberToTerraform(struct!.pageSizeBytes),
    writer_version: cdktf.stringToTerraform(struct!.writerVersion),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#orc_ser_de KinesisfirehoseDeliveryStream#orc_ser_de}
  */
  readonly orcSerDe?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parquet_ser_de KinesisfirehoseDeliveryStream#parquet_ser_de}
  */
  readonly parquetSerDe?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    orc_ser_de: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct!.orcSerDe),
    parquet_ser_de: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct!.parquetSerDe),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#serializer KinesisfirehoseDeliveryStream#serializer}
  */
  readonly serializer?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    serializer: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct!.serializer),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#catalog_id KinesisfirehoseDeliveryStream#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#database_name KinesisfirehoseDeliveryStream#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#region KinesisfirehoseDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#table_name KinesisfirehoseDeliveryStream#table_name}
  */
  readonly tableName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#version_id KinesisfirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#input_format_configuration KinesisfirehoseDeliveryStream#input_format_configuration}
  */
  readonly inputFormatConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#output_format_configuration KinesisfirehoseDeliveryStream#output_format_configuration}
  */
  readonly outputFormatConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#schema_configuration KinesisfirehoseDeliveryStream#schema_configuration}
  */
  readonly schemaConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    input_format_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct!.inputFormatConfiguration),
    output_format_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct!.outputFormatConfiguration),
    schema_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct!.schemaConfiguration),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_name KinesisfirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_value KinesisfirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameters KinesisfirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type KinesisfirehoseDeliveryStream#type}
  */
  readonly type: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processors KinesisfirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors[];
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#data_format_conversion_configuration KinesisfirehoseDeliveryStream#data_format_conversion_configuration}
  */
  readonly dataFormatConversionConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processing_configuration KinesisfirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_configuration KinesisfirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_mode KinesisfirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
}

export function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    data_format_conversion_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct!.dataFormatConversionConfiguration),
    encryption_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    processing_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#access_key KinesisfirehoseDeliveryStream#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#name KinesisfirehoseDeliveryStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#url KinesisfirehoseDeliveryStream#url}
  */
  readonly url: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_name KinesisfirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_value KinesisfirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameters KinesisfirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type KinesisfirehoseDeliveryStream#type}
  */
  readonly type: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processors KinesisfirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors[];
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#attribute_name KinesisfirehoseDeliveryStream#attribute_name}
  */
  readonly attributeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#attribute_value KinesisfirehoseDeliveryStream#attribute_value}
  */
  readonly attributeValue: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#common_attributes KinesisfirehoseDeliveryStream#common_attributes}
  */
  readonly commonAttributes?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#content_encoding KinesisfirehoseDeliveryStream#content_encoding}
  */
  readonly contentEncoding?: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_attributes: cdktf.listMapper(kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#endpoint_configuration KinesisfirehoseDeliveryStream#endpoint_configuration}
  */
  readonly endpointConfiguration: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processing_configuration KinesisfirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#request_configuration KinesisfirehoseDeliveryStream#request_configuration}
  */
  readonly requestConfiguration?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#retry_options KinesisfirehoseDeliveryStream#retry_options}
  */
  readonly retryOptions?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_mode KinesisfirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_configuration KinesisfirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration;
}

export function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_hints: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    endpoint_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct!.endpointConfiguration),
    processing_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    request_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct!.requestConfiguration),
    retry_options: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}

export interface KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kinesis_stream_arn KinesisfirehoseDeliveryStream#kinesis_stream_arn}
  */
  readonly kinesisStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#copy_options KinesisfirehoseDeliveryStream#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#data_table_columns KinesisfirehoseDeliveryStream#data_table_columns}
  */
  readonly dataTableColumns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#data_table_name KinesisfirehoseDeliveryStream#data_table_name}
  */
  readonly dataTableName: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_options: cdktf.stringToTerraform(struct!.copyOptions),
    data_table_columns: cdktf.stringToTerraform(struct!.dataTableColumns),
    data_table_name: cdktf.stringToTerraform(struct!.dataTableName),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_name KinesisfirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_value KinesisfirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameters KinesisfirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type KinesisfirehoseDeliveryStream#type}
  */
  readonly type: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processors KinesisfirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors[];
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cluster_jdbcurl KinesisfirehoseDeliveryStream#cluster_jdbcurl}
  */
  readonly clusterJdbcurl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#copy_command KinesisfirehoseDeliveryStream#copy_command}
  */
  readonly copyCommand: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#password KinesisfirehoseDeliveryStream#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processing_configuration KinesisfirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#retry_options KinesisfirehoseDeliveryStream#retry_options}
  */
  readonly retryOptions?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_configuration KinesisfirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_mode KinesisfirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_configuration KinesisfirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#username KinesisfirehoseDeliveryStream#username}
  */
  readonly username: string;
}

export function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    cluster_jdbcurl: cdktf.stringToTerraform(struct!.clusterJdbcurl),
    copy_command: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct!.copyCommand),
    password: cdktf.stringToTerraform(struct!.password),
    processing_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface KinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamS3DestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_name KinesisfirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameter_value KinesisfirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#parameters KinesisfirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#type KinesisfirehoseDeliveryStream#type}
  */
  readonly type: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processors KinesisfirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors[];
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
  */
  readonly durationInSeconds?: number;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#interval_in_seconds KinesisfirehoseDeliveryStream#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#size_in_m_bs KinesisfirehoseDeliveryStream#size_in_m_bs}
  */
  readonly sizeInMBs?: number;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#enabled KinesisfirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_group_name KinesisfirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#log_stream_name KinesisfirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
  */
  readonly awskmsKeyArn: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#kms_encryption_config KinesisfirehoseDeliveryStream#kms_encryption_config}
  */
  readonly kmsEncryptionConfig?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#no_encryption_config KinesisfirehoseDeliveryStream#no_encryption_config}
  */
  readonly noEncryptionConfig?: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#bucket_arn KinesisfirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#buffering_hints KinesisfirehoseDeliveryStream#buffering_hints}
  */
  readonly bufferingHints?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#compression_format KinesisfirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#encryption_configuration KinesisfirehoseDeliveryStream#encryption_configuration}
  */
  readonly encryptionConfiguration?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#error_output_prefix KinesisfirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#prefix KinesisfirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#role_arn KinesisfirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#cloudwatch_logging_options KinesisfirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#hec_acknowledgment_timeout_in_seconds KinesisfirehoseDeliveryStream#hec_acknowledgment_timeout_in_seconds}
  */
  readonly hecAcknowledgmentTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#hec_endpoint KinesisfirehoseDeliveryStream#hec_endpoint}
  */
  readonly hecEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#hec_endpoint_type KinesisfirehoseDeliveryStream#hec_endpoint_type}
  */
  readonly hecEndpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#hec_token KinesisfirehoseDeliveryStream#hec_token}
  */
  readonly hecToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#processing_configuration KinesisfirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#retry_options KinesisfirehoseDeliveryStream#retry_options}
  */
  readonly retryOptions?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_backup_mode KinesisfirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#s3_configuration KinesisfirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration;
}

export function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logging_options: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    hec_acknowledgment_timeout_in_seconds: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeoutInSeconds),
    hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    processing_configuration: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}

export interface KinesisfirehoseDeliveryStreamTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#key KinesisfirehoseDeliveryStream#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#value KinesisfirehoseDeliveryStream#value}
  */
  readonly value?: string;
}

export function kinesisfirehoseDeliveryStreamTagsToTerraform(struct?: KinesisfirehoseDeliveryStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream}
*/
export class KinesisfirehoseDeliveryStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kinesisfirehose_delivery_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisfirehoseDeliveryStreamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KinesisfirehoseDeliveryStreamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesisfirehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deliveryStreamEncryptionConfigurationInput = config.deliveryStreamEncryptionConfigurationInput;
    this._deliveryStreamName = config.deliveryStreamName;
    this._deliveryStreamType = config.deliveryStreamType;
    this._elasticsearchDestinationConfiguration = config.elasticsearchDestinationConfiguration;
    this._extendedS3DestinationConfiguration = config.extendedS3DestinationConfiguration;
    this._httpEndpointDestinationConfiguration = config.httpEndpointDestinationConfiguration;
    this._kinesisStreamSourceConfiguration = config.kinesisStreamSourceConfiguration;
    this._redshiftDestinationConfiguration = config.redshiftDestinationConfiguration;
    this._s3DestinationConfiguration = config.s3DestinationConfiguration;
    this._splunkDestinationConfiguration = config.splunkDestinationConfiguration;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_stream_encryption_configuration_input - computed: false, optional: true, required: false
  private _deliveryStreamEncryptionConfigurationInput?: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
  public get deliveryStreamEncryptionConfigurationInput() {
    return this.interpolationForAttribute('delivery_stream_encryption_configuration_input') as any;
  }
  public set deliveryStreamEncryptionConfigurationInput(value: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput ) {
    this._deliveryStreamEncryptionConfigurationInput = value;
  }
  public resetDeliveryStreamEncryptionConfigurationInput() {
    this._deliveryStreamEncryptionConfigurationInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamEncryptionConfigurationInputInput() {
    return this._deliveryStreamEncryptionConfigurationInput
  }

  // delivery_stream_name - computed: true, optional: true, required: false
  private _deliveryStreamName?: string;
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  public resetDeliveryStreamName() {
    this._deliveryStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName
  }

  // delivery_stream_type - computed: true, optional: true, required: false
  private _deliveryStreamType?: string;
  public get deliveryStreamType() {
    return this.getStringAttribute('delivery_stream_type');
  }
  public set deliveryStreamType(value: string) {
    this._deliveryStreamType = value;
  }
  public resetDeliveryStreamType() {
    this._deliveryStreamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamTypeInput() {
    return this._deliveryStreamType
  }

  // elasticsearch_destination_configuration - computed: false, optional: true, required: false
  private _elasticsearchDestinationConfiguration?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration;
  public get elasticsearchDestinationConfiguration() {
    return this.interpolationForAttribute('elasticsearch_destination_configuration') as any;
  }
  public set elasticsearchDestinationConfiguration(value: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration ) {
    this._elasticsearchDestinationConfiguration = value;
  }
  public resetElasticsearchDestinationConfiguration() {
    this._elasticsearchDestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchDestinationConfigurationInput() {
    return this._elasticsearchDestinationConfiguration
  }

  // extended_s3_destination_configuration - computed: false, optional: true, required: false
  private _extendedS3DestinationConfiguration?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration;
  public get extendedS3DestinationConfiguration() {
    return this.interpolationForAttribute('extended_s3_destination_configuration') as any;
  }
  public set extendedS3DestinationConfiguration(value: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration ) {
    this._extendedS3DestinationConfiguration = value;
  }
  public resetExtendedS3DestinationConfiguration() {
    this._extendedS3DestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedS3DestinationConfigurationInput() {
    return this._extendedS3DestinationConfiguration
  }

  // http_endpoint_destination_configuration - computed: false, optional: true, required: false
  private _httpEndpointDestinationConfiguration?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
  public get httpEndpointDestinationConfiguration() {
    return this.interpolationForAttribute('http_endpoint_destination_configuration') as any;
  }
  public set httpEndpointDestinationConfiguration(value: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration ) {
    this._httpEndpointDestinationConfiguration = value;
  }
  public resetHttpEndpointDestinationConfiguration() {
    this._httpEndpointDestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointDestinationConfigurationInput() {
    return this._httpEndpointDestinationConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kinesis_stream_source_configuration - computed: true, optional: true, required: false
  private _kinesisStreamSourceConfiguration?: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration;
  public get kinesisStreamSourceConfiguration() {
    return this.interpolationForAttribute('kinesis_stream_source_configuration') as any;
  }
  public set kinesisStreamSourceConfiguration(value: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration) {
    this._kinesisStreamSourceConfiguration = value;
  }
  public resetKinesisStreamSourceConfiguration() {
    this._kinesisStreamSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamSourceConfigurationInput() {
    return this._kinesisStreamSourceConfiguration
  }

  // redshift_destination_configuration - computed: false, optional: true, required: false
  private _redshiftDestinationConfiguration?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration;
  public get redshiftDestinationConfiguration() {
    return this.interpolationForAttribute('redshift_destination_configuration') as any;
  }
  public set redshiftDestinationConfiguration(value: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration ) {
    this._redshiftDestinationConfiguration = value;
  }
  public resetRedshiftDestinationConfiguration() {
    this._redshiftDestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDestinationConfigurationInput() {
    return this._redshiftDestinationConfiguration
  }

  // s3_destination_configuration - computed: false, optional: true, required: false
  private _s3DestinationConfiguration?: KinesisfirehoseDeliveryStreamS3DestinationConfiguration;
  public get s3DestinationConfiguration() {
    return this.interpolationForAttribute('s3_destination_configuration') as any;
  }
  public set s3DestinationConfiguration(value: KinesisfirehoseDeliveryStreamS3DestinationConfiguration ) {
    this._s3DestinationConfiguration = value;
  }
  public resetS3DestinationConfiguration() {
    this._s3DestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationConfigurationInput() {
    return this._s3DestinationConfiguration
  }

  // splunk_destination_configuration - computed: false, optional: true, required: false
  private _splunkDestinationConfiguration?: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration;
  public get splunkDestinationConfiguration() {
    return this.interpolationForAttribute('splunk_destination_configuration') as any;
  }
  public set splunkDestinationConfiguration(value: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration ) {
    this._splunkDestinationConfiguration = value;
  }
  public resetSplunkDestinationConfiguration() {
    this._splunkDestinationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkDestinationConfigurationInput() {
    return this._splunkDestinationConfiguration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KinesisfirehoseDeliveryStreamTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KinesisfirehoseDeliveryStreamTags[] ) {
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
      delivery_stream_encryption_configuration_input: kinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(this._deliveryStreamEncryptionConfigurationInput),
      delivery_stream_name: cdktf.stringToTerraform(this._deliveryStreamName),
      delivery_stream_type: cdktf.stringToTerraform(this._deliveryStreamType),
      elasticsearch_destination_configuration: kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(this._elasticsearchDestinationConfiguration),
      extended_s3_destination_configuration: kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(this._extendedS3DestinationConfiguration),
      http_endpoint_destination_configuration: kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(this._httpEndpointDestinationConfiguration),
      kinesis_stream_source_configuration: kinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(this._kinesisStreamSourceConfiguration),
      redshift_destination_configuration: kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(this._redshiftDestinationConfiguration),
      s3_destination_configuration: kinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(this._s3DestinationConfiguration),
      splunk_destination_configuration: kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(this._splunkDestinationConfiguration),
      tags: cdktf.listMapper(kinesisfirehoseDeliveryStreamTagsToTerraform)(this._tags),
    };
  }
}
