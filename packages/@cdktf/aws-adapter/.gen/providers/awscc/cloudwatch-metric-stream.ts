// https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#exclude_filters CloudwatchMetricStream#exclude_filters}
  */
  readonly excludeFilters?: CloudwatchMetricStreamExcludeFilters[];
  /**
  * The ARN of the Kinesis Firehose where to stream the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#firehose_arn CloudwatchMetricStream#firehose_arn}
  */
  readonly firehoseArn: string;
  /**
  * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#include_filters CloudwatchMetricStream#include_filters}
  */
  readonly includeFilters?: CloudwatchMetricStreamIncludeFilters[];
  /**
  * Name of the metric stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#name CloudwatchMetricStream#name}
  */
  readonly name?: string;
  /**
  * The output format of the data streamed to the Kinesis Firehose.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#output_format CloudwatchMetricStream#output_format}
  */
  readonly outputFormat: string;
  /**
  * The ARN of the role that provides access to the Kinesis Firehose.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#role_arn CloudwatchMetricStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * A set of tags to assign to the delivery stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#tags CloudwatchMetricStream#tags}
  */
  readonly tags?: CloudwatchMetricStreamTags[];
}
export interface CloudwatchMetricStreamExcludeFilters {
  /**
  * Only metrics with Namespace matching this value will be streamed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchMetricStreamExcludeFiltersToTerraform(struct?: CloudwatchMetricStreamExcludeFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudwatchMetricStreamIncludeFilters {
  /**
  * Only metrics with Namespace matching this value will be streamed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
  */
  readonly namespace: string;
}

export function cloudwatchMetricStreamIncludeFiltersToTerraform(struct?: CloudwatchMetricStreamIncludeFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudwatchMetricStreamTags {
  /**
  * A unique identifier for the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#key CloudwatchMetricStream#key}
  */
  readonly key: string;
  /**
  * An optional string, which you can use to describe or define the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#value CloudwatchMetricStream#value}
  */
  readonly value?: string;
}

export function cloudwatchMetricStreamTagsToTerraform(struct?: CloudwatchMetricStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream}
*/
export class CloudwatchMetricStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudwatch_metric_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchMetricStreamConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_metric_stream',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._excludeFilters = config.excludeFilters;
    this._firehoseArn = config.firehoseArn;
    this._includeFilters = config.includeFilters;
    this._name = config.name;
    this._outputFormat = config.outputFormat;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // exclude_filters - computed: false, optional: true, required: false
  private _excludeFilters?: CloudwatchMetricStreamExcludeFilters[];
  public get excludeFilters() {
    return this.interpolationForAttribute('exclude_filters') as any;
  }
  public set excludeFilters(value: CloudwatchMetricStreamExcludeFilters[] ) {
    this._excludeFilters = value;
  }
  public resetExcludeFilters() {
    this._excludeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFiltersInput() {
    return this._excludeFilters
  }

  // firehose_arn - computed: false, optional: false, required: true
  private _firehoseArn: string;
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
  }
  public set firehoseArn(value: string) {
    this._firehoseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseArnInput() {
    return this._firehoseArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filters - computed: false, optional: true, required: false
  private _includeFilters?: CloudwatchMetricStreamIncludeFilters[];
  public get includeFilters() {
    return this.interpolationForAttribute('include_filters') as any;
  }
  public set includeFilters(value: CloudwatchMetricStreamIncludeFilters[] ) {
    this._includeFilters = value;
  }
  public resetIncludeFilters() {
    this._includeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFiltersInput() {
    return this._includeFilters
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output_format - computed: false, optional: false, required: true
  private _outputFormat: string;
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CloudwatchMetricStreamTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CloudwatchMetricStreamTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_filters: cdktf.listMapper(cloudwatchMetricStreamExcludeFiltersToTerraform)(this._excludeFilters),
      firehose_arn: cdktf.stringToTerraform(this._firehoseArn),
      include_filters: cdktf.listMapper(cloudwatchMetricStreamIncludeFiltersToTerraform)(this._includeFilters),
      name: cdktf.stringToTerraform(this._name),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(cloudwatchMetricStreamTagsToTerraform)(this._tags),
    };
  }
}
