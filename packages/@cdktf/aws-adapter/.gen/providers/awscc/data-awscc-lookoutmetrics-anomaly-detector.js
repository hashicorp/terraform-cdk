"use strict";
// https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccLookoutmetricsAnomalyDetector = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetList = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList = exports.dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform = exports.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig = void 0;
const cdktf = require("cdktf");
class DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig extends cdktf.ComplexComputedList {
    // anomaly_detector_frequency - computed: true, optional: false, required: false
    get anomalyDetectorFrequency() {
        return this.getStringAttribute('anomaly_detector_frequency');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig = DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
function dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        anomaly_detector_frequency: cdktf.stringToTerraform(struct.anomalyDetectorFrequency),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList extends cdktf.ComplexComputedList {
    // aggregation_function - computed: true, optional: false, required: false
    get aggregationFunction() {
        return this.getStringAttribute('aggregation_function');
    }
    // metric_name - computed: true, optional: false, required: false
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aggregation_function: cdktf.stringToTerraform(struct.aggregationFunction),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        namespace: cdktf.stringToTerraform(struct.namespace),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig extends cdktf.ComplexComputedList {
    // flow_name - computed: true, optional: false, required: false
    get flowName() {
        return this.getStringAttribute('flow_name');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        flow_name: cdktf.stringToTerraform(struct.flowName),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig extends cdktf.ComplexComputedList {
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {
    // security_group_id_list - computed: true, optional: false, required: false
    get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    // subnet_id_list - computed: true, optional: false, required: false
    get subnetIdList() {
        return this.getListAttribute('subnet_id_list');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIdList),
        subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIdList),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig extends cdktf.ComplexComputedList {
    // database_host - computed: true, optional: false, required: false
    get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // database_port - computed: true, optional: false, required: false
    get databasePort() {
        return this.getNumberAttribute('database_port');
    }
    // db_instance_identifier - computed: true, optional: false, required: false
    get dbInstanceIdentifier() {
        return this.getStringAttribute('db_instance_identifier');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // secret_manager_arn - computed: true, optional: false, required: false
    get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        database_host: cdktf.stringToTerraform(struct.databaseHost),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        database_port: cdktf.numberToTerraform(struct.databasePort),
        db_instance_identifier: cdktf.stringToTerraform(struct.dbInstanceIdentifier),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        secret_manager_arn: cdktf.stringToTerraform(struct.secretManagerArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        vpc_configuration: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {
    // security_group_id_list - computed: true, optional: false, required: false
    get securityGroupIdList() {
        return this.getListAttribute('security_group_id_list');
    }
    // subnet_id_list - computed: true, optional: false, required: false
    get subnetIdList() {
        return this.getListAttribute('subnet_id_list');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIdList),
        subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIdList),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig extends cdktf.ComplexComputedList {
    // cluster_identifier - computed: true, optional: false, required: false
    get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    // database_host - computed: true, optional: false, required: false
    get databaseHost() {
        return this.getStringAttribute('database_host');
    }
    // database_name - computed: true, optional: false, required: false
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    // database_port - computed: true, optional: false, required: false
    get databasePort() {
        return this.getNumberAttribute('database_port');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // secret_manager_arn - computed: true, optional: false, required: false
    get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    // table_name - computed: true, optional: false, required: false
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    // vpc_configuration - computed: true, optional: false, required: false
    get vpcConfiguration() {
        return this.interpolationForAttribute('vpc_configuration');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cluster_identifier: cdktf.stringToTerraform(struct.clusterIdentifier),
        database_host: cdktf.stringToTerraform(struct.databaseHost),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        database_port: cdktf.numberToTerraform(struct.databasePort),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        secret_manager_arn: cdktf.stringToTerraform(struct.secretManagerArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        vpc_configuration: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct.vpcConfiguration),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor extends cdktf.ComplexComputedList {
    // charset - computed: true, optional: false, required: false
    get charset() {
        return this.getStringAttribute('charset');
    }
    // contains_header - computed: true, optional: false, required: false
    get containsHeader() {
        return this.getBooleanAttribute('contains_header');
    }
    // delimiter - computed: true, optional: false, required: false
    get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    // file_compression - computed: true, optional: false, required: false
    get fileCompression() {
        return this.getStringAttribute('file_compression');
    }
    // header_list - computed: true, optional: false, required: false
    get headerList() {
        return this.getListAttribute('header_list');
    }
    // quote_symbol - computed: true, optional: false, required: false
    get quoteSymbol() {
        return this.getStringAttribute('quote_symbol');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        charset: cdktf.stringToTerraform(struct.charset),
        contains_header: cdktf.booleanToTerraform(struct.containsHeader),
        delimiter: cdktf.stringToTerraform(struct.delimiter),
        file_compression: cdktf.stringToTerraform(struct.fileCompression),
        header_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.headerList),
        quote_symbol: cdktf.stringToTerraform(struct.quoteSymbol),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor extends cdktf.ComplexComputedList {
    // charset - computed: true, optional: false, required: false
    get charset() {
        return this.getStringAttribute('charset');
    }
    // file_compression - computed: true, optional: false, required: false
    get fileCompression() {
        return this.getStringAttribute('file_compression');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        charset: cdktf.stringToTerraform(struct.charset),
        file_compression: cdktf.stringToTerraform(struct.fileCompression),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor extends cdktf.ComplexComputedList {
    // csv_format_descriptor - computed: true, optional: false, required: false
    get csvFormatDescriptor() {
        return this.interpolationForAttribute('csv_format_descriptor');
    }
    // json_format_descriptor - computed: true, optional: false, required: false
    get jsonFormatDescriptor() {
        return this.interpolationForAttribute('json_format_descriptor');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        csv_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct.csvFormatDescriptor),
        json_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct.jsonFormatDescriptor),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig extends cdktf.ComplexComputedList {
    // file_format_descriptor - computed: true, optional: false, required: false
    get fileFormatDescriptor() {
        return this.interpolationForAttribute('file_format_descriptor');
    }
    // historical_data_path_list - computed: true, optional: false, required: false
    get historicalDataPathList() {
        return this.getListAttribute('historical_data_path_list');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // templated_path_list - computed: true, optional: false, required: false
    get templatedPathList() {
        return this.getListAttribute('templated_path_list');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct.fileFormatDescriptor),
        historical_data_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.historicalDataPathList),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        templated_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.templatedPathList),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource extends cdktf.ComplexComputedList {
    // app_flow_config - computed: true, optional: false, required: false
    get appFlowConfig() {
        return this.interpolationForAttribute('app_flow_config');
    }
    // cloudwatch_config - computed: true, optional: false, required: false
    get cloudwatchConfig() {
        return this.interpolationForAttribute('cloudwatch_config');
    }
    // rds_source_config - computed: true, optional: false, required: false
    get rdsSourceConfig() {
        return this.interpolationForAttribute('rds_source_config');
    }
    // redshift_source_config - computed: true, optional: false, required: false
    get redshiftSourceConfig() {
        return this.interpolationForAttribute('redshift_source_config');
    }
    // s3_source_config - computed: true, optional: false, required: false
    get s3SourceConfig() {
        return this.interpolationForAttribute('s3_source_config');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        app_flow_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct.appFlowConfig),
        cloudwatch_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct.cloudwatchConfig),
        rds_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct.rdsSourceConfig),
        redshift_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct.redshiftSourceConfig),
        s3_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct.s3SourceConfig),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn extends cdktf.ComplexComputedList {
    // column_format - computed: true, optional: false, required: false
    get columnFormat() {
        return this.getStringAttribute('column_format');
    }
    // column_name - computed: true, optional: false, required: false
    get columnName() {
        return this.getStringAttribute('column_name');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn = DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        column_format: cdktf.stringToTerraform(struct.columnFormat),
        column_name: cdktf.stringToTerraform(struct.columnName),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform;
class DataAwsccLookoutmetricsAnomalyDetectorMetricSetList extends cdktf.ComplexComputedList {
    // dimension_list - computed: true, optional: false, required: false
    get dimensionList() {
        return this.getListAttribute('dimension_list');
    }
    // metric_list - computed: true, optional: false, required: false
    get metricList() {
        return this.interpolationForAttribute('metric_list');
    }
    // metric_set_description - computed: true, optional: false, required: false
    get metricSetDescription() {
        return this.getStringAttribute('metric_set_description');
    }
    // metric_set_frequency - computed: true, optional: false, required: false
    get metricSetFrequency() {
        return this.getStringAttribute('metric_set_frequency');
    }
    // metric_set_name - computed: true, optional: false, required: false
    get metricSetName() {
        return this.getStringAttribute('metric_set_name');
    }
    // metric_source - computed: true, optional: false, required: false
    get metricSource() {
        return this.interpolationForAttribute('metric_source');
    }
    // offset - computed: true, optional: false, required: false
    get offset() {
        return this.getNumberAttribute('offset');
    }
    // timestamp_column - computed: true, optional: false, required: false
    get timestampColumn() {
        return this.interpolationForAttribute('timestamp_column');
    }
    // timezone - computed: true, optional: false, required: false
    get timezone() {
        return this.getStringAttribute('timezone');
    }
}
exports.DataAwsccLookoutmetricsAnomalyDetectorMetricSetList = DataAwsccLookoutmetricsAnomalyDetectorMetricSetList;
function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimension_list: cdktf.listMapper(cdktf.stringToTerraform)(struct.dimensionList),
        metric_list: cdktf.listMapper(dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform)(struct.metricList),
        metric_set_description: cdktf.stringToTerraform(struct.metricSetDescription),
        metric_set_frequency: cdktf.stringToTerraform(struct.metricSetFrequency),
        metric_set_name: cdktf.stringToTerraform(struct.metricSetName),
        metric_source: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct.metricSource),
        offset: cdktf.numberToTerraform(struct.offset),
        timestamp_column: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct.timestampColumn),
        timezone: cdktf.stringToTerraform(struct.timezone),
    };
}
exports.dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform = dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector}
*/
class DataAwsccLookoutmetricsAnomalyDetector extends cdktf.TerraformDataSource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutmetricsAnomalyDetectorConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'awscc_lookoutmetrics_anomaly_detector',
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
    // anomaly_detector_config - computed: true, optional: false, required: false
    get anomalyDetectorConfig() {
        return this.interpolationForAttribute('anomaly_detector_config');
    }
    // anomaly_detector_description - computed: true, optional: false, required: false
    get anomalyDetectorDescription() {
        return this.getStringAttribute('anomaly_detector_description');
    }
    // anomaly_detector_name - computed: true, optional: false, required: false
    get anomalyDetectorName() {
        return this.getStringAttribute('anomaly_detector_name');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    // kms_key_arn - computed: true, optional: false, required: false
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    // metric_set_list - computed: true, optional: false, required: false
    get metricSetList() {
        return this.interpolationForAttribute('metric_set_list');
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
exports.DataAwsccLookoutmetricsAnomalyDetector = DataAwsccLookoutmetricsAnomalyDetector;
// =================
// STATIC PROPERTIES
// =================
DataAwsccLookoutmetricsAnomalyDetector.tfResourceType = "awscc_lookoutmetrics_anomaly_detector";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1sb29rb3V0bWV0cmljcy1hbm9tYWx5LWRldGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS1hd3NjYy1sb29rb3V0bWV0cmljcy1hbm9tYWx5LWRldGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1RkFBdUY7QUFDdkYsMkNBQTJDOzs7QUFHM0MsK0JBQStCO0FBWS9CLE1BQWEsMkRBQTRELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV4RyxnRkFBZ0Y7SUFDaEYsSUFBVyx3QkFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFORCxrSUFNQztBQUVELFNBQWdCLHNFQUFzRSxDQUFDLE1BQW9FO0lBQ3pKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx3QkFBd0IsQ0FBQztLQUN0RixDQUFBO0FBQ0gsQ0FBQztBQUxELHdKQUtDO0FBRUQsTUFBYSw2REFBOEQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTFHLDBFQUEwRTtJQUMxRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQWhCRCxzSUFnQkM7QUFFRCxTQUFnQix3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QWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUlELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFXLEVBQUUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUVBQXFFO0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBUSxDQUFDO0lBQ2xFLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUN0QyxDQUFDO0lBQ0osQ0FBQzs7QUF2Rkgsd0ZBd0ZDO0FBdEZDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ0cscURBQWMsR0FBVyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2xvb2tvdXRtZXRyaWNzX2Fub21hbHlfZGV0ZWN0b3IuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yQ29uZmlnIGV4dGVuZHMgY2RrdGYuVGVycmFmb3JtTWV0YUFyZ3VtZW50cyB7XG4gIC8qKlxuICAqIFVuaXF1ZWx5IGlkZW50aWZpZXMgdGhlIHJlc291cmNlLlxuICAqIFxuICAqIERvY3MgYXQgVGVycmFmb3JtIFJlZ2lzdHJ5OiB7QGxpbmsgaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvbG9va291dG1ldHJpY3NfYW5vbWFseV9kZXRlY3Rvci5odG1sI2lkIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yQW5vbWFseURldGVjdG9yQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYW5vbWFseV9kZXRlY3Rvcl9mcmVxdWVuY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbm9tYWx5RGV0ZWN0b3JGcmVxdWVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbm9tYWx5X2RldGVjdG9yX2ZyZXF1ZW5jeScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3RvckFub21hbHlEZXRlY3RvckNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yQW5vbWFseURldGVjdG9yQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGFub21hbHlfZGV0ZWN0b3JfZnJlcXVlbmN5OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFub21hbHlEZXRlY3RvckZyZXF1ZW5jeSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY0xpc3QgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBhZ2dyZWdhdGlvbl9mdW5jdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGFnZ3JlZ2F0aW9uRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhZ2dyZWdhdGlvbl9mdW5jdGlvbicpO1xuICB9XG5cbiAgLy8gbWV0cmljX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX25hbWUnKTtcbiAgfVxuXG4gIC8vIG5hbWVzcGFjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG5hbWVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWVzcGFjZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNMaXN0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljTGlzdCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhZ2dyZWdhdGlvbl9mdW5jdGlvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5hZ2dyZWdhdGlvbkZ1bmN0aW9uKSxcbiAgICBtZXRyaWNfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNOYW1lKSxcbiAgICBuYW1lc3BhY2U6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZXNwYWNlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlQXBwRmxvd0NvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGZsb3dfbmFtZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZsb3dOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmxvd19uYW1lJyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VBcHBGbG93Q29uZmlnVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlQXBwRmxvd0NvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmbG93X25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZmxvd05hbWUpLFxuICAgIHJvbGVfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnJvbGVBcm4pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VDbG91ZHdhdGNoQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gcm9sZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByb2xlQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgncm9sZV9hcm4nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlQ2xvdWR3YXRjaENvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZUNsb3Vkd2F0Y2hDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJkc1NvdXJjZUNvbmZpZ1ZwY0NvbmZpZ3VyYXRpb24gZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBzZWN1cml0eV9ncm91cF9pZF9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlHcm91cElkTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzZWN1cml0eV9ncm91cF9pZF9saXN0Jyk7XG4gIH1cblxuICAvLyBzdWJuZXRfaWRfbGlzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1Ym5ldElkTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdzdWJuZXRfaWRfbGlzdCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VSZHNTb3VyY2VDb25maWdWcGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUmRzU291cmNlQ29uZmlnVnBjQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZF9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZExpc3QpLFxuICAgIHN1Ym5ldF9pZF9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkTGlzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJkc1NvdXJjZUNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRhdGFiYXNlX2hvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZUhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9ob3N0Jyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RhdGFiYXNlX3BvcnQnKTtcbiAgfVxuXG4gIC8vIGRiX2luc3RhbmNlX2lkZW50aWZpZXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYkluc3RhbmNlSWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RiX2luc3RhbmNlX2lkZW50aWZpZXInKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzZWNyZXRfbWFuYWdlcl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRNYW5hZ2VyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X21hbmFnZXJfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VSZHNTb3VyY2VDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VSZHNTb3VyY2VDb25maWcpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGF0YWJhc2VfaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZUhvc3QpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICBkYXRhYmFzZV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlUG9ydCksXG4gICAgZGJfaW5zdGFuY2VfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYkluc3RhbmNlSWRlbnRpZmllciksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc2VjcmV0X21hbmFnZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE1hbmFnZXJBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB2cGNfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUmRzU291cmNlQ29uZmlnVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdCEudnBjQ29uZmlndXJhdGlvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnVnBjQ29uZmlndXJhdGlvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHNlY3VyaXR5X2dyb3VwX2lkX2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eUdyb3VwSWRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3NlY3VyaXR5X2dyb3VwX2lkX2xpc3QnKTtcbiAgfVxuXG4gIC8vIHN1Ym5ldF9pZF9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3VibmV0SWRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N1Ym5ldF9pZF9saXN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnVnBjQ29uZmlndXJhdGlvblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnVnBjQ29uZmlndXJhdGlvbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzZWN1cml0eV9ncm91cF9pZF9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnNlY3VyaXR5R3JvdXBJZExpc3QpLFxuICAgIHN1Ym5ldF9pZF9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN1Ym5ldElkTGlzdCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY2x1c3Rlcl9pZGVudGlmaWVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2x1c3RlcklkZW50aWZpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjbHVzdGVyX2lkZW50aWZpZXInKTtcbiAgfVxuXG4gIC8vIGRhdGFiYXNlX2hvc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkYXRhYmFzZUhvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdkYXRhYmFzZV9ob3N0Jyk7XG4gIH1cblxuICAvLyBkYXRhYmFzZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGF0YWJhc2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGF0YWJhc2VfbmFtZScpO1xuICB9XG5cbiAgLy8gZGF0YWJhc2VfcG9ydCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGRhdGFiYXNlUG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2RhdGFiYXNlX3BvcnQnKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cblxuICAvLyBzZWNyZXRfbWFuYWdlcl9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWNyZXRNYW5hZ2VyQXJuKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjcmV0X21hbmFnZXJfYXJuJyk7XG4gIH1cblxuICAvLyB0YWJsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGFibGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdnBjX2NvbmZpZ3VyYXRpb24gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2cGNDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3ZwY19jb25maWd1cmF0aW9uJykgYXMgYW55O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VSZWRzaGlmdFNvdXJjZUNvbmZpZ1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNsdXN0ZXJfaWRlbnRpZmllcjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5jbHVzdGVySWRlbnRpZmllciksXG4gICAgZGF0YWJhc2VfaG9zdDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5kYXRhYmFzZUhvc3QpLFxuICAgIGRhdGFiYXNlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGF0YWJhc2VOYW1lKSxcbiAgICBkYXRhYmFzZV9wb3J0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmRhdGFiYXNlUG9ydCksXG4gICAgcm9sZV9hcm46IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEucm9sZUFybiksXG4gICAgc2VjcmV0X21hbmFnZXJfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnNlY3JldE1hbmFnZXJBcm4pLFxuICAgIHRhYmxlX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEudGFibGVOYW1lKSxcbiAgICB2cGNfY29uZmlndXJhdGlvbjogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUmVkc2hpZnRTb3VyY2VDb25maWdWcGNDb25maWd1cmF0aW9uVG9UZXJyYWZvcm0oc3RydWN0IS52cGNDb25maWd1cmF0aW9uKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdGaWxlRm9ybWF0RGVzY3JpcHRvckNzdkZvcm1hdERlc2NyaXB0b3IgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjaGFyc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2hhcnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NoYXJzZXQnKTtcbiAgfVxuXG4gIC8vIGNvbnRhaW5zX2hlYWRlciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbnRhaW5zSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2NvbnRhaW5zX2hlYWRlcicpO1xuICB9XG5cbiAgLy8gZGVsaW1pdGVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGVsaW1pdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGVsaW1pdGVyJyk7XG4gIH1cblxuICAvLyBmaWxlX2NvbXByZXNzaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZmlsZUNvbXByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZmlsZV9jb21wcmVzc2lvbicpO1xuICB9XG5cbiAgLy8gaGVhZGVyX2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBoZWFkZXJMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ2hlYWRlcl9saXN0Jyk7XG4gIH1cblxuICAvLyBxdW90ZV9zeW1ib2wgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBxdW90ZVN5bWJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3F1b3RlX3N5bWJvbCcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VTM1NvdXJjZUNvbmZpZ0ZpbGVGb3JtYXREZXNjcmlwdG9yQ3N2Rm9ybWF0RGVzY3JpcHRvclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVMzU291cmNlQ29uZmlnRmlsZUZvcm1hdERlc2NyaXB0b3JDc3ZGb3JtYXREZXNjcmlwdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNoYXJzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hhcnNldCksXG4gICAgY29udGFpbnNfaGVhZGVyOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5jb250YWluc0hlYWRlciksXG4gICAgZGVsaW1pdGVyOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRlbGltaXRlciksXG4gICAgZmlsZV9jb21wcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlQ29tcHJlc3Npb24pLFxuICAgIGhlYWRlcl9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmhlYWRlckxpc3QpLFxuICAgIHF1b3RlX3N5bWJvbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5xdW90ZVN5bWJvbCksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVMzU291cmNlQ29uZmlnRmlsZUZvcm1hdERlc2NyaXB0b3JKc29uRm9ybWF0RGVzY3JpcHRvciBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNoYXJzZXQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjaGFyc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnY2hhcnNldCcpO1xuICB9XG5cbiAgLy8gZmlsZV9jb21wcmVzc2lvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpbGVDb21wcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ZpbGVfY29tcHJlc3Npb24nKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdGaWxlRm9ybWF0RGVzY3JpcHRvckpzb25Gb3JtYXREZXNjcmlwdG9yVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdGaWxlRm9ybWF0RGVzY3JpcHRvckpzb25Gb3JtYXREZXNjcmlwdG9yKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNoYXJzZXQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY2hhcnNldCksXG4gICAgZmlsZV9jb21wcmVzc2lvbjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlQ29tcHJlc3Npb24pLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VTM1NvdXJjZUNvbmZpZ0ZpbGVGb3JtYXREZXNjcmlwdG9yIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY3N2X2Zvcm1hdF9kZXNjcmlwdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY3N2Rm9ybWF0RGVzY3JpcHRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjc3ZfZm9ybWF0X2Rlc2NyaXB0b3InKSBhcyBhbnk7XG4gIH1cblxuICAvLyBqc29uX2Zvcm1hdF9kZXNjcmlwdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQganNvbkZvcm1hdERlc2NyaXB0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnanNvbl9mb3JtYXRfZGVzY3JpcHRvcicpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdGaWxlRm9ybWF0RGVzY3JpcHRvclRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVMzU291cmNlQ29uZmlnRmlsZUZvcm1hdERlc2NyaXB0b3IpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3N2X2Zvcm1hdF9kZXNjcmlwdG9yOiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VTM1NvdXJjZUNvbmZpZ0ZpbGVGb3JtYXREZXNjcmlwdG9yQ3N2Rm9ybWF0RGVzY3JpcHRvclRvVGVycmFmb3JtKHN0cnVjdCEuY3N2Rm9ybWF0RGVzY3JpcHRvciksXG4gICAganNvbl9mb3JtYXRfZGVzY3JpcHRvcjogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdGaWxlRm9ybWF0RGVzY3JpcHRvckpzb25Gb3JtYXREZXNjcmlwdG9yVG9UZXJyYWZvcm0oc3RydWN0IS5qc29uRm9ybWF0RGVzY3JpcHRvciksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVMzU291cmNlQ29uZmlnIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZmlsZV9mb3JtYXRfZGVzY3JpcHRvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGZpbGVGb3JtYXREZXNjcmlwdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2ZpbGVfZm9ybWF0X2Rlc2NyaXB0b3InKSBhcyBhbnk7XG4gIH1cblxuICAvLyBoaXN0b3JpY2FsX2RhdGFfcGF0aF9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgaGlzdG9yaWNhbERhdGFQYXRoTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdoaXN0b3JpY2FsX2RhdGFfcGF0aF9saXN0Jyk7XG4gIH1cblxuICAvLyByb2xlX2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJvbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdyb2xlX2FybicpO1xuICB9XG5cbiAgLy8gdGVtcGxhdGVkX3BhdGhfbGlzdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRlbXBsYXRlZFBhdGhMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3RlbXBsYXRlZF9wYXRoX2xpc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VTM1NvdXJjZUNvbmZpZyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBmaWxlX2Zvcm1hdF9kZXNjcmlwdG9yOiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VTM1NvdXJjZUNvbmZpZ0ZpbGVGb3JtYXREZXNjcmlwdG9yVG9UZXJyYWZvcm0oc3RydWN0IS5maWxlRm9ybWF0RGVzY3JpcHRvciksXG4gICAgaGlzdG9yaWNhbF9kYXRhX3BhdGhfbGlzdDogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5oaXN0b3JpY2FsRGF0YVBhdGhMaXN0KSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgICB0ZW1wbGF0ZWRfcGF0aF9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnRlbXBsYXRlZFBhdGhMaXN0KSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gYXBwX2Zsb3dfY29uZmlnIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYXBwRmxvd0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdhcHBfZmxvd19jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBjbG91ZHdhdGNoX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNsb3Vkd2F0Y2hDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY2xvdWR3YXRjaF9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyByZHNfc291cmNlX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHJkc1NvdXJjZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZHNfc291cmNlX2NvbmZpZycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHJlZHNoaWZ0X3NvdXJjZV9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCByZWRzaGlmdFNvdXJjZUNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdyZWRzaGlmdF9zb3VyY2VfY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gczNfc291cmNlX2NvbmZpZyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHMzU291cmNlQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3MzX3NvdXJjZV9jb25maWcnKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhcHBfZmxvd19jb25maWc6IGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZUFwcEZsb3dDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFwcEZsb3dDb25maWcpLFxuICAgIGNsb3Vkd2F0Y2hfY29uZmlnOiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VDbG91ZHdhdGNoQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5jbG91ZHdhdGNoQ29uZmlnKSxcbiAgICByZHNfc291cmNlX2NvbmZpZzogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUmRzU291cmNlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5yZHNTb3VyY2VDb25maWcpLFxuICAgIHJlZHNoaWZ0X3NvdXJjZV9jb25maWc6IGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY1NvdXJjZVJlZHNoaWZ0U291cmNlQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5yZWRzaGlmdFNvdXJjZUNvbmZpZyksXG4gICAgczNfc291cmNlX2NvbmZpZzogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0TWV0cmljU291cmNlUzNTb3VyY2VDb25maWdUb1RlcnJhZm9ybShzdHJ1Y3QhLnMzU291cmNlQ29uZmlnKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0VGltZXN0YW1wQ29sdW1uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gY29sdW1uX2Zvcm1hdCAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNvbHVtbkZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbHVtbl9mb3JtYXQnKTtcbiAgfVxuXG4gIC8vIGNvbHVtbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29sdW1uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NvbHVtbl9uYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdFRpbWVzdGFtcENvbHVtblRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdFRpbWVzdGFtcENvbHVtbik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb2x1bW5fZm9ybWF0OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbHVtbkZvcm1hdCksXG4gICAgY29sdW1uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29sdW1uTmFtZSksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRpbWVuc2lvbl9saXN0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdkaW1lbnNpb25fbGlzdCcpO1xuICB9XG5cbiAgLy8gbWV0cmljX2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldHJpY19saXN0JykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWV0cmljX3NldF9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY1NldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljX3NldF9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gbWV0cmljX3NldF9mcmVxdWVuY3kgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNTZXRGcmVxdWVuY3koKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdtZXRyaWNfc2V0X2ZyZXF1ZW5jeScpO1xuICB9XG5cbiAgLy8gbWV0cmljX3NldF9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljU2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ21ldHJpY19zZXRfbmFtZScpO1xuICB9XG5cbiAgLy8gbWV0cmljX3NvdXJjZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG1ldHJpY1NvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtZXRyaWNfc291cmNlJykgYXMgYW55O1xuICB9XG5cbiAgLy8gb2Zmc2V0IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnb2Zmc2V0Jyk7XG4gIH1cblxuICAvLyB0aW1lc3RhbXBfY29sdW1uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGltZXN0YW1wQ29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ3RpbWVzdGFtcF9jb2x1bW4nKSBhcyBhbnk7XG4gIH1cblxuICAvLyB0aW1lem9uZSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRpbWV6b25lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgndGltZXpvbmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0VG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0KTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRpbWVuc2lvbl9saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLmRpbWVuc2lvbkxpc3QpLFxuICAgIG1ldHJpY19saXN0OiBjZGt0Zi5saXN0TWFwcGVyKGRhdGFBd3NjY0xvb2tvdXRtZXRyaWNzQW5vbWFseURldGVjdG9yTWV0cmljU2V0TGlzdE1ldHJpY0xpc3RUb1RlcnJhZm9ybSkoc3RydWN0IS5tZXRyaWNMaXN0KSxcbiAgICBtZXRyaWNfc2V0X2Rlc2NyaXB0aW9uOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1NldERlc2NyaXB0aW9uKSxcbiAgICBtZXRyaWNfc2V0X2ZyZXF1ZW5jeTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNTZXRGcmVxdWVuY3kpLFxuICAgIG1ldHJpY19zZXRfbmFtZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNTZXROYW1lKSxcbiAgICBtZXRyaWNfc291cmNlOiBkYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3Rvck1ldHJpY1NldExpc3RNZXRyaWNTb3VyY2VUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY1NvdXJjZSksXG4gICAgb2Zmc2V0OiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLm9mZnNldCksXG4gICAgdGltZXN0YW1wX2NvbHVtbjogZGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JNZXRyaWNTZXRMaXN0VGltZXN0YW1wQ29sdW1uVG9UZXJyYWZvcm0oc3RydWN0IS50aW1lc3RhbXBDb2x1bW4pLFxuICAgIHRpbWV6b25lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnRpbWV6b25lKSxcbiAgfVxufVxuXG5cbi8qKlxuKiBSZXByZXNlbnRzIGEge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2xvb2tvdXRtZXRyaWNzX2Fub21hbHlfZGV0ZWN0b3IuaHRtbCBhd3NjY19sb29rb3V0bWV0cmljc19hbm9tYWx5X2RldGVjdG9yfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NMb29rb3V0bWV0cmljc0Fub21hbHlEZXRlY3RvciBleHRlbmRzIGNka3RmLlRlcnJhZm9ybURhdGFTb3VyY2Uge1xuXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIC8vIFNUQVRJQyBQUk9QRVJUSUVTXG4gIC8vID09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGZSZXNvdXJjZVR5cGU6IHN0cmluZyA9IFwiYXdzY2NfbG9va291dG1ldHJpY3NfYW5vbWFseV9kZXRlY3RvclwiO1xuXG4gIC8vID09PT09PT09PT09XG4gIC8vIElOSVRJQUxJWkVSXG4gIC8vID09PT09PT09PT09XG5cbiAgLyoqXG4gICogQ3JlYXRlIGEgbmV3IHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9sb29rb3V0bWV0cmljc19hbm9tYWx5X2RldGVjdG9yLmh0bWwgYXdzY2NfbG9va291dG1ldHJpY3NfYW5vbWFseV9kZXRlY3Rvcn0gRGF0YSBTb3VyY2VcbiAgKlxuICAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgaW4gd2hpY2ggdG8gZGVmaW5lIHRoaXMgY29uc3RydWN0XG4gICogQHBhcmFtIGlkIFRoZSBzY29wZWQgY29uc3RydWN0IElELiBNdXN0IGJlIHVuaXF1ZSBhbW9uZ3N0IHNpYmxpbmdzIGluIHRoZSBzYW1lIHNjb3BlXG4gICogQHBhcmFtIG9wdGlvbnMgRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JDb25maWdcbiAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIGNvbmZpZzogRGF0YUF3c2NjTG9va291dG1ldHJpY3NBbm9tYWx5RGV0ZWN0b3JDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2xvb2tvdXRtZXRyaWNzX2Fub21hbHlfZGV0ZWN0b3InLFxuICAgICAgdGVycmFmb3JtR2VuZXJhdG9yTWV0YWRhdGE6IHtcbiAgICAgICAgcHJvdmlkZXJOYW1lOiAnYXdzY2MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9pZCA9IGNvbmZpZy5pZDtcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYW5vbWFseV9kZXRlY3Rvcl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbm9tYWx5RGV0ZWN0b3JDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYW5vbWFseV9kZXRlY3Rvcl9jb25maWcnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBhbm9tYWx5X2RldGVjdG9yX2Rlc2NyaXB0aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgYW5vbWFseURldGVjdG9yRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhbm9tYWx5X2RldGVjdG9yX2Rlc2NyaXB0aW9uJyk7XG4gIH1cblxuICAvLyBhbm9tYWx5X2RldGVjdG9yX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbm9tYWx5RGV0ZWN0b3JOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnYW5vbWFseV9kZXRlY3Rvcl9uYW1lJyk7XG4gIH1cblxuICAvLyBhcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdhcm4nKTtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiB0cnVlXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdpZCcpO1xuICB9XG4gIHB1YmxpYyBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkXG4gIH1cblxuICAvLyBrbXNfa2V5X2FybiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGttc0tleUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2ttc19rZXlfYXJuJyk7XG4gIH1cblxuICAvLyBtZXRyaWNfc2V0X2xpc3QgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtZXRyaWNTZXRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldHJpY19zZXRfbGlzdCcpIGFzIGFueTtcbiAgfVxuXG4gIC8vID09PT09PT09PVxuICAvLyBTWU5USEVTSVNcbiAgLy8gPT09PT09PT09XG5cbiAgcHJvdGVjdGVkIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2lkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=