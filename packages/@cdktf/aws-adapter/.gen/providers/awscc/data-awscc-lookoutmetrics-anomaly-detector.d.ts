import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLookoutmetricsAnomalyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html#id DataAwsccLookoutmetricsAnomalyDetector#id}
    */
    readonly id: string;
}
export declare class DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig extends cdktf.ComplexComputedList {
    get anomalyDetectorFrequency(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList extends cdktf.ComplexComputedList {
    get aggregationFunction(): string;
    get metricName(): string;
    get namespace(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricList): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig extends cdktf.ComplexComputedList {
    get flowName(): string;
    get roleArn(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig extends cdktf.ComplexComputedList {
    get roleArn(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIdList(): string[];
    get subnetIdList(): string[];
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig extends cdktf.ComplexComputedList {
    get databaseHost(): string;
    get databaseName(): string;
    get databasePort(): number;
    get dbInstanceIdentifier(): string;
    get roleArn(): string;
    get secretManagerArn(): string;
    get tableName(): string;
    get vpcConfiguration(): any;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration extends cdktf.ComplexComputedList {
    get securityGroupIdList(): string[];
    get subnetIdList(): string[];
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig extends cdktf.ComplexComputedList {
    get clusterIdentifier(): string;
    get databaseHost(): string;
    get databaseName(): string;
    get databasePort(): number;
    get roleArn(): string;
    get secretManagerArn(): string;
    get tableName(): string;
    get vpcConfiguration(): any;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor extends cdktf.ComplexComputedList {
    get charset(): string;
    get containsHeader(): any;
    get delimiter(): string;
    get fileCompression(): string;
    get headerList(): string[];
    get quoteSymbol(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor extends cdktf.ComplexComputedList {
    get charset(): string;
    get fileCompression(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor extends cdktf.ComplexComputedList {
    get csvFormatDescriptor(): any;
    get jsonFormatDescriptor(): any;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig extends cdktf.ComplexComputedList {
    get fileFormatDescriptor(): any;
    get historicalDataPathList(): string[];
    get roleArn(): string;
    get templatedPathList(): string[];
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource extends cdktf.ComplexComputedList {
    get appFlowConfig(): any;
    get cloudwatchConfig(): any;
    get rdsSourceConfig(): any;
    get redshiftSourceConfig(): any;
    get s3SourceConfig(): any;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn extends cdktf.ComplexComputedList {
    get columnFormat(): string;
    get columnName(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn): any;
export declare class DataAwsccLookoutmetricsAnomalyDetectorMetricSetList extends cdktf.ComplexComputedList {
    get dimensionList(): string[];
    get metricList(): any;
    get metricSetDescription(): string;
    get metricSetFrequency(): string;
    get metricSetName(): string;
    get metricSource(): any;
    get offset(): number;
    get timestampColumn(): any;
    get timezone(): string;
}
export declare function dataAwsccLookoutmetricsAnomalyDetectorMetricSetListToTerraform(struct?: DataAwsccLookoutmetricsAnomalyDetectorMetricSetList): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector}
*/
export declare class DataAwsccLookoutmetricsAnomalyDetector extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/lookoutmetrics_anomaly_detector.html awscc_lookoutmetrics_anomaly_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLookoutmetricsAnomalyDetectorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLookoutmetricsAnomalyDetectorConfig);
    get anomalyDetectorConfig(): any;
    get anomalyDetectorDescription(): string;
    get anomalyDetectorName(): string;
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyArn(): string;
    get metricSetList(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
