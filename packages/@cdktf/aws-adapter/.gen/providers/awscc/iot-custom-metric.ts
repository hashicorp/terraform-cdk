// https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotCustomMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#display_name IotCustomMetric#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#metric_name IotCustomMetric#metric_name}
  */
  readonly metricName?: string;
  /**
  * The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#metric_type IotCustomMetric#metric_type}
  */
  readonly metricType: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#tags IotCustomMetric#tags}
  */
  readonly tags?: IotCustomMetricTags[];
}
export interface IotCustomMetricTags {
  /**
  * The tag's key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#key IotCustomMetric#key}
  */
  readonly key: string;
  /**
  * The tag's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#value IotCustomMetric#value}
  */
  readonly value: string;
}

export function iotCustomMetricTagsToTerraform(struct?: IotCustomMetricTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html awscc_iot_custom_metric}
*/
export class IotCustomMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_custom_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html awscc_iot_custom_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotCustomMetricConfig
  */
  public constructor(scope: Construct, id: string, config: IotCustomMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_custom_metric',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric_arn - computed: true, optional: false, required: false
  public get metricArn() {
    return this.getStringAttribute('metric_arn');
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string;
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType: string;
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotCustomMetricTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotCustomMetricTags[] ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      tags: cdktf.listMapper(iotCustomMetricTagsToTerraform)(this._tags),
    };
  }
}
