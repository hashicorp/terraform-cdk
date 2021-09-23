// https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html#id DataAwsccCloudwatchMetricStream#id}
  */
  readonly id: string;
}
export class DataAwsccCloudwatchMetricStreamExcludeFilters extends cdktf.ComplexComputedList {

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export function dataAwsccCloudwatchMetricStreamExcludeFiltersToTerraform(struct?: DataAwsccCloudwatchMetricStreamExcludeFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataAwsccCloudwatchMetricStreamIncludeFilters extends cdktf.ComplexComputedList {

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export function dataAwsccCloudwatchMetricStreamIncludeFiltersToTerraform(struct?: DataAwsccCloudwatchMetricStreamIncludeFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataAwsccCloudwatchMetricStreamTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCloudwatchMetricStreamTagsToTerraform(struct?: DataAwsccCloudwatchMetricStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream}
*/
export class DataAwsccCloudwatchMetricStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudwatch_metric_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudwatchMetricStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudwatchMetricStreamConfig) {
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
    this._id = config.id;
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

  // exclude_filters - computed: true, optional: false, required: false
  public get excludeFilters() {
    return this.interpolationForAttribute('exclude_filters') as any;
  }

  // firehose_arn - computed: true, optional: false, required: false
  public get firehoseArn() {
    return this.getStringAttribute('firehose_arn');
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

  // include_filters - computed: true, optional: false, required: false
  public get includeFilters() {
    return this.interpolationForAttribute('include_filters') as any;
  }

  // last_update_date - computed: true, optional: false, required: false
  public get lastUpdateDate() {
    return this.getStringAttribute('last_update_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_format - computed: true, optional: false, required: false
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
