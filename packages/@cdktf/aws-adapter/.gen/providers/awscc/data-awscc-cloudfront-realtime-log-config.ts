// https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html#id DataAwsccCloudfrontRealtimeLogConfig#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig extends cdktf.ComplexComputedList {

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}

export function dataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigToTerraform(struct?: DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class DataAwsccCloudfrontRealtimeLogConfigEndPoints extends cdktf.ComplexComputedList {

  // kinesis_stream_config - computed: true, optional: false, required: false
  public get kinesisStreamConfig() {
    return this.interpolationForAttribute('kinesis_stream_config') as any;
  }

  // stream_type - computed: true, optional: false, required: false
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }
}

export function dataAwsccCloudfrontRealtimeLogConfigEndPointsToTerraform(struct?: DataAwsccCloudfrontRealtimeLogConfigEndPoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kinesis_stream_config: dataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigToTerraform(struct!.kinesisStreamConfig),
    stream_type: cdktf.stringToTerraform(struct!.streamType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config}
*/
export class DataAwsccCloudfrontRealtimeLogConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_realtime_log_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontRealtimeLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontRealtimeLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_realtime_log_config',
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

  // end_points - computed: true, optional: false, required: false
  public get endPoints() {
    return this.interpolationForAttribute('end_points') as any;
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return this.getListAttribute('fields');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
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
