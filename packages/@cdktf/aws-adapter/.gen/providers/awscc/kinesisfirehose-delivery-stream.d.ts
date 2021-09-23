import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function kinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct?: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration): any;
export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
}
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#timestamp_formats KinesisfirehoseDeliveryStream#timestamp_formats}
    */
    readonly timestampFormats?: string[];
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#case_insensitive KinesisfirehoseDeliveryStream#case_insensitive}
    */
    readonly caseInsensitive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#column_to_json_key_mappings KinesisfirehoseDeliveryStream#column_to_json_key_mappings}
    */
    readonly columnToJsonKeyMappings?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisfirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
    */
    readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#deserializer KinesisfirehoseDeliveryStream#deserializer}
    */
    readonly deserializer?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#serializer KinesisfirehoseDeliveryStream#serializer}
    */
    readonly serializer?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration): any;
export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
}
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration): any;
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
export declare function kinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration): any;
export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
}
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration): any;
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
export declare function kinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamS3DestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration): any;
export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#duration_in_seconds KinesisfirehoseDeliveryStream#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
}
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export interface KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html#awskms_key_arn KinesisfirehoseDeliveryStream#awskms_key_arn}
    */
    readonly awskmsKeyArn: string;
}
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration): any;
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
export declare function kinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct?: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration): any;
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
export declare function kinesisfirehoseDeliveryStreamTagsToTerraform(struct?: KinesisfirehoseDeliveryStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream}
*/
export declare class KinesisfirehoseDeliveryStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisfirehoseDeliveryStreamConfig = {}
    */
    constructor(scope: Construct, id: string, config?: KinesisfirehoseDeliveryStreamConfig);
    get arn(): string;
    private _deliveryStreamEncryptionConfigurationInput?;
    get deliveryStreamEncryptionConfigurationInput(): KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
    set deliveryStreamEncryptionConfigurationInput(value: KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput);
    resetDeliveryStreamEncryptionConfigurationInput(): void;
    get deliveryStreamEncryptionConfigurationInputInput(): KinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput | undefined;
    private _deliveryStreamName?;
    get deliveryStreamName(): string;
    set deliveryStreamName(value: string);
    resetDeliveryStreamName(): void;
    get deliveryStreamNameInput(): string | undefined;
    private _deliveryStreamType?;
    get deliveryStreamType(): string;
    set deliveryStreamType(value: string);
    resetDeliveryStreamType(): void;
    get deliveryStreamTypeInput(): string | undefined;
    private _elasticsearchDestinationConfiguration?;
    get elasticsearchDestinationConfiguration(): KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration;
    set elasticsearchDestinationConfiguration(value: KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration);
    resetElasticsearchDestinationConfiguration(): void;
    get elasticsearchDestinationConfigurationInput(): KinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration | undefined;
    private _extendedS3DestinationConfiguration?;
    get extendedS3DestinationConfiguration(): KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration;
    set extendedS3DestinationConfiguration(value: KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration);
    resetExtendedS3DestinationConfiguration(): void;
    get extendedS3DestinationConfigurationInput(): KinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration | undefined;
    private _httpEndpointDestinationConfiguration?;
    get httpEndpointDestinationConfiguration(): KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
    set httpEndpointDestinationConfiguration(value: KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration);
    resetHttpEndpointDestinationConfiguration(): void;
    get httpEndpointDestinationConfigurationInput(): KinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration | undefined;
    get id(): string;
    private _kinesisStreamSourceConfiguration?;
    get kinesisStreamSourceConfiguration(): KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration;
    set kinesisStreamSourceConfiguration(value: KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration);
    resetKinesisStreamSourceConfiguration(): void;
    get kinesisStreamSourceConfigurationInput(): KinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration | undefined;
    private _redshiftDestinationConfiguration?;
    get redshiftDestinationConfiguration(): KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration;
    set redshiftDestinationConfiguration(value: KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration);
    resetRedshiftDestinationConfiguration(): void;
    get redshiftDestinationConfigurationInput(): KinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration | undefined;
    private _s3DestinationConfiguration?;
    get s3DestinationConfiguration(): KinesisfirehoseDeliveryStreamS3DestinationConfiguration;
    set s3DestinationConfiguration(value: KinesisfirehoseDeliveryStreamS3DestinationConfiguration);
    resetS3DestinationConfiguration(): void;
    get s3DestinationConfigurationInput(): KinesisfirehoseDeliveryStreamS3DestinationConfiguration | undefined;
    private _splunkDestinationConfiguration?;
    get splunkDestinationConfiguration(): KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration;
    set splunkDestinationConfiguration(value: KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration);
    resetSplunkDestinationConfiguration(): void;
    get splunkDestinationConfigurationInput(): KinesisfirehoseDeliveryStreamSplunkDestinationConfiguration | undefined;
    private _tags?;
    get tags(): KinesisfirehoseDeliveryStreamTags[];
    set tags(value: KinesisfirehoseDeliveryStreamTags[]);
    resetTags(): void;
    get tagsInput(): KinesisfirehoseDeliveryStreamTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
