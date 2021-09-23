// https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Kinesis stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#name KinesisStream#name}
  */
  readonly name?: string;
  /**
  * The number of hours for the data records that are stored in shards to remain accessible.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#retention_period_hours KinesisStream#retention_period_hours}
  */
  readonly retentionPeriodHours?: number;
  /**
  * The number of shards that the stream uses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
  */
  readonly shardCount: number;
  /**
  * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream. Removing this property from your stack template and updating your stack disables encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#stream_encryption KinesisStream#stream_encryption}
  */
  readonly streamEncryption?: KinesisStreamStreamEncryption;
  /**
  * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#tags KinesisStream#tags}
  */
  readonly tags?: KinesisStreamTags[];
}
export interface KinesisStreamStreamEncryption {
  /**
  * The encryption type to use. The only valid value is KMS. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#key_id KinesisStream#key_id}
  */
  readonly keyId: string;
}

export function kinesisStreamStreamEncryptionToTerraform(struct?: KinesisStreamStreamEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export interface KinesisStreamTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#key KinesisStream#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html#value KinesisStream#value}
  */
  readonly value: string;
}

export function kinesisStreamTagsToTerraform(struct?: KinesisStreamTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html awscc_kinesis_stream}
*/
export class KinesisStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kinesis_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kinesis_stream.html awscc_kinesis_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisStreamConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kinesis_stream',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._retentionPeriodHours = config.retentionPeriodHours;
    this._shardCount = config.shardCount;
    this._streamEncryption = config.streamEncryption;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // retention_period_hours - computed: false, optional: true, required: false
  private _retentionPeriodHours?: number;
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number ) {
    this._retentionPeriodHours = value;
  }
  public resetRetentionPeriodHours() {
    this._retentionPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours
  }

  // shard_count - computed: false, optional: false, required: true
  private _shardCount: number;
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount
  }

  // stream_encryption - computed: false, optional: true, required: false
  private _streamEncryption?: KinesisStreamStreamEncryption;
  public get streamEncryption() {
    return this.interpolationForAttribute('stream_encryption') as any;
  }
  public set streamEncryption(value: KinesisStreamStreamEncryption ) {
    this._streamEncryption = value;
  }
  public resetStreamEncryption() {
    this._streamEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEncryptionInput() {
    return this._streamEncryption
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KinesisStreamTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KinesisStreamTags[] ) {
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
      name: cdktf.stringToTerraform(this._name),
      retention_period_hours: cdktf.numberToTerraform(this._retentionPeriodHours),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      stream_encryption: kinesisStreamStreamEncryptionToTerraform(this._streamEncryption),
      tags: cdktf.listMapper(kinesisStreamTagsToTerraform)(this._tags),
    };
  }
}
