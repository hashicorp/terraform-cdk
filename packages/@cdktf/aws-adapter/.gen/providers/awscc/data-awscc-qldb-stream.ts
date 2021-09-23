// https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccQldbStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html#id DataAwsccQldbStream#id}
  */
  readonly id: string;
}
export class DataAwsccQldbStreamKinesisConfiguration extends cdktf.ComplexComputedList {

  // aggregation_enabled - computed: true, optional: false, required: false
  public get aggregationEnabled() {
    return this.getBooleanAttribute('aggregation_enabled');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}

export function dataAwsccQldbStreamKinesisConfigurationToTerraform(struct?: DataAwsccQldbStreamKinesisConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_enabled: cdktf.booleanToTerraform(struct!.aggregationEnabled),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class DataAwsccQldbStreamTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccQldbStreamTagsToTerraform(struct?: DataAwsccQldbStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html awscc_qldb_stream}
*/
export class DataAwsccQldbStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_qldb_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/qldb_stream.html awscc_qldb_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQldbStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQldbStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_qldb_stream',
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

  // exclusive_end_time - computed: true, optional: false, required: false
  public get exclusiveEndTime() {
    return this.getStringAttribute('exclusive_end_time');
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

  // inclusive_start_time - computed: true, optional: false, required: false
  public get inclusiveStartTime() {
    return this.getStringAttribute('inclusive_start_time');
  }

  // kinesis_configuration - computed: true, optional: false, required: false
  public get kinesisConfiguration() {
    return this.interpolationForAttribute('kinesis_configuration') as any;
  }

  // ledger_name - computed: true, optional: false, required: false
  public get ledgerName() {
    return this.getStringAttribute('ledger_name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
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
