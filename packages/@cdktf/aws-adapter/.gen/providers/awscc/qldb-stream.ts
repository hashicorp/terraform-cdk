// https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QldbStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#exclusive_end_time QldbStream#exclusive_end_time}
  */
  readonly exclusiveEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#inclusive_start_time QldbStream#inclusive_start_time}
  */
  readonly inclusiveStartTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#kinesis_configuration QldbStream#kinesis_configuration}
  */
  readonly kinesisConfiguration: QldbStreamKinesisConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#ledger_name QldbStream#ledger_name}
  */
  readonly ledgerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#role_arn QldbStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#stream_name QldbStream#stream_name}
  */
  readonly streamName: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#tags QldbStream#tags}
  */
  readonly tags?: QldbStreamTags[];
}
export interface QldbStreamKinesisConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#aggregation_enabled QldbStream#aggregation_enabled}
  */
  readonly aggregationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#stream_arn QldbStream#stream_arn}
  */
  readonly streamArn?: string;
}

export function qldbStreamKinesisConfigurationToTerraform(struct?: QldbStreamKinesisConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_enabled: cdktf.booleanToTerraform(struct!.aggregationEnabled),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export interface QldbStreamTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#key QldbStream#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html#value QldbStream#value}
  */
  readonly value: string;
}

export function qldbStreamTagsToTerraform(struct?: QldbStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html awscc_qldb_stream}
*/
export class QldbStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_qldb_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/qldb_stream.html awscc_qldb_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QldbStreamConfig
  */
  public constructor(scope: Construct, id: string, config: QldbStreamConfig) {
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
    this._exclusiveEndTime = config.exclusiveEndTime;
    this._inclusiveStartTime = config.inclusiveStartTime;
    this._kinesisConfiguration = config.kinesisConfiguration;
    this._ledgerName = config.ledgerName;
    this._roleArn = config.roleArn;
    this._streamName = config.streamName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // exclusive_end_time - computed: true, optional: true, required: false
  private _exclusiveEndTime?: string;
  public get exclusiveEndTime() {
    return this.getStringAttribute('exclusive_end_time');
  }
  public set exclusiveEndTime(value: string) {
    this._exclusiveEndTime = value;
  }
  public resetExclusiveEndTime() {
    this._exclusiveEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveEndTimeInput() {
    return this._exclusiveEndTime
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inclusive_start_time - computed: false, optional: false, required: true
  private _inclusiveStartTime: string;
  public get inclusiveStartTime() {
    return this.getStringAttribute('inclusive_start_time');
  }
  public set inclusiveStartTime(value: string) {
    this._inclusiveStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusiveStartTimeInput() {
    return this._inclusiveStartTime
  }

  // kinesis_configuration - computed: false, optional: false, required: true
  private _kinesisConfiguration: QldbStreamKinesisConfiguration;
  public get kinesisConfiguration() {
    return this.interpolationForAttribute('kinesis_configuration') as any;
  }
  public set kinesisConfiguration(value: QldbStreamKinesisConfiguration) {
    this._kinesisConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisConfigurationInput() {
    return this._kinesisConfiguration
  }

  // ledger_name - computed: false, optional: false, required: true
  private _ledgerName: string;
  public get ledgerName() {
    return this.getStringAttribute('ledger_name');
  }
  public set ledgerName(value: string) {
    this._ledgerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ledgerNameInput() {
    return this._ledgerName
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName: string;
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: QldbStreamTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: QldbStreamTags[] ) {
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
      exclusive_end_time: cdktf.stringToTerraform(this._exclusiveEndTime),
      inclusive_start_time: cdktf.stringToTerraform(this._inclusiveStartTime),
      kinesis_configuration: qldbStreamKinesisConfigurationToTerraform(this._kinesisConfiguration),
      ledger_name: cdktf.stringToTerraform(this._ledgerName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stream_name: cdktf.stringToTerraform(this._streamName),
      tags: cdktf.listMapper(qldbStreamTagsToTerraform)(this._tags),
    };
  }
}
