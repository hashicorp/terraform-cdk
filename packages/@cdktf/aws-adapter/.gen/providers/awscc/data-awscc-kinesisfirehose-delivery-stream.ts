// https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccKinesisfirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html#id DataAwsccKinesisfirehoseDeliveryStream#id}
  */
  readonly id: string;
}
export class DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput extends cdktf.ComplexComputedList {

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  public get processors() {
    return this.interpolationForAttribute('processors') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration extends cdktf.ComplexComputedList {

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // cluster_endpoint - computed: true, optional: false, required: false
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // index_rotation_period - computed: true, optional: false, required: false
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }

  // processing_configuration - computed: true, optional: false, required: false
  public get processingConfiguration() {
    return this.interpolationForAttribute('processing_configuration') as any;
  }

  // retry_options - computed: true, optional: false, required: false
  public get retryOptions() {
    return this.interpolationForAttribute('retry_options') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    cluster_endpoint: cdktf.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktf.stringToTerraform(struct!.domainArn),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktf.stringToTerraform(struct!.indexRotationPeriod),
    processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    vpc_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe extends cdktf.ComplexComputedList {

  // timestamp_formats - computed: true, optional: false, required: false
  public get timestampFormats() {
    return this.getListAttribute('timestamp_formats');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe extends cdktf.ComplexComputedList {

  // case_insensitive - computed: true, optional: false, required: false
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }

  // column_to_json_key_mappings - computed: true, optional: false, required: false
  public get columnToJsonKeyMappings() {
    return this.interpolationForAttribute('column_to_json_key_mappings') as any;
  }

  // convert_dots_in_json_keys_to_underscores - computed: true, optional: false, required: false
  public get convertDotsInJsonKeysToUnderscores() {
    return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer extends cdktf.ComplexComputedList {

  // hive_json_ser_de - computed: true, optional: false, required: false
  public get hiveJsonSerDe() {
    return this.interpolationForAttribute('hive_json_ser_de') as any;
  }

  // open_x_json_ser_de - computed: true, optional: false, required: false
  public get openXJsonSerDe() {
    return this.interpolationForAttribute('open_x_json_ser_de') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hive_json_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct!.hiveJsonSerDe),
    open_x_json_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct!.openXJsonSerDe),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration extends cdktf.ComplexComputedList {

  // deserializer - computed: true, optional: false, required: false
  public get deserializer() {
    return this.interpolationForAttribute('deserializer') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deserializer: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct!.deserializer),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe extends cdktf.ComplexComputedList {

  // block_size_bytes - computed: true, optional: false, required: false
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }

  // bloom_filter_columns - computed: true, optional: false, required: false
  public get bloomFilterColumns() {
    return this.getListAttribute('bloom_filter_columns');
  }

  // bloom_filter_false_positive_probability - computed: true, optional: false, required: false
  public get bloomFilterFalsePositiveProbability() {
    return this.getNumberAttribute('bloom_filter_false_positive_probability');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // dictionary_key_threshold - computed: true, optional: false, required: false
  public get dictionaryKeyThreshold() {
    return this.getNumberAttribute('dictionary_key_threshold');
  }

  // enable_padding - computed: true, optional: false, required: false
  public get enablePadding() {
    return this.getBooleanAttribute('enable_padding');
  }

  // format_version - computed: true, optional: false, required: false
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }

  // padding_tolerance - computed: true, optional: false, required: false
  public get paddingTolerance() {
    return this.getNumberAttribute('padding_tolerance');
  }

  // row_index_stride - computed: true, optional: false, required: false
  public get rowIndexStride() {
    return this.getNumberAttribute('row_index_stride');
  }

  // stripe_size_bytes - computed: true, optional: false, required: false
  public get stripeSizeBytes() {
    return this.getNumberAttribute('stripe_size_bytes');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
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

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe extends cdktf.ComplexComputedList {

  // block_size_bytes - computed: true, optional: false, required: false
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // enable_dictionary_compression - computed: true, optional: false, required: false
  public get enableDictionaryCompression() {
    return this.getBooleanAttribute('enable_dictionary_compression');
  }

  // max_padding_bytes - computed: true, optional: false, required: false
  public get maxPaddingBytes() {
    return this.getNumberAttribute('max_padding_bytes');
  }

  // page_size_bytes - computed: true, optional: false, required: false
  public get pageSizeBytes() {
    return this.getNumberAttribute('page_size_bytes');
  }

  // writer_version - computed: true, optional: false, required: false
  public get writerVersion() {
    return this.getStringAttribute('writer_version');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
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

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer extends cdktf.ComplexComputedList {

  // orc_ser_de - computed: true, optional: false, required: false
  public get orcSerDe() {
    return this.interpolationForAttribute('orc_ser_de') as any;
  }

  // parquet_ser_de - computed: true, optional: false, required: false
  public get parquetSerDe() {
    return this.interpolationForAttribute('parquet_ser_de') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    orc_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct!.orcSerDe),
    parquet_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct!.parquetSerDe),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration extends cdktf.ComplexComputedList {

  // serializer - computed: true, optional: false, required: false
  public get serializer() {
    return this.interpolationForAttribute('serializer') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    serializer: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct!.serializer),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration extends cdktf.ComplexComputedList {

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
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

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // input_format_configuration - computed: true, optional: false, required: false
  public get inputFormatConfiguration() {
    return this.interpolationForAttribute('input_format_configuration') as any;
  }

  // output_format_configuration - computed: true, optional: false, required: false
  public get outputFormatConfiguration() {
    return this.interpolationForAttribute('output_format_configuration') as any;
  }

  // schema_configuration - computed: true, optional: false, required: false
  public get schemaConfiguration() {
    return this.interpolationForAttribute('schema_configuration') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    input_format_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct!.inputFormatConfiguration),
    output_format_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct!.outputFormatConfiguration),
    schema_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct!.schemaConfiguration),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  public get processors() {
    return this.interpolationForAttribute('processors') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // data_format_conversion_configuration - computed: true, optional: false, required: false
  public get dataFormatConversionConfiguration() {
    return this.interpolationForAttribute('data_format_conversion_configuration') as any;
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // processing_configuration - computed: true, optional: false, required: false
  public get processingConfiguration() {
    return this.interpolationForAttribute('processing_configuration') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_configuration - computed: true, optional: false, required: false
  public get s3BackupConfiguration() {
    return this.interpolationForAttribute('s3_backup_configuration') as any;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    data_format_conversion_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct!.dataFormatConversionConfiguration),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration extends cdktf.ComplexComputedList {

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  public get processors() {
    return this.interpolationForAttribute('processors') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration extends cdktf.ComplexComputedList {

  // common_attributes - computed: true, optional: false, required: false
  public get commonAttributes() {
    return this.interpolationForAttribute('common_attributes') as any;
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    common_attributes: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration extends cdktf.ComplexComputedList {

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }

  // processing_configuration - computed: true, optional: false, required: false
  public get processingConfiguration() {
    return this.interpolationForAttribute('processing_configuration') as any;
  }

  // request_configuration - computed: true, optional: false, required: false
  public get requestConfiguration() {
    return this.interpolationForAttribute('request_configuration') as any;
  }

  // retry_options - computed: true, optional: false, required: false
  public get retryOptions() {
    return this.interpolationForAttribute('retry_options') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    endpoint_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct!.endpointConfiguration),
    processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    request_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct!.requestConfiguration),
    retry_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration extends cdktf.ComplexComputedList {

  // kinesis_stream_arn - computed: true, optional: false, required: false
  public get kinesisStreamArn() {
    return this.getStringAttribute('kinesis_stream_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends cdktf.ComplexComputedList {

  // copy_options - computed: true, optional: false, required: false
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }

  // data_table_columns - computed: true, optional: false, required: false
  public get dataTableColumns() {
    return this.getStringAttribute('data_table_columns');
  }

  // data_table_name - computed: true, optional: false, required: false
  public get dataTableName() {
    return this.getStringAttribute('data_table_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    copy_options: cdktf.stringToTerraform(struct!.copyOptions),
    data_table_columns: cdktf.stringToTerraform(struct!.dataTableColumns),
    data_table_name: cdktf.stringToTerraform(struct!.dataTableName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  public get processors() {
    return this.interpolationForAttribute('processors') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration extends cdktf.ComplexComputedList {

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // cluster_jdbcurl - computed: true, optional: false, required: false
  public get clusterJdbcurl() {
    return this.getStringAttribute('cluster_jdbcurl');
  }

  // copy_command - computed: true, optional: false, required: false
  public get copyCommand() {
    return this.interpolationForAttribute('copy_command') as any;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // processing_configuration - computed: true, optional: false, required: false
  public get processingConfiguration() {
    return this.interpolationForAttribute('processing_configuration') as any;
  }

  // retry_options - computed: true, optional: false, required: false
  public get retryOptions() {
    return this.interpolationForAttribute('retry_options') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // s3_backup_configuration - computed: true, optional: false, required: false
  public get s3BackupConfiguration() {
    return this.interpolationForAttribute('s3_backup_configuration') as any;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    cluster_jdbcurl: cdktf.stringToTerraform(struct!.clusterJdbcurl),
    copy_command: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct!.copyCommand),
    password: cdktf.stringToTerraform(struct!.password),
    processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {

  // parameter_name - computed: true, optional: false, required: false
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // processors - computed: true, optional: false, required: false
  public get processors() {
    return this.interpolationForAttribute('processors') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {

  // duration_in_seconds - computed: true, optional: false, required: false
  public get durationInSeconds() {
    return this.getNumberAttribute('duration_in_seconds');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_seconds: cdktf.numberToTerraform(struct!.durationInSeconds),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // size_in_m_bs - computed: true, optional: false, required: false
  public get sizeInMBs() {
    return this.getNumberAttribute('size_in_m_bs');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    size_in_m_bs: cdktf.numberToTerraform(struct!.sizeInMBs),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_group_name - computed: true, optional: false, required: false
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }

  // log_stream_name - computed: true, optional: false, required: false
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // awskms_key_arn - computed: true, optional: false, required: false
  public get awskmsKeyArn() {
    return this.getStringAttribute('awskms_key_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    awskms_key_arn: cdktf.stringToTerraform(struct!.awskmsKeyArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }

  // no_encryption_config - computed: true, optional: false, required: false
  public get noEncryptionConfig() {
    return this.getStringAttribute('no_encryption_config');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
    no_encryption_config: cdktf.stringToTerraform(struct!.noEncryptionConfig),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {

  // bucket_arn - computed: true, optional: false, required: false
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }

  // buffering_hints - computed: true, optional: false, required: false
  public get bufferingHints() {
    return this.interpolationForAttribute('buffering_hints') as any;
  }

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // compression_format - computed: true, optional: false, required: false
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // error_output_prefix - computed: true, optional: false, required: false
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct!.bufferingHints),
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration extends cdktf.ComplexComputedList {

  // cloudwatch_logging_options - computed: true, optional: false, required: false
  public get cloudwatchLoggingOptions() {
    return this.interpolationForAttribute('cloudwatch_logging_options') as any;
  }

  // hec_acknowledgment_timeout_in_seconds - computed: true, optional: false, required: false
  public get hecAcknowledgmentTimeoutInSeconds() {
    return this.getNumberAttribute('hec_acknowledgment_timeout_in_seconds');
  }

  // hec_endpoint - computed: true, optional: false, required: false
  public get hecEndpoint() {
    return this.getStringAttribute('hec_endpoint');
  }

  // hec_endpoint_type - computed: true, optional: false, required: false
  public get hecEndpointType() {
    return this.getStringAttribute('hec_endpoint_type');
  }

  // hec_token - computed: true, optional: false, required: false
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }

  // processing_configuration - computed: true, optional: false, required: false
  public get processingConfiguration() {
    return this.interpolationForAttribute('processing_configuration') as any;
  }

  // retry_options - computed: true, optional: false, required: false
  public get retryOptions() {
    return this.interpolationForAttribute('retry_options') as any;
  }

  // s3_backup_mode - computed: true, optional: false, required: false
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }

  // s3_configuration - computed: true, optional: false, required: false
  public get s3Configuration() {
    return this.interpolationForAttribute('s3_configuration') as any;
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    hec_acknowledgment_timeout_in_seconds: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeoutInSeconds),
    hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    retry_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct!.retryOptions),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct!.s3Configuration),
  }
}

export class DataAwsccKinesisfirehoseDeliveryStreamTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform(struct?: DataAwsccKinesisfirehoseDeliveryStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream}
*/
export class DataAwsccKinesisfirehoseDeliveryStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kinesisfirehose_delivery_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccKinesisfirehoseDeliveryStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccKinesisfirehoseDeliveryStreamConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delivery_stream_encryption_configuration_input - computed: true, optional: false, required: false
  public get deliveryStreamEncryptionConfigurationInput() {
    return this.interpolationForAttribute('delivery_stream_encryption_configuration_input') as any;
  }

  // delivery_stream_name - computed: true, optional: false, required: false
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }

  // delivery_stream_type - computed: true, optional: false, required: false
  public get deliveryStreamType() {
    return this.getStringAttribute('delivery_stream_type');
  }

  // elasticsearch_destination_configuration - computed: true, optional: false, required: false
  public get elasticsearchDestinationConfiguration() {
    return this.interpolationForAttribute('elasticsearch_destination_configuration') as any;
  }

  // extended_s3_destination_configuration - computed: true, optional: false, required: false
  public get extendedS3DestinationConfiguration() {
    return this.interpolationForAttribute('extended_s3_destination_configuration') as any;
  }

  // http_endpoint_destination_configuration - computed: true, optional: false, required: false
  public get httpEndpointDestinationConfiguration() {
    return this.interpolationForAttribute('http_endpoint_destination_configuration') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // kinesis_stream_source_configuration - computed: true, optional: false, required: false
  public get kinesisStreamSourceConfiguration() {
    return this.interpolationForAttribute('kinesis_stream_source_configuration') as any;
  }

  // redshift_destination_configuration - computed: true, optional: false, required: false
  public get redshiftDestinationConfiguration() {
    return this.interpolationForAttribute('redshift_destination_configuration') as any;
  }

  // s3_destination_configuration - computed: true, optional: false, required: false
  public get s3DestinationConfiguration() {
    return this.interpolationForAttribute('s3_destination_configuration') as any;
  }

  // splunk_destination_configuration - computed: true, optional: false, required: false
  public get splunkDestinationConfiguration() {
    return this.interpolationForAttribute('splunk_destination_configuration') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
