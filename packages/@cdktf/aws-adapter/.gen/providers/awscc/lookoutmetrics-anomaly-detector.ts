// https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookoutmetricsAnomalyDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#anomaly_detector_config LookoutmetricsAnomalyDetector#anomaly_detector_config}
  */
  readonly anomalyDetectorConfig: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
  /**
  * A description for the AnomalyDetector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#anomaly_detector_description LookoutmetricsAnomalyDetector#anomaly_detector_description}
  */
  readonly anomalyDetectorDescription?: string;
  /**
  * Name for the Amazon Lookout for Metrics Anomaly Detector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#anomaly_detector_name LookoutmetricsAnomalyDetector#anomaly_detector_name}
  */
  readonly anomalyDetectorName?: string;
  /**
  * KMS key used to encrypt the AnomalyDetector data
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#kms_key_arn LookoutmetricsAnomalyDetector#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * List of metric sets for anomaly detection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_set_list LookoutmetricsAnomalyDetector#metric_set_list}
  */
  readonly metricSetList: LookoutmetricsAnomalyDetectorMetricSetList[];
}
export interface LookoutmetricsAnomalyDetectorAnomalyDetectorConfig {
  /**
  * Frequency of anomaly detection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#anomaly_detector_frequency LookoutmetricsAnomalyDetector#anomaly_detector_frequency}
  */
  readonly anomalyDetectorFrequency: string;
}

export function lookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    anomaly_detector_frequency: cdktf.stringToTerraform(struct!.anomalyDetectorFrequency),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricList {
  /**
  * Operator used to aggregate metric values
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#aggregation_function LookoutmetricsAnomalyDetector#aggregation_function}
  */
  readonly aggregationFunction: string;
  /**
  * Name of a column in the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_name LookoutmetricsAnomalyDetector#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#namespace LookoutmetricsAnomalyDetector#namespace}
  */
  readonly namespace?: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_function: cdktf.stringToTerraform(struct!.aggregationFunction),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#flow_name LookoutmetricsAnomalyDetector#flow_name}
  */
  readonly flowName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
  */
  readonly roleArn: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flow_name: cdktf.stringToTerraform(struct!.flowName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
  */
  readonly roleArn: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}
  */
  readonly securityGroupIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}
  */
  readonly subnetIdList: string[];
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
    subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIdList),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_host LookoutmetricsAnomalyDetector#database_host}
  */
  readonly databaseHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_name LookoutmetricsAnomalyDetector#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_port LookoutmetricsAnomalyDetector#database_port}
  */
  readonly databasePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#db_instance_identifier LookoutmetricsAnomalyDetector#db_instance_identifier}
  */
  readonly dbInstanceIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}
  */
  readonly secretManagerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#table_name LookoutmetricsAnomalyDetector#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}
  */
  readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    db_instance_identifier: cdktf.stringToTerraform(struct!.dbInstanceIdentifier),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    vpc_configuration: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#security_group_id_list LookoutmetricsAnomalyDetector#security_group_id_list}
  */
  readonly securityGroupIdList: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#subnet_id_list LookoutmetricsAnomalyDetector#subnet_id_list}
  */
  readonly subnetIdList: string[];
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIdList),
    subnet_id_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIdList),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#cluster_identifier LookoutmetricsAnomalyDetector#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_host LookoutmetricsAnomalyDetector#database_host}
  */
  readonly databaseHost: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_name LookoutmetricsAnomalyDetector#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#database_port LookoutmetricsAnomalyDetector#database_port}
  */
  readonly databasePort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#secret_manager_arn LookoutmetricsAnomalyDetector#secret_manager_arn}
  */
  readonly secretManagerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#table_name LookoutmetricsAnomalyDetector#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#vpc_configuration LookoutmetricsAnomalyDetector#vpc_configuration}
  */
  readonly vpcConfiguration: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    database_host: cdktf.stringToTerraform(struct!.databaseHost),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    database_port: cdktf.numberToTerraform(struct!.databasePort),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_manager_arn: cdktf.stringToTerraform(struct!.secretManagerArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    vpc_configuration: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct!.vpcConfiguration),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#charset LookoutmetricsAnomalyDetector#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#contains_header LookoutmetricsAnomalyDetector#contains_header}
  */
  readonly containsHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#delimiter LookoutmetricsAnomalyDetector#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#file_compression LookoutmetricsAnomalyDetector#file_compression}
  */
  readonly fileCompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#header_list LookoutmetricsAnomalyDetector#header_list}
  */
  readonly headerList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#quote_symbol LookoutmetricsAnomalyDetector#quote_symbol}
  */
  readonly quoteSymbol?: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any {
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

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#charset LookoutmetricsAnomalyDetector#charset}
  */
  readonly charset?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#file_compression LookoutmetricsAnomalyDetector#file_compression}
  */
  readonly fileCompression?: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    charset: cdktf.stringToTerraform(struct!.charset),
    file_compression: cdktf.stringToTerraform(struct!.fileCompression),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#csv_format_descriptor LookoutmetricsAnomalyDetector#csv_format_descriptor}
  */
  readonly csvFormatDescriptor?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#json_format_descriptor LookoutmetricsAnomalyDetector#json_format_descriptor}
  */
  readonly jsonFormatDescriptor?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    csv_format_descriptor: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct!.csvFormatDescriptor),
    json_format_descriptor: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct!.jsonFormatDescriptor),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#file_format_descriptor LookoutmetricsAnomalyDetector#file_format_descriptor}
  */
  readonly fileFormatDescriptor: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#historical_data_path_list LookoutmetricsAnomalyDetector#historical_data_path_list}
  */
  readonly historicalDataPathList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#templated_path_list LookoutmetricsAnomalyDetector#templated_path_list}
  */
  readonly templatedPathList?: string[];
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_format_descriptor: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct!.fileFormatDescriptor),
    historical_data_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.historicalDataPathList),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    templated_path_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.templatedPathList),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#app_flow_config LookoutmetricsAnomalyDetector#app_flow_config}
  */
  readonly appFlowConfig?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#cloudwatch_config LookoutmetricsAnomalyDetector#cloudwatch_config}
  */
  readonly cloudwatchConfig?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#rds_source_config LookoutmetricsAnomalyDetector#rds_source_config}
  */
  readonly rdsSourceConfig?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#redshift_source_config LookoutmetricsAnomalyDetector#redshift_source_config}
  */
  readonly redshiftSourceConfig?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#s3_source_config LookoutmetricsAnomalyDetector#s3_source_config}
  */
  readonly s3SourceConfig?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
}

