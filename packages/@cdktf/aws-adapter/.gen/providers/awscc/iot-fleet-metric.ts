// https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function iotFleetMetricAggregationTypeToTerraform(struct?: IotFleetMetricAggregationType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function iotFleetMetricTagsToTerraform(struct?: IotFleetMetricTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html awscc_iot_fleet_metric}
*/
export class IotFleetMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_fleet_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_fleet_metric.html awscc_iot_fleet_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotFleetMetricConfig
  */
  public constructor(scope: Construct, id: string, config: IotFleetMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_fleet_metric',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aggregationField = config.aggregationField;
    this._aggregationType = config.aggregationType;
    this._description = config.description;
    this._indexName = config.indexName;
    this._metricName = config.metricName;
    this._period = config.period;
    this._queryString = config.queryString;
    this._queryVersion = config.queryVersion;
    this._tags = config.tags;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_field - computed: false, optional: true, required: false
  private _aggregationField?: string;
  public get aggregationField() {
    return this.getStringAttribute('aggregation_field');
  }
  public set aggregationField(value: string ) {
    this._aggregationField = value;
  }
  public resetAggregationField() {
    this._aggregationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationFieldInput() {
    return this._aggregationField
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: IotFleetMetricAggregationType;
  public get aggregationType() {
    return this.interpolationForAttribute('aggregation_type') as any;
  }
  public set aggregationType(value: IotFleetMetricAggregationType ) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_name - computed: false, optional: true, required: false
  private _indexName?: string;
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string ) {
    this._indexName = value;
  }
  public resetIndexName() {
    this._indexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getNumberAttribute('last_modified_date');
  }

  // metric_arn - computed: true, optional: false, required: false
  public get metricArn() {
    return this.getStringAttribute('metric_arn');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // period - computed: false, optional: true, required: false
  private _period?: number;
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number ) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string;
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string ) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // query_version - computed: false, optional: true, required: false
  private _queryVersion?: string;
  public get queryVersion() {
    return this.getStringAttribute('query_version');
  }
  public set queryVersion(value: string ) {
    this._queryVersion = value;
  }
  public resetQueryVersion() {
    this._queryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryVersionInput() {
    return this._queryVersion
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotFleetMetricTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotFleetMetricTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string;
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string ) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_field: cdktf.stringToTerraform(this._aggregationField),
      aggregation_type: iotFleetMetricAggregationTypeToTerraform(this._aggregationType),
      description: cdktf.stringToTerraform(this._description),
      index_name: cdktf.stringToTerraform(this._indexName),
      metric_name: cdktf.stringToTerraform(this._metricName),
      period: cdktf.numberToTerraform(this._period),
      query_string: cdktf.stringToTerraform(this._queryString),
      query_version: cdktf.stringToTerraform(this._queryVersion),
      tags: cdktf.listMapper(iotFleetMetricTagsToTerraform)(this._tags),
      unit: cdktf.stringToTerraform(this._unit),
    };
  }
}
