// https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLookoutmetricsAnomalyDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html#id DataAwsccLookoutmetricsAnomalyDetector#id}
  */
  readonly id: string;
}
export class DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig extends cdktf.ComplexComputedList {

  // anomaly_detector_frequency - computed: true, optional: false, required: false
  public get anomalyDetectorFrequency() {
    return this.getStringAttribute('anomaly_detector_frequency');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    anomaly_detector_frequency: cdktf.stringToTerraform(struct!.anomalyDetectorFrequency),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList extends cdktf.ComplexComputedList {

  // aggregation_function - computed: true, optional: false, required: false
  public get aggregationFunction() {
    return this.getStringAttribute('aggregation_function');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig extends cdktf.ComplexComputedList {

  // flow_name - computed: true, optional: false, required: false
  public get flowName() {
    return this.getStringAttribute('flow_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flow_name: cdktf.stringToTerraform(struct!.flowName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }

  // subnet_id_list - computed: true, optional: false, required: false
  public get subnetIdList() {
    return this.getListAttribute('subnet_id_list');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
    subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIdList),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig extends cdktf.ComplexComputedList {

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // db_instance_identifier - computed: true, optional: false, required: false
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    db_instance_identifier: cdktf.stringToTerraform(struct!.dbInstanceIdentifier),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    vpc_configuration: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {

  // security_group_id_list - computed: true, optional: false, required: false
  public get securityGroupIdList() {
    return this.getListAttribute('security_group_id_list');
  }

  // subnet_id_list - computed: true, optional: false, required: false
  public get subnetIdList() {
    return this.getListAttribute('subnet_id_list');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
    subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIdList),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig extends cdktf.ComplexComputedList {

  // cluster_identifier - computed: true, optional: false, required: false
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }

  // database_host - computed: true, optional: false, required: false
  public get databaseHost() {
    return this.getStringAttribute('database_host');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_port - computed: true, optional: false, required: false
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_manager_arn - computed: true, optional: false, required: false
  public get secretManagerArn() {
    return this.getStringAttribute('secret_manager_arn');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    vpc_configuration: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor extends cdktf.ComplexComputedList {

  // charset - computed: true, optional: false, required: false
  public get charset() {
    return this.getStringAttribute('charset');
  }

  // contains_header - computed: true, optional: false, required: false
  public get containsHeader() {
    return this.getBooleanAttribute('contains_header');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // file_compression - computed: true, optional: false, required: false
  public get fileCompression() {
    return this.getStringAttribute('file_compression');
  }

  // header_list - computed: true, optional: false, required: false
  public get headerList() {
    return this.getListAttribute('header_list');
  }

  // quote_symbol - computed: true, optional: false, required: false
  public get quoteSymbol() {
    return this.getStringAttribute('quote_symbol');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    charset: cdktf.stringToTerraform(struct!.charset),
    contains_header: cdktf.booleanToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    file_compression: cdktf.stringToTerraform(struct!.fileCompression),
    header_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.headerList),
    quote_symbol: cdktf.stringToTerraform(struct!.quoteSymbol),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor extends cdktf.ComplexComputedList {

  // charset - computed: true, optional: false, required: false
  public get charset() {
    return this.getStringAttribute('charset');
  }

  // file_compression - computed: true, optional: false, required: false
  public get fileCompression() {
    return this.getStringAttribute('file_compression');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    charset: cdktf.stringToTerraform(struct!.charset),
    file_compression: cdktf.stringToTerraform(struct!.fileCompression),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor extends cdktf.ComplexComputedList {

  // csv_format_descriptor - computed: true, optional: false, required: false
  public get csvFormatDescriptor() {
    return this.interpolationForAttribute('csv_format_descriptor') as any;
  }

  // json_format_descriptor - computed: true, optional: false, required: false
  public get jsonFormatDescriptor() {
    return this.interpolationForAttribute('json_format_descriptor') as any;
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct!.csvFormatDescriptor),
    json_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct!.jsonFormatDescriptor),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig extends cdktf.ComplexComputedList {

  // file_format_descriptor - computed: true, optional: false, required: false
  public get fileFormatDescriptor() {
    return this.interpolationForAttribute('file_format_descriptor') as any;
  }

  // historical_data_path_list - computed: true, optional: false, required: false
  public get historicalDataPathList() {
    return this.getListAttribute('historical_data_path_list');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // templated_path_list - computed: true, optional: false, required: false
  public get templatedPathList() {
    return this.getListAttribute('templated_path_list');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_format_descriptor: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct!.fileFormatDescriptor),
    historical_data_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.historicalDataPathList),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    templated_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.templatedPathList),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource extends cdktf.ComplexComputedList {

  // app_flow_config - computed: true, optional: false, required: false
  public get appFlowConfig() {
    return this.interpolationForAttribute('app_flow_config') as any;
  }

  // cloudwatch_config - computed: true, optional: false, required: false
  public get cloudwatchConfig() {
    return this.interpolationForAttribute('cloudwatch_config') as any;
  }

  // rds_source_config - computed: true, optional: false, required: false
  public get rdsSourceConfig() {
    return this.interpolationForAttribute('rds_source_config') as any;
  }

  // redshift_source_config - computed: true, optional: false, required: false
  public get redshiftSourceConfig() {
    return this.interpolationForAttribute('redshift_source_config') as any;
  }

  // s3_source_config - computed: true, optional: false, required: false
  public get s3SourceConfig() {
    return this.interpolationForAttribute('s3_source_config') as any;
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_flow_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct!.appFlowConfig),
    cloudwatch_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
    rds_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct!.rdsSourceConfig),
    redshift_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct!.redshiftSourceConfig),
    s3_source_config: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct!.s3SourceConfig),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn extends cdktf.ComplexComputedList {

  // column_format - computed: true, optional: false, required: false
  public get columnFormat() {
    return this.getStringAttribute('column_format');
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_format: cdktf.stringToTerraform(struct!.columnFormat),
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}

export class DataAwsccLookoutmetricsAnomalyDetectorMetricSetList extends cdktf.ComplexComputedList {

  // dimension_list - computed: true, optional: false, required: false
  public get dimensionList() {
    return this.getListAttribute('dimension_list');
  }

  // metric_list - computed: true, optional: false, required: false
  public get metricList() {
    return this.interpolationForAttribute('metric_list') as any;
  }

  // metric_set_description - computed: true, optional: false, required: false
  public get metricSetDescription() {
    return this.getStringAttribute('metric_set_description');
  }

  // metric_set_frequency - computed: true, optional: false, required: false
  public get metricSetFrequency() {
    return this.getStringAttribute('metric_set_frequency');
  }

  // metric_set_name - computed: true, optional: false, required: false
  public get metricSetName() {
    return this.getStringAttribute('metric_set_name');
  }

  // metric_source - computed: true, optional: false, required: false
  public get metricSource() {
    return this.interpolationForAttribute('metric_source') as any;
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // timestamp_column - computed: true, optional: false, required: false
  public get timestampColumn() {
    return this.interpolationForAttribute('timestamp_column') as any;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dimensionList),
    metric_list: cdktf.listMapper(dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform)(struct!.metricList),
    metric_set_description: cdktf.stringToTerraform(struct!.metricSetDescription),
    metric_set_frequency: cdktf.stringToTerraform(struct!.metricSetFrequency),
    metric_set_name: cdktf.stringToTerraform(struct!.metricSetName),
    metric_source: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct!.metricSource),
    offset: cdktf.numberToTerraform(struct!.offset),
    timestamp_column: dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct!.timestampColumn),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector}
*/
export class DataAwsccLookoutmetricsAnomalyDetector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lookoutmetrics_anomaly_detector";

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
  public constructor(scope: Construct, id: string, config: DataAwsccLookoutmetricsAnomalyDetectorConfig) {
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
  public get anomalyDetectorConfig() {
    return this.interpolationForAttribute('anomaly_detector_config') as any;
  }

  // anomaly_detector_description - computed: true, optional: false, required: false
  public get anomalyDetectorDescription() {
    return this.getStringAttribute('anomaly_detector_description');
  }

  // anomaly_detector_name - computed: true, optional: false, required: false
  public get anomalyDetectorName() {
    return this.getStringAttribute('anomaly_detector_name');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // metric_set_list - computed: true, optional: false, required: false
  public get metricSetList() {
    return this.interpolationForAttribute('metric_set_list') as any;
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