export function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_flow_config: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct!.appFlowConfig),
    cloudwatch_config: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
    rds_source_config: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct!.rdsSourceConfig),
    redshift_source_config: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct!.redshiftSourceConfig),
    s3_source_config: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct!.s3SourceConfig),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn {
  /**
  * A timestamp format for the timestamps in the dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#column_format LookoutmetricsAnomalyDetector#column_format}
  */
  readonly columnFormat?: string;
  /**
  * Name of a column in the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#column_name LookoutmetricsAnomalyDetector#column_name}
  */
  readonly columnName?: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_format: cdktf.stringToTerraform(struct!.columnFormat),
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}

export interface LookoutmetricsAnomalyDetectorMetricSetList {
  /**
  * Dimensions for this MetricSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#dimension_list LookoutmetricsAnomalyDetector#dimension_list}
  */
  readonly dimensionList?: string[];
  /**
  * Metrics captured by this MetricSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_list LookoutmetricsAnomalyDetector#metric_list}
  */
  readonly metricList: LookoutmetricsAnomalyDetectorMetricSetListMetricList[];
  /**
  * A description for the MetricSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_set_description LookoutmetricsAnomalyDetector#metric_set_description}
  */
  readonly metricSetDescription?: string;
  /**
  * A frequency period to aggregate the data
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_set_frequency LookoutmetricsAnomalyDetector#metric_set_frequency}
  */
  readonly metricSetFrequency?: string;
  /**
  * The name of the MetricSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_set_name LookoutmetricsAnomalyDetector#metric_set_name}
  */
  readonly metricSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#metric_source LookoutmetricsAnomalyDetector#metric_source}
  */
  readonly metricSource: LookoutmetricsAnomalyDetectorMetricSetListMetricSource;
  /**
  * Offset, in seconds, between the frequency interval and the time at which the metrics are available.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#offset LookoutmetricsAnomalyDetector#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#timestamp_column LookoutmetricsAnomalyDetector#timestamp_column}
  */
  readonly timestampColumn?: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#timezone LookoutmetricsAnomalyDetector#timezone}
  */
  readonly timezone?: string;
}

