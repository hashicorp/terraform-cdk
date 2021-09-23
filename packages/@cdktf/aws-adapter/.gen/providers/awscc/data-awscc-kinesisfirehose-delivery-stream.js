"use strict";
// https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput = void 0;
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration = void 0;
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand = exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration = void 0;
exports.DataAwsccKinesisfirehoseDeliveryStream = exports.dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamTags = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters = exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform = exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions = void 0;
const cdktf = require("cdktf");
class DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput extends cdktf.ComplexComputedList {
    // key_arn - computed: true, optional: false, required: false
    get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    // key_type - computed: true, optional: false, required: false
    get keyType() {
        return this.getStringAttribute('key_type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput = DataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
function dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_arn: cdktf.stringToTerraform(struct.keyArn),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform = dataAwsccKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInputToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    // parameter_name - computed: true, optional: false, required: false
    get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    // parameter_value - computed: true, optional: false, required: false
    get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParameters;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessors;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // processors - computed: true, optional: false, required: false
    get processors() {
        return this.interpolationForAttribute('processors');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    // duration_in_seconds - computed: true, optional: false, required: false
    get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_seconds: cdktf.numberToTerraform(struct.durationInSeconds),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3Configuration;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration extends cdktf.ComplexComputedList {
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration extends cdktf.ComplexComputedList {
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // cluster_endpoint - computed: true, optional: false, required: false
    get clusterEndpoint() {
        return this.getStringAttribute('cluster_endpoint');
    }
    // domain_arn - computed: true, optional: false, required: false
    get domainArn() {
        return this.getStringAttribute('domain_arn');
    }
    // index_name - computed: true, optional: false, required: false
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    // index_rotation_period - computed: true, optional: false, required: false
    get indexRotationPeriod() {
        return this.getStringAttribute('index_rotation_period');
    }
    // processing_configuration - computed: true, optional: false, required: false
    get processingConfiguration() {
        return this.interpolationForAttribute('processing_configuration');
    }
    // retry_options - computed: true, optional: false, required: false
    get retryOptions() {
        return this.interpolationForAttribute('retry_options');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // s3_backup_mode - computed: true, optional: false, required: false
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    // s3_configuration - computed: true, optional: false, required: false
    get s3Configuration() {
        return this.interpolationForAttribute('s3_configuration');
    }
    // type_name - computed: true, optional: false, required: false
    get typeName() {
        return this.getStringAttribute('type_name');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        cluster_endpoint: cdktf.stringToTerraform(struct.clusterEndpoint),
        domain_arn: cdktf.stringToTerraform(struct.domainArn),
        index_name: cdktf.stringToTerraform(struct.indexName),
        index_rotation_period: cdktf.stringToTerraform(struct.indexRotationPeriod),
        processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        retry_options: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptionsToTerraform(struct.retryOptions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationS3ConfigurationToTerraform(struct.s3Configuration),
        type_name: cdktf.stringToTerraform(struct.typeName),
        vpc_configuration: dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamElasticsearchDestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe extends cdktf.ComplexComputedList {
    // timestamp_formats - computed: true, optional: false, required: false
    get timestampFormats() {
        return this.getListAttribute('timestamp_formats');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct.timestampFormats),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe extends cdktf.ComplexComputedList {
    // case_insensitive - computed: true, optional: false, required: false
    get caseInsensitive() {
        return this.getBooleanAttribute('case_insensitive');
    }
    // column_to_json_key_mappings - computed: true, optional: false, required: false
    get columnToJsonKeyMappings() {
        return this.interpolationForAttribute('column_to_json_key_mappings');
    }
    // convert_dots_in_json_keys_to_underscores - computed: true, optional: false, required: false
    get convertDotsInJsonKeysToUnderscores() {
        return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        case_insensitive: cdktf.booleanToTerraform(struct.caseInsensitive),
        column_to_json_key_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct.columnToJsonKeyMappings),
        convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct.convertDotsInJsonKeysToUnderscores),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer extends cdktf.ComplexComputedList {
    // hive_json_ser_de - computed: true, optional: false, required: false
    get hiveJsonSerDe() {
        return this.interpolationForAttribute('hive_json_ser_de');
    }
    // open_x_json_ser_de - computed: true, optional: false, required: false
    get openXJsonSerDe() {
        return this.interpolationForAttribute('open_x_json_ser_de');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        hive_json_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct.hiveJsonSerDe),
        open_x_json_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct.openXJsonSerDe),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration extends cdktf.ComplexComputedList {
    // deserializer - computed: true, optional: false, required: false
    get deserializer() {
        return this.interpolationForAttribute('deserializer');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        deserializer: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct.deserializer),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe extends cdktf.ComplexComputedList {
    // block_size_bytes - computed: true, optional: false, required: false
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    // bloom_filter_columns - computed: true, optional: false, required: false
    get bloomFilterColumns() {
        return this.getListAttribute('bloom_filter_columns');
    }
    // bloom_filter_false_positive_probability - computed: true, optional: false, required: false
    get bloomFilterFalsePositiveProbability() {
        return this.getNumberAttribute('bloom_filter_false_positive_probability');
    }
    // compression - computed: true, optional: false, required: false
    get compression() {
        return this.getStringAttribute('compression');
    }
    // dictionary_key_threshold - computed: true, optional: false, required: false
    get dictionaryKeyThreshold() {
        return this.getNumberAttribute('dictionary_key_threshold');
    }
    // enable_padding - computed: true, optional: false, required: false
    get enablePadding() {
        return this.getBooleanAttribute('enable_padding');
    }
    // format_version - computed: true, optional: false, required: false
    get formatVersion() {
        return this.getStringAttribute('format_version');
    }
    // padding_tolerance - computed: true, optional: false, required: false
    get paddingTolerance() {
        return this.getNumberAttribute('padding_tolerance');
    }
    // row_index_stride - computed: true, optional: false, required: false
    get rowIndexStride() {
        return this.getNumberAttribute('row_index_stride');
    }
    // stripe_size_bytes - computed: true, optional: false, required: false
    get stripeSizeBytes() {
        return this.getNumberAttribute('stripe_size_bytes');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bloomFilterColumns),
        bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct.bloomFilterFalsePositiveProbability),
        compression: cdktf.stringToTerraform(struct.compression),
        dictionary_key_threshold: cdktf.numberToTerraform(struct.dictionaryKeyThreshold),
        enable_padding: cdktf.booleanToTerraform(struct.enablePadding),
        format_version: cdktf.stringToTerraform(struct.formatVersion),
        padding_tolerance: cdktf.numberToTerraform(struct.paddingTolerance),
        row_index_stride: cdktf.numberToTerraform(struct.rowIndexStride),
        stripe_size_bytes: cdktf.numberToTerraform(struct.stripeSizeBytes),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe extends cdktf.ComplexComputedList {
    // block_size_bytes - computed: true, optional: false, required: false
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    // compression - computed: true, optional: false, required: false
    get compression() {
        return this.getStringAttribute('compression');
    }
    // enable_dictionary_compression - computed: true, optional: false, required: false
    get enableDictionaryCompression() {
        return this.getBooleanAttribute('enable_dictionary_compression');
    }
    // max_padding_bytes - computed: true, optional: false, required: false
    get maxPaddingBytes() {
        return this.getNumberAttribute('max_padding_bytes');
    }
    // page_size_bytes - computed: true, optional: false, required: false
    get pageSizeBytes() {
        return this.getNumberAttribute('page_size_bytes');
    }
    // writer_version - computed: true, optional: false, required: false
    get writerVersion() {
        return this.getStringAttribute('writer_version');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        compression: cdktf.stringToTerraform(struct.compression),
        enable_dictionary_compression: cdktf.booleanToTerraform(struct.enableDictionaryCompression),
        max_padding_bytes: cdktf.numberToTerraform(struct.maxPaddingBytes),
        page_size_bytes: cdktf.numberToTerraform(struct.pageSizeBytes),
        writer_version: cdktf.stringToTerraform(struct.writerVersion),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer extends cdktf.ComplexComputedList {
    // orc_ser_de - computed: true, optional: false, required: false
    get orcSerDe() {
        return this.interpolationForAttribute('orc_ser_de');
    }
    // parquet_ser_de - computed: true, optional: false, required: false
    get parquetSerDe() {
        return this.interpolationForAttribute('parquet_ser_de');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        orc_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct.orcSerDe),
        parquet_ser_de: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct.parquetSerDe),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration extends cdktf.ComplexComputedList {
    // serializer - computed: true, optional: false, required: false
    get serializer() {
        return this.interpolationForAttribute('serializer');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        serializer: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct.serializer),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration extends cdktf.ComplexComputedList {
    // catalog_id - computed: true, optional: false, required: false
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        region: cdktf.stringToTerraform(struct.region),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        version_id: cdktf.stringToTerraform(struct.versionId),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // input_format_configuration - computed: true, optional: false, required: false
    get inputFormatConfiguration() {
        return this.interpolationForAttribute('input_format_configuration');
    }
    // output_format_configuration - computed: true, optional: false, required: false
    get outputFormatConfiguration() {
        return this.interpolationForAttribute('output_format_configuration');
    }
    // schema_configuration - computed: true, optional: false, required: false
    get schemaConfiguration() {
        return this.interpolationForAttribute('schema_configuration');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        input_format_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct.inputFormatConfiguration),
        output_format_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct.outputFormatConfiguration),
        schema_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct.schemaConfiguration),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    // parameter_name - computed: true, optional: false, required: false
    get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    // parameter_value - computed: true, optional: false, required: false
    get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParameters;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessors;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // processors - computed: true, optional: false, required: false
    get processors() {
        return this.interpolationForAttribute('processors');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // data_format_conversion_configuration - computed: true, optional: false, required: false
    get dataFormatConversionConfiguration() {
        return this.interpolationForAttribute('data_format_conversion_configuration');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // processing_configuration - computed: true, optional: false, required: false
    get processingConfiguration() {
        return this.interpolationForAttribute('processing_configuration');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // s3_backup_configuration - computed: true, optional: false, required: false
    get s3BackupConfiguration() {
        return this.interpolationForAttribute('s3_backup_configuration');
    }
    // s3_backup_mode - computed: true, optional: false, required: false
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        data_format_conversion_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationDataFormatConversionConfigurationToTerraform(struct.dataFormatConversionConfiguration),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_configuration: dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamExtendedS3DestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration extends cdktf.ComplexComputedList {
    // access_key - computed: true, optional: false, required: false
    get accessKey() {
        return this.getStringAttribute('access_key');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        name: cdktf.stringToTerraform(struct.name),
        url: cdktf.stringToTerraform(struct.url),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    // parameter_name - computed: true, optional: false, required: false
    get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    // parameter_value - computed: true, optional: false, required: false
    get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParameters;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessors;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // processors - computed: true, optional: false, required: false
    get processors() {
        return this.interpolationForAttribute('processors');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes extends cdktf.ComplexComputedList {
    // attribute_name - computed: true, optional: false, required: false
    get attributeName() {
        return this.getStringAttribute('attribute_name');
    }
    // attribute_value - computed: true, optional: false, required: false
    get attributeValue() {
        return this.getStringAttribute('attribute_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributes;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        attribute_value: cdktf.stringToTerraform(struct.attributeValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration extends cdktf.ComplexComputedList {
    // common_attributes - computed: true, optional: false, required: false
    get commonAttributes() {
        return this.interpolationForAttribute('common_attributes');
    }
    // content_encoding - computed: true, optional: false, required: false
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        common_attributes: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationCommonAttributesToTerraform)(struct.commonAttributes),
        content_encoding: cdktf.stringToTerraform(struct.contentEncoding),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    // duration_in_seconds - computed: true, optional: false, required: false
    get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptions;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_seconds: cdktf.numberToTerraform(struct.durationInSeconds),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3Configuration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration extends cdktf.ComplexComputedList {
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // endpoint_configuration - computed: true, optional: false, required: false
    get endpointConfiguration() {
        return this.interpolationForAttribute('endpoint_configuration');
    }
    // processing_configuration - computed: true, optional: false, required: false
    get processingConfiguration() {
        return this.interpolationForAttribute('processing_configuration');
    }
    // request_configuration - computed: true, optional: false, required: false
    get requestConfiguration() {
        return this.interpolationForAttribute('request_configuration');
    }
    // retry_options - computed: true, optional: false, required: false
    get retryOptions() {
        return this.interpolationForAttribute('retry_options');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // s3_backup_mode - computed: true, optional: false, required: false
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    // s3_configuration - computed: true, optional: false, required: false
    get s3Configuration() {
        return this.interpolationForAttribute('s3_configuration');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        endpoint_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationEndpointConfigurationToTerraform(struct.endpointConfiguration),
        processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        request_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRequestConfigurationToTerraform(struct.requestConfiguration),
        retry_options: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationRetryOptionsToTerraform(struct.retryOptions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationS3ConfigurationToTerraform(struct.s3Configuration),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration extends cdktf.ComplexComputedList {
    // kinesis_stream_arn - computed: true, optional: false, required: false
    get kinesisStreamArn() {
        return this.getStringAttribute('kinesis_stream_arn');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration = DataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kinesis_stream_arn: cdktf.stringToTerraform(struct.kinesisStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamKinesisStreamSourceConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand extends cdktf.ComplexComputedList {
    // copy_options - computed: true, optional: false, required: false
    get copyOptions() {
        return this.getStringAttribute('copy_options');
    }
    // data_table_columns - computed: true, optional: false, required: false
    get dataTableColumns() {
        return this.getStringAttribute('data_table_columns');
    }
    // data_table_name - computed: true, optional: false, required: false
    get dataTableName() {
        return this.getStringAttribute('data_table_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        copy_options: cdktf.stringToTerraform(struct.copyOptions),
        data_table_columns: cdktf.stringToTerraform(struct.dataTableColumns),
        data_table_name: cdktf.stringToTerraform(struct.dataTableName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    // parameter_name - computed: true, optional: false, required: false
    get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    // parameter_value - computed: true, optional: false, required: false
    get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParameters;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessors;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // processors - computed: true, optional: false, required: false
    get processors() {
        return this.interpolationForAttribute('processors');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    // duration_in_seconds - computed: true, optional: false, required: false
    get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptions;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_seconds: cdktf.numberToTerraform(struct.durationInSeconds),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3Configuration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration extends cdktf.ComplexComputedList {
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // cluster_jdbcurl - computed: true, optional: false, required: false
    get clusterJdbcurl() {
        return this.getStringAttribute('cluster_jdbcurl');
    }
    // copy_command - computed: true, optional: false, required: false
    get copyCommand() {
        return this.interpolationForAttribute('copy_command');
    }
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // processing_configuration - computed: true, optional: false, required: false
    get processingConfiguration() {
        return this.interpolationForAttribute('processing_configuration');
    }
    // retry_options - computed: true, optional: false, required: false
    get retryOptions() {
        return this.interpolationForAttribute('retry_options');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // s3_backup_configuration - computed: true, optional: false, required: false
    get s3BackupConfiguration() {
        return this.interpolationForAttribute('s3_backup_configuration');
    }
    // s3_backup_mode - computed: true, optional: false, required: false
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    // s3_configuration - computed: true, optional: false, required: false
    get s3Configuration() {
        return this.interpolationForAttribute('s3_configuration');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        cluster_jdbcurl: cdktf.stringToTerraform(struct.clusterJdbcurl),
        copy_command: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommandToTerraform(struct.copyCommand),
        password: cdktf.stringToTerraform(struct.password),
        processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        retry_options: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationRetryOptionsToTerraform(struct.retryOptions),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationS3ConfigurationToTerraform(struct.s3Configuration),
        username: cdktf.stringToTerraform(struct.username),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamRedshiftDestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamS3DestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters extends cdktf.ComplexComputedList {
    // parameter_name - computed: true, optional: false, required: false
    get parameterName() {
        return this.getStringAttribute('parameter_name');
    }
    // parameter_value - computed: true, optional: false, required: false
    get parameterValue() {
        return this.getStringAttribute('parameter_value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParameters;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors extends cdktf.ComplexComputedList {
    // parameters - computed: true, optional: false, required: false
    get parameters() {
        return this.interpolationForAttribute('parameters');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessors;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameters: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
        type: cdktf.stringToTerraform(struct.type),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // processors - computed: true, optional: false, required: false
    get processors() {
        return this.interpolationForAttribute('processors');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions extends cdktf.ComplexComputedList {
    // duration_in_seconds - computed: true, optional: false, required: false
    get durationInSeconds() {
        return this.getNumberAttribute('duration_in_seconds');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptions;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        duration_in_seconds: cdktf.numberToTerraform(struct.durationInSeconds),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints extends cdktf.ComplexComputedList {
    // interval_in_seconds - computed: true, optional: false, required: false
    get intervalInSeconds() {
        return this.getNumberAttribute('interval_in_seconds');
    }
    // size_in_m_bs - computed: true, optional: false, required: false
    get sizeInMBs() {
        return this.getNumberAttribute('size_in_m_bs');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHints;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        interval_in_seconds: cdktf.numberToTerraform(struct.intervalInSeconds),
        size_in_m_bs: cdktf.numberToTerraform(struct.sizeInMBs),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_group_name - computed: true, optional: false, required: false
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    // log_stream_name - computed: true, optional: false, required: false
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptions;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    // awskms_key_arn - computed: true, optional: false, required: false
    get awskmsKeyArn() {
        return this.getStringAttribute('awskms_key_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfig;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        awskms_key_arn: cdktf.stringToTerraform(struct.awskmsKeyArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration extends cdktf.ComplexComputedList {
    // kms_encryption_config - computed: true, optional: false, required: false
    get kmsEncryptionConfig() {
        return this.interpolationForAttribute('kms_encryption_config');
    }
    // no_encryption_config - computed: true, optional: false, required: false
    get noEncryptionConfig() {
        return this.getStringAttribute('no_encryption_config');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_encryption_config: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationKmsEncryptionConfigToTerraform(struct.kmsEncryptionConfig),
        no_encryption_config: cdktf.stringToTerraform(struct.noEncryptionConfig),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration extends cdktf.ComplexComputedList {
    // bucket_arn - computed: true, optional: false, required: false
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    // buffering_hints - computed: true, optional: false, required: false
    get bufferingHints() {
        return this.interpolationForAttribute('buffering_hints');
    }
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // compression_format - computed: true, optional: false, required: false
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    // encryption_configuration - computed: true, optional: false, required: false
    get encryptionConfiguration() {
        return this.interpolationForAttribute('encryption_configuration');
    }
    // error_output_prefix - computed: true, optional: false, required: false
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3Configuration;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffering_hints: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationBufferingHintsToTerraform(struct.bufferingHints),
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        encryption_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationEncryptionConfigurationToTerraform(struct.encryptionConfiguration),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration extends cdktf.ComplexComputedList {
    // cloudwatch_logging_options - computed: true, optional: false, required: false
    get cloudwatchLoggingOptions() {
        return this.interpolationForAttribute('cloudwatch_logging_options');
    }
    // hec_acknowledgment_timeout_in_seconds - computed: true, optional: false, required: false
    get hecAcknowledgmentTimeoutInSeconds() {
        return this.getNumberAttribute('hec_acknowledgment_timeout_in_seconds');
    }
    // hec_endpoint - computed: true, optional: false, required: false
    get hecEndpoint() {
        return this.getStringAttribute('hec_endpoint');
    }
    // hec_endpoint_type - computed: true, optional: false, required: false
    get hecEndpointType() {
        return this.getStringAttribute('hec_endpoint_type');
    }
    // hec_token - computed: true, optional: false, required: false
    get hecToken() {
        return this.getStringAttribute('hec_token');
    }
    // processing_configuration - computed: true, optional: false, required: false
    get processingConfiguration() {
        return this.interpolationForAttribute('processing_configuration');
    }
    // retry_options - computed: true, optional: false, required: false
    get retryOptions() {
        return this.interpolationForAttribute('retry_options');
    }
    // s3_backup_mode - computed: true, optional: false, required: false
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    // s3_configuration - computed: true, optional: false, required: false
    get s3Configuration() {
        return this.interpolationForAttribute('s3_configuration');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration = DataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration;
function dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_logging_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        hec_acknowledgment_timeout_in_seconds: cdktf.numberToTerraform(struct.hecAcknowledgmentTimeoutInSeconds),
        hec_endpoint: cdktf.stringToTerraform(struct.hecEndpoint),
        hec_endpoint_type: cdktf.stringToTerraform(struct.hecEndpointType),
        hec_token: cdktf.stringToTerraform(struct.hecToken),
        processing_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        retry_options: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationRetryOptionsToTerraform(struct.retryOptions),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        s3_configuration: dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationS3ConfigurationToTerraform(struct.s3Configuration),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform = dataAwsccKinesisfirehoseDeliveryStreamSplunkDestinationConfigurationToTerraform;
class DataAwsccKinesisfirehoseDeliveryStreamTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStreamTags = DataAwsccKinesisfirehoseDeliveryStreamTags;
function dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform = dataAwsccKinesisfirehoseDeliveryStreamTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_stream.html awscc_kinesisfirehose_delivery_stream}
*/
class DataAwsccKinesisfirehoseDeliveryStream extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get arn() {
        return this.getStringAttribute('arn');
    }
    // delivery_stream_encryption_configuration_input - computed: true, optional: false, required: false
    get deliveryStreamEncryptionConfigurationInput() {
        return this.interpolationForAttribute('delivery_stream_encryption_configuration_input');
    }
    // delivery_stream_name - computed: true, optional: false, required: false
    get deliveryStreamName() {
        return this.getStringAttribute('delivery_stream_name');
    }
    // delivery_stream_type - computed: true, optional: false, required: false
    get deliveryStreamType() {
        return this.getStringAttribute('delivery_stream_type');
    }
    // elasticsearch_destination_configuration - computed: true, optional: false, required: false
    get elasticsearchDestinationConfiguration() {
        return this.interpolationForAttribute('elasticsearch_destination_configuration');
    }
    // extended_s3_destination_configuration - computed: true, optional: false, required: false
    get extendedS3DestinationConfiguration() {
        return this.interpolationForAttribute('extended_s3_destination_configuration');
    }
    // http_endpoint_destination_configuration - computed: true, optional: false, required: false
    get httpEndpointDestinationConfiguration() {
        return this.interpolationForAttribute('http_endpoint_destination_configuration');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // kinesis_stream_source_configuration - computed: true, optional: false, required: false
    get kinesisStreamSourceConfiguration() {
        return this.interpolationForAttribute('kinesis_stream_source_configuration');
    }
    // redshift_destination_configuration - computed: true, optional: false, required: false
    get redshiftDestinationConfiguration() {
        return this.interpolationForAttribute('redshift_destination_configuration');
    }
    // s3_destination_configuration - computed: true, optional: false, required: false
    get s3DestinationConfiguration() {
        return this.interpolationForAttribute('s3_destination_configuration');
    }
    // splunk_destination_configuration - computed: true, optional: false, required: false
    get splunkDestinationConfiguration() {
        return this.interpolationForAttribute('splunk_destination_configuration');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccKinesisfirehoseDeliveryStream = DataAwsccKinesisfirehoseDeliveryStream;
// =================
// STATIC PROPERTIES
// =================
DataAwsccKinesisfirehoseDeliveryStream.tfResourceType = "awscc_kinesisfirehose_delivery_stream";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1raW5lc2lzZmlyZWhvc2UtZGVsaXZlcnktc3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1raW5lc2lzZmlyZWhvc2UtZGVsaXZlcnktc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RkFBdUY7QUFDdkYsMkNBQTJDOzs7Ozs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsZ0ZBQWlGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3SCw2REFBNkQ7SUFDN0QsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBWEQsNEtBV0M7QUFFRCxTQUFnQiwyRkFBMkYsQ0FBQyxNQUF5RjtJQUNuTSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNoRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7S0FDbkQsQ0FBQTtBQUNILENBQUM7QUFORCxrTUFNQztBQUVELE1BQWEseUZBQTBGLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0SSx5RUFBeUU7SUFDekUsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFj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QUFDLHlCQUF5QixDQUFDLHFDQUFxQyxDQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixJQUFXLGdDQUFnQztRQUN6QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQ0FBb0MsQ0FBUSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsOEJBQThCLENBQVEsQ0FBQztJQUMvRSxDQUFDO0lBRUQsc0ZBQXNGO0lBQ3RGLElBQVcsOEJBQThCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGtDQUFrQyxDQUFRLENBQUM7SUFDbkYsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBckhILHdGQXNIQztBQXBIQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLHFEQUFjLEdBQVcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9raW5lc2lzZmlyZWhvc2VfZGVsaXZlcnlfc3RyZWFtLmh0bWxcbi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbi8vIENvbmZpZ3VyYXRpb25cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tpbmVzaXNmaXJlaG9zZV9kZWxpdmVyeV9zdHJlYW0uaHRtbCNpZCBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbSNpZH1cbiAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbURlbGl2ZXJ5U3RyZWFtRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25JbnB1dCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfYXJuJyk7XG4gIH1cblxuICAvLyBrZXlfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXlfdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbURlbGl2ZXJ5U3RyZWFtRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25JbnB1dFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRGVsaXZlcnlTdHJlYW1FbmNyeXB0aW9uQ29uZmlndXJhdGlvbklucHV0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5QXJuKSxcbiAgICBrZXlfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXlUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsSW5TZWNvbmRzKSxcbiAgICBzaXplX2luX21fYnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluTUJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXJhbWV0ZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfbmFtZScpO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVyc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1ldGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyTmFtZSksXG4gICAgcGFyYW1ldGVyX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlclZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBwcm9jZXNzb3JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc29ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzb3JzJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIHByb2Nlc3NvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzVG9UZXJyYWZvcm0pKHN0cnVjdCEucHJvY2Vzc29ycyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGR1cmF0aW9uX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkdXJhdGlvbkluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2R1cmF0aW9uX2luX3NlY29uZHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZHVyYXRpb25JblNlY29uZHMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGludGVydmFsX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcnZhbEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsX2luX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHNpemVfaW5fbV9icyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpemVJbk1CcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemVfaW5fbV9icycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGludGVydmFsX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxJblNlY29uZHMpLFxuICAgIHNpemVfaW5fbV9iczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplSW5NQnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBsb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19zdHJlYW1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dTdHJlYW1OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXdza21zX2tleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NrbXNfa2V5X2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdza21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdza21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfZW5jcnlwdGlvbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNFbmNyeXB0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ttc19lbmNyeXB0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5vX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9FbmNyeXB0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9fZW5jcnlwdGlvbl9jb25maWcnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfZW5jcnlwdGlvbl9jb25maWc6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zRW5jcnlwdGlvbkNvbmZpZyksXG4gICAgbm9fZW5jcnlwdGlvbl9jb25maWc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm9FbmNyeXB0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0hpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1ZmZlcmluZ19oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb25fZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVycm9yX291dHB1dF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX291dHB1dF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0QXJuKSxcbiAgICBidWZmZXJpbmdfaGludHM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdIaW50cyksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBjb21wcmVzc2lvbl9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25Gb3JtYXQpLFxuICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuY3J5cHRpb25Db25maWd1cmF0aW9uKSxcbiAgICBlcnJvcl9vdXRwdXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmVycm9yT3V0cHV0UHJlZml4KSxcbiAgICBwcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FbGFzdGljc2VhcmNoRGVzdGluYXRpb25Db25maWd1cmF0aW9uVnBjQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzZWN1cml0eV9ncm91cF9pZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkcycpO1xuICB9XG5cbiAgLy8gc3VibmV0X2lkcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblZwY0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHNlY3VyaXR5X2dyb3VwX2lkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zZWN1cml0eUdyb3VwSWRzKSxcbiAgICBzdWJuZXRfaWRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1ZmZlcmluZ19oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0hpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1ZmZlcmluZ19oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY2x1c3Rlcl9lbmRwb2ludCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJFbmRwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NsdXN0ZXJfZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGRvbWFpbl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkb21haW5Bcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkb21haW5fYXJuJyk7XG4gIH1cblxuICAvLyBpbmRleF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaW5kZXhfbmFtZScpO1xuICB9XG5cbiAgLy8gaW5kZXhfcm90YXRpb25fcGVyaW9kIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5kZXhSb3RhdGlvblBlcmlvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2luZGV4X3JvdGF0aW9uX3BlcmlvZCcpO1xuICB9XG5cbiAgLy8gcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc2luZ19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcmV0cnlfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJldHJ5T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXRyeV9vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxuXG4gIC8vIHMzX2JhY2t1cF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYmFja3VwX21vZGUnKTtcbiAgfVxuXG4gIC8vIHMzX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZV9uYW1lJyk7XG4gIH1cblxuICAvLyB2cGNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZwY0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndnBjX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWZmZXJpbmdfaGludHM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdIaW50cyksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBjbHVzdGVyX2VuZHBvaW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsdXN0ZXJFbmRwb2ludCksXG4gICAgZG9tYWluX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kb21haW5Bcm4pLFxuICAgIGluZGV4X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhOYW1lKSxcbiAgICBpbmRleF9yb3RhdGlvbl9wZXJpb2Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW5kZXhSb3RhdGlvblBlcmlvZCksXG4gICAgcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHJldHJ5X29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlPcHRpb25zKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzM19iYWNrdXBfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0JhY2t1cE1vZGUpLFxuICAgIHMzX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRWxhc3RpY3NlYXJjaERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuczNDb25maWd1cmF0aW9uKSxcbiAgICB0eXBlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudHlwZU5hbWUpLFxuICAgIHZwY19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25WcGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52cGNDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsSW5TZWNvbmRzKSxcbiAgICBzaXplX2luX21fYnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluTUJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyB0aW1lc3RhbXBfZm9ybWF0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWVzdGFtcEZvcm1hdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndGltZXN0YW1wX2Zvcm1hdHMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplckhpdmVKc29uU2VyRGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgdGltZXN0YW1wX2Zvcm1hdHM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEudGltZXN0YW1wRm9ybWF0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2FzZV9pbnNlbnNpdGl2ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhc2VJbnNlbnNpdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjYXNlX2luc2Vuc2l0aXZlJyk7XG4gIH1cblxuICAvLyBjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb2x1bW5Ub0pzb25LZXlNYXBwaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb252ZXJ0X2RvdHNfaW5fanNvbl9rZXlzX3RvX3VuZGVyc2NvcmVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udmVydERvdHNJbkpzb25LZXlzVG9VbmRlcnNjb3JlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdjb252ZXJ0X2RvdHNfaW5fanNvbl9rZXlzX3RvX3VuZGVyc2NvcmVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvbkRlc2VyaWFsaXplck9wZW5YSnNvblNlckRlVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVyT3BlblhKc29uU2VyRGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuY2FzZUluc2Vuc2l0aXZlKSxcbiAgICBjb2x1bW5fdG9fanNvbl9rZXlfbWFwcGluZ3M6IGNka3RmLmhhc2hNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY29sdW1uVG9Kc29uS2V5TWFwcGluZ3MpLFxuICAgIGNvbnZlcnRfZG90c19pbl9qc29uX2tleXNfdG9fdW5kZXJzY29yZXM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnZlcnREb3RzSW5Kc29uS2V5c1RvVW5kZXJzY29yZXMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXIgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBoaXZlX2pzb25fc2VyX2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGl2ZUpzb25TZXJEZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdoaXZlX2pzb25fc2VyX2RlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb3Blbl94X2pzb25fc2VyX2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3BlblhKc29uU2VyRGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3Blbl94X2pzb25fc2VyX2RlJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaGl2ZV9qc29uX3Nlcl9kZTogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uSW5wdXRGb3JtYXRDb25maWd1cmF0aW9uRGVzZXJpYWxpemVySGl2ZUpzb25TZXJEZVRvVGVycmFmb3JtKHN0cnVjdCEuaGl2ZUpzb25TZXJEZSksXG4gICAgb3Blbl94X2pzb25fc2VyX2RlOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJPcGVuWEpzb25TZXJEZVRvVGVycmFmb3JtKHN0cnVjdCEub3BlblhKc29uU2VyRGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkZXNlcmlhbGl6ZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNlcmlhbGl6ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVzZXJpYWxpemVyJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGVzZXJpYWxpemVyOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25JbnB1dEZvcm1hdENvbmZpZ3VyYXRpb25EZXNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc2VyaWFsaXplciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyT3JjU2VyRGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBibG9ja19zaXplX2J5dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmxvY2tTaXplQnl0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdibG9ja19zaXplX2J5dGVzJyk7XG4gIH1cblxuICAvLyBibG9vbV9maWx0ZXJfY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJsb29tRmlsdGVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdibG9vbV9maWx0ZXJfY29sdW1ucycpO1xuICB9XG5cbiAgLy8gYmxvb21fZmlsdGVyX2ZhbHNlX3Bvc2l0aXZlX3Byb2JhYmlsaXR5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdibG9vbV9maWx0ZXJfZmFsc2VfcG9zaXRpdmVfcHJvYmFiaWxpdHknKTtcbiAgfVxuXG4gIC8vIGNvbXByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gZGljdGlvbmFyeV9rZXlfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGljdGlvbmFyeUtleVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RpY3Rpb25hcnlfa2V5X3RocmVzaG9sZCcpO1xuICB9XG5cbiAgLy8gZW5hYmxlX3BhZGRpbmcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVQYWRkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZV9wYWRkaW5nJyk7XG4gIH1cblxuICAvLyBmb3JtYXRfdmVyc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZvcm1hdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmb3JtYXRfdmVyc2lvbicpO1xuICB9XG5cbiAgLy8gcGFkZGluZ190b2xlcmFuY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYWRkaW5nVG9sZXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgncGFkZGluZ190b2xlcmFuY2UnKTtcbiAgfVxuXG4gIC8vIHJvd19pbmRleF9zdHJpZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb3dJbmRleFN0cmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3Jvd19pbmRleF9zdHJpZGUnKTtcbiAgfVxuXG4gIC8vIHN0cmlwZV9zaXplX2J5dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RyaXBlU2l6ZUJ5dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc3RyaXBlX3NpemVfYnl0ZXMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJPcmNTZXJEZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyT3JjU2VyRGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYmxvY2tfc2l6ZV9ieXRlczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5ibG9ja1NpemVCeXRlcyksXG4gICAgYmxvb21fZmlsdGVyX2NvbHVtbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuYmxvb21GaWx0ZXJDb2x1bW5zKSxcbiAgICBibG9vbV9maWx0ZXJfZmFsc2VfcG9zaXRpdmVfcHJvYmFiaWxpdHk6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuYmxvb21GaWx0ZXJGYWxzZVBvc2l0aXZlUHJvYmFiaWxpdHkpLFxuICAgIGNvbXByZXNzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uKSxcbiAgICBkaWN0aW9uYXJ5X2tleV90aHJlc2hvbGQ6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZGljdGlvbmFyeUtleVRocmVzaG9sZCksXG4gICAgZW5hYmxlX3BhZGRpbmc6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZVBhZGRpbmcpLFxuICAgIGZvcm1hdF92ZXJzaW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZvcm1hdFZlcnNpb24pLFxuICAgIHBhZGRpbmdfdG9sZXJhbmNlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhZGRpbmdUb2xlcmFuY2UpLFxuICAgIHJvd19pbmRleF9zdHJpZGU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucm93SW5kZXhTdHJpZGUpLFxuICAgIHN0cmlwZV9zaXplX2J5dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnN0cmlwZVNpemVCeXRlcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyUGFycXVldFNlckRlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYmxvY2tfc2l6ZV9ieXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJsb2NrU2l6ZUJ5dGVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnYmxvY2tfc2l6ZV9ieXRlcycpO1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXByZXNzaW9uJyk7XG4gIH1cblxuICAvLyBlbmFibGVfZGljdGlvbmFyeV9jb21wcmVzc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZGljdGlvbmFyeV9jb21wcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gbWF4X3BhZGRpbmdfYnl0ZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtYXhQYWRkaW5nQnl0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdtYXhfcGFkZGluZ19ieXRlcycpO1xuICB9XG5cbiAgLy8gcGFnZV9zaXplX2J5dGVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFnZVNpemVCeXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3BhZ2Vfc2l6ZV9ieXRlcycpO1xuICB9XG5cbiAgLy8gd3JpdGVyX3ZlcnNpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3cml0ZXJWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd3JpdGVyX3ZlcnNpb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJQYXJxdWV0U2VyRGVUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplclBhcnF1ZXRTZXJEZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBibG9ja19zaXplX2J5dGVzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmJsb2NrU2l6ZUJ5dGVzKSxcbiAgICBjb21wcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbiksXG4gICAgZW5hYmxlX2RpY3Rpb25hcnlfY29tcHJlc3Npb246IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZURpY3Rpb25hcnlDb21wcmVzc2lvbiksXG4gICAgbWF4X3BhZGRpbmdfYnl0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubWF4UGFkZGluZ0J5dGVzKSxcbiAgICBwYWdlX3NpemVfYnl0ZXM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEucGFnZVNpemVCeXRlcyksXG4gICAgd3JpdGVyX3ZlcnNpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEud3JpdGVyVmVyc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb3JjX3Nlcl9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9yY1NlckRlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ29yY19zZXJfZGUnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwYXJxdWV0X3Nlcl9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcnF1ZXRTZXJEZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJxdWV0X3Nlcl9kZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBvcmNfc2VyX2RlOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uU2VyaWFsaXplck9yY1NlckRlVG9UZXJyYWZvcm0oc3RydWN0IS5vcmNTZXJEZSksXG4gICAgcGFycXVldF9zZXJfZGU6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25TZXJpYWxpemVyUGFycXVldFNlckRlVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJxdWV0U2VyRGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25PdXRwdXRGb3JtYXRDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gc2VyaWFsaXplciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcmlhbGl6ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VyaWFsaXplcicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgc2VyaWFsaXplcjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uT3V0cHV0Rm9ybWF0Q29uZmlndXJhdGlvblNlcmlhbGl6ZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcmlhbGl6ZXIpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25TY2hlbWFDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2F0YWxvZ19pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9uYW1lJyk7XG4gIH1cblxuICAvLyByZWdpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWdpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyZWdpb24nKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdmVyc2lvbl9pZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlcnNpb25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZlcnNpb25faWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uU2NoZW1hQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblNjaGVtYUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2F0YWxvZ19pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jYXRhbG9nSWQpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICByZWdpb246IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucmVnaW9uKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0YWJsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhYmxlTmFtZSksXG4gICAgdmVyc2lvbl9pZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZXJzaW9uSWQpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBpbnB1dF9mb3JtYXRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlucHV0Rm9ybWF0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdpbnB1dF9mb3JtYXRfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG91dHB1dF9mb3JtYXRfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnb3V0cHV0X2Zvcm1hdF9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2NoZW1hX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzY2hlbWFDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NjaGVtYV9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgaW5wdXRfZm9ybWF0X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbklucHV0Rm9ybWF0Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuaW5wdXRGb3JtYXRDb25maWd1cmF0aW9uKSxcbiAgICBvdXRwdXRfZm9ybWF0X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvbk91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm91dHB1dEZvcm1hdENvbmZpZ3VyYXRpb24pLFxuICAgIHNjaGVtYV9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25EYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb25TY2hlbWFDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlbWFDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXdza21zX2tleV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhd3NrbXNLZXlBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhd3NrbXNfa2V5X2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdza21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdza21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrbXNfZW5jcnlwdGlvbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrbXNFbmNyeXB0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ttc19lbmNyeXB0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIG5vX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbm9FbmNyeXB0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbm9fZW5jcnlwdGlvbl9jb25maWcnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfZW5jcnlwdGlvbl9jb25maWc6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEua21zRW5jcnlwdGlvbkNvbmZpZyksXG4gICAgbm9fZW5jcnlwdGlvbl9jb25maWc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubm9FbmNyeXB0aW9uQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhcmFtZXRlcl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcmFtZXRlcl9uYW1lJyk7XG4gIH1cblxuICAvLyBwYXJhbWV0ZXJfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcmFtZXRlcl92YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJOYW1lKSxcbiAgICBwYXJhbWV0ZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJhbWV0ZXJzKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NvcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2Nlc3NvcnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgcHJvY2Vzc29yczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzb3JzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsSW5TZWNvbmRzKSxcbiAgICBzaXplX2luX21fYnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluTUJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdza21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdza21zX2tleV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF3c2ttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c2ttc0tleUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbXNfZW5jcnlwdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2VuY3J5cHRpb25fY29uZmlnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1FeHRlbmRlZFMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga21zX2VuY3J5cHRpb25fY29uZmlnOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0VuY3J5cHRpb25Db25maWcpLFxuICAgIG5vX2VuY3J5cHRpb25fY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cblxuICAvLyBidWZmZXJpbmdfaGludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWZmZXJpbmdIaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdidWZmZXJpbmdfaGludHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXByZXNzaW9uX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmNyeXB0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlcnJvcl9vdXRwdXRfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JPdXRwdXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdlcnJvcl9vdXRwdXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBwcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdCEuYnVmZmVyaW5nSGludHMpLFxuICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyksXG4gICAgY29tcHJlc3Npb25fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uRm9ybWF0KSxcbiAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfYXJuJyk7XG4gIH1cblxuICAvLyBidWZmZXJpbmdfaGludHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWZmZXJpbmdIaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdidWZmZXJpbmdfaGludHMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNvbXByZXNzaW9uX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbXByZXNzaW9uRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29tcHJlc3Npb25fZm9ybWF0Jyk7XG4gIH1cblxuICAvLyBkYXRhX2Zvcm1hdF9jb252ZXJzaW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhRm9ybWF0Q29udmVyc2lvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YV9mb3JtYXRfY29udmVyc2lvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXJyb3Jfb3V0cHV0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9yT3V0cHV0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXJyb3Jfb3V0cHV0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gczNfYmFja3VwX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0JhY2t1cENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfYmFja3VwX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19iYWNrdXBfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2JhY2t1cF9tb2RlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdCEuYnVmZmVyaW5nSGludHMpLFxuICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyksXG4gICAgY29tcHJlc3Npb25fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uRm9ybWF0KSxcbiAgICBkYXRhX2Zvcm1hdF9jb252ZXJzaW9uX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkRhdGFGb3JtYXRDb252ZXJzaW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZGF0YUZvcm1hdENvbnZlcnNpb25Db25maWd1cmF0aW9uKSxcbiAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtRXh0ZW5kZWRTM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcHJvY2Vzc2luZ19jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEucHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICAgIHMzX2JhY2t1cF9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQmFja3VwQ29uZmlndXJhdGlvbiksXG4gICAgczNfYmFja3VwX21vZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBNb2RlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGludGVydmFsX2luX3NlY29uZHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpbnRlcnZhbEluU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2ludGVydmFsX2luX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIHNpemVfaW5fbV9icyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpemVJbk1CcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NpemVfaW5fbV9icycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsSW5TZWNvbmRzKSxcbiAgICBzaXplX2luX21fYnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluTUJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlbmFibGVkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVkJyk7XG4gIH1cblxuICAvLyBsb2dfZ3JvdXBfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ0dyb3VwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19ncm91cF9uYW1lJyk7XG4gIH1cblxuICAvLyBsb2dfc3RyZWFtX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX3N0cmVhbV9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uRW5kcG9pbnRDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWNjZXNzX2tleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFjY2Vzc0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FjY2Vzc19rZXknKTtcbiAgfVxuXG4gIC8vIG5hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgLy8gdXJsIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndXJsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uRW5kcG9pbnRDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmRwb2ludENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWNjZXNzX2tleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hY2Nlc3NLZXkpLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgdXJsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnVybCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHBhcmFtZXRlcl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcmFtZXRlcl9uYW1lJyk7XG4gIH1cblxuICAvLyBwYXJhbWV0ZXJfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwYXJhbWV0ZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3BhcmFtZXRlcl92YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1ldGVyX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyTmFtZSksXG4gICAgcGFyYW1ldGVyX3ZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlclZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXJhbWV0ZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwYXJhbWV0ZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1ldGVyczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wYXJhbWV0ZXJzKSxcbiAgICB0eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2Nlc3NvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgcHJvY2Vzc29yczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NvcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF0dHJpYnV0ZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXR0cmlidXRlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F0dHJpYnV0ZV9uYW1lJyk7XG4gIH1cblxuICAvLyBhdHRyaWJ1dGVfdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F0dHJpYnV0ZV92YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25Db21tb25BdHRyaWJ1dGVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF0dHJpYnV0ZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF0dHJpYnV0ZU5hbWUpLFxuICAgIGF0dHJpYnV0ZV92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hdHRyaWJ1dGVWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjb21tb25fYXR0cmlidXRlcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbW1vbkF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY29tbW9uX2F0dHJpYnV0ZXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb250ZW50X2VuY29kaW5nIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29udGVudEVuY29kaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29udGVudF9lbmNvZGluZycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25SZXF1ZXN0Q29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21tb25fYXR0cmlidXRlczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJlcXVlc3RDb25maWd1cmF0aW9uQ29tbW9uQXR0cmlidXRlc1RvVGVycmFmb3JtKShzdHJ1Y3QhLmNvbW1vbkF0dHJpYnV0ZXMpLFxuICAgIGNvbnRlbnRfZW5jb2Rpbmc6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29udGVudEVuY29kaW5nKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25SZXRyeU9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkdXJhdGlvbl9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZHVyYXRpb25JblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkdXJhdGlvbl9pbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25SZXRyeU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZHVyYXRpb25faW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kdXJhdGlvbkluU2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbEluU2Vjb25kcyksXG4gICAgc2l6ZV9pbl9tX2JzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemVJbk1CcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdza21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdza21zX2tleV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhd3NrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hd3NrbXNLZXlBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbXNfZW5jcnlwdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2VuY3J5cHRpb25fY29uZmlnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19lbmNyeXB0aW9uX2NvbmZpZzogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0VuY3J5cHRpb25Db25maWcpLFxuICAgIG5vX2VuY3J5cHRpb25fY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0hpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1ZmZlcmluZ19oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb25fZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVycm9yX291dHB1dF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX291dHB1dF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdIaW50cyksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIGNvbXByZXNzaW9uX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbkZvcm1hdCksXG4gICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVmZmVyaW5nX2hpbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nSGludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYnVmZmVyaW5nX2hpbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBlbmRwb2ludF9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5kcG9pbnRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuZHBvaW50X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXF1ZXN0X2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXF1ZXN0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZXF1ZXN0X2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXRyeV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmV0cnlPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JldHJ5X29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gczNfYmFja3VwX21vZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0JhY2t1cE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzM19iYWNrdXBfbW9kZScpO1xuICB9XG5cbiAgLy8gczNfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1ZmZlcmluZ19oaW50czogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1IdHRwRW5kcG9pbnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdCEuYnVmZmVyaW5nSGludHMpLFxuICAgIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBlbmRwb2ludF9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuZHBvaW50Q29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5kcG9pbnRDb25maWd1cmF0aW9uKSxcbiAgICBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgICByZXF1ZXN0X2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmVxdWVzdENvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnJlcXVlc3RDb25maWd1cmF0aW9uKSxcbiAgICByZXRyeV9vcHRpb25zOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlPcHRpb25zKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzM19iYWNrdXBfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0JhY2t1cE1vZGUpLFxuICAgIHMzX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtSHR0cEVuZHBvaW50RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUtpbmVzaXNTdHJlYW1Tb3VyY2VDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2luZXNpc19zdHJlYW1fYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2luZXNpc1N0cmVhbUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tpbmVzaXNfc3RyZWFtX2FybicpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1LaW5lc2lzU3RyZWFtU291cmNlQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtS2luZXNpc1N0cmVhbVNvdXJjZUNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2luZXNpc19zdHJlYW1fYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtpbmVzaXNTdHJlYW1Bcm4pLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19zdHJlYW1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dTdHJlYW1OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNvcHlDb21tYW5kIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29weV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29weU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3B5X29wdGlvbnMnKTtcbiAgfVxuXG4gIC8vIGRhdGFfdGFibGVfY29sdW1ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFUYWJsZUNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3RhYmxlX2NvbHVtbnMnKTtcbiAgfVxuXG4gIC8vIGRhdGFfdGFibGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFUYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhX3RhYmxlX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNvcHlDb21tYW5kVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNvcHlDb21tYW5kKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvcHlfb3B0aW9uczogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb3B5T3B0aW9ucyksXG4gICAgZGF0YV90YWJsZV9jb2x1bW5zOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFUYWJsZUNvbHVtbnMpLFxuICAgIGRhdGFfdGFibGVfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhVGFibGVOYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXJhbWV0ZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfbmFtZScpO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzUGFyYW1ldGVycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJOYW1lKSxcbiAgICBwYXJhbWV0ZXJfdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFyYW1ldGVyVmFsdWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29ycyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbWV0ZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gcHJvY2Vzc29ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2Nlc3NvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJvY2Vzc29ycycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIHByb2Nlc3NvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKShzdHJ1Y3QhLnByb2Nlc3NvcnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZHVyYXRpb25faW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnZHVyYXRpb25faW5fc2Vjb25kcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkdXJhdGlvbl9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmR1cmF0aW9uSW5TZWNvbmRzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gaW50ZXJ2YWxfaW5fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVydmFsSW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaW50ZXJ2YWxfaW5fc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gc2l6ZV9pbl9tX2JzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2l6ZUluTUJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2l6ZV9pbl9tX2JzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBpbnRlcnZhbF9pbl9zZWNvbmRzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVydmFsSW5TZWNvbmRzKSxcbiAgICBzaXplX2luX21fYnM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2l6ZUluTUJzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIGxvZ19ncm91cF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nR3JvdXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbG9nX2dyb3VwX25hbWUnKTtcbiAgfVxuXG4gIC8vIGxvZ19zdHJlYW1fbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvZ1N0cmVhbU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfc3RyZWFtX25hbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZW5hYmxlZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZW5hYmxlZCksXG4gICAgbG9nX2dyb3VwX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nR3JvdXBOYW1lKSxcbiAgICBsb2dfc3RyZWFtX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubG9nU3RyZWFtTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhd3NrbXNfa2V5X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGF3c2ttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2F3c2ttc19rZXlfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGF3c2ttc19rZXlfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmF3c2ttc0tleUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGttc19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0VuY3J5cHRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgna21zX2VuY3J5cHRpb25fY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbm9fZW5jcnlwdGlvbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBub0VuY3J5cHRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdub19lbmNyeXB0aW9uX2NvbmZpZycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga21zX2VuY3J5cHRpb25fY29uZmlnOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25LbXNFbmNyeXB0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5rbXNFbmNyeXB0aW9uQ29uZmlnKSxcbiAgICBub19lbmNyeXB0aW9uX2NvbmZpZzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5ub0VuY3J5cHRpb25Db25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNCYWNrdXBDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0hpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1ZmZlcmluZ19oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb25fZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVycm9yX291dHB1dF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX291dHB1dF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRBcm4pLFxuICAgIGJ1ZmZlcmluZ19oaW50czogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdIaW50cyksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25DbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnNUb1RlcnJhZm9ybShzdHJ1Y3QhLmNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyksXG4gICAgY29tcHJlc3Npb25fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXByZXNzaW9uRm9ybWF0KSxcbiAgICBlbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0JhY2t1cENvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24pLFxuICAgIGVycm9yX291dHB1dF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JPdXRwdXRQcmVmaXgpLFxuICAgIHByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXgpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGludGVydmFsX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxJblNlY29uZHMpLFxuICAgIHNpemVfaW5fbV9iczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplSW5NQnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19zdHJlYW1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dTdHJlYW1OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdza21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdza21zX2tleV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdza21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdza21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbXNfZW5jcnlwdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2VuY3J5cHRpb25fY29uZmlnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfZW5jcnlwdGlvbl9jb25maWc6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0VuY3J5cHRpb25Db25maWcpLFxuICAgIG5vX2VuY3J5cHRpb25fY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2FybicpO1xuICB9XG5cbiAgLy8gYnVmZmVyaW5nX2hpbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nSGludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYnVmZmVyaW5nX2hpbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbl9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wcmVzc2lvbkZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXByZXNzaW9uX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXJyb3Jfb3V0cHV0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9yT3V0cHV0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXJyb3Jfb3V0cHV0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlcmluZ0hpbnRzKSxcbiAgICBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9uczogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBjb21wcmVzc2lvbl9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25Gb3JtYXQpLFxuICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsdXN0ZXJfamRiY3VybCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsdXN0ZXJKZGJjdXJsKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2x1c3Rlcl9qZGJjdXJsJyk7XG4gIH1cblxuICAvLyBjb3B5X2NvbW1hbmQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb3B5Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjb3B5X2NvbW1hbmQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBwYXNzd29yZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByb2Nlc3NpbmdDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2Nlc3NpbmdfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJldHJ5X29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZXRyeU9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmV0cnlfb3B0aW9ucycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzM19iYWNrdXBfY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzQmFja3VwQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19iYWNrdXBfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHMzX2JhY2t1cF9tb2RlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNCYWNrdXBNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczNfYmFja3VwX21vZGUnKTtcbiAgfVxuXG4gIC8vIHMzX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM0NvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnczNfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHVzZXJuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdXNlcm5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd1c2VybmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVJlZHNoaWZ0RGVzdGluYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9uczogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBjbHVzdGVyX2pkYmN1cmw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2x1c3RlckpkYmN1cmwpLFxuICAgIGNvcHlfY29tbWFuZDogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNvcHlDb21tYW5kVG9UZXJyYWZvcm0oc3RydWN0IS5jb3B5Q29tbWFuZCksXG4gICAgcGFzc3dvcmQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucGFzc3dvcmQpLFxuICAgIHByb2Nlc3NpbmdfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5wcm9jZXNzaW5nQ29uZmlndXJhdGlvbiksXG4gICAgcmV0cnlfb3B0aW9uczogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlPcHRpb25zKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICBzM19iYWNrdXBfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1SZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQmFja3VwQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEuczNCYWNrdXBDb25maWd1cmF0aW9uKSxcbiAgICBzM19iYWNrdXBfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0JhY2t1cE1vZGUpLFxuICAgIHMzX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUmVkc2hpZnREZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnMzQ29uZmlndXJhdGlvbiksXG4gICAgdXNlcm5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudXNlcm5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGludGVydmFsX2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJ2YWxJblNlY29uZHMpLFxuICAgIHNpemVfaW5fbV9iczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5zaXplSW5NQnMpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9ucyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVkOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5lbmFibGVkKSxcbiAgICBsb2dfZ3JvdXBfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dHcm91cE5hbWUpLFxuICAgIGxvZ19zdHJlYW1fbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5sb2dTdHJlYW1OYW1lKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdza21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdza21zX2tleV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYXdza21zX2tleV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYXdza21zS2V5QXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbXNfZW5jcnlwdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2VuY3J5cHRpb25fY29uZmlnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrbXNfZW5jcnlwdGlvbl9jb25maWc6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0VuY3J5cHRpb25Db25maWcpLFxuICAgIG5vX2VuY3J5cHRpb25fY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X2FybicpO1xuICB9XG5cbiAgLy8gYnVmZmVyaW5nX2hpbnRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVmZmVyaW5nSGludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYnVmZmVyaW5nX2hpbnRzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjb21wcmVzc2lvbl9mb3JtYXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wcmVzc2lvbkZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbXByZXNzaW9uX2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZW5jcnlwdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXJyb3Jfb3V0cHV0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9yT3V0cHV0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZXJyb3Jfb3V0cHV0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uQnVmZmVyaW5nSGludHNUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1ZmZlcmluZ0hpbnRzKSxcbiAgICBjbG91ZHdhdGNoX2xvZ2dpbmdfb3B0aW9uczogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEuY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKSxcbiAgICBjb21wcmVzc2lvbl9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29tcHJlc3Npb25Gb3JtYXQpLFxuICAgIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbjogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TM0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1BhcmFtZXRlcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwYXJhbWV0ZXJfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlck5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfbmFtZScpO1xuICB9XG5cbiAgLy8gcGFyYW1ldGVyX3ZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcGFyYW1ldGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdwYXJhbWV0ZXJfdmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnBhcmFtZXRlck5hbWUpLFxuICAgIHBhcmFtZXRlcl92YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wYXJhbWV0ZXJWYWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcGFyYW1ldGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncGFyYW1ldGVycycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHR5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uUHJvY2Vzc29yc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Qcm9jZXNzb3JzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtZXRlcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNQYXJhbWV0ZXJzVG9UZXJyYWZvcm0pKHN0cnVjdCEucGFyYW1ldGVycyksXG4gICAgdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50eXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2VuYWJsZWQnKTtcbiAgfVxuXG4gIC8vIHByb2Nlc3NvcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzb3JzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Byb2Nlc3NvcnMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblByb2Nlc3NpbmdDb25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIHByb2Nlc3NvcnM6IGNka3RmLmxpc3RNYXBwZXIoZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25Qcm9jZXNzaW5nQ29uZmlndXJhdGlvblByb2Nlc3NvcnNUb1RlcnJhZm9ybSkoc3RydWN0IS5wcm9jZXNzb3JzKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25SZXRyeU9wdGlvbnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkdXJhdGlvbl9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZHVyYXRpb25JblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdkdXJhdGlvbl9pbl9zZWNvbmRzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUmV0cnlPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25SZXRyeU9wdGlvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZHVyYXRpb25faW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5kdXJhdGlvbkluU2Vjb25kcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBpbnRlcnZhbF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWxJblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdpbnRlcnZhbF9pbl9zZWNvbmRzJyk7XG4gIH1cblxuICAvLyBzaXplX2luX21fYnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzaXplSW5NQnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdzaXplX2luX21fYnMnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25CdWZmZXJpbmdIaW50c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQnVmZmVyaW5nSGludHMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgaW50ZXJ2YWxfaW5fc2Vjb25kczogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5pbnRlcnZhbEluU2Vjb25kcyksXG4gICAgc2l6ZV9pbl9tX2JzOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpemVJbk1CcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZW5hYmxlZCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZW5hYmxlZCcpO1xuICB9XG5cbiAgLy8gbG9nX2dyb3VwX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBsb2dHcm91cE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdsb2dfZ3JvdXBfbmFtZScpO1xuICB9XG5cbiAgLy8gbG9nX3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbG9nU3RyZWFtTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2xvZ19zdHJlYW1fbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkNsb3Vkd2F0Y2hMb2dnaW5nT3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGVuYWJsZWQ6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZWQpLFxuICAgIGxvZ19ncm91cF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ0dyb3VwTmFtZSksXG4gICAgbG9nX3N0cmVhbV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmxvZ1N0cmVhbU5hbWUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGF3c2ttc19rZXlfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXdza21zS2V5QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYXdza21zX2tleV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uS21zRW5jcnlwdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhd3NrbXNfa2V5X2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hd3NrbXNLZXlBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga21zX2VuY3J5cHRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga21zRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdrbXNfZW5jcnlwdGlvbl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBub19lbmNyeXB0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5vRW5jcnlwdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25vX2VuY3J5cHRpb25fY29uZmlnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uRW5jcnlwdGlvbkNvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGttc19lbmNyeXB0aW9uX2NvbmZpZzogZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25FbmNyeXB0aW9uQ29uZmlndXJhdGlvbkttc0VuY3J5cHRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmttc0VuY3J5cHRpb25Db25maWcpLFxuICAgIG5vX2VuY3J5cHRpb25fY29uZmlnOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm5vRW5jcnlwdGlvbkNvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9hcm4nKTtcbiAgfVxuXG4gIC8vIGJ1ZmZlcmluZ19oaW50cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1ZmZlcmluZ0hpbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2J1ZmZlcmluZ19oaW50cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGNsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nsb3Vkd2F0Y2hfbG9nZ2luZ19vcHRpb25zJykgYXMgYW55O1xuICB9XG5cbiAgLy8gY29tcHJlc3Npb25fZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29tcHJlc3Npb25Gb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wcmVzc2lvbl9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGVuY3J5cHRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuY3J5cHRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2VuY3J5cHRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGVycm9yX291dHB1dF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvck91dHB1dFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Vycm9yX291dHB1dF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIHByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb25TM0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldEFybiksXG4gICAgYnVmZmVyaW5nX2hpbnRzOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkJ1ZmZlcmluZ0hpbnRzVG9UZXJyYWZvcm0oc3RydWN0IS5idWZmZXJpbmdIaW50cyksXG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIGNvbXByZXNzaW9uX2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb21wcmVzc2lvbkZvcm1hdCksXG4gICAgZW5jcnlwdGlvbl9jb25maWd1cmF0aW9uOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblMzQ29uZmlndXJhdGlvbkVuY3J5cHRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5lbmNyeXB0aW9uQ29uZmlndXJhdGlvbiksXG4gICAgZXJyb3Jfb3V0cHV0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvck91dHB1dFByZWZpeCksXG4gICAgcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoZWNfYWNrbm93bGVkZ21lbnRfdGltZW91dF9pbl9zZWNvbmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0SW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnaGVjX2Fja25vd2xlZGdtZW50X3RpbWVvdXRfaW5fc2Vjb25kcycpO1xuICB9XG5cbiAgLy8gaGVjX2VuZHBvaW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVjRW5kcG9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdoZWNfZW5kcG9pbnQnKTtcbiAgfVxuXG4gIC8vIGhlY19lbmRwb2ludF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGVjRW5kcG9pbnRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVjX2VuZHBvaW50X3R5cGUnKTtcbiAgfVxuXG4gIC8vIGhlY190b2tlbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGhlY1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaGVjX3Rva2VuJyk7XG4gIH1cblxuICAvLyBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcm9jZXNzaW5nQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZXRyeV9vcHRpb25zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmV0cnlPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3JldHJ5X29wdGlvbnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzM19iYWNrdXBfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzQmFja3VwTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3MzX2JhY2t1cF9tb2RlJyk7XG4gIH1cblxuICAvLyBzM19jb25maWd1cmF0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgczNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjS2luZXNpc2ZpcmVob3NlRGVsaXZlcnlTdHJlYW1TcGx1bmtEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2xvdWR3YXRjaF9sb2dnaW5nX29wdGlvbnM6IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uQ2xvdWR3YXRjaExvZ2dpbmdPcHRpb25zVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoTG9nZ2luZ09wdGlvbnMpLFxuICAgIGhlY19hY2tub3dsZWRnbWVudF90aW1lb3V0X2luX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuaGVjQWNrbm93bGVkZ21lbnRUaW1lb3V0SW5TZWNvbmRzKSxcbiAgICBoZWNfZW5kcG9pbnQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaGVjRW5kcG9pbnQpLFxuICAgIGhlY19lbmRwb2ludF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlY0VuZHBvaW50VHlwZSksXG4gICAgaGVjX3Rva2VuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmhlY1Rva2VuKSxcbiAgICBwcm9jZXNzaW5nX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUHJvY2Vzc2luZ0NvbmZpZ3VyYXRpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLnByb2Nlc3NpbmdDb25maWd1cmF0aW9uKSxcbiAgICByZXRyeV9vcHRpb25zOiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvblJldHJ5T3B0aW9uc1RvVGVycmFmb3JtKHN0cnVjdCEucmV0cnlPcHRpb25zKSxcbiAgICBzM19iYWNrdXBfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zM0JhY2t1cE1vZGUpLFxuICAgIHMzX2NvbmZpZ3VyYXRpb246IGRhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtU3BsdW5rRGVzdGluYXRpb25Db25maWd1cmF0aW9uUzNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS5zM0NvbmZpZ3VyYXRpb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVRhZ3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbVRhZ3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAga2V5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmtleSksXG4gICAgdmFsdWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudmFsdWUpLFxuICB9XG59XG5cblxuLyoqXG4qIFJlcHJlc2VudHMgYSB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2Qva2luZXNpc2ZpcmVob3NlX2RlbGl2ZXJ5X3N0cmVhbS5odG1sIGF3c2NjX2tpbmVzaXNmaXJlaG9zZV9kZWxpdmVyeV9zdHJlYW19XG4qL1xuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0tpbmVzaXNmaXJlaG9zZURlbGl2ZXJ5U3RyZWFtIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtRGF0YVNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NjY19raW5lc2lzZmlyZWhvc2VfZGVsaXZlcnlfc3RyZWFtXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2tpbmVzaXNmaXJlaG9zZV9kZWxpdmVyeV9zdHJlYW0uaHRtbCBhd3NjY19raW5lc2lzZmlyZWhvc2VfZGVsaXZlcnlfc3RyZWFtfSBEYXRhIFNvdXJjZVxuICAqXG4gICogQHBhcmFtIHNjb3BlIFRoZSBzY29wZSBpbiB3aGljaCB0byBkZWZpbmUgdGhpcyBjb25zdHJ1Y3RcbiAgKiBAcGFyYW0gaWQgVGhlIHNjb3BlZCBjb25zdHJ1Y3QgSUQuIE11c3QgYmUgdW5pcXVlIGFtb25nc3Qgc2libGluZ3MgaW4gdGhlIHNhbWUgc2NvcGVcbiAgKiBAcGFyYW0gb3B0aW9ucyBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NLaW5lc2lzZmlyZWhvc2VEZWxpdmVyeVN0cmVhbUNvbmZpZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzY2Nfa2luZXNpc2ZpcmVob3NlX2RlbGl2ZXJ5X3N0cmVhbScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3NjYydcbiAgICAgIH0sXG4gICAgICBwcm92aWRlcjogY29uZmlnLnByb3ZpZGVyLFxuICAgICAgZGVwZW5kc09uOiBjb25maWcuZGVwZW5kc09uLFxuICAgICAgY291bnQ6IGNvbmZpZy5jb3VudCxcbiAgICAgIGxpZmVjeWNsZTogY29uZmlnLmxpZmVjeWNsZVxuICAgIH0pO1xuICAgIHRoaXMuX2lkID0gY29uZmlnLmlkO1xuICB9XG5cbiAgLy8gPT09PT09PT09PVxuICAvLyBBVFRSSUJVVEVTXG4gIC8vID09PT09PT09PT1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3N0cmVhbV9lbmNyeXB0aW9uX2NvbmZpZ3VyYXRpb25faW5wdXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZWxpdmVyeVN0cmVhbUVuY3J5cHRpb25Db25maWd1cmF0aW9uSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGVsaXZlcnlfc3RyZWFtX2VuY3J5cHRpb25fY29uZmlndXJhdGlvbl9pbnB1dCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3N0cmVhbV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdHJlYW1OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfc3RyZWFtX25hbWUnKTtcbiAgfVxuXG4gIC8vIGRlbGl2ZXJ5X3N0cmVhbV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaXZlcnlTdHJlYW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaXZlcnlfc3RyZWFtX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGVsYXN0aWNzZWFyY2hfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVsYXN0aWNzZWFyY2hEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZWxhc3RpY3NlYXJjaF9kZXN0aW5hdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZXh0ZW5kZWRfczNfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV4dGVuZGVkUzNEZXN0aW5hdGlvbkNvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXh0ZW5kZWRfczNfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGh0dHBfZW5kcG9pbnRfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGh0dHBFbmRwb2ludERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdodHRwX2VuZHBvaW50X2Rlc3RpbmF0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8ga2luZXNpc19zdHJlYW1fc291cmNlX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBraW5lc2lzU3RyZWFtU291cmNlQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdraW5lc2lzX3N0cmVhbV9zb3VyY2VfY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0X2Rlc3RpbmF0aW9uX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWRzaGlmdERlc3RpbmF0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWRzaGlmdF9kZXN0aW5hdGlvbl9jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG5cbiAgLy8gczNfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzRGVzdGluYXRpb25Db25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX2Rlc3RpbmF0aW9uX2NvbmZpZ3VyYXRpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzcGx1bmtfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNwbHVua0Rlc3RpbmF0aW9uQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzcGx1bmtfZGVzdGluYXRpb25fY29uZmlndXJhdGlvbicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0YWdzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RhZ3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19