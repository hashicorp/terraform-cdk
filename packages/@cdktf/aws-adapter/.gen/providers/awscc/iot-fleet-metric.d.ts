import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotFleetMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * The aggregation field to perform aggregation and metric emission
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#aggregation_field IotFleetMetric#aggregation_field}
    */
    readonly aggregationField?: string;
    /**
    * Aggregation types supported by Fleet Indexing
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#aggregation_type IotFleetMetric#aggregation_type}
    */
    readonly aggregationType?: IotFleetMetricAggregationType;
    /**
    * The description of a fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#description IotFleetMetric#description}
    */
    readonly description?: string;
    /**
    * The index name of a fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#index_name IotFleetMetric#index_name}
    */
    readonly indexName?: string;
    /**
    * The name of the fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#metric_name IotFleetMetric#metric_name}
    */
    readonly metricName: string;
    /**
    * The period of metric emission in seconds
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#period IotFleetMetric#period}
    */
    readonly period?: number;
    /**
    * The Fleet Indexing query used by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#query_string IotFleetMetric#query_string}
    */
    readonly queryString?: string;
    /**
    * The version of a Fleet Indexing query used by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#query_version IotFleetMetric#query_version}
    */
    readonly queryVersion?: string;
    /**
    * An array of key-value pairs to apply to this resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#tags IotFleetMetric#tags}
    */
    readonly tags?: IotFleetMetricTags[];
    /**
    * The unit of data points emitted by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#unit IotFleetMetric#unit}
    */
    readonly unit?: string;
}
export interface IotFleetMetricAggregationType {
    /**
    * Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#name IotFleetMetric#name}
    */
    readonly name: string;
    /**
    * Fleet Indexing aggregation type values
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#values IotFleetMetric#values}
    */
    readonly values: string[];
}
export declare function iotFleetMetricAggregationTypeToTerraform(struct?: IotFleetMetricAggregationType): any;
export interface IotFleetMetricTags {
    /**
    * The tag's key
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#key IotFleetMetric#key}
    */
    readonly key: string;
    /**
    * The tag's value
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html#value IotFleetMetric#value}
    */
    readonly value: string;
}
export declare function iotFleetMetricTagsToTerraform(struct?: IotFleetMetricTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html awscc_iot_fleet_metric}
*/
export declare class IotFleetMetric extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html awscc_iot_fleet_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotFleetMetricConfig
    */
    constructor(scope: Construct, id: string, config: IotFleetMetricConfig);
    private _aggregationField?;
    get aggregationField(): string;
    set aggregationField(value: string);
    resetAggregationField(): void;
    get aggregationFieldInput(): string | undefined;
    private _aggregationType?;
    get aggregationType(): IotFleetMetricAggregationType;
    set aggregationType(value: IotFleetMetricAggregationType);
    resetAggregationType(): void;
    get aggregationTypeInput(): IotFleetMetricAggregationType | undefined;
    get creationDate(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    resetIndexName(): void;
    get indexNameInput(): string | undefined;
    get lastModifiedDate(): number;
    get metricArn(): string;
    private _metricName;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number | undefined;
    private _queryString?;
    get queryString(): string;
    set queryString(value: string);
    resetQueryString(): void;
    get queryStringInput(): string | undefined;
    private _queryVersion?;
    get queryVersion(): string;
    set queryVersion(value: string);
    resetQueryVersion(): void;
    get queryVersionInput(): string | undefined;
    private _tags?;
    get tags(): IotFleetMetricTags[];
    set tags(value: IotFleetMetricTags[]);
    resetTags(): void;
    get tagsInput(): IotFleetMetricTags[] | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
