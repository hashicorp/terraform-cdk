import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function lookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricList): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any;
export interface LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html#role_arn LookoutmetricsAnomalyDetector#role_arn}
    */
    readonly roleArn: string;
}
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListMetricSource): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any;
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
export declare function lookoutmetricsAnomalyDetectorMetricSetListToTerraform(struct?: LookoutmetricsAnomalyDetectorMetricSetList): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector}
*/
export declare class LookoutmetricsAnomalyDetector extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LookoutmetricsAnomalyDetectorConfig
    */
    constructor(scope: Construct, id: string, config: LookoutmetricsAnomalyDetectorConfig);
    private _anomalyDetectorConfig;
    get anomalyDetectorConfig(): LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
    set anomalyDetectorConfig(value: LookoutmetricsAnomalyDetectorAnomalyDetectorConfig);
    get anomalyDetectorConfigInput(): LookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
    private _anomalyDetectorDescription?;
    get anomalyDetectorDescription(): string;
    set anomalyDetectorDescription(value: string);
    resetAnomalyDetectorDescription(): void;
    get anomalyDetectorDescriptionInput(): string | undefined;
    private _anomalyDetectorName?;
    get anomalyDetectorName(): string;
    set anomalyDetectorName(value: string);
    resetAnomalyDetectorName(): void;
    get anomalyDetectorNameInput(): string | undefined;
    get arn(): string;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _metricSetList;
    get metricSetList(): LookoutmetricsAnomalyDetectorMetricSetList[];
    set metricSetList(value: LookoutmetricsAnomalyDetectorMetricSetList[]);
    get metricSetListInput(): LookoutmetricsAnomalyDetectorMetricSetList[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