export function lookoutmetricsAnomalyDetectorMetricSetListToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_list: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dimensionList),
    metric_list: cdktf.listMapper(lookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform)(struct!.metricList),
    metric_set_description: cdktf.stringToTerraform(struct!.metricSetDescription),
    metric_set_frequency: cdktf.stringToTerraform(struct!.metricSetFrequency),
    metric_set_name: cdktf.stringToTerraform(struct!.metricSetName),
    metric_source: lookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct!.metricSource),
    offset: cdktf.numberToTerraform(struct!.offset),
    timestamp_column: lookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct!.timestampColumn),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector}
*/
export class LookoutmetricsAnomalyDetector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_lookoutmetrics_anomaly_detector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookoutmetricsAnomalyDetectorConfig
  */
  public constructor(scope: Construct, id: string, config: LookoutmetricsAnomalyDetectorConfig) {
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
    this._anomalyDetectorConfig = config.anomalyDetectorConfig;
    this._anomalyDetectorDescription = config.anomalyDetectorDescription;
    this._anomalyDetectorName = config.anomalyDetectorName;
    this._kmsKeyArn = config.kmsKeyArn;
    this._metricSetList = config.metricSetList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_detector_config - computed: false, optional: false, required: true
  private _anomalyDetectorConfig: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
  public get anomalyDetectorConfig() {
    return this.interpolationForAttribute('anomaly_detector_config') as any;
  }
  public set anomalyDetectorConfig(value: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig) {
    this._anomalyDetectorConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectorConfigInput() {
    return this._anomalyDetectorConfig
  }

  // anomaly_detector_description - computed: false, optional: true, required: false
  private _anomalyDetectorDescription?: string;
  public get anomalyDetectorDescription() {
    return this.getStringAttribute('anomaly_detector_description');
  }
  public set anomalyDetectorDescription(value: string ) {
    this._anomalyDetectorDescription = value;
  }
  public resetAnomalyDetectorDescription() {
    this._anomalyDetectorDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectorDescriptionInput() {
    return this._anomalyDetectorDescription
  }

  // anomaly_detector_name - computed: true, optional: true, required: false
  private _anomalyDetectorName?: string;
  public get anomalyDetectorName() {
    return this.getStringAttribute('anomaly_detector_name');
  }
  public set anomalyDetectorName(value: string) {
    this._anomalyDetectorName = value;
  }
  public resetAnomalyDetectorName() {
    this._anomalyDetectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectorNameInput() {
    return this._anomalyDetectorName
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string ) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // metric_set_list - computed: false, optional: false, required: true
  private _metricSetList: LookoutmetricsAnomalyDetectorMetricSetList[];
  public get metricSetList() {
    return this.interpolationForAttribute('metric_set_list') as any;
  }
  public set metricSetList(value: LookoutmetricsAnomalyDetectorMetricSetList[]) {
    this._metricSetList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSetListInput() {
    return this._metricSetList
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_detector_config: lookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(this._anomalyDetectorConfig),
      anomaly_detector_description: cdktf.stringToTerraform(this._anomalyDetectorDescription),
      anomaly_detector_name: cdktf.stringToTerraform(this._anomalyDetectorName),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      metric_set_list: cdktf.listMapper(lookoutmetricsAnomalyDetectorMetricSetListToTerraform)(this._metricSetList),
    };
  }
}
