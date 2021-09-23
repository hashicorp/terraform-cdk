"use strict";
// https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude = exports.dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigList = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge = exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform = exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig = void 0;
exports.DataAwsccAppflowFlow = exports.dataAwsccAppflowFlowTriggerConfigToTerraform = exports.DataAwsccAppflowFlowTriggerConfig = exports.dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform = exports.DataAwsccAppflowFlowTriggerConfigTriggerProperties = exports.dataAwsccAppflowFlowTasksToTerraform = exports.DataAwsccAppflowFlowTasks = exports.dataAwsccAppflowFlowTasksTaskPropertiesToTerraform = exports.DataAwsccAppflowFlowTasksTaskProperties = exports.dataAwsccAppflowFlowTasksConnectorOperatorToTerraform = exports.DataAwsccAppflowFlowTasksConnectorOperator = exports.dataAwsccAppflowFlowTagsToTerraform = exports.DataAwsccAppflowFlowTags = exports.dataAwsccAppflowFlowSourceFlowConfigToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfig = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus = exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform = exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics = void 0;
const cdktf = require("cdktf");
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // fail_on_first_error - computed: true, optional: false, required: false
    get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        fail_on_first_error: cdktf.booleanToTerraform(struct.failOnFirstError),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge extends cdktf.ComplexComputedList {
    // error_handling_config - computed: true, optional: false, required: false
    get errorHandlingConfig() {
        return this.interpolationForAttribute('error_handling_config');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridge;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct.errorHandlingConfig),
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetrics;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // fail_on_first_error - computed: true, optional: false, required: false
    get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        fail_on_first_error: cdktf.booleanToTerraform(struct.failOnFirstError),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift extends cdktf.ComplexComputedList {
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // error_handling_config - computed: true, optional: false, required: false
    get errorHandlingConfig() {
        return this.interpolationForAttribute('error_handling_config');
    }
    // intermediate_bucket_name - computed: true, optional: false, required: false
    get intermediateBucketName() {
        return this.getStringAttribute('intermediate_bucket_name');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshift;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct.errorHandlingConfig),
        intermediate_bucket_name: cdktf.stringToTerraform(struct.intermediateBucketName),
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {
    // aggregation_type - computed: true, optional: false, required: false
    get aggregationType() {
        return this.getStringAttribute('aggregation_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aggregation_type: cdktf.stringToTerraform(struct.aggregationType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {
    // prefix_format - computed: true, optional: false, required: false
    get prefixFormat() {
        return this.getStringAttribute('prefix_format');
    }
    // prefix_type - computed: true, optional: false, required: false
    get prefixType() {
        return this.getStringAttribute('prefix_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix_format: cdktf.stringToTerraform(struct.prefixFormat),
        prefix_type: cdktf.stringToTerraform(struct.prefixType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig extends cdktf.ComplexComputedList {
    // aggregation_config - computed: true, optional: false, required: false
    get aggregationConfig() {
        return this.interpolationForAttribute('aggregation_config');
    }
    // file_type - computed: true, optional: false, required: false
    get fileType() {
        return this.getStringAttribute('file_type');
    }
    // prefix_config - computed: true, optional: false, required: false
    get prefixConfig() {
        return this.interpolationForAttribute('prefix_config');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aggregation_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct.aggregationConfig),
        file_type: cdktf.stringToTerraform(struct.fileType),
        prefix_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct.prefixConfig),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // s3_output_format_config - computed: true, optional: false, required: false
    get s3OutputFormatConfig() {
        return this.interpolationForAttribute('s3_output_format_config');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3 = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        s3_output_format_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct.s3OutputFormatConfig),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // fail_on_first_error - computed: true, optional: false, required: false
    get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        fail_on_first_error: cdktf.booleanToTerraform(struct.failOnFirstError),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    // error_handling_config - computed: true, optional: false, required: false
    get errorHandlingConfig() {
        return this.interpolationForAttribute('error_handling_config');
    }
    // id_field_names - computed: true, optional: false, required: false
    get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
    // write_operation_type - computed: true, optional: false, required: false
    get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforce;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct.errorHandlingConfig),
        id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.idFieldNames),
        object: cdktf.stringToTerraform(struct.object),
        write_operation_type: cdktf.stringToTerraform(struct.writeOperationType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // fail_on_first_error - computed: true, optional: false, required: false
    get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        fail_on_first_error: cdktf.booleanToTerraform(struct.failOnFirstError),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake extends cdktf.ComplexComputedList {
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // error_handling_config - computed: true, optional: false, required: false
    get errorHandlingConfig() {
        return this.interpolationForAttribute('error_handling_config');
    }
    // intermediate_bucket_name - computed: true, optional: false, required: false
    get intermediateBucketName() {
        return this.getStringAttribute('intermediate_bucket_name');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflake;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct.errorHandlingConfig),
        intermediate_bucket_name: cdktf.stringToTerraform(struct.intermediateBucketName),
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig extends cdktf.ComplexComputedList {
    // aggregation_type - computed: true, optional: false, required: false
    get aggregationType() {
        return this.getStringAttribute('aggregation_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aggregation_type: cdktf.stringToTerraform(struct.aggregationType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig extends cdktf.ComplexComputedList {
    // prefix_format - computed: true, optional: false, required: false
    get prefixFormat() {
        return this.getStringAttribute('prefix_format');
    }
    // prefix_type - computed: true, optional: false, required: false
    get prefixType() {
        return this.getStringAttribute('prefix_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        prefix_format: cdktf.stringToTerraform(struct.prefixFormat),
        prefix_type: cdktf.stringToTerraform(struct.prefixType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig extends cdktf.ComplexComputedList {
    // aggregation_config - computed: true, optional: false, required: false
    get aggregationConfig() {
        return this.interpolationForAttribute('aggregation_config');
    }
    // file_type - computed: true, optional: false, required: false
    get fileType() {
        return this.getStringAttribute('file_type');
    }
    // prefix_config - computed: true, optional: false, required: false
    get prefixConfig() {
        return this.interpolationForAttribute('prefix_config');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aggregation_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct.aggregationConfig),
        file_type: cdktf.stringToTerraform(struct.fileType),
        prefix_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct.prefixConfig),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // s3_output_format_config - computed: true, optional: false, required: false
    get s3OutputFormatConfig() {
        return this.interpolationForAttribute('s3_output_format_config');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolver;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        s3_output_format_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct.s3OutputFormatConfig),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    // fail_on_first_error - computed: true, optional: false, required: false
    get failOnFirstError() {
        return this.getBooleanAttribute('fail_on_first_error');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfig;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        fail_on_first_error: cdktf.booleanToTerraform(struct.failOnFirstError),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    // error_handling_config - computed: true, optional: false, required: false
    get errorHandlingConfig() {
        return this.interpolationForAttribute('error_handling_config');
    }
    // id_field_names - computed: true, optional: false, required: false
    get idFieldNames() {
        return this.getListAttribute('id_field_names');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
    // write_operation_type - computed: true, optional: false, required: false
    get writeOperationType() {
        return this.getStringAttribute('write_operation_type');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendesk;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        error_handling_config: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct.errorHandlingConfig),
        id_field_names: cdktf.listMapper(cdktf.stringToTerraform)(struct.idFieldNames),
        object: cdktf.stringToTerraform(struct.object),
        write_operation_type: cdktf.stringToTerraform(struct.writeOperationType),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties extends cdktf.ComplexComputedList {
    // event_bridge - computed: true, optional: false, required: false
    get eventBridge() {
        return this.interpolationForAttribute('event_bridge');
    }
    // lookout_metrics - computed: true, optional: false, required: false
    get lookoutMetrics() {
        return this.interpolationForAttribute('lookout_metrics');
    }
    // redshift - computed: true, optional: false, required: false
    get redshift() {
        return this.interpolationForAttribute('redshift');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.interpolationForAttribute('s3');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.interpolationForAttribute('salesforce');
    }
    // snowflake - computed: true, optional: false, required: false
    get snowflake() {
        return this.interpolationForAttribute('snowflake');
    }
    // upsolver - computed: true, optional: false, required: false
    get upsolver() {
        return this.interpolationForAttribute('upsolver');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.interpolationForAttribute('zendesk');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties = DataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorProperties;
function dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        event_bridge: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesEventBridgeToTerraform(struct.eventBridge),
        lookout_metrics: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesLookoutMetricsToTerraform(struct.lookoutMetrics),
        redshift: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesRedshiftToTerraform(struct.redshift),
        s3: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesS3ToTerraform(struct.s3),
        salesforce: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSalesforceToTerraform(struct.salesforce),
        snowflake: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesSnowflakeToTerraform(struct.snowflake),
        upsolver: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesUpsolverToTerraform(struct.upsolver),
        zendesk: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesZendeskToTerraform(struct.zendesk),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform;
class DataAwsccAppflowFlowDestinationFlowConfigList extends cdktf.ComplexComputedList {
    // connector_profile_name - computed: true, optional: false, required: false
    get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    // connector_type - computed: true, optional: false, required: false
    get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    // destination_connector_properties - computed: true, optional: false, required: false
    get destinationConnectorProperties() {
        return this.interpolationForAttribute('destination_connector_properties');
    }
}
exports.DataAwsccAppflowFlowDestinationFlowConfigList = DataAwsccAppflowFlowDestinationFlowConfigList;
function dataAwsccAppflowFlowDestinationFlowConfigListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_profile_name: cdktf.stringToTerraform(struct.connectorProfileName),
        connector_type: cdktf.stringToTerraform(struct.connectorType),
        destination_connector_properties: dataAwsccAppflowFlowDestinationFlowConfigListDestinationConnectorPropertiesToTerraform(struct.destinationConnectorProperties),
    };
}
exports.dataAwsccAppflowFlowDestinationFlowConfigListToTerraform = dataAwsccAppflowFlowDestinationFlowConfigListToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig extends cdktf.ComplexComputedList {
    // datetime_type_field_name - computed: true, optional: false, required: false
    get datetimeTypeFieldName() {
        return this.getStringAttribute('datetime_type_field_name');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig = DataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfig;
function dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        datetime_type_field_name: cdktf.stringToTerraform(struct.datetimeTypeFieldName),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform = dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 extends cdktf.ComplexComputedList {
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // bucket_prefix - computed: true, optional: false, required: false
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce extends cdktf.ComplexComputedList {
    // enable_dynamic_field_update - computed: true, optional: false, required: false
    get enableDynamicFieldUpdate() {
        return this.getBooleanAttribute('enable_dynamic_field_update');
    }
    // include_deleted_records - computed: true, optional: false, required: false
    get includeDeletedRecords() {
        return this.getBooleanAttribute('include_deleted_records');
    }
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enable_dynamic_field_update: cdktf.booleanToTerraform(struct.enableDynamicFieldUpdate),
        include_deleted_records: cdktf.booleanToTerraform(struct.includeDeletedRecords),
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk extends cdktf.ComplexComputedList {
    // object - computed: true, optional: false, required: false
    get object() {
        return this.getStringAttribute('object');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        object: cdktf.stringToTerraform(struct.object),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform;
class DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties extends cdktf.ComplexComputedList {
    // amplitude - computed: true, optional: false, required: false
    get amplitude() {
        return this.interpolationForAttribute('amplitude');
    }
    // datadog - computed: true, optional: false, required: false
    get datadog() {
        return this.interpolationForAttribute('datadog');
    }
    // dynatrace - computed: true, optional: false, required: false
    get dynatrace() {
        return this.interpolationForAttribute('dynatrace');
    }
    // google_analytics - computed: true, optional: false, required: false
    get googleAnalytics() {
        return this.interpolationForAttribute('google_analytics');
    }
    // infor_nexus - computed: true, optional: false, required: false
    get inforNexus() {
        return this.interpolationForAttribute('infor_nexus');
    }
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.interpolationForAttribute('marketo');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.interpolationForAttribute('s3');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.interpolationForAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.interpolationForAttribute('service_now');
    }
    // singular - computed: true, optional: false, required: false
    get singular() {
        return this.interpolationForAttribute('singular');
    }
    // slack - computed: true, optional: false, required: false
    get slack() {
        return this.interpolationForAttribute('slack');
    }
    // trendmicro - computed: true, optional: false, required: false
    get trendmicro() {
        return this.interpolationForAttribute('trendmicro');
    }
    // veeva - computed: true, optional: false, required: false
    get veeva() {
        return this.interpolationForAttribute('veeva');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.interpolationForAttribute('zendesk');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties = DataAwsccAppflowFlowSourceFlowConfigSourceConnectorProperties;
function dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amplitude: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct.amplitude),
        datadog: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct.datadog),
        dynatrace: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct.dynatrace),
        google_analytics: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct.googleAnalytics),
        infor_nexus: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct.inforNexus),
        marketo: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct.marketo),
        s3: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct.s3),
        salesforce: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct.salesforce),
        service_now: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct.serviceNow),
        singular: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct.singular),
        slack: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct.slack),
        trendmicro: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct.trendmicro),
        veeva: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct.veeva),
        zendesk: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct.zendesk),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform = dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform;
class DataAwsccAppflowFlowSourceFlowConfig extends cdktf.ComplexComputedList {
    // connector_profile_name - computed: true, optional: false, required: false
    get connectorProfileName() {
        return this.getStringAttribute('connector_profile_name');
    }
    // connector_type - computed: true, optional: false, required: false
    get connectorType() {
        return this.getStringAttribute('connector_type');
    }
    // incremental_pull_config - computed: true, optional: false, required: false
    get incrementalPullConfig() {
        return this.interpolationForAttribute('incremental_pull_config');
    }
    // source_connector_properties - computed: true, optional: false, required: false
    get sourceConnectorProperties() {
        return this.interpolationForAttribute('source_connector_properties');
    }
}
exports.DataAwsccAppflowFlowSourceFlowConfig = DataAwsccAppflowFlowSourceFlowConfig;
function dataAwsccAppflowFlowSourceFlowConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_profile_name: cdktf.stringToTerraform(struct.connectorProfileName),
        connector_type: cdktf.stringToTerraform(struct.connectorType),
        incremental_pull_config: dataAwsccAppflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct.incrementalPullConfig),
        source_connector_properties: dataAwsccAppflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct.sourceConnectorProperties),
    };
}
exports.dataAwsccAppflowFlowSourceFlowConfigToTerraform = dataAwsccAppflowFlowSourceFlowConfigToTerraform;
class DataAwsccAppflowFlowTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccAppflowFlowTags = DataAwsccAppflowFlowTags;
function dataAwsccAppflowFlowTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccAppflowFlowTagsToTerraform = dataAwsccAppflowFlowTagsToTerraform;
class DataAwsccAppflowFlowTasksConnectorOperator extends cdktf.ComplexComputedList {
    // amplitude - computed: true, optional: false, required: false
    get amplitude() {
        return this.getStringAttribute('amplitude');
    }
    // datadog - computed: true, optional: false, required: false
    get datadog() {
        return this.getStringAttribute('datadog');
    }
    // dynatrace - computed: true, optional: false, required: false
    get dynatrace() {
        return this.getStringAttribute('dynatrace');
    }
    // google_analytics - computed: true, optional: false, required: false
    get googleAnalytics() {
        return this.getStringAttribute('google_analytics');
    }
    // infor_nexus - computed: true, optional: false, required: false
    get inforNexus() {
        return this.getStringAttribute('infor_nexus');
    }
    // marketo - computed: true, optional: false, required: false
    get marketo() {
        return this.getStringAttribute('marketo');
    }
    // s3 - computed: true, optional: false, required: false
    get s3() {
        return this.getStringAttribute('s3');
    }
    // salesforce - computed: true, optional: false, required: false
    get salesforce() {
        return this.getStringAttribute('salesforce');
    }
    // service_now - computed: true, optional: false, required: false
    get serviceNow() {
        return this.getStringAttribute('service_now');
    }
    // singular - computed: true, optional: false, required: false
    get singular() {
        return this.getStringAttribute('singular');
    }
    // slack - computed: true, optional: false, required: false
    get slack() {
        return this.getStringAttribute('slack');
    }
    // trendmicro - computed: true, optional: false, required: false
    get trendmicro() {
        return this.getStringAttribute('trendmicro');
    }
    // veeva - computed: true, optional: false, required: false
    get veeva() {
        return this.getStringAttribute('veeva');
    }
    // zendesk - computed: true, optional: false, required: false
    get zendesk() {
        return this.getStringAttribute('zendesk');
    }
}
exports.DataAwsccAppflowFlowTasksConnectorOperator = DataAwsccAppflowFlowTasksConnectorOperator;
function dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        amplitude: cdktf.stringToTerraform(struct.amplitude),
        datadog: cdktf.stringToTerraform(struct.datadog),
        dynatrace: cdktf.stringToTerraform(struct.dynatrace),
        google_analytics: cdktf.stringToTerraform(struct.googleAnalytics),
        infor_nexus: cdktf.stringToTerraform(struct.inforNexus),
        marketo: cdktf.stringToTerraform(struct.marketo),
        s3: cdktf.stringToTerraform(struct.s3),
        salesforce: cdktf.stringToTerraform(struct.salesforce),
        service_now: cdktf.stringToTerraform(struct.serviceNow),
        singular: cdktf.stringToTerraform(struct.singular),
        slack: cdktf.stringToTerraform(struct.slack),
        trendmicro: cdktf.stringToTerraform(struct.trendmicro),
        veeva: cdktf.stringToTerraform(struct.veeva),
        zendesk: cdktf.stringToTerraform(struct.zendesk),
    };
}
exports.dataAwsccAppflowFlowTasksConnectorOperatorToTerraform = dataAwsccAppflowFlowTasksConnectorOperatorToTerraform;
class DataAwsccAppflowFlowTasksTaskProperties extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccAppflowFlowTasksTaskProperties = DataAwsccAppflowFlowTasksTaskProperties;
function dataAwsccAppflowFlowTasksTaskPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccAppflowFlowTasksTaskPropertiesToTerraform = dataAwsccAppflowFlowTasksTaskPropertiesToTerraform;
class DataAwsccAppflowFlowTasks extends cdktf.ComplexComputedList {
    // connector_operator - computed: true, optional: false, required: false
    get connectorOperator() {
        return this.interpolationForAttribute('connector_operator');
    }
    // destination_field - computed: true, optional: false, required: false
    get destinationField() {
        return this.getStringAttribute('destination_field');
    }
    // source_fields - computed: true, optional: false, required: false
    get sourceFields() {
        return this.getListAttribute('source_fields');
    }
    // task_properties - computed: true, optional: false, required: false
    get taskProperties() {
        return this.interpolationForAttribute('task_properties');
    }
    // task_type - computed: true, optional: false, required: false
    get taskType() {
        return this.getStringAttribute('task_type');
    }
}
exports.DataAwsccAppflowFlowTasks = DataAwsccAppflowFlowTasks;
function dataAwsccAppflowFlowTasksToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connector_operator: dataAwsccAppflowFlowTasksConnectorOperatorToTerraform(struct.connectorOperator),
        destination_field: cdktf.stringToTerraform(struct.destinationField),
        source_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct.sourceFields),
        task_properties: cdktf.listMapper(dataAwsccAppflowFlowTasksTaskPropertiesToTerraform)(struct.taskProperties),
        task_type: cdktf.stringToTerraform(struct.taskType),
    };
}
exports.dataAwsccAppflowFlowTasksToTerraform = dataAwsccAppflowFlowTasksToTerraform;
class DataAwsccAppflowFlowTriggerConfigTriggerProperties extends cdktf.ComplexComputedList {
    // data_pull_mode - computed: true, optional: false, required: false
    get dataPullMode() {
        return this.getStringAttribute('data_pull_mode');
    }
    // schedule_end_time - computed: true, optional: false, required: false
    get scheduleEndTime() {
        return this.getNumberAttribute('schedule_end_time');
    }
    // schedule_expression - computed: true, optional: false, required: false
    get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    // schedule_start_time - computed: true, optional: false, required: false
    get scheduleStartTime() {
        return this.getNumberAttribute('schedule_start_time');
    }
    // time_zone - computed: true, optional: false, required: false
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
}
exports.DataAwsccAppflowFlowTriggerConfigTriggerProperties = DataAwsccAppflowFlowTriggerConfigTriggerProperties;
function dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        data_pull_mode: cdktf.stringToTerraform(struct.dataPullMode),
        schedule_end_time: cdktf.numberToTerraform(struct.scheduleEndTime),
        schedule_expression: cdktf.stringToTerraform(struct.scheduleExpression),
        schedule_start_time: cdktf.numberToTerraform(struct.scheduleStartTime),
        time_zone: cdktf.stringToTerraform(struct.timeZone),
    };
}
exports.dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform = dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform;
class DataAwsccAppflowFlowTriggerConfig extends cdktf.ComplexComputedList {
    // trigger_properties - computed: true, optional: false, required: false
    get triggerProperties() {
        return this.interpolationForAttribute('trigger_properties');
    }
    // trigger_type - computed: true, optional: false, required: false
    get triggerType() {
        return this.getStringAttribute('trigger_type');
    }
}
exports.DataAwsccAppflowFlowTriggerConfig = DataAwsccAppflowFlowTriggerConfig;
function dataAwsccAppflowFlowTriggerConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        trigger_properties: dataAwsccAppflowFlowTriggerConfigTriggerPropertiesToTerraform(struct.triggerProperties),
        trigger_type: cdktf.stringToTerraform(struct.triggerType),
    };
}
exports.dataAwsccAppflowFlowTriggerConfigToTerraform = dataAwsccAppflowFlowTriggerConfigToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow}
*/
class DataAwsccAppflowFlow extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/appflow_flow.html awscc_appflow_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAppflowFlowConfig
    */
    constructor(scope, id, config) {
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
        this._id = config.id;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // destination_flow_config_list - computed: true, optional: false, required: false
    get destinationFlowConfigList() {
        return this.interpolationForAttribute('destination_flow_config_list');
    }
    // flow_arn - computed: true, optional: false, required: false
    get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    // flow_name - computed: true, optional: false, required: false
    get flowName() {
        return this.getStringAttribute('flow_name');
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
    // kms_arn - computed: true, optional: false, required: false
    get kmsArn() {
        return this.getStringAttribute('kms_arn');
    }
    // source_flow_config - computed: true, optional: false, required: false
    get sourceFlowConfig() {
        return this.interpolationForAttribute('source_flow_config');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // tasks - computed: true, optional: false, required: false
    get tasks() {
        return this.interpolationForAttribute('tasks');
    }
    // trigger_config - computed: true, optional: false, required: false
    get triggerConfig() {
        return this.interpolationForAttribute('trigger_config');
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
exports.DataAwsccAppflowFlow = DataAwsccAppflowFlow;
// =================
// STATIC PROPERTIES
// =================
DataAwsccAppflowFlow.tfResourceType = "awscc_appflow_flow";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1hcHBmbG93LWZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhLWF3c2NjLWFwcGZsb3ctZmxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLDJDQUEyQzs7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSx5R0FBMEcsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRKLGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlFQUF5RTtJQUN6RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQWhCRCw4TkFnQkM7QUFFRCxTQUFnQixvSEFBb0gsQ0FBQyxNQUFrSDtJQUNyUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUQsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztLQUN4RSxDQUFBO0FBQ0gsQ0FBQztBQVBELG9QQU9DO0FBRUQsTUFBYSxzRkFBdUYsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5JLDJFQUEyRTtJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFP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VyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFRLENBQUM7SUFDeEQsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEMsQ0FBQztJQUNKLENBQUM7O0FBdEdILG9EQXVHQztBQXJHQyxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNHLG1DQUFjLEdBQVcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hcHBmbG93X2Zsb3cuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0FwcGZsb3dGbG93Q29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvYXBwZmxvd19mbG93Lmh0bWwjaWQgRGF0YUF3c2NjQXBwZmxvd0Zsb3cjaWR9XG4gICovXG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzRXZlbnRCcmlkZ2VFcnJvckhhbmRsaW5nQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBmYWlsX29uX2ZpcnN0X2Vycm9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmFpbE9uRmlyc3RFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmYWlsX29uX2ZpcnN0X2Vycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0V2ZW50QnJpZGdlRXJyb3JIYW5kbGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0V2ZW50QnJpZGdlRXJyb3JIYW5kbGluZ0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gICAgZmFpbF9vbl9maXJzdF9lcnJvcjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZmFpbE9uRmlyc3RFcnJvciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0V2ZW50QnJpZGdlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZXJyb3JfaGFuZGxpbmdfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXJyb3JIYW5kbGluZ0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdlcnJvcl9oYW5kbGluZ19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzRXZlbnRCcmlkZ2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNFdmVudEJyaWRnZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlcnJvcl9oYW5kbGluZ19jb25maWc6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0V2ZW50QnJpZGdlRXJyb3JIYW5kbGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JIYW5kbGluZ0NvbmZpZyksXG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0xvb2tvdXRNZXRyaWNzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0xvb2tvdXRNZXRyaWNzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzTG9va291dE1ldHJpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1JlZHNoaWZ0RXJyb3JIYW5kbGluZ0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cblxuICAvLyBidWNrZXRfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gZmFpbF9vbl9maXJzdF9lcnJvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZhaWxPbkZpcnN0RXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmFpbF9vbl9maXJzdF9lcnJvcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNSZWRzaGlmdEVycm9ySGFuZGxpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNSZWRzaGlmdEVycm9ySGFuZGxpbmdDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgYnVja2V0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRQcmVmaXgpLFxuICAgIGZhaWxfb25fZmlyc3RfZXJyb3I6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmZhaWxPbkZpcnN0RXJyb3IpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNSZWRzaGlmdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBlcnJvcl9oYW5kbGluZ19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvckhhbmRsaW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vycm9yX2hhbmRsaW5nX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGludGVybWVkaWF0ZV9idWNrZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGludGVybWVkaWF0ZUJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbnRlcm1lZGlhdGVfYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNSZWRzaGlmdFRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1JlZHNoaWZ0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBlcnJvcl9oYW5kbGluZ19jb25maWc6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1JlZHNoaWZ0RXJyb3JIYW5kbGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JIYW5kbGluZ0NvbmZpZyksXG4gICAgaW50ZXJtZWRpYXRlX2J1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmludGVybWVkaWF0ZUJ1Y2tldE5hbWUpLFxuICAgIG9iamVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vYmplY3QpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnQWdncmVnYXRpb25Db25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZ2dyZWdhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWdncmVnYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYWdncmVnYXRpb25fdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnQWdncmVnYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnQWdncmVnYXRpb25Db25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWdncmVnYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZ2dyZWdhdGlvblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnUHJlZml4Q29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcHJlZml4X2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHByZWZpeEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeF9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIHByZWZpeF90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ByZWZpeF90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1MzUzNPdXRwdXRGb3JtYXRDb25maWdQcmVmaXhDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnUHJlZml4Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIHByZWZpeF9mb3JtYXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucHJlZml4Rm9ybWF0KSxcbiAgICBwcmVmaXhfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzUzNTM091dHB1dEZvcm1hdENvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFnZ3JlZ2F0aW9uX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2FnZ3JlZ2F0aW9uX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGZpbGVfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpbGVUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV90eXBlJyk7XG4gIH1cblxuICAvLyBwcmVmaXhfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ByZWZpeF9jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1MzUzNPdXRwdXRGb3JtYXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFnZ3JlZ2F0aW9uX2NvbmZpZzogZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzUzNTM091dHB1dEZvcm1hdENvbmZpZ0FnZ3JlZ2F0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5hZ2dyZWdhdGlvbkNvbmZpZyksXG4gICAgZmlsZV90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmZpbGVUeXBlKSxcbiAgICBwcmVmaXhfY29uZmlnOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTM1MzT3V0cHV0Rm9ybWF0Q29uZmlnUHJlZml4Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTMyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cblxuICAvLyBidWNrZXRfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gczNfb3V0cHV0X2Zvcm1hdF9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzM091dHB1dEZvcm1hdENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzM19vdXRwdXRfZm9ybWF0X2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzUzNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTMyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gICAgczNfb3V0cHV0X2Zvcm1hdF9jb25maWc6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1MzUzNPdXRwdXRGb3JtYXRDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzT3V0cHV0Rm9ybWF0Q29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZUVycm9ySGFuZGxpbmdDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBidWNrZXRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfbmFtZScpO1xuICB9XG5cbiAgLy8gYnVja2V0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIGZhaWxfb25fZmlyc3RfZXJyb3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmYWlsT25GaXJzdEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2ZhaWxfb25fZmlyc3RfZXJyb3InKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZUVycm9ySGFuZGxpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTYWxlc2ZvcmNlRXJyb3JIYW5kbGluZ0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXROYW1lKSxcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gICAgZmFpbF9vbl9maXJzdF9lcnJvcjogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHN0cnVjdCEuZmFpbE9uRmlyc3RFcnJvciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1NhbGVzZm9yY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBlcnJvcl9oYW5kbGluZ19jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBlcnJvckhhbmRsaW5nQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Vycm9yX2hhbmRsaW5nX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGlkX2ZpZWxkX25hbWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaWRGaWVsZE5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2lkX2ZpZWxkX25hbWVzJyk7XG4gIH1cblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxuXG4gIC8vIHdyaXRlX29wZXJhdGlvbl90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgd3JpdGVPcGVyYXRpb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnd3JpdGVfb3BlcmF0aW9uX3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1NhbGVzZm9yY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZXJyb3JfaGFuZGxpbmdfY29uZmlnOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTYWxlc2ZvcmNlRXJyb3JIYW5kbGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuZXJyb3JIYW5kbGluZ0NvbmZpZyksXG4gICAgaWRfZmllbGRfbmFtZXM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuaWRGaWVsZE5hbWVzKSxcbiAgICBvYmplY3Q6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub2JqZWN0KSxcbiAgICB3cml0ZV9vcGVyYXRpb25fdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS53cml0ZU9wZXJhdGlvblR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTbm93Zmxha2VFcnJvckhhbmRsaW5nQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBmYWlsX29uX2ZpcnN0X2Vycm9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmFpbE9uRmlyc3RFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdmYWlsX29uX2ZpcnN0X2Vycm9yJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Nub3dmbGFrZUVycm9ySGFuZGxpbmdDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTbm93Zmxha2VFcnJvckhhbmRsaW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBmYWlsX29uX2ZpcnN0X2Vycm9yOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5mYWlsT25GaXJzdEVycm9yKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzU25vd2ZsYWtlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X3ByZWZpeCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJ1Y2tldFByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9wcmVmaXgnKTtcbiAgfVxuXG4gIC8vIGVycm9yX2hhbmRsaW5nX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9ySGFuZGxpbmdDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JfaGFuZGxpbmdfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaW50ZXJtZWRpYXRlX2J1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW50ZXJtZWRpYXRlQnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ludGVybWVkaWF0ZV9idWNrZXRfbmFtZScpO1xuICB9XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Nub3dmbGFrZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Nub3dmbGFrZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBidWNrZXRfcHJlZml4OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldFByZWZpeCksXG4gICAgZXJyb3JfaGFuZGxpbmdfY29uZmlnOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTbm93Zmxha2VFcnJvckhhbmRsaW5nQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvckhhbmRsaW5nQ29uZmlnKSxcbiAgICBpbnRlcm1lZGlhdGVfYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuaW50ZXJtZWRpYXRlQnVja2V0TmFtZSksXG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdBZ2dyZWdhdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFnZ3JlZ2F0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZ2dyZWdhdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZ2dyZWdhdGlvbl90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdBZ2dyZWdhdGlvbkNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdBZ2dyZWdhdGlvbkNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZ2dyZWdhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFnZ3JlZ2F0aW9uVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdQcmVmaXhDb25maWcgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBwcmVmaXhfZm9ybWF0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcHJlZml4Rm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4X2Zvcm1hdCcpO1xuICB9XG5cbiAgLy8gcHJlZml4X3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXhUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncHJlZml4X3R5cGUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzVXBzb2x2ZXJTM091dHB1dEZvcm1hdENvbmZpZ1ByZWZpeENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdQcmVmaXhDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcHJlZml4X2Zvcm1hdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmVmaXhGb3JtYXQpLFxuICAgIHByZWZpeF90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeFR5cGUpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNVcHNvbHZlclMzT3V0cHV0Rm9ybWF0Q29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYWdncmVnYXRpb25fY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYWdncmVnYXRpb25Db25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWdncmVnYXRpb25fY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZmlsZV90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmlsZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdmaWxlX3R5cGUnKTtcbiAgfVxuXG4gIC8vIHByZWZpeF9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwcmVmaXhDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncHJlZml4X2NvbmZpZycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzVXBzb2x2ZXJTM091dHB1dEZvcm1hdENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYWdncmVnYXRpb25fY29uZmlnOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNVcHNvbHZlclMzT3V0cHV0Rm9ybWF0Q29uZmlnQWdncmVnYXRpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFnZ3JlZ2F0aW9uQ29uZmlnKSxcbiAgICBmaWxlX3R5cGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmlsZVR5cGUpLFxuICAgIHByZWZpeF9jb25maWc6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyUzNPdXRwdXRGb3JtYXRDb25maWdQcmVmaXhDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByZWZpeENvbmZpZyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYnVja2V0X25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X25hbWUnKTtcbiAgfVxuXG4gIC8vIGJ1Y2tldF9wcmVmaXggLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBidWNrZXRQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdidWNrZXRfcHJlZml4Jyk7XG4gIH1cblxuICAvLyBzM19vdXRwdXRfZm9ybWF0X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzT3V0cHV0Rm9ybWF0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX291dHB1dF9mb3JtYXRfY29uZmlnJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNVcHNvbHZlclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBzM19vdXRwdXRfZm9ybWF0X2NvbmZpZzogZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzVXBzb2x2ZXJTM091dHB1dEZvcm1hdENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdCEuczNPdXRwdXRGb3JtYXRDb25maWcpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrRXJyb3JIYW5kbGluZ0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cblxuICAvLyBidWNrZXRfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X3ByZWZpeCcpO1xuICB9XG5cbiAgLy8gZmFpbF9vbl9maXJzdF9lcnJvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZhaWxPbkZpcnN0RXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgnZmFpbF9vbl9maXJzdF9lcnJvcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrRXJyb3JIYW5kbGluZ0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2tFcnJvckhhbmRsaW5nQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGJ1Y2tldF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmJ1Y2tldE5hbWUpLFxuICAgIGJ1Y2tldF9wcmVmaXg6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0UHJlZml4KSxcbiAgICBmYWlsX29uX2ZpcnN0X2Vycm9yOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5mYWlsT25GaXJzdEVycm9yKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzWmVuZGVzayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVycm9yX2hhbmRsaW5nX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVycm9ySGFuZGxpbmdDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZXJyb3JfaGFuZGxpbmdfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gaWRfZmllbGRfbmFtZXMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZEZpZWxkTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnaWRfZmllbGRfbmFtZXMnKTtcbiAgfVxuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG5cbiAgLy8gd3JpdGVfb3BlcmF0aW9uX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB3cml0ZU9wZXJhdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd3cml0ZV9vcGVyYXRpb25fdHlwZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzWmVuZGVzayk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlcnJvcl9oYW5kbGluZ19jb25maWc6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2tFcnJvckhhbmRsaW5nQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5lcnJvckhhbmRsaW5nQ29uZmlnKSxcbiAgICBpZF9maWVsZF9uYW1lczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5pZEZpZWxkTmFtZXMpLFxuICAgIG9iamVjdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5vYmplY3QpLFxuICAgIHdyaXRlX29wZXJhdGlvbl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLndyaXRlT3BlcmF0aW9uVHlwZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGV2ZW50X2JyaWRnZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGV2ZW50QnJpZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2V2ZW50X2JyaWRnZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGxvb2tvdXRfbWV0cmljcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGxvb2tvdXRNZXRyaWNzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2xvb2tvdXRfbWV0cmljcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcmVkc2hpZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgncmVkc2hpZnQnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzMyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2FsZXNmb3JjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNhbGVzZm9yY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2FsZXNmb3JjZScpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNub3dmbGFrZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNub3dmbGFrZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbm93Zmxha2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB1cHNvbHZlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHVwc29sdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Vwc29sdmVyJykgYXMgYW55O1xuICB9XG5cbiAgLy8gemVuZGVzayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHplbmRlc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnemVuZGVzaycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGV2ZW50X2JyaWRnZTogZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzRXZlbnRCcmlkZ2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmV2ZW50QnJpZGdlKSxcbiAgICBsb29rb3V0X21ldHJpY3M6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc0xvb2tvdXRNZXRyaWNzVG9UZXJyYWZvcm0oc3RydWN0IS5sb29rb3V0TWV0cmljcyksXG4gICAgcmVkc2hpZnQ6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1JlZHNoaWZ0VG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdCksXG4gICAgczM6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1MzVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc2FsZXNmb3JjZTogZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZVRvVGVycmFmb3JtKHN0cnVjdCEuc2FsZXNmb3JjZSksXG4gICAgc25vd2ZsYWtlOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNTbm93Zmxha2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnNub3dmbGFrZSksXG4gICAgdXBzb2x2ZXI6IGRhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdERlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllc1Vwc29sdmVyVG9UZXJyYWZvcm0oc3RydWN0IS51cHNvbHZlciksXG4gICAgemVuZGVzazogZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0RGVzdGluYXRpb25Db25uZWN0b3JQcm9wZXJ0aWVzWmVuZGVza1RvVGVycmFmb3JtKHN0cnVjdCEuemVuZGVzayksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93RGVzdGluYXRpb25GbG93Q29uZmlnTGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbm5lY3Rvcl9wcm9maWxlX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JQcm9maWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nvbm5lY3Rvcl9wcm9maWxlX25hbWUnKTtcbiAgfVxuXG4gIC8vIGNvbm5lY3Rvcl90eXBlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29ubmVjdG9yVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Nvbm5lY3Rvcl90eXBlJyk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9jb25uZWN0b3JfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9jb25uZWN0b3JfcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dEZXN0aW5hdGlvbkZsb3dDb25maWdMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rvcl9wcm9maWxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29ubmVjdG9yUHJvZmlsZU5hbWUpLFxuICAgIGNvbm5lY3Rvcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3RvclR5cGUpLFxuICAgIGRlc3RpbmF0aW9uX2Nvbm5lY3Rvcl9wcm9wZXJ0aWVzOiBkYXRhQXdzY2NBcHBmbG93Rmxvd0Rlc3RpbmF0aW9uRmxvd0NvbmZpZ0xpc3REZXN0aW5hdGlvbkNvbm5lY3RvclByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlc3RpbmF0aW9uQ29ubmVjdG9yUHJvcGVydGllcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ0luY3JlbWVudGFsUHVsbENvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGV0aW1lX3R5cGVfZmllbGRfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGV0aW1lVHlwZUZpZWxkTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGV0aW1lX3R5cGVfZmllbGRfbmFtZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdJbmNyZW1lbnRhbFB1bGxDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdJbmNyZW1lbnRhbFB1bGxDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0ZXRpbWVfdHlwZV9maWVsZF9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGV0aW1lVHlwZUZpZWxkTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNBbXBsaXR1ZGUgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0FtcGxpdHVkZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNBbXBsaXR1ZGUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEYXRhZG9nIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEYXRhZG9nVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0RhdGFkb2cpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEeW5hdHJhY2UgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0R5bmF0cmFjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEeW5hdHJhY2UpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNHb29nbGVBbmFseXRpY3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0dvb2dsZUFuYWx5dGljc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNHb29nbGVBbmFseXRpY3MpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNJbmZvck5leHVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNJbmZvck5leHVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0luZm9yTmV4dXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNNYXJrZXRvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNNYXJrZXRvVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc01hcmtldG8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTMyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGJ1Y2tldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2J1Y2tldF9uYW1lJyk7XG4gIH1cblxuICAvLyBidWNrZXRfcHJlZml4IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYnVja2V0UHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYnVja2V0X3ByZWZpeCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzUzNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzUzMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYnVja2V0X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYnVja2V0TmFtZSksXG4gICAgYnVja2V0X3ByZWZpeDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5idWNrZXRQcmVmaXgpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGVuYWJsZV9keW5hbWljX2ZpZWxkX3VwZGF0ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGVuYWJsZUR5bmFtaWNGaWVsZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdlbmFibGVfZHluYW1pY19maWVsZF91cGRhdGUnKTtcbiAgfVxuXG4gIC8vIGluY2x1ZGVfZGVsZXRlZF9yZWNvcmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jbHVkZURlbGV0ZWRSZWNvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2luY2x1ZGVfZGVsZXRlZF9yZWNvcmRzJyk7XG4gIH1cblxuICAvLyBvYmplY3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvYmplY3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NhbGVzZm9yY2VUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2FsZXNmb3JjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBlbmFibGVfZHluYW1pY19maWVsZF91cGRhdGU6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmVuYWJsZUR5bmFtaWNGaWVsZFVwZGF0ZSksXG4gICAgaW5jbHVkZV9kZWxldGVkX3JlY29yZHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybShzdHJ1Y3QhLmluY2x1ZGVEZWxldGVkUmVjb3JkcyksXG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTZXJ2aWNlTm93IGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTZXJ2aWNlTm93VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NlcnZpY2VOb3cpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTaW5ndWxhciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2luZ3VsYXJUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2luZ3VsYXIpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTbGFjayBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2xhY2tUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2xhY2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNUcmVuZG1pY3JvIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNUcmVuZG1pY3JvVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1RyZW5kbWljcm8pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNWZWV2YSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIG9iamVjdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ29iamVjdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzVmVldmFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzVmVldmEpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gb2JqZWN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb2JqZWN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1plbmRlc2spOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgb2JqZWN0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9iamVjdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhbXBsaXR1ZGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbXBsaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYW1wbGl0dWRlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gZGF0YWRvZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFkb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnZGF0YWRvZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGR5bmF0cmFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGR5bmF0cmFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkeW5hdHJhY2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBnb29nbGVfYW5hbHl0aWNzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZ29vZ2xlQW5hbHl0aWNzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2dvb2dsZV9hbmFseXRpY3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpbmZvcl9uZXh1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZm9yTmV4dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnaW5mb3JfbmV4dXMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBtYXJrZXRvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWFya2V0bygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtYXJrZXRvJykgYXMgYW55O1xuICB9XG5cbiAgLy8gczMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzMygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzMycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHNhbGVzZm9yY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzYWxlc2ZvcmNlKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3NhbGVzZm9yY2UnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzZXJ2aWNlX25vdyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlcnZpY2VOb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc2VydmljZV9ub3cnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBzaW5ndWxhciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNpbmd1bGFyKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Npbmd1bGFyJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc2xhY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzbGFjaycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRyZW5kbWljcm8gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB0cmVuZG1pY3JvKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RyZW5kbWljcm8nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB2ZWV2YSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZlZXZhKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZlZXZhJykgYXMgYW55O1xuICB9XG5cbiAgLy8gemVuZGVzayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHplbmRlc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnemVuZGVzaycpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgYW1wbGl0dWRlOiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzQW1wbGl0dWRlVG9UZXJyYWZvcm0oc3RydWN0IS5hbXBsaXR1ZGUpLFxuICAgIGRhdGFkb2c6IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEYXRhZG9nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhZG9nKSxcbiAgICBkeW5hdHJhY2U6IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNEeW5hdHJhY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLmR5bmF0cmFjZSksXG4gICAgZ29vZ2xlX2FuYWx5dGljczogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0dvb2dsZUFuYWx5dGljc1RvVGVycmFmb3JtKHN0cnVjdCEuZ29vZ2xlQW5hbHl0aWNzKSxcbiAgICBpbmZvcl9uZXh1czogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc0luZm9yTmV4dXNUb1RlcnJhZm9ybShzdHJ1Y3QhLmluZm9yTmV4dXMpLFxuICAgIG1hcmtldG86IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNNYXJrZXRvVG9UZXJyYWZvcm0oc3RydWN0IS5tYXJrZXRvKSxcbiAgICBzMzogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1MzVG9UZXJyYWZvcm0oc3RydWN0IS5zMyksXG4gICAgc2FsZXNmb3JjZTogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1NhbGVzZm9yY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhbGVzZm9yY2UpLFxuICAgIHNlcnZpY2Vfbm93OiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2VydmljZU5vd1RvVGVycmFmb3JtKHN0cnVjdCEuc2VydmljZU5vdyksXG4gICAgc2luZ3VsYXI6IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNTaW5ndWxhclRvVGVycmFmb3JtKHN0cnVjdCEuc2luZ3VsYXIpLFxuICAgIHNsYWNrOiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzU2xhY2tUb1RlcnJhZm9ybShzdHJ1Y3QhLnNsYWNrKSxcbiAgICB0cmVuZG1pY3JvOiBkYXRhQXdzY2NBcHBmbG93Rmxvd1NvdXJjZUZsb3dDb25maWdTb3VyY2VDb25uZWN0b3JQcm9wZXJ0aWVzVHJlbmRtaWNyb1RvVGVycmFmb3JtKHN0cnVjdCEudHJlbmRtaWNybyksXG4gICAgdmVldmE6IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNWZWV2YVRvVGVycmFmb3JtKHN0cnVjdCEudmVldmEpLFxuICAgIHplbmRlc2s6IGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1NvdXJjZUNvbm5lY3RvclByb3BlcnRpZXNaZW5kZXNrVG9UZXJyYWZvcm0oc3RydWN0IS56ZW5kZXNrKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29ubmVjdG9yX3Byb2ZpbGVfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3RvclByb2ZpbGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdG9yX3Byb2ZpbGVfbmFtZScpO1xuICB9XG5cbiAgLy8gY29ubmVjdG9yX3R5cGUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25uZWN0b3JUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY29ubmVjdG9yX3R5cGUnKTtcbiAgfVxuXG4gIC8vIGluY3JlbWVudGFsX3B1bGxfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaW5jcmVtZW50YWxQdWxsQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2luY3JlbWVudGFsX3B1bGxfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc291cmNlX2Nvbm5lY3Rvcl9wcm9wZXJ0aWVzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlQ29ubmVjdG9yUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdzb3VyY2VfY29ubmVjdG9yX3Byb3BlcnRpZXMnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93U291cmNlRmxvd0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0b3JfcHJvZmlsZV9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbm5lY3RvclByb2ZpbGVOYW1lKSxcbiAgICBjb25uZWN0b3JfdHlwZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0b3JUeXBlKSxcbiAgICBpbmNyZW1lbnRhbF9wdWxsX2NvbmZpZzogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnSW5jcmVtZW50YWxQdWxsQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5pbmNyZW1lbnRhbFB1bGxDb25maWcpLFxuICAgIHNvdXJjZV9jb25uZWN0b3JfcHJvcGVydGllczogZGF0YUF3c2NjQXBwZmxvd0Zsb3dTb3VyY2VGbG93Q29uZmlnU291cmNlQ29ubmVjdG9yUHJvcGVydGllc1RvVGVycmFmb3JtKHN0cnVjdCEuc291cmNlQ29ubmVjdG9yUHJvcGVydGllcyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93VGFncyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGtleSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2tleScpO1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93VGFnc1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93VGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93VGFza3NDb25uZWN0b3JPcGVyYXRvciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFtcGxpdHVkZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFtcGxpdHVkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FtcGxpdHVkZScpO1xuICB9XG5cbiAgLy8gZGF0YWRvZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFkb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhZG9nJyk7XG4gIH1cblxuICAvLyBkeW5hdHJhY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkeW5hdHJhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkeW5hdHJhY2UnKTtcbiAgfVxuXG4gIC8vIGdvb2dsZV9hbmFseXRpY3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBnb29nbGVBbmFseXRpY3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdnb29nbGVfYW5hbHl0aWNzJyk7XG4gIH1cblxuICAvLyBpbmZvcl9uZXh1cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGluZm9yTmV4dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpbmZvcl9uZXh1cycpO1xuICB9XG5cbiAgLy8gbWFya2V0byAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1hcmtldG8oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtYXJrZXRvJyk7XG4gIH1cblxuICAvLyBzMyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnczMnKTtcbiAgfVxuXG4gIC8vIHNhbGVzZm9yY2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzYWxlc2ZvcmNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2FsZXNmb3JjZScpO1xuICB9XG5cbiAgLy8gc2VydmljZV9ub3cgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZXJ2aWNlTm93KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VydmljZV9ub3cnKTtcbiAgfVxuXG4gIC8vIHNpbmd1bGFyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2luZ3VsYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzaW5ndWxhcicpO1xuICB9XG5cbiAgLy8gc2xhY2sgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzbGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NsYWNrJyk7XG4gIH1cblxuICAvLyB0cmVuZG1pY3JvIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdHJlbmRtaWNybygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3RyZW5kbWljcm8nKTtcbiAgfVxuXG4gIC8vIHZlZXZhIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmVldmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2ZWV2YScpO1xuICB9XG5cbiAgLy8gemVuZGVzayAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHplbmRlc2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd6ZW5kZXNrJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93VGFza3NDb25uZWN0b3JPcGVyYXRvclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93VGFza3NDb25uZWN0b3JPcGVyYXRvcik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbXBsaXR1ZGU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuYW1wbGl0dWRlKSxcbiAgICBkYXRhZG9nOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFkb2cpLFxuICAgIGR5bmF0cmFjZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5keW5hdHJhY2UpLFxuICAgIGdvb2dsZV9hbmFseXRpY3M6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZ29vZ2xlQW5hbHl0aWNzKSxcbiAgICBpbmZvcl9uZXh1czogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5pbmZvck5leHVzKSxcbiAgICBtYXJrZXRvOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1hcmtldG8pLFxuICAgIHMzOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzKSxcbiAgICBzYWxlc2ZvcmNlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNhbGVzZm9yY2UpLFxuICAgIHNlcnZpY2Vfbm93OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlcnZpY2VOb3cpLFxuICAgIHNpbmd1bGFyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNpbmd1bGFyKSxcbiAgICBzbGFjazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zbGFjayksXG4gICAgdHJlbmRtaWNybzogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50cmVuZG1pY3JvKSxcbiAgICB2ZWV2YTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52ZWV2YSksXG4gICAgemVuZGVzazogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS56ZW5kZXNrKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dUYXNrc1Rhc2tQcm9wZXJ0aWVzIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8ga2V5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQga2V5KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgna2V5Jyk7XG4gIH1cblxuICAvLyB2YWx1ZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndmFsdWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dUYXNrc1Rhc2tQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjQXBwZmxvd0Zsb3dUYXNrc1Rhc2tQcm9wZXJ0aWVzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGtleTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5rZXkpLFxuICAgIHZhbHVlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dUYXNrcyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbm5lY3Rvcl9vcGVyYXRvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbm5lY3Rvck9wZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2Nvbm5lY3Rvcl9vcGVyYXRvcicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGRlc3RpbmF0aW9uX2ZpZWxkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25GaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc3RpbmF0aW9uX2ZpZWxkJyk7XG4gIH1cblxuICAvLyBzb3VyY2VfZmllbGRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc291cmNlRmllbGRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NvdXJjZV9maWVsZHMnKTtcbiAgfVxuXG4gIC8vIHRhc2tfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhc2tQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3Rhc2tfcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhc2tfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhc2tUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFza190eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93VGFza3NUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1Rhc2tzKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rvcl9vcGVyYXRvcjogZGF0YUF3c2NjQXBwZmxvd0Zsb3dUYXNrc0Nvbm5lY3Rvck9wZXJhdG9yVG9UZXJyYWZvcm0oc3RydWN0IS5jb25uZWN0b3JPcGVyYXRvciksXG4gICAgZGVzdGluYXRpb25fZmllbGQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGVzdGluYXRpb25GaWVsZCksXG4gICAgc291cmNlX2ZpZWxkczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5zb3VyY2VGaWVsZHMpLFxuICAgIHRhc2tfcHJvcGVydGllczogY2RrdGYubGlzdE1hcHBlcihkYXRhQXdzY2NBcHBmbG93Rmxvd1Rhc2tzVGFza1Byb3BlcnRpZXNUb1RlcnJhZm9ybSkoc3RydWN0IS50YXNrUHJvcGVydGllcyksXG4gICAgdGFza190eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRhc2tUeXBlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3dUcmlnZ2VyQ29uZmlnVHJpZ2dlclByb3BlcnRpZXMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBkYXRhX3B1bGxfbW9kZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFQdWxsTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RhdGFfcHVsbF9tb2RlJyk7XG4gIH1cblxuICAvLyBzY2hlZHVsZV9lbmRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlRW5kVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ3NjaGVkdWxlX2VuZF90aW1lJyk7XG4gIH1cblxuICAvLyBzY2hlZHVsZV9leHByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2NoZWR1bGVFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2NoZWR1bGVfZXhwcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gc2NoZWR1bGVfc3RhcnRfdGltZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNjaGVkdWxlU3RhcnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnc2NoZWR1bGVfc3RhcnRfdGltZScpO1xuICB9XG5cbiAgLy8gdGltZV96b25lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZVpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd0aW1lX3pvbmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjQXBwZmxvd0Zsb3dUcmlnZ2VyQ29uZmlnVHJpZ2dlclByb3BlcnRpZXNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NBcHBmbG93Rmxvd1RyaWdnZXJDb25maWdUcmlnZ2VyUHJvcGVydGllcyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBkYXRhX3B1bGxfbW9kZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhUHVsbE1vZGUpLFxuICAgIHNjaGVkdWxlX2VuZF90aW1lOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLnNjaGVkdWxlRW5kVGltZSksXG4gICAgc2NoZWR1bGVfZXhwcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5zY2hlZHVsZUV4cHJlc3Npb24pLFxuICAgIHNjaGVkdWxlX3N0YXJ0X3RpbWU6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuc2NoZWR1bGVTdGFydFRpbWUpLFxuICAgIHRpbWVfem9uZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lWm9uZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0FwcGZsb3dGbG93VHJpZ2dlckNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHRyaWdnZXJfcHJvcGVydGllcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyaWdnZXJQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RyaWdnZXJfcHJvcGVydGllcycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRyaWdnZXJfdHlwZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyaWdnZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndHJpZ2dlcl90eXBlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0FwcGZsb3dGbG93VHJpZ2dlckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0FwcGZsb3dGbG93VHJpZ2dlckNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICB0cmlnZ2VyX3Byb3BlcnRpZXM6IGRhdGFBd3NjY0FwcGZsb3dGbG93VHJpZ2dlckNvbmZpZ1RyaWdnZXJQcm9wZXJ0aWVzVG9UZXJyYWZvcm0oc3RydWN0IS50cmlnZ2VyUHJvcGVydGllcyksXG4gICAgdHJpZ2dlcl90eXBlOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRyaWdnZXJUeXBlKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2FwcGZsb3dfZmxvdy5odG1sIGF3c2NjX2FwcGZsb3dfZmxvd31cbiovXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjQXBwZmxvd0Zsb3cgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2FwcGZsb3dfZmxvd1wiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9hcHBmbG93X2Zsb3cuaHRtbCBhd3NjY19hcHBmbG93X2Zsb3d9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0FwcGZsb3dGbG93Q29uZmlnXG4gICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IERhdGFBd3NjY0FwcGZsb3dGbG93Q29uZmlnKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6ICdhd3NjY19hcHBmbG93X2Zsb3cnLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gZGVzY3JpcHRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBkZXN0aW5hdGlvbl9mbG93X2NvbmZpZ19saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVzdGluYXRpb25GbG93Q29uZmlnTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdkZXN0aW5hdGlvbl9mbG93X2NvbmZpZ19saXN0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gZmxvd19hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBmbG93QXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxvd19hcm4nKTtcbiAgfVxuXG4gIC8vIGZsb3dfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZsb3dOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxvd19uYW1lJyk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8ga21zX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0FybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19hcm4nKTtcbiAgfVxuXG4gIC8vIHNvdXJjZV9mbG93X2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNvdXJjZUZsb3dDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc291cmNlX2Zsb3dfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhc2tzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFza3MnKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0cmlnZ2VyX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRyaWdnZXJDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndHJpZ2dlcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSh0aGlzLl9pZCksXG4gICAgfTtcbiAgfVxufVxuIl19